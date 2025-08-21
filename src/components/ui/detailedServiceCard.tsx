import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { detailedServiceData } from '../../data/detailedServiceData';

type CardData = (typeof detailedServiceData)['Gestión de Proyectos'][0];

interface DetailedServiceCardProps {
  cardData: CardData;
}

const DetailedServiceCard: React.FC<DetailedServiceCardProps> = ({
  cardData,
}) => {
  return (
    <Card className='min-h-[300px] max-w-sm mx-auto bg-white/5 backdrop-blur-md border border-white/10 shadow-lg flex flex-col'>
      <CardHeader>
        <CardTitle className='text-xl font-bold text-teal-400'>
          {cardData.title}
        </CardTitle>
        <CardDescription className='text-gray-300 italic'>
          {cardData.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className='flex-grow'>
        <p className='text-gray-300 mb-4 text-balance'>
          {cardData.description}
        </p>
        {cardData.features.length > 0 && (
          <ul className='list-disc list-inside text-gray-300 space-y-1'>
            {cardData.features.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
        )}
      </CardContent>
      {cardData.objective && (
        <CardFooter>
          <p className='text-sm text-teal-300/80 font-semibold'>
            <span className='font-bold text-teal-300'>Objetivo:</span>{' '}
            {cardData.objective}
          </p>
        </CardFooter>
      )}
    </Card>
  );
};

export default DetailedServiceCard;
