'use client';

import AOS from 'aos';
import PageLoader from '@/components/ui/PageLoader';
import Sections from '@/components/sections/sections';
import FloatingActions from '@/components/ui/floating-actions';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const initAOS = () => {
      AOS.init({ duration: 1000, once: true });
      AOS.refresh();
    };

    const onLoad = () => {
      if ('requestIdleCallback' in window) {
        // @ts-ignore
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
      {/* Floating actions UI */}
      <FloatingActions />

      {/* Page loader */}
      <PageLoader />

      {/* sections */}
      <Sections />
    </>
  );
}
