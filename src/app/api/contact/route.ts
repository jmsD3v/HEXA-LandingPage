export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { createRateLimiter } from '@/lib/rateLimit';

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5;
const isRateLimited = createRateLimiter({
  windowMs: RATE_LIMIT_WINDOW_MS,
  max: RATE_LIMIT_MAX,
});

const STRIKE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const STRIKE_MAX = 5;
const strikeStore = new Map<string, { count: number; resetAt: number }>();

const isStrikeBlocked = (ip: string) => {
  const entry = strikeStore.get(ip);
  return Boolean(
    entry && entry.resetAt > Date.now() && entry.count >= STRIKE_MAX,
  );
};

const registerStrike = (ip: string) => {
  const now = Date.now();
  const entry = strikeStore.get(ip);

  if (!entry || entry.resetAt <= now) {
    strikeStore.set(ip, { count: 1, resetAt: now + STRIKE_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  strikeStore.set(ip, entry);
  return entry.count >= STRIKE_MAX;
};

const MIN_SUBMIT_MS = 1200;
const MAX_CONTENT_LENGTH = 20 * 1024; // 20 KB

const escapeHtml = (str: string) => {
  if (!str) return '';
  return str.replace(/[&<>"']/g, (tag) => {
    const chars: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return chars[tag] || tag;
  });
};

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  phone: z.string().max(50).optional().or(z.literal('')),
  message: z.string().min(1).max(2000),
  company: z.string().optional().or(z.literal('')),
  turnstileToken: z.string().min(1),
  submittedAt: z.number().int().positive(),
});

export async function POST(request: Request) {
  try {
    const requestId = crypto.randomUUID();
    const userAgent = request.headers.get('user-agent') || '';
    const uaLower = userAgent.toLowerCase();
    const suspiciousUaPatterns = [
      'curl',
      'wget',
      'python-requests',
      'httpclient',
      'postman',
      'insomnia',
      'headless',
      'phantom',
      'selenium',
      'bot',
      'spider',
      'crawler',
    ];
    const isSuspiciousUa = suspiciousUaPatterns.some((p) =>
      uaLower.includes(p),
    );

    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (isStrikeBlocked(ip)) {
      console.warn('Contact form: strike blocked', { requestId, ip });
      return NextResponse.json(
        { message: 'Too many suspicious requests. Please try again later.' },
        { status: 429 },
      );
    }

    const contentLength = request.headers.get('content-length');
    if (contentLength && Number(contentLength) > MAX_CONTENT_LENGTH) {
      console.warn('Contact form: payload too large', { requestId, ip });
      return NextResponse.json(
        { message: 'Payload too large.' },
        { status: 413 },
      );
    }

    if (!userAgent.trim()) {
      console.warn('Contact form: empty User-Agent', { requestId, ip });
      if (registerStrike(ip)) {
        return NextResponse.json(
          { message: 'Too many suspicious requests. Please try again later.' },
          { status: 429 },
        );
      }
      return NextResponse.json({ message: 'Spam detected.' }, { status: 400 });
    }

    if (isSuspiciousUa) {
      console.warn('Contact form: suspicious User-Agent', {
        requestId,
        ip,
        userAgent,
      });
    }

    const origin = request.headers.get('origin');
    const host = request.headers.get('host');

    if (origin && host) {
      const originHost = new URL(origin).host;
      if (originHost !== host) {
        return NextResponse.json(
          { message: 'Forbidden origin.' },
          { status: 403 },
        );
      }
    }

    if (isRateLimited(ip)) {
      console.warn('Contact form: rate limit', { requestId, ip });
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        { status: 429 },
      );
    }

    const payload = await request.json();

    const validationResult = contactSchema.safeParse(payload);
    if (!validationResult.success) {
      console.warn('Contact form: validation failed', {
        requestId,
        ip,
        issues: validationResult.error.issues,
      });
      if (registerStrike(ip)) {
        return NextResponse.json(
          { message: 'Too many suspicious requests. Please try again later.' },
          { status: 429 },
        );
      }
      return NextResponse.json(
        {
          message: 'Validation failed.',
          errors: validationResult.error.issues,
        },
        { status: 400 },
      );
    }

    const {
      name,
      email,
      phone,
      message,
      company,
      turnstileToken,
      submittedAt,
    } = validationResult.data;

    if (company) {
      console.warn('Contact form: honeypot triggered', { requestId, ip });
      if (registerStrike(ip)) {
        return NextResponse.json(
          { message: 'Too many suspicious requests. Please try again later.' },
          { status: 429 },
        );
      }
      return NextResponse.json({ message: 'Spam detected.' }, { status: 400 });
    }

    if (Date.now() - submittedAt < MIN_SUBMIT_MS) {
      console.warn('Contact form: too fast submit', { requestId, ip });
      if (registerStrike(ip)) {
        return NextResponse.json(
          { message: 'Too many suspicious requests. Please try again later.' },
          { status: 429 },
        );
      }
      return NextResponse.json({ message: 'Spam detected.' }, { status: 400 });
    }

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) {
      return NextResponse.json(
        { message: 'Server misconfigured: missing Turnstile secret.' },
        { status: 500 },
      );
    }

    const verifyResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: turnstileSecret,
          response: turnstileToken,
          ...(ip !== 'unknown' ? { remoteip: ip } : {}),
        }).toString(),
      },
    );

    const verifyData = (await verifyResponse.json()) as {
      success: boolean;
      'error-codes'?: string[];
    };

    if (!verifyData.success) {
      console.warn('Contact form: turnstile failed', {
        requestId,
        ip,
        errorCodes: verifyData['error-codes'],
      });
      if (registerStrike(ip)) {
        return NextResponse.json(
          { message: 'Too many suspicious requests. Please try again later.' },
          { status: 429 },
        );
      }
      return NextResponse.json(
        { message: 'Turnstile validation failed.' },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone ?? '');
    const safeMessage = escapeHtml(message);

    const emailHtml = `
      <div>
        <h1>Nuevo mensaje de contacto de HexaServicios.com</h1>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Teléfono:</strong> ${safePhone || 'No proporcionado'}</p>
        <hr>
        <h2>Mensaje:</h2>
        <p>${safeMessage}</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Hesa Servicios <web@hexaservicios.com>',
      to: ['contacto@hexaservicios.com'],
      subject: `Nuevo mensaje de contacto de: ${safeName}`,
      html: emailHtml,
      replyTo: email,
    });

    if (error) {
      console.error('Error sending email with Resend:', error);
      return NextResponse.json(
        { message: 'Error sending email.', error },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully!', data },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'Internal Server Error. Failed to process message.' },
      { status: 500 },
    );
  }
}
