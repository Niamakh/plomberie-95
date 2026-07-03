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

export default function GroupeSecuriteBody() {
  return (
    <article className="flex-1 min-w-0">
      <section>
        <p style={p}>
          Un groupe de sécurité qui goutte n&apos;est pas forcément une panne : c&apos;est souvent l&apos;évacuation
          normale de l&apos;eau dilatée lors du chauffage. En revanche, un écoulement continu ou une fuite
          importante signale une anomalie à corriger avant qu&apos;elle n&apos;abîme le ballon ou inonde le local.
        </p>
        <ArticleFigure src="/images/articles/groupe-securite-goutte.svg" alt="Groupe de sécurité de chauffe-eau avec quelques gouttes d'eau au tuyau d'évacuation" caption="Quelques gouttes pendant le chauffe : fonctionnement normal" priority />
      </section>

      <section>
        <h2 id="role" style={h2}>Rôle du groupe de sécurité sur un chauffe-eau</h2>
        <p style={p}>
          Le groupe de sécurité combine trois fonctions : clapet anti-retour (empêche l&apos;eau chaude de remonter
          dans la conduite froide), soupape de sécurité (évacue l&apos;excès de pression au-delà de 7 bars) et
          robinet de vidange. Lorsque l&apos;eau chauffe, elle se dilate : le trop-plein s&apos;évacue par le
          tuyaulette du groupe — c&apos;est ce gouttement ponctuel que vous observez.
        </p>
      </section>

      <section>
        <h2 id="normal" style={h2}>Gouttement normal : à quoi s&apos;attendre</h2>
        <p style={p}>
          Quelques gouttes pendant la montée en température ou juste après l&apos;arrêt du chauffe sont normales.
          L&apos;écoulement dure généralement 5 à 30 minutes, puis s&apos;arrête. Le volume évacué reste faible :
          moins d&apos;un demi-litre par cycle de chauffe en conditions normales.
        </p>
        <h3 style={h3}>Quand c&apos;est vraiment anormal</h3>
        <p style={p}>
          Un filet d&apos;eau continu 24 h/24, un flaque permanente sous le groupe ou plus d&apos;un litre évacué
          par jour indiquent un dysfonctionnement. Dans ce cas, consultez aussi notre guide sur l&apos;{" "}
          <Link href="/articles/eau-calcaire-impact-plomberie" className={inlineLink}>impact du calcaire</Link>{" "}
          — l&apos;entartrage du clapet est une cause fréquente.
        </p>
      </section>

      <section>
        <h2 id="causes" style={h2}>Causes d&apos;une fuite anormale du groupe de sécurité</h2>
        <p style={p}>
          Trois causes couvrent la majorité des cas de gouttement excessif.
        </p>
        <h3 style={h3}>Pression du réseau trop élevée</h3>
        <p style={p}>
          Au-delà de 3,5 bars statiques, le groupe évacue en permanence pour protéger le ballon. Installez un
          réducteur de pression en amont (25 à 60 €) si la pression dépasse 4 bars mesurés sur un robinet à froid.
        </p>
        <h3 style={h3}>Groupe entartré ou clapet défaillant</h3>
        <p style={p}>
          Le calcaire bloque le clapet anti-retour en position ouverte : l&apos;eau s&apos;écoule en continu. Un
          détartrage peut suffire sur un groupe récent ; au-delà de 5 ans en eau dure, le remplacement est plus
          fiable (15 à 40 € la pièce). Avant intervention,{" "}
          <Link href="/articles/vider-chauffe-eau-tutoriel" className={inlineLink}>videz le chauffe-eau</Link>{" "}
          pour travailler sans risque de brûlure.
        </p>
        <h3 style={h3}>Groupe de sécurité inadapté ou usé</h3>
        <p style={p}>
          Un groupe bas de gamme ou mal dimensionné (débit insuffisant pour la capacité du ballon) fatigue
          prématurément. Vérifiez que le groupe correspond à la capacité du ballon (100, 150, 200 ou 300 litres)
          indiquée sur la plaquette.
        </p>
      </section>

      <section>
        <h2 id="test" style={h2}>Test simple à faire soi-même</h2>
        <p style={p}>
          Placez un récipient gradué sous le tuyau d&apos;évacuation du groupe pendant un cycle complet de chauffe
          (comptez 2 à 3 h). Mesurez le volume récolté : moins de 200 ml = normal, entre 200 ml et 1 L = surveiller,
          plus de 1 L = intervenir. Vérifiez aussi la pression du réseau avec un manomètre (10 €) sur un robinet
          compatible.
        </p>
        <p style={p}>
          Si le gouttement persiste avec une pression inférieure à 3 bars, le groupe est probablement défaillant.
          Comparez avec les signes de{" "}
          <Link href="/articles/fuites-detecter-reparer" className={inlineLink}>fuites d&apos;eau</Link>{" "}
          pour exclure une autre origine (flexible, raccord, corrosion du ballon).
        </p>
      </section>

      <section>
        <h2 id="intervention" style={h2}>Détartrer ou remplacer le groupe ?</h2>
        <p style={p}>
          Sur un groupe de moins de 3 ans en eau modérément calcaire, un détartrage au vinaigre blanc chaud (démontage,
          trempage 1 h) peut restaurer le clapet. Au-delà de 5 ans, ou si le gouttement reprend sous 48 h après
          détartrage, remplacez le groupe entier — c&apos;est une opération de 30 minutes une fois le ballon vidé.
        </p>
        <p style={p}>
          Lors du remplacement, appliquez du filasse + pâte d&apos;étanchéité sur le raccord fileté (jamais de
          silicone sur filetage) et serrez au couple modéré. Ouvrez l&apos;eau progressivement et vérifiez
          l&apos;étanchéité pendant 24 h.
        </p>
      </section>

      <section>
        <h2 id="faq" style={h2}>FAQ</h2>
        <div className="flex flex-col gap-4 mt-6">
          <FaqItem question="Peut-on boucher le tuyau d'évacuation du groupe de sécurité ?" answer="Non, jamais. Boucher ou réduire le tuyau d'évacuation neutralise la soupape de sécurité et crée un risque d'éclatement du ballon en cas de surpression. Le tuyau doit rester libre et déboucher vers un siphon ou un évacuateur, jamais vers l'égout directement sans garde d'eau." />
          <FaqItem question="Mon groupe goutte uniquement la nuit, est-ce normal ?" answer="Oui, si le chauffe-eau est programmé en heures creuses. Le gouttement correspond à la dilatation nocturne de l'eau chauffée. Si le gouttement continue toute la journée alors que le ballon ne chauffe pas, le clapet est probablement bloqué ouvert — remplacez ou détarrez le groupe." />
          <FaqItem question="Quelle est la durée de vie d'un groupe de sécurité ?" answer="En eau douce, comptez 8 à 10 ans. En eau dure (TH supérieur à 25°f), le calcaire réduit cette durée à 4 à 6 ans. Un remplacement préventif lors du détartrage du ballon (tous les 2-3 ans) évite une fuite prolongée qui peut rouiller le socle du chauffe-eau." />
        </div>
      </section>
    </article>
  )
}
