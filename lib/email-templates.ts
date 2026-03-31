import { getPublicSiteUrl } from "@/lib/site-url"
import { PHONE_DISPLAY, telHref } from "@/lib/contact-constants"

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function nl2br(s: string): string {
  return escapeHtml(s).replace(/\r\n/g, "\n").replace(/\n/g, "<br />")
}

/** Primaire teal (bij benadering uit design tokens) */
const BRAND_HEADER = "#2a4a55"
const BRAND_ACCENT = "#b8956a"
const BRAND_MUTED = "#5c6b73"
const BRAND_BORDER = "#e8e4df"

function emailShell(opts: {
  title: string
  badge: string
  rows: { label: string; value: string; multiline?: boolean }[]
  footerNote: string
}): { html: string; text: string } {
  const site = getPublicSiteUrl()
  const logoUrl = `${site}/noord.png`

  const textBody = [
    opts.title,
    "",
    ...opts.rows.map((r) => `${r.label}: ${r.value}`),
    "",
    opts.footerNote,
    "",
    site,
  ].join("\n")

  const rowHtml = opts.rows
    .map((r) => {
      const content = r.multiline
        ? `<div style="margin:0;padding:0;font-size:15px;line-height:1.55;color:#1a1f23;white-space:pre-wrap;">${nl2br(r.value)}</div>`
        : `<p style="margin:0;padding:0;font-size:15px;line-height:1.5;color:#1a1f23;">${escapeHtml(r.value)}</p>`
      return `
<tr>
<td style="padding:14px 0;border-bottom:1px solid ${BRAND_BORDER};">
<p style="margin:0 0 6px 0;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:${BRAND_MUTED};font-family:system-ui,-apple-system,sans-serif;">${escapeHtml(r.label)}</p>
${content}
</td>
</tr>`
    })
    .join("")

  const html = `<!DOCTYPE html>
<html lang="nl">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width"/></head>
<body style="margin:0;padding:0;background:#f4f2ef;font-family:Georgia,'Times New Roman',serif;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f2ef;padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 24px rgba(42,74,85,0.08);">
<tr>
<td style="background:${BRAND_HEADER};padding:28px 28px 22px 28px;text-align:center;">
<img src="${escapeHtml(logoUrl)}" alt="Meubelstoffeerderij Noordwijk" width="72" height="72" style="display:block;margin:0 auto 16px auto;border-radius:8px;background:#fff;padding:6px;"/>
<p style="margin:0;font-size:13px;letter-spacing:0.2em;text-transform:uppercase;color:${BRAND_ACCENT};font-family:system-ui,-apple-system,sans-serif;">${escapeHtml(opts.badge)}</p>
<h1 style="margin:10px 0 0 0;font-size:22px;font-weight:600;color:#f7f5f2;line-height:1.3;">${escapeHtml(opts.title)}</h1>
</td>
</tr>
<tr><td style="padding:8px 28px 4px 28px;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0">${rowHtml}</table>
</td></tr>
<tr>
<td style="padding:24px 28px 28px 28px;border-top:1px solid ${BRAND_BORDER};">
<p style="margin:0 0 12px 0;font-size:13px;line-height:1.5;color:${BRAND_MUTED};font-family:system-ui,-apple-system,sans-serif;">${escapeHtml(opts.footerNote)}</p>
<p style="margin:0;font-size:13px;font-family:system-ui,-apple-system,sans-serif;">
<a href="${escapeHtml(telHref)}" style="color:${BRAND_HEADER};text-decoration:none;font-weight:600;">${escapeHtml(PHONE_DISPLAY)}</a>
<span style="color:${BRAND_BORDER};"> &middot; </span>
<a href="${escapeHtml(site)}" style="color:${BRAND_HEADER};text-decoration:underline;">Website</a>
</p>
</td>
</tr>
</table>
<p style="margin:16px 0 0 0;font-size:11px;color:#9aa5ab;text-align:center;font-family:system-ui,-apple-system,sans-serif;">Automatisch bericht van het contactformulier op ${escapeHtml(site.replace(/^https?:\/\//, ""))}</p>
</td></tr>
</table>
</body>
</html>`

  return { html, text: textBody }
}

export function buildContactEmailContent(input: {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}): { html: string; text: string } {
  return emailShell({
    title: "Nieuw contactbericht",
    badge: "Website",
    rows: [
      { label: "Naam", value: input.name },
      { label: "E-mail", value: input.email },
      { label: "Telefoon", value: input.phone || "—" },
      { label: "Onderwerp", value: input.subject || "—" },
      { label: "Bericht", value: input.message, multiline: true },
    ],
    footerNote:
      "Beantwoord dit bericht via Reply — het antwoord gaat direct naar de klant.",
  })
}

export function buildQuoteEmailContent(input: {
  serviceLabel: string
  name: string
  phone: string
  email: string
  details: string
}): { html: string; text: string } {
  return emailShell({
    title: "Nieuwe offerte-aanvraag",
    badge: "Offerte",
    rows: [
      { label: "Soort werk", value: input.serviceLabel },
      { label: "Naam", value: input.name },
      { label: "E-mail", value: input.email },
      { label: "Telefoon", value: input.phone || "—" },
      {
        label: "Toelichting",
        value: input.details || "—",
        multiline: !!input.details,
      },
    ],
    footerNote:
      "Beantwoord via Reply om direct contact op te nemen met de aanvrager.",
  })
}
