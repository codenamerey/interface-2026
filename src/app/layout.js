import { Montserrat, Inter } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'INTERFACE 2026',
  description: 'Bridging Core Computer Engineering Principles with Emerging Industry Practice.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  )
}