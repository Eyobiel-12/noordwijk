/** Vaste lijn (Noordwijk) — bellen */
export const PHONE_DISPLAY = "071 20 32 521"
export const PHONE_E164 = "+31712032521"

/** Mobiel — alleen WhatsApp (wa.me) */
export const WHATSAPP_DISPLAY = "06 51 35 54 17"
export const WHATSAPP_INTERNATIONAL = "31651355417"

export const telHref = `tel:${PHONE_E164}`

export function whatsAppUrl(prefill?: string): string {
  const text =
    prefill ??
    "Hallo, ik heb een vraag over meubelstoffering."
  return `https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${encodeURIComponent(text)}`
}
