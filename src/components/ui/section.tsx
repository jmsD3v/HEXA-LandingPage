import * as React from 'react';
import { cn } from '@/lib/utils';

export type SectionVariant =
  | 'default'
  | 'hero'
  | 'services'
  | 'whyUs'
  | 'aboutUs'
  | 'contact';

const variantClasses: Record<SectionVariant, string> = {
  // Base fallback
  default: 'flex flex-col min-h-[100dvh]',
  // Matches current Hero section classes exactly
  hero: 'flex flex-col min-h-[100dvh] from-[#242424] via-[#1c1c1c] to-[#161616]',
  // Matches ServicesSection wrapper
  services:
    'flex flex-col min-h-[100dvh] gap-6 py-15 justify-center items-center bg-secondary-foreground',
  // Matches WhyUs wrapper
  whyUs:
    'bg-muted-foreground min-h-[100dvh] py-10 flex justify-center items-center text-white px-4 md:px-10 lg:px-20',
  // Matches AboutUs wrapper
  aboutUs:
    'flex flex-col min-h-[100dvh] gap-6 py-16 bg-radial from-[#242424] via-[#1c1c1c] to-[#161616] lg:justify-center lg:items-center',
  // Matches Contact wrapper
  contact:
    'bg-primary min-h-[100dvh] py-10 flex justify-center items-center text-white px-4 md:px-10 lg:px-20',
};

type Props = React.PropsWithChildren<{
  id?: string;
  variant?: SectionVariant;
  className?: string;
  withContainer?: boolean;
}>;

export default function Section({ id, variant = 'default', className, withContainer = false, children }: Props) {
  const content = withContainer ? <div className='container'>{children}</div> : children;
  return (
    <section id={id} className={cn(variantClasses[variant], className)}>
      {content}
    </section>
  );
}
