"use client"

import { useState } from "react"
import Link from "next/link"
import { Droplets, Search, Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Articles", href: "/articles" },
  { label: "Débouchage", href: "/articles/deboucher-canalisation-karcher" },
  { label: "Chauffe-eau", href: "/articles/vider-chauffe-eau-tutoriel" },
  { label: "Fuites", href: "/articles/fuites-detecter-reparer" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-xl"
      style={{
        background: "oklch(99% 0.005 240 / 0.85)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
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
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium transition-colors duration-150"
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
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            aria-label="Rechercher"
            className="hidden md:flex items-center justify-center w-9 h-9 rounded-full transition-colors"
            style={{
              background: "var(--color-bg-soft)",
              color: "var(--color-text-muted)",
            }}
          >
            <Search size={16} aria-hidden="true" />
          </button>

          <Link
            href="/articles"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150 hover:-translate-y-0.5"
            style={{
              fontFamily: "var(--font-display)",
              background: "var(--color-sky)",
              color: "white",
              boxShadow: "0 4px 14px oklch(68% 0.14 235 / 0.3)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--color-sky-dark)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--color-sky)")
            }
          >
            Voir tous les articles
          </Link>

          <button
            className="md:hidden p-2"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "var(--color-text-primary)" }}
          >
            {mobileOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ borderTop: "1px solid var(--color-border-soft)" }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium"
              style={{ color: "var(--color-text-primary)" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/articles"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold mt-2"
            style={{
              fontFamily: "var(--font-display)",
              background: "var(--color-sky)",
              color: "white",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Voir tous les articles
          </Link>
        </div>
      )}
    </header>
  )
}
