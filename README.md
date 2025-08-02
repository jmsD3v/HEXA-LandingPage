# HEXA Landing Page

Esta es la landing page para HEXA Servicios Integrales SAS, desarrollada con Next.js y TypeScript.

## Descripción

El proyecto consiste en una landing page moderna y responsive que presenta los servicios y proyectos de HEXA Servicios Integrales SAS. Incluye animaciones al hacer scroll, un carrusel de proyectos y un diseño adaptable a diferentes dispositivos.

## Tecnologías Utilizadas

*   **Framework:** Next.js
*   **Lenguaje:** TypeScript
*   **Estilos:** Tailwind CSS
*   **Animaciones:**
    *   AOS (Animate On Scroll)
    *   Embla Carousel
*   **Linting/Formatting:** ESLint, Prettier

## Scripts Disponibles

En el archivo `package.json`, puedes encontrar los siguientes scripts:

*   `npm run dev` o `pnpm dev`: Inicia el servidor de desarrollo.
*   `npm run build` o `pnpm build`: Compila la aplicación para producción.
*   `npm run start` o `pnpm start`: Inicia el servidor de producción (después de un `build`).
*   `npm run lint` o `pnpm lint`: Ejecuta el linter (ESLint).

## Mejoras Realizadas (Sesión Actual)

Durante la sesión actual de desarrollo asistido, se realizaron las siguientes mejoras:

*   **Configuración de Tailwind CSS:** Se creó un archivo `tailwind.config.ts` base.
*   **Optimización SEO:**
    *   Se mejoraron los metadatos en `src/app/layout.tsx` (título, descripción, keywords, Open Graph, Twitter Cards, `lang="es"`).
    *   Se corrigió la jerarquía de encabezados (asegurando un solo `<h1>` por página).
    *   Se mejoró la semántica HTML en el header y la navegación (uso de `<header>`, `<nav>`).
    *   Se crearon los archivos `public/robots.txt` y `public/sitemap.xml` (con URLs de ejemplo para ser actualizadas).
    *   Se añadieron datos estructurados (Schema.org - `Organization`) en `src/app/layout.tsx` (con datos de ejemplo).
    *   Se actualizaron los enlaces externos para incluir `rel="noopener noreferrer"`.
*   **Análisis General:** Se revisaron aspectos de animaciones, optimización de imágenes y diseño responsive, con recomendaciones para futuras mejoras.

## Contribuir

_(Añadir aquí información sobre cómo contribuir al proyecto, si es relevante)._

## Contacto

_(Añadir información de contacto o enlaces relevantes de HEXA Servicios Integrales SAS)._

---

*Este README.md fue generado inicialmente por una IA asistente de desarrollo. Por favor, revisalo, complétalo y ajustalo según sea necesario.*
