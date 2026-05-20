import './globals.css'
import interfaceLogo from '@/assets/interface-logo.png'

export const metadata = {
  title: 'INTERFACE 2026',
  description: 'Bridging Core Computer Engineering Principles with Emerging Industry Practice.',
  icons: {
    icon: interfaceLogo.src,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Montserrat:wght@600;700;800&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body>{children}</body>
    </html>
  )
}
