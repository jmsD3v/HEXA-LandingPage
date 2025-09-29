import type { Metadata } from 'next';

export type SeoInput = {
  title?: string;
  description?: string;
  image?: string; // path relative to /public or absolute
  canonical?: string; // path ("/ruta") o URL absoluta
  robots?: Partial<NonNullable<Metadata['robots']>>;
  locale?: string; // ej: es_AR
};

const SITE_URL = 'https://hexaservicios.com';
const DEFAULTS = {
  title: 'HEXA Servicios Integrales SAS | Ingeniería y Proyectos',
  description:
    'Servicios integrales en gestión de proyectos, generación solar fotovoltaica (SFV), infraestructura eléctrica, frío industrial, climatización e informática.',
  image: '/logo-HEXA.webp',
  locale: 'es_AR',
};

function absoluteUrl(urlOrPath?: string) {
  if (!urlOrPath) return `${SITE_URL}/`;
  if (urlOrPath.startsWith('http')) return urlOrPath;
  return `${SITE_URL}${urlOrPath.startsWith('/') ? '' : '/'}${urlOrPath}`;
}

export function buildMetadata(input: SeoInput = {}): Metadata {
  const title = input.title ?? DEFAULTS.title;
  const description = input.description ?? DEFAULTS.description;
  const imageAbs = absoluteUrl(input.image ?? DEFAULTS.image);
  const canonical = input.canonical ? absoluteUrl(input.canonical) : absoluteUrl('/');
  const locale = input.locale ?? DEFAULTS.locale;
  // default robots configuration (object form)
  const baseRobots: NonNullable<Metadata['robots']> = {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  };

  // resolve final robots value: string overrides, object merges with defaults
  const robots: Metadata['robots'] = input.robots
    ? typeof (input.robots as Metadata['robots']) === 'string'
      ? (input.robots as Metadata['robots'])
      : { ...baseRobots, ...(input.robots as object) }
    : baseRobots;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: 'website',
      url: SITE_URL,
      images: [imageAbs],
      siteName: 'HEXA Servicios Integrales SAS',
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageAbs],
    },
    robots,
  } satisfies Metadata;
}

export const defaultSeo = buildMetadata();

