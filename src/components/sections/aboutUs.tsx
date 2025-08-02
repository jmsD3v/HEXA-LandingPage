import React from 'react';
import TeamMemberCarousel from '@/components/ui/teamMembersCarousel';
import { EmblaOptionsType } from 'embla-carousel';

const OPTIONS: EmblaOptionsType = { loop: true };
const aboutUs = () => {
  return (
    <section
      className='container'
      data-aos='fade-up'
      data-aos-duration={1000}
      data-aos-easing='ease-in-out'
    >
      <h2
        className='text-4xl font-bold text-center bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text'
        data-aos='fade-down'
        data-aos-duration={1000}
      >
        Nuestro Equipo
      </h2>
      <p
        className='text-lg text-gray-300 text-center mt-4 text-balance'
        data-aos='fade-down'
        data-aos-duration={1000}
        data-aos-delay={200}
      >
        Nuestro equipo está compuesto por profesionales altamente capacitados
        que garantizan la excelencia en cada proyecto.
      </p>
      <br />
      <TeamMemberCarousel options={OPTIONS} />
    </section>
  );
};

export default aboutUs;
