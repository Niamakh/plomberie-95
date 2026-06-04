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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.plombier-95-service.fr"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "PlombExpert — La plomberie expliquée simplement",
    template: "%s | PlombExpert",
  },
  description:
    "Guides pratiques, tutos DIY et conseils pour réparer, entretenir et comprendre votre plomberie. Articles clairs pour particuliers.",
  keywords: [
    "plomberie", "débouchage", "chauffe-eau", "fuite d'eau", "robinetterie",
    "radiateur", "WC", "siphon", "joint plomberie", "tuto plomberie",
  ],
  authors: [{ name: "Équipe PlombExpert" }],
  creator: "PlombExpert",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "PlombExpert",
    title: "PlombExpert — La plomberie expliquée simplement",
    description:
      "Guides pratiques, tutos DIY et conseils pour réparer, entretenir et comprendre votre plomberie.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlombExpert — La plomberie expliquée simplement",
    description:
      "Guides pratiques, tutos DIY et conseils pour réparer, entretenir et comprendre votre plomberie.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
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
