import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { USPSection } from "@/components/usp-section"
import { Portfolio } from "@/components/portfolio"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <USPSection />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
