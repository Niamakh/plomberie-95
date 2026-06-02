import { AlertTriangle, CheckCircle, Info, Lightbulb, Wrench } from "lucide-react"

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 rounded-2xl p-5 my-6"
      style={{ background: "var(--color-sky-soft)", border: "1px solid oklch(68% 0.14 235 / 0.2)" }}
    >
      <Lightbulb size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--color-sky-dark)" }} aria-hidden="true" />
      <p className="text-sm leading-relaxed" style={{ color: "var(--color-sky-dark)" }}>{children}</p>
    </div>
  )
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 rounded-2xl p-5 my-6"
      style={{ background: "oklch(97% 0.05 60 / 0.6)", border: "1px solid oklch(75% 0.12 60 / 0.35)" }}
    >
      <AlertTriangle size={18} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(46% 0.14 60)" }} aria-hidden="true" />
      <p className="text-sm leading-relaxed" style={{ color: "oklch(38% 0.12 60)" }}>{children}</p>
    </div>
  )
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 rounded-2xl p-5 my-6"
      style={{ background: "oklch(97% 0.01 240)", border: "1px solid var(--color-border)" }}
    >
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
          <span
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
            style={{ background: "var(--color-sky)", color: "white", fontFamily: "var(--font-display)" }}
          >
            {idx + 1}
          </span>
          <div className="pt-1">
            <p className="font-semibold mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>
              {step.title}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              {step.desc}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function ToolsList({ tools }: { tools: string[] }) {
  return (
    <div className="rounded-2xl p-5 my-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
      <div
        className="flex items-center gap-2 mb-4 text-sm font-bold"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
      >
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
      <h3
        className="font-bold mb-2"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}
      >
        {question}
      </h3>
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

const h2: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  color: "var(--color-text-primary)",
  fontSize: "1.55rem",
  fontWeight: 700,
  marginTop: "3rem",
  marginBottom: "1rem",
  scrollMarginTop: "5rem",
}

const h3: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  color: "var(--color-text-primary)",
  fontSize: "1.15rem",
  fontWeight: 700,
  marginTop: "2rem",
  marginBottom: "0.75rem",
}

const p: React.CSSProperties = {
  color: "var(--color-text-muted)",
  lineHeight: "1.8",
  marginBottom: "1rem",
  fontSize: "0.97rem",
}

export default function ChauffeEauBody() {
  return (
    <article className="flex-1 min-w-0">

      {/* INTRODUCTION */}
      <section>
        <p style={p}>
          Votre eau chaude est tiède, vous sentez une légère odeur souffrée au robinet, ou un
          plombier vous a conseillé de changer l'anode de votre ballon ? Dans tous ces cas, la
          vidange du chauffe-eau est une étape incontournable.
        </p>
        <p style={p}>
          Bonne nouvelle : vider un ballon d'eau chaude est une opération à la portée de tout
          bricoleur amateur. Il faut simplement respecter un ordre précis pour éviter les accidents
          (brûlures, surpression, inondation). Ce guide vous explique tout, étape par étape.
        </p>
        <InfoBox>
          Ce tutoriel s'applique aux chauffe-eaux à accumulation (ballons électriques ou à gaz).
          Pour les chauffe-eaux instantanés (sans réservoir), la procédure est différente.
        </InfoBox>
      </section>

      {/* POURQUOI VIDER */}
      <section>
        <h2 id="pourquoi-vider" style={h2}>Pourquoi vider son chauffe-eau ?</h2>
        <p style={p}>
          Un ballon d'eau chaude n'est pas un équipement que l'on entretient spontanément, mais
          l'ignorer peut coûter cher. Voici les principales raisons de procéder à une vidange :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
          {[
            { emoji: "🔧", title: "Changer l'anode", desc: "L'anode magnésium protège le ballon de la corrosion. Elle se consume en 2 à 3 ans et doit être remplacée." },
            { emoji: "🪨", title: "Éliminer le tartre", desc: "Le calcaire se dépose au fond du ballon, réduit la capacité et fait consommer plus d'énergie." },
            { emoji: "🔄", title: "Remplacer le ballon", desc: "Un ballon en fin de vie (10-15 ans) nécessite une vidange complète avant dépose." },
            { emoji: "🛠️", title: "Réparer une fuite", desc: "Toute intervention sur le circuit hydraulique du ballon impose une vidange préalable." },
          ].map((r, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 flex gap-3"
              style={{ background: "white", border: "1px solid var(--color-border)" }}
            >
              <span className="text-2xl flex-shrink-0" aria-hidden="true">{r.emoji}</span>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>
                  {r.title}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Tip>
          Un chauffe-eau bien entretenu dure 15 ans. Sans entretien, il peut tomber en panne dès
          8 ans. Un simple remplacement d'anode tous les 2-3 ans suffit à doubler sa durée de vie.
        </Tip>
      </section>

      {/* AVANT DE COMMENCER */}
      <section>
        <h2 id="avant-commencer" style={h2}>Avant de commencer : ce qu'il faut savoir</h2>

        <h3 style={h3}>Identifier votre type de chauffe-eau</h3>
        <p style={p}>
          Repérez le groupe de sécurité (petit boîtier avec un levier rouge, relié au ballon par un
          tuyau) — c'est par là que passe l'eau froide entrante. Sur le ballon lui-même, vous trouverez
          en bas le robinet de vidange, et en haut la résistance électrique (ou le brûleur pour le gaz).
        </p>

        <ToolsList
          tools={[
            "Tuyau d'arrosage ou seau (20 L min)",
            "Clé plate 22 mm ou clé à molette",
            "Ruban téflon",
            "Gants résistants à la chaleur",
            "Joint neuf (si remplacement d'anode)",
            "Anode de rechange (si nécessaire)",
            "Lampe torche",
            "Serpillère et serviettes",
          ]}
        />

        <Warning>
          Ne jamais vider un ballon d'eau chaude sans avoir d'abord coupé l'électricité ou le gaz.
          Une résistance qui chauffe à sec est détruite en quelques secondes. Attendez aussi que l'eau
          refroidisse (au moins 1 heure) avant d'ouvrir le robinet de vidange pour éviter les brûlures.
        </Warning>
      </section>

      {/* ÉTAPE 1 */}
      <section>
        <h2 id="couper-alimentation" style={h2}>Étape 1 — Couper l'alimentation</h2>
        <p style={p}>
          C'est l'étape la plus importante. Ne la sautez jamais, même pour une intervention rapide.
        </p>
        <StepList
          steps={[
            {
              title: "Couper le disjoncteur",
              desc: "Repérez le disjoncteur dédié au chauffe-eau dans votre tableau électrique (généralement étiqueté « CE » ou « Chauffe-eau »). Basculez-le sur OFF. Vérifiez avec un testeur de tension que le courant est bien coupé.",
            },
            {
              title: "Fermer l'arrivée d'eau froide",
              desc: "Sur le groupe de sécurité, tournez la vanne d'arrêt d'eau froide dans le sens des aiguilles d'une montre jusqu'à blocage. Si vous n'avez pas de vanne sur le groupe, fermez la vanne générale de l'appartement.",
            },
            {
              title: "Laisser refroidir",
              desc: "Attendez minimum 1 heure. Si l'eau était en chauffe, attendez 2 à 3 heures. Un ballon de 200 L contient de l'eau à 65°C — une brûlure grave est vite arrivée.",
            },
          ]}
        />
      </section>

      {/* ÉTAPE 2 */}
      <section>
        <h2 id="branchement-evacuation" style={h2}>Étape 2 — Préparer l'évacuation de l'eau</h2>
        <p style={p}>
          L'eau doit aller quelque part. Selon l'emplacement de votre ballon, vous avez plusieurs
          options :
        </p>
        <ul className="flex flex-col gap-3 my-4">
          {[
            { option: "Tuyau d'arrosage vers l'extérieur ou une évacuation", detail: "La solution idéale. Raccordez le tuyau au robinet de vidange (filetage standard 3/4\")." },
            { option: "Seaux en relais", detail: "Pour les petits ballons (50-100 L). Prévoyez 5 à 10 seaux de 10 L selon la capacité." },
            { option: "Siphon de sol proche", detail: "Si votre salle de bains a un siphon de sol, laissez l'eau s'écouler directement." },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }}
              >
                {i + 1}
              </span>
              <div>
                <span className="text-sm font-semibold block" style={{ color: "var(--color-text-primary)" }}>{item.option}</span>
                <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>{item.detail}</span>
              </div>
            </li>
          ))}
        </ul>
        <Tip>
          Un ballon de 200 L pèse 200 kg d'eau. Si vous utilisez des seaux, faites-vous aider —
          et prévoyez d'ouvrir le robinet progressivement pour contrôler le débit.
        </Tip>
      </section>

      {/* ÉTAPE 3 */}
      <section>
        <h2 id="ouvrir-vanne" style={h2}>Étape 3 — Créer une mise à l'air libre</h2>
        <p style={p}>
          Un ballon fermé hermétiquement ne se vide pas : la dépression empêche l'eau de sortir.
          Il faut créer une entrée d'air pour que l'eau s'écoule librement.
        </p>
        <StepList
          steps={[
            {
              title: "Ouvrir un robinet d'eau chaude",
              desc: "Dans la pièce la plus proche, ouvrez un robinet sur la position eau chaude. L'air entrera par là pour remplacer l'eau qui s'écoule. Laissez-le ouvert pendant toute la vidange.",
            },
            {
              title: "Actionner le levier du groupe de sécurité",
              desc: "Soulevez brièvement le levier rouge (ou tirez selon le modèle) du groupe de sécurité. Cela permet aussi de libérer la pression résiduelle. De l'eau peut s'écouler — c'est normal.",
            },
          ]}
        />
      </section>

      {/* ÉTAPE 4 */}
      <section>
        <h2 id="vidange-complete" style={h2}>Étape 4 — Lancer la vidange complète</h2>
        <StepList
          steps={[
            {
              title: "Raccordez votre tuyau au robinet de vidange",
              desc: "Le robinet de vidange se trouve en bas du ballon. Il a généralement un filetage mâle 3/4\" compatible avec un raccord de tuyau d'arrosage standard.",
            },
            {
              title: "Ouvrez le robinet de vidange",
              desc: "Tournez dans le sens antihoraire. L'eau doit commencer à s'écouler. Si le débit est faible, vérifiez que votre robinet d'eau chaude est bien ouvert (mise à l'air).",
            },
            {
              title: "Attendez la vidange complète",
              desc: "Un ballon de 100 L met environ 20 à 40 minutes à se vider selon la pression. Surveillez le tuyau d'évacuation — quand l'eau devient un filet, c'est bientôt terminé.",
            },
            {
              title: "Rincer le fond du ballon",
              desc: "Ouvrez brièvement (30 secondes) la vanne d'eau froide pour remuer et chasser les dépôts de tartre du fond. Répétez 2 à 3 fois jusqu'à ce que l'eau sorte claire.",
            },
          ]}
        />
        <InfoBox>
          L'eau qui sort peut être jaunâtre, boueuse ou contenir des flocons blancs (tartre). C'est
          normal — c'est exactement pour ça qu'on fait cette opération.
        </InfoBox>
      </section>

      {/* ÉTAPE 5 */}
      <section>
        <h2 id="nettoyage" style={h2}>Étape 5 — Profiter de la vidange pour inspecter et nettoyer</h2>
        <p style={p}>
          Pendant que le ballon est vide, c'est le moment idéal pour réaliser les opérations
          d'entretien :
        </p>

        <h3 style={h3}>Vérifier et changer l'anode magnésium</h3>
        <p style={p}>
          L'anode est une tige de métal (magnésium ou titane) vissée sur le dessus ou le fond du
          ballon. Elle se sacrifie pour protéger la cuve de l'oxydation. Voici comment l'évaluer :
        </p>
        <CheckList
          items={[
            "Dévissez l'anode avec une clé de 26 mm (souvent hexagonale)",
            "Si elle mesure moins de 10 mm de diamètre (pour une neuve à 26 mm) → à remplacer",
            "Si elle est recouverte de dépôts blancs épais → à remplacer",
            "Si elle est encore bien formée avec plus de 12 mm de diamètre → encore bonne",
            "Lors du remontage, utilisez du ruban téflon sur le filetage pour éviter les fuites",
          ]}
        />

        <h3 style={h3}>Détartrer la résistance</h3>
        <p style={p}>
          Si vous voyez une épaisse couche calcaire sur la résistance électrique (accessible après
          démontage de la bride inférieure), plongez-la dans du vinaigre blanc pendant 2 heures.
          Ne grattez pas — vous abîmeriez le revêtement protecteur.
        </p>

        <Warning>
          Ne jamais gratter le tartre avec un outil métallique sur la résistance. Cela détruirait le
          revêtement et accélérerait la corrosion.
        </Warning>
      </section>

      {/* ÉTAPE 6 */}
      <section>
        <h2 id="remise-service" style={h2}>Étape 6 — Remise en service</h2>
        <p style={p}>
          La remise en service est aussi importante que la vidange. Mauvaise séquence = résistance
          grillée ou fuite.
        </p>
        <StepList
          steps={[
            {
              title: "Fermer le robinet de vidange",
              desc: "Tournez dans le sens horaire jusqu'à blocage. Assurez-vous que le tuyau d'arrosage est déconnecté.",
            },
            {
              title: "Ouvrir l'alimentation en eau froide",
              desc: "Rouvrez la vanne d'arrêt sur le groupe de sécurité. Le ballon va commencer à se remplir. Vous entendrez l'eau entrer.",
            },
            {
              title: "Purger l'air",
              desc: "Gardez le robinet d'eau chaude ouvert jusqu'à ce que l'eau coule de façon continue et sans crachotements. Cela signifie que le ballon est plein et l'air évacué.",
            },
            {
              title: "Vérifier l'absence de fuite",
              desc: "Inspectez le groupe de sécurité, le robinet de vidange et l'anode (si remplacée). Essuyez les raccords et vérifiez après 5 minutes qu'il n'y a pas de gouttes.",
            },
            {
              title: "Remettre le disjoncteur",
              desc: "Seulement quand le ballon est complètement plein et qu'il n'y a aucune fuite. Rebascule le disjoncteur sur ON. L'eau atteindra la température de consigne en 1 à 3 heures.",
            },
          ]}
        />
        <Tip>
          La première mise en chauffe après vidange peut prendre jusqu'à 3 heures pour un ballon
          de 200 L. Ne paniquez pas si vous n'avez pas d'eau chaude immédiatement.
        </Tip>
      </section>

      {/* ENTRETIEN */}
      <section>
        <h2 id="entretien" style={h2}>Calendrier d'entretien recommandé</h2>
        <p style={p}>
          Pour maintenir votre chauffe-eau en parfait état de fonctionnement, voici les
          interventions à planifier :
        </p>
        <div className="flex flex-col gap-3 my-5">
          {[
            { freq: "Tous les 6 mois", action: "Actionner le levier du groupe de sécurité pour éviter qu'il se bloque (10 secondes suffisent)." },
            { freq: "Tous les 2-3 ans", action: "Remplacer l'anode magnésium. Profitez-en pour faire une vidange de rinçage." },
            { freq: "Tous les 5 ans", action: "Vidange complète avec inspection de la résistance et détartrage si nécessaire." },
            { freq: "Tous les 10-15 ans", action: "Envisager le remplacement total du ballon (durée de vie moyenne)." },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl p-4"
              style={{ background: "white", border: "1px solid var(--color-border)" }}
            >
              <span
                className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }}
              >
                {item.freq}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {item.action}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 id="faq" style={h2}>Questions fréquentes</h2>
        <div className="flex flex-col gap-4 mt-4">
          <FaqItem
            question="Combien de temps faut-il pour vider un ballon de 200 L ?"
            answer="Environ 30 à 60 minutes, selon la pression d'eau et le diamètre du tuyau de vidange. Le remplissage ensuite prend 30 à 45 minutes."
          />
          <FaqItem
            question="Peut-on laisser le chauffe-eau allumé pendant la vidange ?"
            answer="Non, absolument pas. Si la résistance chauffe à sec (même quelques secondes), elle grille immédiatement. Coupez toujours le disjoncteur avant d'ouvrir le robinet de vidange."
          />
          <FaqItem
            question="Le groupe de sécurité goutte en permanence, est-ce normal ?"
            answer="Un groupe de sécurité qui goutte légèrement lors de la montée en température est normal (dilatation de l'eau). S'il coule en permanence ou en grande quantité, le groupe est usé et doit être remplacé — c'est un consommable."
          />
          <FaqItem
            question="Mon eau chaude a une odeur d'œuf pourri, pourquoi ?"
            answer="Cette odeur soufrée est causée par des bactéries sulfato-réductrices qui se développent dans un ballon réglé à moins de 60°C, ou lorsque l'anode magnésium est en fin de vie. Solution : monter la température à 65°C pendant 1 heure (pasteurisation) et changer l'anode."
          />
          <FaqItem
            question="Puis-je vider mon chauffe-eau moi-même ou faut-il un plombier ?"
            answer="La vidange et le remplacement d'anode sont des opérations DIY accessibles. En revanche, le remplacement du groupe de sécurité, de la résistance ou du chauffe-eau entier nécessite souvent un plombier, notamment pour les questions de garantie et de conformité."
          />
          <FaqItem
            question="Quelle température régler sur mon chauffe-eau ?"
            answer="La réglementation française recommande 55°C minimum au point de puisage et 60°C dans le ballon pour éviter la légionellose. Ne descendez jamais en dessous de 55°C, même pour économiser de l'énergie."
          />
          <FaqItem
            question="Mon robinet de vidange est bloqué et ne s'ouvre pas, que faire ?"
            answer="Le robinet de vidange peut se bloquer par le calcaire s'il n'a jamais été actionné. Appliquez un peu d'huile de pénétration (WD-40) et attendez 15 minutes avant de réessayer avec une clé. Ne forcez pas à la main — vous risqueriez de casser le robinet."
          />
        </div>
      </section>

    </article>
  )
}
