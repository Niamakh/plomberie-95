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
      {steps.map((step, idx) => (
        <li key={idx} className="flex gap-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "var(--color-sky)", color: "white", fontFamily: "var(--font-display)" }}>
            {idx + 1}
          </span>
          <div className="pt-1">
            <p className="font-semibold mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{step.title}</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{step.desc}</p>
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
        <Wrench size={15} style={{ color: "var(--color-sky-dark)" }} aria-hidden="true" />
        Matériel nécessaire
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {tools.map((tool, i) => (
          <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-sky)" }} aria-hidden="true" />
            {tool}
          </li>
        ))}
      </ul>
    </div>
  )
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2 my-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
          <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(55% 0.15 145)" }} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
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

const h2: React.CSSProperties = { fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.55rem", fontWeight: 700, marginTop: "3rem", marginBottom: "1rem", scrollMarginTop: "5rem" }
const h3: React.CSSProperties = { fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.15rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }
const p: React.CSSProperties = { color: "var(--color-text-muted)", lineHeight: "1.8", marginBottom: "1rem", fontSize: "0.97rem" }

export default function JointsBody() {
  return (
    <article className="flex-1 min-w-0">

      <section>
        <p style={p}>
          En plomberie, le joint est la pièce la plus petite et la plus critique : c'est lui qui assure
          l'étanchéité entre deux éléments. Un joint inadapté peut tenir quelques heures ou provoquer
          une fuite immédiate. Pourtant, le choix est simple une fois qu'on connaît les règles.
        </p>
        <InfoBox>
          Ce guide couvre les 5 types de joints les plus courants en plomberie domestique. Pour les
          joints de dilatation thermique ou les joints industriels haute pression, consultez un spécialiste.
        </InfoBox>
      </section>

      {/* POURQUOI */}
      <section>
        <h2 id="pourquoi-ca-compte" style={h2}>Pourquoi le choix du joint est crucial</h2>
        <p style={p}>
          Chaque matériau de joint a des limites précises de température et de pression. Un joint
          caoutchouc posé là où il faut un joint fibre peut se déformer sous la chaleur et créer
          une fuite en quelques heures. Inversement, un joint fibre trop rigide sur un raccord
          flexible peut casser.
        </p>
        <div className="grid grid-cols-3 gap-3 my-5">
          {[
            { param: "Température", question: "Eau froide, chaude ou vapeur ?" },
            { param: "Pression", question: "Circuit basse ou haute pression ?" },
            { param: "Matériau du raccord", question: "Métal/métal ou avec flexible ?" },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl p-4 text-center" style={{ background: "var(--color-sky-soft)", border: "1px solid oklch(68% 0.14 235 / 0.2)" }}>
              <p className="font-bold text-sm mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-sky-dark)" }}>{c.param}</p>
              <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{c.question}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOINT FIBRE */}
      <section>
        <h2 id="joint-fibre" style={h2}>1. Le joint fibre</h2>
        <p style={p}>
          Le joint fibre est un disque plat rigide, beige ou gris, en fibre de cellulose imprégnée
          ou en fibre d'aramide (kevlar). Il est conçu pour les <strong>raccords métal contre métal</strong> sous pression.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
          <div className="rounded-2xl p-4" style={{ background: "oklch(96% 0.08 145 / 0.25)", border: "1px solid oklch(85% 0.10 145 / 0.4)" }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "oklch(38% 0.15 145)" }}>✅ Utiliser pour</p>
            <ul className="flex flex-col gap-1">
              {["Raccords de compteur d'eau", "Raccords de chauffe-eau", "Raccords de radiateur (union)", "Robinets d'arrêt sur tuyau cuivre/acier", "Tout raccord métal sur métal sous pression"].map((u, i) => (
                <li key={i} className="text-xs" style={{ color: "oklch(30% 0.08 145)" }}>• {u}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-4" style={{ background: "oklch(97% 0.05 20 / 0.3)", border: "1px solid oklch(85% 0.08 20 / 0.4)" }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "oklch(40% 0.16 20)" }}>❌ Ne pas utiliser pour</p>
            <ul className="flex flex-col gap-1">
              {["Raccords avec filetage plastique (PVC)", "Joints de cartouche de robinet", "Zones soumises à vibrations", "Raccords démontés souvent (le joint se comprime)"].map((u, i) => (
                <li key={i} className="text-xs" style={{ color: "oklch(32% 0.08 20)" }}>• {u}</li>
              ))}
            </ul>
          </div>
        </div>
        <p style={p}><strong>Températures supportées :</strong> jusqu'à 120°C (fibre standard) ou 200°C (fibre aramide).<br />
        <strong>Pression :</strong> jusqu'à 16 bars (standard).<br />
        <strong>Prix :</strong> 0,20 à 1 € l'unité, ou 3 à 8 € le kit assorti.</p>
      </section>

      {/* JOINT CAOUTCHOUC */}
      <section>
        <h2 id="joint-caoutchouc" style={h2}>2. Le joint caoutchouc (EPDM)</h2>
        <p style={p}>
          Le joint caoutchouc (souvent en EPDM — éthylène propylène diène monomère) est souple et
          élastique. Il s'adapte aux légères irrégularités de surface et est idéal pour les raccords
          qui peuvent être démontés régulièrement.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
          <div className="rounded-2xl p-4" style={{ background: "oklch(96% 0.08 145 / 0.25)", border: "1px solid oklch(85% 0.10 145 / 0.4)" }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "oklch(38% 0.15 145)" }}>✅ Utiliser pour</p>
            <ul className="flex flex-col gap-1">
              {["Flexibles d'alimentation (lave-linge, robinets)", "Raccords de siphon et évacuation", "Raccords de douche et douchette", "Tout raccord démonté régulièrement", "Raccords basse pression"].map((u, i) => (
                <li key={i} className="text-xs" style={{ color: "oklch(30% 0.08 145)" }}>• {u}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-4" style={{ background: "oklch(97% 0.05 20 / 0.3)", border: "1px solid oklch(85% 0.08 20 / 0.4)" }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "oklch(40% 0.16 20)" }}>❌ Ne pas utiliser pour</p>
            <ul className="flex flex-col gap-1">
              {["Eau très chaude (> 90°C) : se ramollit", "Raccords métal/métal haute pression", "Circuits d'huile ou de solvants", "Vapeur d'eau"].map((u, i) => (
                <li key={i} className="text-xs" style={{ color: "oklch(32% 0.08 20)" }}>• {u}</li>
              ))}
            </ul>
          </div>
        </div>
        <p style={p}><strong>Températures supportées :</strong> -40°C à +90°C (EPDM standard).<br />
        <strong>Pression :</strong> jusqu'à 10 bars.<br />
        <strong>Prix :</strong> 0,10 à 0,50 € l'unité.</p>
        <Tip>
          Pour les flexibles de lave-linge, utilisez toujours un joint EPDM neuf à chaque remplacement
          du flexible. C'est la cause n°1 de fuites sur ces raccords.
        </Tip>
      </section>

      {/* PTFE */}
      <section>
        <h2 id="joint-ptfe" style={h2}>3. Le ruban PTFE (téflon)</h2>
        <p style={p}>
          Le ruban PTFE (polytétrafluoroéthylène), aussi appelé ruban téflon ou ruban d'étanchéité,
          n'est pas un joint à proprement parler mais un matériau d'étanchéité enroulé sur les
          filetages. Il comble les micro-espaces entre filets.
        </p>
        <h3 style={h3}>Comment bien utiliser le ruban téflon</h3>
        <StepList steps={[
          { title: "Nettoyez le filetage", desc: "Essuyez le filetage mâle à l'essuie-tout. Il doit être propre et sec. Retirez tout ancien ruban ou produit d'étanchéité." },
          { title: "Partez de la première spire", desc: "Maintenez le début du ruban sur le premier filet avec votre pouce. L'enroulement doit se faire dans le sens qui va se serrer quand vous visserez (sens horaire sur un filetage standard)." },
          { title: "Enroulez en chevauchant", desc: "Faites 3 à 5 tours en tirant légèrement sur le ruban pour qu'il pénètre dans les filets. Chaque tour doit se chevaucher à mi-largeur." },
          { title: "Terminez et vissez", desc: "Déchirez le ruban et lissez la fin avec votre doigt. Vissez normalement — le ruban va se comprimer dans les filets et assurer l'étanchéité." },
        ]} />
        <Warning>
          Ne pas utiliser le ruban téflon sur des raccords à joint plat (raccords avec épaulement qui
          s'appuient face contre face). Le téflon est uniquement pour les filetages coniques ou
          cylindriques. Mal utilisé, il peut empêcher le serrage correct.
        </Warning>
        <p style={p}><strong>Utilisation :</strong> tous les filetages mâles (sauf raccords à face plane).<br />
        <strong>Prix :</strong> 1 à 3 € le rouleau de 12 m.</p>
      </section>

      {/* SILICONE */}
      <section>
        <h2 id="joint-silicone" style={h2}>4. Le silicone sanitaire</h2>
        <p style={p}>
          Le silicone sanitaire est utilisé pour l'étanchéité des joints de finition : pourtour de
          baignoire, douche, évier. Il n'est pas destiné aux raccords en pression — c'est un joint
          de surface.
        </p>
        <CheckList items={[
          "Utiliser uniquement du silicone spécial sanitaire (résistant à l'eau chaude et à l'humidité)",
          "La surface doit être propre, sèche et dégraissée (alcool ménager)",
          "Appliquer en cordon continu sans interruption",
          "Lisser immédiatement avec un doigt mouillé ou un outil de lissage",
          "Temps de séchage : 24 h minimum avant mise en eau",
          "Durée de vie : 5 à 10 ans — à refaire quand le silicone noircit ou se décolle",
        ]} />
        <Tip>
          Pour retirer l'ancien silicone, utilisez un décapant silicone (3 à 6 €) et une lame de
          rasoir. Toujours dégraisser à l'alcool avant de reposer le nouveau joint.
        </Tip>
      </section>

      {/* TORIQUE */}
      <section>
        <h2 id="joint-torique" style={h2}>5. Le joint torique (O-ring)</h2>
        <p style={p}>
          Le joint torique est un anneau circulaire en section ronde. Il assure l'étanchéité par
          compression dans une gorge prévue à cet effet. On le trouve sur les robinets (tige),
          les cartouches, les raccords rapides et de nombreux appareils électroménagers.
        </p>
        <p style={p}>
          <strong>Identifier la bonne taille :</strong> un joint torique se définit par deux dimensions —
          le diamètre intérieur (di) et le diamètre du toron (d). Exemple : un joint 10×2 a 10 mm
          de diamètre intérieur et un toron de 2 mm. Mesurez l'ancien joint avec un pied à coulisse
          ou comparez dans un kit assortiment (100-200 pièces, 5-10 €).
        </p>
        <InfoBox>
          La matière du joint torique compte : NBR (nitrile) pour l'eau froide et chaude jusqu'à 100°C,
          EPDM pour l'eau chaude et les résistances chimiques, Viton pour les hautes températures
          et les huiles. En plomberie domestique, le NBR couvre 95 % des besoins.
        </InfoBox>
      </section>

      {/* TABLEAU */}
      <section>
        <h2 id="tableau-comparatif" style={h2}>Tableau comparatif : choisir en un coup d'œil</h2>
        <div className="overflow-x-auto my-5 rounded-2xl" style={{ border: "1px solid var(--color-border)" }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: "var(--color-sky-soft)" }}>
                {["Type", "Rigidité", "Temp. max", "Pression", "Usage principal"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-bold text-xs uppercase tracking-wider" style={{ color: "var(--color-sky-dark)", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Fibre", "Rigide", "120°C", "16 bars", "Raccords métal/métal"],
                ["Caoutchouc EPDM", "Souple", "90°C", "10 bars", "Flexibles, siphons"],
                ["PTFE (ruban)", "Semi-rigide", "260°C", "16 bars", "Filetages"],
                ["Silicone sanitaire", "Souple", "200°C", "0 (surface)", "Joints de finition"],
                ["Torique (O-ring)", "Souple", "100°C (NBR)", "Variable", "Robinets, cartouches"],
              ].map((row, i) => (
                <tr key={i} style={{ borderTop: "1px solid var(--color-border-soft)", background: i % 2 === 0 ? "white" : "oklch(99% 0.005 240)" }}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-sm" style={{ color: j === 0 ? "var(--color-text-primary)" : "var(--color-text-muted)", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* POSER */}
      <section>
        <h2 id="poser-joint" style={h2}>Bien poser un joint plat : les règles d'or</h2>
        <StepList steps={[
          { title: "Toujours remplacer le joint usé", desc: "Ne remettez jamais un joint déformé ou aplati. Un joint comprimé ne retrouve pas sa forme initiale." },
          { title: "Choisir le bon diamètre", desc: "Le joint doit s'ajuster parfaitement à l'intérieur du raccord sans dépasser ni être trop petit. Emportez l'ancien joint en magasin pour comparaison." },
          { title: "Graisser légèrement si souple", desc: "Sur les joints toriques et les joints caoutchouc, appliquer une fine couche de graisse silicone facilite le montage et prolonge la durée de vie." },
          { title: "Serrer sans excès", desc: "Sur les raccords en plastique (PVC, PE), ne jamais serrer à la clé après l'étanchéité. Sur le métal, 1 à 1,5 tour après serrage à la main." },
          { title: "Tester sous pression", desc: "Après remontage, rouvrez l'eau lentement. Séchez tous les raccords. Attendez 5 minutes et passez un essuie-tout sur chaque joint. La moindre trace d'humidité révèle une fuite." },
        ]} />
      </section>

      {/* ERREURS */}
      <section>
        <h2 id="erreurs" style={h2}>Les erreurs les plus fréquentes</h2>
        <div className="flex flex-col gap-3 my-5">
          {[
            { erreur: "Poser deux joints l'un sur l'autre", consequence: "Le double épaisseur empêche le serrage correct et crée une fuite paradoxale." },
            { erreur: "Utiliser du téflon sur un raccord à joint plat", consequence: "Le téflon empêche les faces de se toucher — la compression ne se fait pas." },
            { erreur: "Serrer trop fort sur le PVC", consequence: "Le plastique se fissure ou les filets s'arrachent, rendant le raccord inutilisable." },
            { erreur: "Réutiliser un joint fibre comprimé", consequence: "Un joint fibre écrasé ne reprend pas sa forme — il fuira à coup sûr." },
            { erreur: "Acheter un joint au diamètre approximatif", consequence: "Un joint trop petit sort de sa gorge, un joint trop grand ne se comprime pas correctement." },
          ].map((e, i) => (
            <div key={i} className="rounded-2xl p-4" style={{ background: "white", border: "1px solid oklch(75% 0.12 20 / 0.3)" }}>
              <p className="font-semibold text-sm mb-1 flex items-center gap-2" style={{ color: "oklch(35% 0.14 20)" }}>
                <span aria-hidden="true">✕</span> {e.erreur}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{e.consequence}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 id="faq" style={h2}>Questions fréquentes</h2>
        <div className="flex flex-col gap-4 mt-4">
          <FaqItem question="Un joint caoutchouc peut-il remplacer un joint fibre ?" answer="Non, pas sur un raccord métal haute pression. Le caoutchouc se déforme sous la chaleur et la pression — utilisez toujours le matériau adapté à l'usage." />
          <FaqItem question="Quelle épaisseur de joint fibre choisir ?" answer="En plomberie standard, l'épaisseur 1 mm est la plus courante. Pour les raccords à forte pression ou les surfaces légèrement irrégulières, 1,5 mm est préférable. L'épaisseur 2 mm est réservée aux raccords industriels." />
          <FaqItem question="Le ruban téflon se dégrade-t-il avec le temps ?" answer="Le PTFE est chimiquement inerte et très stable. Il ne se dégrade pas avec le temps dans les conditions normales de plomberie. Une fois posé correctement, il assure l'étanchéité indéfiniment." />
          <FaqItem question="Peut-on utiliser de la pâte à joint à la place du ruban téflon ?" answer="Oui, la pâte d'étanchéité (Loctite 55, Fermit…) remplace avantageusement le ruban sur les filetages — elle comble mieux les filets irréguliers et se nettoie plus facilement. Préférez-la pour les installations permanentes." />
          <FaqItem question="Mon joint silicone noircit, faut-il le refaire ?" answer="Le noircissement est dû aux moisissures (humidité chronique). Nettoyez d'abord avec un produit antifongique. S'il ne part pas ou si le joint se décolle, décapez-le entièrement et refaites-le avec un silicone sanitaire antifongique." />
        </div>
      </section>

    </article>
  )
}
