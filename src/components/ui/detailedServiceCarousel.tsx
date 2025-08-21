import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';
import DetailedServiceCard from './detailedServiceCard';
import type { EmblaOptionsType } from 'embla-carousel';
import { detailedServiceData } from '@/data/detailedServiceData';

type ServiceData = (typeof detailedServiceData)['Gestión de Proyectos'];

interface DetailedServiceCarouselProps {
  options?: EmblaOptionsType;
  data: ServiceData;
}

const DetailedServiceCarousel: React.FC<DetailedServiceCarouselProps> = (
  props
) => {
  const { data } = props;
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
          {data.map((cardData, index) => (
            <CarouselItem
              key={index}
              className='p-4 basis-full sm:basis-1/2'
            >
              <DetailedServiceCard cardData={cardData} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default DetailedServiceCarousel;
