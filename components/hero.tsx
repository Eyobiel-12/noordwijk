import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  "Klassieke en moderne meubelstoffering",
  "Vernieuwen van schuim, veren en singels",
  "Lederherstel en kleurcorrectie",
  "Reparatie van houten meubelen",
  "Onderhoud en reparatie van klokken",
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-fc9qUeZgnorJGvOYkKF7YHCIgHnAsK.jpeg"
          alt="Meubelstoffeerderij Noordwijk - Vakmanschap in meubelstoffering"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.96] via-primary/[0.82] to-primary/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_70%_20%,transparent_40%,oklch(0.2_0.05_240/0.35)_100%)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-2xl">
          <p className="text-secondary text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 drop-shadow-sm">
            Sinds 1985 in Noordwijk
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-[1.08] sm:leading-tight mb-4 sm:mb-6 text-balance drop-shadow-sm">
            Vakmanschap<br />
            <span className="italic font-normal">tot in detail</span>
          </h1>
          <p className="text-primary-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-xl">
            Bij Meubelstoffeerderij Noordwijk staan kwaliteit, precisie en persoonlijke service centraal. 
            Wij combineren traditioneel ambacht met moderne materialen en technieken.
          </p>

          {/* Features */}
          <ul className="space-y-2 sm:space-y-3 mb-8 sm:mb-10">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 sm:gap-3 text-primary-foreground/90 text-sm sm:text-base">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-secondary-foreground flex-shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="#contact">
              <Button size="lg" className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-11 touch-manipulation">
                Vraag een offerte aan
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="#portfolio">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-11 touch-manipulation"
              >
                Bekijk ons werk
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-primary-foreground/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary-foreground/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
