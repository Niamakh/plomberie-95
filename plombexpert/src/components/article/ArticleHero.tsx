import { Clock, Calendar, User, ChevronRight } from "lucide-react"

interface ArticleHeroProps {
  category: string
  categoryEmoji: string
  title: string
  excerpt: string
  readTime: number
  date: string
  level: "Débutant" | "Intermédiaire" | "Avancé"
  author: string
}

const LEVEL_STYLE = {
  Débutant: { bg: "oklch(94% 0.10 145 / 0.35)", color: "oklch(38% 0.15 145)" },
  Intermédiaire: { bg: "oklch(94% 0.10 65 / 0.35)", color: "oklch(42% 0.14 60)" },
  Avancé: { bg: "oklch(92% 0.10 20 / 0.35)", color: "oklch(40% 0.16 20)" },
}

export default function ArticleHero({
  category,
  categoryEmoji,
  title,
  excerpt,
  readTime,
  date,
  level,
  author,
}: ArticleHeroProps) {
  const lvl = LEVEL_STYLE[level]

  return (
    <div
      className="relative overflow-hidden mb-10"
      style={{
        background:
          "linear-gradient(180deg, var(--color-bg-soft) 0%, var(--color-bg-base) 100%)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {/* Halo décoratif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse at 70% 20%, oklch(68% 0.14 235 / 0.12) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-12 relative z-10">
        {/* Fil d'Ariane */}
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-xs mb-6" style={{ color: "var(--color-text-muted)" }}>
          <a href="/" style={{ color: "var(--color-sky-dark)" }} className="hover:underline">
            Accueil
          </a>
          <ChevronRight size={12} aria-hidden="true" />
          <a href="/articles" style={{ color: "var(--color-sky-dark)" }} className="hover:underline">
            Articles
          </a>
          <ChevronRight size={12} aria-hidden="true" />
          <span>{category}</span>
        </nav>

        {/* Badges */}
        <div className="flex items-center gap-2 mb-5 flex-wrap">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }}
          >
            <span aria-hidden="true">{categoryEmoji}</span>
            {category}
          </span>
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold"
            style={{ background: lvl.bg, color: lvl.color }}
          >
            {level}
          </span>
        </div>

        {/* Titre */}
        <h1
          className="font-extrabold leading-tight tracking-tight mb-5"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            color: "var(--color-text-primary)",
            maxWidth: "860px",
          }}
        >
          {title}
        </h1>

        {/* Extrait */}
        <p
          className="text-base md:text-lg leading-relaxed mb-8"
          style={{ color: "var(--color-text-muted)", maxWidth: "720px" }}
        >
          {excerpt}
        </p>

        {/* Métadonnées */}
        <div
          className="flex flex-wrap items-center gap-5 pt-5 text-sm"
          style={{
            borderTop: "1px solid var(--color-border)",
            color: "var(--color-text-muted)",
          }}
        >
          <span className="flex items-center gap-1.5 font-medium">
            <User size={15} aria-hidden="true" />
            {author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={15} aria-hidden="true" />
            {date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={15} aria-hidden="true" />
            {readTime} min de lecture
          </span>
        </div>
      </div>
    </div>
  )
}
