"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Check, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { quoteServiceOptions } from "@/lib/quote-services"
import { cn } from "@/lib/utils"

type PortfolioItem = {
  id: number
  image: string
  title: string
  category: string
  description: string
}

function PortfolioTileButton({
  item,
  phase,
  onSelect,
}: {
  item: PortfolioItem
  phase: "voor" | "na"
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group relative aspect-[5/6] sm:aspect-[5/6] lg:aspect-[4/5] w-full min-h-0 overflow-hidden rounded-lg sm:rounded-md bg-card cursor-pointer text-left touch-manipulation ring-1 ring-border/30 shadow-sm hover:shadow-md transition-shadow duration-300",
        phase === "voor"
          ? "col-start-1 row-start-1"
          : "col-start-2 row-start-1 sm:col-start-3",
      )}
    >
      <span
        className={cn(
          "absolute top-2 left-2 z-20 rounded px-2 py-0.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider shadow-sm",
          phase === "voor"
            ? "bg-background/95 text-muted-foreground ring-1 ring-border/60"
            : "bg-secondary text-secondary-foreground",
        )}
      >
        {phase === "voor" ? "Voor" : "Na"}
      </span>
      <Image
        src={item.image}
        alt={`${item.title} — ${phase}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 42vw, 320px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent sm:from-primary/90 sm:via-primary/20 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 lg:p-6 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <span className="text-secondary text-[9px] sm:text-xs tracking-widest uppercase block">
          {item.category}
        </span>
        <span className="font-serif text-xs sm:text-base lg:text-lg text-primary-foreground mt-0.5 line-clamp-2 block">
          {item.title}
        </span>
      </div>
    </button>
  )
}

const beforeAfterPairs = [
  {
    id: "bank",
    title: "Bank",
    before: "/images/voor-bank.jpeg",
    after: "/images/na-bank.jpeg",
  },
  {
    id: "tafel",
    title: "Tafel",
    before: "/images/voortafle.jpeg",
    after: "/images/na-tafel.jpeg",
  },
] as const

const portfolioItems: PortfolioItem[] = [
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

/** Elke rij: links = voor, rechts = na (zelfde leesvolgorde als op mobiel). */
const portfolioPairs: { id: string; title: string; before: PortfolioItem; after: PortfolioItem }[] = [
  {
    id: "design-fauteuil",
    title: "Design fauteuil",
    before: portfolioItems[0],
    after: portfolioItems[1],
  },
  {
    id: "ronde-stoelen",
    title: "Ronde zitmeubelen",
    before: portfolioItems[2],
    after: portfolioItems[3],
  },
  {
    id: "fauteuil-zitkussen",
    title: "Fauteuil & zitkussen",
    before: portfolioItems[4],
    after: portfolioItems[5],
  },
]

export function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)
  const [quoteState, setQuoteState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [quoteError, setQuoteError] = useState<string | null>(null)
  const [serviceType, setServiceType] = useState<string>("")

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!serviceType) return
    setQuoteError(null)
    setQuoteState("submitting")
    const form = e.currentTarget
    const fd = new FormData(form)
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType,
          name: String(fd.get("name") ?? "").trim(),
          phone: String(fd.get("phone") ?? "").trim(),
          email: String(fd.get("email") ?? "").trim(),
          details: String(fd.get("details") ?? "").trim(),
        }),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setQuoteError(data.error ?? "Verzenden mislukt. Probeer het later opnieuw.")
        setQuoteState("idle")
        return
      }
      setQuoteState("success")
      form.reset()
      setServiceType("")
    } catch {
      setQuoteError("Geen verbinding. Controleer uw internet en probeer opnieuw.")
      setQuoteState("idle")
    }
  }

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
            Per rij ziet u hetzelfde traject: <strong className="text-foreground font-medium">links vóór</strong> herstoffering,{" "}
            <strong className="text-foreground font-medium">rechts het resultaat erna</strong>. Tik op een foto voor meer uitleg.
          </p>
        </div>

        {/* Voor & na — lokale projectfoto's */}
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground mb-2 sm:mb-3 text-balance">
            Voor &amp; na
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mb-6 sm:mb-8">
            Het verschil dat vakmanschap maakt — van oude bekleding tot een fris resultaat.
          </p>
          <div className="space-y-8 sm:space-y-10 lg:space-y-12 max-w-2xl mx-auto">
            {beforeAfterPairs.map((pair) => (
              <div key={pair.id}>
                <h4 className="text-secondary text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4">
                  {pair.title}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                  <figure className="overflow-hidden rounded-lg sm:rounded-md ring-1 ring-border/30 shadow-sm bg-card">
                    <div className="relative aspect-[5/6] w-full">
                      <Image
                        src={pair.before}
                        alt={`${pair.title} — voor`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 90vw, 360px"
                      />
                    </div>
                    <figcaption className="px-3 py-2 sm:px-4 sm:py-2.5 text-center text-xs sm:text-sm font-medium tracking-wide uppercase text-muted-foreground bg-muted/50">
                      Voor
                    </figcaption>
                  </figure>
                  <figure className="overflow-hidden rounded-lg sm:rounded-md ring-1 ring-border/30 shadow-sm bg-card">
                    <div className="relative aspect-[5/6] w-full">
                      <Image
                        src={pair.after}
                        alt={`${pair.title} — na`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 90vw, 360px"
                      />
                    </div>
                    <figcaption className="px-3 py-2 sm:px-4 sm:py-2.5 text-center text-xs sm:text-sm font-medium tracking-wide uppercase text-secondary bg-muted/50">
                      Na
                    </figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio: voor / na per rij */}
        <div className="space-y-7 sm:space-y-9 lg:space-y-10 max-w-3xl mx-auto">
          {portfolioPairs.map((pair) => (
            <div key={pair.id}>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1 sm:gap-4 mb-2 sm:mb-3">
                <h3 className="font-serif text-base sm:text-lg text-foreground">{pair.title}</h3>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  Voor · Na
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-[minmax(0,1fr)_2.25rem_minmax(0,1fr)] gap-2 sm:gap-1 lg:gap-2 items-stretch">
                <PortfolioTileButton
                  item={pair.before}
                  phase="voor"
                  onSelect={() => setSelectedItem(pair.before)}
                />
                <div
                  className="hidden sm:flex col-start-2 row-start-1 items-center justify-center text-secondary pointer-events-none"
                  aria-hidden
                >
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 shrink-0 opacity-90" />
                </div>
                <PortfolioTileButton
                  item={pair.after}
                  phase="na"
                  onSelect={() => setSelectedItem(pair.after)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Offerte — kies dienst + gegevens */}
        <div className="mt-10 sm:mt-14 lg:mt-16 max-w-lg mx-auto">
          <div className="rounded-xl sm:rounded-lg bg-card p-5 sm:p-6 lg:p-8 ring-1 ring-border/40 shadow-sm">
            <h3 className="font-serif text-xl sm:text-2xl text-foreground text-center mb-1">
              Vraag een offerte aan
            </h3>
            <p className="text-muted-foreground text-sm text-center mb-6 sm:mb-8">
              Kies het type werk en laat kort weten wat u zoekt — wij reageren zo snel mogelijk.
            </p>

            {quoteState === "success" ? (
              <div className="text-center py-6 sm:py-8">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7 text-green-600" />
                </div>
                <h4 className="font-serif text-lg text-foreground mb-2">Offerte-aanvraag verstuurd</h4>
                <p className="text-muted-foreground text-sm">
                  We nemen contact met u op om de mogelijkheden door te nemen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-4 sm:space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="quote-service" className="text-foreground text-sm">
                    Wat voor soort werk zoekt u? *
                  </Label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger
                      id="quote-service"
                      className="w-full h-11 bg-background text-left"
                    >
                      <SelectValue placeholder="Selecteer een dienst" />
                    </SelectTrigger>
                    <SelectContent>
                      {quoteServiceOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quote-name" className="text-foreground text-sm">
                      Naam *
                    </Label>
                    <Input
                      id="quote-name"
                      name="name"
                      required
                      placeholder="Uw naam"
                      className="bg-background h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quote-phone" className="text-foreground text-sm">
                      Telefoon
                    </Label>
                    <Input
                      id="quote-phone"
                      name="phone"
                      type="tel"
                      placeholder="06 …"
                      className="bg-background h-11"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quote-email" className="text-foreground text-sm">
                    E-mail *
                  </Label>
                  <Input
                    id="quote-email"
                    name="email"
                    type="email"
                    required
                    placeholder="uw@email.nl"
                    className="bg-background h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quote-details" className="text-foreground text-sm">
                    Korte omschrijving (optioneel)
                  </Label>
                  <Textarea
                    id="quote-details"
                    name="details"
                    rows={3}
                    placeholder="Bijv. type meubel, stofwensen of gewenste planning…"
                    className="bg-background resize-none text-sm"
                  />
                </div>
                {quoteError ? (
                  <p className="text-sm text-destructive" role="alert">
                    {quoteError}
                  </p>
                ) : null}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 h-12 bg-primary text-primary-foreground touch-manipulation"
                  disabled={quoteState === "submitting" || !serviceType}
                >
                  {quoteState === "submitting" ? (
                    "Versturen…"
                  ) : (
                    <>
                      Offerte aanvragen
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
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
