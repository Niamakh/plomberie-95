import type { Metadata } from "next"
import Script from "next/script"
import { notFound } from "next/navigation"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CityLanding from "@/components/city/CityLanding"
import { CITIES, getCityBySlug } from "@/lib/cities"

interface Props {
  params: Promise<{ ville: string }>
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.plombier-95-service.fr"
// TODO: remplacer par le vrai numéro de téléphone
const PHONE_SCHEMA = "+33XXXXXXXXXX"

/** Pré-génère toutes les pages villes au build */
export function generateStaticParams() {
  return CITIES.map((city) => ({ ville: city.slug }))
}

/** SEO dynamique par ville */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville } = await params
  const city = getCityBySlug(ville)
  if (!city) return {}

  const title =
    city.customTitle ??
    `Plombier ${city.name} ${city.cp} - Dépannage 24/7 | Plombier 95 Service`
  const description =
    city.customDescription ??
    `Plombier à ${city.name} (${city.cp}) : dépannage urgent, recherche de fuite, débouchage, chauffe-eau. Devis gratuit, intervention rapide. Tél direct.`

  const metadata: Metadata = {
    title,
    description,
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

  if (!["Plombier-Gonesse", "Plombier-sur-Herblay", "Plombier-Goussainville", "Artisan-Plombier-Saint-Gratien", "Plombier-a-Ermont", "Plombier-Montmagny", "Plombier-Montmorency", "Plombier-Argenteuil-95100"].includes(city.slug)) {
    metadata.keywords = [city.mainKeyword, ...city.secondaryKeywords]
  }

  if (city.customTwitterTitle || city.customTwitterDescription) {
    metadata.twitter = {
      card: "summary_large_image",
      title: city.customTwitterTitle ?? title,
      description: city.customTwitterDescription ?? description,
    }
  }

  return metadata
}

function GonesseSchemas() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "Plombier 95 Service",
    url: `${BASE_URL}/Plombier-Gonesse/`,
    telephone: PHONE_SCHEMA,
    address: {
      "@type": "PostalAddress",
      streetAddress: "À COMPLÉTER",
      addressLocality: "Gonesse",
      postalCode: "95500",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.9895,
      longitude: 2.4573,
    },
    areaServed: [
      { "@type": "City", name: "Gonesse" },
      { "@type": "City", name: "Garges-lès-Gonesse" },
      { "@type": "City", name: "Sarcelles" },
      { "@type": "City", name: "Villepinte" },
      { "@type": "City", name: "Arnouville" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "€€",
    hasCredential: "RGE Qualieau, Qualigaz",
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte un plombier à Gonesse ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos tarifs démarrent à 79 € HT pour une intervention standard en journée. Les urgences (nuit, week-end, jour férié) sont majorées — le tarif est annoncé avant déplacement. Devis gratuit systématique pour toute rénovation.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous en urgence à Gonesse la nuit ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, notre service d'urgence plomberie à Gonesse fonctionne 24h/24, 7j/7, 365 jours par an. En cas de dégât des eaux actif, fuite importante ou WC hors service, nous envoyons un technicien dans l'heure.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles zones couvrez-vous autour de Gonesse ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous intervenons à Gonesse (95500) et dans les communes voisines du Val-d'Oise, sans frais de déplacement supplémentaires : Villepinte, Garges-lès-Gonesse, Sarcelles, Arnouville, Bonneuil-en-France.",
        },
      },
      {
        "@type": "Question",
        name: "Comment détecter une fuite d'eau cachée à Gonesse ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signes : facture d'eau élevée, taches d'humidité sur les murs, moisissures sans cause, bruit d'eau robinets fermés. Nous utilisons caméra thermique et traceur de gaz pour localiser sans démolition.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous pour les WC qui coulent à Gonesse ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nos plombiers à Gonesse réparent tout type de WC défaillant : chasse d'eau qui fuit, mécanisme de flotteur bloqué, joint de clapet usé ou WC suspendu défectueux. Intervention le jour même sur Gonesse (95500).",
        },
      },
    ],
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Plombier Gonesse 95500",
        item: `${BASE_URL}/Plombier-Gonesse/`,
      },
    ],
  }

  const speculationRules = {
    prerender: [{ eagerness: "moderate", where: { href_matches: "/*" } }],
    prefetch: [{ eagerness: "conservative", where: { href_matches: "/*" } }],
  }

  return (
    <>
      <Script
        id="schema-local-business-gonesse"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <Script
        id="schema-faq-gonesse"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <Script
        id="schema-breadcrumb-gonesse"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Script
        id="speculation-rules-gonesse"
        type="speculationrules"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speculationRules) }}
      />
    </>
  )
}

function HerblaySchemas() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "Plombier 95 Service",
    url: `${BASE_URL}/Plombier-sur-Herblay/`,
    telephone: PHONE_SCHEMA,
    address: {
      "@type": "PostalAddress",
      streetAddress: "À COMPLÉTER",
      addressLocality: "Herblay-sur-Seine",
      postalCode: "95220",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.9897,
      longitude: 2.1697,
    },
    areaServed: [
      { "@type": "City", name: "Herblay-sur-Seine" },
      { "@type": "City", name: "Conflans-Sainte-Honorine" },
      { "@type": "City", name: "Argenteuil" },
      { "@type": "City", name: "Cergy" },
      { "@type": "City", name: "Franconville" },
      { "@type": "City", name: "Taverny" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "€€",
    hasCredential: "RGE Qualieau, Qualigaz",
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte un plombier à Herblay ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos tarifs démarrent à 79 € HT pour une intervention standard en journée. Les urgences (nuit, week-end, jour férié) sont majorées — le tarif est annoncé avant déplacement. Devis gratuit systématique pour toute rénovation.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous en urgence à Herblay la nuit ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, notre service d'urgence plomberie à Herblay fonctionne 24h/24, 7j/7, 365 jours par an. En cas de dégât des eaux actif, fuite importante ou WC hors service, nous envoyons un technicien dans l'heure.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles zones couvrez-vous autour de Herblay ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous intervenons à Herblay (95220) et dans les communes voisines : Conflans-Sainte-Honorine, Argenteuil, Cergy, Franconville, Taverny. Aucun frais de déplacement supplémentaire dans notre zone.",
        },
      },
      {
        "@type": "Question",
        name: "Acceptez-vous les demandes de prise en charge assurance ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Nous établissons tous les documents nécessaires à votre déclaration de sinistre (rapport, photos, devis détaillé). Nous travaillons régulièrement avec AXA, MAAF, Allianz et autres assureurs.",
        },
      },
      {
        "@type": "Question",
        name: "Comment détecter une fuite d'eau cachée à Herblay ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signes : facture d'eau élevée, taches d'humidité sur les murs, moisissures sans cause, bruit d'eau robinets fermés. Nous utilisons caméra thermique et traceur de gaz pour localiser sans démolition.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous pour les WC qui coulent à Herblay ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nos plombiers à Herblay réparent tout type de WC défaillant : chasse d'eau qui fuit, flotteur bloqué, joint de clapet usé ou WC suspendu défectueux. Intervention le jour même sur Herblay (95220).",
        },
      },
    ],
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Plombier Herblay 95220",
        item: `${BASE_URL}/Plombier-sur-Herblay/`,
      },
    ],
  }

  return (
    <>
      <Script
        id="schema-local-business-herblay"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <Script
        id="schema-faq-herblay"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <Script
        id="schema-breadcrumb-herblay"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}

function GoussainvilleSchemas() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "Plombier 95 Service",
    url: `${BASE_URL}/Plombier-Goussainville/`,
    telephone: PHONE_SCHEMA,
    address: {
      "@type": "PostalAddress",
      streetAddress: "À COMPLÉTER",
      addressLocality: "Goussainville",
      postalCode: "95190",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.0127,
      longitude: 2.4624,
    },
    areaServed: [
      { "@type": "City", name: "Goussainville" },
      { "@type": "City", name: "Gonesse" },
      { "@type": "City", name: "Sarcelles" },
      { "@type": "City", name: "Villiers-le-Bel" },
      { "@type": "City", name: "Garges-lès-Gonesse" },
      { "@type": "City", name: "Fosses" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "€€",
    hasCredential: "RGE Qualieau, Qualigaz",
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte un plombier à Goussainville ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos tarifs démarrent à 79 € HT pour une intervention standard en journée. Les urgences (nuit, week-end, jour férié) sont majorées — le tarif est annoncé avant déplacement. Devis gratuit systématique pour toute rénovation.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous en urgence à Goussainville la nuit ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, notre service d'urgence plomberie à Goussainville fonctionne 24h/24, 7j/7, 365 jours par an. En cas de dégât des eaux actif, fuite importante ou WC hors service, nous envoyons un technicien dans l'heure.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles zones couvrez-vous autour de Goussainville ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous intervenons à Goussainville (95190) et dans les communes voisines du Val-d'Oise, sans frais de déplacement supplémentaires : Gonesse, Sarcelles, Villiers-le-Bel, Garges-lès-Gonesse, Fosses.",
        },
      },
      {
        "@type": "Question",
        name: "Acceptez-vous les demandes de prise en charge assurance ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Nous établissons tous les documents nécessaires à votre déclaration de sinistre (rapport, photos, devis détaillé). Nous travaillons régulièrement avec AXA, MAAF, Allianz et autres assureurs.",
        },
      },
      {
        "@type": "Question",
        name: "Comment détecter une fuite d'eau cachée à Goussainville ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signes : facture d'eau élevée, taches d'humidité sur les murs, moisissures sans cause, bruit d'eau robinets fermés. Nous utilisons caméra thermique et traceur de gaz pour localiser sans démolition.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous pour les WC qui coulent à Goussainville ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nos plombiers à Goussainville réparent tout type de WC défaillant : chasse d'eau qui fuit, flotteur bloqué, joint de clapet usé ou WC suspendu défectueux. Intervention le jour même sur Goussainville (95190).",
        },
      },
    ],
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Plombier Goussainville 95190",
        item: `${BASE_URL}/Plombier-Goussainville/`,
      },
    ],
  }

  return (
    <>
      <Script
        id="schema-local-business-goussainville"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <Script
        id="schema-faq-goussainville"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <Script
        id="schema-breadcrumb-goussainville"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}

function SaintGratienSchemas() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "Plombier 95 Service",
    url: `${BASE_URL}/Artisan-Plombier-Saint-Gratien/`,
    telephone: PHONE_SCHEMA,
    address: {
      "@type": "PostalAddress",
      streetAddress: "À COMPLÉTER",
      addressLocality: "Saint-Gratien",
      postalCode: "95210",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.9697,
      longitude: 2.2883,
    },
    areaServed: [
      { "@type": "City", name: "Saint-Gratien" },
      { "@type": "City", name: "Enghien-les-Bains" },
      { "@type": "City", name: "Soisy-sous-Montmorency" },
      { "@type": "City", name: "Sannois" },
      { "@type": "City", name: "Ermont" },
      { "@type": "City", name: "Deuil-la-Barre" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "€€",
    hasCredential: "RGE Qualieau, Qualigaz",
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte un plombier à Saint-Gratien ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos tarifs démarrent à 79 € HT pour une intervention standard en journée. Les urgences (nuit, week-end, jour férié) sont majorées — le tarif est annoncé avant déplacement. Devis gratuit systématique pour toute rénovation.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous en urgence à Saint-Gratien la nuit ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, notre service d'urgence plomberie à Saint-Gratien fonctionne 24h/24, 7j/7, 365 jours par an. En cas de dégât des eaux actif, fuite importante ou WC hors service, nous envoyons un technicien dans l'heure.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles zones couvrez-vous autour de Saint-Gratien ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous intervenons à Saint-Gratien (95210) et dans les communes voisines du Val-d'Oise, sans frais de déplacement supplémentaires : Enghien-les-Bains, Soisy-sous-Montmorency, Sannois, Ermont, Deuil-la-Barre.",
        },
      },
      {
        "@type": "Question",
        name: "Acceptez-vous les demandes de prise en charge assurance ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Nous établissons tous les documents nécessaires à votre déclaration de sinistre (rapport, photos, devis détaillé). Nous travaillons régulièrement avec AXA, MAAF, Allianz et autres assureurs.",
        },
      },
      {
        "@type": "Question",
        name: "Comment détecter une fuite d'eau cachée à Saint-Gratien ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signes : facture d'eau élevée, taches d'humidité sur les murs, moisissures sans cause, bruit d'eau robinets fermés. Nous utilisons caméra thermique et traceur de gaz pour localiser sans démolition.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous pour les WC qui coulent à Saint-Gratien ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nos plombiers à Saint-Gratien réparent tout type de WC défaillant : chasse d'eau qui fuit, flotteur bloqué, joint de clapet usé ou WC suspendu défectueux. Intervention le jour même sur Saint-Gratien (95210).",
        },
      },
    ],
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Plombier Saint-Gratien 95210",
        item: `${BASE_URL}/Artisan-Plombier-Saint-Gratien/`,
      },
    ],
  }

  return (
    <>
      <Script
        id="schema-local-business-saint-gratien"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <Script
        id="schema-faq-saint-gratien"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <Script
        id="schema-breadcrumb-saint-gratien"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}

function ErmontSchemas() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "Plombier 95 Service",
    url: `${BASE_URL}/Plombier-a-Ermont/`,
    telephone: PHONE_SCHEMA,
    address: {
      "@type": "PostalAddress",
      streetAddress: "À COMPLÉTER",
      addressLocality: "Ermont",
      postalCode: "95120",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.9931,
      longitude: 2.2594,
    },
    areaServed: [
      { "@type": "City", name: "Ermont" },
      { "@type": "City", name: "Saint-Gratien" },
      { "@type": "City", name: "Sannois" },
      { "@type": "City", name: "Franconville" },
      { "@type": "City", name: "Soisy-sous-Montmorency" },
      { "@type": "City", name: "Enghien-les-Bains" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "€€",
    hasCredential: "RGE Qualieau, Qualigaz",
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte un plombier à Ermont ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos tarifs démarrent à 79 € HT pour une intervention standard en journée. Les urgences (nuit, week-end, jour férié) sont majorées — le tarif est annoncé avant déplacement. Devis gratuit systématique pour toute rénovation.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous en urgence à Ermont la nuit ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, notre service d'urgence plomberie à Ermont fonctionne 24h/24, 7j/7, 365 jours par an. En cas de dégât des eaux actif, fuite importante ou WC hors service, nous envoyons un technicien dans l'heure.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles zones couvrez-vous autour de Ermont ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous intervenons à Ermont (95120) et dans les communes voisines du Val-d'Oise, sans frais de déplacement supplémentaires : Saint-Gratien, Sannois, Franconville, Soisy-sous-Montmorency, Enghien-les-Bains.",
        },
      },
      {
        "@type": "Question",
        name: "Acceptez-vous les demandes de prise en charge assurance ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Nous établissons tous les documents nécessaires à votre déclaration de sinistre (rapport, photos, devis détaillé). Nous travaillons régulièrement avec AXA, MAAF, Allianz et autres assureurs.",
        },
      },
      {
        "@type": "Question",
        name: "Comment détecter une fuite d'eau cachée à Ermont ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signes : facture d'eau élevée, taches d'humidité sur les murs, moisissures sans cause, bruit d'eau robinets fermés. Nous utilisons caméra thermique et traceur de gaz pour localiser sans démolition.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous pour les WC qui coulent à Ermont ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nos plombiers à Ermont réparent tout type de WC défaillant : chasse d'eau qui fuit, flotteur bloqué, joint de clapet usé ou WC suspendu défectueux. Intervention le jour même sur Ermont (95120).",
        },
      },
    ],
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Plombier Ermont 95120",
        item: `${BASE_URL}/Plombier-a-Ermont/`,
      },
    ],
  }

  return (
    <>
      <Script
        id="schema-local-business-ermont"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <Script
        id="schema-faq-ermont"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <Script
        id="schema-breadcrumb-ermont"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}

function MontmagnySchemas() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "Plombier 95 Service",
    url: `${BASE_URL}/Plombier-Montmagny/`,
    telephone: PHONE_SCHEMA,
    address: {
      "@type": "PostalAddress",
      streetAddress: "À COMPLÉTER",
      addressLocality: "Montmagny",
      postalCode: "95360",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.9833,
      longitude: 2.3333,
    },
    areaServed: [
      { "@type": "City", name: "Montmagny" },
      { "@type": "City", name: "Sarcelles" },
      { "@type": "City", name: "Enghien-les-Bains" },
      { "@type": "City", name: "Deuil-la-Barre" },
      { "@type": "City", name: "Groslay" },
      { "@type": "City", name: "Saint-Brice-sous-Forêt" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "€€",
    hasCredential: "RGE Qualieau, Qualigaz",
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte un plombier à Montmagny ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos tarifs démarrent à 79 € HT pour une intervention standard en journée. Les urgences (nuit, week-end, jour férié) sont majorées — le tarif est annoncé avant déplacement. Devis gratuit systématique pour toute rénovation.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous en urgence à Montmagny la nuit ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, notre service d'urgence plomberie à Montmagny fonctionne 24h/24, 7j/7, 365 jours par an. En cas de dégât des eaux actif, fuite importante ou WC hors service, nous envoyons un technicien dans l'heure.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles zones couvrez-vous autour de Montmagny ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous intervenons à Montmagny (95360) et dans les communes voisines du Val-d'Oise, sans frais de déplacement supplémentaires : Sarcelles, Enghien-les-Bains, Deuil-la-Barre, Groslay, Saint-Brice-sous-Forêt.",
        },
      },
      {
        "@type": "Question",
        name: "Acceptez-vous les demandes de prise en charge assurance ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Nous établissons tous les documents nécessaires à votre déclaration de sinistre (rapport, photos, devis détaillé). Nous travaillons régulièrement avec AXA, MAAF, Allianz et autres assureurs.",
        },
      },
      {
        "@type": "Question",
        name: "Comment détecter une fuite d'eau cachée à Montmagny ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signes : facture d'eau élevée, taches d'humidité sur les murs, moisissures sans cause, bruit d'eau robinets fermés. Nous utilisons caméra thermique et traceur de gaz pour localiser sans démolition.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous pour les WC qui coulent à Montmagny ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nos plombiers à Montmagny réparent tout type de WC défaillant : chasse d'eau qui fuit, flotteur bloqué, joint de clapet usé ou WC suspendu défectueux. Intervention le jour même sur Montmagny (95360).",
        },
      },
    ],
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Plombier Montmagny 95360",
        item: `${BASE_URL}/Plombier-Montmagny/`,
      },
    ],
  }

  return (
    <>
      <Script
        id="schema-local-business-montmagny"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <Script
        id="schema-faq-montmagny"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <Script
        id="schema-breadcrumb-montmagny"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}

function MontmorencySchemas() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "Plombier 95 Service",
    url: `${BASE_URL}/Plombier-Montmorency/`,
    telephone: PHONE_SCHEMA,
    address: {
      "@type": "PostalAddress",
      streetAddress: "À COMPLÉTER",
      addressLocality: "Montmorency",
      postalCode: "95160",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.9886,
      longitude: 2.3225,
    },
    areaServed: [
      { "@type": "City", name: "Montmorency" },
      { "@type": "City", name: "Enghien-les-Bains" },
      { "@type": "City", name: "Saint-Gratien" },
      { "@type": "City", name: "Soisy-sous-Montmorency" },
      { "@type": "City", name: "Deuil-la-Barre" },
      { "@type": "City", name: "Andilly" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "€€",
    hasCredential: "RGE Qualieau, Qualigaz",
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte un plombier à Montmorency ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos tarifs démarrent à 79 € HT pour une intervention standard en journée. Les urgences (nuit, week-end, jour férié) sont majorées — le tarif est annoncé avant déplacement. Devis gratuit systématique pour toute rénovation.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous en urgence à Montmorency la nuit ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, notre service d'urgence plomberie à Montmorency fonctionne 24h/24, 7j/7, 365 jours par an. En cas de dégât des eaux actif, fuite importante ou WC hors service, nous envoyons un technicien dans l'heure.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles zones couvrez-vous autour de Montmorency ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous intervenons à Montmorency (95160) et dans les communes voisines du Val-d'Oise, sans frais de déplacement supplémentaires : Enghien-les-Bains, Saint-Gratien, Soisy-sous-Montmorency, Deuil-la-Barre, Andilly.",
        },
      },
      {
        "@type": "Question",
        name: "Acceptez-vous les demandes de prise en charge assurance ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Nous établissons tous les documents nécessaires à votre déclaration de sinistre (rapport, photos, devis détaillé). Nous travaillons régulièrement avec AXA, MAAF, Allianz et autres assureurs.",
        },
      },
      {
        "@type": "Question",
        name: "Comment détecter une fuite d'eau cachée à Montmorency ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signes : facture d'eau élevée, taches d'humidité sur les murs, moisissures sans cause, bruit d'eau robinets fermés. Nous utilisons caméra thermique et traceur de gaz pour localiser sans démolition.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous pour les WC qui coulent à Montmorency ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nos plombiers à Montmorency réparent tout type de WC défaillant : chasse d'eau qui fuit, flotteur bloqué, joint de clapet usé ou WC suspendu défectueux. Intervention le jour même sur Montmorency (95160).",
        },
      },
    ],
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Plombier Montmorency 95160",
        item: `${BASE_URL}/Plombier-Montmorency/`,
      },
    ],
  }

  return (
    <>
      <Script
        id="schema-local-business-montmorency"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <Script
        id="schema-faq-montmorency"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <Script
        id="schema-breadcrumb-montmorency"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}

function ArgenteuilSchemas() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "Plombier 95 Service",
    url: `${BASE_URL}/Plombier-Argenteuil-95100/`,
    telephone: PHONE_SCHEMA,
    address: {
      "@type": "PostalAddress",
      streetAddress: "À COMPLÉTER",
      addressLocality: "Argenteuil",
      postalCode: "95100",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.9472,
      longitude: 2.2467,
    },
    areaServed: [
      { "@type": "City", name: "Argenteuil" },
      { "@type": "City", name: "Herblay-sur-Seine" },
      { "@type": "City", name: "Sannois" },
      { "@type": "City", name: "Bezons" },
      { "@type": "City", name: "Sartrouville" },
      { "@type": "City", name: "Colombes" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "€€",
    hasCredential: "RGE Qualieau, Qualigaz",
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte un plombier à Argenteuil ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos tarifs démarrent à 79 € HT pour une intervention standard en journée. Les urgences (nuit, week-end, jour férié) sont majorées — le tarif est annoncé avant déplacement. Devis gratuit systématique pour toute rénovation.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous en urgence à Argenteuil la nuit ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, notre service d'urgence plomberie à Argenteuil fonctionne 24h/24, 7j/7, 365 jours par an. En cas de dégât des eaux actif, fuite importante ou WC hors service, nous envoyons un technicien dans l'heure.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles zones couvrez-vous autour de Argenteuil ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous intervenons à Argenteuil (95100) et dans les communes voisines, sans frais de déplacement supplémentaires : Herblay, Sannois, Bezons, Sartrouville, Colombes.",
        },
      },
      {
        "@type": "Question",
        name: "Acceptez-vous les demandes de prise en charge assurance ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Nous établissons tous les documents nécessaires à votre déclaration de sinistre (rapport, photos, devis détaillé). Nous travaillons régulièrement avec AXA, MAAF, Allianz et autres assureurs.",
        },
      },
      {
        "@type": "Question",
        name: "Comment détecter une fuite d'eau cachée à Argenteuil ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signes : facture d'eau élevée, taches d'humidité sur les murs, moisissures sans cause, bruit d'eau robinets fermés. Nous utilisons caméra thermique et traceur de gaz pour localiser sans démolition.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous pour les WC qui coulent à Argenteuil ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nos plombiers à Argenteuil réparent tout type de WC défaillant : chasse d'eau qui fuit, flotteur bloqué, joint de clapet usé ou WC suspendu défectueux. Intervention le jour même sur Argenteuil (95100).",
        },
      },
    ],
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Plombier Argenteuil 95100",
        item: `${BASE_URL}/Plombier-Argenteuil-95100/`,
      },
    ],
  }

  return (
    <>
      <Script
        id="schema-local-business-argenteuil"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <Script
        id="schema-faq-argenteuil"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <Script
        id="schema-breadcrumb-argenteuil"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}

export default async function VillePage({ params }: Props) {
  const { ville } = await params
  const city = getCityBySlug(ville)

  if (!city) notFound()

  return (
    <>
      {city.slug === "Plombier-Gonesse" && <GonesseSchemas />}
      {city.slug === "Plombier-sur-Herblay" && <HerblaySchemas />}
      {city.slug === "Plombier-Goussainville" && <GoussainvilleSchemas />}
      {city.slug === "Artisan-Plombier-Saint-Gratien" && <SaintGratienSchemas />}
      {city.slug === "Plombier-a-Ermont" && <ErmontSchemas />}
      {city.slug === "Plombier-Montmagny" && <MontmagnySchemas />}
      {city.slug === "Plombier-Montmorency" && <MontmorencySchemas />}
      {city.slug === "Plombier-Argenteuil-95100" && <ArgenteuilSchemas />}
      <Navbar />
      <main>
        <CityLanding city={city} />
      </main>
      <Footer />
    </>
  )
}
