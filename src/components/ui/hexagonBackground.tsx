'use client';

import Image from 'next/image';

type HexagonData = {
  img: string;
  alt: string;
};

const hexagons: HexagonData[] = [
  { img: '/paneles3.jpg', alt: 'Generación SFV' },
  { img: '/paneles.jpg', alt: 'Frío Industrial' },
  { img: '/paneles2.jpg', alt: 'Climatización' },
  { img: '/paneles4.jpg', alt: 'Redes e informática' },
  { img: '/paneles5.jpg', alt: 'Seguridad Eléctrica' },
  { img: '/paneles6.jpg', alt: 'Gestión de proyectos' },
];

export default function HexagonBackground() {
  return (
    <div className='absolute inset-0 z-0 grid place-items-center'>
      <div className='relative w-[500px] h-[500px] md:w-[700px] md:h-[700px]'>
        {/* Hexágono central con logo */}
        <div className='absolute w-32 h-32 md:w-40 md:h-40 hexagon bg-white flex items-center justify-center shadow-md z-10'>
          <Image
            src='/logo-HEXA.png'
            alt='Logo HEXA'
            width={100}
            height={100}
            className='object-contain'
          />
        </div>

        {/* Hexágonos exteriores */}
        {hexagons.map((hex, i) => {
          const positions = [
            { x: 0, y: -1 }, 
            { x: -1, y: -0.5 }, 
            { x: -1, y: 0.5 }, 
            { x: 0, y: 1 }, 
            { x: 1, y: 0.5 }, 
            { x: 1, y: -0.5 }, 
          ];

          const radius = 90; 

          const x = Math.round(positions[i].x * radius * 1.15); 
          const y = Math.round(positions[i].y * radius);

          return (
            <div
              key={i}
              className='absolute w-32 h-32 md:w-40 md:h-40 hexagon bg-cover bg-center transition-transform duration-300 hover:scale-105 shadow-md'
              style={{
                backgroundImage: `url(${hex.img})`,
                transform: `translate(${x}px, ${y}px)`,
              }}
              title={hex.alt}
            />
          );
        })}
      </div>

      <style jsx>{`
        .hexagon {
          clip-path: polygon(
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%,
            0% 50%
          );
        }
      `}</style>
    </div>
  );
}
