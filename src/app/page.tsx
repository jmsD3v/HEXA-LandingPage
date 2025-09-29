'use client';

import AOS from 'aos';
import PageLoader from '@/components/ui/PageLoader';
import Sections from '@/components/sections/sections';
import FloatingActions from '@/components/ui/floating-actions';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Seo from '@/components/seo/Seo';

export default function Page() {
  useEffect(() => {
    const initAOS = () => {
      AOS.init({ duration: 1000, once: true });
      AOS.refresh();
    };

    const onLoad = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(initAOS);
      } else {
        // Small timeout to yield to critical UI
        setTimeout(initAOS, 100);
      }
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad, { once: true });
    }

    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <>
      <Seo
        title='HEXA Servicios Integrales SAS | Ingeniería y Proyectos'
        description='Servicios integrales en gestión de proyectos, generación solar fotovoltaica (SFV), infraestructura eléctrica, frío industrial, climatización e informática.'
        image='/logo-HEXA.webp'
        canonical='/'
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'HEXA Servicios Integrales SAS',
          url: 'https://hexaservicios.com',
          logo: 'https://hexaservicios.com/logo-HEXA.webp',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+543624306820',
            contactType: 'Customer Service',
          },
          sameAs: [
            'https://www.instagram.com/hexa.servicios',
            'https://www.linkedin.com/company/hexa-servicios-integrales',
          ],
        }}
      />
      {/* Floating actions UI */}
      <FloatingActions />

      {/* Page loader */}
      <PageLoader />

      {/* sections */}
      <Sections />
    </>
  );
}
