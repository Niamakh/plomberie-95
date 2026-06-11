"use client"

import Link from "next/link"
import { Droplets } from "lucide-react"

const FOOTER_LINKS = [
  {
    heading: "Blog",
    links: [
      { label: "Articles", href: "/articles" },
      { label: "Tutos vidéo", href: "/articles" },
      { label: "Guides achat", href: "/articles" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Thématiques",
    links: [
      { label: "Débouchage", href: "/articles/deboucher-canalisation-karcher" },
      { label: "Chauffe-eau", href: "/articles/vider-chauffe-eau-tutoriel" },
      { label: "Robinetterie", href: "/articles/wc-entretien-reparation" },
      { label: "Fuites", href: "/articles/fuites-detecter-reparer" },
    ],
  },
  {
    heading: "À propos",
    links: [
      { label: "À propos", href: "#" },
      { label: "Mentions légales", href: "#" },
      { label: "Contact", href: "#contact" },
      { label: "Sitemap", href: "/sitemap.xml" },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      className="mt-8 px-6 md:px-10 py-14"
      style={{
        background: "var(--color-bg-soft)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-sky) 0%, var(--color-sky-dark) 100%)",
                boxShadow: "0 4px 12px oklch(68% 0.14 235 / 0.25)",
              }}
            >
              <Droplets size={16} color="white" aria-hidden="true" />
            </span>
            <span
              className="text-base font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text-primary)",
              }}
            >
              Plomb<span style={{ color: "var(--color-sky)" }}>Expert</span>
            </span>
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            La référence plomberie DIY pour les particuliers français. Guides testés,
            conseils pratiques, zéro jargon.
          </p>
        </div>

        {FOOTER_LINKS.map((col) => (
          <div key={col.heading} className="flex flex-col gap-3">
            <span
              className="text-xs uppercase tracking-widest font-bold"
              style={{ color: "var(--color-text-primary)" }}
            >
              {col.heading}
            </span>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-150"
                      style={{ color: "var(--color-text-muted)" }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--color-sky-dark)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--color-text-muted)")
                      }
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-150"
                      style={{ color: "var(--color-text-muted)" }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--color-sky-dark)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--color-text-muted)")
                      }
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="max-w-7xl mx-auto mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
        style={{ borderTop: "1px solid var(--color-border)" }}
      >
        <p className="text-xs" style={{ color: "var(--color-text-soft)" }}>
          © {new Date().getFullYear()} PlombExpert — Tous droits réservés
        </p>
        <p className="text-xs" style={{ color: "var(--color-text-soft)" }}>
          Fait avec soin pour les bricoleurs français
        </p>
      </div>
    </footer>
  )
}
