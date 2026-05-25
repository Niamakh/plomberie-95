"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Mail, Wrench, Euro, Zap, Check } from "lucide-react"

const PERKS = [
  { icon: <Mail size={14} aria-hidden="true" />, text: "2 guides/semaine, 0 spam" },
  { icon: <Wrench size={14} aria-hidden="true" />, text: "Tutos DIY testés et vérifiés" },
  { icon: <Euro size={14} aria-hidden="true" />, text: "Économisez sur les devis plombier" },
  { icon: <Zap size={14} aria-hidden="true" />, text: "Accès anticipé aux nouveaux articles" },
]

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section id="newsletter" className="px-6 md:px-10 mb-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        style={{
          background:
            "linear-gradient(135deg, var(--color-bg-soft) 0%, var(--color-sky-soft) 100%)",
          border: "1px solid var(--color-border)",
        }}
      >
        {/* Decorative gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(68% 0.14 235 / 0.18) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -bottom-20 w-72 h-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(80% 0.10 225 / 0.15) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col gap-5">
          <div>
            <h2
              className="font-extrabold leading-tight tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                color: "var(--color-text-primary)",
              }}
            >
              Devenez votre{" "}
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
                propre plombier
              </em>
            </h2>
            <p
              className="mt-3 text-base leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              Rejoignez 3 200+ abonnés qui reçoivent chaque semaine les meilleurs guides
              pratiques — directement dans leur boîte mail.
            </p>
          </div>

          {submitted ? (
            <div
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold"
              style={{
                background: "white",
                border: "1px solid var(--color-sky-light)",
                color: "var(--color-sky-dark)",
              }}
            >
              <Check size={16} aria-hidden="true" />
              Parfait ! Vérifiez votre boîte mail.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Adresse e-mail"
                className="flex-1 px-4 py-3 rounded-full text-sm outline-none transition-colors duration-150"
                style={{
                  background: "white",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-primary)",
                }}
                onFocus={(e) =>
                  ((e.target as HTMLInputElement).style.borderColor = "var(--color-sky)")
                }
                onBlur={(e) =>
                  ((e.target as HTMLInputElement).style.borderColor = "var(--color-border)")
                }
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-150 hover:-translate-y-0.5"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "var(--color-sky)",
                  color: "white",
                  boxShadow: "0 6px 18px oklch(68% 0.14 235 / 0.3)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "var(--color-sky-dark)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "var(--color-sky)")
                }
              >
                S'inscrire
              </button>
            </form>
          )}

          <p className="text-xs" style={{ color: "var(--color-text-soft)" }}>
            Désinscription en 1 clic à tout moment.
          </p>
        </div>

        <div className="relative z-10 flex flex-col gap-4">
          {PERKS.map((perk, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-sm font-medium"
              style={{ color: "var(--color-text-primary)" }}
            >
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "white",
                  color: "var(--color-sky-dark)",
                  boxShadow: "0 4px 12px oklch(68% 0.14 235 / 0.12)",
                }}
              >
                {perk.icon}
              </span>
              {perk.text}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
