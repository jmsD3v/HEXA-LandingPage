'use client';

import NavLinks from '@/components/ui/navLinks';
import { useEffect, useState } from 'react';
import SheetItem from '@/components/ui/sheet-item';
import ServiceModal from '../ui/serviceModal';
import { services } from '@/data/services';
import Link from 'next/link';

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: (typeof services)[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-50 duration-500 ${
          visible ? 'bg-black/50' : 'bg-black/30'
        }`}
      >
        <div className='container flex items-center justify-between p-2 w-full md:w-auto duration-300'>
          <div className='flex items-center w-full md:w-auto'>
            {/* Left: Logo + Brand together */}
            <div className='flex items-center'>
              <Link
                href='/#hero'
                aria-label='Ir al inicio'
                className='flex items-center size-7 mr-2 hover:cursor-pointer hover:scale-110 hover:opacity-80 transition-transform duration-200'
              >
                <img
                  src='logo-HEXA.webp'
                  alt='Logo HEXA'
                  className='w-full h-full invert'
                />
              </Link>
              <span className='ml-1 text-2xl md:text-2xl xl:text-2xl font-bold text-neutral-200 mb-1 hover:scale-110 hover:opacity-80 transition-transform duration-200'>
                <span className='text-white'>HEXA</span>
              </span>
            </div>
            {/* Right: Mobile menu (hamburger) pushed to the far right */}
            <div className='md:hidden ml-auto'>
              <SheetItem onServiceClick={handleServiceClick} />
            </div>
          </div>
          <nav className='max-md:hidden'>
            <ul className='flex gap-10'>
              <NavLinks
                onServiceClick={handleServiceClick}
                className='min-w-[220px]'
              />
            </ul>
          </nav>
        </div>
      </header>
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
}
