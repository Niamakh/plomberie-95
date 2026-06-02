"use client"

import Link from "next/link"
import { ArrowUpRight, Clock, Calendar } from "lucide-react"

const LEVEL_STYLE: Record<string, { bg: string; color: string }> = {
  Débutant: {
    bg: "oklch(94% 0.10 145 / 0.35)",
    color: "oklch(42% 0.15 145)",
  },
  Intermédiaire: {
    bg: "oklch(94% 0.10 65 / 0.35)",
    color: "oklch(46% 0.14 60)",
  },
  Avancé: {
    bg: "oklch(92% 0.10 20 / 0.35)",
    color: "oklch(44% 0.16 20)",
  },
}

export interface ArticleCardProps {
  title: string
  excerpt: string
  category: string
  categoryEmoji: string
  readTime: number
  date: string
  format: string
  level: "Débutant" | "Intermédiaire" | "Avancé"
  slug: string
  featured?: boolean
  isNew?: boolean
  isHero?: boolean
}

export default function ArticleCard({
  title,
  excerpt,
  category,
  categoryEmoji,
  readTime,
  date,
  format,
  level,
  slug,
  featured = false,
  isNew = false,
  isHero = false,
}: ArticleCardProps) {
  const cardBg = featured
    ? "linear-gradient(145deg, var(--color-sky) 0%, var(--color-sky-dark) 100%)"
    : "white"
  const textColor = featured ? "white" : "var(--color-text-primary)"
  const mutedColor = featured ? "oklch(96% 0.02 230 / 0.80)" : "var(--color-text-muted)"
  const borderColor = featured ? "transparent" : "var(--color-border)"
  const levelStyle = LEVEL_STYLE[level]

  return (
    <Link
      href={`/articles/${slug}`}
      className="group relative rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col"
      style={{
        background: cardBg,
        border: `1px solid ${borderColor}`,
        boxShadow: featured
          ? "0 12px 36px oklch(68% 0.14 235 / 0.22)"
          : "0 1px 4px oklch(50% 0.02 240 / 0.06)",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = "translateY(-4px)"
        el.style.boxShadow = featured
          ? "0 20px 50px oklch(68% 0.14 235 / 0.32)"
          : "0 12px 32px oklch(50% 0.02 240 / 0.10)"
        if (!featured) el.style.borderColor = "oklch(68% 0.14 235 / 0.35)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = "translateY(0)"
        el.style.boxShadow = featured
          ? "0 12px 36px oklch(68% 0.14 235 / 0.22)"
          : "0 1px 4px oklch(50% 0.02 240 / 0.06)"
        if (!featured) el.style.borderColor = borderColor
      }}
    >
      {/* Barre colorée en haut de la hero card */}
      {isHero && !featured && (
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: "linear-gradient(to right, var(--color-sky), var(--color-sky-light))",
          }}
        />
      )}

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Header : catégorie + badges */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span
            className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
            style={{ color: featured ? "oklch(95% 0.05 225)" : "var(--color-sky-dark)" }}
          >
            <span aria-hidden="true">{categoryEmoji}</span>
            {category}
          </span>

          <div className="flex items-center gap-1.5">
            {isNew && (
              <span
                className="text-[0.65rem] px-2 py-0.5 rounded-full font-bold"
                style={{
                  background: featured ? "oklch(100% 0 0 / 0.2)" : "var(--color-sky-soft)",
                  color: featured ? "white" : "var(--color-sky-dark)",
                }}
              >
                Nouveau
              </span>
            )}
            <span
              className="text-[0.65rem] px-2 py-0.5 rounded-full font-bold"
              style={
                featured
                  ? { background: "oklch(100% 0 0 / 0.18)", color: "white" }
                  : { background: levelStyle.bg, color: levelStyle.color }
              }
            >
              {level}
            </span>
          </div>
        </div>

        {/* Titre */}
        <h3
          className="font-bold leading-snug tracking-tight"
          style={{
            fontFamily: "var(--font-display)",
            color: textColor,
            fontSize: isHero ? "1.2rem" : "1rem",
          }}
        >
          {title}
        </h3>

        {/* Extrait — visible seulement sur les grandes cards */}
        {(isHero || featured) && (
          <p
            className="text-sm leading-relaxed line-clamp-3"
            style={{ color: mutedColor }}
          >
            {excerpt}
          </p>
        )}

        {/* Format tag */}
        <span
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: mutedColor }}
        >
          {format}
        </span>
      </div>

      {/* Footer : métadonnées + flèche */}
      <div
        className="px-6 pb-5 flex items-center justify-between gap-4"
        style={{
          borderTop: `1px solid ${featured ? "oklch(100% 0 0 / 0.15)" : "var(--color-border-soft)"}`,
          paddingTop: "1rem",
        }}
      >
        <div className="flex items-center gap-3 text-xs" style={{ color: mutedColor }}>
          <span className="flex items-center gap-1">
            <Clock size={12} aria-hidden="true" />
            {readTime} min
          </span>
          <span
            aria-hidden="true"
            style={{ color: featured ? "oklch(100% 0 0 / 0.3)" : "var(--color-border)" }}
          >
            ·
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={12} aria-hidden="true" />
            {date}
          </span>
        </div>

        <span
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110 flex-shrink-0"
          style={{
            background: featured ? "oklch(100% 0 0 / 0.2)" : "var(--color-sky-soft)",
            color: featured ? "white" : "var(--color-sky-dark)",
          }}
          aria-label="Lire l'article"
        >
          <ArrowUpRight size={15} aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
