import Link from "next/link"

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
      <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}>
        {question}
      </h3>
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

export default function PerCuivreMulticoucheBody() {
  return (
    <article className="flex-1 min-w-0">
      <section>
        <p style={p}>
          Le PER, le cuivre et le multicouche couvrent 95 % des rénovations de tuyauterie en France — mais ils ne
          s&apos;utilisent pas indifféremment. Voici comment choisir selon votre budget, vos compétences et la nature
          du chantier, sans vous retrouver avec un matériau interdit ou une pose qui ne tiendra pas dix ans.
        </p>
        <ArticleFigure src="/images/articles/per-cuivre-multicouche.svg" alt="Comparatif visuel de tuyaux PER, cuivre et multicouche pour la plomberie d'une rénovation" caption="PER, cuivre, multicouche : trois matériaux, trois méthodes de pose" priority />
      </section>

      <section>
        <h2 id="per" style={h2}>Le PER : souple, économique, mais encadré</h2>
        <p style={p}>
          Le PER (polyéthylène réticulé) est le choix le plus économique pour une rénovation rapide : le tube se
          courbe à la main, se glisse dans les cloisons sans soudure et se raccorde par des raccords à sertir ou à
          compression. Comptez 1,50 à 3 € le mètre pour un tube Ø 16 mm, contre 6 à 10 € en cuivre.
        </p>
        <h3 style={h3}>Facilité de pose et limites techniques</h3>
        <p style={p}>
          Sa souplesse permet de contourner une poutre ou de traverser une cloison sans raccord intermédiaire — un
          vrai gain de temps sur un chantier de{" "}
          <Link href="/articles/remplacement-receveur-douche" className={inlineLink}>rénovation de salle de bain</Link>.
          En revanche, le PER ne supporte ni les UV (interdit en apparent), ni les températures au-delà de 95 °C en
          continu. Il est réservé à l&apos;eau froide et à l&apos;eau chaude sanitaire, pas au chauffage central ni aux
          circuits haute température.
        </p>
        <h3 style={h3}>Où le PER est interdit ou déconseillé</h3>
        <p style={p}>
          En copropriété, le règlement peut imposer le cuivre ou le multicouche sur les parties communes et parfois
          dans les logements. En apparent sous combles ou en extérieur, le PER se dégrade au soleil. Pour une{" "}
          <Link href="/articles/installation-douche-italienne" className={inlineLink}>douche à l&apos;italienne</Link>,
          le PER convient pour l&apos;alimentation, mais l&apos;étanchéité de finition reste une affaire de{" "}
          <Link href="/articles/joint-fibre-ou-caoutchouc#joint-silicone" className={inlineLink}>joints silicone sanitaires</Link>,
          pas de tuyauterie.
        </p>
      </section>

      <section>
        <h2 id="cuivre" style={h2}>Le cuivre : la référence durable</h2>
        <p style={p}>
          Le cuivre reste le matériau le plus durable (50 ans et plus) et le plus universel : eau froide, eau chaude,
          chauffage, gaz (avec le bon type). Sa conductivité et sa résistance à la pression en font la norme dans les
          immeubles anciens et les installations apparentes.
        </p>
        <h3 style={h3}>Coût et compétences requises</h3>
        <p style={p}>
          Le cuivre coûte 2 à 3 fois plus cher que le PER au mètre, et la pose demande du brasage ou des raccords
          à visser avec un outillage adapté — voir notre guide des{" "}
          <Link href="/articles/outils-plomberie-indispensables" className={inlineLink}>outils de plomberie indispensables</Link>.
          Un bricoleur motivé peut apprendre le brasage, mais comptez une demi-journée de pratique avant un
          raccord étanche en situation réelle.
        </p>
        <h3 style={h3}>Quand le cuivre reste imposé</h3>
        <p style={p}>
          Le cuivre est souvent exigé en apparent (esthétique, résistance UV), en chaufferie (températures élevées)
          et dans certaines copropriétés par le règlement de l&apos;immeuble. Pour le raccordement d&apos;un{" "}
          <Link href="/articles/vider-chauffe-eau-tutoriel" className={inlineLink}>chauffe-eau</Link>,
          le cuivre ou le multicouche sont les deux options les plus fiables — le PER y est toléré pour l&apos;ECS
          mais pas pour le circuit de chauffage.
        </p>
      </section>

      <section>
        <h2 id="multicouche" style={h2}>Le multicouche : le compromis rénovation</h2>
        <p style={p}>
          Le multicouche (couche PE intérieure + aluminium + PE extérieure) combine la souplesse du PER et une
          meilleure tenue en température grâce à la barrière aluminium. C&apos;est le matériau le plus posé en
          rénovation depuis quinze ans, entre 2,50 et 5 € le mètre.
        </p>
        <h3 style={h3}>Sertissage : la clé d&apos;une pose fiable</h3>
        <p style={p}>
          Les raccords se sertissent avec une pince dédiée (manuelle ou électrique). Un sertissage mal réalisé est
          la première cause de fuite sur multicouche — d&apos;où l&apos;importance d&apos;utiliser les bagues du même
          fabricant que les raccords et de contrôler visuellement chaque sertissage. Les raccords à sertir sans
          calibrage précis sont à proscrire.
        </p>
        <h3 style={h3}>Chauffage vs eau sanitaire</h3>
        <p style={p}>
          Le multicouche Ø 16 mm convient à l&apos;eau chaude sanitaire et au chauffage basse température (plancher
          chauffant, radiateurs basse température). Pour un circuit de chauffage haute température (&gt; 80 °C en
          continu), le cuivre reste préférable. Le multicouche ne se plie pas aussi facilement que le PER mais
          accepte un rayon de courbure raisonnable sans raccord.
        </p>
      </section>

      <section>
        <h2 id="comparatif" style={h2}>Tableau comparatif synthétique</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse" style={{ border: "1px solid var(--color-border)" }}>
            <thead>
              <tr style={{ background: "var(--color-sky-soft)" }}>
                {["Critère", "PER", "Cuivre", "Multicouche"].map((h) => (
                  <th key={h} className="p-3 text-left font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", borderBottom: "1px solid var(--color-border)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Prix au mètre (Ø16)", "1,50–3 €", "6–10 €", "2,50–5 €"],
                ["Durée de vie", "25–40 ans", "50 ans+", "40–50 ans"],
                ["Pose", "Très facile", "Brasage / vissé", "Sertissage"],
                ["Chauffage", "Non", "Oui", "Basse temp. OK"],
                ["Apparent / UV", "Interdit", "Oui", "Déconseillé"],
                ["Température max.", "95 °C", "200 °C+", "95 °C"],
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "oklch(98% 0.01 240)" }}>
                  {row.map((cell, j) => (
                    <td key={j} className="p-3" style={{ color: "var(--color-text-muted)", borderBottom: "1px solid var(--color-border)" }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="choix-chantier" style={h2}>Quel matériau pour votre chantier ?</h2>
        <p style={p}>
          Pour une rénovation légère (remplacement d&apos;un tronçon encastré, alimentation d&apos;un lavabo), le PER
          ou le multicouche suffisent largement. Pour une réfection complète avec chauffage, basculez vers le cuivre
          ou le multicouche selon votre budget. En cas de doute sur le règlement de copropriété, consultez le syndic
          avant d&apos;acheter — un matériau non conforme peut vous obliger à tout refaire.
        </p>
        <p style={p}>
          En résumé : le PER pour l&apos;économie et la simplicité, le cuivre pour la durabilité et les contraintes
          réglementaires, le multicouche pour le meilleur compromis rénovation. Quel que soit votre choix, respectez
          les diamètres (12, 14, 16 mm en alimentation courante) et vérifiez la pression du réseau avant pose.
        </p>
      </section>

      <section>
        <h2 id="faq" style={h2}>FAQ</h2>
        <div className="flex flex-col gap-4 mt-6">
          <FaqItem question="Peut-on mélanger PER et multicouche sur la même installation ?" answer="Oui, à condition d'utiliser des raccords de transition adaptés (raccord PER-multicouche à sertir ou à compression). Ne branchez jamais deux matériaux directement sans raccord homologué — la dilatation différentielle provoquerait une fuite en quelques mois." />
          <FaqItem question="Le PER est-il autorisé pour l'alimentation d'un chauffe-eau ?" answer="Oui pour l'eau chaude sanitaire, à condition de respecter la température maximale du fabricant (généralement 95 °C) et de ne pas passer en apparent. En revanche, le PER ne convient pas au circuit de chauffage du ballon ni aux installations solaires thermiques haute température." />
          <FaqItem question="Multicouche ou cuivre pour une rénovation complète de salle de bain ?" answer="Le multicouche est le choix le plus courant : pose rapide, bon rapport qualité-prix, durée de vie correcte. Le cuivre se justifie si le règlement de copropriété l'impose, si vous voulez une installation apparente esthétique, ou si vous brasez déjà sur d'autres circuits cuivre existants." />
        </div>
      </section>
    </article>
  )
}
