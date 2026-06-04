import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ArticleHero from "@/components/article/ArticleHero"
import TableOfContents from "@/components/article/TableOfContents"
import RadiateurBody from "@/components/article/RadiateurBody"
import RelatedArticles from "@/components/article/RelatedArticles"

export const metadata: Metadata = {
  title: "Purger un radiateur : tuto complet (fonte, acier, aluminium) | PlombExpert",
  description:
    "Radiateur froid en bas, bruits de glouglou, chauffage inefficace… Il suffit souvent de purger l'air emprisonné. Guide complet pour purger tous types de radiateurs sans salir.",
}

export default function ArticleRadiateur() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleHero
          category="Radiateurs"
          categoryEmoji="🌡️"
          title="Purger un radiateur : tuto complet pour tous types de radiateurs"
          excerpt="Votre radiateur chauffe bien en haut mais reste froid en bas ? Vous entendez des glouglous ou des claquements quand le chauffage démarre ? C'est de l'air emprisonné dans le circuit. La purge est une opération simple qui prend 5 minutes et peut diviser votre facture de chauffage par deux."
          readTime={7}
          date="14 mai 2026"
          level="Débutant"
          author="Équipe PlombExpert"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-64 flex-shrink-0">
              <TableOfContents
                items={[
                  { id: "pourquoi-purger", label: "Pourquoi purger ?" },
                  { id: "signes", label: "Signes à repérer" },
                  { id: "materiel", label: "Matériel nécessaire" },
                  { id: "purge-radiateur", label: "Purger un radiateur" },
                  { id: "purge-fonte", label: "Radiateur en fonte" },
                  { id: "purge-circuit", label: "Purger tout le circuit" },
                  { id: "apres-purge", label: "Après la purge" },
                  { id: "robinet-thermostatique", label: "Robinet thermostatique" },
                  { id: "entretien", label: "Entretien annuel" },
                  { id: "faq", label: "FAQ" },
                ]}
              />
            </aside>
            <RadiateurBody />
          </div>
        </div>
        <RelatedArticles
          current="purger-radiateur-fonte-tuto"
          articles={[
            { title: "Fuites d'eau : détecter, localiser et réparer", category: "Fuites", emoji: "💧", readTime: 10, slug: "fuites-detecter-reparer" },
            { title: "Robinetterie : entretien et réparation complète", category: "Robinetterie", emoji: "🚰", readTime: 11, slug: "robinetterie-entretien-remplacement" },
            { title: "Comment vider un chauffe-eau : tuto pas à pas", category: "Chauffe-eau", emoji: "🔥", readTime: 9, slug: "vider-chauffe-eau-tutoriel" },
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
