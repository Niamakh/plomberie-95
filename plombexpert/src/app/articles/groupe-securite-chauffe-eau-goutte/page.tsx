import type { Metadata } from "next"
import Script from "next/script"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ArticleHero from "@/components/article/ArticleHero"
import TableOfContents from "@/components/article/TableOfContents"
import GroupeSecuriteBody from "@/components/article/GroupeSecuriteBody"
import RelatedArticles from "@/components/article/RelatedArticles"
import { BASE_URL, ORGANIZATION_ID, organizationSchema } from "@/lib/site"

const SLUG = "groupe-securite-chauffe-eau-goutte"
const ARTICLE_URL = `${BASE_URL}/articles/${SLUG}`
const ARTICLE_IMAGE = `${BASE_URL}/images/articles/groupe-securite-goutte.svg`
const PUBLISHED = "2026-07-03"
const MODIFIED = "2026-07-03"

export const metadata: Metadata = {
  title: "Groupe de sécurité qui goutte : normal ou pas ? | PlombExpert",
  description:
    "Votre groupe de sécurité goutte régulièrement ? Voici comment distinguer un fonctionnement normal d'une vraie anomalie à corriger.",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Groupe de sécurité qui goutte : normal ou pas ? | PlombExpert",
    description:
      "Votre groupe de sécurité goutte régulièrement ? Voici comment distinguer un fonctionnement normal d'une vraie anomalie à corriger.",
    url: ARTICLE_URL,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [{ url: ARTICLE_IMAGE, width: 800, height: 450, alt: "Groupe de sécurité chauffe-eau avec gouttes d'évacuation" }],
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
        headline: "Groupe de sécurité chauffe-eau qui goutte : normal ou anomalie ?",
        description:
          "Votre groupe de sécurité goutte régulièrement ? Voici comment distinguer un fonctionnement normal d'une vraie anomalie à corriger.",
        image: { "@type": "ImageObject", url: ARTICLE_IMAGE, width: 800, height: 450 },
        datePublished: PUBLISHED,
        dateModified: MODIFIED,
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
        articleSection: "Chauffe-eau",
        inLanguage: "fr-FR",
      },
      {
        "@type": "FAQPage",
        "@id": `${ARTICLE_URL}#faq`,
        mainEntity: [
          { "@type": "Question", name: "Peut-on boucher le tuyau d'évacuation du groupe de sécurité ?", acceptedAnswer: { "@type": "Answer", text: "Non, jamais. Boucher ou réduire le tuyau d'évacuation neutralise la soupape de sécurité et crée un risque d'éclatement du ballon en cas de surpression. Le tuyau doit rester libre et déboucher vers un siphon ou un évacuateur, jamais vers l'égout directement sans garde d'eau." } },
          { "@type": "Question", name: "Mon groupe goutte uniquement la nuit, est-ce normal ?", acceptedAnswer: { "@type": "Answer", text: "Oui, si le chauffe-eau est programmé en heures creuses. Le gouttement correspond à la dilatation nocturne de l'eau chauffée. Si le gouttement continue toute la journée alors que le ballon ne chauffe pas, le clapet est probablement bloqué ouvert — remplacez ou détarrez le groupe." } },
          { "@type": "Question", name: "Quelle est la durée de vie d'un groupe de sécurité ?", acceptedAnswer: { "@type": "Answer", text: "En eau douce, comptez 8 à 10 ans. En eau dure (TH supérieur à 25°f), le calcaire réduit cette durée à 4 à 6 ans. Un remplacement préventif lors du détartrage du ballon (tous les 2-3 ans) évite une fuite prolongée qui peut rouiller le socle du chauffe-eau." } },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${ARTICLE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Chauffe-eau", item: `${BASE_URL}/articles?categorie=chauffe-eau` },
          { "@type": "ListItem", position: 3, name: "Groupe de sécurité qui goutte", item: ARTICLE_URL },
        ],
      },
    ],
  }
  return <Script id="schema-groupe-securite" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
}

export default function ArticleGroupeSecurite() {
  return (
    <>
      <ArticleSchemas />
      <Navbar />
      <main>
        <ArticleHero
          category="Chauffe-eau"
          categoryEmoji="🔥"
          title="Groupe de sécurité chauffe-eau qui goutte : normal ou anomalie ?"
          excerpt="Un groupe de sécurité qui goutte n'est pas forcément une panne : c'est souvent l'évacuation normale de l'eau dilatée lors du chauffage. En revanche, un écoulement continu signale une anomalie à corriger avant qu'elle n'abîme le ballon."
          readTime={8}
          date="3 juillet 2026"
          level="Débutant"
          author="Équipe PlombExpert"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-64 flex-shrink-0">
              <TableOfContents items={[
                { id: "role", label: "Rôle du groupe" },
                { id: "normal", label: "Gouttement normal" },
                { id: "causes", label: "Causes d'anomalie" },
                { id: "test", label: "Test simple" },
                { id: "intervention", label: "Détartrer ou remplacer" },
                { id: "faq", label: "FAQ" },
              ]} />
            </aside>
            <GroupeSecuriteBody />
          </div>
        </div>
        <RelatedArticles current={SLUG} articles={[
          { title: "Comment vider un chauffe-eau : tutoriel pas à pas", category: "Chauffe-eau", emoji: "🔥", readTime: 9, slug: "vider-chauffe-eau-tutoriel" },
          { title: "Eau calcaire : impact sur votre plomberie", category: "Qualité de l'eau", emoji: "💧", readTime: 9, slug: "eau-calcaire-impact-plomberie" },
          { title: "Fuites d'eau : détecter, localiser et réparer", category: "Fuites", emoji: "💧", readTime: 10, slug: "fuites-detecter-reparer" },
        ]} />
      </main>
      <Footer />
    </>
  )
}
