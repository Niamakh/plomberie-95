import { AlertTriangle, CheckCircle, Info, Lightbulb, Wrench } from "lucide-react"

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 rounded-2xl p-5 my-6"
      style={{ background: "var(--color-sky-soft)", border: "1px solid oklch(68% 0.14 235 / 0.2)" }}
    >
      <Lightbulb
        size={18}
        className="flex-shrink-0 mt-0.5"
        style={{ color: "var(--color-sky-dark)" }}
        aria-hidden="true"
      />
      <p className="text-sm leading-relaxed" style={{ color: "var(--color-sky-dark)" }}>
        {children}
      </p>
    </div>
  )
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 rounded-2xl p-5 my-6"
      style={{
        background: "oklch(97% 0.05 60 / 0.6)",
        border: "1px solid oklch(75% 0.12 60 / 0.35)",
      }}
    >
      <AlertTriangle
        size={18}
        className="flex-shrink-0 mt-0.5"
        style={{ color: "oklch(46% 0.14 60)" }}
        aria-hidden="true"
      />
      <p className="text-sm leading-relaxed" style={{ color: "oklch(38% 0.12 60)" }}>
        {children}
      </p>
    </div>
  )
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 rounded-2xl p-5 my-6"
      style={{
        background: "oklch(97% 0.01 240)",
        border: "1px solid var(--color-border)",
      }}
    >
      <Info
        size={18}
        className="flex-shrink-0 mt-0.5"
        style={{ color: "var(--color-text-muted)" }}
        aria-hidden="true"
      />
      <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
        {children}
      </p>
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
            <p
              className="font-semibold mb-1"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
            >
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

function ProConTable({
  pros,
  cons,
}: {
  pros: string[]
  cons: string[]
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      <div
        className="rounded-2xl p-5"
        style={{ background: "oklch(96% 0.08 145 / 0.25)", border: "1px solid oklch(85% 0.10 145 / 0.4)" }}
      >
        <p
          className="text-xs font-bold uppercase tracking-wider mb-3"
          style={{ color: "oklch(38% 0.15 145)" }}
        >
          ✅ Avantages
        </p>
        <ul className="flex flex-col gap-2">
          {pros.map((p, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "oklch(30% 0.08 145)" }}>
              <CheckCircle size={14} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="rounded-2xl p-5"
        style={{ background: "oklch(97% 0.05 20 / 0.3)", border: "1px solid oklch(85% 0.08 20 / 0.4)" }}
      >
        <p
          className="text-xs font-bold uppercase tracking-wider mb-3"
          style={{ color: "oklch(40% 0.16 20)" }}
        >
          ❌ Inconvénients
        </p>
        <ul className="flex flex-col gap-2">
          {cons.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "oklch(32% 0.08 20)" }}>
              <span className="flex-shrink-0 mt-0.5 text-xs">•</span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ToolsList({ tools }: { tools: string[] }) {
  return (
    <div
      className="rounded-2xl p-5 my-6"
      style={{ background: "white", border: "1px solid var(--color-border)" }}
    >
      <div
        className="flex items-center gap-2 mb-4 text-sm font-bold"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
      >
        <Wrench size={15} style={{ color: "var(--color-sky-dark)" }} aria-hidden="true" />
        Matériel nécessaire
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {tools.map((tool, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "var(--color-sky)" }}
              aria-hidden="true"
            />
            {tool}
          </li>
        ))}
      </ul>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: "white", border: "1px solid var(--color-border)" }}
    >
      <h3
        className="font-bold mb-2"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}
      >
        {question}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
        {answer}
      </p>
    </div>
  )
}

/* ─── Styles communs pour les titres ─── */
const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  color: "var(--color-text-primary)",
  fontSize: "1.55rem",
  fontWeight: 700,
  marginTop: "3rem",
  marginBottom: "1rem",
  scrollMarginTop: "5rem",
}

const h3Style: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  color: "var(--color-text-primary)",
  fontSize: "1.15rem",
  fontWeight: 700,
  marginTop: "2rem",
  marginBottom: "0.75rem",
}

const pStyle: React.CSSProperties = {
  color: "var(--color-text-muted)",
  lineHeight: "1.8",
  marginBottom: "1rem",
  fontSize: "0.97rem",
}

export default function ArticleBody() {
  return (
    <article className="flex-1 min-w-0">
      {/* ─── INTRODUCTION ─── */}
      <section>
        <p style={pStyle}>
          Une canalisation bouchée, ça arrive dans toutes les maisons. Que ce soit l'évier de la
          cuisine qui se vide lentement, la douche qui déborde ou les WC qui refoulent, ces
          problèmes sont rarement graves… mais vite insupportables si on ne les règle pas à temps.
        </p>
        <p style={pStyle}>
          Dans cet article, on passe en revue <strong>toutes les méthodes efficaces</strong> pour
          déboucher vos canalisations, du plus simple au plus musclé. Vous trouverez aussi les bons
          gestes de prévention pour que ça ne se reproduise pas.
        </p>

        <InfoBox>
          Avant de commencer, identifiez où se situe le bouchon : évier, douche, baignoire, WC, ou
          canalisation extérieure ? Chaque situation a ses propres solutions prioritaires.
        </InfoBox>
      </section>

      {/* ─── POURQUOI ─── */}
      <section>
        <h2 id="pourquoi" style={h2Style}>
          Pourquoi les canalisations se bouchent-elles ?
        </h2>
        <p style={pStyle}>
          Comprendre l'origine du bouchon permet de choisir la bonne méthode. Les causes les plus
          fréquentes sont :
        </p>
        <ul className="flex flex-col gap-2 mb-4 ml-1">
          {[
            "Accumulation de graisse et de savon dans les canalisations de cuisine",
            "Amas de cheveux et résidus de shampoing dans la douche ou la baignoire",
            "Dépôts de calcaire qui rétrécissent le diamètre des tuyaux",
            "Objets tombés accidentellement (bouchon, jouet, coton-tige)",
            "Racines d'arbres qui s'infiltrent dans les canalisations enterrées",
            "Papier toilette en excès ou lingettes (même celles dites « flushables »)",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-sky)" }} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <Tip>
          Si plusieurs points d'eau sont bouchés en même temps (évier + douche + WC), le problème
          vient probablement du collecteur principal — faites appel à un professionnel.
        </Tip>
      </section>

      {/* ─── VENTOUSE ─── */}
      <section>
        <h2 id="ventouse" style={h2Style}>
          1. La ventouse : le réflexe numéro 1
        </h2>
        <p style={pStyle}>
          La ventouse est le premier outil à utiliser. Simple, efficace et économique, elle fonctionne
          par pression/dépression pour déloger les bouchons mous (cheveux, graisse).
        </p>

        <ToolsList
          tools={[
            "Ventouse à cloche (évier / douche)",
            "Ventouse à soufflet (WC)",
            "Gants de protection",
            "Chiffons pour protéger le sol",
          ]}
        />

        <StepList
          steps={[
            {
              title: "Colmatez les autres sorties",
              desc: "Bouchez le trop-plein (petite ouverture ovale sur le côté du lavabo) avec un chiffon humide pour créer une bonne pression.",
            },
            {
              title: "Remplissez légèrement le bac",
              desc: "Il doit y avoir un peu d'eau pour que la ventouse puisse s'appuyer et transmettre la pression. Environ 5 cm suffisent.",
            },
            {
              title: "Positionnez la ventouse",
              desc: "Centrez la cloche sur la bonde et appuyez fermement pour chasser l'air.",
            },
            {
              title: "Pompage vigoureux",
              desc: "Faites 10 à 15 allers-retours rapides et énergiques sans décoller la ventouse, puis tirez d'un coup sec.",
            },
            {
              title: "Rincez abondamment",
              desc: "Ouvrez le robinet d'eau chaude à fond pendant 2 minutes pour emporter les résidus.",
            },
          ]}
        />

        <ProConTable
          pros={["Pas de produit chimique", "Résultats immédiats", "Utilisable partout", "Coût : 3 à 15 €"]}
          cons={["Inefficace sur les bouchons durs ou profonds", "Nécessite de la vigueur", "Peut éclabousser"]}
        />
      </section>

      {/* ─── PRODUITS ─── */}
      <section>
        <h2 id="produits" style={h2Style}>
          2. Les produits chimiques déboucheurs
        </h2>
        <p style={pStyle}>
          Les produits déboucheurs du commerce (Destop, Mr Muscle…) contiennent de la soude caustique
          ou des enzymes actives. Ils dissolvent les matières organiques comme les cheveux ou la
          graisse.
        </p>

        <Warning>
          Ne jamais mélanger un produit acide et un produit basique : la réaction peut être violente.
          Ne jamais utiliser ces produits sur des canalisations en PVC vieillissant ou fissurées —
          ils peuvent accélérer la dégradation.
        </Warning>

        <h3 style={h3Style}>Les 3 types de produits</h3>
        <div className="flex flex-col gap-4 my-4">
          {[
            {
              name: "Produits à la soude (basiques)",
              desc: "Les plus puissants. Dissolvents les cheveux et les graisses. Attention aux projections — portez des lunettes et des gants.",
              usage: "Évier, douche, baignoire",
            },
            {
              name: "Produits enzymatiques",
              desc: "Moins agressifs, à base de bactéries et d'enzymes. Idéals pour un entretien préventif mensuel. Agissent en 6 à 12 h.",
              usage: "Tous types de canalisations",
            },
            {
              name: "Produits acides",
              desc: "Réservés aux calcaires et aux dépôts minéraux. Attention, très corrosifs pour les métaux.",
              usage: "Canalisations calcifiées uniquement",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="rounded-2xl p-5"
              style={{ background: "white", border: "1px solid var(--color-border)" }}
            >
              <p
                className="font-semibold text-sm mb-1"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
              >
                {p.name}
              </p>
              <p className="text-sm mb-2" style={{ color: "var(--color-text-muted)" }}>
                {p.desc}
              </p>
              <span
                className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }}
              >
                {p.usage}
              </span>
            </div>
          ))}
        </div>

        <Tip>
          Versez le produit le soir avant de dormir : il agira toute la nuit sans que l'eau courante
          ne le dilue. Rincez abondamment le matin.
        </Tip>
      </section>

      {/* ─── FURET ─── */}
      <section>
        <h2 id="furet" style={h2Style}>
          3. Le furet de plombier : pour les bouchons tenaces
        </h2>
        <p style={pStyle}>
          Quand la ventouse et les produits ne suffisent pas, le furet (ou « serpent de plomberie »)
          est l'outil qu'il vous faut. Il s'introduit dans la canalisation pour fragmenter ou
          extraire mécaniquement le bouchon.
        </p>

        <ToolsList
          tools={[
            "Furet manuel (8 à 15 €) ou électrique (30 à 80 €)",
            "Gants épais",
            "Seaux et chiffons",
            "Lampe torche",
          ]}
        />

        <StepList
          steps={[
            {
              title: "Démontez le siphon si possible",
              desc: "Sur un lavabo ou un évier, retirez le siphon pour accéder directement à la canalisation murale. Placez un seau en dessous.",
            },
            {
              title: "Introduisez le furet",
              desc: "Insérez doucement la spirale dans la canalisation. Tournez dans le sens des aiguilles d'une montre en avançant.",
            },
            {
              title: "Localisez le bouchon",
              desc: "Vous sentirez une résistance quand le furet atteint l'obstruction. Ne forcez pas brutalement.",
            },
            {
              title: "Perforez ou accrochez",
              desc: "Selon le type de furet : soit vous percez le bouchon pour qu'il parte avec l'eau, soit vous l'accrochez pour le ressortir.",
            },
            {
              title: "Retirez et rincez",
              desc: "Ressortez le furet lentement en tournant. Rincez à grande eau chaude pendant 3 minutes.",
            },
          ]}
        />

        <InfoBox>
          Pour les WC, utilisez impérativement un furet WC (tête en caoutchouc) pour ne pas rayer la
          porcelaine. Le furet standard peut abîmer la faïence.
        </InfoBox>
      </section>

      {/* ─── KARCHER ─── */}
      <section>
        <h2 id="karcher" style={h2Style}>
          4. Le nettoyeur haute pression (Karcher) : la méthode pro
        </h2>
        <p style={pStyle}>
          Pour les canalisations extérieures (descentes de gouttières, drains de terrasse, regards)
          ou les bouchons très profonds, le nettoyeur haute pression avec un kit « débouchage » est
          redoutablement efficace.
        </p>

        <Warning>
          Cette méthode est adaptée aux canalisations extérieures et aux diamètres supérieurs à
          50 mm. Ne jamais utiliser un jet haute pression dans un WC ou un évier — vous risqueriez
          d'endommager les joints et les raccords intérieurs.
        </Warning>

        <ToolsList
          tools={[
            "Nettoyeur haute pression (min. 100 bars)",
            "Kit tuyau de débouchage (flexible + embout rotatif)",
            "Lunettes de protection",
            "Gants imperméables",
            "Bottes",
          ]}
        />

        <StepList
          steps={[
            {
              title: "Choisissez le bon kit",
              desc: "Le tuyau de débouchage (ou « lance flexible ») se glisse dans la canalisation. L'embout rotatif projette l'eau vers l'arrière pour propulser le tuyau et vers l'avant pour fragmenter le bouchon.",
            },
            {
              title: "Préparez la machine",
              desc: "Raccordez le tuyau de débouchage à votre Karcher. Réglez la pression entre 80 et 120 bars selon le diamètre de la canalisation.",
            },
            {
              title: "Introduisez le tuyau",
              desc: "Insérez le tuyau flexible dans l'ouverture (regard ou descente de gouttière). Allumez le Karcher puis avancez lentement.",
            },
            {
              title: "Progression par à-coups",
              desc: "Poussez le tuyau par sections de 30 cm. Si vous sentez une résistance, faites des allers-retours pour fragmenter l'obstruction.",
            },
            {
              title: "Rinçage final",
              desc: "Une fois le bouchon résorbé, repassez le tuyau une dernière fois en reculant pour nettoyer les parois. Rincez abondamment à l'eau claire.",
            },
          ]}
        />

        <Tip>
          Si vous n'avez pas de Karcher, beaucoup de magasins de bricolage (Leroy Merlin, Castorama)
          proposent la location d'un nettoyeur haute pression avec kit débouchage pour environ 30 €
          la journée.
        </Tip>

        <ProConTable
          pros={["Très efficace sur les bouchons tenaces", "Nettoie les parois en même temps", "Idéal pour les canalisations extérieures", "Résultats durables"]}
          cons={["Déconseillé pour les canalisations intérieures", "Matériel coûteux (location possible)", "Nécessite des EPI", "Peut projeter des matières"]}
        />
      </section>

      {/* ─── NATUREL ─── */}
      <section>
        <h2 id="naturel" style={h2Style}>
          5. La méthode naturelle : bicarbonate + vinaigre
        </h2>
        <p style={pStyle}>
          Pour les bouchons légers ou comme entretien préventif, le duo bicarbonate de soude + vinaigre
          blanc est une alternative écologique aux produits chimiques.
        </p>

        <StepList
          steps={[
            {
              title: "Versez 100 g de bicarbonate de soude",
              desc: "Versez directement dans la bonde ou le siphon ouvert.",
            },
            {
              title: "Ajoutez 25 cl de vinaigre blanc chaud",
              desc: "La réaction mousse et pétille — c'est normal ! Couvrez immédiatement la bonde avec un chiffon pour forcer la réaction vers le bas.",
            },
            {
              title: "Attendez 30 minutes",
              desc: "Laissez agir sans faire couler d'eau.",
            },
            {
              title: "Rincez à l'eau bouillante",
              desc: "Versez 1 litre d'eau très chaude (pas bouillante si tuyaux PVC) pour emporter les résidus dissous.",
            },
          ]}
        />

        <InfoBox>
          Cette méthode est efficace sur les petites accumulations de calcaire et de savon, mais
          insuffisante pour les vrais bouchons. Utilisez-la plutôt une fois par mois en entretien.
        </InfoBox>
      </section>

      {/* ─── PREVENTION ─── */}
      <section>
        <h2 id="prevention" style={h2Style}>
          Prévention : comment éviter les bouchons
        </h2>
        <p style={pStyle}>
          Un bouchon évité vaut mieux que dix bouchons à déboucher. Voici les bons réflexes à
          adopter au quotidien :
        </p>
        <ul className="flex flex-col gap-3 my-4">
          {[
            { emoji: "🛁", text: "Installez des crépines sur toutes vos bondes — elles retiennent cheveux et déchets pour moins de 2 €." },
            { emoji: "🍳", text: "Ne versez jamais de graisses de cuisson dans l'évier. Attendez qu'elles refroidissent et jetez-les à la poubelle." },
            { emoji: "🚽", text: "N'envoyez aux WC que les 3P : Papier toilette, Pipi, et Popo. Lingettes, cotons, et médicaments vont à la poubelle." },
            { emoji: "🌊", text: "Versez de l'eau bouillante dans vos éviers une fois par semaine — ça fond les graisses accumulées dans les siphons." },
            { emoji: "🧪", text: "Faites un entretien enzymatique mensuel dans vos canalisations de douche et cuisine." },
            { emoji: "🌿", text: "Si vous avez des arbres proches des canalisations enterrées, faites un hydrocurage préventif tous les 2 ans." },
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--color-text-muted)" }}>
              <span className="text-lg flex-shrink-0" aria-hidden="true">{tip.emoji}</span>
              {tip.text}
            </li>
          ))}
        </ul>
      </section>

      {/* ─── PLOMBIER ─── */}
      <section>
        <h2 id="plombier" style={h2Style}>
          Quand appeler un plombier professionnel ?
        </h2>
        <p style={pStyle}>
          Il arrive que le problème dépasse les solutions DIY. Voici les signaux qui doivent vous
          pousser à contacter un professionnel sans attendre :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
          {[
            "Plusieurs points d'eau bouchés simultanément",
            "Mauvaises odeurs persistantes malgré le nettoyage",
            "Bruits de gargouillis dans les WC ou les éviers",
            "L'eau remonte par d'autres canalisations",
            "Bouchon non résolu après toutes les méthodes",
            "Fissure ou dommage visible sur un tuyau",
          ].map((signal, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium"
              style={{
                background: "oklch(97% 0.05 20 / 0.3)",
                border: "1px solid oklch(85% 0.08 20 / 0.35)",
                color: "oklch(35% 0.10 20)",
              }}
            >
              <span style={{ color: "oklch(55% 0.18 20)" }} aria-hidden="true">⚠</span>
              {signal}
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section>
        <h2 id="faq" style={h2Style}>
          Questions fréquentes
        </h2>
        <div className="flex flex-col gap-4 mt-4">
          <FaqItem
            question="Peut-on utiliser de l'eau de Javel pour déboucher ?"
            answer="L'eau de Javel est un désinfectant, pas un déboucheur. Elle n'est pas efficace pour dissoudre les bouchons organiques et peut abîmer les joints en caoutchouc. Évitez-la pour cet usage."
          />
          <FaqItem
            question="Combien de temps laisse-t-on agir un produit déboucheur ?"
            answer="En général, entre 15 minutes (produit puissant, bouchon léger) et une nuit entière (produit enzymatique ou bouchon tenace). Lisez toujours les instructions sur l'emballage."
          />
          <FaqItem
            question="Mon WC est bouché mais la ventouse ne fait rien, que faire ?"
            answer="Essayez d'abord un furet WC (tête en caoutchouc). Si cela ne suffit pas, tentez de verser un seau d'eau chaude (pas bouillante) d'un coup — la pression peut déloger le bouchon. En dernier recours, appelez un plombier."
          />
          <FaqItem
            question="Comment savoir si le bouchon est dans le siphon ou plus loin dans la canalisation ?"
            answer="Démontez le siphon et vérifiez à l'intérieur. S'il est propre, le bouchon se trouve plus loin. Si l'eau ne s'écoule pas après avoir retiré le siphon, le problème est en amont (côté lavabo)."
          />
          <FaqItem
            question="Les lingettes humides peuvent-elles boucher les canalisations ?"
            answer="Oui, c'est l'une des principales causes de bouchons dans les WC, même les lingettes « biodégradables » ou « flushables ». Elles ne se dissolvent pas dans l'eau comme le papier toilette. Jetez-les toujours à la poubelle."
          />
          <FaqItem
            question="Un débouchage à l'hydrocureur, c'est quoi ?"
            answer="L'hydrocurage est la technique professionnelle qui utilise un jet d'eau à très haute pression (jusqu'à 400 bars) pour nettoyer et déboucher les canalisations enterrées. C'est la méthode la plus efficace pour les gros bouchons ou un entretien complet du réseau."
          />
        </div>
      </section>
    </article>
  )
}
