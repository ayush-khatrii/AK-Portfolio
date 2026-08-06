import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ayushkhatri.in',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://ayushkhatri.in/about',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://ayushkhatri.in/blogs',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://ayushkhatri.in/gallery',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://ayushkhatri.in/contact',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://ayushkhatri.in/projects   ',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
