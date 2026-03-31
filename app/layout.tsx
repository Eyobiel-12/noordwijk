import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Meubelstoffeerderij Noordwijk | Vakmanschap tot in Detail',
  description: 'Bij Meubelstoffeerderij Noordwijk staan kwaliteit, precisie en persoonlijke service centraal. Klassieke en moderne meubelstoffering, lederherstel en restauratie.',
  keywords: 'meubelstoffering, stoffeerderij, Noordwijk, lederherstel, meubel restauratie, upholstery',
  openGraph: {
    title: 'Meubelstoffeerderij Noordwijk | Vakmanschap tot in Detail',
    description:
      'Klassieke en moderne meubelstoffering, lederherstel en restauratie — sinds 1985 in Noordwijk.',
    locale: 'nl_NL',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/noord.png', type: 'image/png' }],
    apple: '/noord.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
