"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { PHONE_DISPLAY, telHref, whatsAppUrl } from "@/lib/contact-constants"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#diensten", label: "Diensten" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#over-ons", label: "Over Ons" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-2 sm:py-3"
          : "bg-transparent py-4 sm:py-6"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group shrink-0 focus-visible:outline-offset-4 rounded-md">
            <Logo variant={isScrolled ? "header-solid" : "header-hero"} priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm tracking-wide uppercase transition-colors hover:text-secondary underline-offset-4 hover:underline",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a href={telHref}>
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "gap-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
                  !isScrolled && "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-3 -mr-2 transition-colors touch-manipulation",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground text-base tracking-wide uppercase py-4 border-b border-border touch-manipulation active:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a href={telHref}>
              <Button className="w-full gap-2 bg-primary text-primary-foreground h-12 text-base">
                <Phone className="h-5 w-5" />
                {PHONE_DISPLAY}
              </Button>
            </a>
            <a
              href={whatsAppUrl(
                "Hallo, ik heb een vraag over meubelstoffering.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white h-12 text-base">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
