"use client"

import { useState } from "react"
import { CLUSTERS } from "@/lib/articles"

export default function ClusterStrip() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section
      className="px-6 md:px-10 mb-10 max-w-7xl mx-auto"
      aria-label="Filtres par thématique"
    >
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-2.5 pb-1" style={{ width: "max-content" }}>
          <button
            onClick={() => setActive(null)}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 whitespace-nowrap"
            style={
              active === null
                ? {
                    background: "var(--color-sky)",
                    border: "1px solid var(--color-sky)",
                    color: "white",
                    boxShadow: "0 4px 12px oklch(68% 0.14 235 / 0.25)",
                  }
                : {
                    background: "white",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-muted)",
                  }
            }
          >
            Tous les articles
          </button>

          {CLUSTERS.map((cluster) => {
            const isActive = active === cluster.label
            return (
              <button
                key={cluster.label}
                onClick={() => setActive(isActive ? null : cluster.label)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-150 whitespace-nowrap"
                style={
                  isActive
                    ? {
                        background: "var(--color-sky)",
                        border: "1px solid var(--color-sky)",
                        color: "white",
                        boxShadow: "0 4px 12px oklch(68% 0.14 235 / 0.25)",
                      }
                    : {
                        background: "white",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-text-muted)",
                      }
                }
              >
                <span aria-hidden="true">{cluster.emoji}</span>
                {cluster.label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
