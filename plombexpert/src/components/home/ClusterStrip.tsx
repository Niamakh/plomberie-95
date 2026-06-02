"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CATEGORIES } from "@/lib/articles"

const activeStyle = {
  background: "var(--color-sky)",
  border: "1px solid var(--color-sky)",
  color: "white",
  boxShadow: "0 4px 12px oklch(68% 0.14 235 / 0.25)",
}

const inactiveStyle = {
  background: "white",
  border: "1px solid var(--color-border)",
  color: "var(--color-text-muted)",
}

const baseClass =
  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 whitespace-nowrap"

export default function ClusterStrip() {
  const [active, setActive] = useState<string | null>(null)
  const router = useRouter()

  return (
    <section className="px-6 md:px-10 mb-10 max-w-7xl mx-auto" aria-label="Filtres par thématique">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-2.5 pb-1" style={{ width: "max-content" }}>

          {/* Bouton "Tous" */}
          <button
            onClick={() => setActive(null)}
            className={baseClass}
            style={active === null ? activeStyle : inactiveStyle}
          >
            Tous les articles
          </button>

          {CATEGORIES.map((cat) => {
            const isActive = active === cat.label

            /* Catégorie avec article → Link de navigation */
            if (cat.slug) {
              return (
                <Link
                  key={cat.label}
                  href={`/articles/${cat.slug}`}
                  className={baseClass}
                  style={isActive ? activeStyle : inactiveStyle}
                  onClick={() => setActive(cat.label)}
                >
                  <span aria-hidden="true">{cat.emoji}</span>
                  {cat.label}
                </Link>
              )
            }

            /* Catégorie sans article → bouton filtre (bientôt disponible) */
            return (
              <button
                key={cat.label}
                onClick={() => setActive(isActive ? null : cat.label)}
                className={baseClass}
                style={isActive ? activeStyle : inactiveStyle}
                title="Article bientôt disponible"
              >
                <span aria-hidden="true">{cat.emoji}</span>
                {cat.label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
