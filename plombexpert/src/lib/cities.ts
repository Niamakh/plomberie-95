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
