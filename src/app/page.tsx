'use client';

import AOS from 'aos';
import PageLoader from '@/components/ui/PageLoader';
import Sections from '@/components/sections/sections';
import FloatingActions from '@/components/ui/floating-actions';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
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
