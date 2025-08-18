import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';
import ProjectManagementCard from './projectManagementCard';
import { projectManagementModalData } from '../../data/projectManagementModalData';
import type { EmblaOptionsType } from 'embla-carousel';

interface ProjectManagementCarouselProps {
  options?: EmblaOptionsType;
}

const ProjectManagementCarousel: React.FC<ProjectManagementCarouselProps> = (
  props
) => {
  const emblaOptions: EmblaOptionsType = {
    loop: true,
    align: 'start',
    ...(props.options || {}),
  };

  const autoplayPluginOptions = {
    delay: 8000,
    stopOnInteraction: true,
  };

  return (
    <div className='embla text-white embla-container-responsive'>
      <Carousel opts={emblaOptions} autoplayOptions={autoplayPluginOptions}>
        <CarouselContent>
          {projectManagementModalData.map((cardData, index) => (
            <CarouselItem
              key={index}
              className='p-4 basis-full md:basis-1/2 lg:basis-1/2'
            >
              <ProjectManagementCard cardData={cardData} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectManagementCarousel;
