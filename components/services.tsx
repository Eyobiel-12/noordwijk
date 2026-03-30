import { Armchair, Clock, Hammer, Paintbrush, Sparkles, Ship } from "lucide-react"

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
        {/* Section Header + intro copy */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <p className="text-secondary text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
            Onze Diensten
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 sm:mb-8 text-balance">
            Onze werkzaamheden
          </h2>
          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground mb-4 sm:mb-5 text-balance">
            Geef uw meubels een tweede leven
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-5 sm:mb-6">
            Met oog voor detail en liefde voor het vak herstellen en vernieuwen wij uw meubels volledig naar wens. Van
            klassieke fauteuil tot modern bankstel — elk project is maatwerk.
          </p>
          <p className="text-secondary font-medium text-sm sm:text-base tracking-wide">
            Omdat uw meubels het waard zijn
          </p>
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
