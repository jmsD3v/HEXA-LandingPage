

const clients = [
  { name: 'TechSolar', logo: 'TS' },
  { name: 'GreenEnergy', logo: 'GE' },
  { name: 'Industrias A', logo: 'IA' },
  { name: 'Constructora B', logo: 'CB' },
  { name: 'AgroFuture', logo: 'AF' },
  { name: 'EcoPower', logo: 'EP' },
  { name: 'Solaris', logo: 'SO' },
];

export default function Clients() {
  return (
    <div className='w-full py-12 bg-[#161616] border-b border-white/5 overflow-hidden'>
      <div className='container mx-auto px-4 mb-8 text-center'>
        <p className='text-sm text-gray-400 font-medium uppercase tracking-wider'>
          Empresas que confían en nosotros
        </p>
      </div>
      
      {/* Marquee Container 1 (Left) */}
      <div className='relative flex overflow-x-hidden group mb-8'>
        <div className='animate-marquee whitespace-nowrap flex gap-16 items-center'>
          {/* We repeat the clients list enough times to ensure it's wider than any screen, 
              and then duplicate that whole block for the 50% seamless scroll. 
              Here we use 4 repetitions as the "base unit". 
              So we render 4+4 = 8 sets total. */}
          {Array.from({ length: 8 }).map((_, setIndex) => (
            clients.map((client, index) => (
              <span
                key={`${setIndex}-${index}`}
                className='text-2xl font-bold text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer select-none opacity-50 hover:opacity-100'
              >
                {client.name}
              </span>
            ))
          ))}
        </div>
        <div className='absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#161616] to-transparent pointer-events-none' />
        <div className='absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#161616] to-transparent pointer-events-none' />
      </div>

       {/* Marquee Container 2 (Right) */}
       <div className='relative flex overflow-x-hidden group'>
        <div className='animate-marquee-reverse whitespace-nowrap flex gap-16 items-center'>
          {Array.from({ length: 8 }).map((_, setIndex) => (
             clients.map((client, index) => (
              <span
                key={`rev-${setIndex}-${index}`}
                className='text-2xl font-bold text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer select-none opacity-50 hover:opacity-100'
              >
                {client.name}
              </span>
            ))
          ))}
        </div>
        <div className='absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#161616] to-transparent pointer-events-none' />
        <div className='absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#161616] to-transparent pointer-events-none' />
      </div>
    </div>
  );
}
