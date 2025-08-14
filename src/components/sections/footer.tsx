// import React from 'react';
// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
// } from 'react-icons/fa';
// import Link from 'next/link';

// interface FooterLinkItem {
//   label: string;
//   href: string;
// }

// const footerLinks = {
//   company: [
//     { label: 'Company History', href: '/about' },
//     { label: 'Meet the Team', href: '/team' },
//   ],
//   services: [
//     { label: 'Web Development', href: '/services/web-development' },
//     { label: 'Web Design', href: '/services/web-design' },
//     { label: 'Marketing', href: '/services/marketing' },
//     { label: 'Google Ads', href: '/services/google-ads' },
//   ],
//   legal: [
//     { label: 'Privacy Policy', href: '/privacy-policy' },
//     { label: 'Terms of Service', href: '/terms-of-service' },
//     { label: 'Cookie Policy', href: '/cookie-policy' },
//   ],
//   contact: [
//     { label: 'Contact Us', href: '/contact' },
//     { label: 'Support', href: '/support' },
//     { label: 'FAQ', href: '/faq' },
//     { label: 'Feedback', href: '/feedback' },
//   ],
// };

// interface SocialLinkItem extends FooterLinkItem {
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
// }

// const socialLinks: SocialLinkItem[] = [
//   { icon: FaFacebook, label: 'Facebook', href: 'https://facebook.com/example' },
//   {
//     icon: FaInstagram,
//     label: 'Instagram',
//     href: 'https://instagram.com/example',
//   },
//   { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/example' },
// ];

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const getLinkAttributes = (href: string) => {
//     if (href.startsWith('http')) {
//       return { target: '_blank', rel: 'noopener noreferrer' };
//     }
//     return { target: '_self' };
//   };

//   return (
//     <footer className='flex flex-col items-center bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8'>
//       <div className='w-full max-w-7xl flex flex-col md:flex-row md:justify-between gap-8'>
//         {/* Links Section */}
//         <div className='grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-4 md:flex-grow'>
//           {(Object.keys(footerLinks) as Array<keyof typeof footerLinks>).map(
//             (section) => (
//               <div key={section} className='text-center sm:text-left'>
//                 <p className='text-lg font-medium text-white mb-4'>
//                   {section.charAt(0).toUpperCase() +
//                     section.slice(1).replace(/([A-Z])/g, ' $1')}{' '}
//                   {/* Format title */}
//                 </p>
//                 <ul className='space-y-2 text-sm'>
//                   {footerLinks[section].map(({ label, href }, idx) => (
//                     <li
//                       key={typeof label === 'string' ? label : href + '-' + idx}
//                     >
//                       <Link
//                         href={href}
//                         {...getLinkAttributes(href)}
//                         className='text-gray-300 transition hover:text-teal-400'
//                       >
//                         {label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )
//           )}
//         </div>

//         {/* Branding, Social, and Legal Section */}
//         <div className='flex flex-col items-center md:items-end gap-4 text-center md:text-right'>
//           <div className='text-2xl font-bold text-teal-500'>HEXA</div>
//           {/* Social Links */}
//           <ul className='flex justify-center md:justify-end gap-4 mt-4'>
//             {socialLinks.map(({ icon: Icon, label, href }) => (
//               <li key={label}>
//                 <Link
//                   href={href}
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='inline-block text-gray-300 transition transform hover:scale-120 hover:underline hover:text-teal-400'
//                 >
//                   <span className='sr-only'>{label}</span>
//                   <Icon
//                     className='size-6'
//                     fill='currentColor'
//                     aria-hidden='true'
//                   />
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           {/* Copyright/Legal Text */}
//           <p className='text-sm text-gray-400 mt-4'>
//             Copyright &copy; {currentYear} HEXA. Desarrollado con 💜 por{' '}
//             <Link
//               href='https://www.linkedin.com/in/jmsilva83/'
//               target='_blank'
//               rel='noopener noreferrer'
//               className='inline-block text-gray-300 font-mono transition transform hover:scale-110 hover:underline hover:text-teal-400'
//             >
//               @JMSDev
//             </Link>
//             . All rights reserved.
//           </p>{' '}
//         </div>
//       </div>
//     </footer>
//   );
// }

// import React from 'react';
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// import Link from 'next/link';

// interface FooterLinkItem {
//   label: string;
//   href: string;
// }

// const footerLinks = {
//   Navegar: [
//     { label: 'Inicio', href: '#hero' },
//     { label: 'Servicios', href: '#ServicesSection' },
//     { label: 'Nosotros', href: '#aboutUs' },
//     { label: 'Contacto', href: '#contact' },
//   ],
//   legal: [
//     { label: 'Política de Privacidad', href: '#' },
//     { label: 'Términos de Servicio', href: '#' },
//   ],
// };

// interface SocialLinkItem extends FooterLinkItem {
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
// }

// const socialLinks: SocialLinkItem[] = [
//   { icon: FaFacebook, label: 'Facebook', href: 'https://facebook.com/example' },
//   {
//     icon: FaInstagram,
//     label: 'Instagram',
//     href: 'https://instagram.com/example',
//   },
//   { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/example' },
// ];

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const getLinkAttributes = (href: string) => {
//     if (href.startsWith('http')) {
//       return { target: '_blank', rel: 'noopener noreferrer' };
//     }
//     return { target: '_self' };
//   };

//   return (
//     <footer className='flex flex-col items-center bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8'>
//       <div className='w-full max-w-7xl flex flex-col md:flex-row md:justify-between gap-8'>
//         {/* Links Section */}
//         <div className='grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-4 md:flex-grow'>
//           {(Object.keys(footerLinks) as Array<keyof typeof footerLinks>).map(
//             (section) => (
//               <div key={section} className='text-center sm:text-left'>
//                 <p className='text-lg font-medium text-white mb-4'>
//                   {section.charAt(0).toUpperCase() +
//                     section.slice(1).replace(/([A-Z])/g, ' $1')}{' '}
//                   {/* Format title */}
//                 </p>
//                 <ul className='space-y-2 text-sm'>
//                   {footerLinks[section].map(({ label, href }, idx) => (
//                     <li
//                       key={typeof label === 'string' ? label : href + '-' + idx}
//                     >
//                       <Link
//                         href={href}
//                         {...getLinkAttributes(href)}
//                         className='text-gray-300 transition hover:text-teal-400'
//                       >
//                         {label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )
//           )}
//         </div>

//         {/* Branding, Social, and Legal Section */}
//         <div className='flex flex-col items-center md:items-end gap-4 text-center md:text-right'>
//           <div className='text-2xl font-bold text-teal-500'>HEXA</div>
//           {/* Social Links */}
//           <ul className='flex justify-center md:justify-end gap-4 mt-4'>
//             {socialLinks.map(({ icon: Icon, label, href }) => (
//               <li key={label}>
//                 <Link
//                   href={href}
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='inline-block text-gray-300 transition transform hover:scale-120 hover:underline hover:text-teal-400'
//                 >
//                   <span className='sr-only'>{label}</span>
//                   <Icon
//                     className='size-6'
//                     fill='currentColor'
//                     aria-hidden='true'
//                   />
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           {/* Copyright/Legal Text */}
//           <p className='text-sm text-gray-400 mt-4'>
//             Copyright &copy; {currentYear} HEXA. Desarrollado con 💜 por{' '}
//             <Link
//               href='https://www.linkedin.com/in/jmsilva83/'
//               target='_blank'
//               rel='noopener noreferrer'
//               className='inline-block text-gray-300 font-mono transition transform hover:scale-110 hover:underline hover:text-teal-400'
//             >
//               @JMSDev
//             </Link>
//             . All rights reserved.
//           </p>{' '}
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

interface FooterLinkItem {
  label: string;
  href: string;
}

const footerLinks = {
  Navegar: [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#ServicesSection' },
    { label: 'Nosotros', href: '#aboutUs' },
    { label: 'Contacto', href: '#contact' },
  ],
  legal: [
    { label: 'Política de Privacidad', href: '#' },
    { label: 'Términos de Servicio', href: '#' },
  ],
};

interface SocialLinkItem extends FooterLinkItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const socialLinks: SocialLinkItem[] = [
  { icon: FaFacebook, label: 'Facebook', href: 'https://facebook.com/example' },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://instagram.com/example',
  },
  { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/example' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const getLinkAttributes = (href: string) => {
    if (href.startsWith('http')) {
      return { target: '_blank', rel: 'noopener noreferrer' };
    }
    return { target: '_self' };
  };

  return (
    <footer className='flex flex-col items-center bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-7xl flex flex-col md:flex-row md:justify-between gap-8'>
        {/* Links Section */}
        <div className='grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-4 md:flex-grow'>
          {(Object.keys(footerLinks) as Array<keyof typeof footerLinks>).map(
            (section) => (
              <div key={section} className='text-center sm:text-left'>
                <p className='text-lg font-medium text-white mb-4'>
                  {section.charAt(0).toUpperCase() +
                    section.slice(1).replace(/([A-Z])/g, ' $1')}
                </p>

                {/* Navegar en 2 columnas */}
                {section === 'Navegar' ? (
                  <ul className='grid grid-cols-2 gap-x-4 gap-y-2 text-sm justify-items-start'>
                    {footerLinks[section].map(({ label, href }, idx) => (
                      <li key={label + idx}>
                        <Link
                          href={href}
                          {...getLinkAttributes(href)}
                          className='text-gray-300 transition hover:text-teal-400'
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  // Resto en columna
                  <ul className='space-y-2 text-sm'>
                    {footerLinks[section].map(({ label, href }, idx) => (
                      <li key={label + idx}>
                        <Link
                          href={href}
                          {...getLinkAttributes(href)}
                          className='text-gray-300 transition hover:text-teal-400'
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          )}
        </div>

        {/* Branding, Social, and Legal Section */}
        <div className='flex flex-col items-center md:items-end gap-4 text-center md:text-right'>
          {/* HEXA + Redes sociales */}
          <div className='flex items-center gap-6'>
            <div className='text-2xl font-bold text-teal-500'>HEXA</div>
            <ul className='flex gap-4'>
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block text-gray-300 transition transform hover:scale-120 hover:underline hover:text-teal-400'
                  >
                    <span className='sr-only'>{label}</span>
                    <Icon
                      className='size-5 mt-2'
                      fill='currentColor'
                      aria-hidden='true'
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div className='text-sm text-gray-400 mt-4 space-y-1'>
            <p>Copyright &copy; {currentYear} HEXA</p>
            <p>
              Desarrollado con 💜 por{' '}
              <Link
                href='https://www.linkedin.com/in/jmsilva83/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block text-gray-300 font-mono transition transform hover:scale-110 hover:underline hover:text-teal-400'
              >
                @JMSDev
              </Link>
            </p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
