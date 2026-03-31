import { NextResponse } from "next/server"
import { z } from "zod"
import { buildContactEmailContent } from "@/lib/email-templates"
import { getResendClient } from "@/lib/email-notify"

const bodySchema = z.object({
  name: z.string().trim().min(1).max(200),
  phone: z.string().trim().max(50).optional().default(""),
  email: z.string().trim().email().max(320),
  subject: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().min(1).max(10_000),
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

  const { name, phone, email, subject, message } = parsed.data
  const cfg = getResendClient()
  if (!cfg.ok) {
    console.error("[contact]", cfg.message)
    return NextResponse.json(
      { error: "E-mail is tijdelijk niet beschikbaar" },
      { status: 500 },
    )
  }

  const subjectLine = subject
    ? `Contact: ${subject}`
    : `Contactformulier — ${name}`

  const { html, text } = buildContactEmailContent({
    name,
    phone,
    email,
    subject,
    message,
  })

  const { data, error } = await cfg.resend.emails.send({
    from: cfg.from,
    to: [cfg.to],
    replyTo: email,
    subject: subjectLine,
    text,
    html,
  })

  if (error) {
    console.error("[contact] Resend:", error)
    return NextResponse.json({ error: "Verzenden mislukt" }, { status: 502 })
  }

  return NextResponse.json({ ok: true, id: data?.id })
}
