'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';
import ScrollToTop from '@/components/ui/scroll-to-top';
import { social } from '@/data/social';

export default function FloatingActions() {
  const [waMenuOpen, setWaMenuOpen] = useState(false);

  const message = 'Hola, vengo de su página web, me gustaría contactarlos';
  const encodedMessage = encodeURIComponent(message);
  // Números según sección de contacto
  const customerPhone = '+543624306820'; // Atención al Cliente
  const techPhone = '+543624666877'; // Servicio Técnico
  const whatsappCustomerHref = `https://wa.me/${customerPhone}?text=${encodedMessage}`;
  const whatsappTechHref = `https://wa.me/${techPhone}?text=${encodedMessage}`;

  return (
    <>
      {/* Backdrop para cerrar el menú al click afuera */}
      {waMenuOpen && (
        <button
          aria-label='Cerrar menú WhatsApp'
          onClick={() => setWaMenuOpen(false)}
          className='fixed inset-0 bg-transparent z40 cursor-default'
        />
      )}

      {/* Columna flotante */}
      <div className='fixed bottom-5 right-5 z-50 flex flex-col items-end gap-4'>
        {/* Scroll to top */}
        <div className='mb-2'>
          <ScrollToTop useFixed={false} />
        </div>

        {/* Redes sociales (excluye WhatsApp para no duplicar) */}
        <div className='flex flex-col items-end gap-2'>
          {social
            .filter((s) => s.name !== 'Whatsapp')
            .map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex justify-center items-center bg-gray-700/80 hover:bg-gray-700 rounded-full w-12 h-12 shadow'
              >
                <Icon icon={item.icon} className='size-6 text-neutral-100' />
              </Link>
            ))}
        </div>

        {/* Botón WhatsApp */}
        <button
          type='button'
          aria-label='Abrir opciones de WhatsApp'
          onClick={() => setWaMenuOpen((v) => !v)}
          className='flex justify-center items-center bg-[#59D264] rounded-full hover:cursor-pointer hover:bg-[#4ead55] duration-200 w-12 h-12 shadow-lg'
        >
          <Icon icon='logos:whatsapp-icon' className='size-7' />
        </button>

        {/* Menú WhatsApp */}
        {waMenuOpen && (
          <div
            className='absolute bottom-0 right-full mr-3 w-64 rounded-lg border border-white/10 bg-gray-800 text-white shadow-xl overflow-hidden'
            data-aos='fade-left'
          >
            <div className='px-4 py-3 border-b border-white/10'>
              <p className='text-sm text-gray-300'>Elegí con quién querés chatear</p>
            </div>
            <div className='flex flex-col divide-y divide-white/10'>
              <Link
                href={whatsappCustomerHref}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-colors'
                onClick={() => setWaMenuOpen(false)}
              >
                <Icon icon='mdi:account-voice' className='size-5 text-[#59D264]' />
                <div className='flex flex-col'>
                  <span className='text-sm font-medium'>Atención al Cliente</span>
                  <span className='text-xs text-gray-400'>Consultas generales</span>
                </div>
              </Link>
              <Link
                href={whatsappTechHref}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-colors'
                onClick={() => setWaMenuOpen(false)}
              >
                <Icon icon='mdi:tools' className='size-5 text-[#59D264]' />
                <div className='flex flex-col'>
                  <span className='text-sm font-medium'>Servicio Técnico</span>
                  <span className='text-xs text-gray-400'>Soporte y asistencia</span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
