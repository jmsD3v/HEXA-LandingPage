import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { services } from '../../data/services';

interface ServiceCardProps {
  service: (typeof services)[0];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card className='max-w-sm mx-auto bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <CardHeader>
        <div className='relative h-40 w-full mb-4'>
          <Image
            src={service.image}
            alt={service.title}
            fill
            className='rounded-t-lg object-cover'
          />
        </div>
        <CardTitle className='text-xl font-semibold text-white'>
          {service.title}
        </CardTitle>
        <CardDescription className='text-gray-400'>
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-wrap gap-2'>
          {service.features.map((feature, featureIndex) => (
            <Badge
              key={featureIndex}
              variant='secondary'
              className='bg-teal-500/20 text-teal-300 border-teal-500/30'
            >
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
