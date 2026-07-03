import type { Metadata } from "next"
import Script from "next/script"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ArticleHero from "@/components/article/ArticleHero"
import TableOfContents from "@/components/article/TableOfContents"
import PerCuivreMulticoucheBody from "@/components/article/PerCuivreMulticoucheBody"
import RelatedArticles from "@/components/article/RelatedArticles"
import { BASE_URL, ORGANIZATION_ID, organizationSchema } from "@/lib/site"

const SLUG = "per-cuivre-multicouche-comparatif"
const ARTICLE_URL = `${BASE_URL}/articles/${SLUG}`
const ARTICLE_IMAGE = `${BASE_URL}/images/articles/per-cuivre-multicouche.svg`
const PUBLISHED = "2026-07-03"
const MODIFIED = "2026-07-03"

export const metadata: Metadata = {
  title: "PER, cuivre ou multicouche : quel tuyau choisir ? | PlombExpert",
  description:
    "PER, cuivre ou multicouche : comparatif complet pour choisir la bonne tuyauterie selon votre budget, votre chantier et sa durabilité.",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "PER, cuivre ou multicouche : quel tuyau choisir ? | PlombExpert",
    description:
      "PER, cuivre ou multicouche : comparatif complet pour choisir la bonne tuyauterie selon votre budget, votre chantier et sa durabilité.",
    url: ARTICLE_URL,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [{ url: ARTICLE_IMAGE, width: 800, height: 450, alt: "Comparatif tuyauterie PER cuivre multicouche" }],
  },
}

function ArticleSchemas() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      {
        "@type": "Article",
        "@id": `${ARTICLE_URL}#article`,
        headline: "PER vs cuivre vs multicouche : lequel choisir pour votre rénovation",
        description:
          "PER, cuivre ou multicouche : comparatif complet pour choisir la bonne tuyauterie selon votre budget, votre chantier et sa durabilité.",
        image: { "@type": "ImageObject", url: ARTICLE_IMAGE, width: 800, height: 450 },
        datePublished: PUBLISHED,
        dateModified: MODIFIED,
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
        articleSection: "Matériel",
        inLanguage: "fr-FR",
      },
      {
        "@type": "FAQPage",
        "@id": `${ARTICLE_URL}#faq`,
        mainEntity: [
          { "@type": "Question", name: "Peut-on mélanger PER et multicouche sur la même installation ?", acceptedAnswer: { "@type": "Answer", text: "Oui, à condition d'utiliser des raccords de transition adaptés (raccord PER-multicouche à sertir ou à compression). Ne branchez jamais deux matériaux directement sans raccord homologué — la dilatation différentielle provoquerait une fuite en quelques mois." } },
          { "@type": "Question", name: "Le PER est-il autorisé pour l'alimentation d'un chauffe-eau ?", acceptedAnswer: { "@type": "Answer", text: "Oui pour l'eau chaude sanitaire, à condition de respecter la température maximale du fabricant (généralement 95 °C) et de ne pas passer en apparent. En revanche, le PER ne convient pas au circuit de chauffage du ballon ni aux installations solaires thermiques haute température." } },
          { "@type": "Question", name: "Multicouche ou cuivre pour une rénovation complète de salle de bain ?", acceptedAnswer: { "@type": "Answer", text: "Le multicouche est le choix le plus courant : pose rapide, bon rapport qualité-prix, durée de vie correcte. Le cuivre se justifie si le règlement de copropriété l'impose, si vous voulez une installation apparente esthétique, ou si vous brasez déjà sur d'autres circuits cuivre existants." } },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${ARTICLE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Matériel", item: `${BASE_URL}/articles?categorie=materiel` },
          { "@type": "ListItem", position: 3, name: "PER, cuivre ou multicouche", item: ARTICLE_URL },
        ],
      },
    ],
  }
  return <Script id="schema-per-cuivre-multicouche" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
}

export default function ArticlePerCuivreMulticouche() {
  return (
    <>
      <ArticleSchemas />
      <Navbar />
      <main>
        <ArticleHero
          category="Matériel"
          categoryEmoji="📐"
          title="PER vs cuivre vs multicouche : lequel choisir pour votre rénovation"
          excerpt="Le PER, le cuivre et le multicouche couvrent 95 % des rénovations de tuyauterie en France — mais ils ne s'utilisent pas indifféremment. Voici comment choisir selon votre budget, vos compétences et la nature du chantier."
          readTime={10}
          date="3 juillet 2026"
          level="Intermédiaire"
          author="Équipe PlombExpert"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-64 flex-shrink-0">
              <TableOfContents items={[
                { id: "per", label: "Le PER" },
                { id: "cuivre", label: "Le cuivre" },
                { id: "multicouche", label: "Le multicouche" },
                { id: "comparatif", label: "Tableau comparatif" },
                { id: "choix-chantier", label: "Quel matériau choisir ?" },
                { id: "faq", label: "FAQ" },
              ]} />
            </aside>
            <PerCuivreMulticoucheBody />
          </div>
        </div>
        <RelatedArticles current={SLUG} articles={[
          { title: "Les 20 outils de plomberie indispensables", category: "Matériel", emoji: "📐", readTime: 10, slug: "outils-plomberie-indispensables" },
          { title: "Installation d'une douche italienne : guide complet", category: "Salle de bain", emoji: "🛁", readTime: 9, slug: "installation-douche-italienne" },
          { title: "Comment vider un chauffe-eau : tutoriel pas à pas", category: "Chauffe-eau", emoji: "🔥", readTime: 9, slug: "vider-chauffe-eau-tutoriel" },
        ]} />
      </main>
      <Footer />
    </>
  )
}
