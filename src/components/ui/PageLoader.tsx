'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let done = false;
    const MIN_DISPLAY_MS = 1200; // asegurar que se vea la rotación
    const MAX_TIMEOUT_MS = 3000; // seguridad por si 'load' se retrasa
    const start = performance.now();

    const hideAfterMin = () => {
      if (done) return;
      done = true;
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      const timer = setTimeout(() => setIsLoading(false), remaining);
      return () => clearTimeout(timer);
    };

    // Si ya cargó, respetar visibilidad mínima
    if (document.readyState === 'complete') {
      hideAfterMin();
    } else {
      const onLoad = () => hideAfterMin();
      window.addEventListener('load', onLoad, { once: true });
      // Fallback absoluto
      const maxTimer = setTimeout(hideAfterMin, MAX_TIMEOUT_MS);
      return () => {
        clearTimeout(maxTimer);
        window.removeEventListener('load', onLoad);
      };
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className='fixed inset-0 z-[60] backdrop-blur-none md:backdrop-blur-md bg-black/40 flex items-center justify-center transition-opacity duration-300'>
      <div className='animate-spin-slow'>
        <Image
          src='/logo-HEXA.webp'
          alt='HEXA Loader'
          width={120}
          height={120}
          className='w-24 h-24 md:w-28 md:h-28 object-contain invert brightness-150'
          priority
          unoptimized
        />
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 1.2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
