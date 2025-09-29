'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let done = false;
    const hide = () => {
      if (!done) {
        done = true;
        setIsLoading(false);
      }
    };

    // Fallback: hide quickly even if 'load' is slow (mobile friendly)
    const timeout = setTimeout(hide, 800);

    if (document.readyState === 'complete') {
      // Page already loaded
      setTimeout(hide, 0);
    } else {
      window.addEventListener('load', hide, { once: true });
    }

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('load', hide);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className='fixed inset-0 z-[60] backdrop-blur-none md:backdrop-blur-md bg-black/40 flex items-center justify-center transition-opacity duration-300'>
      <div className='animate-spin-slow'>
        <Image
          src='/logo-HEXA.png'
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
