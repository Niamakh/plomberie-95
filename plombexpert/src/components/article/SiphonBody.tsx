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
      {steps.map((s, i) => (
        <li key={i} className="flex gap-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "var(--color-sky)", color: "white", fontFamily: "var(--font-display)" }}>{i + 1}</span>
          <div className="pt-1">
            <p className="font-semibold mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{s.title}</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{s.desc}</p>
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
        <Wrench size={15} style={{ color: "var(--color-sky-dark)" }} aria-hidden="true" />Matériel nécessaire
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {tools.map((t, i) => (
          <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-sky)" }} aria-hidden="true" />{t}
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
          <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: "oklch(55% 0.15 145)" }} aria-hidden="true" />{item}
        </li>
      ))}
    </ul>
  )
}
const h2: React.CSSProperties = { fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.55rem", fontWeight: 700, marginTop: "3rem", marginBottom: "1rem", scrollMarginTop: "5rem" }
const h3: React.CSSProperties = { fontFamily: "var(--font-display)", color: "var(--color-text-primary)", fontSize: "1.15rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }
const p: React.CSSProperties = { color: "var(--color-text-muted)", lineHeight: "1.8", marginBottom: "1rem", fontSize: "0.97rem" }

export default function SiphonBody() {
  return (
    <article className="flex-1 min-w-0">
      <section>
        <p style={p}>Le siphon est une pièce à quelques euros qui accomplit un rôle essentiel : il crée un bouchon d'eau permanent qui empêche les gaz d'égout (méthane, CO2, H2S) de remonter dans votre logement. Sans siphon — ou avec un siphon à sec — votre maison se transforme en cheminée à odeurs.</p>
        <InfoBox>Le mot "siphon" vient du grec siphon (tube). En plomberie, c'est tout simplement une courbure en forme de U dans la canalisation d'évacuation. L'eau reste bloquée dans ce U et fait obstacle aux gaz.</InfoBox>
      </section>

      <section>
        <h2 id="role-siphon" style={h2}>Le rôle du siphon expliqué simplement</h2>
        <p style={p}>Imaginez un tunnel en forme de U renversé. L'eau remplit le bas du U en permanence. Les gaz venant de l'égout ne peuvent pas traverser cette barrière liquide — ils sont bloqués. Quand vous utilisez l'eau, elle passe par-dessus le U et s'évacue, mais le bas du U reste toujours rempli.</p>
        <p style={p}>C'est pour cette raison qu'on ne doit pas laisser un évier ou un lavabo inutilisé pendant longtemps sans y verser d'eau : le siphon s'assèche par évaporation et les odeurs remontent.</p>
      </section>

      <section>
        <h2 id="types" style={h2}>Les différents types de siphons</h2>
        <div className="flex flex-col gap-4 my-5">
          {[
            { type: "Siphon à bouteille", desc: "Le plus courant sous les éviers de cuisine et lavabos. Corps cylindrique en plastique avec une bouteille démontable par le bas. Facile à nettoyer et à démonter.", usage: "Évier, lavabo" },
            { type: "Siphon tubulaire (en S ou en P)", desc: "Tube coudé en forme de S ou P. Plus discret et adaptable. Le tube en S sert pour une évacuation dans le sol, en P pour une évacuation murale.", usage: "Lavabo, évier" },
            { type: "Siphon à culot (ou siphon de sol)", desc: "Plat, encastré dans le sol. Récupère les eaux de douche italienne ou de garage. Avec grille amovible pour nettoyage.", usage: "Douche à l'italienne, garage" },
            { type: "Siphon baignoire/douche", desc: "Intégré dans le bonde de la baignoire ou la bonde de douche. Combiné avec le bouchon et la grille.", usage: "Baignoire, douche" },
            { type: "Siphon WC", desc: "Intégré dans la forme de la cuvette des toilettes. N'est pas démontable — c'est la forme même du fond de la cuvette qui crée le siphon.", usage: "WC" },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl p-5" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{s.type}</p>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }}>{s.usage}</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 id="odeurs" style={h2}>Odeurs d'égout : le siphon en cause</h2>
        <p style={p}>Si une odeur d'égout remonte par un point d'eau, le siphon est presque toujours en cause. Voici les 3 situations :</p>
        <div className="flex flex-col gap-3 my-5">
          {[
            { cause: "Siphon à sec (évaporation)", symptome: "Odeur après une absence ou sur un point d'eau peu utilisé", solution: "Versez 1 litre d'eau + quelques gouttes d'huile alimentaire (ralentit l'évaporation)." },
            { cause: "Siphon encrassé", symptome: "Odeur permanente même en utilisant l'eau normalement", solution: "Nettoyage complet du siphon (voir section suivante)." },
            { cause: "Siphon mis en dépression", symptome: "Gargouillis + odeur après utilisation d'un autre point d'eau proche", solution: "Installer un clapet anti-vide (aérateur) sur la canalisation — 10 à 25 €." },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl p-5" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <p className="font-bold text-sm mb-1" style={{ fontFamily: "var(--font-display)", color: "oklch(46% 0.14 60)" }}>⚠ {item.cause}</p>
              <p className="text-xs mb-2 italic" style={{ color: "var(--color-text-soft)" }}>Symptôme : {item.symptome}</p>
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>→ {item.solution}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 id="nettoyer" style={h2}>Nettoyer un siphon à bouteille</h2>
        <p style={p}>Le siphon de cuisine ou de lavabo accumule cheveux, graisses et résidus de savon. Un nettoyage mensuel évite les bouchons et les odeurs.</p>
        <ToolsList tools={["Seau ou bassine", "Gants", "Brosse à vaisselle ou cure-pipe", "Vinaigre blanc", "Bicarbonate de soude (optionnel)"]} />
        <StepList steps={[
          { title: "Placez un seau sous le siphon", desc: "Le siphon contient de l'eau — elle va se vider quand vous l'ouvrirez." },
          { title: "Dévissez la bouteille", desc: "Tournez la partie basse du siphon (la bouteille) dans le sens antihoraire. Sur les modèles récents, pas besoin d'outil. Sur les anciens, une pince peut être nécessaire." },
          { title: "Videz et nettoyez la bouteille", desc: "Retirez les dépôts à la main (oui, c'est peu glamour). Rincez à l'eau chaude. Frottez l'intérieur avec une brosse. Si les dépôts sont collés, faites tremper 30 min dans du vinaigre chaud." },
          { title: "Nettoyez l'entrée de canalisation", desc: "Avec un cure-pipe ou une petite brosse, nettoyez l'intérieur du tube d'entrée de canalisation (côté mur). Les cheveux et la graisse s'y accumulent également." },
          { title: "Revissez et testez", desc: "Revissez la bouteille à la main, sans forcer. Faites couler de l'eau et vérifiez qu'il n'y a pas de fuite au niveau du raccord. Un suintement indique un joint à remplacer." },
        ]} />
        <Tip>Après nettoyage, versez 100 g de bicarbonate puis 25 cl de vinaigre chaud dans la bonde. Laissez agir 15 minutes puis rincez à l'eau chaude. Ça nettoie la canalisation en aval et désodorise.</Tip>
      </section>

      <section>
        <h2 id="deboucher" style={h2}>Déboucher un siphon bouché</h2>
        <p style={p}>Un siphon bouché (eau qui ne s'évacue plus ou très lentement) se résout presque toujours en moins de 10 minutes.</p>
        <h3 style={h3}>Méthode 1 : démontage direct</h3>
        <p style={p}>Sur un siphon à bouteille, la solution la plus rapide est de le démonter directement et de nettoyer le bouchon à la main. Placez un seau, dévissez, retirez le bouchon et remontez.</p>
        <h3 style={h3}>Méthode 2 : ventouse</h3>
        <p style={p}>Si le siphon n'est pas accessible (douche, baignoire), utilisez une ventouse plate sur la bonde. 10 à 15 allers-retours vigoureux délogent la plupart des bouchons de cheveux.</p>
        <h3 style={h3}>Méthode 3 : furet fin</h3>
        <p style={p}>Un petit furet de 3-5 mm de diamètre permet d'atteindre les bouchons de cheveux dans les bondes de douche sans démonter le siphon. Insérez, tournez et retirez le bouchon.</p>
        <Warning>Ne versez jamais de produit chimique (soude, acide) dans un siphon en PVC sans ventilation — les vapeurs sont dangereuses. Et ne mélangez jamais deux produits chimiques différents.</Warning>
      </section>

      <section>
        <h2 id="fuite-siphon" style={h2}>Siphon qui fuit : diagnostic et réparation</h2>
        <p style={p}>Une flaque sous l'évier ou le lavabo vient presque toujours du siphon. Voici les cas possibles :</p>
        <div className="flex flex-col gap-3 my-5">
          {[
            { lieu: "Fuite au niveau de la bouteille", cause: "Joint torique usé ou bouteille mal revissée", solution: "Resserrez la bouteille. Si ça coule encore, remplacez le joint torique (1 €) ou la bouteille complète (5-10 €)." },
            { lieu: "Fuite au raccord entre siphon et bonde", cause: "Écrou de compression desserré ou joint plat usé", solution: "Resserrez l'écrou de compression. Si insuffisant, remplacez le joint plat interne." },
            { lieu: "Fuite au raccord côté mur/sol", cause: "Bague d'about insuffisamment vissée ou joint usé", solution: "Poussez le tube dans la canalisation et assurez-vous que la bague est bien en place et serrée." },
            { lieu: "Fissure sur le corps du siphon", cause: "Impact, gel ou vieillissement du plastique", solution: "Remplacement complet du siphon — 8 à 25 € selon le modèle." },
          ].map((r, i) => (
            <div key={i} className="rounded-2xl p-4" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <p className="font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{r.lieu}</p>
              <p className="text-xs mb-1" style={{ color: "var(--color-sky-dark)" }}>Cause : {r.cause}</p>
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{r.solution}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 id="remplacer" style={h2}>Remplacer un siphon complet</h2>
        <p style={p}>Un siphon fissuré, jauni ou encrassé au-delà du nettoyable doit être remplacé. Opération simple, 15 à 20 minutes.</p>
        <ToolsList tools={["Nouveau siphon (même type, même sortie : horizontal/vertical)", "Seau", "Gants", "Pince multiprise (si vieux siphon récalcitrant)"]} />
        <StepList steps={[
          { title: "Achetez le bon siphon", desc: "Mesurez la sortie (vers le mur ou vers le bas), le diamètre de bonde (32 ou 40 mm) et la distance entre la bonde et la canalisation. Prenez un siphon extensible si besoin." },
          { title: "Démontez l'ancien siphon", desc: "Dévissez tous les raccords dans l'ordre : bonde → siphon → sortie vers mur. Placez un seau pour récupérer l'eau." },
          { title: "Retirez les vieux joints", desc: "Nettoyez les surfaces de contact. Vérifiez l'état de la bonde — si elle est aussi abîmée, remplacez-la en même temps." },
          { title: "Montez le nouveau siphon", desc: "Assemblez les pièces dans l'ordre inverse. Vissez à la main — inutile d'utiliser un outil pour le PVC. Vérifiez que les joints sont bien positionnés." },
          { title: "Testez l'étanchéité", desc: "Faites couler l'eau pendant 1 minute en plein débit. Passez un essuie-tout sur chaque raccord. Refaites le test après 15 minutes — le PVC peut se détendre légèrement." },
        ]} />
      </section>

      <section>
        <h2 id="siphon-douche" style={h2}>Siphon de douche à l'italienne : entretien spécifique</h2>
        <p style={p}>Les siphons de douche à l'italienne (encastrés dans le sol) sont plus difficiles d'accès mais tout aussi importants à entretenir.</p>
        <CheckList items={[
          "Soulevez la grille (généralement clipsée ou vissée avec une petite vis) pour accéder au siphon",
          "Retirez les cheveux et résidus accumulés sous la grille à la main ou avec une pince",
          "Sur les siphons à cloche, soulevez la cloche (elle tourne ou se soulève) pour nettoyer le fond",
          "Rincez abondamment à l'eau chaude après nettoyage",
          "Si le siphon à l'italienne pue : vérifiez que la cloche est bien en place (étanchéité du siphon)",
          "Nettoyage recommandé : 1 fois par mois pour les douches à usage quotidien",
        ]} />
        <Tip>Pour les siphons de douche difficiles d'accès, un furet fin de 3-4 mm ou un spray enzymatique mensuel (posé le soir, rincé le matin) maintient les canalisations propres sans démontage.</Tip>
      </section>

      <section>
        <h2 id="prevention" style={h2}>Prévention : garder vos siphons en bon état</h2>
        <div className="flex flex-col gap-3 my-5">
          {[
            { freq: "Toutes les semaines", action: "Versez 1 litre d'eau bouillante dans les éviers de cuisine — ça dissout la graisse accumulée dans le siphon." },
            { freq: "Tous les mois", action: "Nettoyez les grilles de bonde (cheveux). Faites un traitement bicarbonate + vinaigre dans les siphons peu utilisés." },
            { freq: "Tous les 3 mois", action: "Démontez et nettoyez le siphon à bouteille de la cuisine — c'est lui qui accumule le plus de graisse." },
            { freq: "En cas d'absence longue", action: "Versez un demi-verre d'huile de cuisine dans chaque bonde avant de partir — l'huile flotte sur l'eau et ralentit l'évaporation du siphon." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl p-4" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <span className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap" style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }}>{item.freq}</span>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{item.action}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 id="faq" style={h2}>Questions fréquentes</h2>
        <div className="flex flex-col gap-4 mt-4">
          <FaqItem question="Mon siphon fait du bruit (gargouillis) après utilisation, est-ce normal ?" answer="Des petits gargouillis brefs sont normaux — c'est l'air qui rentre pour remplacer l'eau évacuée. Des gargouillis forts et prolongés indiquent une mise en dépression (ventilation insuffisante du réseau). Solution : installer un clapet anti-vide sur la canalisation." />
          <FaqItem question="Peut-on se passer de siphon sur une évacuation ?" answer="Non, le siphon est obligatoire sur tous les points d'eau selon les normes DTU 60.11. Sans siphon, les gaz d'égout (dont certains sont toxiques) peuvent remonter librement dans le logement." />
          <FaqItem question="Un siphon peut-il se boucher par le calcaire ?" answer="Oui, dans les régions à eau très dure. Le calcaire se dépose progressivement sur les parois, réduisant le diamètre intérieur. Un trempage dans du vinaigre chaud dissout les dépôts légers. En cas de calcaire important, remplacez le siphon." />
          <FaqItem question="La bouteille de mon siphon est toujours pleine même sans utilisation, est-ce normal ?" answer="Oui, c'est exactement le principe du siphon ! Le bas du U (la bouteille) doit toujours contenir de l'eau — c'est ce qui bloque les odeurs. Si la bouteille est vide alors que vous utilisez normalement le point d'eau, le siphon est percé." />
        </div>
      </section>
    </article>
  )
}
