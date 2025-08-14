import * as Dialog from '@radix-ui/react-dialog';

interface ServiceModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function ServiceModal({
  title,
  description,
  isOpen,
  onOpenChange,
}: ServiceModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/80 fixed inset-0 z-60' />
        <Dialog.Content className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 border border-gray-700 p-8 rounded-xl shadow-lg text-white max-w-lg w-full z-60'>
          <Dialog.Title className='text-3xl font-bold text-teal-500'>
            {title}
          </Dialog.Title>
          <Dialog.Description className='mt-4 text-gray-300'>
            {description}
          </Dialog.Description>
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
