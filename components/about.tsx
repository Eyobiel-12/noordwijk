import Image from "next/image"

const values = [
  {
    title: "Kwaliteit",
    description: "Wij werken uitsluitend met de beste materialen en technieken voor een duurzaam resultaat dat generaties meegaat.",
  },
  {
    title: "Vakmanschap",
    description: "Traditioneel ambacht gecombineerd met moderne materialen en technieken voor het beste resultaat.",
  },
  {
    title: "Persoonlijk",
    description: "Met oog voor detail gaan we te werk op maat aan de hand van uw wensen. Zo is elke opdracht uniek.",
  },
]

export function About() {
  return (
    <section id="over-ons" className="py-16 sm:py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden relative shadow-[0_28px_60px_-15px_oklch(0.25_0.04_240_/_0.22)] ring-1 ring-border/70">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mo71tsWLcTAtPUcSDlVzi2EMDS3i5n.png"
                alt="Meubelstoffeerderij Noordwijk - Ons bedrijf"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8 mt-8 sm:mt-0">
            <p className="text-secondary text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
              Over Ons
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6 text-balance">
              Een traditie van vakmanschap
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Sinds 1985 is Meubelstoffeerderij Noordwijk de specialist op het gebied van stoffen en interieur 
              verzorging. Met een grote collectie meubelstoffen, leder en skai-leer zorgen wij ervoor dat uw 
              meubels weer als nieuw worden.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
              Herstofferen is niet alleen een stijlvolle keuze, maar ook een duurzame investering. 
              In plaats van vervangen, geven wij uw vertrouwde meubel een nieuw leven — volledig 
              afgestemd op uw interieur en comfortwensen. Zodat u weer kan genieten van uw lievelingsmeubel.
            </p>

            {/* Values */}
            <div className="space-y-4 sm:space-y-6">
              {values.map((value, index) => (
                <div key={value.title} className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="font-serif text-secondary font-semibold text-sm sm:text-base">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
