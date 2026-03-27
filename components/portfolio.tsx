"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const portfolioItems = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2HVhKxDZr1Qne1lhC93GWRT2qM4N6f.png",
    title: "Design Fauteuil Magenta",
    category: "Moderne Herstoffering",
    description: "Unieke S-vormige design stoel volledig opnieuw gestoffeerd in levendig magenta met houten draaivoet.",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sGc9DCC4PxgpJWyWX4A3Kcupm95pyM.png",
    title: "Design Fauteuil Blauw",
    category: "Moderne Herstoffering",
    description: "Elegante S-vormige design stoel in zacht blauw met houten basis - perfecte combinatie van comfort en stijl.",
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Lblw1KyeVxNQvaHtXT65Xe7tGxFlYA.png",
    title: "Moderne Loungestoel",
    category: "Design Stoffering",
    description: "Hedendaagse ronde loungestoel in frisse limoengroene stof met chromen onderstel.",
  },
  {
    id: 4,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WwCxMJOIaH6QqZoZM18rotrzij3V38.png",
    title: "Draaifauteuil Beige",
    category: "Luxe Herstoffering",
    description: "Luxueuze ronde draaifauteuil met hoogwaardige beige geweven stof - tijdloze elegantie.",
  },
  {
    id: 5,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IGJ88CGEwrw85PgzfDkMwJ6eGsTQhX.png",
    title: "Draaifauteuil Crème",
    category: "Luxe Herstoffering",
    description: "Elegante ronde draaifauteuil in crème wit met bijpassende sierkussens - pure luxe.",
  },
  {
    id: 6,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-YuxaY4F6PiCIkqHepqQlOHKd9Vdc19.jpeg",
    title: "Zitkussen Renovatie",
    category: "Schuim Vernieuwing",
    description: "Professionele vernieuwing van zitkussen met nieuw schuim en hoogwaardige blauwe bekleding.",
  },
]

export function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-10 sm:mb-16 lg:mb-24">
          <div className="max-w-xl">
            <p className="text-secondary text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
              Portfolio
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
              Ons recente werk
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-md text-sm sm:text-base">
            Bekijk een selectie van onze recente projecten. Van klassieke restauraties tot moderne herstoffering.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {portfolioItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-lg sm:rounded-md bg-card cursor-pointer text-left touch-manipulation ring-1 ring-border/30 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Always visible on mobile, hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent sm:from-primary/90 sm:via-primary/20 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300">
                <span className="text-secondary text-[10px] sm:text-xs tracking-widest uppercase">
                  {item.category}
                </span>
                <h3 className="font-serif text-sm sm:text-base lg:text-xl text-primary-foreground mt-0.5 sm:mt-1 line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <Button variant="outline" size="lg" className="gap-2 h-12 sm:h-11 px-6 sm:px-8 text-sm sm:text-base touch-manipulation">
            Bekijk alle projecten
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 flex items-end sm:items-center justify-center"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative bg-card w-full sm:max-w-2xl lg:max-w-4xl sm:mx-4 rounded-t-xl sm:rounded-sm overflow-hidden max-h-[90vh] sm:max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2.5 rounded-full bg-background/90 text-foreground hover:bg-background transition-colors touch-manipulation"
              aria-label="Sluiten"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[4/5] sm:aspect-[16/10] relative flex-shrink-0">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 sm:p-6 lg:p-8">
              <span className="text-secondary text-xs tracking-widest uppercase">
                {selectedItem.category}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-foreground mt-1 mb-2 sm:mb-3">
                {selectedItem.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
