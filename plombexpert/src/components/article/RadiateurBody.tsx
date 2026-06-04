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

export default function RadiateurBody() {
  return (
    <article className="flex-1 min-w-0">
      <section>
        <p style={p}>La purge d'un radiateur est probablement l'opération de maintenance la plus simple et la plus efficace que vous pouvez faire sur votre installation de chauffage central. Elle prend 5 minutes, ne nécessite aucune compétence particulière et peut réduire votre facture de chauffage de 10 à 20 %.</p>
      </section>

      <section>
        <h2 id="pourquoi-purger" style={h2}>Pourquoi faut-il purger un radiateur ?</h2>
        <p style={p}>L'eau du circuit de chauffage contient naturellement de l'air dissous. Avec le temps (et surtout après chaque redémarrage du chauffage), cet air se libère et s'accumule en bulles dans les points hauts du circuit — c'est-à-dire dans vos radiateurs.</p>
        <p style={p}>Cette poche d'air empêche l'eau chaude de circuler correctement dans toute la hauteur du radiateur. Résultat : la partie haute reste froide et vous chauffez moins pour la même consommation.</p>
        <InfoBox>Un radiateur partiellement rempli d'air peut perdre jusqu'à 15-20 % de son efficacité. Sur une facture annuelle de 1 200 €, c'est jusqu'à 240 € perdus — pour une opération qui prend 5 minutes.</InfoBox>
      </section>

      <section>
        <h2 id="signes" style={h2}>Les signes qui indiquent qu'il faut purger</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
          {[
            { signe: "Radiateur froid en haut, chaud en bas", gravite: "Fréquent" },
            { signe: "Bruits de glouglou ou claquements", gravite: "Fréquent" },
            { signe: "Radiateur froid sur toute sa surface", gravite: "Modéré" },
            { signe: "Chauffage qui prend longtemps à monter en température", gravite: "Modéré" },
            { signe: "Certains radiateurs chauds, d'autres pas du tout", gravite: "Déséquilibre circuit" },
            { signe: "Bruits de sifflement dans les tuyaux", gravite: "Air en circulation" },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl p-3 flex items-center gap-3" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--color-sky)" }} aria-hidden="true" />
              <p className="text-sm flex-1" style={{ color: "var(--color-text-primary)" }}>{s.signe}</p>
              <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: "var(--color-sky-soft)", color: "var(--color-sky-dark)" }}>{s.gravite}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 id="materiel" style={h2}>Matériel nécessaire</h2>
        <ToolsList tools={["Clé de purgeur (1 €, en GSB) ou tournevis plat", "Récipient (verre, bol ou chiffon)", "Serviette ou protection au sol", "Gants (eau chaude)"]} />
        <Tip>La clé de purgeur est vendue en GSB pour 1 à 2 €. C'est un petit carré qui s'adapte sur la vis de purge. Certains purgeurs récents s'ouvrent avec un tournevis plat.</Tip>
      </section>

      <section>
        <h2 id="purge-radiateur" style={h2}>Purger un radiateur : guide pas à pas</h2>
        <Warning>Attendez que le chauffage soit en marche depuis au moins 30 minutes avant de purger. L'air doit être chaud pour se dégager plus facilement. En revanche, ne touchez pas les radiateurs en fonte très chauds à mains nues.</Warning>
        <StepList steps={[
          { title: "Localisez la vis de purge", desc: "Elle se trouve en haut du radiateur, sur le côté (généralement le côté opposé à l'alimentation). C'est une petite vis carrée ou fendue avec souvent un petit bouchon en plastique autour." },
          { title: "Préparez le récipient", desc: "Placez un chiffon ou un bol sous la vis de purge. Même si l'air sort en premier, de l'eau suivra — elle peut être légèrement colorée (rouille), c'est normal." },
          { title: "Ouvrez la vis très doucement", desc: "Tournez la clé de purgeur dans le sens antihoraire d'un quart de tour maximum. Vous devez entendre le sifflement de l'air qui s'échappe." },
          { title: "Attendez que l'air soit évacué", desc: "Laissez l'air sortir. Cela peut durer de 10 secondes à plusieurs minutes selon la quantité d'air emprisonné. Ne laissez pas sans surveillance." },
          { title: "Fermez dès l'arrivée de l'eau", desc: "Dès que l'air cède la place à un filet d'eau continu (sans bulles), refermez immédiatement la vis. Un demi-tour dans le sens horaire suffit. Ne serrez pas trop fort — la vis se casse facilement." },
          { title: "Vérifiez la pression du circuit", desc: "Après avoir purgé plusieurs radiateurs, vérifiez le manomètre de votre chaudière. La pression doit être entre 1 et 1,5 bar à froid. Si elle est inférieure, faites l'appoint en eau." },
        ]} />
      </section>

      <section>
        <h2 id="purge-fonte" style={h2}>Spécificités des radiateurs en fonte</h2>
        <p style={p}>Les radiateurs en fonte sont plus massifs et retiennent plus d'air que les radiateurs en acier. Leur vis de purge est parfois absente (sur les très anciens modèles) — il faut alors desserrer légèrement l'union du raccord supérieur.</p>
        <CheckList items={[
          "Vérifiez que votre radiateur fonte possède bien une vis de purge en haut — certains n'en ont pas",
          "Si pas de purgeur : desserrez légèrement (1/4 de tour) l'union supérieure avec une clé plate jusqu'à entendre l'air, puis resserrez",
          "Les radiateurs fonte sont très lourds — ne tentez jamais de les déplacer seul",
          "Après purge, ils mettent plus de temps à monter en température mais conservent la chaleur plus longtemps",
          "Vérifiez les joints d'unions lors de chaque purge — ils s'usent et peuvent suinter",
        ]} />
      </section>

      <section>
        <h2 id="purge-circuit" style={h2}>Purger tout le circuit de chauffage</h2>
        <p style={p}>Si plusieurs radiateurs sont concernés ou si votre chauffage redémarre après une vidange, purgez dans l'ordre pour être efficace :</p>
        <StepList steps={[
          { title: "Commencez par les radiateurs les plus bas", desc: "L'air monte — commencez par le rez-de-chaussée et montez étage par étage. Dans chaque étage, commencez par les radiateurs les plus proches de la chaudière." },
          { title: "Purgez chaque radiateur", desc: "Suivez la procédure standard pour chaque radiateur. Notez ceux qui dégagent beaucoup d'air — ils devront être repurgés plus souvent." },
          { title: "Purgez la chaudière si nécessaire", desc: "Certaines chaudières ont un purgeur automatique sur le circulateur. Vérifiez le manuel de votre chaudière." },
          { title: "Vérifiez et réajustez la pression", desc: "Après la purge complète du circuit, la pression a chuté (l'air sorti n'est pas remplacé). Utilisez le robinet de remplissage (robinet de charge) pour ramener la pression à 1-1,5 bar." },
        ]} />
        <Tip>La pression du circuit se vérifie sur le manomètre de la chaudière. À froid : 1 à 1,5 bar. À chaud : 1,5 à 2 bars. En dehors de ces plages, appelez un chauffagiste.</Tip>
      </section>

      <section>
        <h2 id="apres-purge" style={h2}>Après la purge : vérifications importantes</h2>
        <CheckList items={[
          "Vérifiez que toutes les vis de purgeur sont bien refermées (pas de goutte)",
          "Contrôlez la pression du circuit (manomètre chaudière : 1-1,5 bar à froid)",
          "Relancez le chauffage et vérifiez que tous les radiateurs chantent uniformément",
          "Si un radiateur reste froid malgré la purge, le robinet thermostatique est peut-être bloqué — tournez la tête thermostatique sur max puis revenez à la température souhaitée",
          "Notez la date de purge pour planifier la prochaine (idéalement chaque automne)",
        ]} />
      </section>

      <section>
        <h2 id="robinet-thermostatique" style={h2}>Robinet thermostatique bloqué</h2>
        <p style={p}>Si un radiateur reste froid après purge avec la tête thermostatique en position max, le pointeau du robinet est peut-être coincé (grippé pendant l'été).</p>
        <StepList steps={[
          { title: "Retirez la tête thermostatique", desc: "Dévissez ou décliquez la tête en tournant dans le sens antihoraire. Vous verrez le pointeau qui dépasse du corps du robinet." },
          { title: "Vérifiez que le pointeau bouge", desc: "Appuyez sur le pointeau avec un stylo ou un tournevis plat. Il doit s'enfoncer librement. S'il ne bouge pas, il est grippé." },
          { title: "Débloquez le pointeau", desc: "Appliquez quelques gouttes de lubrifiant (WD-40) autour du pointeau. Attendez 10 minutes. Appuyez et relâchez plusieurs fois jusqu'à ce qu'il coulisse librement." },
          { title: "Remontez la tête", desc: "Replacez et verrouillez la tête thermostatique. Réglez à la température souhaitée et vérifiez que le radiateur chauffe." },
        ]} />
      </section>

      <section>
        <h2 id="entretien" style={h2}>Entretien annuel du circuit de chauffage</h2>
        <div className="flex flex-col gap-3 my-5">
          {[
            { freq: "Chaque automne (avant démarrage)", action: "Purgez tous les radiateurs du bas vers le haut. Vérifiez la pression (1-1,5 bar à froid). Débloquez les têtes thermostatiques." },
            { freq: "Tous les 2 ans", action: "Faites analyser la qualité de l'eau du circuit. Une eau trop chargée en oxygène ou calcaire corrode les radiateurs. Ajoutez un inhibiteur de corrosion si nécessaire." },
            { freq: "Tous les 5 ans", action: "Désembouage du circuit (nettoyage chimique des dépôts de boue dans les radiateurs et la chaudière). Opération professionnelle, 300-600 €." },
            { freq: "Tous les ans (obligatoire)", action: "Entretien de la chaudière par un professionnel certifié (obligation légale en France pour les chaudières à gaz, fioul et bois)." },
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
          <FaqItem question="À quelle fréquence faut-il purger les radiateurs ?" answer="Idéalement une fois par an, avant le démarrage de la saison de chauffage (septembre-octobre). Si vous entendez des bruits ou si certains radiateurs chauffent mal, purgez immédiatement sans attendre." />
          <FaqItem question="L'eau qui sort lors de la purge est noire ou rougeâtre, est-ce grave ?" answer="Une eau légèrement colorée est normale — c'est de l'oxyde de fer en suspension. Une eau très noire (boue) indique une corrosion avancée du circuit et nécessite un désembouage professionnel." />
          <FaqItem question="Ma chaudière s'éteint après la purge, que faire ?" answer="La pression a chuté en dessous du minimum. Utilisez le robinet de remplissage (robinet bleu ou rouge sous la chaudière) pour faire remonter la pression à 1,2-1,5 bar. La chaudière redémarrera automatiquement." />
          <FaqItem question="Puis-je purger un radiateur électrique ?" answer="Non. Les radiateurs électriques (convecteurs, panneaux rayonnants) ne contiennent pas d'eau et n'ont pas de purgeur. Seuls les radiateurs à eau chaude (chauffage central) se purgent. Exception : les radiateurs à inertie fluide qui contiennent de l'huile — ils ne se purgent pas non plus." />
          <FaqItem question="Un radiateur reste froid même après purge et déblocage du thermostat, que faire ?" answer="Le robinet d'équilibrage (sur le retour du radiateur) est peut-être fermé. Vérifiez le robinet opposé à la tête thermostatique — il doit être partiellement ouvert. Si tout est ouvert et que le radiateur reste froid, le déséquilibre hydraulique du circuit peut nécessiter un réglage par un chauffagiste." />
        </div>
      </section>
    </article>
  )
}
