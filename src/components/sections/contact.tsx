'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';
import Script from 'next/script';
import { social } from '@/data/social';
import { Icon } from '@iconify/react';

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: Record<string, unknown>,
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileReady, setTurnstileReady] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';
  const submittedAtRef = useRef<number>(Date.now());

  useEffect(() => {
    if (!turnstileReady || !siteKey || !turnstileRef.current) return;
    if (!window.turnstile || widgetIdRef.current) return;

    widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
      sitekey: siteKey,
      callback: (token: string) => setTurnstileToken(token),
      'expired-callback': () => setTurnstileToken(''),
      'error-callback': () => setTurnstileToken(''),
      theme: 'dark',
    });

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [turnstileReady, siteKey]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setFormStatus('');

    const formData = {
      name,
      email,
      phone,
      message,
      company,
      turnstileToken,
      submittedAt: submittedAtRef.current,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setTurnstileToken('');
        submittedAtRef.current = Date.now();
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current);
        }
      } else {
        const errorData = await response.json();
        setFormStatus('error');
        console.error(
          'Error sending message:',
          errorData.message || 'Server error',
        );
      }
    } catch (error) {
      setFormStatus('error');
      console.error('Network or other error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        className='bg-primary min-h-[100dvh] py-10 flex items-center text-white px-4 md:px-10 lg:px-20'
        data-aos='fade-up'
        data-aos-duration={1000}
        data-aos-easing='ease-in-out'
      >
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-balance'>
          {/*<!-- Left Side: Contact Details -->*/}
          <div>
            <h2 className='text-3xl md:text-4xl font-bold leading-tight'>
              Tenes algún proyecto en mente? <br />
              <span className='text-gray-300'>
                Por favor déjanos un mensaje.
              </span>
            </h2>
            <p className='mt-4 text-gray-400'>
              Dejanos saber cómo ayudarte. Completa el formulario y nos
              pondremos en contacto contigo lo antes posible.
            </p>

            <div className='mt-6 space-y-4'>
              <div className='flex items-start space-x-4'>
                <span className='text-xl text-gray-400'>📍</span>
                <div>
                  <p className='font-semibold'>Dirección:</p>
                  <p className='text-gray-400'>
                    José Hernandez 938, Resistencia, Chaco.
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <span className='text-xl text-gray-400'>📞</span>
                <div>
                  <p className='font-semibold'>Teléfono:</p>
                  <p className='text-gray-400'> +54 362 430 6820 </p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <span className='text-xl text-gray-400'>📞</span>
                <div>
                  <p className='font-semibold'>Teléfono Servicio Técnico:</p>
                  <p className='text-gray-400'> +54 362 466 6877 </p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <span className='text-xl text-gray-400'>✉️</span>
                <div>
                  <p className='font-semibold'>Email:</p>
                  <p className='text-gray-400'>contacto@hexaservicios.com</p>
                </div>
              </div>
            </div>

            {/*<!-- Social Icons -->*/}
            <div className='mt-6 flex justify-center lg:justify-start gap-4'>
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={item.name}
                  className='text-neutral-200 hover:text-purple-500 transition-colors'
                >
                  <span className='sr-only'>{item.name}</span>
                  <Icon icon={item.icon} className='size-8' />
                </a>
              ))}
            </div>
          </div>

          {/*<!-- Right Side: Contact Form -->*/}
          <div className='bg-gray-800 p-8 rounded-xl shadow-lg'>
            <Script
              src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
              strategy='afterInteractive'
              onLoad={() => setTurnstileReady(true)}
            />
            <form onSubmit={handleSubmit}>
              <div className='hidden' aria-hidden='true'>
                <label htmlFor='company'>Company</label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  tabIndex={-1}
                  autoComplete='off'
                />
                <input
                  type='hidden'
                  name='submittedAt'
                  value={submittedAtRef.current}
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-gray-400 mb-2'>
                  Nombre
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='e.j. Juan Perez'
                  className='w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none focus:border-purple-500'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete='name'
                  required
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-400 mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='e.j. juanperez@mail.com'
                  className='w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none focus:border-purple-500'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete='email'
                  required
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='phone' className='block text-gray-400 mb-2'>
                  Teléfono
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  placeholder='Número de Teléfono (Opcional)'
                  className='w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none focus:border-purple-500'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete='tel'
                />
              </div>

              <div className='mb-4'>
                <label htmlFor='message' className='block text-gray-400 mb-2'>
                  Mensaje
                </label>
                <textarea
                  id='message'
                  name='message'
                  placeholder='Escriba su mensaje...'
                  className='w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none h-24 focus:border-purple-500'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  autoComplete='off'
                  required
                ></textarea>
              </div>

              <div className='mb-4'>
                <div ref={turnstileRef} />
                {!siteKey && (
                  <p className='mt-2 text-sm text-red-400'>
                    Falta configurar TURNSTILE_SITE_KEY.
                  </p>
                )}
              </div>

              {formStatus === 'success' && (
                <p className='mb-4 text-green-500'>
                  Mensaje enviado con éxito!
                </p>
              )}
              {formStatus === 'error' && (
                <p className='mb-4 text-red-500'>
                  Hubo un error al enviar el mensaje. Inténtalo de nuevo.
                </p>
              )}

              <button
                type='submit'
                className='w-full bg-white text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-300 transition disabled:opacity-50'
                disabled={loading || !turnstileToken}
              >
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
