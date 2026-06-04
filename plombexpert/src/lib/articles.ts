export interface Article {
  id: number
  title: string
  excerpt: string
  category: string
  emoji: string
  readTime: number       // en minutes
  date: string           // "DD MMM YYYY"
  format: string
  level: "Débutant" | "Intermédiaire" | "Avancé"
  slug: string
  featured: boolean
  isNew?: boolean
}

export const FEATURED_ARTICLES: Article[] = [
  {
    id: 1,
    title: "Déboucher une canalisation au Karcher : méthode complète",
    excerpt:
      "Pression d'eau, embouts adaptés, angles d'attaque… On vous explique comment déboucher efficacement vos canalisations extérieures avec un nettoyeur haute pression.",
    category: "Débouchage",
    emoji: "🚿",
    readTime: 8,
    date: "28 mai 2026",
    format: "Tutoriel",
    level: "Intermédiaire",
    slug: "deboucher-canalisation-karcher",
    featured: false,
    isNew: true,
  },
  {
    id: 2,
    title: "Joint fibre ou caoutchouc : lequel choisir selon votre raccord ?",
    excerpt:
      "Un mauvais joint et c'est la fuite assurée. Voici comment identifier le bon matériau selon la pression, la température et le type de raccordement.",
    category: "Joints",
    emoji: "🔗",
    readTime: 5,
    date: "22 mai 2026",
    format: "Guide",
    level: "Débutant",
    slug: "joint-fibre-ou-caoutchouc",
    featured: true,
    isNew: false,
  },
  {
    id: 3,
    title: "Les 20 outils de plomberie indispensables (de débutant à pro)",
    excerpt:
      "Clé à molette, coupe-tube, sertisseur… Ce guide recense tout ce qu'il faut avoir dans sa boîte à outils avant d'attaquer vos travaux de plomberie.",
    category: "Matériel",
    emoji: "📐",
    readTime: 10,
    date: "18 mai 2026",
    format: "Guide d'achat",
    level: "Débutant",
    slug: "outils-plomberie-indispensables",
    featured: false,
    isNew: false,
  },
  {
    id: 4,
    title: "Purger un radiateur en fonte : tuto complet avec astuces",
    excerpt:
      "Radiateur qui chauffe mal en bas, bruits de glouglou… Il suffit souvent de purger l'air emprisonné. On vous montre comment faire sans salir.",
    category: "Radiateurs",
    emoji: "🌡️",
    readTime: 7,
    date: "14 mai 2026",
    format: "Tutoriel",
    level: "Débutant",
    slug: "purger-radiateur-fonte-tuto",
    featured: false,
    isNew: false,
  },
  {
    id: 5,
    title: "Dans quel sens fermer un robinet ? L'astuce définitive",
    excerpt:
      "Righty tighty, lefty loosy — mais encore ? Cette règle simple vous évitera de forcer et d'abîmer vos robinets pour toujours.",
    category: "Robinetterie",
    emoji: "🚰",
    readTime: 3,
    date: "10 mai 2026",
    format: "Astuce",
    level: "Débutant",
    slug: "sens-fermer-robinet-astuce",
    featured: false,
    isNew: false,
  },
  {
    id: 6,
    title: "Comment vider un chauffe-eau : tutoriel pas à pas",
    excerpt:
      "Détartrage, remplacement de l'anode ou simple vidange préventive — voici la procédure complète pour vider votre ballon d'eau chaude en toute sécurité.",
    category: "Chauffe-eau",
    emoji: "🔥",
    readTime: 9,
    date: "5 mai 2026",
    format: "Tutoriel",
    level: "Intermédiaire",
    slug: "vider-chauffe-eau-tutoriel",
    featured: false,
    isNew: false,
  },
  {
    id: 7,
    title: "Le regard d'eaux usées en maison individuelle : tout comprendre",
    excerpt:
      "Rôle, localisation, entretien et curage… Tout ce qu'il faut savoir sur les regards de visite pour garder votre réseau d'évacuation en bon état.",
    category: "Évacuation",
    emoji: "🏗️",
    readTime: 11,
    date: "28 avr. 2026",
    format: "Guide complet",
    level: "Avancé",
    slug: "evacuation-canalisations-guide",
    featured: false,
    isNew: false,
  },
  {
    id: 8,
    title: "Robinetterie : entretien, réparation et remplacement complet",
    excerpt:
      "Robinet qui goutte, mitigeur qui perd en pression, joint usé… Ce guide couvre toutes les interventions sur votre robinetterie, du dépannage rapide au remplacement complet.",
    category: "Robinetterie",
    emoji: "🚰",
    readTime: 11,
    date: "22 avr. 2026",
    format: "Guide complet",
    level: "Intermédiaire",
    slug: "robinetterie-entretien-remplacement",
    featured: false,
    isNew: false,
  },
  {
    id: 9,
    title: "Fuites d'eau : détecter, localiser et réparer",
    excerpt:
      "Une fuite non traitée peut coûter des centaines de litres par jour. Ce guide vous apprend à détecter les fuites cachées, localiser leur source et réparer selon le type de conduite.",
    category: "Fuites",
    emoji: "💧",
    readTime: 10,
    date: "18 avr. 2026",
    format: "Guide complet",
    level: "Intermédiaire",
    slug: "fuites-detecter-reparer",
    featured: false,
    isNew: false,
  },
  {
    id: 10,
    title: "WC : entretien, réparation et remplacement complet",
    excerpt:
      "WC bouché, réservoir qui fuit, chasse défaillante, WC qui coule… Ce guide couvre toutes les pannes et interventions sur vos toilettes, du dépannage rapide au remplacement complet.",
    category: "WC",
    emoji: "🚽",
    readTime: 10,
    date: "20 avr. 2026",
    format: "Guide complet",
    level: "Débutant",
    slug: "wc-entretien-reparation",
    featured: false,
    isNew: false,
  },
  {
    id: 11,
    title: "Siphon : nettoyage, débouchage et remplacement complet",
    excerpt:
      "Le siphon est la première ligne de défense contre les odeurs d'égout. Ce guide vous explique comment le nettoyer, le déboucher et le remplacer selon le type.",
    category: "Siphon",
    emoji: "🪠",
    readTime: 7,
    date: "12 avr. 2026",
    format: "Guide complet",
    level: "Débutant",
    slug: "siphon-nettoyage-remplacement",
    featured: false,
    isNew: false,
  },
]

export const CATEGORIES = [
  { label: "Débouchage",   emoji: "🚿", slug: "deboucher-canalisation-karcher" },
  { label: "Chauffe-eau",  emoji: "🔥", slug: "vider-chauffe-eau-tutoriel" },
  { label: "Robinetterie", emoji: "🚰", slug: "robinetterie-entretien-remplacement" },
  { label: "Fuites",       emoji: "💧", slug: "fuites-detecter-reparer" },
  { label: "Joints",       emoji: "🔗", slug: "joint-fibre-ou-caoutchouc" },
  { label: "Évacuation",   emoji: "🏗️", slug: "evacuation-canalisations-guide" },
  { label: "WC",           emoji: "🚽", slug: "wc-entretien-reparation" },
  { label: "Matériel",     emoji: "📐", slug: null },
  { label: "Radiateurs",   emoji: "🌡️", slug: "purger-radiateur-fonte-tuto" },
  { label: "Siphon",       emoji: "🪠", slug: "siphon-nettoyage-remplacement" },
]
