import type { Metadata } from "next"
import Script from "next/script"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ArticleHero from "@/components/article/ArticleHero"
import TableOfContents from "@/components/article/TableOfContents"
import EauCalcaireBody from "@/components/article/EauCalcaireBody"
import RelatedArticles from "@/components/article/RelatedArticles"
import { BASE_URL, ORGANIZATION_ID, organizationSchema } from "@/lib/site"

const SLUG = "eau-calcaire-impact-plomberie"
const ARTICLE_URL = `${BASE_URL}/articles/${SLUG}`
const ARTICLE_IMAGE = `${BASE_URL}/images/articles/eau-calcaire-plomberie.svg`
const PUBLISHED = "2026-07-03"
const MODIFIED = "2026-07-03"

export const metadata: Metadata = {
  title: "Eau calcaire : quel impact sur votre plomberie ? | PlombExpert",
  description:
    "Comment l'eau calcaire abîme vraiment votre plomberie et vos équipements, et les solutions concrètes pour limiter les dégâts au quotidien.",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Eau calcaire : quel impact sur votre plomberie ? | PlombExpert",
    description:
      "Comment l'eau calcaire abîme vraiment votre plomberie et vos équipements, et les solutions concrètes pour limiter les dégâts au quotidien.",
    url: ARTICLE_URL,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [{ url: ARTICLE_IMAGE, width: 800, height: 450, alt: "Dépôts de calcaire sur canalisation et robinet" }],
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
        headline: "Eau calcaire : quel impact réel sur votre plomberie (et comment la protéger)",
        description:
          "Comment l'eau calcaire abîme vraiment votre plomberie et vos équipements, et les solutions concrètes pour limiter les dégâts au quotidien.",
        image: { "@type": "ImageObject", url: ARTICLE_IMAGE, width: 800, height: 450 },
        datePublished: PUBLISHED,
        dateModified: MODIFIED,
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
        articleSection: "Qualité de l'eau",
        inLanguage: "fr-FR",
      },
      {
        "@type": "FAQPage",
        "@id": `${ARTICLE_URL}#faq`,
        mainEntity: [
          { "@type": "Question", name: "Le vinaigre blanc suffit-il à détartrer une canalisation entartrée ?", acceptedAnswer: { "@type": "Answer", text: "Pour les petits diamètres (pommeau, aérateur, siphon), oui — trempage 30 min à 1 h dans du vinaigre blanc chaud. Pour une canalisation encastrée fortement entartrée, le vinaigre n'atteint pas le dépôt en profondeur : il faut un détartrant professionnel ou le remplacement du tronçon concerné." } },
          { "@type": "Question", name: "L'eau en bouteille ou filtrée protège-t-elle ma plomberie ?", acceptedAnswer: { "@type": "Answer", text: "Non. Seule l'eau qui circule dans vos tuyaux compte. Une carafe filtrante ou une bouteille n'a aucun effet sur l'entartrage du chauffe-eau ou des canalisations. Seul un adoucisseur ou un anti-tartre installé sur la conduite d'arrivée générale agit sur l'ensemble du réseau." } },
          { "@type": "Question", name: "À quelle fréquence détartrer un chauffe-eau en Île-de-France ?", acceptedAnswer: { "@type": "Answer", text: "Dans la plupart des communes franciliennes (eau entre 20 et 35°f), un détartrage tous les 2 à 3 ans est recommandé. Si votre groupe de sécurité fuit en continu ou si la résistance consomme nettement plus, avancez le détartrage à 18-24 mois." } },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${ARTICLE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Qualité de l'eau", item: `${BASE_URL}/articles?categorie=qualite-eau` },
          { "@type": "ListItem", position: 3, name: "Eau calcaire et plomberie", item: ARTICLE_URL },
        ],
      },
    ],
  }
  return <Script id="schema-eau-calcaire" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
}

export default function ArticleEauCalcaire() {
  return (
    <>
      <ArticleSchemas />
      <Navbar />
      <main>
        <ArticleHero
          category="Qualité de l'eau"
          categoryEmoji="💧"
          title="Eau calcaire : quel impact réel sur votre plomberie (et comment la protéger)"
          excerpt="L'eau calcaire ne provoque pas de panne du jour au lendemain, mais elle réduit progressivement le débit, la pression et la durée de vie de vos équipements. Comprendre le mécanisme d'entartrage et les signes précoces vous permet d'agir avant qu'il ne soit trop tard."
          readTime={9}
          date="3 juillet 2026"
          level="Débutant"
          author="Équipe PlombExpert"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-64 flex-shrink-0">
              <TableOfContents items={[
                { id: "mecanisme", label: "Mécanisme d'entartrage" },
                { id: "signes", label: "Signes visibles" },
                { id: "impact-duree-vie", label: "Durée de vie équipements" },
                { id: "seuil", label: "Seuil de dureté" },
                { id: "solutions", label: "Solutions concrètes" },
                { id: "faq", label: "FAQ" },
              ]} />
            </aside>
            <EauCalcaireBody />
          </div>
        </div>
        <RelatedArticles current={SLUG} articles={[
          { title: "Groupe de sécurité qui goutte : normal ou anomalie ?", category: "Chauffe-eau", emoji: "🔥", readTime: 8, slug: "groupe-securite-chauffe-eau-goutte" },
          { title: "Comment vider un chauffe-eau : tutoriel pas à pas", category: "Chauffe-eau", emoji: "🔥", readTime: 9, slug: "vider-chauffe-eau-tutoriel" },
          { title: "Robinetterie : entretien et remplacement complet", category: "Robinetterie", emoji: "🚰", readTime: 11, slug: "robinetterie-entretien-remplacement" },
        ]} />
      </main>
      <Footer />
    </>
  )
}
