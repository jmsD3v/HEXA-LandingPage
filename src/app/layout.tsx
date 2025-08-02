import type { Metadata, Viewport } from 'next'; // Importa Viewport
import { Montserrat } from 'next/font/google';
import { URL } from 'url';
import './globals.css';

const font = Montserrat({
  weight: ['600'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'HEXA Servicios Integrales SAS',
  description: 'Soluciones Integrales para Empresas Modernas',
  keywords: [
    'servicios integrales',
    'desarrollo web',
    'soluciones empresariales',
    'HEXA SAS',
    'tecnología',
    'consultoría',
  ],
  // themeColor: '#161616', // <-- ¡Esto se mueve!
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'HEXA Servicios Integrales SAS',
    description: 'Soluciones Integrales para Empresas Modernas',
    type: 'website',
    url: 'https://example.com',
    images: ['/logo-HEXA.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEXA Servicios Integrales SAS',
    description: 'Soluciones Integrales para Empresas Modernas',
    images: ['/logo-HEXA.png'],
  },
};

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
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'HEXA Servicios Integrales SAS',
              url: 'https://example.com',
              logo: 'https://example.com/logo-HEXA.png',
              description: 'Soluciones Integrales para Empresas Modernas',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-XXX-XXX-XXXX',
                contactType: 'Customer Service',
              },
              sameAs: [
                'https://www.facebook.com/exampleHEXA',
                'https://www.instagram.com/exampleHEXA',
                'https://twitter.com/exampleHEXA',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}