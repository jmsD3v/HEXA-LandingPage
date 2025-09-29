'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useEffect, useState } from 'react';

type Props = {
  /** Extra bottom offset in pixels to avoid overlapping floating UI */
  offset?: number;
  /** Extra right offset in pixels to avoid overlapping floating UI */
  rightOffset?: number;
  /** If false, renders without fixed positioning to be composed by parent */
  useFixed?: boolean;
};

export default function ScrollToTop({ offset = 0, rightOffset = 0, useFixed = true }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Base bottom equals Tailwind bottom-20 (80px) plus dynamic offset
  const baseBottomPx = 80 + offset;
  const baseRightPx = 20 + rightOffset;

  const positionStyle = useFixed ? { bottom: baseBottomPx, right: baseRightPx } : undefined;
  const positionClass = useFixed ? 'fixed' : '';

  return (
    <button
      onClick={scrollToTop}
      type='button'
      title='Go to top'
      style={positionStyle}
      className={`${positionClass} flex justify-center items-center bg-green-300 border-2 box-border border-neutral-600 rounded-full shadow-lg text-white hover:cursor-pointer transition-opacity duration-500 z-51  w-12 h-12 ${
        visible
          ? 'opacity-100 pointer-events-auto animate-bounce'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <Icon icon='mingcute:arrow-up-fill' className='text-neutral-600 size-5' />
    </button>
  );
}
