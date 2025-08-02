'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  if (!isLoading) return null;

  return (
    <div className='fixed inset-0 z-50 backdrop-blur-md bg-black/30 flex items-center justify-center transition-opacity duration-500'>
      <div className='animate-spin-slow'>
        <Image
          src='/logo-HEXA.png'
          alt='HEXA Loader'
          width={120}
          height={120}
          className='w-28 h-28 object-contain invert brightness-150'
          priority
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
