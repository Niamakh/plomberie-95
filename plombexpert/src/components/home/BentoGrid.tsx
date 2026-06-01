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
  { colClass: "col-span-12 md:col-span-7", minH: "min-h-80", isHero: true },
  { colClass: "col-span-12 md:col-span-5", minH: "min-h-80", isHero: false },
  { colClass: "col-span-12 md:col-span-4", minH: "min-h-60", isHero: false },
  { colClass: "col-span-12 md:col-span-4", minH: "min-h-60", isHero: false },
  { colClass: "col-span-12 md:col-span-4", minH: "min-h-60", isHero: false },
  { colClass: "col-span-12 md:col-span-6", minH: "min-h-52", isHero: false },
  { colClass: "col-span-12 md:col-span-6", minH: "min-h-52", isHero: false },
]

export default function BentoGrid() {
  return (
    <section
      id="articles"
      className="px-6 md:px-10 mb-20 max-w-7xl mx-auto"
      aria-label="Articles récents"
    >
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
            minH: "min-h-52",
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
                excerpt={article.excerpt}
                category={article.category}
                categoryEmoji={article.emoji}
                readTime={article.readTime}
                date={article.date}
                format={article.format}
                level={article.level}
                featured={article.featured}
                isNew={article.isNew}
                isHero={layout.isHero}
              />
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
