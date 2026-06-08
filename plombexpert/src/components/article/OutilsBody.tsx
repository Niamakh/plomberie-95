import { AlertTriangle, CheckCircle, Info, Lightbulb, ShoppingCart } from "lucide-react"

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-2xl p-5 my-6" style={{ background: "var(--color-sky-soft)", border: "1px solid oklch(68% 0.14 235 / 0.2)" }}>
      <Lightbulb size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--color-sky-dark)" }} aria-hidden="true" />
      <p className="text-sm leading-relaxed" style={{ color: "var(--color-sky-dark)" }}>{children}</p>
    </div>
  )
}
function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-2xl p-5 my-6" style={{ background: "oklch(97% 0.05 60 / 0.6)", border: "1px solid oklch(75% 0.12 60 / 0.35)" }}>
      <AlertTriangle size={18} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(46% 0.14 60)" }} aria-hidden="true" />
      <p className="text-sm leading-relaxed" style={{ color: "oklch(38% 0.12 60)" }}>{children}</p>
    </div>
  )
}
function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-2xl p-5 my-6" style={{ background: "oklch(97% 0.01 240)", border: "1px solid var(--color-border)" }}>
      <Info size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--color-text-muted)" }} aria-hidden="true" />
      <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{children}</p>
    </div>
  )
}
function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
      <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>{question}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{answer}</p>
    </div>
  )
}
function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2 my-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
          <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(55% 0.15 145)" }} aria-hidden="true" />{item}
        </li>
      ))}
    </ul>
  )
}

interface Outil {
  num: number
  nom: string
  usage: string
  prix: string
  conseil?: string
  niveau: "Base" | "Intermédiaire" | "Pro"
}

const NIVEAU_STYLE: Record<string, { bg: string; color: string }> = {
  Base:          { bg: "oklch(94% 0.10 145 / 0.35)", color: "oklch(42% 0.15 145)" },
  Intermédiaire: { bg: "oklch(94% 0.10 65 / 0.35)",  color: "oklch(46% 0.14 60)"  },
  Pro:           { bg: "oklch(92% 0.10 20 / 0.35)",  color: "oklch(44% 0.16 20)"  },
}

function OutilCard({ outil }: { outil: Outil }) {
  const s = NIVEAU_STYLE[outil.niveau]
  return (
    <div className="rounded-2xl p-5 flex gap-4" style={{ background: "white", border: "1px solid var(--color-border)" }}>
      <span className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm"
        style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)", fontFamily: "var(--font-display)" }}>
        {outil.num}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
          <p className="font-bold text-sm" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{outil.nom}</p>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="text-[0.65rem] px-2 py-0.5 rounded-full font-bold" style={{ background: s.bg, color: s.color }}>{outil.niveau}</span>
            <span className="text-xs font-bold" style={{ color: "var(--color-sky-dark)" }}>{outil.prix}</span>
          </div>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{outil.usage}</p>
        {outil.conseil && (
          <p className="text-xs mt-2 italic" style={{ color: "var(--color-sky-dark)" }}>💡 {outil.conseil}</p>
        )}
      </div>
    </div>
  )
}

const OUTILS_BASE: Outil[] = [
  { num: 1,  nom: "Clé à molette réglable (250 mm)", usage: "L'outil universel de la plomberie. S'adapte à toutes les tailles d'écrous et de raccords. Indispensable pour serrer ou desserrer les unions, robinets et raccords filetés.", prix: "8–20 €", conseil: "Prenez une marque correcte (Facom, Stanley) — une mauvaise clé ronde les écrous.", niveau: "Base" },
  { num: 2,  nom: "Pince multiprise (type Knipex ou Gripp)", usage: "Pince à mâchoires réglables qui saisit les tubes, raccords et écrous ronds. Plus polyvalente que la clé à molette pour les pièces cylindriques.", prix: "12–35 €", conseil: "La Knipex Cobra est le standard du métier, mais une pince générique suffit pour un usage occasionnel.", niveau: "Base" },
  { num: 3,  nom: "Tournevis plat et cruciforme (jeu)", usage: "Indispensable pour démonter les caches, serrer les borniers, accéder aux mécanismes de WC et retirer les bouchons de purge.", prix: "5–15 €", conseil: "Préférez un jeu avec isolation pour travailler au voisinage des fils électriques.", niveau: "Base" },
  { num: 4,  nom: "Clé de purgeur de radiateur", usage: "Petite clé carrée (5 ou 6 mm) pour ouvrir la vis de purge des radiateurs. Coûte 1 € et évite de laisser des poches d'air coûteuses.", prix: "1–3 €", conseil: "Achetez-en deux — elles se perdent facilement.", niveau: "Base" },
  { num: 5,  nom: "Ventouse à soufflet (WC et évier)", usage: "La ventouse à soufflet en caoutchouc dur crée une pression/dépression pour déloger les bouchons. Modèle évier plat + modèle WC à cloche allongée.", prix: "5–15 €", conseil: "Ayez les deux types : la ventouse plate pour éviers/lavabos, la ventouse à soufflet pour WC.", niveau: "Base" },
  { num: 6,  nom: "Ruban PTFE (téflon)", usage: "Ruban blanc à enrouler sur les filetages pour assurer l'étanchéité. S'utilise sur tous les raccords filetés gaz et eau.", prix: "1–3 €", conseil: "Enroulez dans le sens du filetage (sens horaire vu de face), 3 à 5 tours suffisent.", niveau: "Base" },
  { num: 7,  nom: "Mètre ruban (3 m)", usage: "Pour mesurer les distances entre raccords, la longueur de tuyaux à couper ou l'espace disponible pour un équipement.", prix: "4–10 €", niveau: "Base" },
]

const OUTILS_INTER: Outil[] = [
  { num: 8,  nom: "Coupe-tube PVC à cloche (Ø 32–110 mm)", usage: "Coupe les tuyaux PVC d'évacuation proprement et perpendiculairement, sans éclats ni sciure. Bien plus précis qu'une scie.", prix: "10–25 €", conseil: "Vérifiez la compatibilité avec le diamètre de vos tuyaux avant d'acheter.", niveau: "Intermédiaire" },
  { num: 9,  nom: "Coupe-tube à roulette (cuivre, Ø 10–35 mm)", usage: "Outil indispensable pour couper les tubes cuivre à la bonne longueur. Donne une coupe nette et droite, sans déformation du tube.", prix: "8–20 €", conseil: "Après la coupe, ébavurez toujours l'intérieur du tube avec l'outil intégré ou un alésoir.", niveau: "Intermédiaire" },
  { num: 10, nom: "Furet de plombier (8–15 m)", usage: "Câble spiralé pour déboucher les canalisations inaccessibles à la ventouse. Indispensable pour les bouchons profonds dans les éviers, douches et colonnes.", prix: "15–40 €", conseil: "Portez des gants et protégez vos vêtements — le furet remonte avec les dépôts.", niveau: "Intermédiaire" },
  { num: 11, nom: "Scie à métaux fine + lame bi-métal", usage: "Pour couper les tubes cuivre, acier ou PVC rigide en endroit confiné. La lame bi-métal coupe proprement tous les métaux.", prix: "8–15 €", conseil: "Mouillez légèrement la lame pour couper les tubes cuivre — ça réduit les bavures.", niveau: "Intermédiaire" },
  { num: 12, nom: "Clé de siphon (crochet déboucheur)", usage: "Outil fin et flexible pour retirer les accumulations de cheveux et résidus dans les siphons et bondes de douche sans démontage.", prix: "3–8 €", niveau: "Intermédiaire" },
  { num: 13, nom: "Clés plates et à fourche (jeu 8–24 mm)", usage: "Pour les raccords filetés standard (robinets, compteur d'eau, flexible d'alimentation). Plus précis que la clé à molette sur des tailles fixes.", prix: "10–25 €", niveau: "Intermédiaire" },
  { num: 14, nom: "Détecteur de fuite (colorant)", usage: "Pastilles ou liquide colorant à verser dans le réservoir WC pour détecter les fuites silencieuses vers la cuvette. Diagnostic immédiat.", prix: "2–5 €", conseil: "Peut être remplacé par du colorant alimentaire acheté en supermarché.", niveau: "Intermédiaire" },
]

const OUTILS_PRO: Outil[] = [
  { num: 15, nom: "Sertisseur à main (PER / multicouche)", usage: "Permet d'assembler les raccords à compression sur tubes PER et multicouches sans soudure ni colle. Connexion rapide et fiable pour tous les circuits d'eau chaude/froide.", prix: "40–120 €", conseil: "Vérifiez que le sertisseur est compatible avec votre marque de raccords (Henco, Giacomini, etc.).", niveau: "Pro" },
  { num: 16, nom: "Chalumeau à gaz + kit brasure (cuivre)", usage: "Pour souder les raccords en cuivre. Nécessite une cartouche butane/propane et de la soudure (étain-argent pour l'eau potable).", prix: "25–60 €", conseil: "Utilisez obligatoirement de la soudure sans plomb pour tout circuit d'eau potable.", niveau: "Pro" },
  { num: 17, nom: "Thermomètre infrarouge", usage: "Mesure la température des tuyaux et radiateurs sans contact. Utile pour détecter les zones froides (air dans radiateur), vérifier la T° du chauffe-eau.", prix: "15–35 €", niveau: "Pro" },
  { num: 18, nom: "Furet électrique (15–30 m)", usage: "Version motorisée du furet pour déboucher les canalisations profondes et rebelles. Idéal pour les colonnes d'immeuble ou canalisations enterrées accessibles.", prix: "80–200 €", conseil: "Location possible en GSB : 25–40 €/jour — plus rentable pour un usage ponctuel.", niveau: "Pro" },
  { num: 19, nom: "Manomètre de pression", usage: "Se branche sur un robinet de purge ou un circuit pour mesurer précisément la pression. Indispensable pour régler un groupe de sécurité chauffe-eau ou un circuit de chauffage.", prix: "10–30 €", niveau: "Pro" },
  { num: 20, nom: "Caméra d'inspection (endoscope)", usage: "Caméra flexible avec éclairage LED pour inspecter l'intérieur des canalisations, détecter les fissures, bouchons ou racines sans ouvrir les murs.", prix: "30–150 €", conseil: "Les modèles à 30–50 € avec connexion smartphone suffisent pour un usage DIY.", niveau: "Pro" },
]

const h2: React.CSSProperties = { fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.55rem", fontWeight: 700, marginTop: "3rem", marginBottom: "1rem", scrollMarginTop: "5rem" }
const h3: React.CSSProperties = { fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.15rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }
const p: React.CSSProperties = { color: "var(--color-text-muted)", lineHeight: "1.8", marginBottom: "1rem", fontSize: "0.97rem" }

export default function OutilsBody() {
  return (
    <article className="flex-1 min-w-0">
      <section>
        <p style={p}>Avoir les bons outils fait la différence entre une réparation réussie en 20 minutes et une après-midi frustrante qui finit en appel de plombier. Ce guide classe les 20 outils par niveau de pratique, avec les prix indicatifs et les conseils d'achat pour chaque catégorie.</p>
      </section>

      {/* ── Récapitulatif budget ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        {[
          { label: "Boîte de base",   outils: "7 outils",  budget: "≈ 35–70 €",  desc: "Couvre 90 % des interventions courantes",   color: "oklch(94% 0.10 145 / 0.3)", border: "oklch(80% 0.10 145 / 0.4)", text: "oklch(42% 0.15 145)" },
          { label: "Niveau intermédiaire", outils: "7 outils", budget: "≈ 55–130 €", desc: "Pour travaux de remplacement et débouchage", color: "oklch(94% 0.10 65 / 0.3)",  border: "oklch(80% 0.10 65 / 0.4)",  text: "oklch(46% 0.14 60)" },
          { label: "Niveau semi-pro",  outils: "6 outils",  budget: "≈ 200–595 €", desc: "Installations complètes et diagnostics pro",  color: "oklch(92% 0.10 20 / 0.3)",  border: "oklch(80% 0.10 20 / 0.4)",  text: "oklch(44% 0.16 20)" },
        ].map((b, i) => (
          <div key={i} className="rounded-2xl p-4" style={{ background: b.color, border: `1px solid ${b.border}` }}>
            <p className="font-bold text-sm mb-1" style={{ fontFamily: "var(--font-display)", color: b.text }}>{b.label}</p>
            <p className="font-bold text-xl mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{b.budget}</p>
            <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{b.outils} · {b.desc}</p>
          </div>
        ))}
      </div>

      {/* ── Boîte de base ── */}
      <section>
        <h2 id="boite-base" style={h2}>La boîte de base — 7 outils essentiels (≤ 70 €)</h2>
        <p style={p}>Ces 7 outils vous permettent d'intervenir sur 90 % des pannes courantes : joint qui fuit, siphon bouché, robinet qui goutte, radiateur à purger. C'est le kit minimum à avoir chez soi.</p>
        <div className="flex flex-col gap-3 mt-5">
          {OUTILS_BASE.map((o) => <OutilCard key={o.num} outil={o} />)}
        </div>
        <Tip>Achetez ces 7 outils en une seule fois plutôt qu'un par un — vous économiserez sur les frais de livraison et vous serez prêt pour la prochaine panne sans devoir commander dans l'urgence.</Tip>
      </section>

      {/* ── Étanchéité ── */}
      <section>
        <h2 id="etancheite" style={h2}>Produits d'étanchéité indispensables</h2>
        <p style={p}>Au-delà des outils, ces consommables sont à avoir en stock permanent. Une fuite à minuit ne peut pas attendre un magasin.</p>
        <div className="flex flex-col gap-3 my-4">
          {[
            { produit: "Ruban PTFE (téflon)", utilisation: "Étanchéité des raccords filetés eau et gaz. Enrouler 3–5 tours dans le sens du filetage.", prix: "1–2 €" },
            { produit: "Pâte à joint (Loctite 55 ou Tangit)", utilisation: "Alternative au téflon pour les raccords filetés. Plus simple à appliquer sur les filets irréguliers.", prix: "5–10 €" },
            { produit: "Silicone sanitaire blanc", utilisation: "Étanchéité périmétrique des baignoires, receveurs de douche et vasques. Résiste à l'humidité et aux moisissures.", prix: "4–8 €" },
            { produit: "Assortiment de joints plats (caoutchouc)", utilisation: "Remplacement des joints dans les robinets, flexibles et raccords. Indispensable dans toute boîte à outils.", prix: "3–6 €" },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl p-4 flex items-start gap-3" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <span className="flex-shrink-0 w-2 rounded-full self-stretch" style={{ background: "var(--color-sky)" }} aria-hidden="true" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{item.produit}</p>
                  <span className="text-xs font-bold" style={{ color: "var(--color-sky-dark)" }}>{item.prix}</span>
                </div>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{item.utilisation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Coupe & assemblage ── */}
      <section>
        <h2 id="coupe-soudure" style={h2}>Outils de coupe et d'assemblage</h2>
        <p style={p}>Dès que vous devez remplacer un tronçon de tuyauterie ou poser un nouveau raccord, ces outils deviennent indispensables.</p>
        <div className="flex flex-col gap-3 mt-5">
          {OUTILS_INTER.slice(0, 4).map((o) => <OutilCard key={o.num} outil={o} />)}
        </div>
        <Warning>Ne coupez jamais un tube cuivre sous pression — fermez toujours l'arrivée d'eau et purgez la canalisation avant toute coupe.</Warning>
      </section>

      {/* ── Débouchage ── */}
      <section>
        <h2 id="debouchage" style={h2}>Outils de débouchage</h2>
        <p style={p}>Un bouchon peut surgir n'importe quand. Ces outils vous évitent d'appeler un déboucheur d'urgence facturé 200–400 €.</p>
        <div className="flex flex-col gap-3 mt-5">
          {OUTILS_INTER.slice(4, 6).map((o) => <OutilCard key={o.num} outil={o} />)}
        </div>
        <InfoBox>Pour les bouchons de cuisine (graisse), commencez toujours par de l'eau bouillante + bicarbonate avant de sortir le furet — c'est souvent suffisant et ça prend 2 minutes.</InfoBox>
      </section>

      {/* ── Mesure ── */}
      <section>
        <h2 id="mesure" style={h2}>Mesure et diagnostic</h2>
        <p style={p}>Mesurer avant de couper ou d'acheter est la règle d'or du plombier. Ces outils évitent les mauvaises surprises.</p>
        <div className="flex flex-col gap-3 mt-5">
          {[OUTILS_BASE[6], OUTILS_INTER[6]].map((o) => <OutilCard key={o.num} outil={o} />)}
        </div>
      </section>

      {/* ── Serrage ── */}
      <section>
        <h2 id="serrage" style={h2}>Serrage et clés spéciales</h2>
        <div className="flex flex-col gap-3 mt-5">
          {OUTILS_INTER.slice(5, 7).map((o) => <OutilCard key={o.num} outil={o} />)}
        </div>
        <Tip>Pour ne pas rayer le chromé des robinets et mitigeurs lors du serrage, protégez les mâchoires de votre clé avec un chiffon ou du ruban adhésif épais.</Tip>
      </section>

      {/* ── Semi-pro ── */}
      <section>
        <h2 id="semi-pro" style={h2}>Niveau semi-pro — 6 outils pour aller plus loin</h2>
        <p style={p}>Ces outils sont destinés aux bricoleurs qui souhaitent réaliser des installations complètes : pose de tube PER, soudure cuivre, diagnostic approfondi. Certains peuvent être loués ponctuellement.</p>
        <div className="flex flex-col gap-3 mt-5">
          {OUTILS_PRO.map((o) => <OutilCard key={o.num} outil={o} />)}
        </div>
        <Warning>La soudure au chalumeau (outil n°16) sur les circuits d'eau potable exige l'utilisation exclusive de soudure sans plomb (étain-argent). La soudure au plomb est interdite sur l'eau potable depuis 1995 en France.</Warning>
      </section>

      {/* ── Où acheter ── */}
      <section>
        <h2 id="ou-acheter" style={h2}>Où acheter son matériel de plomberie ?</h2>
        <div className="flex flex-col gap-3 my-5">
          {[
            { enseigne: "GSB (Leroy Merlin, Castorama, Brico Dépôt)", avantage: "Large choix, disponibilité immédiate, conseil en rayon. Idéal pour les outils courants et les consommables.", inconvenient: "Prix parfois supérieurs aux négoces. Qualité variable selon les marques MDD." },
            { enseigne: "Négoce plomberie (Point P, Saint-Gobain, Rexel)", avantage: "Matériel professionnel, meilleure qualité de raccords et tubes. Prix compétitifs à l'achat en volume.", inconvenient: "Compte professionnel parfois requis. Moins pratique pour les particuliers." },
            { enseigne: "Amazon / sites spécialisés (Plomberie Online, etc.)", avantage: "Très bon rapport qualité/prix sur les outils (Knipex, Rothenberger, etc.), livraison rapide.", inconvenient: "Impossible de voir l'outil en main avant achat. Attention aux contrefaçons." },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl p-5" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <div className="flex items-center gap-2 mb-2">
                <ShoppingCart size={14} style={{ color: "var(--color-sky-dark)" }} aria-hidden="true" />
                <p className="font-bold text-sm" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{item.enseigne}</p>
              </div>
              <p className="text-sm mb-1" style={{ color: "oklch(42% 0.15 145)" }}>✓ {item.avantage}</p>
              <p className="text-sm" style={{ color: "oklch(46% 0.14 60)" }}>⚠ {item.inconvenient}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Entretien outils ── */}
      <section>
        <h2 id="entretien-outils" style={h2}>Entretien et rangement des outils</h2>
        <p style={p}>Un outil bien entretenu dure 10 à 20 ans. Un outil rouillé ou mal rangé devient inutilisable en moins de 2 ans.</p>
        <CheckList items={[
          "Nettoyez les outils après chaque utilisation plomberie — l'humidité rouille les parties métalliques",
          "Séchez bien les pinces et clés avant de les ranger — ne les laissez jamais mouillés dans la boîte",
          "Huilez légèrement les parties mobiles (pinces multiprise, coupe-tube) avec de l'huile WD-40 2 fois par an",
          "Rangez les furets proprement en spirale pour éviter de les emmêler",
          "Stockez les consommables (joints, téflon, silicone) dans un sac hermétique — la chaleur dégrade les caoutchoucs",
          "Remplacez une lame de scie à métaux dès qu'elle patine — une lame usée déchire plus qu'elle ne coupe",
        ]} />
      </section>

      {/* ── FAQ ── */}
      <section>
        <h2 id="faq" style={h2}>Questions fréquentes</h2>
        <div className="flex flex-col gap-4 mt-4">
          <FaqItem question="Quel est l'outil de plomberie le plus indispensable à avoir chez soi ?" answer="La clé à molette réglable est l'outil n°1. Elle intervient dans 80 % des opérations courantes (serrage/desserrage de raccords, robinets, siphons). Si vous n'avez qu'un seul outil, c'est celui-là." />
          <FaqItem question="Vaut-il mieux acheter des outils bon marché ou investir dans du matériel pro ?" answer="Pour un usage DIY, le milieu de gamme suffit largement. Évitez l'entrée de gamme discount (risque de casse ou de mauvaise finition) mais ne payez pas le prix pro. Les marques comme Stanley, Irwin ou Rothenberger offrent un excellent rapport qualité/prix pour les particuliers." />
          <FaqItem question="Puis-je me passer d'un coupe-tube et utiliser une scie à la place ?" answer="Techniquement oui, mais une scie donne une coupe moins nette et parfois biseautée. Sur le cuivre, une coupe de travers empêche le raccord de s'emboîter correctement et provoque des fuites. Le coupe-tube à roulette garantit une coupe parfaitement perpendiculaire." />
          <FaqItem question="Faut-il un permis ou une certification pour faire sa propre plomberie ?" answer="En France, les particuliers peuvent réaliser leurs propres travaux de plomberie intérieure sans certification. En revanche, le raccordement au réseau public de distribution d'eau et les installations gaz restent réservés aux professionnels agréés." />
          <FaqItem question="Comment choisir la bonne taille de coupe-tube ?" answer="Vérifiez le diamètre extérieur de vos tubes. Pour le cuivre courant (eau chaude/froide), les diamètres 12, 14 et 16 mm sont les plus fréquents. Pour l'évacuation PVC, on travaille en 32, 40, 50 ou 100 mm. Choisissez un coupe-tube couvrant vos diamètres les plus utilisés." />
        </div>
      </section>
    </article>
  )
}
