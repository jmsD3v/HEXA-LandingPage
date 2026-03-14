import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { services } from '@/data/services';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

interface NavLinksProps {
  onLinkClick?: () => void;
  onServiceClick: (service: (typeof services)[0]) => void;
  className?: string;
}

export default function NavLinks({
  onLinkClick,
  onServiceClick,
  className,
}: NavLinksProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (onLinkClick) onLinkClick();
  };

  const linkClassName =
    'text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-teal-700 duration-200';

  return (
    <>
      <li className='flex items-center gap-1'>
        <button
          onClick={() => scrollToSection('ServicesSection')}
          className={linkClassName}
        >
          Servicios
        </button>
        <DropdownMenu.Root modal={false}>
          <DropdownMenu.Trigger asChild>
            <button className='p-1 rounded-full hover:bg-gray-700'>
              <ChevronDown className='text-neutral-200' size={16} />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            className={cn(
              'bg-gray-800 border border-gray-700 text-white p-2 rounded-md shadow-lg',
              className,
            )}
          >
            <DropdownMenu.Arrow className='fill-current text-gray-800' />
            {services.map((service, index) => (
              <DropdownMenu.Item
                key={index}
                className='p-2 hover:bg-gray-700 rounded-md cursor-pointer flex items-center gap-2'
                onSelect={() => onServiceClick(service)}
              >
                <span>{service.title}</span>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </li>
      <li className=''>
        <button
          onClick={() => scrollToSection('whyUs')}
          className={linkClassName}
        >
          ¿Por qué nosotros?
        </button>
      </li>
      <li className=''>
        <button
          onClick={() => scrollToSection('aboutUs')}
          className={linkClassName}
        >
          Sobre Nosotros
        </button>
      </li>
      <li className=''>
        <button
          onClick={() => scrollToSection('contact')}
          className={linkClassName}
        >
          Contacto
        </button>
      </li>
    </>
  );
}
