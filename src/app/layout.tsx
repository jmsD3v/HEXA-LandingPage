import type { Metadata, Viewport } from 'next'; // Importa Viewport
import { Montserrat } from 'next/font/google';
import { URL } from 'url';
import './globals.css';

const font = Montserrat({
  weight: ['600'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'HEXA Servicios Integrales SAS | Ingeniería y Proyectos',
  description:
    'Ofrecemos servicios integrales en gestión de proyectos, generación solar fotovoltaica (SFV), infraestructura eléctrica, frío industrial, climatización e informática para empresas.',
  keywords: [
    'gestión de proyectos',
    'generación solar',
    'fotovoltaica',
    'SFV',
    'infraestructura eléctrica industrial',
    'frío industrial',
    'climatización',
    'informática industrial',
    'consultoría de ingeniería',
    'proyectos electromecánicos',
    'eficiencia energética',
    'HEXA SAS',
  ],
  // themeColor: '#161616', // <-- ¡Esto se mueve!
  metadataBase: new URL('https://hesaservicios.com'),
  openGraph: {
    title: 'HEXA Servicios Integrales SAS | Ingeniería y Proyectos',
    description:
      'Servicios de gestión de proyectos, generación solar, infraestructura eléctrica, frío industrial, climatización e informática.',
    type: 'website',
    url: 'https://hesaservicios.com',
    images: ['https://hesaservicios.com/logo-HEXA.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEXA Servicios Integrales SAS | Ingeniería y Proyectos',
    description:
      'Servicios de gestión de proyectos, generación solar, infraestructura eléctrica, frío industrial, climatización e informática.',
    images: ['https://hesaservicios.com/logo-HEXA.png'],
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
              url: 'https://hesaservicios.com',
              logo: 'https://hesaservicios.com/logo-HEXA.png',
              description: 'Soluciones Integrales para Empresas Modernas',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+543624306820',
                contactType: 'Customer Service',
              },
              sameAs: [
                'https://github.com/hexa',
                'https://www.instagram.com/hexa',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}