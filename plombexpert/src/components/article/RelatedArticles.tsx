"use client"

import { ArrowUpRight, Clock } from "lucide-react"

const RELATED = [
  {
    title: "Joint fibre ou caoutchouc : lequel choisir ?",
    category: "Joints",
    emoji: "🔗",
    readTime: 5,
    slug: "joint-fibre-ou-caoutchouc",
  },
  {
    title: "Les 20 outils de plomberie indispensables",
    category: "Matériel",
    emoji: "📐",
    readTime: 10,
    slug: "outils-plomberie-indispensables",
  },
  {
    title: "Comment vider un chauffe-eau : tuto pas à pas",
    category: "Chauffe-eau",
    emoji: "🔥",
    readTime: 9,
    slug: "vider-chauffe-eau-tutoriel",
  },
]

export default function RelatedArticles() {
  return (
    <section
      className="px-6 md:px-10 py-14"
      style={{
        background: "var(--color-bg-soft)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-extrabold tracking-tight mb-8"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            color: "var(--color-text-primary)",
          }}
        >
          Articles dans la même thématique
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {RELATED.map((article) => (
            <a
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex flex-col justify-between rounded-2xl p-6 transition-all duration-200"
              style={{
                background: "white",
                border: "1px solid var(--color-border)",
                boxShadow: "0 1px 4px oklch(50% 0.02 240 / 0.05)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = "translateY(-3px)"
                el.style.borderColor = "oklch(68% 0.14 235 / 0.4)"
                el.style.boxShadow = "0 10px 28px oklch(50% 0.02 240 / 0.10)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = "translateY(0)"
                el.style.borderColor = "var(--color-border)"
                el.style.boxShadow = "0 1px 4px oklch(50% 0.02 240 / 0.05)"
              }}
            >
              <div className="flex flex-col gap-3">
                <span
                  className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                  style={{ color: "var(--color-sky-dark)" }}
                >
                  <span aria-hidden="true">{article.emoji}</span>
                  {article.category}
                </span>
                <h3
                  className="font-bold text-base leading-snug"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                >
                  {article.title}
                </h3>
              </div>

              <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: "1px solid var(--color-border-soft)" }}>
                <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--color-text-muted)" }}>
                  <Clock size={12} aria-hidden="true" />
                  {article.readTime} min
                </span>
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }}
                  aria-hidden="true"
                >
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
