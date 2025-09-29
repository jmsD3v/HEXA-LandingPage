# HEXA Servicios Integrales SAS – Landing Page

Landing page moderna, rápida y accesible para HEXA (Ingeniería, SFV, Infraestructura Eléctrica, Frío Industrial, Climatización e Informática).

## Stack

- **Framework:** Next.js (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Iconos:** react-icons, Iconify
- **Animaciones:** AOS (diferido via `requestIdleCallback`), Embla (carousels)
- **Accesibilidad:** `aria-label`, `sr-only`, `autocomplete` en formularios
- **Imágenes:** `.webp` en `public/` con `next/image` donde aporta
- **Deploy:** Vercel

## Estructura relevante

- `src/app/page.tsx`: Home (usa `<Seo />`, loader, secciones, acciones flotantes)
- `src/components/sections/`: `hero`, `servicesSection`, `whyUs`, `aboutUs`, `contact`, `footer`, `header`
- `src/components/ui/`: UI (loader, floating actions, etc.)
- `src/components/seo/Seo.tsx`: componente SEO centralizado
- `src/lib/seo.ts`: util opcional `buildMetadata()` (si preferís App Router metadata)
- `src/app/not-found.tsx`: 404 personalizada (usa `<Seo noIndex />`)
- `src/app/robots.ts`, `src/app/sitemap.ts`: SEO técnico (robots + sitemap)
- `src/data/`: data estática (sociales, servicios)

## Desarrollo

- `pnpm dev` | `npm run dev`: servidor de desarrollo
- `pnpm build` | `npm run build`: build producción
- `pnpm start` | `npm run start`: servidor producción
- `pnpm lint` | `npm run lint`: ESLint

## Performance y Accesibilidad

- **Imágenes:** `.webp` en todo el sitio; `next/image` con `priority` y `sizes` en hero.
- **AOS diferido:** inicialización tras `load` + `requestIdleCallback` para no interferir con el primer render.
- **Accesibilidad:** `aria-label` + `sr-only` en enlaces solo-ícono, `autocomplete` en inputs, buen contraste y foco.
- **UI flotante:** backdrop y z-index gestionados para no obstruir interacción.

## SEO centralizado (Seo.tsx)

Toda la metadata se maneja con el componente `Seo`.

- **Archivo:** `src/components/seo/Seo.tsx`
- **Props:** `title`, `description`, `image`, `canonical`, `ogType`, `twitterCard`, `noIndex`, `noFollow`, `structuredData` (JSON-LD)
- **Uso (Home):** ver `src/app/page.tsx` (incluye JSON-LD de Organization)
- **Uso (404):** ver `src/app/not-found.tsx` con `noIndex`/`noFollow`

### Ejemplo (página estática – App Router)

```tsx
import Seo from '@/components/seo/Seo';

export default function ProyectosPage() {
  return (
    <>
      <Seo
        title='Proyectos | HEXA'
        description='Casos reales de SFV e infraestructura eléctrica industrial.'
        canonical='/proyectos'
        image='/og-proyectos.webp'
      />
      <main>Contenido…</main>
    </>
  );
}
```

### Ejemplo (página dinámica – App Router)

```tsx
import Seo from '@/components/seo/Seo';

export default async function ProyectoPage({ params }: { params: { slug: string } }) {
  const data = await fetch(`${process.env.API}/proyecto/${params.slug}`).then(r => r.json());
  return (
    <>
      <Seo
        title={`${data.titulo} | HEXA`}
        description={data.descripcion}
        canonical={`/proyecto/${params.slug}`}
        image={data.ogImage ?? '/logo-HEXA.webp'}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.titulo,
          image: data.ogImage,
          datePublished: data.fecha,
        }}
      />
      <main>Detalle…</main>
    </>
  );
}
```

> Nota: También existe `src/lib/seo.ts` con `buildMetadata()` si preferís `export const metadata` del App Router. El proyecto actual usa `<Seo />` para una única estrategia.

## Robots y Sitemap

- `src/app/robots.ts` expone `robots.txt` permitiendo indexación y señalando el sitemap.
- `src/app/sitemap.ts` genera `sitemap.xml` con rutas principales y prioridades.
- Recomendado: verificar dominio en Google Search Console y enviar `https://hexaservicios.com/sitemap.xml`.

## Deploy en Vercel

- Deploy continuo desde el repo.
- Asegurar dominio y variables en Vercel.
- Hard refresh tras cambios de favicon/imágenes (cache fuerte de navegador).

## Contacto

- Web: https://hexaservicios.com
- Instagram: https://www.instagram.com/hexa.servicios
- LinkedIn: https://www.linkedin.com/company/hexa-servicios-integrales
- Email: contacto@hexaservicios.com

## Licencia

Este proyecto es propiedad de HEXA Servicios Integrales SAS. Todos los derechos reservados.
