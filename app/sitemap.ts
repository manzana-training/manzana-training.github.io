import { MetadataRoute } from 'next'

const BASE_URL = 'https://manzana-training.github.io'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/metodologia`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/decidir-sin-informacion-completa`,
      lastModified: new Date('2026-03-24'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/resistencia-pasiva-el-enemigo-invisible`,
      lastModified: new Date('2026-03-24'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/liderar-sin-estar-seguro`,
      lastModified: new Date('2026-03-24'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/cortar-la-infeccion`,
      lastModified: new Date('2026-03-27'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/oxigeno-o-muerte`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
