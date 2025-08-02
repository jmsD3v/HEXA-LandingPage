// interface ServiceItemProps {
//   title: string;
//   description: string;
//   imageSrc: string;
//   imageAlt: string;
//   isReversed?: boolean;
// }

// const ServiceItem: React.FC<ServiceItemProps> = ({
//   title,
//   description,
//   imageSrc,
//   imageAlt,
//   isReversed,
// }) => {
//   const imageOrderClasses = isReversed ? 'md:order-last' : '';
//   const textPaddingClasses = 'md:p-4 p-0';

//   return (
//     <div
//       className={`xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4 ${
//         isReversed ? 'flex-col-reverse' : ''
//       }`}
//     >
//       <div className={`md:w-[50%] w-full ${imageOrderClasses}`}>
//         <div className='w-full h-[300px] overflow-hidden rounded-md'>
//           <img
//             className='w-full h-full object-cover'
//             src={imageSrc}
//             alt={imageAlt}
//             loading='lazy'
//           />
//         </div>
//       </div>
//       <div
//         className={`md:w-[50%] h-[300px] flex flex-col justify-center items-center bg-stone-300 dark:bg-gray-900 dark:text-gray-400 rounded-md ${textPaddingClasses}`}
//       >
//         <h2 className='text-3xl font-semibold text-gray-900 dark:text-white'>
//           {title}
//         </h2>
//         <p className='text-md text-center mt-4 whitespace-pre-line leading-tight [&>br]:mb-1 [&>br]:mt-1'>
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ServiceItem;

// // src/components/ui/serviceItem.tsx
// 'use client';

// import React, { useState } from 'react';

// interface ServiceItemProps {
//   title: string;
//   description: string;
//   imageSrc: string;
//   imageAlt: string;
//   isReversed?: boolean;
// }

// const ServiceItem: React.FC<ServiceItemProps> = ({
//   title,
//   description,
//   imageSrc,
//   imageAlt,
//   isReversed = false,
// }) => {
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const imageOrderClasses = isReversed ? 'md:order-last' : '';
//   const textPaddingClasses = 'md:p-4 p-0';

//   return (
//     <div
//       className={`xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4 ${
//         isReversed ? 'flex-col-reverse' : ''
//       }`}
//     >
//       {/* Imagen */}
//       <div className={`md:w-[50%] w-full ${imageOrderClasses}`}>
//         <div className='w-full h-[300px] overflow-hidden rounded-md'>
//           <img
//             className='w-full h-full object-cover'
//             src={imageSrc}
//             alt={imageAlt}
//             loading='lazy'
//             onLoad={() => setImageLoaded(true)}
//           />
//         </div>
//       </div>

//       {/* Contenedor de texto (con skeleton si no cargó la imagen aún) */}
//       <div
//         className={`md:w-[50%] h-[300px] flex flex-col justify-center items-center bg-stone-300 dark:bg-gray-900 dark:text-gray-400 rounded-md ${textPaddingClasses}`}
//       >
//         {!imageLoaded ? (
//           <div className='w-full px-4 animate-pulse space-y-4'>
//             <div className='h-6 w-2/3 bg-gray-400 rounded' />
//             <div className='h-4 w-full bg-gray-400 rounded' />
//             <div className='h-4 w-5/6 bg-gray-400 rounded' />
//             <div className='h-4 w-4/6 bg-gray-400 rounded' />
//           </div>
//         ) : (
//           <>
//             <h2 className='text-3xl font-semibold text-gray-900 dark:text-white text-center'>
//               {title}
//             </h2>
//             <p className='text-md text-center mt-4 whitespace-pre-line leading-tight [&>br]:mb-1 [&>br]:mt-1'>
//               {description}
//             </p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ServiceItem;

'use client';

import React, { useState, useEffect } from 'react';

interface ServiceItemProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [minimumDelayPassed, setMinimumDelayPassed] = useState(false);

  const imageOrderClasses = isReversed ? 'md:order-last' : '';
  const textPaddingClasses = 'md:p-4 p-0';

  // Garantizar que el skeleton no dure para siempre
  useEffect(() => {
    const minDelay = setTimeout(() => setMinimumDelayPassed(true), 1000); // 1 segundo mínimo
    const maxLoadTime = setTimeout(() => setImageLoaded(true), 2000); // Máximo 3 segundos de espera

    return () => {
      clearTimeout(minDelay);
      clearTimeout(maxLoadTime);
    };
  }, []);

  const showContent = imageLoaded && minimumDelayPassed;

  return (
    <div
      className={`xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4 ${
        isReversed ? 'flex-col-reverse' : ''
      }`}
    >
      {/* Imagen */}
      <div className={`md:w-[50%] w-full ${imageOrderClasses}`}>
        <div className='w-full h-[300px] overflow-hidden rounded-md relative'>
          {!showContent && (
            <div className='absolute inset-0 bg-gray-300 animate-pulse z-0 rounded-md' />
          )}
          <img
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              showContent ? 'opacity-100' : 'opacity-0'
            }`}
            src={imageSrc}
            alt={imageAlt}
            loading='lazy'
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
        </div>
      </div>

      {/* Texto */}
      <div
        className={`md:w-[50%] h-[300px] flex flex-col justify-center items-center bg-stone-300 dark:bg-gray-900 dark:text-gray-400 rounded-md ${textPaddingClasses}`}
      >
        {!showContent ? (
          <div className='w-full px-6 animate-pulse space-y-4'>
            <div className='h-6 w-2/3 bg-gray-400 rounded' />
            <div className='h-4 w-full bg-gray-400 rounded' />
            <div className='h-4 w-5/6 bg-gray-400 rounded' />
            <div className='h-4 w-4/6 bg-gray-400 rounded' />
          </div>
        ) : (
          <>
            <h2 className='text-3xl font-semibold text-gray-900 dark:text-white text-center'>
              {title}
            </h2>
            <p className='text-md text-center mt-4 whitespace-pre-line leading-tight [&>br]:mb-1 [&>br]:mt-1'>
              {description}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceItem;
