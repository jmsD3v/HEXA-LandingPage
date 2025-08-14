// 'use client';

// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from '@/components/ui/sheet';
// import { Icon } from '@iconify/react';
// import Li from './navLinks';
// import { useState } from 'react';

// export default function SheetItem() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className='md:hidden'>
//       <Sheet open={open} onOpenChange={setOpen}>
//         <SheetTrigger>
//           <Icon
//             icon='material-symbols:menu-rounded'
//             className='text-neutral-200 size-10'
//           />
//         </SheetTrigger>
//         <SheetContent className='w-[40%] max-w-sm'>
//           <SheetHeader className='flex flex-col gap-10'>
//             <SheetTitle className='text-purple-600 text-2xl font-bold'>
//               HEXA
//             </SheetTitle>
//             <SheetDescription asChild>
//               <ul className='flex flex-col gap-5'>
//                 <Li />
//               </ul>
//             </SheetDescription>
//           </SheetHeader>
//         </SheetContent>
//       </Sheet>
//     </div>
//   );
// }

'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Icon } from '@iconify/react';
import NavLinks from './navLinks';
import { useState } from 'react';

interface SheetItemProps {
  onServiceClick: (service: { title: string; description: string }) => void;
}

export default function SheetItem({ onServiceClick }: SheetItemProps) {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleServiceClickAndClose = (service: {
    title: string;
    description: string;
  }) => {
    onServiceClick(service);
    setOpen(false);
  };

  return (
    <div className='md:hidden'>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Icon
            icon='material-symbols:menu-rounded'
            className='text-neutral-200 size-10'
          />
        </SheetTrigger>
        <SheetContent className='w-[40%] max-w-sm'>
          <SheetHeader className='flex flex-col gap-10'>
            <SheetTitle className='text-green-300 text-2xl font-bold'>
              HEXA
            </SheetTitle>
            <SheetDescription asChild>
              <nav>
                <ul className='flex flex-col gap-5'>
                  <NavLinks
                    onLinkClick={handleLinkClick}
                    onServiceClick={handleServiceClickAndClose}
                  />
                </ul>
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
