import { MetadataRoute } from 'next'
 
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://sanju-bisone.vercel.app/'

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // अगर आपके और भी पेज हैं (जैसे /blog), तो उन्हें यहाँ जोड़ें
  ]
}