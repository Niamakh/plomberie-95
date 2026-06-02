import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ArticleHero from "@/components/article/ArticleHero"
import TableOfContents from "@/components/article/TableOfContents"
import ArticleBody from "@/components/article/ArticleBody"
import RelatedArticles from "@/components/article/RelatedArticles"

export const metadata: Metadata = {
  title: "Comment déboucher une canalisation : toutes les méthodes efficaces | PlombExpert",
  description:
    "Évier bouché, douche qui déborde, WC qui refoule… Découvrez toutes les techniques pour déboucher vos canalisations vous-même : ventouse, furet, produits, et Karcher. Guide complet pas à pas.",
}

export default function ArticleDebouchage() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleHero
          category="Débouchage"
          categoryEmoji="🚿"
          title="Comment déboucher une canalisation : toutes les méthodes efficaces"
          excerpt="Évier bouché, douche qui met du temps à évacuer, WC qui refoule… Les canalisations bouchées font partie des pannes domestiques les plus fréquentes. Bonne nouvelle : dans 80 % des cas, vous pouvez régler le problème vous-même en moins de 30 minutes."
          readTime={12}
          date="28 mai 2026"
          level="Intermédiaire"
          author="Équipe PlombExpert"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Sidebar — table des matières */}
            <aside className="lg:w-64 flex-shrink-0">
              <TableOfContents
                items={[
                  { id: "pourquoi", label: "Pourquoi ça se bouche ?" },
                  { id: "ventouse", label: "1. La ventouse" },
                  { id: "produits", label: "2. Les produits chimiques" },
                  { id: "furet", label: "3. Le furet de plombier" },
                  { id: "karcher", label: "4. Le nettoyeur haute pression" },
                  { id: "naturel", label: "5. La méthode naturelle" },
                  { id: "prevention", label: "Prévention" },
                  { id: "plombier", label: "Quand appeler un plombier ?" },
                  { id: "faq", label: "FAQ" },
                ]}
              />
            </aside>

            {/* Corps de l'article */}
            <ArticleBody />
          </div>
        </div>
        <RelatedArticles />
      </main>
      <Footer />
    </>
  )
}
