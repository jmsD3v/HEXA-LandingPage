import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          message: 'Validation failed: Name, email, and message are required.',
        },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: 'Validation failed: Invalid email format.' },
        { status: 400 }
      );
    }

    const emailHtml = `
      <div>
        <h1>Nuevo mensaje de contacto de HesaServicios.com</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <hr>
        <h2>Mensaje:</h2>
        <p>${message}</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Hesa Servicios <web@hexaservicios.com>',
      to: ['contacto@hexaservicios.com'],
      subject: `Nuevo mensaje de contacto de: ${name}`,
      html: emailHtml,
      reply_to: email,
    });

    if (error) {
      console.error('Error sending email with Resend:', error);
      return NextResponse.json({ message: 'Error sending email.', error }, { status: 500 });
    }

    return NextResponse.json(
      { message: 'Message sent successfully!', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'Internal Server Error. Failed to process message.' },
      { status: 500 }
    );
  }
}
