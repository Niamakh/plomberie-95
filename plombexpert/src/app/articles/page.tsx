import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ArticlesGallery from "@/components/articles/ArticlesGallery"

export const metadata: Metadata = {
  title: "Tous les articles plomberie | PlombExpert",
  description:
    "Retrouvez tous nos guides et tutoriels de plomberie : débouchage, chauffe-eau, robinetterie, fuites, WC, radiateurs et plus. Des conseils pratiques pour particuliers.",
}

export default function ArticlesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ArticlesGallery />
      </main>
      <Footer />
    </>
  )
}
