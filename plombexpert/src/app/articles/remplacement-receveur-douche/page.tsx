import type { Metadata } from "next"
import Script from "next/script"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ArticleHero from "@/components/article/ArticleHero"
import TableOfContents from "@/components/article/TableOfContents"
import RemplacementReceveurBody from "@/components/article/RemplacementReceveurBody"
import RelatedArticles from "@/components/article/RelatedArticles"
import { BASE_URL, ORGANIZATION_ID, organizationSchema } from "@/lib/site"

const SLUG = "remplacement-receveur-douche"
const ARTICLE_URL = `${BASE_URL}/articles/${SLUG}`
const ARTICLE_IMAGE = `${BASE_URL}/images/articles/receveur-ancien-depose.svg`
const PUBLISHED = "2026-07-03"
const MODIFIED = "2026-07-03"

export const metadata: Metadata = {
  title: "Remplacer un receveur de douche : guide complet | PlombExpert",
  description:
    "Comment remplacer un receveur de douche fissuré, jauni ou trop haut, y compris en cas de transformation d'une baignoire en douche. Étapes, budget, erreurs à éviter.",
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: "Remplacer un receveur de douche : guide complet | PlombExpert",
    description:
      "Comment remplacer un receveur de douche fissuré, jauni ou trop haut, y compris en cas de transformation d'une baignoire en douche. Étapes, budget, erreurs à éviter.",
    url: ARTICLE_URL,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [
      {
        url: ARTICLE_IMAGE,
        width: 800,
        height: 450,
        alt: "Ancien receveur de douche fissuré déposé, bonde démontée",
      },
    ],
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
        headline: "Remplacer un receveur de douche : le guide complet",
        description:
          "Comment remplacer un receveur de douche fissuré, jauni ou trop haut, y compris en cas de transformation d'une baignoire en douche. Étapes, budget, erreurs à éviter.",
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
            name: "Peut-on remplacer un receveur sans casser le carrelage mural ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui, si le nouveau receveur a des dimensions proches de l'ancien et que les carreaux existants descendent suffisamment bas pour couvrir la jonction.",
            },
          },
          {
            "@type": "Question",
            name: "Faut-il changer la bonde en même temps que le receveur ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "C'est fortement recommandé : une bonde ancienne réutilisée sur un nouveau receveur est une cause fréquente de micro-fuites après quelques mois.",
            },
          },
          {
            "@type": "Question",
            name: "Combien de temps attendre avant d'utiliser la douche après la pose ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Au moins 24h, le temps que le mortier-colle ou la mousse de fixation ait pris, et que l'étanchéité en périphérie ait fini de sécher.",
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
            name: "Remplacer un receveur de douche",
            item: ARTICLE_URL,
          },
        ],
      },
    ],
  }

  return (
    <Script
      id="schema-remplacement-receveur"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

export default function ArticleRemplacementReceveur() {
  return (
    <>
      <ArticleSchemas />
      <Navbar />
      <main>
        <ArticleHero
          category="Salle de bain"
          categoryEmoji="🛁"
          title="Remplacer un receveur de douche : le guide complet"
          excerpt="Un receveur fissuré, jauni, ou tout simplement trop haut pour une douche moderne à l'italienne : le remplacement est un chantier fréquent en rénovation. Voici comment s'y prendre, que vous conserviez l'évacuation existante ou que vous transformiez une ancienne baignoire."
          readTime={8}
          date="3 juillet 2026"
          level="Intermédiaire"
          author="Équipe PlombExpert"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-64 flex-shrink-0">
              <TableOfContents
                items={[
                  { id: "pourquoi-remplacer", label: "Pourquoi remplacer ?" },
                  { id: "depose", label: "Déposer l'ancien receveur" },
                  { id: "evacuation", label: "Adapter l'évacuation" },
                  { id: "pose", label: "Poser le nouveau receveur" },
                  { id: "finition", label: "Finition" },
                  { id: "budget", label: "Budget et délais" },
                  { id: "professionnel", label: "Faire appel à un pro" },
                  { id: "faq", label: "FAQ" },
                ]}
              />
            </aside>
            <RemplacementReceveurBody />
          </div>
        </div>
        <RelatedArticles
          current={SLUG}
          articles={[
            {
              title: "Installation d'une douche italienne : le guide complet étape par étape",
              category: "Salle de bain",
              emoji: "🛁",
              readTime: 9,
              slug: "installation-douche-italienne",
            },
            {
              title: "Canalisations d'évacuation : fonctionnement et entretien",
              category: "Évacuation",
              emoji: "🏗️",
              readTime: 11,
              slug: "evacuation-canalisations-guide",
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
