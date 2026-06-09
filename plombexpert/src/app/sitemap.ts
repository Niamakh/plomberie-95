import type { MetadataRoute } from "next"
import { FEATURED_ARTICLES } from "@/lib/articles"
import { CITIES } from "@/lib/cities"

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.plombier-95-service.fr"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Pages statiques
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/articles`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ]

  // Pages articles
  const articleRoutes: MetadataRoute.Sitemap = FEATURED_ARTICLES
    .filter((article) => article.hasPage)
    .map((article) => ({
      url: `${BASE_URL}/articles/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  // Pages villes (priorité haute — pages commerciales)
  const cityRoutes: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${BASE_URL}/${city.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...cityRoutes, ...articleRoutes]
}
