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
          title='Infraestructura Eléctrica'
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
          title='Automatización y Control'
          description='Diseñamos e implementamos sistemas de automatización para plantas industriales, integrando sensores, PLCs, interfaces HMI y monitoreo remoto. Mejoramos procesos para reducir errores humanos y aumentar la eficiencia.'
          imageSrc='paneles2.jpg'
          imageAlt='Panel de automatización industrial'
          isReversed
        />
        {/* Col - 7 */}
        <ServiceItem
          title='Trámites y Habilitaciones Técnicas'
          description='Brindamos soporte completo en la gestión de permisos, habilitaciones eléctricas, presentación de planos, memorias técnicas y toda la documentación requerida por entes reguladores y distribuidoras.'
          imageSrc='paneles3.jpg'
          imageAlt='Firma de documentos técnicos'
        />
        {/* Col - 8 */}
        <ServiceItem
          title='Infrastructura de Redes'
          description='Diseñamos e implementamos redes de datos y telecomunicaciones, asegurando una conectividad robusta y segura. Realizamos auditorías de red, instalación de cableado estructurado y configuración de equipos de red.'
          imageSrc='infraRed.jpeg'
          imageAlt='Torres de telecomunicaciones y redes'
          isReversed
        />
      </div>
    </section>
  );
};

export default ServicesSection;
