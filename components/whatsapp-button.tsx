"use client"

import { MessageCircle } from "lucide-react"
import { WHATSAPP_DISPLAY, whatsAppUrl } from "@/lib/contact-constants"

export function WhatsAppButton() {
  const href = whatsAppUrl(
    "Hallo, ik heb een vraag over meubelstoffering.",
  )

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-lg hover:bg-[#20BA5C] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
      aria-label={`WhatsApp ${WHATSAPP_DISPLAY}`}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium text-sm hidden sm:inline">WhatsApp</span>
    </a>
  )
}
