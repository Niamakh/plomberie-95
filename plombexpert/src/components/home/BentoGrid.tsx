"use client"

import { motion, type Variants } from "motion/react"
import ArticleCard from "./ArticleCard"
import { FEATURED_ARTICLES } from "@/lib/articles"

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const LAYOUT = [
  { colClass: "col-span-12 md:col-span-7", minH: "min-h-72", isHero: true },
  { colClass: "col-span-12 md:col-span-5", minH: "min-h-72", isHero: false },
  { colClass: "col-span-12 md:col-span-4", minH: "min-h-52", isHero: false },
  { colClass: "col-span-12 md:col-span-4", minH: "min-h-52", isHero: false },
  { colClass: "col-span-12 md:col-span-4", minH: "min-h-52", isHero: false },
  { colClass: "col-span-12 md:col-span-6", minH: "min-h-48", isHero: false },
  { colClass: "col-span-12 md:col-span-6", minH: "min-h-48", isHero: false },
]

export default function BentoGrid() {
  return (
    <section
      id="articles"
      className="px-6 md:px-10 mb-20 max-w-7xl mx-auto"
      aria-label="Articles récents"
    >
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2
            className="font-extrabold tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              color: "var(--color-text-primary)",
            }}
          >
            Les guides du moment
          </h2>
          <p
            className="text-sm md:text-base mt-1"
            style={{ color: "var(--color-text-muted)" }}
          >
            Sélection des articles les plus consultés cette semaine.
          </p>
        </div>
        <a
          href="#all"
          className="hidden md:inline-flex items-center gap-1 text-sm font-semibold"
          style={{ color: "var(--color-sky-dark)" }}
        >
          Voir tout →
        </a>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-12 gap-4"
      >
        {FEATURED_ARTICLES.map((article, idx) => {
          const layout = LAYOUT[idx] ?? {
            colClass: "col-span-12 md:col-span-4",
            minH: "min-h-48",
            isHero: false,
          }
          return (
            <motion.div
              key={article.id}
              variants={item}
              className={`${layout.colClass} ${layout.minH}`}
            >
              <ArticleCard
                title={article.title}
                cluster={article.cluster}
                clusterEmoji={article.emoji}
                volume={article.volume}
                kd={article.kd}
                format={article.format}
                featured={article.featured}
                quickWin={article.quickWin}
                monetisation={article.monetisation}
                isHero={layout.isHero}
              />
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
