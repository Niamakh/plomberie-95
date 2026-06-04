"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import {
  Search, ArrowUpRight, Clock, Calendar, X, BookOpen,
  Droplets, Zap, ShieldCheck, Bell, CheckCircle,
  Wrench, ThumbsUp, AlertTriangle,
} from "lucide-react"
import { FEATURED_ARTICLES, CATEGORIES } from "@/lib/articles"

const LEVEL_STYLE: Record<string, { bg: string; color: string }> = {
  Débutant:     { bg: "oklch(94% 0.10 145 / 0.35)", color: "oklch(42% 0.15 145)" },
  Intermédiaire:{ bg: "oklch(94% 0.10 65 / 0.35)",  color: "oklch(46% 0.14 60)"  },
  Avancé:       { bg: "oklch(92% 0.10 20 / 0.35)",  color: "oklch(44% 0.16 20)"  },
}

const QUICK_TIPS = [
  { emoji: "💧", title: "Coupure d'eau d'urgence", desc: "Le robinet d'arrêt général est généralement sous l'évier de cuisine ou dans le local compteur. Tournez dans le sens horaire pour fermer." },
  { emoji: "🔥", title: "Chauffe-eau qui ne chauffe plus", desc: "Avant d'appeler un plombier, vérifiez le disjoncteur dédié au chauffe-eau dans votre tableau électrique — 80 % des pannes viennent de là." },
  { emoji: "🚽", title: "Chasse d'eau qui coule", desc: "Un filet d'eau continu peut gaspiller 600 litres/jour. Test rapide : colorant alimentaire dans le réservoir → si la cuvette se colore, c'est le joint de cloche." },
  { emoji: "🪠", title: "Bouchon dans l'évier", desc: "Versez une demi-tasse de bicarbonate puis du vinaigre blanc chaud avant d'utiliser la ventouse. L'effervescence ramollit les bouchons graisseux." },
  { emoji: "🌡️", title: "Radiateur froid en haut", desc: "C'est de l'air emprisonné — il suffit de purger. Munissez-vous d'une clé de purgeur (1 €) et d'un chiffon. L'opération prend 5 minutes." },
  { emoji: "🔗", title: "Joint qui fuit", desc: "Pour un joint temporaire d'urgence, du ruban PTFE (téflon) enroulé dans le sens du filetage suffit en attendant une réparation définitive." },
]

const URGENCES = [
  { icon: "🚨", title: "Dégât des eaux actif", action: "Coupez l'eau générale → ouvrez un robinet bas pour purger la pression → appelez votre assurance dans les 5 jours ouvrés.", color: "oklch(97% 0.05 20 / 0.5)", border: "oklch(85% 0.08 20 / 0.4)" },
  { icon: "💨", title: "Odeur de gaz", action: "N'allumez rien → ouvrez les fenêtres → fermez le robinet de gaz → sortez et appelez le 0800 47 33 33 (GRDF, gratuit 24h/24).", color: "oklch(97% 0.05 60 / 0.5)", border: "oklch(85% 0.08 60 / 0.4)" },
  { icon: "⚡", title: "Eau + électricité", action: "Coupez immédiatement le disjoncteur général avant toute intervention. Ne touchez jamais un appareil électrique avec les mains mouillées.", color: "oklch(97% 0.08 235 / 0.4)", border: "oklch(85% 0.10 235 / 0.35)" },
]

export default function ArticlesGallery() {
  const [search, setSearch]               = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [email, setEmail]                 = useState("")
  const [subscribed, setSubscribed]       = useState(false)

  const filtered = useMemo(() => {
    return FEATURED_ARTICLES.filter((a) => {
      const matchCat = !activeCategory || a.category === activeCategory
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      return matchCat && matchSearch
    })
  }, [search, activeCategory])

  const hasFilter = !!activeCategory || !!search

  function clearAll() {
    setSearch("")
    setActiveCategory(null)
  }

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-28 pb-16 px-6 md:px-10"
        style={{ background: "var(--color-bg-soft)" }}
      >
        <div aria-hidden="true" className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle at center, var(--color-sky-light), transparent 70%)" }} />
        <div aria-hidden="true" className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle at center, var(--color-sky), transparent 70%)" }} />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-xs font-semibold uppercase tracking-wider hover:underline" style={{ color: "var(--color-sky-dark)" }}>Accueil</Link>
            <span style={{ color: "var(--color-text-soft)" }}>/</span>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-muted)" }}>Articles</span>
          </div>

          <h1 className="font-bold mb-4 leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
            Tous nos guides plomberie
          </h1>
          <p className="text-lg mb-8 max-w-2xl" style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
            {FEATURED_ARTICLES.length} articles pratiques pour réparer, entretenir et comprendre votre plomberie — sans jargon, étape par étape.
          </p>

          {/* Stats rapides */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { icon: <BookOpen size={15} />, label: `${FEATURED_ARTICLES.length} guides rédigés` },
              { icon: <Droplets size={15} />, label: "10 catégories couvertes" },
              { icon: <Zap size={15} />, label: "Mise à jour régulière" },
              { icon: <ShieldCheck size={15} />, label: "Vérifiés par des pros" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{ background: "white", border: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}>
                <span style={{ color: "var(--color-sky)" }}>{s.icon}</span>
                {s.label}
              </div>
            ))}
          </div>

          {/* Barre de recherche */}
          <div className="relative max-w-xl">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--color-text-soft)" }} aria-hidden="true" />
            <input
              type="search"
              placeholder="Rechercher un article, une catégorie…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl py-3.5 pl-11 pr-4 text-sm outline-none transition-all"
              style={{ background: "white", border: "1.5px solid var(--color-border)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-sky)"; e.currentTarget.style.boxShadow = "0 0 0 3px oklch(68% 0.14 235 / 0.15)" }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.boxShadow = "none" }}
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: "var(--color-bg-raised)", color: "var(--color-text-muted)" }} aria-label="Effacer">
                <X size={12} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Filtres catégories (sticky) ── */}
      <section className="sticky top-16 z-30 px-6 md:px-10 py-3 border-b"
        style={{ background: "oklch(99% 0.005 240 / 0.95)", borderColor: "var(--color-border-soft)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <button onClick={() => setActiveCategory(null)}
            className="text-xs px-3 py-1.5 rounded-full font-semibold transition-all"
            style={!activeCategory ? { background: "var(--color-sky)", color: "white" } : { background: "var(--color-bg-raised)", color: "var(--color-text-muted)" }}>
            Toutes
          </button>
          {CATEGORIES.map((cat) => (
            <button key={cat.label} onClick={() => setActiveCategory(activeCategory === cat.label ? null : cat.label)}
              className="text-xs px-3 py-1.5 rounded-full font-semibold transition-all flex items-center gap-1"
              style={activeCategory === cat.label ? { background: "var(--color-sky)", color: "white" } : { background: "var(--color-bg-raised)", color: "var(--color-text-muted)" }}>
              <span aria-hidden="true">{cat.emoji}</span>{cat.label}
            </button>
          ))}
          {hasFilter && (
            <button onClick={clearAll} className="ml-auto text-xs px-3 py-1.5 rounded-full font-semibold flex items-center gap-1.5"
              style={{ background: "oklch(92% 0.10 20 / 0.2)", color: "oklch(44% 0.16 20)" }}>
              <X size={11} />Réinitialiser
            </button>
          )}
        </div>
      </section>

      {/* ── Grille articles ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-4">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-semibold" style={{ color: "var(--color-text-muted)" }}>
            <span style={{ color: "var(--color-text-primary)" }}>{filtered.length}</span>{" "}
            article{filtered.length !== 1 ? "s" : ""}{hasFilter && " trouvé" + (filtered.length !== 1 ? "s" : "")}
          </p>
          {activeCategory && (
            <p className="text-sm" style={{ color: "var(--color-sky-dark)" }}>
              {CATEGORIES.find((c) => c.label === activeCategory)?.emoji} <strong>{activeCategory}</strong>
            </p>
          )}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl" style={{ background: "var(--color-bg-raised)" }} aria-hidden="true">🔍</div>
            <p className="font-bold text-lg" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>Aucun article trouvé</p>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>Essayez avec d&apos;autres mots-clés ou réinitialisez les filtres.</p>
            <button onClick={clearAll} className="mt-2 text-sm px-4 py-2 rounded-xl font-semibold" style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }}>
              Voir tous les articles
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((article) => {
            const lvl = LEVEL_STYLE[article.level]
            return (
              <Link key={article.id} href={`/articles/${article.slug}`}
                className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
                style={{ background: "white", border: "1px solid var(--color-border)", boxShadow: "0 1px 4px oklch(50% 0.02 240 / 0.06)", textDecoration: "none" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 12px 32px oklch(50% 0.02 240 / 0.10)"; el.style.borderColor = "oklch(68% 0.14 235 / 0.4)" }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 1px 4px oklch(50% 0.02 240 / 0.06)"; el.style.borderColor = "var(--color-border)" }}
              >
                <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, var(--color-sky), var(--color-sky-light))" }} aria-hidden="true" />
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: "var(--color-sky-dark)" }}>
                      <span aria-hidden="true">{article.emoji}</span>{article.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {article.isNew && (
                        <span className="text-[0.65rem] px-2 py-0.5 rounded-full font-bold" style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }}>Nouveau</span>
                      )}
                      <span className="text-[0.65rem] px-2 py-0.5 rounded-full font-bold" style={{ background: lvl.bg, color: lvl.color }}>{article.level}</span>
                    </div>
                  </div>
                  <h2 className="font-bold leading-snug" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.02rem" }}>{article.title}</h2>
                  <p className="text-sm leading-relaxed line-clamp-3 flex-1" style={{ color: "var(--color-text-muted)" }}>{article.excerpt}</p>
                  <div className="flex items-center gap-1.5">
                    <BookOpen size={12} style={{ color: "var(--color-sky)" }} aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-soft)" }}>{article.format}</span>
                  </div>
                </div>
                <div className="px-6 pb-5 flex items-center justify-between gap-4" style={{ borderTop: "1px solid var(--color-border-soft)", paddingTop: "1rem" }}>
                  <div className="flex items-center gap-3 text-xs" style={{ color: "var(--color-text-soft)" }}>
                    <span className="flex items-center gap-1"><Clock size={12} aria-hidden="true" />{article.readTime} min</span>
                    <span aria-hidden="true" style={{ color: "var(--color-border)" }}>·</span>
                    <span className="flex items-center gap-1"><Calendar size={12} aria-hidden="true" />{article.date}</span>
                  </div>
                  <span className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110 flex-shrink-0"
                    style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }} aria-label="Lire l'article">
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Conseils rapides ── */}
      <section className="px-6 md:px-10 py-16" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "var(--color-sky-soft)" }} aria-hidden="true">
              <Zap size={16} style={{ color: "var(--color-sky-dark)" }} />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-sky-dark)" }}>À savoir absolument</span>
          </div>
          <h2 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.8rem" }}>
            6 astuces de plombier à garder en tête
          </h2>
          <p className="text-sm mb-8 max-w-xl" style={{ color: "var(--color-text-muted)" }}>
            Ces réflexes simples vous éviteront de paniquer ou de payer un plombier d&apos;urgence pour un problème bénin.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {QUICK_TIPS.map((tip, i) => (
              <div key={i} className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                <span className="text-2xl" aria-hidden="true">{tip.emoji}</span>
                <p className="font-bold text-sm" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{tip.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="px-6 md:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, var(--color-sky-dark) 0%, var(--color-sky) 60%, var(--color-sky-light) 100%)" }}>
            {/* Décorations */}
            <div aria-hidden="true" className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, white, transparent 70%)", transform: "translate(30%, -30%)" }} />
            <div aria-hidden="true" className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, white, transparent 70%)", transform: "translate(-30%, 30%)" }} />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 p-8 md:p-12">
              {/* Texte */}
              <div className="flex-1 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Bell size={18} color="white" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80">Newsletter gratuite</span>
                </div>
                <h2 className="font-bold mb-3 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                  Recevez nos guides<br />directement dans votre boîte
                </h2>
                <p className="opacity-80 text-sm leading-relaxed mb-6 max-w-md">
                  Chaque semaine : 1 tuto plomberie, 1 astuce de dépannage, et les erreurs à éviter absolument. Zéro spam — désabonnement en 1 clic.
                </p>
                <ul className="flex flex-col gap-2">
                  {["Guides exclusifs réservés aux abonnés", "Alertes avant les pannes saisonnières", "Réponses à vos questions en priorité"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm opacity-90">
                      <CheckCircle size={14} color="white" aria-hidden="true" />{item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Formulaire */}
              <div className="w-full lg:w-96 flex-shrink-0">
                {subscribed ? (
                  <div className="rounded-2xl p-8 flex flex-col items-center gap-3 text-center" style={{ background: "oklch(100% 0 0 / 0.15)", backdropFilter: "blur(10px)" }}>
                    <span className="text-4xl" aria-hidden="true">🎉</span>
                    <p className="font-bold text-white text-lg" style={{ fontFamily: "var(--font-display)" }}>Vous êtes abonné !</p>
                    <p className="text-sm opacity-80 text-white">Merci ! Vous recevrez votre premier guide très bientôt.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: "oklch(100% 0 0 / 0.12)", backdropFilter: "blur(10px)", border: "1px solid oklch(100% 0 0 / 0.2)" }}>
                    <div>
                      <label htmlFor="newsletter-name" className="text-xs font-semibold text-white opacity-80 block mb-1.5">Votre prénom</label>
                      <input id="newsletter-name" type="text" placeholder="Jean" className="w-full rounded-xl py-2.5 px-4 text-sm outline-none"
                        style={{ background: "oklch(100% 0 0 / 0.15)", border: "1px solid oklch(100% 0 0 / 0.25)", color: "white", fontFamily: "var(--font-body)" }} />
                    </div>
                    <div>
                      <label htmlFor="newsletter-email" className="text-xs font-semibold text-white opacity-80 block mb-1.5">Votre adresse email</label>
                      <input id="newsletter-email" type="email" required placeholder="jean@exemple.fr" value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl py-2.5 px-4 text-sm outline-none"
                        style={{ background: "oklch(100% 0 0 / 0.15)", border: "1px solid oklch(100% 0 0 / 0.25)", color: "white", fontFamily: "var(--font-body)" }} />
                    </div>
                    <button type="submit" className="w-full py-3 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5"
                      style={{ background: "white", color: "var(--color-sky-dark)", fontFamily: "var(--font-display)", boxShadow: "0 4px 14px oklch(0% 0 0 / 0.15)" }}>
                      S&apos;abonner gratuitement →
                    </button>
                    <p className="text-xs text-center opacity-60 text-white">Pas de spam. Désabonnement en 1 clic.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Urgences plomberie ── */}
      <section className="px-6 md:px-10 py-16" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "oklch(92% 0.10 20 / 0.3)" }} aria-hidden="true">
              <AlertTriangle size={16} style={{ color: "oklch(44% 0.16 20)" }} />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "oklch(44% 0.16 20)" }}>Urgences plomberie</span>
          </div>
          <h2 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.8rem" }}>Que faire en cas d&apos;urgence ?</h2>
          <p className="text-sm mb-8 max-w-xl" style={{ color: "var(--color-text-muted)" }}>
            Ces 3 situations nécessitent une réaction immédiate et précise. Lisez-les maintenant — pas au moment de la panique.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {URGENCES.map((u, i) => (
              <div key={i} className="rounded-2xl p-6 flex flex-col gap-3" style={{ background: u.color, border: `1px solid ${u.border}` }}>
                <span className="text-3xl" aria-hidden="true">{u.icon}</span>
                <p className="font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.05rem" }}>{u.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{u.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pourquoi nous faire confiance ── */}
      <section className="px-6 md:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "var(--color-sky-soft)" }} aria-hidden="true">
                  <ThumbsUp size={16} style={{ color: "var(--color-sky-dark)" }} />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-sky-dark)" }}>Notre approche</span>
              </div>
              <h2 className="font-bold mb-4 leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.9rem" }}>
                Des guides écrits par des plombiers,<br />pour des particuliers
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                Chaque article est rédigé à partir de situations réelles rencontrées par nos plombiers partenaires. Nous privilégions les explications claires, les étapes numérotées et les avertissements honnêtes sur ce qu&apos;il vaut mieux confier à un professionnel.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Notre philosophie : vous permettre de résoudre 80 % des pannes courantes vous-même, en toute sécurité — et vous aider à reconnaître les 20 % qui nécessitent un expert.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Wrench size={20} />, stat: "11", label: "Guides complets", sub: "Rédigés par des pros" },
                { icon: <CheckCircle size={20} />, stat: "100%", label: "Vérifiés", sub: "Par des plombiers certifiés" },
                { icon: <Droplets size={20} />, stat: "0 €", label: "Accès gratuit", sub: "Tous les articles, toujours" },
                { icon: <Zap size={20} />, stat: "5 min", label: "Tutos rapides", sub: "Pour les urgences simples" },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl p-5 flex flex-col gap-2" style={{ background: i % 2 === 0 ? "var(--color-sky-soft)" : "white", border: "1px solid var(--color-border)" }}>
                  <span style={{ color: "var(--color-sky-dark)" }} aria-hidden="true">{item.icon}</span>
                  <p className="font-bold text-2xl" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{item.stat}</p>
                  <p className="font-semibold text-sm" style={{ color: "var(--color-text-primary)" }}>{item.label}</p>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
