"use client"

import Link from "next/link"
import {
  Clock, ShieldCheck, Star, Wrench, Droplets, Flame,
  Search, Zap, CheckCircle, MapPin, ArrowUpRight, AlertTriangle,
} from "lucide-react"
import type { City } from "@/lib/cities"

// TODO: remplacer XXXXXXXXXX par le vrai numéro de téléphone
const PHONE_TEL = "tel:+33XXXXXXXXXX"

const SEO_SERVICE_GUIDES: Record<string, { href: string; label: string }> = {
  "Débouchage canalisations": {
    href: "/articles/deboucher-canalisation-karcher",
    label: "→ Guide DIY débouchage canalisation",
  },
  "Chauffe-eau & ballon": {
    href: "/articles/vider-chauffe-eau-tutoriel",
    label: "→ Comment vider et entretenir son chauffe-eau",
  },
  "Recherche de fuite": {
    href: "/articles/fuites-detecter-reparer",
    label: "→ Détecter et réparer une fuite d'eau",
  },
  "Chauffage & radiateurs": {
    href: "/articles/purger-radiateur-fonte-tuto",
    label: "→ Comment purger un radiateur en fonte",
  },
}

const GONESSE_NEARBY_LINKS = [
  { label: "Plombier Villepinte", href: "/Plombier-Villepinte/" },
  { label: "Plombier Garges-lès-Gonesse", href: "/Plombier-Garges-les-Gonesse/" },
  { label: "Plombier Sarcelles", href: "/Plombier-Sarcelles/" },
  { label: "Plombier Arnouville", href: "/Plombier-Arnouville/" },
  { label: "Plombier Bonneuil-en-France", href: "/Plombier-Bonneuil-en-France/" },
]

const HERBLAY_NEARBY_LINKS = [
  { label: "Plombier Conflans-Sainte-Honorine", href: "/Plombier-Conflans-Sainte-Honorine/" },
  { label: "Plombier Argenteuil", href: "/Plombier-Argenteuil/" },
  { label: "Plombier Cergy", href: "/Plombier-Cergy/" },
  { label: "Plombier Franconville", href: "/Plombier-Franconville/" },
  { label: "Plombier Taverny", href: "/Plombier-Taverny/" },
]

const GOUSSAINVILLE_NEARBY_LINKS = [
  { label: "Plombier Gonesse", href: "/Plombier-Gonesse/" },
  { label: "Plombier Sarcelles", href: "/Plombier-Sarcelles/" },
  { label: "Plombier Villiers-le-Bel", href: "/Plombier-Villiers-le-Bel/" },
  { label: "Plombier Garges-lès-Gonesse", href: "/Plombier-Garges-les-Gonesse/" },
  { label: "Plombier Fosses", href: "/Plombier-Fosses/" },
]

const SAINT_GRATIEN_NEARBY_LINKS = [
  { label: "Plombier Enghien-les-Bains", href: "/Artisan-Plombier-Enghien-les-Bains/" },
  { label: "Plombier Soisy-sous-Montmorency", href: "/Depannage-plomberie-Soisy-sous-Montmorency/" },
  { label: "Plombier Sannois", href: "/Artisan-Plombier-Sannois/" },
  { label: "Plombier Ermont", href: "/Plombier-a-Ermont/" },
  { label: "Plombier Deuil-la-Barre", href: "/Artisan-Plombier-Deuil-la-Barre/" },
]

const ERMONT_NEARBY_LINKS: { label: string; href?: string }[] = [
  { label: "Plombier Saint-Gratien", href: "/Artisan-Plombier-Saint-Gratien/" },
  { label: "Plombier Sannois" },
  { label: "Plombier Franconville" },
  { label: "Plombier Soisy-sous-Montmorency", href: "/Depannage-plomberie-Soisy-sous-Montmorency/" },
  { label: "Plombier Enghien-les-Bains" },
]

const MONTMAGNY_NEARBY_LINKS: { label: string; href?: string }[] = [
  { label: "Plombier Sarcelles" },
  { label: "Plombier Enghien-les-Bains" },
  { label: "Plombier Deuil-la-Barre" },
  { label: "Plombier Groslay" },
  { label: "Plombier Saint-Brice-sous-Forêt" },
]

const SERVICES = [
  { icon: <Droplets size={22} />, titre: "Dépannage fuite d'eau", desc: "Localisation et réparation de toutes les fuites : robinets, joints, tuyauteries apparentes ou encastrées.", urgence: true },
  { icon: <Zap size={22} />, titre: "Débouchage canalisations", desc: "Évier, WC, douche, bac à douche, canalisation extérieure. Furet, haute pression ou ventouse selon l'obstruction.", urgence: true },
  { icon: <Flame size={22} />, titre: "Chauffe-eau & ballon", desc: "Panne, vidange, remplacement d'anode, détartrage ou remplacement complet du chauffe-eau électrique ou à gaz.", urgence: false },
  { icon: <Wrench size={22} />, titre: "Robinetterie & mitigeurs", desc: "Remplacement de robinet qui goutte, mitigeur, flexible, joint ou groupe de sécurité. Toutes marques.", urgence: false },
  { icon: <Search size={22} />, titre: "Recherche de fuite", desc: "Détection non destructive par caméra thermique et traçage de gaz. Rapport remis pour l'assurance.", urgence: false },
  { icon: <Flame size={22} />, titre: "Chauffage & radiateurs", desc: "Purge de circuit, remplacement de robinet thermostatique, désembouage, mise en service chaudière.", urgence: false },
]

const ENGAGEMENTS = [
  { icon: <Clock size={20} />,      label: "Intervention 24h/24, 7j/7",        sub: "Urgences prises en charge la nuit et le week-end" },
  { icon: <ShieldCheck size={20} />,label: "Devis gratuit & transparent",       sub: "Prix annoncé avant toute intervention" },
  { icon: <Star size={20} />,       label: "Artisans certifiés RGE",            sub: "Qualifications Qualieau et Qualigaz" },
  { icon: <MapPin size={20} />,     label: "Intervention en moins d'1 heure",   sub: "Équipes locales basées dans le Val-d'Oise" },
]

const FAQ_ITEMS = [
  {
    q: (city: City) => `Combien coûte un plombier à ${city.name} ?`,
    a: () => "Nos tarifs démarrent à 79 € HT pour une intervention standard en journée. Les interventions d'urgence (nuit, week-end, jour férié) font l'objet d'une majoration clairement annoncée avant déplacement. Devis gratuit systématique pour tous les travaux de rénovation.",
  },
  {
    q: (city: City) => `Intervenez-vous en urgence à ${city.name} la nuit ?`,
    a: (city: City) => `Oui, notre service d'urgence plomberie à ${city.name} fonctionne 24h/24, 7j/7 et 365 jours par an. En cas de dégât des eaux actif, fuite importante ou WC hors service, nous envoyons un technicien dans l'heure.`,
  },
  {
    q: (city: City) => `Quelles zones couvrez-vous autour de ${city.name} ?`,
    a: (city: City) => `Nous intervenons à ${city.name} (${city.cp}) et dans toutes les communes voisines du Val-d'Oise : ${city.nearby?.join(", ") ?? "communes limitrophes"}. Pas de frais de déplacement supplémentaires dans notre zone d'intervention.`,
  },
  {
    q: () => "Acceptez-vous les demandes de prise en charge assurance ?",
    a: () => "Oui. Nous établissons tous les documents nécessaires à votre déclaration de sinistre (rapport d'intervention, photos, devis détaillé). Nous travaillons régulièrement avec les principaux assureurs (AXA, MAAF, Allianz, etc.).",
  },
  {
    q: (city: City) => `Comment détecter une fuite d'eau cachée à ${city.name} ?`,
    a: () => "Signes à surveiller : facture d'eau anormalement élevée, taches d'humidité sur les murs, moisissures sans cause apparente, bruit d'eau quand tout est fermé. Nous utilisons une caméra thermique et un traceur de gaz inoffensif pour localiser les fuites sans démolition.",
  },
]

export default function CityLanding({ city }: { city: City }) {
  const isGonesse = city.slug === "Plombier-Gonesse"
  const isHerblay = city.slug === "Plombier-sur-Herblay"
  const isGoussainville = city.slug === "Plombier-Goussainville"
  const isSaintGratien = city.slug === "Artisan-Plombier-Saint-Gratien"
  const isErmont = city.slug === "Plombier-a-Ermont"
  const isMontmagny = city.slug === "Plombier-Montmagny"
  const hasSeoEnhancements = isGonesse || isHerblay || isGoussainville || isSaintGratien || isErmont || isMontmagny
  const hasReplacedIntro = isHerblay || isGoussainville || isSaintGratien || isErmont || isMontmagny

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden pt-28 pb-20 px-6 md:px-10"
        style={{ background: "var(--color-bg-soft)" }}
      >
        {/* Cercles décoratifs */}
        <div aria-hidden="true" className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--color-sky-light), transparent 70%)" }} />
        <div aria-hidden="true" className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--color-sky), transparent 70%)" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6" aria-label="Fil d'Ariane">
            <Link href="/" className="text-xs font-semibold uppercase tracking-wider hover:underline" style={{ color: "var(--color-sky-dark)" }}>Accueil</Link>
            <span style={{ color: "var(--color-text-soft)" }}>/</span>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-muted)" }}>
              Plombier {city.name}
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Texte gauche */}
            <div className="flex-1">
              {/* Badge urgence */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ background: "oklch(94% 0.10 20 / 0.25)", border: "1px solid oklch(85% 0.08 20 / 0.4)" }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "oklch(55% 0.18 20)" }} aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "oklch(40% 0.16 20)" }}>
                  Disponible maintenant — Intervention sous 1h
                </span>
              </div>

              {/* H1 */}
              <h1
                className="font-bold leading-tight mb-5"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-text-primary)",
                  fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                }}
              >
                {city.customH1 ? (
                  hasSeoEnhancements ? (
                    <>
                      {city.customH1.split(" — ")[0]}{" "}
                      <span style={{ color: "var(--color-sky)" }}>
                        — {city.customH1.split(" — ")[1]}
                      </span>
                    </>
                  ) : (
                    <>
                      {city.customH1.split(" - ")[0]}{" "}
                      <span style={{ color: "var(--color-sky)" }}>
                        — {city.customH1.split(" - ")[1] ?? "Artisan local 7j/7"}
                      </span>
                    </>
                  )
                ) : (
                  <>
                    Plombier à {city.name} ({city.cp}){" "}
                    <span style={{ color: "var(--color-sky)" }}>— Intervention rapide 24h/24</span>
                  </>
                )}
              </h1>

              <p className="text-lg leading-relaxed mb-8 max-w-xl" style={{ color: "var(--color-text-muted)" }}>
                Plombier professionnel à <strong>{city.name}</strong> ({city.cp}) : dépannage toutes urgences, recherche de fuite, débouchage, chauffe-eau. Devis gratuit · Artisans certifiés · Pas de supplément de déplacement.
              </p>

              {/* Mots-clés secondaires visibles */}
              <div className="flex flex-wrap gap-2 mb-8">
                {city.secondaryKeywords.map((kw, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-full font-semibold capitalize"
                    style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }}>
                    {kw}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-base transition-all hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(135deg, var(--color-sky) 0%, var(--color-sky-dark) 100%)",
                    color: "white",
                    fontFamily: "var(--font-display)",
                    boxShadow: "0 6px 20px oklch(68% 0.14 235 / 0.35)",
                  }}
                  aria-label={`Appeler un plombier à ${city.name}`}
                >
                  📞 Appeler un plombier
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-base transition-all hover:-translate-y-1"
                  style={{
                    background: "white",
                    color: "var(--color-sky-dark)",
                    fontFamily: "var(--font-display)",
                    border: "1.5px solid var(--color-border)",
                    boxShadow: "0 2px 8px oklch(50% 0.02 240 / 0.08)",
                  }}
                >
                  Devis gratuit →
                </a>
              </div>
            </div>

            {/* Carte engagements */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="rounded-3xl p-6 flex flex-col gap-4"
                style={{ background: "white", border: "1px solid var(--color-border)", boxShadow: "0 8px 32px oklch(50% 0.02 240 / 0.08)" }}>
                <p className="font-bold text-sm mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>
                  Pourquoi nous choisir ?
                </p>
                {ENGAGEMENTS.map((eng, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }}
                      aria-hidden="true">
                      {eng.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{eng.label}</p>
                      <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{eng.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 py-16" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-bold mb-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
            >
              Nos services de plomberie à {city.name}
            </h2>
            {hasReplacedIntro ? (
              <p className="text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Nos artisans qualifiés assurent toutes les interventions plomberie et chauffage à {city.name} ({city.cp}), 24h/24, 7j/7. De la{" "}
                <Link href="/articles/fuites-detecter-reparer" className="underline text-blue-700">recherche de fuite</Link> au{" "}
                <Link href="/articles/vider-chauffe-eau-tutoriel" className="underline text-blue-700">remplacement de chauffe-eau</Link>, en passant par le{" "}
                <Link href="/articles/deboucher-canalisation-karcher" className="underline text-blue-700">débouchage de canalisations</Link> — une seule équipe pour toutes vos urgences. Besoin d&apos;informations avant d&apos;appeler ? Consultez nos{" "}
                <Link href="/articles" className="underline text-blue-700">guides pratiques plomberie</Link>.
              </p>
            ) : (
              <>
                <p className="text-sm max-w-xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
                  Toutes les interventions plomberie et chauffage assurées par des artisans qualifiés, disponibles 24h/24 sur {city.name} ({city.cp}) et les communes voisines.
                </p>
                {isGonesse && (
                  <p className="text-sm max-w-2xl mx-auto mt-4 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    Nos artisans qualifiés assurent toutes les interventions plomberie et chauffage à Gonesse (95500), 24h/24, 7j/7. De la{" "}
                    <Link href="/articles/fuites-detecter-reparer" className="underline text-blue-700">recherche de fuite</Link> au{" "}
                    <Link href="/articles/vider-chauffe-eau-tutoriel" className="underline text-blue-700">remplacement de chauffe-eau</Link>, en passant par le{" "}
                    <Link href="/articles/deboucher-canalisation-karcher" className="underline text-blue-700">débouchage de canalisations</Link> et la purge de radiateurs — une seule équipe pour toutes vos urgences. Besoin d&apos;informations avant d&apos;appeler ? Consultez nos{" "}
                    <Link href="/articles" className="underline text-blue-700">guides pratiques plomberie</Link> pour estimer votre problème.
                  </p>
                )}
              </>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => (
              <div key={i} className="rounded-2xl p-6 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1"
                style={{ background: "white", border: "1px solid var(--color-border)", boxShadow: "0 2px 8px oklch(50% 0.02 240 / 0.05)" }}>
                <div className="flex items-center justify-between">
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }}
                    aria-hidden="true">
                    {service.icon}
                  </span>
                  {service.urgence && (
                    <span className="text-[0.65rem] px-2 py-0.5 rounded-full font-bold"
                      style={{ background: "oklch(94% 0.10 20 / 0.3)", color: "oklch(44% 0.16 20)" }}>
                      Urgence 24/7
                    </span>
                  )}
                </div>
                <p className="font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                  {service.titre}
                </p>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--color-text-muted)" }}>{service.desc}</p>
                {hasSeoEnhancements && SEO_SERVICE_GUIDES[service.titre] && (
                  <Link
                    href={SEO_SERVICE_GUIDES[service.titre].href}
                    className="text-sm underline text-blue-700 mt-2 inline-block"
                  >
                    {SEO_SERVICE_GUIDES[service.titre].label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ZONE D'INTERVENTION ════════════════════════════════════════ */}
      <section className="px-6 md:px-10 py-16" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={18} style={{ color: "var(--color-sky-dark)" }} aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-sky-dark)" }}>Zone d'intervention</span>
              </div>
              <h2 className="font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.8rem" }}>
                Plombier à {city.name} et dans tout le {city.dept}
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-text-muted)" }}>
                Nos équipes interviennent sur l'ensemble de la commune de <strong>{city.name} ({city.cp})</strong> — tous quartiers couverts — ainsi que dans les communes limitrophes du Val-d'Oise, sans majoration de déplacement.
              </p>

              {/* Quartiers */}
              {city.neighborhoods && (
                <>
                  <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--color-text-soft)" }}>
                    Quartiers couverts à {city.name}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {city.neighborhoods.map((n, i) => (
                      <span key={i} className="text-xs px-3 py-1.5 rounded-full font-semibold"
                        style={{ background: "white", border: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}>
                        {n}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {/* Villes voisines */}
              {city.nearby && (
                <>
                  <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--color-text-soft)" }}>
                    Communes voisines également desservies
                  </p>
                  {isGonesse ? (
                    <ul className="grid grid-cols-2 gap-2 mt-4 text-sm">
                      {GONESSE_NEARBY_LINKS.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} className="underline hover:text-blue-700">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href="/" className="underline hover:text-blue-700">
                          Toutes nos villes du Val-d&apos;Oise →
                        </Link>
                      </li>
                    </ul>
                  ) : isHerblay ? (
                    <ul className="grid grid-cols-2 gap-2 mt-4 text-sm">
                      {HERBLAY_NEARBY_LINKS.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} className="underline hover:text-blue-700">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href="/" className="underline hover:text-blue-700">
                          Toutes nos villes du Val-d&apos;Oise →
                        </Link>
                      </li>
                    </ul>
                  ) : isGoussainville ? (
                    <ul className="grid grid-cols-2 gap-2 mt-4 text-sm">
                      {GOUSSAINVILLE_NEARBY_LINKS.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} className="underline hover:text-blue-700">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href="/" className="underline hover:text-blue-700">
                          Toutes nos villes du Val-d&apos;Oise →
                        </Link>
                      </li>
                    </ul>
                  ) : isSaintGratien ? (
                    <ul className="grid grid-cols-2 gap-2 mt-4 text-sm">
                      {SAINT_GRATIEN_NEARBY_LINKS.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} className="underline hover:text-blue-700">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href="/" className="underline hover:text-blue-700">
                          Toutes nos villes du Val-d&apos;Oise →
                        </Link>
                      </li>
                    </ul>
                  ) : isErmont ? (
                    <ul className="grid grid-cols-2 gap-2 mt-4 text-sm">
                      {ERMONT_NEARBY_LINKS.map((link) => (
                        <li key={link.label}>
                          {link.href ? (
                            <Link href={link.href} className="underline hover:text-blue-700">
                              {link.label}
                            </Link>
                          ) : (
                            <span>{link.label}</span>
                          )}
                        </li>
                      ))}
                      <li>
                        <Link href="/" className="underline hover:text-blue-700">
                          Toutes nos villes du Val-d&apos;Oise →
                        </Link>
                      </li>
                    </ul>
                  ) : isMontmagny ? (
                    <ul className="grid grid-cols-2 gap-2 mt-4 text-sm">
                      {MONTMAGNY_NEARBY_LINKS.map((link) => (
                        <li key={link.label}>
                          {link.href ? (
                            <Link href={link.href} className="underline hover:text-blue-700">
                              {link.label}
                            </Link>
                          ) : (
                            <span>{link.label}</span>
                          )}
                        </li>
                      ))}
                      <li>
                        <Link href="/" className="underline hover:text-blue-700">
                          Toutes nos villes du Val-d&apos;Oise →
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {city.nearby.map((v, i) => (
                        <span key={i} className="text-xs px-3 py-1.5 rounded-full font-semibold"
                          style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }}>
                          {v}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Carte d'urgence */}
            <div className="w-full lg:w-96 flex-shrink-0">
              <div className="rounded-3xl overflow-hidden"
                style={{ background: "linear-gradient(135deg, var(--color-sky-dark) 0%, var(--color-sky) 100%)" }}>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle size={18} color="white" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80 text-white">Urgence plomberie</span>
                  </div>
                  <p className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem" }}>
                    Dégât des eaux ?<br />Fuite active ?
                  </p>
                  <p className="text-sm text-white opacity-80 mb-6 leading-relaxed">
                    En cas d'urgence, coupez d'abord votre robinet d'arrêt général — puis appelez-nous. Nous envoyons un technicien sous 1h à {city.name}.
                  </p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {[
                      "Robinet d'arrêt général sous l'évier de cuisine",
                      "Compteur d'eau : local technique ou rue",
                      "Assurance : déclarez dans les 5 jours ouvrés",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white opacity-90">
                        <CheckCircle size={14} color="white" className="flex-shrink-0 mt-0.5" aria-hidden="true" />{item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={PHONE_TEL}
                    className="w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                    style={{ background: "white", color: "var(--color-sky-dark)", fontFamily: "var(--font-display)" }}
                  >
                    📞 Appeler maintenant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CHIFFRES CLÉS ══════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { chiffre: "< 1h",  label: "Délai d'intervention moyen",    sub: "Sur " + city.name + " et environs" },
              { chiffre: "24/7",  label: "Disponibilité",                  sub: "Nuits, week-ends, jours fériés"   },
              { chiffre: "100%",  label: "Devis gratuit",                  sub: "Sans engagement, avant travaux"   },
              { chiffre: "10+",   label: "Ans d'expérience",               sub: "Dans le Val-d'Oise (95)"          },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl p-6 text-center"
                style={{ background: i % 2 === 0 ? "var(--color-sky-soft)" : "white", border: "1px solid var(--color-border)" }}>
                <p className="font-bold mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-sky-dark)", fontSize: "2rem" }}>
                  {stat.chiffre}
                </p>
                <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-text-primary)" }}>{stat.label}</p>
                <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 py-16" style={{ background: "var(--color-bg-soft)" }} id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-bold mb-2 text-center" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.8rem" }}>
            Questions fréquentes — Plombier {city.name}
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "var(--color-text-muted)" }}>
            Tout ce que vous devez savoir avant de faire appel à un plombier à {city.name} ({city.cp}).
          </p>
          <div className="flex flex-col gap-4">
            {isGonesse ? (
              <>
                {FAQ_ITEMS.slice(0, 2).map((item, i) => (
                  <div key={i} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                    <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                      {item.q(city)}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.a(city)}</p>
                  </div>
                ))}
                <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                    Quelles zones couvrez-vous autour de Gonesse ?
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    Nous intervenons à Gonesse (95500) et dans les communes voisines du Val-d&apos;Oise, sans frais de déplacement supplémentaires :{" "}
                    <Link href="/Plombier-Garges-les-Gonesse/" className="underline text-blue-700">Garges-lès-Gonesse</Link>,{" "}
                    <Link href="/Plombier-Sarcelles/" className="underline text-blue-700">Sarcelles</Link>,{" "}
                    <Link href="/Plombier-Arnouville/" className="underline text-blue-700">Arnouville</Link>,{" "}
                    <Link href="/Plombier-Bonneuil-en-France/" className="underline text-blue-700">Bonneuil-en-France</Link>,{" "}
                    <Link href="/Plombier-Villepinte/" className="underline text-blue-700">Villepinte</Link>. Consultez notre{" "}
                    <Link href="/" className="underline text-blue-700">page d&apos;accueil</Link> pour voir toutes les villes couvertes dans le 95.
                  </p>
                </div>
                {FAQ_ITEMS.slice(3).map((item, i) => (
                  <div key={i + 3} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                    <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                      {item.q(city)}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.a(city)}</p>
                  </div>
                ))}
                <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                    Intervenez-vous pour les WC qui coulent à Gonesse ?
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    Oui, nos plombiers à Gonesse réparent tout type de WC défaillant : chasse d&apos;eau qui fuit, mécanisme de flotteur bloqué, joint de clapet usé ou WC suspendu défectueux. Intervention le jour même sur Gonesse (95500).{" "}
                    <Link href="/articles/wc-entretien-reparation" className="underline text-blue-700">
                      Guide : réparer un WC qui coule soi-même
                    </Link>
                  </p>
                </div>
              </>
            ) : isHerblay ? (
              <>
                {FAQ_ITEMS.slice(0, 2).map((item, i) => (
                  <div key={i} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                    <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                      {item.q(city)}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.a(city)}</p>
                  </div>
                ))}
                <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                    Quelles zones couvrez-vous autour de Herblay ?
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    Nous intervenons à Herblay (95220) et dans les communes voisines du Val-d&apos;Oise, sans frais de déplacement supplémentaires :{" "}
                    <Link href="/Plombier-Conflans-Sainte-Honorine/" className="underline text-blue-700">Conflans-Sainte-Honorine</Link>,{" "}
                    <Link href="/Plombier-Argenteuil/" className="underline text-blue-700">Argenteuil</Link>,{" "}
                    <Link href="/Plombier-Cergy/" className="underline text-blue-700">Cergy</Link>,{" "}
                    <Link href="/Plombier-Franconville/" className="underline text-blue-700">Franconville</Link>,{" "}
                    <Link href="/Plombier-Taverny/" className="underline text-blue-700">Taverny</Link>. Consultez notre{" "}
                    <Link href="/" className="underline text-blue-700">page d&apos;accueil</Link> pour voir toutes les villes couvertes dans le 95.
                  </p>
                </div>
                {FAQ_ITEMS.slice(3).map((item, i) => (
                  <div key={i + 3} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                    <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                      {item.q(city)}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.a(city)}</p>
                  </div>
                ))}
                <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                    Intervenez-vous pour les WC qui coulent à Herblay ?
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    Oui, nos plombiers à Herblay réparent tout type de WC défaillant : chasse d&apos;eau qui fuit, mécanisme de flotteur bloqué, joint de clapet usé ou WC suspendu défectueux. Intervention le jour même sur Herblay (95220).{" "}
                    <Link href="/articles/wc-entretien-reparation" className="underline text-blue-700">
                      Guide : réparer un WC qui coule soi-même →
                    </Link>
                  </p>
                </div>
              </>
            ) : isGoussainville ? (
              <>
                {FAQ_ITEMS.slice(0, 2).map((item, i) => (
                  <div key={i} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                    <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                      {item.q(city)}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.a(city)}</p>
                  </div>
                ))}
                <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                    Quelles zones couvrez-vous autour de Goussainville ?
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    Nous intervenons à Goussainville (95190) et dans les communes voisines du Val-d&apos;Oise, sans frais de déplacement supplémentaires :{" "}
                    <Link href="/Plombier-Gonesse/" className="underline text-blue-700">Gonesse</Link>,{" "}
                    <Link href="/Plombier-Sarcelles/" className="underline text-blue-700">Sarcelles</Link>,{" "}
                    <Link href="/Plombier-Villiers-le-Bel/" className="underline text-blue-700">Villiers-le-Bel</Link>,{" "}
                    <Link href="/Plombier-Garges-les-Gonesse/" className="underline text-blue-700">Garges-lès-Gonesse</Link>,{" "}
                    <Link href="/Plombier-Fosses/" className="underline text-blue-700">Fosses</Link>. Consultez notre{" "}
                    <Link href="/" className="underline text-blue-700">page d&apos;accueil</Link> pour voir toutes les villes couvertes dans le 95.
                  </p>
                </div>
                {FAQ_ITEMS.slice(3).map((item, i) => (
                  <div key={i + 3} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                    <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                      {item.q(city)}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.a(city)}</p>
                  </div>
                ))}
                <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                    Intervenez-vous pour les WC qui coulent à Goussainville ?
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    Oui, nos plombiers à Goussainville réparent tout type de WC défaillant : chasse d&apos;eau qui fuit, mécanisme de flotteur bloqué, joint de clapet usé ou WC suspendu défectueux. Intervention le jour même sur Goussainville (95190).{" "}
                    <Link href="/articles/wc-entretien-reparation" className="underline text-blue-700">
                      Guide : réparer un WC qui coule soi-même →
                    </Link>
                  </p>
                </div>
              </>
            ) : isSaintGratien ? (
              <>
                {FAQ_ITEMS.slice(0, 2).map((item, i) => (
                  <div key={i} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                    <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                      {item.q(city)}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.a(city)}</p>
                  </div>
                ))}
                <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                    Quelles zones couvrez-vous autour de Saint-Gratien ?
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    Nous intervenons à Saint-Gratien (95210) et dans les communes voisines du Val-d&apos;Oise, sans frais de déplacement supplémentaires :{" "}
                    <Link href="/Artisan-Plombier-Enghien-les-Bains/" className="underline text-blue-700">Enghien-les-Bains</Link>,{" "}
                    <Link href="/Depannage-plomberie-Soisy-sous-Montmorency/" className="underline text-blue-700">Soisy-sous-Montmorency</Link>,{" "}
                    <Link href="/Artisan-Plombier-Sannois/" className="underline text-blue-700">Sannois</Link>,{" "}
                    <Link href="/Plombier-a-Ermont/" className="underline text-blue-700">Ermont</Link>,{" "}
                    <Link href="/Artisan-Plombier-Deuil-la-Barre/" className="underline text-blue-700">Deuil-la-Barre</Link>. Consultez notre{" "}
                    <Link href="/" className="underline text-blue-700">page d&apos;accueil</Link> pour voir toutes les villes couvertes dans le 95.
                  </p>
                </div>
                {FAQ_ITEMS.slice(3).map((item, i) => (
                  <div key={i + 3} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                    <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                      {item.q(city)}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.a(city)}</p>
                  </div>
                ))}
                <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                    Intervenez-vous pour les WC qui coulent à Saint-Gratien ?
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    Oui, nos plombiers à Saint-Gratien réparent tout type de WC défaillant : chasse d&apos;eau qui fuit, mécanisme de flotteur bloqué, joint de clapet usé ou WC suspendu défectueux. Intervention le jour même sur Saint-Gratien (95210).{" "}
                    <Link href="/articles/wc-entretien-reparation" className="underline text-blue-700">
                      Guide : réparer un WC qui coule soi-même →
                    </Link>
                  </p>
                </div>
              </>
            ) : isErmont ? (
              <>
                {FAQ_ITEMS.slice(0, 2).map((item, i) => (
                  <div key={i} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                    <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                      {item.q(city)}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.a(city)}</p>
                  </div>
                ))}
                <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                    Quelles zones couvrez-vous autour de Ermont ?
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    Nous intervenons à Ermont (95120) et dans les communes voisines du Val-d&apos;Oise, sans frais de déplacement supplémentaires :{" "}
                    <Link href="/Artisan-Plombier-Saint-Gratien/" className="underline text-blue-700">Saint-Gratien</Link>, Sannois, Franconville,{" "}
                    <Link href="/Depannage-plomberie-Soisy-sous-Montmorency/" className="underline text-blue-700">Soisy-sous-Montmorency</Link>, Enghien-les-Bains. Consultez notre{" "}
                    <Link href="/" className="underline text-blue-700">page d&apos;accueil</Link> pour voir toutes les villes couvertes dans le 95.
                  </p>
                </div>
                {FAQ_ITEMS.slice(3).map((item, i) => (
                  <div key={i + 3} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                    <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                      {item.q(city)}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.a(city)}</p>
                  </div>
                ))}
                <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                    Intervenez-vous pour les WC qui coulent à Ermont ?
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    Oui, nos plombiers à Ermont réparent tout type de WC défaillant : chasse d&apos;eau qui fuit, mécanisme de flotteur bloqué, joint de clapet usé ou WC suspendu défectueux. Intervention le jour même sur Ermont (95120).{" "}
                    <Link href="/articles/wc-entretien-reparation" className="underline text-blue-700">
                      Guide : réparer un WC qui coule soi-même →
                    </Link>
                  </p>
                </div>
              </>
            ) : isMontmagny ? (
              <>
                {FAQ_ITEMS.slice(0, 2).map((item, i) => (
                  <div key={i} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                    <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                      {item.q(city)}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.a(city)}</p>
                  </div>
                ))}
                <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                    Quelles zones couvrez-vous autour de Montmagny ?
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    Nous intervenons à Montmagny (95360) et dans les communes voisines du Val-d&apos;Oise, sans frais de déplacement supplémentaires : Sarcelles, Enghien-les-Bains, Deuil-la-Barre, Groslay, Saint-Brice-sous-Forêt. Consultez notre{" "}
                    <Link href="/" className="underline text-blue-700">page d&apos;accueil</Link> pour voir toutes les villes couvertes dans le 95.
                  </p>
                </div>
                {FAQ_ITEMS.slice(3).map((item, i) => (
                  <div key={i + 3} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                    <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                      {item.q(city)}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.a(city)}</p>
                  </div>
                ))}
                <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                    Intervenez-vous pour les WC qui coulent à Montmagny ?
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    Oui, nos plombiers à Montmagny réparent tout type de WC défaillant : chasse d&apos;eau qui fuit, mécanisme de flotteur bloqué, joint de clapet usé ou WC suspendu défectueux. Intervention le jour même sur Montmagny (95360).{" "}
                    <Link href="/articles/wc-entretien-reparation" className="underline text-blue-700">
                      Guide : réparer un WC qui coule soi-même →
                    </Link>
                  </p>
                </div>
              </>
            ) : (
              FAQ_ITEMS.map((item, i) => (
                <div key={i} className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
                    {item.q(city)}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.a(city)}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ══ CONTACT CTA ════════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 py-16" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, var(--color-sky-dark) 0%, var(--color-sky) 60%, var(--color-sky-light) 100%)" }}>
            <div aria-hidden="true" className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(circle, white, transparent 70%)", transform: "translate(30%,-30%)" }} />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 p-8 md:p-12">
              <div className="flex-1 text-white">
                <h2 className="font-bold mb-4 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                  Besoin d&apos;un plombier<br />à {city.name} maintenant ?
                </h2>
                <p className="opacity-80 text-sm leading-relaxed mb-6 max-w-md">
                  Appelez-nous directement ou remplissez le formulaire. Un technicien vous répond immédiatement et se déplace sous 1h à {city.name} ({city.cp}).
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Devis gratuit et sans engagement",
                    "Tarif annoncé avant intervention",
                    "Facture et garantie décennale",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm opacity-90">
                      <CheckCircle size={14} color="white" aria-hidden="true" />{item}
                    </li>
                  ))}
                </ul>
                {isHerblay && (
                  <address className="mt-6 text-sm opacity-80 not-italic leading-relaxed">
                    Plombier 95 Service<br />
                    [Rue et numéro à compléter]<br />
                    95220 Herblay-sur-Seine
                  </address>
                )}
              </div>

              {/* Formulaire de contact */}
              <div className="w-full lg:w-96 flex-shrink-0">
                <form className="rounded-2xl p-6 flex flex-col gap-4"
                  style={{ background: "oklch(100% 0 0 / 0.12)", backdropFilter: "blur(10px)", border: "1px solid oklch(100% 0 0 / 0.2)" }}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <h3 className="font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>Demande de devis gratuit</h3>
                  {[
                    { id: "nom",       label: "Votre nom",         type: "text",  placeholder: "Jean Dupont" },
                    { id: "tel",       label: "Téléphone",          type: "tel",   placeholder: "06 00 00 00 00" },
                    { id: "adresse",   label: `Adresse à ${city.name}`, type: "text", placeholder: `Rue, ${city.cp} ${city.name}` },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="text-xs font-semibold text-white opacity-80 block mb-1.5">{field.label}</label>
                      <input id={field.id} type={field.type} placeholder={field.placeholder}
                        className="w-full rounded-xl py-2.5 px-4 text-sm outline-none"
                        style={{ background: "oklch(100% 0 0 / 0.15)", border: "1px solid oklch(100% 0 0 / 0.25)", color: "white", fontFamily: "var(--font-body)" }} />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="probleme" className="text-xs font-semibold text-white opacity-80 block mb-1.5">Description du problème</label>
                    <textarea id="probleme" rows={3} placeholder="Ex : fuite sous l'évier depuis ce matin..."
                      className="w-full rounded-xl py-2.5 px-4 text-sm outline-none resize-none"
                      style={{ background: "oklch(100% 0 0 / 0.15)", border: "1px solid oklch(100% 0 0 / 0.25)", color: "white", fontFamily: "var(--font-body)" }} />
                  </div>
                  <button type="submit"
                    className="w-full py-3 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5"
                    style={{ background: "white", color: "var(--color-sky-dark)", fontFamily: "var(--font-display)", boxShadow: "0 4px 14px oklch(0% 0 0 / 0.15)" }}>
                    Envoyer ma demande →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ LIENS INTERNES ══════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--color-text-soft)" }}>
            Guides pratiques pour les habitants de {city.name}
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Comment déboucher une canalisation",  href: "/articles/deboucher-canalisation-karcher" },
              { label: "Réparer une fuite d'eau",              href: "/articles/fuites-detecter-reparer" },
              { label: "Vider son chauffe-eau",               href: "/articles/vider-chauffe-eau-tutoriel" },
              { label: "Purger un radiateur",                  href: "/articles/purger-radiateur-fonte-tuto" },
              { label: "Réparer un WC qui coule",             href: "/articles/wc-entretien-reparation" },
              { label: "Tous nos guides plomberie",            href: "/articles" },
            ].map((link, i) => (
              <Link key={i} href={link.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5"
                style={{ background: "white", border: "1px solid var(--color-border)", color: "var(--color-sky-dark)" }}>
                {link.label} <ArrowUpRight size={13} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
