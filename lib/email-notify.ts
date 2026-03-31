import { Resend } from "resend"

export function getResendClient():
  | { ok: true; resend: Resend; from: string; to: string }
  | { ok: false; message: string } {
  const key = process.env.RESEND_API_KEY
  if (!key?.trim()) {
    return { ok: false, message: "RESEND_API_KEY ontbreekt" }
  }
  const to =
    process.env.RESEND_TO_EMAIL?.trim() ||
    "info@meubelstoffeerderijnoordwijk.nl"
  // Afzender moet op het in Resend geverifieerde domein staan (noordwijkmeubelstoffeerderij.nl).
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "Meubelstoffeerderij Noordwijk <noreply@noordwijkmeubelstoffeerderij.nl>"
  return { ok: true, resend: new Resend(key), from, to }
}
