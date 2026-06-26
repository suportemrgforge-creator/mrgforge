import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MRG Forge — Desenvolvimento Digital',
  description:
    'Criamos experiências digitais que combinam design de alto padrão com engenharia de excelência. Built to Last.',
  keywords: [
    'desenvolvimento web',
    'design digital',
    'aplicativos',
    'e-commerce',
    'MRG Forge',
    'mrgforge',
  ],
  authors: [{ name: 'MRG Forge', url: 'https://mrgforge.com' }],
  openGraph: {
    title: 'MRG Forge — Desenvolvimento Digital',
    description: 'Built to Last. Criamos experiências digitais que resistem ao tempo.',
    url: 'https://mrgforge.com',
    siteName: 'MRG Forge',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MRG Forge — Desenvolvimento Digital',
    description: 'Built to Last. Criamos experiências digitais que resistem ao tempo.',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://mrgforge.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-forge-black text-white font-inter antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
