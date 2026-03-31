"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PHONE_DISPLAY, telHref, whatsAppUrl } from "@/lib/contact-constants"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefoon",
    value: PHONE_DISPLAY,
    href: telHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: PHONE_DISPLAY,
    href: whatsAppUrl("Hallo, ik heb een vraag over meubelstoffering."),
    isExternal: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@meubelstoffeerderijnoordwijk.nl",
    href: "mailto:info@meubelstoffeerderijnoordwijk.nl",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "Jonckersweg 21G - 174, 2201 DZ Noordwijk",
    href: "https://maps.google.com/?q=Jonckersweg+21G+174+Noordwijk",
    isExternal: true,
  },
]

export function Contact() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [formError, setFormError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormError(null)
    setFormState("submitting")
    const form = e.currentTarget
    const fd = new FormData(form)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(fd.get("name") ?? "").trim(),
          phone: String(fd.get("phone") ?? "").trim(),
          email: String(fd.get("email") ?? "").trim(),
          subject: String(fd.get("subject") ?? "").trim(),
          message: String(fd.get("message") ?? "").trim(),
        }),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setFormError(data.error ?? "Verzenden mislukt. Probeer het later opnieuw.")
        setFormState("idle")
        return
      }
      setFormState("success")
      form.reset()
    } catch {
      setFormError("Geen verbinding. Controleer uw internet en probeer opnieuw.")
      setFormState("idle")
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
          {/* Left: Contact Info */}
          <div>
            <p className="text-secondary text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
              Contact
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 sm:mb-6 text-balance">
              Bel gerust voor vrijblijvend advies
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-8 sm:mb-10 max-w-md text-sm sm:text-base">
              Heeft u vragen over onze diensten of wilt u een vrijblijvende offerte? 
              Neem contact met ons op, wij helpen u graag verder.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 sm:gap-4 group py-2 -my-1 touch-manipulation active:bg-primary-foreground/5 rounded-lg transition-colors"
                  target={'isExternal' in item && item.isExternal ? "_blank" : undefined}
                  rel={'isExternal' in item && item.isExternal ? "noopener noreferrer" : undefined}
                >
                  <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-primary-foreground/60 text-xs sm:text-sm mb-0.5 sm:mb-1">
                      {item.label}
                    </div>
                    <div className="text-primary-foreground group-hover:text-secondary transition-colors text-sm sm:text-base truncate">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Opening Hours */}
            <div className="p-6 rounded-sm bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-secondary" />
                <h3 className="font-serif text-lg text-primary-foreground">Openingstijden</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-primary-foreground/70">
                  <span>Maandag - Vrijdag</span>
                  <span className="text-primary-foreground">08:00 - 17:30</span>
                </div>
                <div className="flex justify-between text-primary-foreground/70">
                  <span>Zaterdag</span>
                  <span className="text-primary-foreground">Op afspraak</span>
                </div>
                <div className="flex justify-between text-primary-foreground/70">
                  <span>Zondag</span>
                  <span className="text-primary-foreground/50">Gesloten</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-card rounded-xl sm:rounded-lg p-5 sm:p-6 lg:p-10 shadow-[0_25px_50px_-12px_oklch(0.2_0.04_240_/_0.14)] ring-1 ring-border/40">
            <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-2">
              Vraag een offerte aan
            </h3>
            <p className="text-muted-foreground text-sm mb-6 sm:mb-8">
              Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
            </p>

            {formState === 'success' ? (
              <div className="text-center py-10 sm:py-12">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h4 className="font-serif text-lg sm:text-xl text-foreground mb-2">Bedankt!</h4>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Wij hebben uw bericht ontvangen en nemen zo snel mogelijk contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="name" className="text-foreground text-sm">Naam *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Uw naam"
                      className="bg-background h-11 sm:h-10 text-base sm:text-sm"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="phone" className="text-foreground text-sm">Telefoon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Uw telefoonnummer"
                      className="bg-background h-11 sm:h-10 text-base sm:text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="email" className="text-foreground text-sm">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="uw@email.nl"
                    className="bg-background h-11 sm:h-10 text-base sm:text-sm"
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="subject" className="text-foreground text-sm">Onderwerp</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Waarover gaat uw vraag?"
                    className="bg-background h-11 sm:h-10 text-base sm:text-sm"
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="message" className="text-foreground text-sm">Bericht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Beschrijf uw vraag of het meubel dat u wilt laten herstofferen..."
                    rows={4}
                    className="bg-background resize-none text-base sm:text-sm"
                  />
                </div>
                {formError ? (
                  <p className="text-sm text-destructive" role="alert">
                    {formError}
                  </p>
                ) : null}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 h-12 sm:h-11 text-base sm:text-sm touch-manipulation"
                  disabled={formState === "submitting"}
                >
                  {formState === 'submitting' ? (
                    <>Versturen...</>
                  ) : (
                    <>
                      Verstuur bericht
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
