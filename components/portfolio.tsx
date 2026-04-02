"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, Send, X } from "lucide-react"
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
import { VoorNaComparison } from "@/components/voor-na-comparison"

type PortfolioItem = {
  id: number
  image: string
  title: string
  category: string
  description: string
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
    before: "/images/tafel-voor.jpeg",
    after: "/images/tafelna.jpeg",
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
    image: "/images/tafel-voor.jpeg",
    title: "Tafel — voor",
    category: "Tafelstoffering",
    description: "De tafel vóór herstoffering — oude bekleding en details zichtbaar.",
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
    image: "/images/tafelna.jpeg",
    title: "Tafel — na",
    category: "Tafelstoffering",
    description: "Hetzelfde meubel na herstoffering — fris materiaal en nette afwerking.",
  },
]

/** Voor/na-paren: bewust gekoppeld op hetzelfde stuk meubel. */
const portfolioPairs: { id: string; title: string; before: PortfolioItem; after: PortfolioItem }[] = [
  {
    id: "design-fauteuil",
    title: "Design fauteuil",
    before: portfolioItems[0],
    after: portfolioItems[1],
  },
  {
    id: "draaifauteuil",
    title: "Draaifauteuil",
    before: portfolioItems[3],
    after: portfolioItems[4],
  },
  {
    id: "tafel",
    title: "Tafel",
    before: portfolioItems[2],
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
            <strong className="text-foreground font-medium">Sleep de lijn</strong> op elke foto om vóór en na te vergelijken.{" "}
            Onder de projecten kunt u <strong className="text-foreground font-medium">uitleg vóór/na</strong> openen.
          </p>
        </div>

        {/* Voor & na — lokale projectfoto's */}
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground mb-2 sm:mb-3 text-balance">
            Voor &amp; na
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mb-6 sm:mb-8">
            Sleep over de foto heen om het verschil te zien — hetzelfde stuk, vóór en na herstoffering.
          </p>
          <div className="space-y-8 sm:space-y-10 lg:space-y-12 max-w-2xl mx-auto">
            {beforeAfterPairs.map((pair) => (
              <figure key={pair.id} className="space-y-2">
                <figcaption className="text-secondary text-xs sm:text-sm tracking-[0.2em] uppercase mb-1">
                  {pair.title}
                </figcaption>
                <VoorNaComparison
                  beforeSrc={pair.before}
                  afterSrc={pair.after}
                  beforeAlt={`${pair.title} — voor`}
                  afterAlt={`${pair.title} — na`}
                />
              </figure>
            ))}
          </div>
        </div>

        {/* Portfolio: interactieve voor/na-vergelijking per project */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12 max-w-2xl mx-auto">
          {portfolioPairs.map((pair) => (
            <div key={pair.id}>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1 sm:gap-4 mb-2 sm:mb-3">
                <h3 className="font-serif text-base sm:text-lg text-foreground">{pair.title}</h3>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  Sleep · vergelijk
                </p>
              </div>
              <VoorNaComparison
                beforeSrc={pair.before.image}
                afterSrc={pair.after.image}
                beforeAlt={`${pair.title} — voor`}
                afterAlt={`${pair.title} — na`}
              />
              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm">
                <button
                  type="button"
                  onClick={() => setSelectedItem(pair.before)}
                  className="text-muted-foreground underline underline-offset-4 decoration-border hover:text-foreground transition-colors touch-manipulation py-1"
                >
                  Uitleg vóór
                </button>
                <span className="text-border select-none" aria-hidden>
                  ·
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedItem(pair.after)}
                  className="text-muted-foreground underline underline-offset-4 decoration-border hover:text-foreground transition-colors touch-manipulation py-1"
                >
                  Uitleg na
                </button>
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
            <div className="aspect-[4/5] sm:aspect-[16/10] relative flex-shrink-0 max-h-[55vh] sm:max-h-[50vh]">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                quality={82}
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 896px"
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
