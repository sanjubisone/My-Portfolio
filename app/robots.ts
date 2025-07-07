import { MetadataRoute } from 'next'
 
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://sanju-bisone.vercel.app/' // ⚠️ अपनी असली वेबसाइट का URL यहाँ डालें

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}