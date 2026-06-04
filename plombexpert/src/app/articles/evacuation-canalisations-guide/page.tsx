import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ArticleHero from "@/components/article/ArticleHero"
import TableOfContents from "@/components/article/TableOfContents"
import EvacuationBody from "@/components/article/EvacuationBody"
import RelatedArticles from "@/components/article/RelatedArticles"

export const metadata: Metadata = {
  title: "Canalisations d'évacuation : fonctionnement, entretien et réparation | PlombExpert",
  description:
    "Tout comprendre sur les canalisations d'évacuation : réseaux EU/EP, regards de visite, curage, et réparation des fuites en évacuation. Guide complet pour particuliers.",
}

export default function ArticleEvacuation() {
  return (
    <>
      <Navbar />
      <main>
        <ArticleHero
          category="Évacuation"
          categoryEmoji="🏗️"
          title="Canalisations d'évacuation : fonctionnement, entretien et réparation"
          excerpt="Réseau EU, réseau EP, regard de visite, canalisation en PVC ou en fonte… Les évacuations sont souvent méconnues, pourtant un réseau mal entretenu peut causer des remontées d'odeurs, des inondations ou des dégâts structurels. Ce guide vous explique tout."
          readTime={11}
          date="28 avr. 2026"
          level="Avancé"
          author="Équipe PlombExpert"
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <aside className="lg:w-64 flex-shrink-0">
              <TableOfContents
                items={[
                  { id: "reseaux", label: "EU, EP et eaux mixtes" },
                  { id: "composants", label: "Les composants clés" },
                  { id: "regard", label: "Le regard de visite" },
                  { id: "pente", label: "La pente réglementaire" },
                  { id: "odeurs", label: "Odeurs et gargouillis" },
                  { id: "curage", label: "Curage et débouchage" },
                  { id: "reparer", label: "Réparer une fuite" },
                  { id: "materiaux", label: "PVC, fonte ou grès ?" },
                  { id: "entretien", label: "Calendrier d'entretien" },
                  { id: "faq", label: "FAQ" },
                ]}
              />
            </aside>
            <EvacuationBody />
          </div>
        </div>
        <RelatedArticles
          current="evacuation-canalisations-guide"
          articles={[
            { title: "Déboucher une canalisation : toutes les méthodes", category: "Débouchage", emoji: "🚿", readTime: 12, slug: "deboucher-canalisation-karcher" },
            { title: "Siphon : nettoyage et remplacement complet", category: "Siphon", emoji: "🪠", readTime: 7, slug: "siphon-nettoyage-remplacement" },
            { title: "Fuites d'eau : détecter, localiser et réparer", category: "Fuites", emoji: "💧", readTime: 10, slug: "fuites-detecter-reparer" },
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
