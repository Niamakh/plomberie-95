import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ArticleHero from "@/components/article/ArticleHero"
import TableOfContents from "@/components/article/TableOfContents"
import OutilsBody from "@/components/article/OutilsBody"
import RelatedArticles from "@/components/article/RelatedArticles"

export const metadata: Metadata = {
  title: "Les 20 outils de plomberie indispensables (débutant à pro) | PlombExpert",
  description:
    "Clé à molette, coupe-tube, sertisseur, furet… Découvrez les 20 outils incontournables pour faire vous-même vos travaux de plomberie, avec conseils d'achat et prix indicatifs.",
}

export default function ArticleOutils() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleHero
          category="Matériel"
          categoryEmoji="📐"
          title="Les 20 outils de plomberie indispensables (de débutant à pro)"
          excerpt="Avant de se lancer dans n'importe quel travail de plomberie, il faut le bon outillage. Trop souvent, les bricoleurs abandonnent ou abîment leurs installations faute d'outils adaptés. Ce guide fait le tour complet : de la boîte à outils de base (moins de 50 €) jusqu'au matériel semi-professionnel pour les projets ambitieux."
          readTime={10}
          date="18 mai 2026"
          level="Débutant"
          author="Équipe PlombExpert"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-64 flex-shrink-0">
              <TableOfContents
                items={[
                  { id: "boite-base",      label: "La boîte de base (≤ 50 €)" },
                  { id: "etancheite",      label: "Étanchéité et joints" },
                  { id: "coupe-soudure",   label: "Coupe et assemblage" },
                  { id: "debouchage",      label: "Débouchage" },
                  { id: "mesure",          label: "Mesure et traçage" },
                  { id: "serrage",         label: "Serrage et vissage" },
                  { id: "semi-pro",        label: "Niveau semi-pro" },
                  { id: "ou-acheter",      label: "Où acheter ?" },
                  { id: "entretien-outils",label: "Entretien des outils" },
                  { id: "faq",             label: "FAQ" },
                ]}
              />
            </aside>
            <OutilsBody />
          </div>
        </div>
        <RelatedArticles
          current="outils-plomberie-indispensables"
          articles={[
            { title: "Déboucher une canalisation : toutes les méthodes",  category: "Débouchage",  emoji: "🚿", readTime: 12, slug: "deboucher-canalisation-karcher" },
            { title: "Joint fibre ou caoutchouc : lequel choisir ?",      category: "Joints",       emoji: "🔗", readTime: 5,  slug: "joint-fibre-ou-caoutchouc" },
            { title: "Robinetterie : entretien et réparation complète",   category: "Robinetterie", emoji: "🚰", readTime: 11, slug: "robinetterie-entretien-remplacement" },
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
