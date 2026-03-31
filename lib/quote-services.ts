export const QUOTE_SERVICE_VALUES = [
  "meubelstoffering",
  "schuim-veren",
  "lederherstel",
  "houten-meubelen",
  "boot-caravan",
  "klokken-vlechtwerk",
  "anders",
] as const

export type QuoteServiceValue = (typeof QUOTE_SERVICE_VALUES)[number]

const LABELS: Record<QuoteServiceValue, string> = {
  meubelstoffering: "Meubelstoffering",
  "schuim-veren": "Schuim & veren",
  lederherstel: "Lederherstel",
  "houten-meubelen": "Houten meubelen",
  "boot-caravan": "Boot & caravan",
  "klokken-vlechtwerk": "Klokken & vlechtwerk",
  anders: "Anders / weet ik nog niet",
}

export const quoteServiceOptions = QUOTE_SERVICE_VALUES.map((value) => ({
  value,
  label: LABELS[value],
}))

export function quoteServiceLabel(value: string): string {
  return LABELS[value as QuoteServiceValue] ?? value
}
