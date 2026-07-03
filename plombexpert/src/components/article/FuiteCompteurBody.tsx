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

export default function FuiteCompteurBody() {
  return (
    <article className="flex-1 min-w-0">
      <section>
        <p style={p}>
          Une fuite après le compteur d&apos;eau vous concerne directement — réparation et facture d&apos;eau
          gaspillée incluses. Avant d&apos;appeler le plombier ou le syndic, voici comment distinguer les
          responsabilités, localiser la fuite et engager les démarches de dégrèvement auprès de votre distributeur.
        </p>
        <ArticleFigure src="/images/articles/fuite-compteur-eau.svg" alt="Schéma d'un compteur d'eau avec fuite sur la canalisation située après le compteur côté logement" caption="Après le compteur : la responsabilité incombe au propriétaire ou à l'occupant" priority />
      </section>

      <section>
        <h2 id="responsabilite" style={h2}>Avant ou après compteur : qui paie quoi ?</h2>
        <p style={p}>
          La ligne de démarcation est le compteur divisionnaire : en amont (canalisation publique jusqu&apos;au
          compteur), c&apos;est le distributeur d&apos;eau qui intervient et prend en charge les frais. En aval
          (de la sortie du compteur vers votre logement), la canalisation est privative — réparation et dégâts à
          votre charge en tant que propriétaire ou locataire selon le bail.
        </p>
        <h3 style={h3}>Cas du locataire vs propriétaire</h3>
        <p style={p}>
          Le locataire répare les fuites sur les installations dont il a l&apos;usage courant (robinets, flexibles,
          joints). Le propriétaire reste responsable du gros œuvre et des canalisations encastrées dans les murs,
          sauf clause contraire au bail. En cas de litige, la recherche de fuite permet d&apos;établir la cause
          avant de répartir les coûts.
        </p>
      </section>

      <section>
        <h2 id="localiser" style={h2}>Localiser la fuite avant toute réparation</h2>
        <p style={p}>
          Commencez par le{" "}
          <Link href="/articles/fuites-detecter-reparer#compteur" className={inlineLink}>test du compteur d&apos;eau</Link>{" "}
          : fermez tous les robinets, notez l&apos;index, attendez 2 heures sans consommer. Si l&apos;index avance,
          une fuite est active sur votre réseau privé. Rouvrez les robinets un par un pour isoler la zone (cuisine,
          salle de bain, WC, extérieur).
        </p>
        <h3 style={h3}>Fuites visibles vs cachées</h3>
        <p style={p}>
          Humidité au plafond du voisin du dessous, tache sur un mur, compteur qui tourne la nuit : autant de signes
          d&apos;une fuite encastrée. Une fuite sur évacuation (receveur, siphon) ne fait pas avancer le compteur
          d&apos;eau — voir notre guide sur les{" "}
          <Link href="/articles/fuites-detecter-reparer#fuite-evacuation" className={inlineLink}>fuites en évacuation</Link>.
          Pour une fuite sous receveur, le guide{" "}
          <Link href="/articles/remplacement-receveur-douche" className={inlineLink}>remplacement de receveur</Link>{" "}
          détaille les symptômes.
        </p>
      </section>

      <section>
        <h2 id="degravement" style={h2}>Démarches de dégrèvement auprès du distributeur</h2>
        <p style={p}>
          Si une fuite avérée a provoqué une surconsommation, vous pouvez demander un dégrèvement de facture auprès
          de votre fournisseur (Veolia, Suez, régie municipale…). La procédure est encadrée par le code de
          l&apos;environnement et les conditions générales de vente du distributeur.
        </p>
        <h3 style={h3}>Conditions habituelles</h3>
        <p style={p}>
          En pratique, le distributeur exige généralement : une attestation ou facture de réparation datée, la preuve
          que la fuite est colmatée (ou le robinet d&apos;arrêt fermé), une demande écrite dans un délai de 15 jours
          à 3 mois après réception de la facture (selon le contrat — vérifiez vos CGV). Le dégrèvement porte sur la
          part de consommation anormale, pas sur l&apos;intégralité de la facture.
        </p>
        <h3 style={h3}>Documents à préparer</h3>
        <p style={p}>
          Conservez la facture du plombier, des photos de la fuite avant réparation, l&apos;historique de
          consommation sur 12 mois (visible sur votre espace client en ligne) et le courrier de demande de
          dégrèvement. Un écart de consommation supérieur à 50 % par rapport à la moyenne des mois précédents
          renforce votre dossier.
        </p>
      </section>

      <section>
        <h2 id="copropriete" style={h2}>Fuites en copropriété : partie commune ou privative ?</h2>
        <p style={p}>
          En immeuble, la colonne montante et les canalisations desservant plusieurs logements sont des parties
          communes — réparation à la charge du syndicat des copropriétaires via les charges. La canalisation qui
          dessert uniquement votre appartement à partir du compteur divisionnaire est privative.
        </p>
        <h3 style={h3}>Que faire concrètement ?</h3>
        <p style={p}>
          Si la fuite se situe avant votre compteur ou sur une colonne commune, alertez le syndic immédiatement —
          il mandate un plombier aux frais de la copropriété. Si la fuite est après votre compteur, vous mandatez
          votre propre plombier. En cas de doute sur la frontière (compteur mal positionné, canalisation douteuse),
          une recherche de fuite par caméra ou corrélateur (150 à 400 €) tranche le litige.
        </p>
      </section>

      <section>
        <h2 id="delais" style={h2}>Délais pour agir et limiter les dégâts</h2>
        <p style={p}>
          Coupez l&apos;eau au robinet d&apos;arrêt général dès qu&apos;une fuite importante est confirmée — chaque
          heure compte sur la facture et sur les dégâts des eaux. Signalez la fuite au distributeur même si la
          réparation est privée : certains envoient un technicien gratuitement pour confirmer que la fuite n&apos;est
          pas en amont du compteur. Pour le dégrèvement, respectez impérativement le délai contractuel indiqué sur
          votre facture ou vos CGV.
        </p>
      </section>

      <section>
        <h2 id="faq" style={h2}>FAQ</h2>
        <div className="flex flex-col gap-4 mt-6">
          <FaqItem question="Le distributeur d'eau peut-il réparer une fuite après mon compteur ?" answer="Non. En aval du compteur, l'intervention relève du propriéaire ou du locataire. Le distributeur peut cependant couper l'eau au compteur en cas de fuite non colmatée mettant en danger le bâtiment, après mise en demeure. La réparation reste toujours à votre charge." />
          <FaqItem question="Combien peut-on récupérer avec un dégrèvement de facture ?" answer="Le montant varie selon le distributeur et l'ampleur de la surconsommation avérée. En pratique, on récupère souvent 50 à 80 % de la consommation excédentaire, une fois soustraite la consommation normale de référence (moyenne des mois précédents). Chaque dossier est étudié individuellement." />
          <FaqItem question="Une fuite sur le compteur lui-même, qui intervient ?" answer="Si la fuite est sur le compteur ou sur le raccord entre la canalisation publique et le compteur, c'est au distributeur d'intervenir — contactez-le en priorité. Si le compteur est dans un local privatif (cave, garage), vous devez y donner accès au technicien dans les meilleurs délais." />
        </div>
      </section>
    </article>
  )
}
