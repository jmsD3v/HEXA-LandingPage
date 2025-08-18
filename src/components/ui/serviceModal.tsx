import * as Dialog from '@radix-ui/react-dialog';
import ServiceCarousel from './serviceCarousel';
import DetailedServiceCarousel from './detailedServiceCarousel';
import { services } from '../../data/services';
import { detailedServiceData } from '../../data/detailedServiceData';

interface ServiceModalProps {
  service: (typeof services)[0] | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function ServiceModal({
  service,
  isOpen,
  onOpenChange,
}: ServiceModalProps) {
  if (!service) {
    return null;
  }

  const serviceDetails =
    detailedServiceData[service.title as keyof typeof detailedServiceData];

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/80 fixed inset-0 z-50' />
        <Dialog.Content className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 border border-gray-700 p-8 rounded-xl shadow-lg text-white max-w-4xl w-full z-50'>
          <Dialog.Title className='text-3xl font-bold text-teal-500 mb-4'>
            {service.title}
          </Dialog.Title>
          {serviceDetails ? (
            <DetailedServiceCarousel data={serviceDetails} />
          ) : (
            <ServiceCarousel selectedService={service} />
          )}
          <Dialog.Close asChild>
            <button className='mt-8 w-full bg-teal-600 text-white font-semibold py-3 rounded-lg hover:bg-teal-700 transition'>
              Cerrar
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
