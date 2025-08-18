import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './carousel';
import ServiceCard from './serviceCard';
import { services } from '../../data/services';
import type { EmblaOptionsType } from 'embla-carousel';

interface ServiceCarouselProps {
  options?: EmblaOptionsType;
  selectedService: (typeof services)[0];
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = (props) => {
  const { selectedService } = props;

  // Core Embla options
  const emblaOptions: EmblaOptionsType = {
    loop: true,
    align: 'start',
    ...(props.options || {}),
  };

  // Autoplay plugin specific options
  const autoplayPluginOptions = {
    delay: 5000,
    stopOnInteraction: false,
    loop: true,
    reset: false,
  };

  const selectedServiceIndex = services.findIndex(
    (service) => service.title === selectedService.title
  );

  const carouselServices =
    selectedServiceIndex !== -1
      ? [
          services[selectedServiceIndex],
          ...services.slice(0, selectedServiceIndex),
          ...services.slice(selectedServiceIndex + 1),
        ]
      : services;

  return (
    <div className='embla text-white embla-container-responsive'>
      <Carousel opts={emblaOptions} autoplayOptions={autoplayPluginOptions}>
        <CarouselContent>
          {carouselServices.map((service, index) => (
            <CarouselItem
              key={index}
              className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4'
            >
              <ServiceCard service={service} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ServiceCarousel;
