import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ArticleHero from "@/components/article/ArticleHero"
import TableOfContents from "@/components/article/TableOfContents"
import JointsBody from "@/components/article/JointsBody"
import RelatedArticles from "@/components/article/RelatedArticles"

export const metadata: Metadata = {
  title: "Joint fibre ou caoutchouc : lequel choisir selon le raccord ? | PlombExpert",
  description:
    "Fibre, caoutchouc, PTFE, silicone… Chaque type de joint a son usage précis. Apprenez à choisir le bon joint selon la pression, la température et le type de raccord pour une étanchéité parfaite.",
}

export default function ArticleJoints() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleHero
          category="Joints"
          categoryEmoji="🔗"
          title="Joint fibre ou caoutchouc : lequel choisir selon votre raccord ?"
          excerpt="Un mauvais joint provoque des fuites immédiates ou retardées. Le choix du matériau dépend de la pression, de la température et du fluide transporté. Ce guide vous explique les différences entre chaque type de joint et comment ne plus jamais vous tromper."
          readTime={6}
          date="22 mai 2026"
          level="Débutant"
          author="Équipe PlombExpert"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-64 flex-shrink-0">
              <TableOfContents
                items={[
                  { id: "pourquoi-ca-compte", label: "Pourquoi le choix compte" },
                  { id: "joint-fibre", label: "Le joint fibre" },
                  { id: "joint-caoutchouc", label: "Le joint caoutchouc" },
                  { id: "joint-ptfe", label: "Le ruban PTFE (téflon)" },
                  { id: "joint-silicone", label: "Le silicone sanitaire" },
                  { id: "joint-torique", label: "Le joint torique (O-ring)" },
                  { id: "tableau-comparatif", label: "Tableau comparatif" },
                  { id: "poser-joint", label: "Bien poser un joint" },
                  { id: "erreurs", label: "Erreurs fréquentes" },
                  { id: "faq", label: "FAQ" },
                ]}
              />
            </aside>
            <JointsBody />
          </div>
        </div>
        <RelatedArticles
          current="joint-fibre-ou-caoutchouc"
          articles={[
            {
              title: "Fuites d'eau : détecter, localiser et réparer",
              category: "Fuites",
              emoji: "💧",
              readTime: 10,
              slug: "fuites-detecter-reparer",
            },
            {
              title: "Robinetterie : entretien et réparation complète",
              category: "Robinetterie",
              emoji: "🚰",
              readTime: 11,
              slug: "robinetterie-entretien-remplacement",
            },
            {
              title: "Comment vider un chauffe-eau : tuto pas à pas",
              category: "Chauffe-eau",
              emoji: "🔥",
              readTime: 9,
              slug: "vider-chauffe-eau-tutoriel",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
