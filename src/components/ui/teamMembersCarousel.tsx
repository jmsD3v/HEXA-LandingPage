import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './carousel';
import TeamMemberCard from './teamMemberCard';
import teamMembersData from '../../data/teamMembers';
import type { EmblaOptionsType } from 'embla-carousel';

interface TeamMembersCarouselProps {
  options?: EmblaOptionsType;
}

const TeamMembersCarousel: React.FC<TeamMembersCarouselProps> = (props) => {
  // Core Embla options
  const emblaOptions: EmblaOptionsType = {
    loop: true,
    align: 'start',
    ...(props.options || {}),
  };

  // Autoplay plugin specific options
  const autoplayPluginOptions = {
    delay: 3000,
    stopOnInteraction: false, // Ensures continuous play
    loop: true, // Autoplay plugin's own loop
    reset: false, // Prevents reset on interaction when stopOnInteraction is false
  };

  // Lógica para duplicar los datos si aún la necesitas para un loop fluido
  const repeatedTeamMembersData = React.useMemo(() => {
    const repetitionCount = 3;
    const repeated: typeof teamMembersData = [];
    if (Array.isArray(teamMembersData)) {
      for (let i = 0; i < repetitionCount; i++) {
        repeated.push(...teamMembersData);
      }
    }
    return repeated;
  }, [teamMembersData]);

  return (
    <div className='embla text-white embla-container-responsive mask-l-from-85% mask-l-to-98% mask-r-from-85% mask-r-to-98%'>
      <Carousel opts={emblaOptions} autoplayOptions={autoplayPluginOptions}>
        <CarouselContent>
          {repeatedTeamMembersData.map((member, index) => (
            <CarouselItem
              key={index}
              className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4'
            >
              <TeamMemberCard member={member} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TeamMembersCarousel;
