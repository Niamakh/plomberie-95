import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ArticleHero from "@/components/article/ArticleHero"
import TableOfContents from "@/components/article/TableOfContents"
import ChauffeEauBody from "@/components/article/ChauffeEauBody"
import RelatedArticles from "@/components/article/RelatedArticles"

export const metadata: Metadata = {
  title: "Comment vider un chauffe-eau : tutoriel complet pas à pas | PlombExpert",
  description:
    "Vidanger votre ballon d'eau chaude pour le détartrer, changer l'anode ou le remplacer. Guide complet avec toutes les étapes, les outils nécessaires et les erreurs à éviter.",
}

export default function ArticleChauffeEau() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleHero
          category="Chauffe-eau"
          categoryEmoji="🔥"
          title="Comment vider un chauffe-eau : tutoriel complet pas à pas"
          excerpt="Vous devez détartrer votre ballon, changer l'anode de protection ou remplacer l'appareil ? La première étape est toujours la même : vider le chauffe-eau. Un geste simple si on le fait dans le bon ordre — voici exactement comment procéder sans risque."
          readTime={9}
          date="5 mai 2026"
          level="Intermédiaire"
          author="Équipe PlombExpert"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-64 flex-shrink-0">
              <TableOfContents
                items={[
                  { id: "pourquoi-vider", label: "Pourquoi vider son chauffe-eau ?" },
                  { id: "avant-commencer", label: "Avant de commencer" },
                  { id: "couper-alimentation", label: "1. Couper l'alimentation" },
                  { id: "branchement-evacuation", label: "2. Brancher l'évacuation" },
                  { id: "ouvrir-vanne", label: "3. Ouvrir les vannes" },
                  { id: "vidange-complete", label: "4. Lancer la vidange" },
                  { id: "nettoyage", label: "5. Nettoyer le ballon" },
                  { id: "remise-service", label: "6. Remise en service" },
                  { id: "entretien", label: "Entretien régulier" },
                  { id: "faq", label: "FAQ" },
                ]}
              />
            </aside>
            <ChauffeEauBody />
          </div>
        </div>
        <RelatedArticles
          current="vider-chauffe-eau-tutoriel"
          articles={[
            {
              title: "Déboucher une canalisation : toutes les méthodes",
              category: "Débouchage",
              emoji: "🚿",
              readTime: 12,
              slug: "deboucher-canalisation-karcher",
            },
            {
              title: "Les 20 outils de plomberie indispensables",
              category: "Matériel",
              emoji: "📐",
              readTime: 10,
              slug: "outils-plomberie-indispensables",
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
