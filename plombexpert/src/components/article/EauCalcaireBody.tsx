import Link from "next/link"

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
      <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>{question}</h3>
      <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{answer}</p>
    </div>
  )
}

function ArticleFigure({ src, alt, caption, priority = false }: { src: string; alt: string; caption: string; priority?: boolean }) {
  return (
    <figure className="my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={800} height={450} loading={priority ? "eager" : "lazy"} decoding="async" className="w-full h-auto rounded-2xl" style={{ border: "1px solid var(--color-border)" }} />
      <figcaption className="text-sm mt-3 text-center" style={{ color: "var(--color-text-muted)" }}>{caption}</figcaption>
    </figure>
  )
}

const h2: React.CSSProperties = { fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.55rem", fontWeight: 700, marginTop: "3rem", marginBottom: "1rem", scrollMarginTop: "5rem" }
const h3: React.CSSProperties = { fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.15rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }
const p: React.CSSProperties = { color: "var(--color-text-muted)", lineHeight: "1.8", marginBottom: "1rem", fontSize: "1rem" }
const inlineLink = "text-[var(--color-sky-dark)] underline underline-offset-2 inline-flex items-center min-h-[48px] py-1 hover:opacity-80"

export default function EauCalcaireBody() {
  return (
    <article className="flex-1 min-w-0">
      <section>
        <p style={p}>
          L&apos;eau calcaire ne provoque pas de panne du jour au lendemain, mais elle réduit progressivement le débit,
          la pression et la durée de vie de vos équipements. Comprendre le mécanisme d&apos;entartrage et les signes
          précoces vous permet d&apos;agir avant qu&apos;un robinet, un chauffe-eau ou une canalisation ne soient
          hors d&apos;usage.
        </p>
        <ArticleFigure src="/images/articles/calcaire_eau.webp" alt="Dépôts de calcaire blanc sur une canalisation et un robinet de salle de bain entartré" caption="L'entartrage se forme là où l'eau chauffe et stagne" priority />
      </section>

      <section>
        <h2 id="mecanisme" style={h2}>Comment le calcaire s&apos;accumule dans votre plomberie</h2>
        <p style={p}>
          Le calcaire (principalement du carbonate de calcium) se dépose quand l&apos;eau chauffe ou stagne : la
          chaleur réduit la solubilité des sels minéraux, qui se fixent sur les parois des tuyaux, des résistances et
          des cartouches. Plus l&apos;eau est dure (forte teneur en calcium et magnésium), plus le dépôt est rapide.
        </p>
        <h3 style={h3}>Où l&apos;entartrage frappe en premier</h3>
        <p style={p}>
          Les zones les plus touchées sont le chauffe-eau (résistance ou serpentin), les mitigeurs thermostatiques,
          les pommeaux de douche et les canalisations de faible diamètre (Ø 10-12 mm en alimentation). Dans une{" "}
          <Link href="/articles/installation-douche-italienne" className={inlineLink}>douche à l&apos;italienne</Link>,
          le calcaire peut aussi obstruer la bonde et réduire le débit d&apos;évacuation sur le long terme.
        </p>
      </section>

      <section>
        <h2 id="signes" style={h2}>Les signes visibles d&apos;une eau trop calcaire</h2>
        <p style={p}>
          Une pression qui baisse progressivement au robinet ou à la douche est le signal le plus fréquent — souvent
          attribué à tort à un problème de réseau alors que le pommeau ou la cartouche est entartré. Les traces
          blanches sur robinets, parois de douche et fond de bouilloire confirment une eau dure.
        </p>
        <h3 style={h3}>Impact sur la robinetterie</h3>
        <p style={p}>
          Un mitigeur qui perd en douceur, qui grince ou dont le débit devient asymétrique (plus de chaud que de
          froid) cache souvent une cartouche calcifiée. Notre guide{" "}
          <Link href="/articles/robinetterie-entretien-remplacement#cartouche" className={inlineLink}>remplacement de cartouche</Link>{" "}
          détaille la procédure — un détartrage préventif tous les 12 à 18 mois évite le remplacement prématuré.
        </p>
      </section>

      <section>
        <h2 id="impact-duree-vie" style={h2}>Impact réel sur la durée de vie des équipements</h2>
        <p style={p}>
          Un chauffe-eau en eau très dure (TH &gt; 30°f) peut voir sa durée de vie réduite de 30 à 50 % : une
          résistance entartrée surconsomme de l&apos;électricité et finit par griller. Un ballon bien entretenu dure
          12 à 15 ans ; en eau très dure sans entretien, comptez 7 à 9 ans. Le{" "}
          <Link href="/articles/groupe-securite-chauffe-eau-goutte" className={inlineLink}>groupe de sécurité</Link>{" "}
          s&apos;encrasse aussi et peut fuir en continu si le calcaire bloque le clapet.
        </p>
        <h3 style={h3}>Chiffrer le surcoût</h3>
        <p style={p}>
          Une résistance calcifiée consomme jusqu&apos;à 25 % d&apos;électricité en plus pour la même quantité d&apos;eau
          chaude. Sur une facture annuelle de 400 € pour l&apos;ECS, cela représente 80 à 100 € gaspillés chaque
          année — sans compter le coût d&apos;un remplacement anticipé du ballon (800 à 1 500 € posé).
        </p>
      </section>

      <section>
        <h2 id="seuil" style={h2}>À partir de quelle dureté s&apos;inquiéter ?</h2>
        <p style={p}>
          La dureté se mesure en degrés français (°f) ou en ppm de CaCO₃. En dessous de 15°f (≈ 75 ppm), l&apos;eau
          est considérée comme douce et l&apos;entartrage reste modéré. Entre 15 et 25°f, un entretien préventif
          annuel suffit. Au-delà de 25°f, les dépôts deviennent significatifs en 6 à 12 mois sur les points chauds.
        </p>
        <p style={p}>
          Vous pouvez tester la dureté avec un bandelette réactive (5 à 15 € en pharmacie ou bricolage) ou consulter
          le rapport de qualité de votre commune, publié chaque année par le distributeur d&apos;eau.
        </p>
      </section>

      <section>
        <h2 id="solutions" style={h2}>Solutions concrètes pour protéger votre installation</h2>
        <p style={p}>
          Trois leviers complémentaires existent, sans qu&apos;aucun ne soit une solution miracle à lui seul.
        </p>
        <h3 style={h3}>Entretien préventif régulier</h3>
        <p style={p}>
          Détartrer les pommeaux, aérateurs et cartouches tous les 6 à 12 mois au vinaigre blanc chaud (30 min de
          trempage).{" "}
          <Link href="/articles/vider-chauffe-eau-tutoriel" className={inlineLink}>Vider et détartrer le chauffe-eau</Link>{" "}
          tous les 2 à 3 ans en eau dure prolonge nettement sa durée de vie.
        </p>
        <h3 style={h3}>Adoucisseur d&apos;eau : pour qui, pour quoi</h3>
        <p style={p}>
          Un adoucisseur à résine échangeuse supprime le calcium en amont de l&apos;installation — investissement de
          800 à 2 500 € posé, plus la consommation de sel de régénération. Il se justifie au-delà de 25°f si vous
          avez un chauffe-eau, un lave-linge et plusieurs mitigeurs. Il ne remplace pas l&apos;entretien des
          équipements déjà entartrés.
        </p>
        <h3 style={h3}>Étanchéité et finitions en zone humide</h3>
        <p style={p}>
          En salle de bain, un{" "}
          <Link href="/articles/joint-fibre-ou-caoutchouc#joint-silicone" className={inlineLink}>joint silicone antifongique</Link>{" "}
          bien posé limite les infiltrations derrière carrelage — le calcaire favorise aussi les moisissures sur les
          joints dégradés lors d&apos;un{" "}
          <Link href="/articles/remplacement-receveur-douche" className={inlineLink}>remplacement de receveur</Link>.
        </p>
      </section>

      <section>
        <h2 id="faq" style={h2}>FAQ</h2>
        <div className="flex flex-col gap-4 mt-6">
          <FaqItem question="Le vinaigre blanc suffit-il à détartrer une canalisation entartrée ?" answer="Pour les petits diamètres (pommeau, aérateur, siphon), oui — trempage 30 min à 1 h dans du vinaigre blanc chaud. Pour une canalisation encastrée fortement entartrée, le vinaigre n'atteint pas le dépôt en profondeur : il faut un détartrant professionnel ou le remplacement du tronçon concerné." />
          <FaqItem question="L'eau en bouteille ou filtrée protège-t-elle ma plomberie ?" answer="Non. Seule l'eau qui circule dans vos tuyaux compte. Une carafe filtrante ou une bouteille n'a aucun effet sur l'entartrage du chauffe-eau ou des canalisations. Seul un adoucisseur ou un anti-tartre installé sur la conduite d'arrivée générale agit sur l'ensemble du réseau." />
          <FaqItem question="À quelle fréquence détartrer un chauffe-eau en Île-de-France ?" answer="Dans la plupart des communes franciliennes (eau entre 20 et 35°f), un détartrage tous les 2 à 3 ans est recommandé. Si votre groupe de sécurité fuit en continu ou si la résistance consomme nettement plus, avancez le détartrage à 18-24 mois." />
        </div>
      </section>
    </article>
  )
}
