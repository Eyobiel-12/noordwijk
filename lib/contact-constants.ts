/** Zelfde mobiele nummer voor bellen, WhatsApp en op de site. */
export const PHONE_DISPLAY = "06 51 35 54 17"
/** Internationaal formaat voor tel:- en wa.me-links */
export const PHONE_E164 = "+31651355417"
/** Alleen cijfers voor WhatsApp (zonder +) */
export const WHATSAPP_INTERNATIONAL = "31651355417"

export const telHref = `tel:${PHONE_E164}`

export function whatsAppUrl(prefill?: string): string {
  const text =
    prefill ??
    "Hallo, ik heb een vraag over meubelstoffering."
  return `https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${encodeURIComponent(text)}`
}
