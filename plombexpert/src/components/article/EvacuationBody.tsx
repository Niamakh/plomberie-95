import { AlertTriangle, CheckCircle, Info, Lightbulb, Wrench } from "lucide-react"

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
function StepList({ steps }: { steps: { title: string; desc: string }[] }) {
  return (
    <ol className="flex flex-col gap-4 my-6">
      {steps.map((s, i) => (
        <li key={i} className="flex gap-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "var(--color-sky)", color: "white", fontFamily: "var(--font-display)" }}>{i + 1}</span>
          <div className="pt-1">
            <p className="font-semibold mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{s.title}</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{s.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
function ToolsList({ tools }: { tools: string[] }) {
  return (
    <div className="rounded-2xl p-5 my-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
      <div className="flex items-center gap-2 mb-4 text-sm font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>
        <Wrench size={15} style={{ color: "var(--color-sky-dark)" }} aria-hidden="true" />Matériel nécessaire
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {tools.map((t, i) => (
          <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-sky)" }} aria-hidden="true" />{t}
          </li>
        ))}
      </ul>
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
const h2: React.CSSProperties = { fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.55rem", fontWeight: 700, marginTop: "3rem", marginBottom: "1rem", scrollMarginTop: "5rem" }
const h3: React.CSSProperties = { fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.15rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }
const p: React.CSSProperties = { color: "var(--color-text-muted)", lineHeight: "1.8", marginBottom: "1rem", fontSize: "0.97rem" }

export default function EvacuationBody() {
  return (
    <article className="flex-1 min-w-0">
      <section>
        <p style={p}>Les canalisations d'évacuation sont la partie cachée de votre plomberie — on n'y pense que quand ça déborde ou que ça pue. Pourtant, un réseau bien entretenu ne présente pratiquement jamais de problème. Ce guide vous donne toutes les clés pour comprendre, entretenir et réparer votre réseau d'évacuation.</p>
      </section>

      <section>
        <h2 id="reseaux" style={h2}>EU, EP et eaux mixtes : comprendre les réseaux</h2>
        <p style={p}>En France, on distingue deux types de réseaux d'évacuation :</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
          {[
            { sigle: "EU — Eaux Usées", desc: "Eaux provenant des WC, lavabos, douches, éviers et lave-linge. Contiennent des matières organiques et des résidus détergents. Acheminées vers la station d'épuration.", color: "oklch(97% 0.05 20 / 0.3)", border: "oklch(85% 0.08 20 / 0.4)", text: "oklch(35% 0.12 20)" },
            { sigle: "EP — Eaux Pluviales", desc: "Eaux de pluie collectées par les gouttières et drains. En maison individuelle, elles sont généralement infiltrées dans le sol ou raccordées à un réseau séparé. Ne jamais y raccorder les EU.", color: "oklch(96% 0.06 235 / 0.3)", border: "oklch(85% 0.08 235 / 0.4)", text: "var(--color-sky-dark)" },
          ].map((r, i) => (
            <div key={i} className="rounded-2xl p-5" style={{ background: r.color, border: `1px solid ${r.border}` }}>
              <p className="font-bold text-sm mb-2" style={{ fontFamily: "var(--font-display)", color: r.text }}>{r.sigle}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{r.desc}</p>
            </div>
          ))}
        </div>
        <InfoBox>Dans les immeubles anciens, les réseaux EU et EP sont parfois mélangés (réseau unitaire). Renseignez-vous auprès de votre mairie avant tout travaux de raccordement.</InfoBox>
      </section>

      <section>
        <h2 id="composants" style={h2}>Les composants clés d'un réseau d'évacuation</h2>
        <div className="flex flex-col gap-3 my-5">
          {[
            { nom: "Le siphon", desc: "Piège à eau qui bloque les remontées de gaz d'égout. Présent sous chaque point d'eau (évier, lavabo, douche, WC)." },
            { nom: "La colonne de chute", desc: "Tuyau vertical Ø 100 mm (WC) ou Ø 40-50 mm (EU légères) qui relie tous les niveaux. Se prolonge en ventilation primaire sur le toit." },
            { nom: "La ventilation primaire", desc: "Prolongement de la colonne au-dessus de la toiture. Permet à l'air d'entrer et évite la mise en dépression qui viderait les siphons." },
            { nom: "Les regards de visite", desc: "Boîtes d'inspection enterrées permettant l'accès aux canalisations pour curage et inspection. Obligatoires tous les 15 m et à chaque changement de direction." },
            { nom: "Le branchement public", desc: "Raccordement entre votre réseau privé et le collecteur public, généralement à la limite de propriété." },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl p-4 flex gap-3" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <span className="flex-shrink-0 w-2 rounded-full self-stretch" style={{ background: "var(--color-sky)" }} aria-hidden="true" />
              <div>
                <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{c.nom}</p>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 id="regard" style={h2}>Le regard de visite : rôle et entretien</h2>
        <p style={p}>Le regard de visite (ou regard de branchement) est une boîte enterrée avec un couvercle amovible. Il permet d'accéder aux canalisations pour les inspecter, les déboucher ou contrôler leur état.</p>
        <h3 style={h3}>Localiser vos regards</h3>
        <p style={p}>En maison individuelle, les regards sont généralement situés : dans le jardin le long des murs, à la jonction entre deux canalisations, à la limite de propriété (regard de façade). Les couvercles sont en béton, PVC ou fonte — parfois recouverts de terre ou de végétation.</p>
        <StepList steps={[
          { title: "Ouvrir le regard", desc: "Utilisez un crochet ou un tournevis plat pour soulever le couvercle. Portez des gants — les bords peuvent être tranchants ou sales." },
          { title: "Inspecter visuellement", desc: "Regardez s'il y a des eaux stagnantes (bouchon en aval), des racines, des effondrements de paroi ou des dépôts importants." },
          { title: "Tester l'écoulement", desc: "Versez un seau d'eau dans le regard. L'eau doit s'écouler librement en moins de 30 secondes. Si elle stagne, la canalisation aval est bouchée." },
          { title: "Refermer et noter", desc: "Remettez le couvercle. Notez la localisation et l'état de chaque regard — utile pour les prochaines interventions ou si vous vendez le bien." },
        ]} />
      </section>

      <section>
        <h2 id="pente" style={h2}>La pente réglementaire : pourquoi c'est crucial</h2>
        <p style={p}>Une canalisation d'évacuation doit avoir une pente suffisante pour que l'eau entraîne les matières sans les laisser se déposer, mais pas trop forte pour éviter que l'eau parte avant les matières.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-5">
          {[
            { usage: "EU légères (lavabo, évier)", diam: "Ø 32-50 mm", pente: "2 à 3 cm/m" },
            { usage: "EU lourdes (douche, bain)", diam: "Ø 50-75 mm", pente: "1,5 à 2 cm/m" },
            { usage: "WC (eaux vannes)", diam: "Ø 100 mm", pente: "1 à 2 cm/m" },
          ].map((p2, i) => (
            <div key={i} className="rounded-2xl p-4 text-center" style={{ background: "var(--color-sky-soft)", border: "1px solid oklch(68% 0.14 235 / 0.2)" }}>
              <p className="font-bold text-sm mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-sky-dark)" }}>{p2.pente}</p>
              <p className="text-xs mb-1 font-semibold" style={{ color: "var(--color-text-primary)" }}>{p2.diam}</p>
              <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{p2.usage}</p>
            </div>
          ))}
        </div>
        <Warning>Une pente insuffisante accumule les dépôts et entraîne des bouchons chroniques. Une pente excessive (+ de 4 cm/m) crée des turbulences qui vident les siphons par aspiration. Les deux situations doivent être corrigées.</Warning>
      </section>

      <section>
        <h2 id="odeurs" style={h2}>Odeurs et gargouillis : causes et solutions</h2>
        <p style={p}>Les remontées d'odeurs d'égout sont souvent le signe d'un siphon à sec ou d'un problème de ventilation.</p>
        <div className="flex flex-col gap-3 my-5">
          {[
            { cause: "Siphon à sec (logement non utilisé)", solution: "Versez 1 litre d'eau dans chaque siphon (évier, lavabo, douche, WC). En cas d'absence prolongée, ajoutez un peu d'huile pour ralentir l'évaporation." },
            { cause: "Ventilation primaire obstruée", solution: "Vérifiez que le tuyau de ventilation qui dépasse du toit n'est pas bouché (feuilles, nid d'oiseau). Nettoyez ou faites intervenir un couvreur." },
            { cause: "Gargouillis après utilisation", solution: "La colonne est mise en dépression par un débit trop fort. Installez un clapet anti-vide (aérateur) sur la canalisation concernée — pièce à 10-25 €." },
            { cause: "Odeurs persistantes malgré siphons pleins", solution: "Le joint de pied de WC ou un joint d'évacuation peut fuir. Inspectez les raccords visibles et le joint d'étanchéité entre WC et sol." },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl p-5" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <p className="font-semibold text-sm mb-2" style={{ fontFamily: "var(--font-display)", color: "oklch(46% 0.14 60)" }}>⚠ {item.cause}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>→ {item.solution}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 id="curage" style={h2}>Curage et débouchage des canalisations</h2>
        <p style={p}>Le curage est un nettoyage en profondeur des canalisations, plus complet qu'un simple débouchage. Il élimine les dépôts de graisse, de calcaire et de matières organiques accumulés sur les parois.</p>
        <h3 style={h3}>Curage mécanique (furet)</h3>
        <p style={p}>Pour les bouchons accessibles (dans les 10 premiers mètres), le furet de plombier est l'outil principal. Voir notre guide complet sur le débouchage.</p>
        <h3 style={h3}>Hydrocurage (haute pression)</h3>
        <p style={p}>L'hydrocurage utilise un jet d'eau à haute pression (100 à 400 bars) pour décrasser les parois et éliminer les bouchons profonds. C'est la méthode la plus efficace pour les canalisations enterrées.</p>
        <ToolsList tools={["Nettoyeur haute pression (min. 100 bars) + tuyau débouchage", "Furet de plombier (8-15 m)", "Gants, bottes et lunettes de protection", "Seau et chiffons"]} />
        <Tip>Un hydrocurage préventif tous les 2-3 ans sur vos canalisations enterrées évite 90 % des bouchons chroniques. Prestation professionnelle : 150 à 400 € selon la longueur.</Tip>
      </section>

      <section>
        <h2 id="reparer" style={h2}>Réparer une fuite sur une canalisation d'évacuation</h2>
        <p style={p}>Les fuites d'évacuation ne sont pas sous pression permanente, mais elles causent des dommages par humidité chronique. Voici les réparations courantes :</p>
        <div className="flex flex-col gap-4 my-5">
          {[
            { type: "Joint de bague de serre (PVC)", reparation: "Desserrez le collier de serrage, faites glisser l'ancien joint en caoutchouc et remplacez-le. Joints vendus en lot pour 3-8 €.", difficulte: "Débutant" },
            { type: "Fissure sur tuyau PVC apparent", reparation: "Coupez le tronçon endommagé avec un coupe-tube. Posez un manchon de raccordement avec joint intégré. Ancrez sans colle pour permettre la dilatation.", difficulte: "Intermédiaire" },
            { type: "Joint d'emboîtement en fonte", reparation: "Calfeutrage au ciment de fonte ou remplacement du joint souple. Nécessite un nettoyage complet de l'emboîtement avant pose.", difficulte: "Avancé" },
            { type: "Fissure sur canalisation enterrée", reparation: "Localisation par caméra d'inspection, puis manchonnage ou remplacement du tronçon. Intervention professionnelle conseillée.", difficulte: "Pro" },
          ].map((r, i) => (
            <div key={i} className="rounded-2xl p-5" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{r.type}</p>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }}>{r.difficulte}</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{r.reparation}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 id="materiaux" style={h2}>PVC, fonte ou grès : reconnaître les matériaux</h2>
        <div className="flex flex-col gap-3 my-5">
          {[
            { mat: "PVC gris (évacuation)", caract: "Léger, gris clair, raccordé par emboîtement ou collage. Standard dans toutes les installations depuis 1970. Facile à couper et réparer.", duree: "50+ ans" },
            { mat: "Fonte", caract: "Lourd, noir ou gris foncé, joint plombé ou souple. Présent dans les immeubles anciens (avant 1960). Durable mais difficile à modifier.", duree: "100+ ans" },
            { mat: "Grès", caract: "Brun-beige, très dur, utilisé pour les canalisations enterrées avant 1970. Résistant mais cassant aux chocs. Raccordement par manchon souple.", duree: "100+ ans" },
          ].map((m, i) => (
            <div key={i} className="rounded-2xl p-4 flex gap-4" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{m.mat}</p>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "oklch(94% 0.10 145 / 0.3)", color: "oklch(38% 0.15 145)" }}>{m.duree}</span>
                </div>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{m.caract}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 id="entretien" style={h2}>Calendrier d'entretien recommandé</h2>
        <div className="flex flex-col gap-3 my-5">
          {[
            { freq: "Toutes les semaines", action: "Versez de l'eau bouillante dans les siphons de cuisine pour dissoudre la graisse accumulée." },
            { freq: "Tous les mois", action: "Nettoyage enzymatique préventif dans les éviers et douches (produit liquide, laisser agir une nuit)." },
            { freq: "Tous les 6 mois", action: "Inspectez visuellement les regards de visite accessibles. Vérifiez l'écoulement avec un seau d'eau." },
            { freq: "Tous les 2-3 ans", action: "Hydrocurage préventif des canalisations enterrées, surtout si arbres à proximité (racines)." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl p-4" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <span className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap" style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }}>{item.freq}</span>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.action}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 id="faq" style={h2}>Questions fréquentes</h2>
        <div className="flex flex-col gap-4 mt-4">
          <FaqItem question="Peut-on raccorder les eaux pluviales aux eaux usées ?" answer="Non, c'est interdit par la réglementation française (loi sur l'eau). Les eaux pluviales doivent être infiltrées dans le sol ou raccordées à un réseau séparé. Un raccordement EU/EP entraîne une surcharge des stations d'épuration et peut provoquer des débordements en cas de pluie forte." />
          <FaqItem question="Qui est responsable des canalisations enterrées jusqu'à la rue ?" answer="En France, les canalisations privées (dans votre propriété) sont entièrement à votre charge, y compris le branchement jusqu'au collecteur public à la limite de la propriété. Le réseau public commence au regard de façade ou au collecteur." />
          <FaqItem question="Mon regard déborde après chaque pluie forte, que faire ?" answer="C'est souvent le signe d'un réseau EU/EP mal séparé (les eaux pluviales arrivent dans le réseau EU), d'un branchement sous-dimensionné, ou d'un collecteur public saturé. Faites réaliser une inspection par caméra pour localiser le problème." />
          <FaqItem question="Peut-on utiliser des produits chimiques dans une fosse septique ?" answer="Non, les produits chimiques déboucheurs (soude, acide) tuent les bactéries indispensables au fonctionnement de la fosse septique. Utilisez uniquement des produits enzymatiques ou biologiques compatibles avec l'assainissement non collectif." />
        </div>
      </section>
    </article>
  )
}
