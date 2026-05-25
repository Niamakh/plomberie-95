import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Manrope } from "next/font/google"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "PlombExpert — La plomberie expliquée simplement",
  description:
    "Guides pratiques, tutos DIY et conseils pour réparer, entretenir et comprendre votre plomberie. 80+ articles clairs pour particuliers.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${jakarta.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  )
}
