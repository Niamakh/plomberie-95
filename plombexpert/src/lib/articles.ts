export interface Article {
  id: number
  title: string
  cluster: string
  emoji: string
  volume: number
  kd: number
  format: string
  monetisation: string
  slug: string
  featured: boolean
  quickWin: boolean
}

export const FEATURED_ARTICLES: Article[] = [
  {
    id: 1,
    title: "Déboucher au Karcher : méthode complète + réglages",
    cluster: "Débouchage",
    emoji: "🚿",
    volume: 1600,
    kd: 8,
    format: "Tuto vidéo",
    monetisation: "Affiliation + Adsense",
    slug: "deboucher-canalisation-karcher",
    featured: false,
    quickWin: false,
  },
  {
    id: 2,
    title: "Joint fibre ou caoutchouc : lequel choisir selon le raccord ?",
    cluster: "Joints",
    emoji: "🔗",
    volume: 880,
    kd: 10,
    format: "Guide choix",
    monetisation: "Affiliation spécialisée",
    slug: "joint-fibre-ou-caoutchouc",
    featured: true,
    quickWin: false,
  },
  {
    id: 3,
    title: "Les 20 outils de plomberie indispensables (débutant → pro)",
    cluster: "Matériel",
    emoji: "📐",
    volume: 1000,
    kd: 12,
    format: "Guide achat",
    monetisation: "Affiliation forte",
    slug: "outils-plomberie-indispensables",
    featured: false,
    quickWin: false,
  },
  {
    id: 4,
    title: "Purger un radiateur en fonte : tuto complet avec astuces",
    cluster: "Radiateur",
    emoji: "🌡️",
    volume: 880,
    kd: 10,
    format: "Tuto saisonnier",
    monetisation: "Saisonnier + Affiliation",
    slug: "purger-radiateur-fonte-tuto",
    featured: false,
    quickWin: false,
  },
  {
    id: 5,
    title: "Dans quel sens fermer un robinet ? L'astuce définitive",
    cluster: "Robinetterie",
    emoji: "🚰",
    volume: 210,
    kd: 3,
    format: "FAQ rapide",
    monetisation: "Adsense",
    slug: "sens-fermer-robinet-astuce",
    featured: false,
    quickWin: true,
  },
  {
    id: 6,
    title: "Comment vider un chauffe-eau : tutoriel pas-à-pas",
    cluster: "Chauffe-eau",
    emoji: "🔥",
    volume: 720,
    kd: 12,
    format: "Tuto détaillé",
    monetisation: "Affiliation + Leads",
    slug: "vider-chauffe-eau-tutoriel",
    featured: false,
    quickWin: false,
  },
  {
    id: 7,
    title: "Regard eaux usées maison individuelle : guide complet",
    cluster: "Évacuation",
    emoji: "🏗️",
    volume: 720,
    kd: 10,
    format: "Guide complet",
    monetisation: "Technique + Leads",
    slug: "regard-eaux-usees-maison-role-entretien",
    featured: false,
    quickWin: false,
  },
]

export const CLUSTERS = [
  { label: "Débouchage", emoji: "🚿" },
  { label: "Chauffe-eau", emoji: "🔥" },
  { label: "Robinetterie", emoji: "🚰" },
  { label: "Fuites", emoji: "💧" },
  { label: "Joints", emoji: "🔗" },
  { label: "Évacuation", emoji: "🏗️" },
  { label: "WC", emoji: "🚽" },
  { label: "Matériel", emoji: "📐" },
  { label: "Radiateurs", emoji: "🌡️" },
  { label: "Siphon", emoji: "🪠" },
]
