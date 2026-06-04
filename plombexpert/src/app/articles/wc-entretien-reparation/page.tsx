import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ArticleHero from "@/components/article/ArticleHero"
import TableOfContents from "@/components/article/TableOfContents"
import WCBody from "@/components/article/WCBody"
import RelatedArticles from "@/components/article/RelatedArticles"

export const metadata: Metadata = {
  title: "WC : entretien, réparation et remplacement complet | PlombExpert",
  description:
    "WC bouché, réservoir qui fuit, chasse défaillante, WC qui coule… Ce guide couvre toutes les pannes et interventions sur vos toilettes, du dépannage rapide au remplacement complet.",
}

export default function ArticleWC() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleHero
          category="WC"
          categoryEmoji="🚽"
          title="WC : entretien, réparation et remplacement complet"
          excerpt="WC bouché, réservoir qui fuit, chasse qui se déclenche toute seule, joints qui coulent… Les toilettes cumulent de nombreuses pièces mécaniques qui s'usent avec le temps. Ce guide vous explique comment diagnostiquer et réparer chaque panne vous-même."
          readTime={10}
          date="20 avr. 2026"
          level="Débutant"
          author="Équipe PlombExpert"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-64 flex-shrink-0">
              <TableOfContents
                items={[
                  { id: "anatomie", label: "Anatomie des WC" },
                  { id: "wc-bouche", label: "WC bouché" },
                  { id: "reservoir-fuit", label: "Réservoir qui fuit" },
                  { id: "chasse-lente", label: "Chasse d'eau lente" },
                  { id: "flotteur", label: "Régler le flotteur" },
                  { id: "joint-pied", label: "Joint de pied" },
                  { id: "wc-suspendu", label: "WC suspendu" },
                  { id: "remplacer", label: "Remplacer un WC" },
                  { id: "entretien", label: "Entretien régulier" },
                  { id: "faq", label: "FAQ" },
                ]}
              />
            </aside>
            <WCBody />
          </div>
        </div>
        <RelatedArticles
          current="wc-entretien-reparation"
          articles={[
            { title: "Déboucher une canalisation : toutes les méthodes", category: "Débouchage", emoji: "🚿", readTime: 12, slug: "deboucher-canalisation-karcher" },
            { title: "Fuites d'eau : détecter, localiser et réparer", category: "Fuites", emoji: "💧", readTime: 10, slug: "fuites-detecter-reparer" },
            { title: "Siphon : nettoyage et remplacement complet", category: "Siphon", emoji: "🪠", readTime: 7, slug: "siphon-nettoyage-remplacement" },
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
