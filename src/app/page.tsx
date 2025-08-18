'use client';

import AboutUs from '@/components/sections/aboutUs';
import Contact from '@/components/sections/contact';
import Hero from '@/components/sections/hero';
import ScrollToTop from '@/components/ui/scroll-to-top';
import WhyUs from '@/components/sections/whyUs';
import { social } from '@/data/social';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from '@/components/sections/footer';
import ServicesSection from '@/components/sections/servicesSection';
import PageLoader from '@/components/ui/PageLoader';

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  const linkWhatsapp = social.find((item) => item.name === 'Whatsapp');

  return (
    <>
      <ScrollToTop />
      {linkWhatsapp && (
        <Link
          href={linkWhatsapp.href}
          target='_blank'
          rel='noopener noreferrer'
          className='flex justify-center items-center bg-[#59D264] rounded-full fixed bottom-5 right-5 hover:cursor-pointer hover:bg-[#4ead55] duration-200 z-50 w-12 h-12'
        >
          <Icon icon='logos:whatsapp-icon' className='size-7' />
        </Link>
      )}

      <PageLoader />
      <section className='flex flex-col min-h-screen from-[#242424] via-[#1c1c1c] to-[#161616]'>
        <Hero />
      </section>

      <section
        id='ServicesSection'
        className='flex flex-col min-h-screen gap-6 py-15 justify-center items-center bg-secondary-foreground'
      >
        <div className='container'>
          <ServicesSection />
        </div>
      </section>

      <section
        id='whyUs'
        className='bg-muted-foreground min-h-screen py-10 flex justify-center items-center text-white px-4 md:px-10 lg:px-20'
      >
        <div className='container'>
          <WhyUs />
        </div>
      </section>
      <section
        id='aboutUs'
        className='flex flex-col min-h-screen gap-6 py-16 bg-radial from-[#242424] via-[#1c1c1c] to-[#161616] lg:justify-center lg:items-center'
      >
        <div className='container'>
          <AboutUs />
        </div>
      </section>

      <section
        id='contact'
        className='bg-primary min-h-screen py-10 flex justify-center items-center text-white px-4 md:px-10 lg:px-20'
      >
        <div className='container'>
          <Contact />
        </div>
      </section>

      <section id='footer'>
        <Footer />
      </section>
    </>
  );
}
