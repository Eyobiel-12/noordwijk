import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"

const navLinks = [
  { href: "#diensten", label: "Diensten" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#over-ons", label: "Over Ons" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "Meubelstoffering",
  "Lederherstel",
  "Houten meubelen",
  "Klokken reparatie",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 lg:py-20 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 sm:mb-6 focus-visible:outline-offset-4 rounded-md">
              <Logo variant="footer" />
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-4 sm:mb-6">
              Vakmanschap tot in detail. Sinds 1985 de specialist in meubelstoffering en restauratie.
            </p>
            <div className="text-sm text-background/40">
              KVK: 78610818
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base sm:text-lg text-background mb-4 sm:mb-6">Navigatie</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-background/60 hover:text-secondary transition-colors text-sm py-1 inline-block touch-manipulation"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="hidden sm:block">
            <h4 className="font-serif text-base sm:text-lg text-background mb-4 sm:mb-6">Diensten</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/60 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-serif text-base sm:text-lg text-background mb-4 sm:mb-6">Contact</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a 
                  href="tel:+31651355417" 
                  className="flex items-center gap-3 text-background/60 hover:text-secondary transition-colors text-sm py-1 touch-manipulation"
                >
                  <Phone className="w-4 h-4" />
                  0651355417
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@meubelstoffeerderijnoordwijk.nl" 
                  className="flex items-center gap-3 text-background/60 hover:text-secondary transition-colors text-sm py-1 touch-manipulation"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">info@meubelstoffeerderijnoordwijk.nl</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=Jonckersweg+21G+174+Noordwijk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-background/60 hover:text-secondary transition-colors text-sm py-1 touch-manipulation"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Jonckersweg 21G - 174<br />2201 DZ Noordwijk</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 sm:py-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-background/40 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Meubelstoffeerderij Noordwijk. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-5 sm:gap-6 text-xs sm:text-sm">
            <Link href="#" className="text-background/40 hover:text-background/60 transition-colors py-1 touch-manipulation">
              Privacy
            </Link>
            <Link href="#" className="text-background/40 hover:text-background/60 transition-colors py-1 touch-manipulation">
              Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
