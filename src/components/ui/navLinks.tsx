// import Link from 'next/link';

// interface NavLinksProps {
//   onLinkClick?: () => void;
// }

// export default function NavLinks({ onLinkClick }: NavLinksProps) {
//   const handleLinkClick = () => {
//     if (onLinkClick) {
//       onLinkClick();
//     }
//   };

//   const linkClassName =
//     'text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-green-300 duration-200';

//   return (
//     <>
//       <li className=''>
//         <Link
//           href='#ServicesSection'
//           onClick={handleLinkClick}
//           className={linkClassName}
//         >
//           Servicios
//         </Link>
//       </li>
//       <li className=''>
//         <Link href='#whyUs' onClick={handleLinkClick} className={linkClassName}>
//           ¿Por qué nosotros?
//         </Link>
//       </li>
//       <li className=''>
//         <Link
//           href='#aboutUs'
//           onClick={handleLinkClick}
//           className={linkClassName}
//         >
//           Sobre Nosotros
//         </Link>
//       </li>
//       <li className=''>
//         <Link
//           href='#contact'
//           onClick={handleLinkClick}
//           className={linkClassName}
//         >
//           Contacto
//         </Link>
//       </li>
//     </>
//   );
// }

// import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
// import Link from 'next/link';
// import { services } from '@/data/services';
// import ServiceModal from '@/components/ui/serviceModal';

// interface NavLinksProps {
//   onLinkClick?: () => void;
// }

// export default function NavLinks({ onLinkClick }: NavLinksProps) {
//   const handleLinkClick = () => {
//     if (onLinkClick) {
//       onLinkClick();
//     }
//   };

//   const linkClassName =
//     'text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-green-300 duration-200';

//   return (
//     <>
//       <li className=''>
//         <DropdownMenu.Root>
//           <DropdownMenu.Trigger className={linkClassName}>
//             Servicios
//           </DropdownMenu.Trigger>
//           <DropdownMenu.Content className='bg-gray-800 border border-gray-700 text-white p-2 rounded-md shadow-lg min-w-[220px]'>
//             <DropdownMenu.Arrow className='fill-current text-gray-800' />
//             {services.map((service, index) => (
//               <ServiceModal
//                 key={index}
//                 title={service.title}
//                 description={service.description}
//               >
//                 <DropdownMenu.Item className='p-2 hover:bg-gray-700 rounded-md cursor-pointer flex items-center gap-2'>
//                   <span>{service.title}</span>
//                 </DropdownMenu.Item>
//               </ServiceModal>
//             ))}
//           </DropdownMenu.Content>
//         </DropdownMenu.Root>
//       </li>
//       <li className=''>
//         <Link href='#whyUs' onClick={handleLinkClick} className={linkClassName}>
//           ¿Por qué nosotros?
//         </Link>
//       </li>
//       <li className=''>
//         <Link
//           href='#aboutUs'
//           onClick={handleLinkClick}
//           className={linkClassName}
//         >
//           Sobre Nosotros
//         </Link>
//       </li>
//       <li className=''>
//         <Link
//           href='#contact'
//           onClick={handleLinkClick}
//           className={linkClassName}
//         >
//           Contacto
//         </Link>
//       </li>
//     </>
//   );
// }

// import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
// import Link from 'next/link';
// import { services } from '@/data/services';
// import ServiceModal from './serviceModal';
// import { useState } from 'react';

// interface NavLinksProps {
//   onLinkClick?: () => void;
// }

// export default function NavLinks({ onLinkClick }: NavLinksProps) {
//   const [selectedService, setSelectedService] = useState<{ title: string; description: string } | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleLinkClick = () => {
//     if (onLinkClick) {
//       onLinkClick();
//     }
//   };

//   const handleServiceClick = (service: { title: string; description: string }) => {
//     setSelectedService(service);
//     setIsModalOpen(true);
//   };

//   const linkClassName =
//     'text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-green-300 duration-200';

//   return (
//     <>
//       <li className=''>
//         <DropdownMenu.Root>
//           <DropdownMenu.Trigger className={linkClassName}>
//             Servicios
//           </DropdownMenu.Trigger>
//           <DropdownMenu.Content
//             className='bg-gray-800 border border-gray-700 text-white p-2 rounded-md shadow-lg min-w-[220px]'
//           >
//             <DropdownMenu.Arrow className='fill-current text-gray-800' />
//             {services.map((service, index) => (
//               <DropdownMenu.Item
//                 key={index}
//                 className='p-2 hover:bg-gray-700 rounded-md cursor-pointer flex items-center gap-2'
//                 onSelect={() => handleServiceClick(service)}
//               >
//                 <span>{service.title}</span>
//               </DropdownMenu.Item>
//             ))}
//           </DropdownMenu.Content>
//         </DropdownMenu.Root>
//       </li>
//       <li className=''>
//         <Link href='#whyUs' onClick={handleLinkClick} className={linkClassName}>
//           ¿Por qué nosotros?
//         </Link>
//       </li>
//       {selectedService && (
//         <ServiceModal
//           title={selectedService.title}
//           description={selectedService.description}
//           isOpen={isModalOpen}
//           onOpenChange={setIsModalOpen}
//         />
//       )}
//       <li className=''>
//         <Link
//           href='#aboutUs'
//           onClick={handleLinkClick}
//           className={linkClassName}
//         >
//           Sobre Nosotros
//         </Link>
//       </li>
//       <li className=''>
//         <Link
//           href='#contact'
//           onClick={handleLinkClick}
//           className={linkClassName}
//         >
//           Contacto
//         </Link>
//       </li>
//     </>
//   );
// }

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { services } from '@/data/services';
import { ChevronDown } from 'lucide-react';

interface NavLinksProps {
  onLinkClick?: () => void;
  onServiceClick: (service: { title: string; description: string }) => void;
}

export default function NavLinks({
  onLinkClick,
  onServiceClick,
}: NavLinksProps) {
  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  const linkClassName =
    'text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-teal-700 duration-200';

  return (
    <>
      <li className='flex items-center gap-1'>
        <Link
          href='#ServicesSection'
          onClick={handleLinkClick}
          className={linkClassName}
        >
          Servicios
        </Link>
        <DropdownMenu.Root modal={false}>
          <DropdownMenu.Trigger asChild>
            <button className='p-1 rounded-full hover:bg-gray-700'>
              <ChevronDown className='text-neutral-200' size={16} />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className='bg-gray-800 border border-gray-700 text-white p-2 rounded-md shadow-lg min-w-[220px]'>
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
        <Link href='#whyUs' onClick={handleLinkClick} className={linkClassName}>
          ¿Por qué nosotros?
        </Link>
      </li>
      <li className=''>
        <Link
          href='#aboutUs'
          onClick={handleLinkClick}
          className={linkClassName}
        >
          Sobre Nosotros
        </Link>
      </li>
      <li className=''>
        <Link
          href='#contact'
          onClick={handleLinkClick}
          className={linkClassName}
        >
          Contacto
        </Link>
      </li>
    </>
  );
}
