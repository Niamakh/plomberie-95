import type { Metadata } from "next"
import Script from "next/script"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ArticleHero from "@/components/article/ArticleHero"
import TableOfContents from "@/components/article/TableOfContents"
import DoucheItalienneBody from "@/components/article/DoucheItalienneBody"
import RelatedArticles from "@/components/article/RelatedArticles"
import { BASE_URL, ORGANIZATION_ID, organizationSchema } from "@/lib/site"

const SLUG = "installation-douche-italienne"
const ARTICLE_URL = `${BASE_URL}/articles/${SLUG}`
const ARTICLE_IMAGE = `${BASE_URL}/images/articles/douche-italienne-receveur.svg`
const PUBLISHED = "2026-07-03"
const MODIFIED = "2026-07-03"

export const metadata: Metadata = {
  title: "Installation douche italienne : guide complet 2026 | PlombExpert",
  description:
    "Comment installer un receveur de douche italienne soi-même : pente, étanchéité, évacuation. Le guide pas à pas avec les erreurs à éviter.",
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: "Installation douche italienne : guide complet 2026 | PlombExpert",
    description:
      "Comment installer un receveur de douche italienne soi-même : pente, étanchéité, évacuation. Le guide pas à pas avec les erreurs à éviter.",
    url: ARTICLE_URL,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [{ url: ARTICLE_IMAGE, width: 800, height: 450, alt: "Receveur extra-plat de douche italienne encastré au sol" }],
  },
}

function ArticleSchemas() {
  const articleId = `${ARTICLE_URL}#article`
  const faqId = `${ARTICLE_URL}#faq`
  const breadcrumbId = `${ARTICLE_URL}#breadcrumb`

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      {
        "@type": "Article",
        "@id": articleId,
        headline: "Installation d'une douche italienne : le guide complet étape par étape",
        description:
          "Comment installer un receveur de douche italienne soi-même : pente, étanchéité, évacuation. Le guide pas à pas avec les erreurs à éviter.",
        image: {
          "@type": "ImageObject",
          url: ARTICLE_IMAGE,
          width: 800,
          height: 450,
        },
        datePublished: PUBLISHED,
        dateModified: MODIFIED,
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
        articleSection: "Salle de bain",
        inLanguage: "fr-FR",
        isPartOf: { "@id": `${BASE_URL}/articles` },
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: [
          {
            "@type": "Question",
            name: "Quelle pente minimale pour une douche italienne ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "1 à 2 cm par mètre linéaire vers le point d'évacuation.",
            },
          },
          {
            "@type": "Question",
            name: "Peut-on installer une douche italienne sur un plancher bois ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui, mais cela nécessite un renfort de structure et un caisson étanche spécifique, à ne pas improviser.",
            },
          },
          {
            "@type": "Question",
            name: "Combien de temps attendre avant de carreler après l'étanchéité liquide ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Généralement 24 à 48h selon le produit — toujours se référer à la fiche technique du fabricant.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Salle de bain",
            item: `${BASE_URL}/articles?categorie=salle-de-bain`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Installation douche italienne",
            item: ARTICLE_URL,
          },
        ],
      },
    ],
  }

  return (
    <Script
      id="schema-douche-italienne"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

export default function ArticleDoucheItalienne() {
  return (
    <>
      <ArticleSchemas />
      <Navbar />
      <main>
        <ArticleHero
          category="Salle de bain"
          categoryEmoji="🛁"
          title="Installation d'une douche italienne : le guide complet étape par étape"
          excerpt="La douche à l'italienne séduit pour son look épuré et son accessibilité, mais c'est l'un des chantiers de salle de bain les plus techniques à réussir. Une pente mal calculée ou une étanchéité négligée, et c'est l'infiltration assurée chez le voisin du dessous. Voici la méthode complète, du gros œuvre à la finition."
          readTime={9}
          date="3 juillet 2026"
          level="Avancé"
          author="Équipe PlombExpert"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-64 flex-shrink-0">
              <TableOfContents
                items={[
                  { id: "methodes", label: "Les deux méthodes" },
                  { id: "reservation", label: "Réservation au sol" },
                  { id: "evacuation-pente", label: "Évacuation et pente" },
                  { id: "etancheite", label: "Étanchéité" },
                  { id: "sol-antiderapant", label: "Sol antidérapant" },
                  { id: "erreurs", label: "Erreurs à éviter" },
                  { id: "pro-ou-diy", label: "Pro ou DIY ?" },
                  { id: "faq", label: "FAQ" },
                ]}
              />
            </aside>
            <DoucheItalienneBody />
          </div>
        </div>
        <RelatedArticles
          current={SLUG}
          articles={[
            {
              title: "Canalisations d'évacuation : fonctionnement et entretien",
              category: "Évacuation",
              emoji: "🏗️",
              readTime: 11,
              slug: "evacuation-canalisations-guide",
            },
            {
              title: "Robinetterie : entretien, réparation et remplacement complet",
              category: "Robinetterie",
              emoji: "🚰",
              readTime: 11,
              slug: "robinetterie-entretien-remplacement",
            },
            {
              title: "Fuites d'eau : détecter, localiser et réparer",
              category: "Fuites",
              emoji: "💧",
              readTime: 10,
              slug: "fuites-detecter-reparer",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
