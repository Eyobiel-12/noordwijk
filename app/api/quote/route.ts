import { NextResponse } from "next/server"
import { z } from "zod"
import { buildQuoteEmailContent } from "@/lib/email-templates"
import { getResendClient } from "@/lib/email-notify"
import { QUOTE_SERVICE_VALUES, quoteServiceLabel } from "@/lib/quote-services"

const bodySchema = z.object({
  serviceType: z.enum(QUOTE_SERVICE_VALUES),
  name: z.string().trim().min(1).max(200),
  phone: z.string().trim().max(50).optional().default(""),
  email: z.string().trim().email().max(320),
  details: z.string().trim().max(5000).optional().default(""),
})

export async function POST(request: Request) {
  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag" }, { status: 400 })
  }

  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: "Controleer de invoer" }, { status: 400 })
  }

  const { serviceType, name, phone, email, details } = parsed.data
  const cfg = getResendClient()
  if (!cfg.ok) {
    console.error("[quote]", cfg.message)
    return NextResponse.json(
      { error: "E-mail is tijdelijk niet beschikbaar" },
      { status: 500 },
    )
  }

  const serviceLabel = quoteServiceLabel(serviceType)
  const { html, text } = buildQuoteEmailContent({
    serviceLabel,
    name,
    phone,
    email,
    details,
  })

  const { data, error } = await cfg.resend.emails.send({
    from: cfg.from,
    to: [cfg.to],
    replyTo: email,
    subject: `Offerte-aanvraag — ${serviceLabel} (${name})`,
    text,
    html,
  })

  if (error) {
    console.error("[quote] Resend:", error)
    return NextResponse.json({ error: "Verzenden mislukt" }, { status: 502 })
  }

  return NextResponse.json({ ok: true, id: data?.id })
}
