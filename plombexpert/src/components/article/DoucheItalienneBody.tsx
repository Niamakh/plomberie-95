import { CheckCircle, Lightbulb } from "lucide-react"
import Link from "next/link"

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex gap-3 rounded-2xl p-5 my-6"
      style={{ background: "var(--color-sky-soft)", border: "1px solid oklch(68% 0.14 235 / 0.2)" }}
    >
      <Lightbulb size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--color-sky-dark)" }} aria-hidden="true" />
      <p className="text-base leading-relaxed" style={{ color: "var(--color-sky-dark)" }}>{children}</p>
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
  fontSize: "1rem",
}

const inlineLink =
  "text-[var(--color-sky-dark)] underline underline-offset-2 inline-flex items-center min-h-[48px] py-1 hover:opacity-80"

export default function DoucheItalienneBody() {
  return (
    <article className="flex-1 min-w-0">
      <section>
        <p style={p}>
          La douche à l&apos;italienne séduit pour son look épuré et son accessibilité, mais c&apos;est l&apos;un des
          chantiers de salle de bain les plus techniques à réussir. Une pente mal calculée ou une étanchéité négligée,
          et c&apos;est l&apos;infiltration assurée chez le voisin du dessous. Voici la méthode complète, du gros œuvre à
          la finition.
        </p>
      </section>

      <section>
        <h2 id="methodes" style={h2}>Les deux méthodes d&apos;installation</h2>

        <h3 style={h3}>Le receveur extra-plat encastré</h3>
        <p style={p}>
          Un bac préfabriqué à encastrer dans une réservation au sol. C&apos;est la solution la plus simple et la plus
          fiable pour un particulier, car la pente et l&apos;étanchéité sont déjà intégrées au receveur.
        </p>

        <ArticleFigure
          src="/images/articles/douche-italienne-receveur.svg"
          alt="Receveur extra-plat de douche italienne posé dans une réservation au sol, au niveau du carrelage"
          caption="Receveur extra-plat encastré : pente et étanchéité intégrées au bac"
          width={800}
          height={450}
          priority
        />

        <h3 style={h3}>La douche maçonnée avec caniveau</h3>
        <p style={p}>
          Le sol est carrelé en pente directe vers un caniveau d&apos;évacuation linéaire. Rendu plus esthétique, mais
          demande une vraie maîtrise du ragréage en pente et de l&apos;étanchéité liquide (SEL). À réserver à un profil
          bricoleur confirmé ou à un professionnel.
        </p>
      </section>

      <section>
        <h2 id="reservation" style={h2}>Étape 1 : la réservation au sol</h2>
        <p style={p}>
          Pour un receveur encastré, il faut creuser une réservation dont la profondeur correspond à l&apos;épaisseur du
          receveur plus celle de l&apos;évacuation (généralement 10 à 15 cm). Sur dalle béton, cela implique souvent une
          petite démolition à la disqueuse — un point qui doit être anticipé avant{" "}
          <Link href="/articles/remplacement-receveur-douche" className={inlineLink}>
            l&apos;achat du receveur
          </Link>
          .
        </p>
        <p style={p}>
          Sur plancher bois, la réservation est plus délicate : il faut renforcer la structure et prévoir un caisson
          étanche, car le bois ne tolère aucune stagnation d&apos;humidité.
        </p>
      </section>

      <section>
        <h2 id="evacuation-pente" style={h2}>Étape 2 : l&apos;évacuation et la pente</h2>
        <p style={p}>
          L&apos;évacuation doit toujours se situer au point le plus bas. La pente minimale recommandée est de 1 à 2 cm
          par mètre vers la bonde ou le caniveau. C&apos;est l&apos;étape où la majorité des erreurs de débutant se
          produisent : une pente insuffisante laisse l&apos;eau stagner, une pente trop forte rend le sol inconfortable
          et casse l&apos;effet plain-pied recherché.
        </p>
        <p style={p}>
          Le diamètre d&apos;évacuation standard est de{" "}
          <Link href="/articles/evacuation-canalisations-guide#pente" className={inlineLink}>
            50 mm
          </Link>{" "}
          pour une bonde ponctuelle, et peut aller jusqu&apos;à 90 mm sur les caniveaux à fort débit.
        </p>

        <ArticleFigure
          src="/images/articles/douche-italienne-pente.svg"
          alt="Schéma de pente d'une douche italienne : 1 à 2 cm par mètre vers la bonde d'évacuation Ø 50 mm"
          caption="Pente minimale : 1 à 2 cm/m vers le point le plus bas"
          width={800}
          height={450}
        />
      </section>

      <section>
        <h2 id="etancheite" style={h2}>Étape 3 : l&apos;étanchéité, l&apos;étape qui ne pardonne pas</h2>
        <p style={p}>
          Même avec un receveur préfabriqué étanche, la jonction entre le receveur et le carrelage mural reste un point de
          fragilité. Il faut :
        </p>
        <ol className="flex flex-col gap-3 my-4 pl-1">
          {[
            "Appliquer une bande d'étanchéité (bande à joint) sur tout le pourtour, remontée d'au moins 10 cm sur les murs adjacents.",
            "Passer une résine d'étanchéité liquide (SEL) sur l'ensemble du support avant carrelage, y compris sur les 20 premiers centimètres de mur.",
            "Laisser sécher selon le temps indiqué par le fabricant avant toute pose de carrelage — ne jamais accélérer cette étape.",
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
        <Tip>
          Une astuce de chantier : faites un essai d&apos;étanchéité avant de carreler. Bouchez l&apos;évacuation,
          remplissez le receveur de quelques centimètres d&apos;eau colorée et laissez reposer 24h. Si aucune trace
          n&apos;apparaît en dessous, vous pouvez carreler l&apos;esprit tranquille.
        </Tip>

        <ArticleFigure
          src="/images/articles/douche-italienne-etancheite.svg"
          alt="Application de bande d'étanchéité et résine liquide SEL sur le pourtour d'un receveur de douche"
          caption="Bande à joint remontée sur les murs + couche de SEL avant carrelage"
          width={800}
          height={450}
        />
      </section>

      <section>
        <h2 id="sol-antiderapant" style={h2}>Étape 4 : la pose du sol antidérapant</h2>
        <p style={p}>
          Pour une douche italienne, privilégiez un carrelage classé PN18 ou supérieur (norme antidérapance pieds nus),
          avec des carreaux de petit format (mosaïque de 5x5 cm par exemple) qui suivent mieux la pente sans créer de
          contremarches visibles.
        </p>
      </section>

      <section>
        <h2 id="erreurs" style={h2}>Erreurs fréquentes à éviter</h2>
        <ul className="flex flex-col gap-2 my-4">
          <li className="flex items-start gap-2 text-base" style={{ color: "var(--color-text-muted)" }}>
            <CheckCircle size={15} className="flex-shrink-0 mt-1" style={{ color: "oklch(55% 0.15 145)" }} aria-hidden="true" />
            Négliger la réservation avant l&apos;achat du receveur (mauvaise épaisseur = chantier à refaire)
          </li>
          <li className="flex items-start gap-2 text-base" style={{ color: "var(--color-text-muted)" }}>
            <CheckCircle size={15} className="flex-shrink-0 mt-1" style={{ color: "oklch(55% 0.15 145)" }} aria-hidden="true" />
            Oublier la remontée d&apos;étanchéité sur les murs, en ne traitant que le sol
          </li>
          <li className="flex items-start gap-2 text-base" style={{ color: "var(--color-text-muted)" }}>
            <CheckCircle size={15} className="flex-shrink-0 mt-1" style={{ color: "oklch(55% 0.15 145)" }} aria-hidden="true" />
            Sous-dimensionner l&apos;évacuation par rapport au{" "}
            <Link href="/articles/robinetterie-entretien-remplacement#mitigeur-fuit" className={inlineLink}>
              débit de la douche
            </Link>
          </li>
          <li className="flex items-start gap-2 text-base" style={{ color: "var(--color-text-muted)" }}>
            <CheckCircle size={15} className="flex-shrink-0 mt-1" style={{ color: "oklch(55% 0.15 145)" }} aria-hidden="true" />
            Poser un carrelage lisse et glissant en zone humide
          </li>
        </ul>
      </section>

      <section>
        <h2 id="pro-ou-diy" style={h2}>Faire appel à un professionnel ou le faire soi-même ?</h2>
        <p style={p}>
          L&apos;installation d&apos;un receveur extra-plat encastré reste accessible à un bricoleur expérimenté à l&apos;aise
          avec le carrelage. En revanche, dès qu&apos;il s&apos;agit de modifier l&apos;évacuation existante, de percer une dalle
          porteuse, ou d&apos;installer une douche maçonnée avec caniveau, faire appel à un plombier reste le choix le plus
          sûr — l&apos;étanchéité mal maîtrisée est l&apos;un des sinistres les plus coûteux en rénovation de salle de bain.
        </p>
      </section>

      <section>
        <h2 id="faq" style={h2}>FAQ</h2>
        <div className="flex flex-col gap-4 mt-6">
          <FaqItem
            question="Quelle pente minimale pour une douche italienne ?"
            answer="1 à 2 cm par mètre linéaire vers le point d'évacuation."
          />
          <FaqItem
            question="Peut-on installer une douche italienne sur un plancher bois ?"
            answer="Oui, mais cela nécessite un renfort de structure et un caisson étanche spécifique, à ne pas improviser."
          />
          <FaqItem
            question="Combien de temps attendre avant de carreler après l'étanchéité liquide ?"
            answer="Généralement 24 à 48h selon le produit — toujours se référer à la fiche technique du fabricant."
          />
        </div>
      </section>
    </article>
  )
}
