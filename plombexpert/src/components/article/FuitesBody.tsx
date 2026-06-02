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

export default function FuitesBody() {
  return (
    <article className="flex-1 min-w-0">

      <section>
        <p style={p}>
          En France, les fuites d'eau représentent en moyenne <strong>20 % de la consommation domestique</strong> — soit environ 50 litres par jour pour un foyer de 4 personnes. Pire, une fuite invisible sous plancher ou dans une cloison peut causer des dégâts structurels en quelques semaines sans que vous le sachiez.
        </p>
        <p style={p}>
          Ce guide vous donne toutes les clés pour détecter une fuite même cachée, identifier sa source exacte, et la réparer selon son type — ou savoir quand appeler un professionnel.
        </p>
        <InfoBox>
          Si vous constatez une fuite active avec de l'eau qui coule, allez directement à la section <strong>Gestes d'urgence</strong> en bas de cet article avant tout.
        </InfoBox>
      </section>

      {/* SIGNES */}
      <section>
        <h2 id="signes" style={h2}>Les signes qui trahissent une fuite</h2>
        <p style={p}>Une fuite n'est pas toujours visible. Voici les indices à surveiller :</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
          {[
            { emoji: "💸", signe: "Facture d'eau anormalement élevée", detail: "Une hausse soudaine sans changement d'habitudes est le signal le plus fiable." },
            { emoji: "🟡", signe: "Taches jaunes ou brunes sur mur/plafond", detail: "Indique une infiltration lente depuis un tuyau encastré ou un joint défectueux." },
            { emoji: "🌫️", signe: "Odeur de moisissure ou d'humidité persistante", detail: "Une fuite cachée dans une cloison crée un environnement propice aux moisissures." },
            { emoji: "📊", signe: "Pression d'eau faible inexpliquée", detail: "Une chute de pression dans tout le logement peut indiquer une fuite sur le réseau principal." },
            { emoji: "🔊", signe: "Bruit d'eau sans robinet ouvert", detail: "Écoutez près des murs et du sol. Un clapotis ou un sifflement révèle une fuite active." },
            { emoji: "🌊", signe: "Sol toujours humide ou gonflé", detail: "Un parquet qui gondole ou un carrelage désolidarisé peut indiquer une fuite sous la dalle." },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl p-4 flex gap-3" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <span className="text-2xl flex-shrink-0" aria-hidden="true">{s.emoji}</span>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{s.signe}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPTEUR */}
      <section>
        <h2 id="compteur" style={h2}>Le test du compteur d'eau : méthode infaillible</h2>
        <p style={p}>
          C'est le test le plus fiable pour confirmer une fuite invisible. Il ne nécessite aucun outil.
        </p>
        <StepList steps={[
          { title: "Relevez le compteur", desc: "Notez précisément le chiffre affiché sur votre compteur d'eau (généralement dans la rue, la cave ou le couloir de votre immeuble). Photographiez-le." },
          { title: "Fermez tous les robinets", desc: "Fermez tous les robinets du logement, y compris ceux alimentant le lave-linge et le lave-vaisselle. N'utilisez pas d'eau pendant au moins 2 heures." },
          { title: "Relevez à nouveau", desc: "Après 2 heures (idéalement la nuit), vérifiez le compteur. S'il a bougé, il y a une fuite quelque part dans le circuit." },
          { title: "Affiner la localisation", desc: "Fermez maintenant la vanne d'arrêt générale intérieure (après le compteur). Si le compteur continue de tourner, la fuite est sur le réseau public entre le compteur et votre logement — contactez votre opérateur. Si le compteur s'arrête, la fuite est bien dans votre installation." },
        ]} />
        <Tip>
          Sur les compteurs modernes, un petit cadran ou triangle tourne en permanence s'il y a une fuite, même minime. Regardez votre compteur en ayant fermé toute utilisation d'eau — si ce cadran tourne, vous avez une fuite.
        </Tip>
      </section>

      {/* LOCALISER */}
      <section>
        <h2 id="localiser" style={h2}>Localiser précisément la fuite</h2>
        <p style={p}>Une fois la fuite confirmée, voici comment trouver son emplacement exact :</p>
        <h3 style={h3}>Méthode par élimination</h3>
        <CheckList items={[
          "Vérifiez d'abord tous les points visibles : sous les éviers, derrière les WC, joints de douche, flexibles de raccordement",
          "Contrôlez le groupe de sécurité du chauffe-eau (gouttes fréquentes = groupe à remplacer)",
          "Inspectez les joints de silicone autour de la baignoire et de la douche",
          "Vérifiez les raccords de radiateurs (robinets thermostatiques, raccords union)",
          "Regardez sous le lave-linge et le lave-vaisselle — les arrivées d'eau vieillissent",
          "Si rien de visible, la fuite est probablement encastrée (dalle ou cloison)",
        ]} />
        <h3 style={h3}>Fuite encastrée : faire appel à un détecteur</h3>
        <p style={p}>
          Pour les fuites dans les dalles ou les cloisons, des professionnels utilisent des détecteurs
          acoustiques ou thermiques qui localisent la fuite sans ouvrir les murs. Cette prestation
          coûte entre 150 et 350 € mais évite de casser au mauvais endroit.
        </p>
        <InfoBox>
          En cas de dégât des eaux, votre assurance habitation peut prendre en charge la recherche de
          fuite (clause "recherche et accès" dans la plupart des contrats multirisques). Vérifiez votre
          contrat avant de payer.
        </InfoBox>
      </section>

      {/* FUITE ROBINET */}
      <section>
        <h2 id="fuite-robinet" style={h2}>Réparer une fuite sous un robinet ou un évier</h2>
        <p style={p}>
          Les fuites sous évier se produisent presque toujours au niveau des raccords ou des flexibles
          d'alimentation. Il existe 3 cas principaux :
        </p>
        <div className="flex flex-col gap-4 my-5">
          {[
            {
              cas: "Raccord desserré",
              solution: "Resserrez le raccord à la main, puis 1/4 de tour supplémentaire à la clé. Ne forcez pas — vous risqueriez d'endommager le filetage.",
              difficulte: "Débutant",
            },
            {
              cas: "Flexible d'alimentation percé ou fissuré",
              solution: "Remplacez le flexible (5 à 15 €, disponible en GSB). Coupez l'eau, dévissez l'ancien flexible aux deux extrémités, posez le nouveau avec du téflon sur les filetages.",
              difficulte: "Débutant",
            },
            {
              cas: "Joint de raccord usé",
              solution: "Dévissez le raccord, retirez et remplacez le joint plat intérieur. Utilisez un joint fibre pour les raccords métal/métal, caoutchouc pour les raccords flexibles.",
              difficulte: "Débutant",
            },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl p-5" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{c.cas}</p>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: "oklch(94% 0.10 145 / 0.3)", color: "oklch(38% 0.15 145)" }}>{c.difficulte}</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{c.solution}</p>
            </div>
          ))}
        </div>
        <ToolsList tools={["Clé à molette ou clé plate", "Flexible de remplacement (si nécessaire)", "Joint plat assortiment", "Ruban téflon", "Seau et chiffons"]} />
      </section>

      {/* WC */}
      <section>
        <h2 id="fuite-wc" style={h2}>WC qui coule : identifier et réparer</h2>
        <p style={p}>
          Un WC qui coule en permanence gaspille entre 100 et 600 litres par jour. On distingue deux
          types de fuites sur les WC :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
          <div className="rounded-2xl p-5" style={{ background: "white", border: "1px solid var(--color-border)" }}>
            <p className="font-bold text-sm mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>Fuite du réservoir vers la cuvette</p>
            <p className="text-xs mb-3" style={{ color: "var(--color-text-muted)" }}>Vous entendez un filet d'eau constant. Mettez une feuille de papier toilette sur le bord de la cuvette — si elle mouille, la fuite est confirmée.</p>
            <p className="text-xs font-semibold" style={{ color: "var(--color-sky-dark)" }}>→ Cause : joint de cloche usé ou flotteur mal réglé</p>
          </div>
          <div className="rounded-2xl p-5" style={{ background: "white", border: "1px solid var(--color-border)" }}>
            <p className="font-bold text-sm mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>Fuite par le bas (entre WC et sol)</p>
            <p className="text-xs mb-3" style={{ color: "var(--color-text-muted)" }}>De l'eau apparaît au pied de la cuvette après chaque chasse. C'est la collerette d'étanchéité (cire ou silicone) qui est usée.</p>
            <p className="text-xs font-semibold" style={{ color: "var(--color-sky-dark)" }}>→ Cause : joint de pied de WC à refaire</p>
          </div>
        </div>
        <StepList steps={[
          { title: "Confirmer la fuite réservoir → cuvette", desc: "Versez quelques gouttes de colorant alimentaire (ou d'encre) dans le réservoir sans actionner la chasse. Attendez 15 minutes. Si la couleur apparaît dans la cuvette, le joint de cloche fuit." },
          { title: "Couper l'alimentation du réservoir", desc: "Fermez le robinet d'alimentation derrière ou sous le WC. Actionnez la chasse pour vider le réservoir." },
          { title: "Remplacer le joint de cloche", desc: "Dévissez la cloche (mécanisme de chasse central). Retirez l'ancien joint en caoutchouc à la base et posez le nouveau (joint universel, 2-5 €). Remontez et testez." },
          { title: "Régler le flotteur si nécessaire", desc: "Si l'eau monte jusqu'au trop-plein, le flotteur est mal réglé. Sur les mécanismes modernes, ajustez la hauteur en déplaçant le flotteur sur sa tige (sans outil)." },
        ]} />
      </section>

      {/* TUYAU */}
      <section>
        <h2 id="fuite-tuyau" style={h2}>Fuite sur un tuyau apparent</h2>
        <p style={p}>
          Sur un tuyau visible (sous évier, cave, garage), plusieurs solutions existent selon l'urgence et le type de dégât.
        </p>
        <div className="flex flex-col gap-3 my-5">
          {[
            { type: "Petite fissure ou micro-piqûre", solution: "Collier de serrage anti-fuite (plombier urgence) ou ruban d'étanchéité auto-vulcanisant. Solution provisoire — prévoir une réparation définitive.", urgence: false },
            { type: "Joint entre deux tuyaux (raccord vissé)", solution: "Dévisser, remettre du téflon ou un nouveau joint plat, revisser. Attention à ne pas trop serrer sur le PVC.", urgence: false },
            { type: "Coude ou raccord fissuré", solution: "Couper l'eau, démonter le raccord endommagé, en poser un neuf (pièce en GSB, 2-10 €). Préférez le sertissage ou le collage selon le matériau.", urgence: false },
            { type: "Rupture franche du tuyau", solution: "Fermer la vanne générale immédiatement. Solution provisoire : manchon de réparation rapide. Solution définitive : remplacement du tronçon.", urgence: true },
          ].map((r, i) => (
            <div key={i} className="rounded-2xl p-4 flex gap-3" style={{ background: "white", border: `1px solid ${r.urgence ? "oklch(75% 0.12 20 / 0.4)" : "var(--color-border)"}` }}>
              {r.urgence && <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(46% 0.14 20)" }} aria-hidden="true" />}
              <div>
                <p className="font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{r.type}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{r.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EVACUATION */}
      <section>
        <h2 id="fuite-evacuation" style={h2}>Fuite sur une canalisation d'évacuation</h2>
        <p style={p}>
          Les fuites d'évacuation sont différentes des fuites d'alimentation : il n'y a pas de pression permanente, l'eau ne s'écoule que lors de l'utilisation. Elles sont parfois difficiles à détecter.
        </p>
        <CheckList items={[
          "Regardez sous les siphons : les joints d'étanchéité vieillissent et permettent des gouttes à chaque utilisation",
          "Vérifiez les joints des bagues de serrage sur les tuyaux PVC gris (évacuation)",
          "Contrôlez le joint d'about entre le fond de douche et le siphon",
          "Inspectez les raccords de colonnes dans les placards techniques",
          "Pour les fuites intermittentes, testez en versant de l'eau dans chaque point et observez",
        ]} />
        <Tip>
          La plupart des fuites d'évacuation se réparent avec du silicone sanitaire ou un nouveau joint de siphon (1 à 3 €). Les siphons complets se remplacent sans plombier pour 5 à 15 €.
        </Tip>
      </section>

      {/* URGENCE */}
      <section>
        <h2 id="urgence" style={h2}>Gestes d'urgence en cas de fuite active</h2>
        <Warning>
          En cas de fuite importante avec de l'eau qui coule abondamment, agissez dans cet ordre sans attendre.
        </Warning>
        <StepList steps={[
          { title: "Fermez la vanne générale", desc: "Elle est généralement sous l'évier de la cuisine, dans le couloir ou dans la cave. Tournez dans le sens horaire jusqu'à blocage." },
          { title: "Coupez l'électricité si l'eau touche des équipements", desc: "Si l'eau est proche d'un tableau électrique, d'une prise ou d'un appareil, coupez le disjoncteur général immédiatement." },
          { title: "Limitez les dégâts", desc: "Placez des seaux, des serviettes. Protégez les meubles et les objets de valeur. Déplacez ce qui peut être déplacé." },
          { title: "Documentez les dégâts", desc: "Prenez des photos et des vidéos avant tout nettoyage pour votre déclaration d'assurance." },
          { title: "Contactez votre assurance", desc: "Déclarez le sinistre dans les 5 jours ouvrés (délai légal). Un expert sera mandaté pour évaluer les dommages." },
          { title: "Appelez un plombier d'urgence si nécessaire", desc: "Si vous ne pouvez pas fermer la vanne ou si la fuite est sur le réseau principal (avant compteur), appelez un plombier ou votre syndic immédiatement." },
        ]} />
      </section>

      {/* PREVENTION */}
      <section>
        <h2 id="prevention" style={h2}>Prévention : réduire le risque de fuite</h2>
        <div className="flex flex-col gap-3 my-5">
          {[
            { freq: "Toutes les semaines", action: "Inspectez visuellement sous les éviers et derrière les WC. 30 secondes suffisent à détecter une goutte précoce." },
            { freq: "Tous les 6 mois", action: "Testez tous vos robinets d'arrêt en les manœuvrant. Vérifiez les flexibles d'alimentation (lave-linge, lave-vaisselle) — ils vieillissent en 10 ans." },
            { freq: "Tous les ans", action: "Faites le test du compteur (robinets fermés, compteur immobile = pas de fuite). Vérifiez les joints de silicone de douche et baignoire." },
            { freq: "Investissement recommandé", action: "Installez un détecteur de fuite connecté sous les éviers et au pied du chauffe-eau. Ces dispositifs coupent automatiquement l'eau en cas de fuite (50-200 €)." },
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
          <FaqItem question="Comment savoir si ma fuite est à ma charge ou à la charge du syndic ?" answer="En copropriété, les canalisations dans votre appartement (après le compteur d'eau individuel) sont à votre charge. Les canalisations communes (colonnes montantes, réseau général) sont à la charge de la copropriété. En maison individuelle, tout est à votre charge après le compteur." />
          <FaqItem question="Ma facture d'eau a doublé, est-ce forcément une fuite ?" answer="Pas forcément. Vérifiez d'abord si une anomalie de facturation est possible (mauvais relevé). Ensuite faites le test du compteur. D'autres causes : remplissage de piscine oublié, fuite d'un arrosage automatique, ou consommation inhabituelle d'un locataire." />
          <FaqItem question="Puis-je bénéficier d'un dégrèvement pour fuite ?" answer="Oui. La loi Warsmann (2011) oblige les distributeurs d'eau à accorder un dégrèvement si une fuite après compteur a été réparée et attestée. Le dégrèvement est plafonné à deux fois votre consommation habituelle. Contactez votre service des eaux avec une facture du plombier ou une attestation de réparation DIY." />
          <FaqItem question="Une fuite d'évacuation est-elle grave ?" answer="Moins urgente qu'une fuite d'alimentation (pas de pression permanente), mais elle ne doit pas être négligée. L'humidité chronique détériore les meubles, favorise les moisissures et peut fragiliser les structures en bois. Réparez dans les 2 à 4 semaines." />
          <FaqItem question="Comment réparer provisoirement une fuite en attendant le plombier ?" answer="Pour une petite fissure : ruban d'étanchéité auto-vulcanisant (silicone ou butyl) enroulé en serrant fort. Pour un raccord qui fuit : resserrage à la clé + collier de serrage. Pour un joint plat : chewing-gum ou plâtre en urgence absolue (non durable)." />
        </div>
      </section>

    </article>
  )
}
