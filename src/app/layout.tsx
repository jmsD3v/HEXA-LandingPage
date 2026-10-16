import type { Metadata, Viewport } from 'next'; // Importa Viewport
import { defaultSeo } from '@/lib/seo';
import { Montserrat } from 'next/font/google';
import './globals.css';

const font = Montserrat({
  weight: ['600'],
  subsets: ['latin'],
});

// SEO: el componente Seo usa next/head, que en el App Router no escribe nada en
// el <head>. El título, la descripción y Open Graph salen de acá (lib/seo.ts).
export const metadata: Metadata = defaultSeo;

// ---
// Nueva Exportación para Viewport
//---
export const viewport: Viewport = {
  themeColor: '#161616', // <-- ¡Ahora va aquí!
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <head>
        <meta name='color-scheme' content='light dark' />
      </head>
      <body
        className={`${font.className} antialiased`}
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        {children}
      </body>
    </html>
  );
}