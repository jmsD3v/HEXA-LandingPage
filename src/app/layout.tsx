import type { Viewport } from 'next'; // Importa Viewport
import { Montserrat } from 'next/font/google';
import './globals.css';

const font = Montserrat({
  weight: ['600'],
  subsets: ['latin'],
});

// SEO metadata será gestionado por componentes Seo/seo.ts a nivel de página

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
      <body
        className={`${font.className} antialiased`}
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        {children}
      </body>
    </html>
  );
}