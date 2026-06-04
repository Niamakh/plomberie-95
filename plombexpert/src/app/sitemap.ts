import type { MetadataRoute } from "next"
import { FEATURED_ARTICLES } from "@/lib/articles"

// Changez cette URL quand vous déployez votre site
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.plombexpert.fr"

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

  // Pages articles (uniquement celles qui ont une page réelle)
  const articleRoutes: MetadataRoute.Sitemap = FEATURED_ARTICLES
    .filter((article) => article.hasPage)
    .map((article) => ({
      url: `${BASE_URL}/articles/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))

  return [...staticRoutes, ...articleRoutes]
}
