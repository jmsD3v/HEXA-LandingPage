import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hexaservicios.com';
  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: 'weekly',
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#ServicesSection`,
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#aboutUs`,
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#contact` ,
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified: new Date(),
    },
  ];
}
