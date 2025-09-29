import Head from 'next/head';

export type SeoProps = {
  title?: string;
  description?: string;
  image?: string; // absolute or relative to /public
  canonical?: string; // absolute or path
  siteName?: string;
  locale?: string; // e.g. es_AR
  ogType?: 'website' | 'article' | 'profile' | string;
  twitterCard?: 'summary' | 'summary_large_image';
  noIndex?: boolean;
  noFollow?: boolean;
  structuredData?: Record<string, any> | Record<string, any>[]; // JSON-LD
};

const SITE_URL = 'https://hexaservicios.com';
const DEFAULTS = {
  title: 'HEXA Servicios Integrales SAS | Ingeniería y Proyectos',
  description:
    'Servicios integrales en gestión de proyectos, generación solar fotovoltaica (SFV), infraestructura eléctrica, frío industrial, climatización e informática.',
  image: '/logo-HEXA.webp',
  siteName: 'HEXA Servicios Integrales SAS',
  locale: 'es_AR',
  twitterCard: 'summary_large_image' as const,
  ogType: 'website',
};

function absUrl(urlOrPath?: string): string | undefined {
  if (!urlOrPath) return undefined;
  if (urlOrPath.startsWith('http')) return urlOrPath;
  return `${SITE_URL}${urlOrPath.startsWith('/') ? '' : '/'}${urlOrPath}`;
}

export default function Seo(props: SeoProps) {
  const title = props.title ?? DEFAULTS.title;
  const description = props.description ?? DEFAULTS.description;
  const imageAbs = absUrl(props.image ?? DEFAULTS.image);
  const canonical = props.canonical ? absUrl(props.canonical) : undefined;
  const siteName = props.siteName ?? DEFAULTS.siteName;
  const locale = props.locale ?? DEFAULTS.locale;
  const ogType = props.ogType ?? DEFAULTS.ogType;
  const twitterCard = props.twitterCard ?? DEFAULTS.twitterCard;
  const robots = [
    props.noIndex ? 'noindex' : 'index',
    props.noFollow ? 'nofollow' : 'follow',
  ].join(', ');

  const jsonLd = Array.isArray(props.structuredData)
    ? props.structuredData
    : props.structuredData
    ? [props.structuredData]
    : [];

  return (
    <Head>
      {/* Primary */}
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="robots" content={robots} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={SITE_URL} />
      {imageAbs && <meta property="og:image" content={imageAbs} />} 
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {imageAbs && <meta name="twitter:image" content={imageAbs} />}

      {/* JSON-LD */}
      {jsonLd.map((schema, i) => (
        <script
          // eslint-disable-next-line react/no-array-index-key
          key={`jsonld-${i}`}
          type="application/ld+json"
          // We trust our own structured data objects
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
