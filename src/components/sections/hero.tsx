import Header from './header';
//import Social from '../icons/social';
import Image from 'next/image';

export default function hero() {
  return (
    <>
      <Header />
      <section
        className='flex max-md:flex-col h-screen justify-center items-center relative'
      >
        <div className='absolute inset-0 z-0'>
          {' '}
          {/* agregado para que la imagen se quede atrás */}
          <Image
            src='/hero.png'
            alt='paneles solares'
            fill
            priority
            quality={80}
            className='object-cover object-center'
          />
        </div>
        <div className='flex justify-center items-center max-md:h-auto py-8 md:py-0 md:h-full relative z-10'>
          {' '}
          <img
            src='/logo-HEXA-hero.png'
            alt='perfil'
            className='invert w-40 sm:w-48 md:w-56 lg:w-60 mx-auto md:mr-10 lg:mr-10 aspect-square object-contain'
            data-aos='fade-up'
            data-aos-delay='200'
          />
        </div>
        {/* <div className='flex flex-col justify-center items-center z-10 max-md:mt-10'>
          <div
            className='flex flex-col max-md:justify-center max-md:items-center gap-6'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <div className='flex flex-col max-md:justify-center max-md:items-center'>
              <h1
                className='max-md:text-center text-4xl md:text-4xl font-bold bg-clip-text text-teal-700 pb-3 '
                data-aos='fade-up'
              >
                HEXA SERVICIOS INTEGRALES SAS
              </h1>
              <h2
                className='max-md:text-center text-xl md:text-2xl text-teal-700 pb-3'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                Soluciones Integrales para Empresas Modernas
              </h2>
            </div>
            <Social />
          </div>
        </div> */}
      </section>
    </>
  );
}
