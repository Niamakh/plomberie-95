import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ArticleHero from "@/components/article/ArticleHero"
import TableOfContents from "@/components/article/TableOfContents"
import SiphonBody from "@/components/article/SiphonBody"
import RelatedArticles from "@/components/article/RelatedArticles"

export const metadata: Metadata = {
  title: "Siphon : nettoyage, débouchage et remplacement complet | PlombExpert",
  description:
    "Siphon bouché, qui pue ou qui fuit : comment le nettoyer, le déboucher ou le remplacer selon le type (bouteille, tubulaire, à culot). Guide complet avec étapes illustrées.",
}

export default function ArticleSiphon() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleHero
          category="Siphon"
          categoryEmoji="🪠"
          title="Siphon : nettoyage, débouchage et remplacement complet"
          excerpt="Le siphon est la première ligne de défense contre les odeurs d'égout — et la première cause de bouchons sous l'évier. Comprendre son rôle, le nettoyer régulièrement et savoir le remplacer vous évitera bien des appels au plombier."
          readTime={7}
          date="12 avr. 2026"
          level="Débutant"
          author="Équipe PlombExpert"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-64 flex-shrink-0">
              <TableOfContents
                items={[
                  { id: "role-siphon", label: "Rôle du siphon" },
                  { id: "types", label: "Les types de siphons" },
                  { id: "odeurs", label: "Odeurs d'égout" },
                  { id: "nettoyer", label: "Nettoyer le siphon" },
                  { id: "deboucher", label: "Déboucher le siphon" },
                  { id: "fuite-siphon", label: "Siphon qui fuit" },
                  { id: "remplacer", label: "Remplacer un siphon" },
                  { id: "siphon-douche", label: "Siphon de douche" },
                  { id: "prevention", label: "Prévention" },
                  { id: "faq", label: "FAQ" },
                ]}
              />
            </aside>
            <SiphonBody />
          </div>
        </div>
        <RelatedArticles
          current="siphon-nettoyage-remplacement"
          articles={[
            { title: "Déboucher une canalisation : toutes les méthodes", category: "Débouchage", emoji: "🚿", readTime: 12, slug: "deboucher-canalisation-karcher" },
            { title: "Évacuations : fonctionnement et entretien", category: "Évacuation", emoji: "🏗️", readTime: 11, slug: "evacuation-canalisations-guide" },
            { title: "Fuites d'eau : détecter, localiser et réparer", category: "Fuites", emoji: "💧", readTime: 10, slug: "fuites-detecter-reparer" },
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
