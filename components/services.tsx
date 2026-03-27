import { Armchair, Scissors, Clock, Hammer, Paintbrush, Sparkles, Sofa, Star, Ship } from "lucide-react"

const highlights = [
  {
    icon: Sofa,
    title: "Speciaalzaak",
    description: "Speciaalzaak op het gebied van stoffen en interieur verzorging. Met een grote collectie meubelstoffen, leder en skai-leer.",
  },
  {
    icon: Star,
    title: "Oog voor Detail",
    description: "Met oog voor detail gaan we te werk op maat aan de hand van uw wensen. Zo is elke opdracht uniek.",
  },
  {
    icon: Scissors,
    title: "Divers Aanbod",
    description: "Meubelstoffering, diverse meubel reparatie en onderhoud, boot of caravan kussens, gordijnen.",
  },
]

const services = [
  {
    icon: Armchair,
    title: "Meubelstoffering",
    description: "Klassieke en moderne meubelstoffering. Met een grote collectie meubelstoffen, leder en skai-leer maken wij elk meubel uniek.",
  },
  {
    icon: Sparkles,
    title: "Schuim & Veren",
    description: "Vervangen of verbeteren van het binnenwerk, zoals schuimpolyether, veren of singels. Zodat u weer kunt genieten van een optimaal zitcomfort.",
  },
  {
    icon: Paintbrush,
    title: "Lederherstel",
    description: "Naast herstofferen ook gedeeltelijke vernieuwing van rug- of zitvlakken, en het onzichtbaar verwijderen van craquelé of verkleuring door zonlicht.",
  },
  {
    icon: Hammer,
    title: "Houten Meubelen",
    description: "Verwijderen van kringen en beschadigingen uit tafelbladen, kasten en ander houten meubilair.",
  },
  {
    icon: Ship,
    title: "Boot & Caravan",
    description: "Herstoffering van kussens voor boot of caravan. Ook voor gordijnen en maatwerk textiel.",
  },
  {
    icon: Clock,
    title: "Klokken & Vlechtwerk",
    description: "Het oude ambacht: bies-, riet- en rotan vlechtwerk, evenals reparaties aan het uurwerk van klokken.",
  },
]

export function Services() {
  return (
    <section id="diensten" className="py-16 sm:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <p className="text-secondary text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
            Onze Diensten
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6 text-balance">
            Onze werkzaamheden
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            Bij Meubelstoffeerderij Noordwijk staan kwaliteit, precisie en persoonlijke service centraal.
          </p>
        </div>

        {/* Highlight Cards - matching the flyer style */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="relative bg-primary text-primary-foreground p-5 sm:p-6 lg:p-8 rounded-lg overflow-hidden group"
            >
              {/* Decorative circle top */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                <highlight.icon className="w-7 h-7 sm:w-9 sm:h-9 text-secondary-foreground" />
              </div>
              <div className="pt-10 sm:pt-12 text-center">
                <h3 className="font-serif text-lg sm:text-xl text-primary-foreground mb-2 sm:mb-3">
                  {highlight.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-5 sm:p-6 lg:p-8 rounded-xl bg-card border border-border/80 hover:border-secondary/45 hover:shadow-[0_20px_40px_-15px_oklch(0.2_0.04_240_/_0.12)] transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl text-foreground mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
