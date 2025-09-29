import SolarNotFound from '@/components/ui/solar-not-found';
import Seo from '@/components/seo/Seo';

export default function NotFound() {
  return (
    <>
      <Seo
        title="404 – Página no encontrada | HEXA"
        description="La ruta solicitada no existe o está a la sombra. Volvé al inicio o explorá nuestros servicios."
        canonical="/404"
        noIndex
        noFollow
        image="/logo-HEXA.webp"
      />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f0f0f] via-[#141414] to-[#1a1a1a] text-white">
        <SolarNotFound />
      </main>
    </>
  );
}
