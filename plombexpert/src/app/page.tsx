import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/home/HeroSection"
import ClusterStrip from "@/components/home/ClusterStrip"
import BentoGrid from "@/components/home/BentoGrid"
import NewsletterSection from "@/components/home/NewsletterSection"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ClusterStrip />
        <BentoGrid />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
