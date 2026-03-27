"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "31616719266"
  const message = "Hallo, ik heb een vraag over meubelstoffering."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-lg hover:bg-[#20BA5C] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
      aria-label="Neem contact op via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium text-sm hidden sm:inline">WhatsApp</span>
    </a>
  )
}
