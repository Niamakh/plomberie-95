import { ArrowUpRight } from "lucide-react"

export interface ArticleCardProps {
  title: string
  cluster: string
  clusterEmoji: string
  volume: number
  kd: number
  format: string
  featured?: boolean
  quickWin?: boolean
  monetisation?: string
  isHero?: boolean
}

export default function ArticleCard({
  title,
  cluster,
  clusterEmoji,
  volume,
  kd,
  format,
  featured = false,
  quickWin = false,
  isHero = false,
}: ArticleCardProps) {
  const kdIsQuickWin = quickWin || kd <= 5

  const cardBg = featured
    ? "linear-gradient(135deg, var(--color-sky) 0%, var(--color-sky-dark) 100%)"
    : "white"
  const textColor = featured ? "white" : "var(--color-text-primary)"
  const subTextColor = featured ? "oklch(95% 0.02 230 / 0.85)" : "var(--color-text-muted)"
  const borderColor = featured ? "transparent" : "var(--color-border)"

  return (
    <article
      className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-300 cursor-pointer h-full flex flex-col justify-between"
      style={{
        background: cardBg,
        border: `1px solid ${borderColor}`,
        boxShadow: featured
          ? "0 12px 36px oklch(68% 0.14 235 / 0.25)"
          : "0 1px 3px oklch(50% 0.02 240 / 0.04)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = "translateY(-4px)"
        el.style.boxShadow = featured
          ? "0 20px 48px oklch(68% 0.14 235 / 0.35)"
          : "0 12px 32px oklch(50% 0.02 240 / 0.10)"
        if (!featured) el.style.borderColor = "oklch(68% 0.14 235 / 0.35)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = "translateY(0)"
        el.style.boxShadow = featured
          ? "0 12px 36px oklch(68% 0.14 235 / 0.25)"
          : "0 1px 3px oklch(50% 0.02 240 / 0.04)"
        if (!featured) el.style.borderColor = "var(--color-border)"
      }}
    >
      {isHero && !featured && (
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
          style={{
            background:
              "linear-gradient(to right, var(--color-sky) 0%, var(--color-sky-light) 100%)",
          }}
        />
      )}

      <div className="relative z-10 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span
            className="text-xs uppercase tracking-wider font-bold flex items-center gap-1.5"
            style={{ color: featured ? "white" : "var(--color-sky-dark)" }}
          >
            <span aria-hidden="true">{clusterEmoji}</span>
            {cluster}
          </span>

          <span
            className="text-[0.7rem] px-2.5 py-0.5 rounded-full font-bold flex-shrink-0"
            style={
              featured
                ? { background: "oklch(100% 0 0 / 0.2)", color: "white" }
                : kdIsQuickWin
                  ? {
                      background: "oklch(94% 0.12 145 / 0.4)",
                      color: "oklch(45% 0.16 145)",
                    }
                  : {
                      background: "var(--color-sky-soft)",
                      color: "var(--color-sky-dark)",
                    }
            }
          >
            KD {kd}
            {kdIsQuickWin && !featured && " ⚡"}
          </span>
        </div>

        <h3
          className="font-bold text-lg leading-snug tracking-tight flex-1"
          style={{ fontFamily: "var(--font-display)", color: textColor }}
        >
          {title}
        </h3>

        <span
          className="text-xs uppercase tracking-wider font-semibold"
          style={{ color: subTextColor }}
        >
          {format}
        </span>
      </div>

      <div
        className="relative z-10 flex items-end justify-between mt-5 pt-4"
        style={{
          borderTop: `1px solid ${featured ? "oklch(100% 0 0 / 0.15)" : "var(--color-border-soft)"}`,
        }}
      >
        <div className="flex flex-col gap-0.5">
          <span
            className="font-bold text-base tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: textColor }}
          >
            {volume.toLocaleString("fr-FR")}
          </span>
          <span className="text-xs" style={{ color: subTextColor }}>
            rech./mois
          </span>
        </div>

        <span
          className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
          style={{
            background: featured ? "oklch(100% 0 0 / 0.2)" : "var(--color-sky-soft)",
            color: featured ? "white" : "var(--color-sky-dark)",
          }}
          aria-hidden="true"
        >
          <ArrowUpRight size={16} />
        </span>
      </div>
    </article>
  )
}
