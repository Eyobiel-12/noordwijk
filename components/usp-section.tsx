"use client"

import { Check, Truck, FileText, MessageSquare, Shield, Award, Leaf, Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const usps = [
  {
    icon: Truck,
    text: "Gratis haal- en brengservice",
  },
  {
    icon: FileText,
    text: "Vrijblijvende prijsopgave op maat",
  },
  {
    icon: MessageSquare,
    text: "Persoonlijk advies",
  },
  {
    icon: Shield,
    text: "Levering onder garantie",
  },
  {
    icon: Award,
    text: "Vakmanschap met jarenlange ervaring",
  },
]

export function USPSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Sustainability Message */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
              </div>
              <p className="text-secondary text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                Duurzaam & Waardevol
              </p>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary-foreground mb-4 sm:mb-6 text-balance leading-tight">
              Geef uw meubel een nieuw leven
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed text-sm sm:text-base mb-6">
              Herstofferen is niet alleen een stijlvolle keuze, maar ook een duurzame investering. 
              In plaats van vervangen, geven wij uw vertrouwde meubel een nieuw leven — volledig 
              afgestemd op uw interieur en comfortwensen. Zodat u weer kan genieten van uw lievelingsmeubel.
            </p>
            <div className="flex items-center gap-2 text-secondary">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">Met liefde voor het ambacht</span>
            </div>
          </div>

          {/* Right: USPs */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-10 ring-1 ring-primary-foreground/10 shadow-[0_20px_50px_-20px_oklch(0.12_0.04_240_/_0.4)]">
            <h3 className="font-serif text-xl sm:text-2xl text-primary-foreground mb-6 sm:mb-8">
              Waarom kiezen voor Meubelstoffeerderij Noordwijk?
            </h3>
            <ul className="space-y-4 sm:space-y-5 mb-8">
              {usps.map((usp) => (
                <li key={usp.text} className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-secondary flex items-center justify-center">
                    <usp.icon className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <span className="text-primary-foreground text-sm sm:text-base">
                    {usp.text}
                  </span>
                </li>
              ))}
            </ul>
            
            <div className="border-t border-primary-foreground/10 pt-6 sm:pt-8">
              <p className="text-secondary font-serif text-lg sm:text-xl mb-2">
                Bel gerust voor vrijblijvend advies
              </p>
              <p className="text-primary-foreground/70 text-sm mb-4">
                Wij denken graag met u mee over de mogelijkheden
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+31651355417">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 sm:h-11 text-sm sm:text-base touch-manipulation"
                  >
                    +31 6 51355417
                  </Button>
                </a>
                <Link href="#contact">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-12 sm:h-11 text-sm sm:text-base touch-manipulation"
                  >
                    Stuur een bericht
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
