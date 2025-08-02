import Link from 'next/link';

interface NavLinksProps {
  onLinkClick?: () => void; 
}

export default function NavLinks({ onLinkClick }: NavLinksProps) {
  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  const linkClassName =
    'text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-green-300 duration-200';

  return (
    <>
      <li className=''>
        <Link
          href='#ServicesSection'
          onClick={handleLinkClick}
          className={linkClassName}
        >
          Servicios
        </Link>
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
