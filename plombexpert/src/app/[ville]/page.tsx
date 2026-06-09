import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CityLanding from "@/components/city/CityLanding"
import { CITIES, getCityBySlug } from "@/lib/cities"

interface Props {
  params: Promise<{ ville: string }>
}

/** Pré-génère toutes les pages villes au build */
export function generateStaticParams() {
  return CITIES.map((city) => ({ ville: city.slug }))
}

/** SEO dynamique par ville */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville } = await params
  const city = getCityBySlug(ville)
  if (!city) return {}

  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.plombier-95-service.fr"

  const title = city.customTitle
    ?? `Plombier ${city.name} ${city.cp} - Dépannage 24/7 | Plombier 95 Service`
  const description = city.customDescription
    ?? `Plombier à ${city.name} (${city.cp}) : dépannage urgent, recherche de fuite, débouchage, chauffe-eau. Devis gratuit, intervention rapide. Tél direct.`

  return {
    title,
    description,
    keywords: [city.mainKeyword, ...city.secondaryKeywords],
    alternates: {
      canonical: `${BASE_URL}/${city.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${city.slug}/`,
      type: "website",
    },
  }
}

export default async function VillePage({ params }: Props) {
  const { ville } = await params
  const city = getCityBySlug(ville)

  if (!city) notFound()

  return (
    <>
      <Navbar />
      <main>
        <CityLanding city={city} />
      </main>
      <Footer />
    </>
  )
}
