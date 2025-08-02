// 'use client';

// import Li from '@/components/ui/navLinks';
// import { useEffect, useState } from 'react';
// import SheetItem from '@/components/ui/sheet-item';

// export default function Header() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 100) {
//         setVisible(true);
//       } else {
//         setVisible(false);
//       }
//     };
//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);
//   return (
//     <div
//       className={`fixed w-full z-53 duration-500 ${
//         visible ? 'bg-black/50' : 'bg-black/30'
//       }`}
//     >
//       <div className='container flex items-center justify-between p-2 w-full md:w-auto duration-300'>
//         <div className='flex items-center justify-between w-full md:w-auto'>
//           <button
//             onClick={() => window.location.reload()}
//             className='flex items-center size-7 mr-2 hover:cursor-pointer hover:scale-110 hover:opacity-80 transition-transform duration-200'
//           >
//             <img
//               src='logo-HEXA.png'
//               alt='Logo'
//               className='w-full h-full invert'
//             />
//           </button>
//           <h1 className='max-md:hidden text-3xl md:text-2xl xl:text-2xl font-bold text-neutral-200'>
//             <span className='text-teal-700'>HEXA</span>
//           </h1>
//           <div className='md:hidden'>
//             <SheetItem />
//           </div>
//         </div>
//         <ul className='flex gap-10 max-md:hidden'>
//           <Li />
//         </ul>
//       </div>
//     </div>
//   );
// }

'use client';

import NavLinks from '@/components/ui/navLinks'; // Changed import from Li to NavLinks
import { useEffect, useState } from 'react';
import SheetItem from '@/components/ui/sheet-item';

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <header // Changed div to header
      className={`fixed w-full z-53 duration-500 ${
        visible ? 'bg-black/50' : 'bg-black/30'
      }`}
    >
      <div className='container flex items-center justify-between p-2 w-full md:w-auto duration-300'>
        <div className='flex items-center justify-between w-full md:w-auto'>
          <button
            onClick={() => window.location.reload()} // Consider replacing with Next/Link for SPA behavior if appropriate
            className='flex items-center size-7 mr-2 hover:cursor-pointer hover:scale-110 hover:opacity-80 transition-transform duration-200'
          >
            <img
              src='logo-HEXA.png'
              alt='Logo HEXA' // Improved alt text
              className='w-full h-full invert'
            />
          </button>
          {/* Changed h1 to span for semantic SEO, maintaining visual appearance */}
          <span className='max-md:hidden text-3xl md:text-2xl xl:text-2xl font-bold text-neutral-200'>
            <span className='text-teal-700'>HEXA</span>
          </span>
          <div className='md:hidden'>
            <SheetItem />
          </div>
        </div>
        {/* Added nav and ul wrapper for semantic navigation */}
        <nav className='max-md:hidden'>
          <ul className='flex gap-10'>
            <NavLinks /> {/* Changed Li to NavLinks */}
          </ul>
        </nav>
      </div>
    </header> // Changed div to header
  );
}
