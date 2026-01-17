import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'Parque Solar Norte',
    category: 'Solar',
    power: '200 kWp',
    location: 'Salta',
    image: '/dron-parque-solar3.mp4',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    title: 'Edificio Corporativo',
    category: 'Climatización',
    power: 'VRV IV',
    location: 'CABA',
    image: '/climatizacion.webp',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    title: 'Planta Industrial',
    category: 'Eléctrica',
    power: '500 kVA',
    location: 'Córdoba',
    image: '/eTcentral.webp',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 4,
    title: 'Data Center',
    category: 'IT',
    power: 'Tier III',
    location: 'Neuquén',
    image: '/data-center1.mp4',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 5,
    title: 'Frigorífico Export',
    category: 'Frío Ind.',
    power: '-18°C',
    location: 'Rosario',
    image: '/cold-room.mp4',
    span: 'md:col-span-1 md:row-span-1',
  },
];

const ProjectItem = ({ 
  project, 
  isActive, 
  onHover 
}: { 
  project: any; 
  isActive: boolean; 
  onHover: () => void;
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(project.image);

  React.useEffect(() => {
    if (!isVideo || !videoRef.current) return;

    if (isActive) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Auto-play prevented:", error);
        });
      }
    } else {
      videoRef.current.pause();
      // Optional: Reset to start? videoRef.current.currentTime = 0;
    }
  }, [isActive, isVideo]);

  return (
    <div
      data-aos='fade-up'
      data-aos-delay={project.id * 100}
      className={`relative group overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 ${project.span}`}
      onMouseEnter={onHover}
    >
      {/* Image or Video */}
      {isVideo ? (
        <video
          ref={videoRef}
          src={project.image}
          loop
          muted
          playsInline
          className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
      ) : (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className='object-cover transition-transform duration-700 group-hover:scale-110'
        />
      )}

      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300' />

      {/* Content */}
      <div className='absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
        <Badge className='w-fit mb-2 bg-teal-500/90 hover:bg-teal-600 border-none text-white'>
          {project.category}
        </Badge>
        <h3 className='text-xl md:text-2xl font-bold text-white mb-1'>
          {project.title}
        </h3>
        <div className='flex items-center gap-3 text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100'>
          <span>📍 {project.location}</span>
          <span>⚡ {project.power}</span>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  // Filter projects that are actually videos
  const videoProjects = React.useMemo(() => 
    projects.filter(p => /\.(mp4|webm|ogg|mov)$/i.test(p.image)), 
  []);
  
  const [activeId, setActiveId] = React.useState<number | null>(null);

  // Cycle through videos
  React.useEffect(() => {
    if (videoProjects.length === 0) return;

    // Start with the first video if none active
    if (activeId === null) {
      setActiveId(videoProjects[0].id);
    }

    const interval = setInterval(() => {
      setActiveId(current => {
        const currentIndex = videoProjects.findIndex(p => p.id === current);
        const nextIndex = (currentIndex + 1) % videoProjects.length;
        return videoProjects[nextIndex].id;
      });
    }, 6000); // Change video every 6 seconds

    return () => clearInterval(interval);
  }, [videoProjects, activeId]); // activeId dependency might reset timer on hover, which is actually good behavior

  return (
    <div className='w-full py-20 bg-[#1c1c1c] text-white'>
      <div className='container mx-auto px-4'>
        <div 
          className='mb-12 text-center'
          data-aos='fade-up'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Proyectos Destacados
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Soluciones de ingeniería aplicadas a la realidad. Conozca algunos de nuestros casos de éxito más recientes.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]'>
          {projects.map((project) => (
            <ProjectItem 
              key={project.id} 
              project={project} 
              isActive={activeId === project.id}
              onHover={() => setActiveId(project.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
