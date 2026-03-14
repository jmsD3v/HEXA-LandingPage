const clients = [
  {
    name: 'KOMSA S.A.',
    website: 'https://komsa.com.ar',
    logoSrc: '/logos/clients/komsa.webp',
    logoAlt: 'Logo de KOMSA',
  },
  {
    name: 'Transener',
    website: 'https://www.transener.com.ar',
    logoSrc: '/logos/clients/transener.png',
    logoAlt: 'Logo de Transener',
  },
  {
    name: 'Previsora del Parana',
    website: 'https://previsoradelparana.com',
    logoSrc: '/logos/clients/previsora-del-parana.png',
    logoAlt: 'Logo de Previsora del Parana',
  },
  {
    name: 'Transba',
    website: 'http://www.transba.com.ar',
    logoSrc: '/logos/clients/transba.png',
    logoAlt: 'Logo de Transba',
  },
  {
    name: 'Poder Judicial de la Nacion',
    website: 'https://www.pjn.gov.ar',
    logoSrc: '/logos/clients/pjn.png',
    logoAlt: 'Logo del Poder Judicial de la Nacion',
  },
  {
    name: 'Transnea',
    website: 'https://www.transnea.com.ar',
    logoSrc: '/logos/clients/transnea.png',
    logoAlt: 'Logo de Transnea',
  },
];

const clientsSecondRow = [
  clients[2],
  clients[5],
  clients[0],
  clients[3],
  clients[1],
  clients[4],
];

function ClientLogo({
  logoAlt,
  logoSrc,
}: {
  logoAlt: string;
  logoSrc: string;
}) {
  return (
    <img
      src={logoSrc}
      alt={logoAlt}
      className='h-7 md:h-8 w-[80px] md:w-[96px] object-contain'
      style={{ filter: 'brightness(0) invert(1)' }}
    />
  );
}

export default function Clients() {
  return (
    <div className='w-full py-6 bg-[#161616] border-b border-white/5 overflow-hidden'>
      <div className='container mx-auto px-4 mb-8 text-center'>
        <p className='font-sans text-sm text-gray-400 font-medium uppercase tracking-wider'>
          Empresas que confían en nosotros
        </p>
      </div>

      {/* Marquee Container 1 (Left) */}
      <div className='relative flex overflow-x-hidden group mb-8'>
        <div className='animate-marquee whitespace-nowrap flex gap-16 items-center'>
          {/* We repeat the clients list enough times to ensure it's wider than any screen, 
              and then duplicate that whole block for the 50% seamless scroll. 
              Here we use 4 repetitions as the "base unit". 
              So we render 4+4 = 8 sets total. */}
          {Array.from({ length: 8 }).map((_, setIndex) =>
            clients.map((client, index) => (
              <a
                key={`${setIndex}-${index}`}
                href={client.website}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={client.name}
                className='inline-flex items-center justify-center h-16 w-36 md:w-40 rounded-md bg-[#161616] px-4'
              >
                <ClientLogo logoAlt={client.logoAlt} logoSrc={client.logoSrc} />
              </a>
            )),
          )}
        </div>
        <div className='absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#161616] to-transparent pointer-events-none' />
        <div className='absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#161616] to-transparent pointer-events-none' />
      </div>

      {/* Marquee Container 2 (Right) */}
      <div className='relative flex overflow-x-hidden group'>
        <div className='animate-marquee-reverse whitespace-nowrap flex gap-16 items-center'>
          {Array.from({ length: 8 }).map((_, setIndex) =>
            clientsSecondRow.map((client, index) => (
              <a
                key={`rev-${setIndex}-${index}`}
                href={client.website}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={client.name}
                className='inline-flex items-center justify-center h-16 w-36 md:w-40 rounded-md bg-[#161616] px-4'
              >
                <ClientLogo logoAlt={client.logoAlt} logoSrc={client.logoSrc} />
              </a>
            )),
          )}
        </div>
        <div className='absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#161616] to-transparent pointer-events-none' />
        <div className='absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#161616] to-transparent pointer-events-none' />
      </div>
    </div>
  );
}
