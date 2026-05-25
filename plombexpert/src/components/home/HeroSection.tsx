"use client"

import { motion, type Variants } from "motion/react"
import { ArrowRight, Search, Sparkles } from "lucide-react"

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const STATS = [
  { value: "80+", label: "Articles" },
  { value: "12", label: "Thématiques" },
  { value: "3 200+", label: "Abonnés" },
  { value: "100%", label: "Gratuit" },
]

export default function HeroSection() {
  return (
    <section
      className="relative px-6 md:px-10 pt-20 pb-16 max-w-7xl mx-auto overflow-hidden"
      aria-label="Section héros"
    >
      {/* Decorative sky gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-[640px] h-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, oklch(68% 0.14 235 / 0.18) 0%, transparent 65%)",
          transform: "translate(20%, -30%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-[480px] h-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(80% 0.10 225 / 0.18) 0%, transparent 65%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col gap-6"
      >
        {/* Badge */}
        <motion.div variants={item} className="inline-flex w-fit">
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
            style={{
              background: "var(--color-sky-soft)",
              border: "1px solid oklch(68% 0.14 235 / 0.25)",
              color: "var(--color-sky-dark)",
            }}
          >
            <Sparkles size={12} aria-hidden="true" />
            Nouveau · 7 guides cette semaine
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          className="max-w-4xl leading-[1.05] tracking-tight font-extrabold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.6rem, 5.5vw, 4.6rem)",
            color: "var(--color-text-primary)",
          }}
        >
          La plomberie expliquée{" "}
          <em
            className="not-italic"
            style={{
              backgroundImage:
                "linear-gradient(120deg, var(--color-sky) 0%, var(--color-sky-dark) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            simplement
          </em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="max-w-2xl text-base md:text-lg leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          Guides pratiques, tutos DIY et comparatifs pour réparer, entretenir et comprendre
          votre installation — sans payer un plombier à chaque fois.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-3 mt-2">
          <a
            href="#articles"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{
              fontFamily: "var(--font-display)",
              background: "var(--color-sky)",
              color: "white",
              boxShadow: "0 8px 24px oklch(68% 0.14 235 / 0.3)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--color-sky-dark)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--color-sky)")
            }
          >
            Explorer les articles
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a
            href="#recherche"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200"
            style={{
              background: "white",
              border: "1px solid var(--color-border)",
              color: "var(--color-text-primary)",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = "var(--color-sky)"
              ;(e.currentTarget as HTMLElement).style.color = "var(--color-sky-dark)"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)"
              ;(e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)"
            }}
          >
            <Search size={15} aria-hidden="true" />
            Trouver un tuto
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={item}
          className="mt-10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span
                className="font-extrabold text-3xl md:text-4xl tracking-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-text-primary)",
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: "var(--color-text-soft)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
