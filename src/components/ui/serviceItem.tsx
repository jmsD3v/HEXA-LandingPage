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
  // Removed text-center from mobile, using text-left for better readability
  // Added padding and flex adjustments
  const textPaddingClasses = 'p-6 md:p-8';

  // Garantizar que el skeleton no dure para siempre
  useEffect(() => {
    const minDelay = setTimeout(() => setMinimumDelayPassed(true), 1000); 
    const maxLoadTime = setTimeout(() => setImageLoaded(true), 2000); 

    return () => {
      clearTimeout(minDelay);
      clearTimeout(maxLoadTime);
    };
  }, []);

  const showContent = imageLoaded && minimumDelayPassed;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className={`xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-6 gap-4 justify-center lg:items-stretch md:items-center mt-8 ${
        isReversed ? 'flex-col-reverse' : ''
      }`}
    >
      {/* Imagen */}
      <div className={`md:w-[50%] w-full ${imageOrderClasses}`}>
        <div className='w-full h-[300px] md:h-full min-h-[300px] overflow-hidden rounded-xl relative shadow-md group'>
          {!showContent && (
            <div className='absolute inset-0 bg-gray-300 animate-pulse z-0 rounded-xl' />
          )}
          <img
            className={`w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 ${
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
        className={`md:w-[50%] flex flex-col justify-center items-start bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-xl shadow-sm hover:shadow-xl hover:shadow-teal-500/10 dark:hover:shadow-teal-900/20 hover:-translate-y-1 transition-all duration-300 ${textPaddingClasses}`}
      >
        {!showContent ? (
          <div className='w-full animate-pulse space-y-4'>
            <div className='h-8 w-1/2 bg-gray-300 dark:bg-gray-700 rounded' />
            <div className='h-4 w-full bg-gray-300 dark:bg-gray-700 rounded' />
            <div className='h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded' />
            <div className='h-4 w-4/6 bg-gray-300 dark:bg-gray-700 rounded' />
          </div>
        ) : (
          <div className="relative pl-4 border-l-4 border-teal-500">
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 leading-tight'>
              {title}
            </h2>
            <p className='text-base md:text-lg text-gray-600 dark:text-gray-300 text-pretty leading-relaxed whitespace-pre-line'>
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceItem;
