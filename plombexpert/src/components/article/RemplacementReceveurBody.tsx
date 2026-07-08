import { CheckCircle } from "lucide-react"
import Link from "next/link"

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-2xl p-6" style={{ background: "white", border: "1px solid var(--color-border)" }}>
      <p
        className="font-bold mb-2"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1rem" }}
      >
        {question}
      </p>
      <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{answer}</p>
    </div>
  )
}

function ArticleFigure({
  src,
  alt,
  caption,
  width,
  height,
  priority = false,
}: {
  src: string
  alt: string
  caption: string
  width: number
  height: number
  priority?: boolean
}) {
  return (
    <figure className="my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="w-full h-auto rounded-2xl"
        style={{ border: "1px solid var(--color-border)" }}
      />
      <figcaption className="text-sm mt-3 text-center" style={{ color: "var(--color-text-muted)" }}>
        {caption}
      </figcaption>
    </figure>
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

const p: React.CSSProperties = {
  color: "var(--color-text-muted)",
  lineHeight: "1.8",
  marginBottom: "1rem",
  fontSize: "1rem",
}

const inlineLink =
  "text-[var(--color-sky-dark)] underline underline-offset-2 inline-flex items-center min-h-[48px] py-1 hover:opacity-80"

export default function RemplacementReceveurBody() {
  return (
    <article className="flex-1 min-w-0">
      <section>
        <p style={p}>
          Un receveur fissuré, jauni, ou tout simplement trop haut pour une douche moderne à l&apos;italienne : le
          remplacement est un chantier fréquent en rénovation. Voici comment s&apos;y prendre, que vous conserviez
          l&apos;évacuation existante ou que vous{" "}
          <Link href="/articles/installation-douche-italienne" className={inlineLink}>
            transformiez une ancienne baignoire
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="pourquoi-remplacer" style={h2}>Identifier pourquoi remplacer (et quel receveur choisir)</h2>

        <p style={p}>
          <strong>Receveur fissuré ou percé</strong> : réparation temporaire possible avec une résine spécifique, mais
          une fissure structurelle impose un remplacement — le risque de{" "}
          <Link href="/articles/fuites-detecter-reparer#fuite-evacuation" className={inlineLink}>
            fuite sous le receveur
          </Link>{" "}
          ne se voit souvent que trop tard, quand les dégâts sont déjà là.
        </p>

        <p style={p}>
          <strong>Receveur trop haut</strong> : les anciens receveurs (12 à 15 cm de rebord) laissent progressivement
          place aux modèles extra-plats (2,5 à 4 cm), plus accessibles et plus esthétiques.
        </p>

        <p style={p}>
          <strong>Transformation baignoire en douche</strong> : un chantier différent, qui implique de déposer la
          baignoire, d&apos;adapter l&apos;évacuation existante (souvent positionnée pour une baignoire, donc à repenser
          en termes de pente) et de reprendre l&apos;étanchéité et le carrelage sur une surface plus large.
        </p>

        <ArticleFigure
          src="/images/articles/receveur-ancien-depose.webp"
          alt="Ancien receveur de douche fissuré déposé, bonde et siphon démontés sur le sol de la salle de bain"
          caption="Receveur fissuré ou trop haut : la dépose précède toute pose neuve"
          width={800}
          height={450}
          priority
        />
      </section>

      <section>
        <h2 id="depose" style={h2}>Étape 1 : couper l&apos;eau et déposer l&apos;ancien receveur</h2>
        <p style={p}>
          Coupez l&apos;arrivée d&apos;eau générale ou la vanne dédiée à la salle de bain. Démontez la bonde et
          débranchez le siphon. Selon le type de pose :
        </p>
        <ul className="flex flex-col gap-3 my-4">
          <li className="flex items-start gap-2 text-base" style={{ color: "var(--color-text-muted)" }}>
            <CheckCircle size={15} className="flex-shrink-0 mt-1" style={{ color: "oklch(55% 0.15 145)" }} aria-hidden="true" />
            <span>
              <strong>Receveur posé sur pieds</strong> : dépose généralement simple après retrait du joint de silicone
              périphérique.
            </span>
          </li>
          <li className="flex items-start gap-2 text-base" style={{ color: "var(--color-text-muted)" }}>
            <CheckCircle size={15} className="flex-shrink-0 mt-1" style={{ color: "oklch(55% 0.15 145)" }} aria-hidden="true" />
            <span>
              <strong>Receveur encastré ou maçonné</strong> : la dépose peut nécessiter de casser le receveur en place à
              la disqueuse ou au burin si le carrelage a été posé par-dessus ses bords.
            </span>
          </li>
        </ul>
      </section>

      <section>
        <h2 id="evacuation" style={h2}>Étape 2 : vérifier et adapter l&apos;évacuation</h2>
        <p style={p}>
          C&apos;est le point technique le plus important. Un nouveau receveur extra-plat impose souvent une évacuation à
          faible hauteur (parfois moins de 6 cm sous le receveur), ce qui ne correspond pas toujours à la configuration
          existante. Deux solutions :
        </p>
        <ol className="flex flex-col gap-3 my-4 pl-1">
          {[
            "Bonde extra-plate spécifique, conçue pour les faibles hauteurs, si l'écart n'est que de quelques centimètres.",
            "Reprise de la canalisation d'évacuation, en modifiant la pente ou en créant une petite chape de rehausse, si l'écart est trop important — ce chantier est nettement plus lourd et concerne surtout les transformations baignoire → douche.",
          ].map((step, i) => (
            <li key={i} className="flex gap-3 text-base" style={{ color: "var(--color-text-muted)" }}>
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ background: "var(--color-sky)", color: "white", fontFamily: "var(--font-display)" }}
              >
                {i + 1}
              </span>
              <span className="pt-0.5 leading-relaxed">
                {i === 1 ? (
                  <>
                    Reprise de la canalisation d&apos;évacuation, en modifiant la{" "}
                    <Link href="/articles/evacuation-canalisations-guide#pente" className={inlineLink}>
                      pente
                    </Link>{" "}
                    ou en créant une petite chape de rehausse, si l&apos;écart est trop important — ce chantier est
                    nettement plus lourd et concerne surtout les transformations baignoire → douche.
                  </>
                ) : (
                  step
                )}
              </span>
            </li>
          ))}
        </ol>

        <ArticleFigure
          src="/images/articles/receveur-evacuation-adaptee.webp"
          alt="Bonde extra-plate raccordée à la canalisation d'évacuation, adaptée à un receveur de faible hauteur"
          caption="Adapter l'évacuation : bonde extra-plate ou reprise de canalisation"
          width={800}
          height={450}
        />
      </section>

      <section>
        <h2 id="pose" style={h2}>Étape 3 : poser le nouveau receveur</h2>
        <ol className="flex flex-col gap-3 my-4 pl-1">
          {[
            "Positionnez le receveur à blanc pour vérifier l'alignement avec l'évacuation et les murs.",
            "Appliquez un lit de mortier-colle ou de mousse expansive spécifique receveur, selon les préconisations du fabricant, pour garantir une assise stable sans point de fragilité.",
            "Raccordez la bonde et testez l'écoulement avant de refixer définitivement.",
            "Refaites l'étanchéité en périphérie (bande à joint + résine si carrelage neuf, ou silicone sanitaire de qualité en finition).",
          ].map((step, i) => (
            <li key={i} className="flex gap-3 text-base" style={{ color: "var(--color-text-muted)" }}>
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ background: "var(--color-sky)", color: "white", fontFamily: "var(--font-display)" }}
              >
                {i + 1}
              </span>
              <span className="pt-0.5 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>

        <ArticleFigure
          src="/images/articles/receveur-neuf-pose.webp"
          alt="Nouveau receveur extra-plat posé et raccordé à la bonde, joint périphérique en cours de finition"
          caption="Receveur neuf posé : test d'écoulement avant fixation définitive"
          width={800}
          height={450}
        />
      </section>

      <section>
        <h2 id="finition" style={h2}>Étape 4 : la finition qui change tout</h2>
        <p style={p}>
          La jonction entre le nouveau receveur et le carrelage existant est souvent le point délicat en rénovation
          partielle : les carreaux d&apos;origine ne descendent pas toujours assez bas pour couvrir un receveur plus fin.
          Il faut alors prévoir soit une plinthe de finition adaptée, soit une reprise partielle du carrelage bas de mur.
        </p>
      </section>

      <section>
        <h2 id="budget" style={h2}>Budget et temps à prévoir</h2>
        <p style={p}>
          Pour un remplacement simple (même emplacement, évacuation compatible), comptez une bonne journée de travail.
          Pour une transformation baignoire en douche avec reprise d&apos;évacuation et de carrelage, le chantier
          s&apos;étale généralement sur 2 à 4 jours selon l&apos;ampleur de la reprise murale.
        </p>
      </section>

      <section>
        <h2 id="professionnel" style={h2}>Quand faire appel à un professionnel</h2>
        <p style={p}>
          Le remplacement à l&apos;identique, sur une évacuation compatible, reste accessible à un bricoleur à l&apos;aise
          avec l&apos;étanchéité. En revanche, dès qu&apos;il faut modifier la pente d&apos;évacuation, intervenir sur
          une dalle porteuse, ou reprendre l&apos;étanchéité sous carrelage sur une grande surface, l&apos;intervention
          d&apos;un plombier ou d&apos;un carreleur limite fortement le risque de sinistre — un défaut d&apos;étanchéité
          sous receveur ne se révèle souvent qu&apos;après plusieurs mois, une fois les dégâts déjà installés sous le
          sol.
        </p>
      </section>

      <section>
        <h2 id="faq" style={h2}>FAQ</h2>
        <div className="flex flex-col gap-4 mt-6">
          <FaqItem
            question="Peut-on remplacer un receveur sans casser le carrelage mural ?"
            answer="Oui, si le nouveau receveur a des dimensions proches de l'ancien et que les carreaux existants descendent suffisamment bas pour couvrir la jonction."
          />
          <FaqItem
            question="Faut-il changer la bonde en même temps que le receveur ?"
            answer="C'est fortement recommandé : une bonde ancienne réutilisée sur un nouveau receveur est une cause fréquente de micro-fuites après quelques mois."
          />
          <FaqItem
            question="Combien de temps attendre avant d'utiliser la douche après la pose ?"
            answer="Au moins 24h, le temps que le mortier-colle ou la mousse de fixation ait pris, et que l'étanchéité en périphérie ait fini de sécher."
          />
        </div>
      </section>
    </article>
  )
}
