"use client"

import { useState, useEffect } from "react"
import { BookOpen } from "lucide-react"

interface TocItem {
  id: string
  label: string
}

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: "-20% 0% -70% 0%" }
    )

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <div className="lg:sticky lg:top-24">
      <div
        className="rounded-2xl p-5"
        style={{
          background: "var(--color-bg-soft)",
          border: "1px solid var(--color-border)",
        }}
      >
        <div
          className="flex items-center gap-2 mb-4 text-sm font-bold uppercase tracking-wider"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
        >
          <BookOpen size={15} aria-hidden="true" />
          Sommaire
        </div>
        <nav aria-label="Table des matières">
          <ol className="flex flex-col gap-1">
            {items.map((item, idx) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex items-start gap-2.5 py-1.5 px-2 rounded-lg text-sm transition-all duration-150"
                    style={{
                      background: isActive ? "var(--color-sky-soft)" : "transparent",
                      color: isActive ? "var(--color-sky-dark)" : "var(--color-text-muted)",
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    <span
                      className="flex-shrink-0 text-xs font-bold mt-0.5 w-5 text-right"
                      style={{ color: isActive ? "var(--color-sky)" : "var(--color-text-soft)" }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
    </div>
  )
}
