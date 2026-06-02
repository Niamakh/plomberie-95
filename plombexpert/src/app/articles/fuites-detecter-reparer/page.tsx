import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ArticleHero from "@/components/article/ArticleHero"
import TableOfContents from "@/components/article/TableOfContents"
import FuitesBody from "@/components/article/FuitesBody"
import RelatedArticles from "@/components/article/RelatedArticles"

export const metadata: Metadata = {
  title: "Fuites d'eau : détecter, localiser et réparer | PlombExpert",
  description:
    "Comment détecter une fuite cachée, lire votre compteur d'eau, localiser l'origine et réparer vous-même les fuites courantes. Guide complet avec toutes les situations.",
}

export default function ArticleFuites() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleHero
          category="Fuites"
          categoryEmoji="💧"
          title="Fuites d'eau : comment détecter, localiser et réparer"
          excerpt="Une fuite d'eau non détectée peut doubler votre facture et provoquer des dégâts des eaux coûteux. Ce guide vous explique comment identifier une fuite cachée, en trouver l'origine précise et la réparer vous-même selon le type de fuite."
          readTime={10}
          date="15 mai 2026"
          level="Intermédiaire"
          author="Équipe PlombExpert"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-64 flex-shrink-0">
              <TableOfContents
                items={[
                  { id: "signes", label: "Signes d'une fuite" },
                  { id: "compteur", label: "Test compteur d'eau" },
                  { id: "localiser", label: "Localiser la fuite" },
                  { id: "fuite-robinet", label: "Fuite sous un robinet" },
                  { id: "fuite-wc", label: "WC qui coule" },
                  { id: "fuite-tuyau", label: "Fuite sur un tuyau" },
                  { id: "fuite-evacuation", label: "Fuite en évacuation" },
                  { id: "urgence", label: "Gestes d'urgence" },
                  { id: "prevention", label: "Prévention" },
                  { id: "faq", label: "FAQ" },
                ]}
              />
            </aside>
            <FuitesBody />
          </div>
        </div>
        <RelatedArticles
          current="fuites-detecter-reparer"
          articles={[
            {
              title: "Robinetterie : entretien et réparation complète",
              category: "Robinetterie",
              emoji: "🚰",
              readTime: 11,
              slug: "robinetterie-entretien-remplacement",
            },
            {
              title: "Joint fibre ou caoutchouc : lequel choisir ?",
              category: "Joints",
              emoji: "🔗",
              readTime: 6,
              slug: "joint-fibre-ou-caoutchouc",
            },
            {
              title: "Comment déboucher une canalisation",
              category: "Débouchage",
              emoji: "🚿",
              readTime: 12,
              slug: "deboucher-canalisation-karcher",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
