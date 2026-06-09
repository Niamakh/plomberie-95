export interface City {
  /** Segment d'URL tel qu'il apparaît dans l'adresse — ex: "Plombier-Gonesse" */
  slug: string
  /** Nom de la ville affiché dans le contenu */
  name: string
  /** Code postal */
  cp: string
  /** Département */
  dept: string
  /** Mot-clé principal */
  mainKeyword: string
  /** Volume mensuel mot-clé principal */
  volume: number
  /** Mots-clés secondaires */
  secondaryKeywords: string[]
  /** Quartiers / lieux-dits connus */
  neighborhoods?: string[]
  /** Villes voisines mentionnées pour le maillage local */
  nearby?: string[]
  /** Title SEO personnalisé (≤60 car.) — remplace le title générique si renseigné */
  customTitle?: string
  /** Meta description personnalisée (≤155 car.) — remplace la description générique si renseigné */
  customDescription?: string
  /** Texte du H1 personnalisé — remplace le H1 générique si renseigné */
  customH1?: string
}

export const CITIES: City[] = [
  {
    slug: "Plombier-Gonesse",
    name: "Gonesse",
    cp: "95500",
    dept: "Val-d'Oise",
    mainKeyword: "plombier gonesse",
    volume: 4400,
    secondaryKeywords: [
      "plombier chauffagiste gonesse",
      "chauffagiste gonesse",
      "dépannage plomberie gonesse",
      "débouchage gonesse",
      "recherche de fuite gonesse",
    ],
    neighborhoods: [
      "Gonesse centre", "La Fauconnière", "Les Noues", "Val Roger", "Gonesse Gare",
    ],
    nearby: ["Villepinte", "Garges-lès-Gonesse", "Sarcelles", "Arnouville", "Bonneuil-en-France"],
  },
  {
    slug: "Plombier-Herblay",
    name: "Herblay",
    cp: "95220",
    dept: "Val-d'Oise",
    mainKeyword: "plombier herblay",
    volume: 320,
    secondaryKeywords: [
      "plombier a herblay",
      "plombier herblay 95",
      "dépannage plomberie herblay",
      "plombier chauffagiste herblay",
      "urgence plombier herblay",
    ],
    neighborhoods: [
      "Herblay centre", "Le Cordon", "La Butte aux Grives", "Le Ru de Montlignon", "Val-Notre-Dame",
    ],
    nearby: ["Conflans-Sainte-Honorine", "Argenteuil", "Cergy", "Franconville", "Taverny"],
    customTitle: "Plombier Herblay 95220 - Dépannage Plomberie | Plombier 95 Service",
    customDescription: "Plombier à Herblay (95220) : urgence fuite, débouchage canalisation, installation sanitaire. Artisan local, devis gratuit, intervention sous 1h.",
    customH1: "Plombier à Herblay (95220) - Artisan local 7j/7",
  },
  {
    slug: "Plombier-Goussainville",
    name: "Goussainville",
    cp: "95190",
    dept: "Val-d'Oise",
    mainKeyword: "plombier goussainville",
    volume: 320,
    secondaryKeywords: [
      "chauffagiste goussainville",
      "plombier chauffagiste goussainville",
      "dépannage plomberie goussainville",
      "urgence plombier goussainville 95",
      "débouchage goussainville",
    ],
    neighborhoods: [
      "Goussainville centre", "Vieux-Pays", "Les Bâtons", "La Croix Verte", "Le Bois Certeau",
    ],
    nearby: ["Gonesse", "Sarcelles", "Villiers-le-Bel", "Garges-lès-Gonesse", "Fosses"],
    customTitle: "Plombier Goussainville 95190 - Dépannage Urgent | Plombier 95",
    customDescription: "Plombier Goussainville 95190 - Dépannage Urgent | Plombier 95",
    customH1: "Plombier à Goussainville (95190) - Dépannage 24/7",
  },
  {
    slug: "Artisan-Plombier-Saint-Gratien",
    name: "Saint-Gratien",
    cp: "95210",
    dept: "Val-d'Oise",
    mainKeyword: "plombier saint gratien",
    volume: 390,
    secondaryKeywords: [
      "chauffagiste saint gratien",
      "artisan plombier saint gratien",
      "plombier chauffagiste saint gratien",
      "dépannage plomberie saint gratien",
      "urgence plombier saint gratien 95",
    ],
    neighborhoods: [
      "Centre-ville", "Les Rouges Terres", "La Barre", "Les Carrières",
      "Le Vieux Saint-Gratien", "Parc des sports", "Quartier de la Gare",
    ],
    nearby: ["Enghien-les-Bains", "Soisy-sous-Montmorency", "Sannois", "Ermont", "Deuil-la-Barre"],
    customTitle: "Plombier Saint-Gratien 95210 - Artisan Plomberie | Plombier 95",
    customDescription: "Artisan plombier à Saint-Gratien (95210) : dépannage, chauffage, sanitaire. Intervention 7j/7, devis gratuit, garantie travaux.",
    customH1: "Artisan Plombier à Saint-Gratien (95210) - Intervention 7j/7",
  },
  {
    slug: "Plombier-a-Ermont",
    name: "Ermont",
    cp: "95120",
    dept: "Val-d'Oise",
    mainKeyword: "plombier ermont",
    volume: 260,
    secondaryKeywords: [
      "plombier chauffagiste ermont",
      "chauffagiste ermont",
      "dépannage plomberie ermont",
      "urgence plombier ermont 95",
      "débouchage ermont",
    ],
    neighborhoods: [
      "Ermont-Eaubonne", "Cernay", "Les Champs Philippes", "La Croix Yvon",
      "Quartier de la Gare", "Les Sablons", "Hameau de la Croix",
    ],
    nearby: ["Saint-Gratien", "Sannois", "Franconville", "Soisy-sous-Montmorency", "Enghien-les-Bains"],
    customTitle: "Plombier Ermont 95120 - Dépannage Plomberie | Plombier 95 Service",
    customDescription: "Plombier à Ermont (95120) : fuite, débouchage, chaudière, sanitaire. Artisan certifié, intervention rapide, devis gratuit.",
    customH1: "Plombier à Ermont (95120) - Dépannage Express",
  },
  // Ajoutez d'autres villes ici en suivant le même modèle :
  // {
  //   slug: "Plombier-Cergy",
  //   name: "Cergy",
  //   cp: "95000",
  //   ...
  // },
]

/** Retourne une ville par son slug ou undefined */
export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug)
}
