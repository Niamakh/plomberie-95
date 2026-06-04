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

export default function WCBody() {
  return (
    <article className="flex-1 min-w-0">
      <section>
        <p style={p}>Les WC sont parmi les équipements les plus sollicités de la maison — et les plus mal entretenus. Un WC qui fuit peut gaspiller 100 à 600 litres d'eau par jour. Un WC bouché paralyse toute la salle de bain. Ce guide vous donne les solutions à toutes les pannes courantes.</p>
      </section>

      <section>
        <h2 id="anatomie" style={h2}>Anatomie des WC : comprendre le mécanisme</h2>
        <div className="flex flex-col gap-3 my-5">
          {[
            { piece: "Le mécanisme de remplissage (flotteur)", desc: "Régule le remplissage du réservoir. Quand l'eau monte, le flotteur monte et ferme l'arrivée d'eau automatiquement." },
            { piece: "Le mécanisme de chasse (cloche ou à poussoir)", desc: "Déclenche l'évacuation de l'eau. Les anciens modèles ont une cloche, les modernes ont un mécanisme à poussoir simple ou double flux." },
            { piece: "Le trop-plein", desc: "Tube vertical dans le réservoir. Si le flotteur est mal réglé et l'eau monte trop, elle déborde par ce tube vers la cuvette." },
            { piece: "Le joint de cloche", desc: "Joint en caoutchouc en bas du mécanisme de chasse. Son usure provoque un filet d'eau constant dans la cuvette." },
            { piece: "Le joint de pied", desc: "Joint d'étanchéité entre la base de la cuvette et le sol. Son usure provoque des fuites au pied du WC." },
          ].map((p2, i) => (
            <div key={i} className="rounded-2xl p-4 flex gap-3" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <span className="flex-shrink-0 w-2 rounded-full self-stretch" style={{ background: "var(--color-sky)" }} aria-hidden="true" />
              <div>
                <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{p2.piece}</p>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{p2.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 id="wc-bouche" style={h2}>WC bouché : méthodes de débouchage</h2>
        <p style={p}>Un WC bouché où l'eau monte mais ne s'évacue pas demande une intervention rapide. Voici les méthodes par ordre d'efficacité croissante.</p>
        <h3 style={h3}>1. La ventouse à soufflet (méthode 1)</h3>
        <p style={p}>Contrairement à la ventouse plate pour évier, le WC nécessite une ventouse à soufflet (en forme de cloche allongée) qui s'adapte au siphon de la cuvette.</p>
        <StepList steps={[
          { title: "Positionnez la ventouse", desc: "Placez la ventouse à soufflet dans le fond de la cuvette, centrée sur l'orifice d'évacuation. Assurez-vous qu'il y a suffisamment d'eau pour couvrir la ventouse." },
          { title: "Pompez vigoureusement", desc: "Effectuez 10 à 15 mouvements rapides de va-et-vient sans décoller la ventouse. La pression/dépression alternée délogera le bouchon." },
          { title: "Tirez d'un coup sec", desc: "Après les allers-retours, tirez la ventouse vers le haut d'un coup sec. Vous devriez entendre le bouchon se libérer et l'eau s'évacuer." },
        ]} />
        <h3 style={h3}>2. Le furet WC (méthode 2)</h3>
        <p style={p}>Si la ventouse ne suffit pas, le furet WC (tête en caoutchouc, env. 15-25 €) s'introduit dans le siphon pour briser ou remonter le bouchon sans rayer la porcelaine.</p>
        <Warning>N'utilisez jamais un furet standard en métal nu dans un WC — il raye irrémédiablement la porcelaine. Utilisez uniquement un furet WC avec tête enrobée.</Warning>
        <h3 style={h3}>3. Le seau d'eau chaude (méthode 3)</h3>
        <p style={p}>Versez un seau d'eau chaude (pas bouillante — risque de fissure) d'une hauteur de 50-60 cm directement dans la cuvette. La pression et la chaleur peuvent suffire à déloger un bouchon mou.</p>
        <Tip>N'utilisez jamais de produits chimiques déboucheurs dans les WC — ils peuvent endommager le joint de wax et les canalisations PVC, et sont dangereux s'ils remontent lors du débouchage.</Tip>
      </section>

      <section>
        <h2 id="reservoir-fuit" style={h2}>Réservoir qui fuit vers la cuvette</h2>
        <p style={p}>Si vous entendez un filet d'eau couler en permanence ou si la chasse part toute seule, le réservoir fuit vers la cuvette. Coût estimé en eau gaspillée : jusqu'à 200 m³/an.</p>
        <h3 style={h3}>Test de confirmation</h3>
        <p style={p}>Versez quelques gouttes de colorant alimentaire dans le réservoir. N'actionnez pas la chasse. Attendez 15 minutes. Si la couleur apparaît dans la cuvette, le joint de cloche fuit.</p>
        <StepList steps={[
          { title: "Fermez l'arrivée d'eau", desc: "Tournez le robinet d'arrêt (derrière ou sous le WC) dans le sens horaire. Actionnez la chasse pour vider le réservoir." },
          { title: "Retirez le mécanisme de chasse", desc: "Selon le modèle : dévissez la cloche centrale (sens antihoraire) ou soulevez le mécanisme à poussoir après avoir retiré le bouton." },
          { title: "Remplacez le joint de cloche", desc: "Retirez l'ancien joint en caoutchouc à la base de la cloche. Posez un joint universel de même diamètre (2-5 €). Nettoyez le siège d'appui." },
          { title: "Remontez et testez", desc: "Remettez le mécanisme en place. Rouvrez l'eau. Attendez le remplissage et refaites le test au colorant après 15 minutes." },
        ]} />
      </section>

      <section>
        <h2 id="chasse-lente" style={h2}>Chasse d'eau lente ou incomplète</h2>
        <p style={p}>Si la chasse évacue peu d'eau ou nécessite d'actionner deux fois, plusieurs causes sont possibles :</p>
        <div className="flex flex-col gap-3 my-5">
          {[
            { cause: "Débit d'arrivée trop faible", solution: "Ouvrez entièrement le robinet d'arrêt (il est peut-être partiellement fermé). Vérifiez aussi le filtre de l'arrivée d'eau." },
            { cause: "Réservoir qui se remplit trop lentement", solution: "Le flotteur est mal réglé ou le robinet flotteur est entartré. Nettoyez ou remplacez le robinet flotteur (10-20 €)." },
            { cause: "Mécanisme de chasse usé", solution: "Le mécanisme complet (cloche + flotteur) se remplace pour 15-30 €. Préférez un kit complet plutôt que de remplacer les pièces une par une." },
            { cause: "Orifices de chasse colmatés (anciens WC)", solution: "Sous le bord de la cuvette se trouvent des petits orifices par où entre l'eau. Nettoyez-les avec du vinaigre chaud et une brosse fine." },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl p-4" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <p className="font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>Cause : {item.cause}</p>
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>→ {item.solution}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 id="flotteur" style={h2}>Régler le niveau du flotteur</h2>
        <p style={p}>Le niveau d'eau dans le réservoir doit se situer environ 2 cm sous le trop-plein. Trop haut → eau qui coule en permanence. Trop bas → chasse incomplète.</p>
        <CheckList items={[
          "Sur les anciens mécanismes à bras : pliez légèrement le bras vers le bas pour baisser le niveau, vers le haut pour le monter",
          "Sur les mécanismes modernes à flotteur latéral : tournez la vis de réglage sur la tige du flotteur",
          "Sur les mécanismes à poussoir : dévissez/serrez la tige de réglage de hauteur en haut du mécanisme",
          "Après réglage, actionnez la chasse et vérifiez que le niveau s'arrête 2 cm sous le trop-plein",
        ]} />
      </section>

      <section>
        <h2 id="joint-pied" style={h2}>Fuite au pied du WC : joint de pied</h2>
        <p style={p}>Si de l'eau apparaît autour de la base du WC après chaque chasse, le joint d'étanchéité entre la cuvette et le sol (ou le coude d'évacuation) est usé.</p>
        <ToolsList tools={["Clé à molette", "Tournevis", "Joint de cire (wax ring) ou joint mousse", "Silicone sanitaire", "Seau, éponge, gants"]} />
        <StepList steps={[
          { title: "Coupez l'eau et videz le WC", desc: "Fermez l'arrivée d'eau et actionnez la chasse plusieurs fois. Écopez le reste d'eau dans le réservoir avec une éponge." },
          { title: "Déconnectez l'arrivée d'eau", desc: "Dévissez le flexible d'alimentation du réservoir." },
          { title: "Dévissez les écrous de pied", desc: "Sous des caches décoratifs, deux boulons ancrent le WC au sol. Dévissez-les. Soulevez doucement le WC pour le décrocher du coude d'évacuation." },
          { title: "Remplacez le joint", desc: "Retirez l'ancien joint (cire ou mousse) du coude d'évacuation. Posez le nouveau joint de cire en le centrant sur l'orifice." },
          { title: "Remontez et sigillez", desc: "Reposez le WC en appuyant fermement pour comprimer le joint de cire. Revissez les boulons. Appliquez un cordon de silicone sanitaire autour de la base. Reconnectez et testez." },
        ]} />
      </section>

      <section>
        <h2 id="wc-suspendu" style={h2}>Spécificités des WC suspendus</h2>
        <p style={p}>Les WC suspendus (cuvette fixée au mur, réservoir encastré dans une niche ou un bâti-support) sont plus complexes à réparer car le mécanisme est caché.</p>
        <InfoBox>Pour accéder au mécanisme d'un WC suspendu, retirez le panneau de façade (maintenu par des clips ou des vis cachées sous les boutons de chasse). Le mécanisme de remplissage et de chasse est identique à un WC classique et se remplace de la même façon.</InfoBox>
        <CheckList items={[
          "Notez la marque et le modèle du bâti-support (Grohe, Geberit, Roca, Villeroy…) — les mécanismes ne sont pas interchangeables",
          "Les boutons de chasse peuvent se démonter en tournant dans le sens antihoraire",
          "En cas de fuite du bâti, vérifiez les flexibles de raccordement internes avant d'ouvrir le mur",
          "Une fuite au mur (trace d'humidité sur le carrelage) peut venir du joint de la cuvette ou d'un flexible interne — faites intervenir un plombier",
        ]} />
      </section>

      <section>
        <h2 id="remplacer" style={h2}>Remplacer un WC complet</h2>
        <p style={p}>Un WC fêlé, trop vieux ou incompatible avec les nouvelles normes (double chasse) doit être remplacé. Comptez 2 à 4 heures pour un remplacement DIY.</p>
        <Tip>Avant d'acheter un nouveau WC, mesurez la distance entre le mur et le centre de la sortie d'évacuation (distance de sortie). Standard : 18 cm ou 30 cm. Un WC avec la mauvaise distance ne s'emboîtera pas dans votre coude existant.</Tip>
      </section>

      <section>
        <h2 id="entretien" style={h2}>Entretien régulier des WC</h2>
        <div className="flex flex-col gap-3 my-5">
          {[
            { freq: "Toutes les semaines", action: "Nettoyage de la cuvette au vinaigre blanc dilué. Détartre l'under-rim (sous le bord) avec un gel acide doux." },
            { freq: "Tous les 6 mois", action: "Actionnez le robinet d'arrêt pour vérifier qu'il ne grippe pas. Inspectez les joints du flexible d'alimentation." },
            { freq: "Tous les ans", action: "Faites le test au colorant pour détecter une fuite silencieuse du réservoir vers la cuvette." },
            { freq: "Tous les 5-10 ans", action: "Remplacez préventivement le mécanisme de chasse complet et le robinet flotteur. Coût : 20-40 €, durée : 1 heure." },
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
          <FaqItem question="Mon WC fait des gargouillis après la chasse, est-ce grave ?" answer="Des gargouillis juste après la chasse sont normaux (air dans les canalisations). S'ils persistent ou se produisent sans actionner la chasse, c'est souvent une ventilation défaillante ou un bouchon partiel dans la colonne d'évacuation." />
          <FaqItem question="Puis-je utiliser des blocs WC désinfectants dans le réservoir ?" answer="Les blocs dans le réservoir peuvent accélérer l'usure des joints en caoutchouc (surtout ceux contenant du chlore ou de l'acide). Préférez les blocs à accrocher sur le bord de la cuvette qui ne sont pas en contact avec le mécanisme." />
          <FaqItem question="Quelle est la consommation d'eau d'une chasse d'eau ?" answer="Un WC ancien (avant 1995) consomme 9 à 12 litres par chasse. Un WC économique actuel consomme 3 litres (petite chasse) ou 6 litres (grande chasse). Le remplacement d'un ancien WC peut économiser 20 000 à 30 000 litres par an pour un foyer de 4 personnes." />
          <FaqItem question="Peut-on jeter des lingettes dans les WC ?" answer="Non, même les lingettes dites 'flushables'. Elles ne se dissolvent pas et causent des bouchons dans vos canalisations et les réseaux publics. Uniquement papier toilette, pipi et popo dans les WC." />
        </div>
      </section>
    </article>
  )
}
