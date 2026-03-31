/** Canoniek live domein (fallback als env / Vercel niet gezet is). */
export const DEFAULT_PUBLIC_SITE_URL =
  "https://www.noordwijkmeubelstoffeerderij.nl"

/**
 * Publieke basis-URL voor absolute links (o.a. logo in e-mails, Open Graph).
 * Optioneel: NEXT_PUBLIC_SITE_URL op Vercel voor expliciete canonical URL.
 */
export function getPublicSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (fromEnv) return fromEnv.replace(/\/$/, "")

  const vercel = process.env.VERCEL_URL?.trim()
  // Preview / niet-productie: deployment-URL zodat logo in mail op previews werkt
  if (vercel && process.env.VERCEL_ENV !== "production") {
    const host = vercel.replace(/^https?:\/\//, "")
    return `https://${host}`
  }

  // Productie (of lokaal zonder env): canoniek domein — logo en links in e-mails kloppen
  return DEFAULT_PUBLIC_SITE_URL
}
