import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ArticleHero from "@/components/article/ArticleHero"
import TableOfContents from "@/components/article/TableOfContents"
import RobinetterieBody from "@/components/article/RobinetterieBody"
import RelatedArticles from "@/components/article/RelatedArticles"

export const metadata: Metadata = {
  title: "Robinetterie : entretien, réparation et remplacement complet | PlombExpert",
  description:
    "Robinet qui goutte, mitigeur qui fuit, joint usé… Apprenez à entretenir, réparer et remplacer vos robinets vous-même. Guide complet avec étapes illustrées et conseils de pro.",
}

export default function ArticleRobinetterie() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleHero
          category="Robinetterie"
          categoryEmoji="🚰"
          title="Robinetterie : entretien, réparation et remplacement complet"
          excerpt="Un robinet qui goutte peut gaspiller jusqu'à 120 litres d'eau par jour. Un mitigeur qui fuit, un joint usé ou un mécanisme grippé se réparent souvent en moins de 30 minutes, sans plombier. Ce guide couvre toutes les interventions sur vos robinets, du plus simple au plus technique."
          readTime={11}
          date="10 mai 2026"
          level="Intermédiaire"
          author="Équipe PlombExpert"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-64 flex-shrink-0">
              <TableOfContents
                items={[
                  { id: "types-robinets", label: "Les types de robinets" },
                  { id: "robinet-goutte", label: "Robinet qui goutte" },
                  { id: "changer-joint", label: "Changer un joint" },
                  { id: "mitigeur-fuit", label: "Mitigeur qui fuit" },
                  { id: "cartouche", label: "Remplacer la cartouche" },
                  { id: "robinet-dur", label: "Robinet dur à tourner" },
                  { id: "remplacer-robinet", label: "Remplacer un robinet" },
                  { id: "sens-fermeture", label: "Sens de fermeture" },
                  { id: "entretien", label: "Entretien préventif" },
                  { id: "faq", label: "FAQ" },
                ]}
              />
            </aside>
            <RobinetterieBody />
          </div>
        </div>
        <RelatedArticles
          current="robinetterie-entretien-remplacement"
          articles={[
            {
              title: "Comment déboucher une canalisation",
              category: "Débouchage",
              emoji: "🚿",
              readTime: 12,
              slug: "deboucher-canalisation-karcher",
            },
            {
              title: "Comment vider un chauffe-eau : tuto pas à pas",
              category: "Chauffe-eau",
              emoji: "🔥",
              readTime: 9,
              slug: "vider-chauffe-eau-tutoriel",
            },
            {
              title: "Joint fibre ou caoutchouc : lequel choisir ?",
              category: "Joints",
              emoji: "🔗",
              readTime: 5,
              slug: "joint-fibre-ou-caoutchouc",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
