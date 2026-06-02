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
          <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(55% 0.15 145)" }} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

const h2: React.CSSProperties = { fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.55rem", fontWeight: 700, marginTop: "3rem", marginBottom: "1rem", scrollMarginTop: "5rem" }
const h3: React.CSSProperties = { fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.15rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }
const p: React.CSSProperties = { color: "var(--color-text-muted)", lineHeight: "1.8", marginBottom: "1rem", fontSize: "0.97rem" }

export default function RobinetterieBody() {
  return (
    <article className="flex-1 min-w-0">

      {/* INTRO */}
      <section>
        <p style={p}>
          En France, un robinet qui goutte représente en moyenne <strong>40 à 120 litres d'eau gaspillés par jour</strong>,
          soit jusqu'à 3 600 litres par mois sur votre facture. Pourtant, dans 90 % des cas, la réparation
          prend moins de 30 minutes et coûte moins de 5 €.
        </p>
        <p style={p}>
          Ce guide couvre toutes les interventions courantes sur la robinetterie : identifier le type de
          robinet, changer un joint, remplacer une cartouche, débloquer un mécanisme grippé ou remplacer
          un robinet complet.
        </p>
        <Warning>
          Avant toute intervention, fermez toujours la vanne d'arrêt sous l'évier ou le robinet concerné.
          Si vous n'en avez pas, fermez la vanne générale de l'appartement. Ne travaillez jamais sur un
          circuit sous pression.
        </Warning>
      </section>

      {/* TYPES */}
      <section>
        <h2 id="types-robinets" style={h2}>Les différents types de robinets</h2>
        <p style={p}>
          Identifier votre robinet est la première étape, car chaque type a son propre mécanisme et
          ses propres pièces de rechange.
        </p>
        <div className="flex flex-col gap-4 my-5">
          {[
            {
              type: "Robinet à deux manettes (à joint)",
              desc: "Le modèle classique avec une manette pour l'eau chaude, une pour l'eau froide. Fonctionne avec des joints en caoutchouc qui s'écrasent contre un siège. Très répandu dans les anciennes installations.",
              panne: "Joint usé → goutte à la fermeture",
            },
            {
              type: "Mitigeur à levier (à cartouche céramique)",
              desc: "Une seule manette qui mélange chaud et froid. Le cœur du mécanisme est une cartouche céramique. Très courant dans les installations modernes (depuis 1990).",
              panne: "Cartouche usée → fuite à la base ou au bec",
            },
            {
              type: "Robinet thermostatique",
              desc: "Maintient une température constante grâce à un thermostat intégré. Souvent utilisé en douche. Plus complexe à réparer.",
              panne: "Cartouche thermostatique → eau pas à la bonne température",
            },
            {
              type: "Robinet à bille (ball valve)",
              desc: "Présent surtout dans les cuisines américaines ou les installations récentes. Une bille percée pivote pour ouvrir/fermer. Peu de pièces, très fiable.",
              panne: "Joint torique de bille → fuite au col",
            },
          ].map((r, i) => (
            <div key={i} className="rounded-2xl p-5" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <p className="font-semibold mb-1 text-sm" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{r.type}</p>
              <p className="text-sm mb-2" style={{ color: "var(--color-text-muted)" }}>{r.desc}</p>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ background: "oklch(97% 0.05 60 / 0.5)", color: "oklch(40% 0.14 60)" }}>
                ⚠ {r.panne}
              </span>
            </div>
          ))}
        </div>
        <Tip>
          Prenez le modèle ou la marque de votre robinet en photo avant d'aller acheter les pièces.
          Les cartouches et joints ne sont pas universels — chaque fabricant a ses propres dimensions.
        </Tip>
      </section>

      {/* GOUTTE */}
      <section>
        <h2 id="robinet-goutte" style={h2}>Robinet à deux manettes qui goutte</h2>
        <p style={p}>
          Un robinet à manettes qui goutte même fermé a presque toujours un joint usé. Ce joint en
          caoutchouc s'écrase contre un siège métallique pour bloquer l'eau — avec le temps, il
          se deforme et ne fait plus l'étanchéité.
        </p>

        <ToolsList tools={["Clé plate ou clé à molette", "Tournevis cruciforme et plat", "Joints de robineterie (kit assortiment)", "Graisse silicone", "Chiffon et seau"]} />

        <StepList steps={[
          { title: "Couper l'eau", desc: "Fermez la vanne d'arrêt sous l'évier (sens horaire). Ouvrez le robinet pour vider la pression résiduelle." },
          { title: "Démonter la manette", desc: "Retirez le cache décoratif (souvent un petit bouton H/C ou un cache rond). Dévissez la vis de fixation (cruciforme) et retirez la manette en tirant vers le haut." },
          { title: "Dévisser le chapeau", desc: "Avec une clé plate, dévissez le chapeau hexagonal qui maintient le mécanisme. Tournez dans le sens antihoraire." },
          { title: "Sortir le mécanisme", desc: "Retirez la tige en tournant et en tirant vers le haut. En bas de la tige se trouve le joint circulaire maintenu par une vis." },
          { title: "Remplacer le joint", desc: "Dévissez la vis en bout de tige, retirez l'ancien joint et posez le nouveau de même diamètre. Appliquez une fine couche de graisse silicone sur le joint neuf." },
          { title: "Remonter et tester", desc: "Remontez dans l'ordre inverse. Rouvrez l'eau doucement et vérifiez l'étanchéité. La fermeture doit être franche sans forcer." },
        ]} />

        <InfoBox>
          Si le joint est en bon état mais que le robinet continue de goutter, le siège (la surface
          métallique sur lequel s'appuie le joint) est peut-être rayé. Un outil appelé "araseur de
          siège" permet de rectifier la surface — sinon, le remplacement du robinet est conseillé.
        </InfoBox>
      </section>

      {/* JOINT */}
      <section>
        <h2 id="changer-joint" style={h2}>Changer un joint torique (fuite au col du robinet)</h2>
        <p style={p}>
          Si l'eau suinte <strong>autour de la tige</strong> (au col du robinet, pas au bec), ce
          sont les joints toriques qui sont usés. Ces petits anneaux en caoutchouc assurent
          l'étanchéité de la tige en rotation.
        </p>
        <StepList steps={[
          { title: "Coupez l'eau et démontez le robinet", desc: "Même procédure que pour le joint de clapet : manette → chapeau → tige." },
          { title: "Repérez les joints toriques", desc: "Sur la tige, vous verrez un ou deux anneaux circulaires en rainure. Ce sont les joints toriques. Notez leur position (haut et bas de tige)." },
          { title: "Retirez les anciens joints", desc: "Utilisez une petite pointe ou un tournevis plat pour les extraire délicatement sans rayer la tige." },
          { title: "Installez les nouveaux", desc: "Glissez les nouveaux joints toriques du même diamètre (mesurez avec un pied à coulisse ou comparez dans un kit assortiment). Graissez légèrement au silicone." },
          { title: "Remontez et testez", desc: "Après remontage, vérifiez qu'il n'y a plus de suintement autour du col, robinet ouvert et fermé." },
        ]} />
        <Tip>
          Un kit assortiment de joints toriques (100 à 200 pièces en différentes tailles) coûte
          entre 5 et 10 € et permet de tout réparer dans la maison. Un investissement minimal.
        </Tip>
      </section>

      {/* MITIGEUR */}
      <section>
        <h2 id="mitigeur-fuit" style={h2}>Mitigeur qui fuit : diagnostiquer la panne</h2>
        <p style={p}>
          Sur un mitigeur, le type de fuite indique directement quelle pièce remplacer :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-5">
          {[
            { lieu: "Fuite au bec", cause: "Cartouche céramique usée", solution: "Remplacer la cartouche" },
            { lieu: "Fuite à la base (col)", cause: "Joint torique usé", solution: "Remplacer les joints toriques du col" },
            { lieu: "Fuite sous l'évier", cause: "Flexible d'alimentation défectueux ou raccord desserré", solution: "Resserrer ou remplacer le flexible" },
          ].map((d, i) => (
            <div key={i} className="rounded-2xl p-5 flex flex-col gap-2" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--color-sky-dark)" }}>{d.lieu}</span>
              <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>{d.cause}</p>
              <span className="text-xs px-2 py-0.5 rounded-full w-fit" style={{ background: "oklch(94% 0.10 145 / 0.3)", color: "oklch(38% 0.15 145)" }}>
                ✓ {d.solution}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CARTOUCHE */}
      <section>
        <h2 id="cartouche" style={h2}>Remplacer la cartouche d'un mitigeur</h2>
        <p style={p}>
          La cartouche céramique est le cœur du mitigeur. Elle dure en moyenne 10 à 15 ans. Son
          remplacement est simple mais demande d'identifier exactement le modèle.
        </p>

        <ToolsList tools={["Tournevis cruciforme", "Clé à molette ou clé de 24", "Cartouche de remplacement (même marque et taille)", "Graisse silicone", "Chiffon"]} />

        <StepList steps={[
          { title: "Notez la marque et le diamètre", desc: "Avant de démonter, repérez la marque du robinet (Grohe, Hansgrohe, Jacob Delafon, Roca…). Le diamètre de la cartouche (35, 40 ou 46 mm) est indiqué sur l'ancienne cartouche ou dans la notice." },
          { title: "Coupez l'eau et dévissez la manette", desc: "Retirez le cache décoratif, dévissez la vis sous la manette, retirez la manette. Vous verrez un écrou de chapeau." },
          { title: "Retirez l'écrou de chapeau", desc: "Dévissez l'écrou hexagonal (souvent 24 mm) dans le sens antihoraire. La cartouche doit apparaître." },
          { title: "Notez l'orientation de la cartouche", desc: "IMPORTANT : avant de sortir la cartouche, notez ou photographiez sa position. La cartouche a une orientation précise (encoche de positionnement). Une mauvaise orientation inverse le chaud et le froid." },
          { title: "Remplacez la cartouche", desc: "Sortez l'ancienne, glissez la nouvelle dans le même sens. Graissez légèrement le joint d'étanchéité sur le pourtour." },
          { title: "Remontez et testez", desc: "Remontez l'écrou, la manette et le cache. Rouvrez l'eau doucement. Vérifiez que l'eau est bien froide à gauche et chaude à droite, et qu'il n'y a pas de fuite." },
        ]} />

        <Warning>
          Achetez impérativement la cartouche correspondant à votre marque et votre diamètre. Une
          cartouche universelle bon marché tient rarement plus d'un an. Préférez une cartouche d'origine
          ou une cartouche de qualité équivalente (Sedal, Kerox).
        </Warning>
      </section>

      {/* DUR À TOURNER */}
      <section>
        <h2 id="robinet-dur" style={h2}>Robinet dur à tourner ou grippé</h2>
        <p style={p}>
          Un robinet de coupure (sous évier, derrière les WC) qu'on n'a pas manœuvré depuis des
          années peut devenir très difficile à tourner, voire complètement bloqué par le calcaire
          ou l'oxydation.
        </p>
        <CheckList items={[
          "Appliquez quelques gouttes de dégrippant (WD-40) sur la tige et attendez 15 minutes",
          "Utilisez une clé à molette pour exercer un couple progressif — jamais de force brutale",
          "Si le robinet reste bloqué, alternez chaud (sèche-cheveux) et froid (chiffon humide) sur le corps du robinet pour dilater/contracter le métal",
          "Une fois débloqué, exercez plusieurs allers-retours complets pour redistribuer la graisse",
          "Appliquez de la graisse silicone sur la tige pour éviter le re-grippage",
          "Si la tige tourne mais n'arrête pas l'eau, le clapet interne est usé → remplacement conseillé",
        ]} />
        <Tip>
          Pour éviter ce problème, manœuvrez tous vos robinets de coupure (vannes d'arrêt sous évier,
          vanne générale) une fois par an. Un aller-retour complet suffit à prévenir le grippage.
        </Tip>
      </section>

      {/* REMPLACER */}
      <section>
        <h2 id="remplacer-robinet" style={h2}>Remplacer un robinet complet</h2>
        <p style={p}>
          Quand les réparations ne sont plus suffisantes (siège rayé, corps fissuré, modèle ancien
          sans pièces), il faut remplacer le robinet entier. Voici comment procéder pour un robinet
          de lavabo ou d'évier standard.
        </p>

        <ToolsList tools={["Clé de lavabo (clé à fourche longue)", "Clé à molette", "Ruban téflon", "Joint de bonde (si nécessaire)", "Seau et chiffons", "Silicone sanitaire (optionnel)"]} />

        <StepList steps={[
          { title: "Coupez l'eau et débranchez les flexibles", desc: "Fermez les vannes d'arrêt sous le lavabo. Placez un seau sous les raccords. Dévissez les flexibles d'alimentation (chaud et froid) du dessous du robinet." },
          { title: "Dévissez l'écrou de maintien", desc: "Sous le lavabo, un (ou deux) grand écrou maintient le robinet sur le plateau. Utilisez une clé de lavabo (longue et fine) pour accéder. Tournez dans le sens antihoraire." },
          { title: "Retirez l'ancien robinet", desc: "Soulevez le robinet par le dessus. Nettoyez la surface du lavabo de tout résidu de joint ou de silicone." },
          { title: "Posez le nouveau robinet", desc: "Insérez le nouveau robinet dans le trou. Glissez le joint d'étanchéité fourni (ou appliquez un cordon de silicone sanitaire). Vissez l'écrou de maintien par dessous sans trop forcer." },
          { title: "Raccordez les flexibles", desc: "Reconnectez les flexibles d'alimentation. Enroulez du ruban téflon sur les filetages si les flexibles sont en filetage métal. Serrez à la main puis 1/4 de tour supplémentaire à la clé." },
          { title: "Testez l'étanchéité", desc: "Ouvrez les vannes d'arrêt doucement. Testez le robinet. Inspectez chaque raccord avec un essuie-tout pour détecter la moindre goutte." },
        ]} />
      </section>

      {/* SENS */}
      <section>
        <h2 id="sens-fermeture" style={h2}>Dans quel sens ferme-t-on un robinet ?</h2>
        <p style={p}>
          La règle universelle en plomberie s'appelle <strong>« righty tighty, lefty loosy »</strong> — à
          droite on serre (on ferme), à gauche on desserre (on ouvre).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
          <div className="rounded-2xl p-5 flex items-center gap-4" style={{ background: "oklch(96% 0.08 145 / 0.25)", border: "1px solid oklch(85% 0.10 145 / 0.4)" }}>
            <span className="text-3xl" aria-hidden="true">↩</span>
            <div>
              <p className="font-bold text-sm" style={{ color: "oklch(35% 0.15 145)" }}>Sens antihoraire (gauche)</p>
              <p className="text-xs" style={{ color: "oklch(42% 0.10 145)" }}>OUVRE le robinet — augmente le débit</p>
            </div>
          </div>
          <div className="rounded-2xl p-5 flex items-center gap-4" style={{ background: "oklch(97% 0.05 20 / 0.3)", border: "1px solid oklch(85% 0.08 20 / 0.4)" }}>
            <span className="text-3xl" aria-hidden="true">↪</span>
            <div>
              <p className="font-bold text-sm" style={{ color: "oklch(35% 0.16 20)" }}>Sens horaire (droite)</p>
              <p className="text-xs" style={{ color: "oklch(42% 0.10 20)" }}>FERME le robinet — arrête le débit</p>
            </div>
          </div>
        </div>
        <p style={p}>
          Cette règle s'applique à <strong>tous les robinets à rotation</strong> : robinets à manette,
          vannes d'arrêt, robinets de radiateur, vannes de compteur. <strong>Exception :</strong> les
          robinets à quart de tour (robinets à boisseau sphérique) : la poignée parallèle au tuyau =
          ouvert, perpendiculaire = fermé.
        </p>
        <Tip>
          Sur les vannes d'arrêt sous évier qui n'ont pas de repère, une astuce : ouvrez l'eau et tournez
          doucement — si le débit augmente, vous tournez dans le bon sens pour ouvrir.
        </Tip>
      </section>

      {/* ENTRETIEN */}
      <section>
        <h2 id="entretien" style={h2}>Entretien préventif de la robinetterie</h2>
        <p style={p}>
          Un entretien régulier évite l'essentiel des pannes et prolonge la durée de vie de vos robinets.
        </p>
        <div className="flex flex-col gap-3 my-5">
          {[
            { freq: "Toutes les semaines", action: "Nettoyez les aérateurs (embouts du bec) avec un chiffon. Un citron coupé frotté sur les dépôts calcaires fonctionne très bien." },
            { freq: "Tous les 6 mois", action: "Dévissez et nettoyez l'aérateur (filtre en bout de bec) dans du vinaigre blanc. Le tartre le bouche progressivement et réduit le débit." },
            { freq: "Tous les ans", action: "Manœuvrez toutes les vannes d'arrêt du logement (sous évier, WC, vanne générale) pour éviter le grippage." },
            { freq: "Tous les 10-15 ans", action: "Envisagez le remplacement de la cartouche d'un mitigeur même sans panne visible. Prévention vaut mieux que dégât des eaux." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl p-4" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <span className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap" style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }}>
                {item.freq}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.action}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 id="faq" style={h2}>Questions fréquentes</h2>
        <div className="flex flex-col gap-4 mt-4">
          <FaqItem
            question="Combien coûte le remplacement d'une cartouche de mitigeur ?"
            answer="Une cartouche d'origine coûte entre 15 et 45 € selon la marque (Grohe, Hansgrohe, Roca…). Une cartouche compatible de qualité (Sedal, Kerox) coûte 8 à 20 €. La main-d'œuvre d'un plombier pour ce remplacement est de 60 à 120 €. En DIY, vous économisez l'essentiel."
          />
          <FaqItem
            question="Mon mitigeur a de l'eau froide à gauche et chaude à droite, est-ce normal ?"
            answer="Non, la norme est chaude à gauche, froide à droite. Si c'est inversé, la cartouche a été montée à 180° dans le mauvais sens. Il suffit de rouvrir le robinet, retirer la cartouche et la réorienter correctement."
          />
          <FaqItem
            question="La pression d'eau est faible seulement à un robinet, pourquoi ?"
            answer="L'aérateur (filtre en bout de bec) est probablement colmaté par le calcaire. Dévissez-le (sens antihoraire), rincez-le dans du vinaigre blanc 30 minutes, puis réinstallez. Si le débit reste faible, vérifiez que la vanne d'arrêt sous l'évier est bien entièrement ouverte."
          />
          <FaqItem
            question="Peut-on réparer un robinet de marque inconnue ?"
            answer="Oui, en utilisant des pièces standards. Mesurez le diamètre de la cartouche (35, 40 ou 46 mm), la hauteur et le type de connexion. Des cartouches et joints universels de qualité (Sedal) existent pour la plupart des dimensions courantes."
          />
          <FaqItem
            question="Mon robinet de jardin ne coupe plus l'eau complètement, que faire ?"
            answer="Le siège ou le joint du robinet extérieur est usé (eau calcaire, gel hivernal…). Commencez par le remplacement du joint de clapet. Si le problème persiste, le siège est endommagé et le robinet doit être remplacé — un robinet de jardin coûte entre 15 et 40 € et se monte facilement."
          />
          <FaqItem
            question="Quelle est la durée de vie d'un robinet ?"
            answer="Un robinet de qualité dure 15 à 25 ans avec entretien. La cartouche d'un mitigeur se change en général tous les 10-15 ans. Les joints de robinets à manettes durent 5 à 10 ans selon la qualité de l'eau (eau calcaire = usure plus rapide)."
          />
        </div>
      </section>

    </article>
  )
}
