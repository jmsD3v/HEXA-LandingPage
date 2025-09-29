import Link from 'next/link';
import SolarIllustration from '@/components/ui/solar-illustration';

export default function SolarNotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center gap-8 px-4">
      <div>
        <p className="text-7xl md:text-8xl font-black bg-gradient-to-r from-yellow-200 via-orange-300 to-rose-400 bg-clip-text text-transparent tracking-tight">
          404
        </p>
        <h1 className="mt-2 text-2xl md:text-3xl font-semibold text-neutral-100">
          Parece que esta ruta no recibe suficiente luz
        </h1>
        <p className="mt-2 text-neutral-400 max-w-xl mx-auto">
          La página que buscás puede estar a la sombra. Probá volver al inicio o explorar nuestros servicios y proyectos.
        </p>
      </div>

      <SolarIllustration />

      <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-md bg-yellow-300 text-neutral-900 font-semibold hover:bg-yellow-200 transition shadow"
        >
          Volver al inicio
        </Link>
        <Link
          href="/#ServicesSection"
          className="px-6 py-3 rounded-md bg-neutral-800 text-neutral-100 border border-white/10 hover:bg-neutral-700 transition"
        >
          Ver servicios
        </Link>
      </div>
    </div>
  );
}
