'use client';
import ServiceItem from '../ui/serviceItem';

interface ServicesSectionProps {}

const ServicesSection: React.FC<ServicesSectionProps> = () => {
  return (
    <section
      data-aos='fade-up'
      data-aos-duration={1000}
      data-aos-easing='ease-in-out'
    >
      {/* Title */}
      <div
        className='container text-center text-gray-300 text-2xl -mt-1'
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'
      >
        Servicios
      </div>

      <div className='w-full flex flex-col items-center text-balance line-clamp-3'>
        {/* Col - 1 */}
        <ServiceItem
          title='Gestión de Proyectos'
          description='Buscamos generar la documentación necesaria apta para construir de cada proyecto, en vista a lo administrativos, orientamos nuestro desarrollo a pre establecer los hitos a cumplir o la manera en la que se determina la parametrización de estos puntos. Esta sección se encuentra marcada por tres partes donde descentralizamos y organizamos la documentación.'
          imageSrc='gestionProyectos.jpeg'
          imageAlt='Hombre gestionando un proyecto'
        />

        {/* Col - 2 */}
        <ServiceItem
          title='Generación Solar Fotovoltaica'
          description='Formamos parte de los tres momentos de los proyectos de generación solar, tanto en la redacción y ejecución del proyecto con la gestión de obra y en la operación y mantenimiento de plantas. Acotamos cada proyecto a la necesidad de cada cliente y nos encargamos de dimensionar la infraestructura necesaria para el mismo. Además optimizamos los tiempos de proyecto para dar con el mejor rendimiento de inversión.'
          imageSrc='paneles8.jpg'
          imageAlt='paneles solares'
          isReversed
        />

        {/* Col - 3 */}
        <ServiceItem
          title='Infraestructura Eléctrica Industrial'
          description={`Realizamos proyectos, obras y servicios de infraestructura eléctrica industrial, realizamos los reportes necesarios para el correcto funcionamiento de planta y cumplir con las mediciones de PAT necesarias. Algunos de los servicios que realizamos: \n
          * Montaje e instalación de grupos electrógenos.
          * arranque suavizado (físicos o electrónicos).
          * Certificación de mediciones eléctricas.
          * Instalaciones de potencia.
          * Corrección de coseno fi.`}
          imageSrc='eTcentral.jpeg'
          imageAlt='Técnico en instalaciones eléctricas'
        />

        {/* Col - 4 */}
        <ServiceItem
          title='Frio Industrial'
          description={`Partimos de los objetivos principales que deben cumplir los almacenamientos refrigerados y el espacio disponible para diseñar la mejor opción para el cliente. Aplicamos las mejores técnicas de fabricación para disminuir el consumo energético y optimizar el proceso de nuestros clientes en el uso refrigerado.Trabajamos con cámaras modulares y cámaras hechas a medida según la disponibilidad, para baja y media temperatura`}
          imageSrc='cold-room.jpg'
          imageAlt='Consultor explicando proyecto energético'
          isReversed
        />
        {/* Col - 5 */}
        <ServiceItem
          title='Climatización'
          description={`Gestión en sistemas de climatización: Evaluación, optimización sistemas climatización buscando como principal objetivo la reducción del consumo de energía. Planificamos con el cliente un cronograma de mantenimientos anuales para realizar los correspondientes mantenimientos preventivos, correctivos y de mantenimientos continuos. \n
          * Sistemas centralizados rooftop, multi split, VRV y VRF. 
          * Sistemas de reparación y mantenimiento.`}
          imageSrc='climatizacion.jpeg'
          imageAlt='Técnico realizando mantenimiento eléctrico'
        />
        {/* Col - 6 */}
        <ServiceItem
          title='Informática e Infraestructura de Redes'
          description={`Provisión de equipamiento – instalación y puesta en funcionamiento de sistemas de comunicación, conectividad y transmisión de datos. \n
          * Sistemas de LAN internas en redes cerradas y abiertas.
          * Sistemas de almacenamientos de datos – DATA CENTER – con respaldo y autonomía. 
          * Servidores en línea con gestión intermedia de respaldo físico.`}
          imageSrc='infraRed.jpeg'
          imageAlt='Torres de telecomunicaciones y redes'
          isReversed
        />
      </div>
    </section>
  );
};

export default ServicesSection;
