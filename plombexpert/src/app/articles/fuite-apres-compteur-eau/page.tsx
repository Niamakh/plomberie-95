import type { Metadata } from "next"
import Script from "next/script"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ArticleHero from "@/components/article/ArticleHero"
import TableOfContents from "@/components/article/TableOfContents"
import FuiteCompteurBody from "@/components/article/FuiteCompteurBody"
import RelatedArticles from "@/components/article/RelatedArticles"
import { BASE_URL, ORGANIZATION_ID, organizationSchema } from "@/lib/site"

const SLUG = "fuite-apres-compteur-eau"
const ARTICLE_URL = `${BASE_URL}/articles/${SLUG}`
const ARTICLE_IMAGE = `${BASE_URL}/images/articles/fuite-compteur-eau.svg`
const PUBLISHED = "2026-07-03"
const MODIFIED = "2026-07-03"

export const metadata: Metadata = {
  title: "Fuite après compteur d'eau : qui paie ? | PlombExpert",
  description:
    "Fuite détectée après le compteur d'eau : à qui incombe la réparation, les démarches à suivre et les recours possibles auprès de votre fournisseur.",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Fuite après compteur d'eau : qui paie ? | PlombExpert",
    description:
      "Fuite détectée après le compteur d'eau : à qui incombe la réparation, les démarches à suivre et les recours possibles auprès de votre fournisseur.",
    url: ARTICLE_URL,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [{ url: ARTICLE_IMAGE, width: 800, height: 450, alt: "Fuite sur canalisation après compteur d'eau" }],
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
        headline: "Fuite après compteur d'eau : qui paie, que faire",
        description:
          "Fuite détectée après le compteur d'eau : à qui incombe la réparation, les démarches à suivre et les recours possibles auprès de votre fournisseur.",
        image: { "@type": "ImageObject", url: ARTICLE_IMAGE, width: 800, height: 450 },
        datePublished: PUBLISHED,
        dateModified: MODIFIED,
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
        articleSection: "Fuites",
        inLanguage: "fr-FR",
      },
      {
        "@type": "FAQPage",
        "@id": `${ARTICLE_URL}#faq`,
        mainEntity: [
          { "@type": "Question", name: "Le distributeur d'eau peut-il réparer une fuite après mon compteur ?", acceptedAnswer: { "@type": "Answer", text: "Non. En aval du compteur, l'intervention relève du propriétaire ou du locataire. Le distributeur peut cependant couper l'eau au compteur en cas de fuite non colmatée mettant en danger le bâtiment, après mise en demeure. La réparation reste toujours à votre charge." } },
          { "@type": "Question", name: "Combien peut-on récupérer avec un dégrèvement de facture ?", acceptedAnswer: { "@type": "Answer", text: "Le montant varie selon le distributeur et l'ampleur de la surconsommation avérée. En pratique, on récupère souvent 50 à 80 % de la consommation excédentaire, une fois soustraite la consommation normale de référence (moyenne des mois précédents). Chaque dossier est étudié individuellement." } },
          { "@type": "Question", name: "Une fuite sur le compteur lui-même, qui intervient ?", acceptedAnswer: { "@type": "Answer", text: "Si la fuite est sur le compteur ou sur le raccord entre la canalisation publique et le compteur, c'est au distributeur d'intervenir — contactez-le en priorité. Si le compteur est dans un local privatif (cave, garage), vous devez y donner accès au technicien dans les meilleurs délais." } },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${ARTICLE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Fuites", item: `${BASE_URL}/articles?categorie=fuites` },
          { "@type": "ListItem", position: 3, name: "Fuite après compteur d'eau", item: ARTICLE_URL },
        ],
      },
    ],
  }
  return <Script id="schema-fuite-compteur" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
}

export default function ArticleFuiteCompteur() {
  return (
    <>
      <ArticleSchemas />
      <Navbar />
      <main>
        <ArticleHero
          category="Fuites"
          categoryEmoji="💧"
          title="Fuite après compteur d'eau : qui paie, que faire"
          excerpt="Une fuite après le compteur d'eau vous concerne directement — réparation et facture d'eau gaspillée incluses. Voici comment distinguer les responsabilités, localiser la fuite et engager les démarches de dégrèvement auprès de votre distributeur."
          readTime={9}
          date="3 juillet 2026"
          level="Intermédiaire"
          author="Équipe PlombExpert"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-64 flex-shrink-0">
              <TableOfContents items={[
                { id: "responsabilite", label: "Qui paie quoi ?" },
                { id: "localiser", label: "Localiser la fuite" },
                { id: "degravement", label: "Dégrèvement facture" },
                { id: "copropriete", label: "Copropriété" },
                { id: "delais", label: "Délais pour agir" },
                { id: "faq", label: "FAQ" },
              ]} />
            </aside>
            <FuiteCompteurBody />
          </div>
        </div>
        <RelatedArticles current={SLUG} articles={[
          { title: "Fuites d'eau : détecter, localiser et réparer", category: "Fuites", emoji: "💧", readTime: 10, slug: "fuites-detecter-reparer" },
          { title: "Remplacer un receveur de douche : guide complet", category: "Salle de bain", emoji: "🛁", readTime: 8, slug: "remplacement-receveur-douche" },
          { title: "Canalisations d'évacuation : fonctionnement et entretien", category: "Évacuation", emoji: "🏗️", readTime: 11, slug: "evacuation-canalisations-guide" },
        ]} />
      </main>
      <Footer />
    </>
  )
}
