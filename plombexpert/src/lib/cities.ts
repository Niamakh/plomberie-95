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
  /** Title Twitter Card personnalisé */
  customTwitterTitle?: string
  /** Description Twitter Card personnalisée */
  customTwitterDescription?: string
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
    customTitle: "Plombier Gonesse 95500 — Urgence 24h/24, Fuite, Débouchage | Plombier 95 Service",
    customDescription:
      "Plombier à Gonesse 95500 — Intervention sous 1h, 24h/24. Fuite, débouchage, chauffe-eau. Artisans RGE certifiés. Devis gratuit, 0 supplément déplacement. ☎ Appelez maintenant.",
    customH1: "Plombier à Gonesse (95500) — Dépannage Urgence, Fuite & Débouchage 24h/24",
    customTwitterTitle: "Plombier Gonesse 95500 — Urgence 24h/24, Fuite, Débouchage | Plombier 95 Service",
    customTwitterDescription:
      "Plombier à Gonesse (95500) : dépannage urgent, recherche de fuite, débouchage, chauffe-eau. Devis gratuit, intervention rapide.",
  },
  {
    slug: "Plombier-sur-Herblay",
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
    customTitle: "Plombier Herblay 95220 — Urgence 24h/24, Fuite & Débouchage | Plombier 95 Service",
    customDescription:
      "Plombier à Herblay 95220 — Intervention sous 1h, 24h/24. Fuite, débouchage, chauffe-eau. Artisans RGE certifiés. Devis gratuit, 0 supplément déplacement. ☎ Appelez maintenant.",
    customH1: "Plombier à Herblay (95220) — Dépannage Urgence, Fuite & Débouchage 24h/24",
    customTwitterTitle: "Plombier Herblay 95220 — Urgence 24h/24, Fuite & Débouchage | Plombier 95 Service",
    customTwitterDescription:
      "Plombier à Herblay (95220) : dépannage urgent, recherche de fuite, débouchage, chauffe-eau. Devis gratuit, intervention rapide.",
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
    customTitle: "Plombier Goussainville 95190 — Urgence 24h/24, Fuite & Débouchage | Plombier 95 Service",
    customDescription:
      "Plombier à Goussainville 95190 — Intervention sous 1h, 24h/24. Fuite, débouchage, chauffe-eau. Artisans RGE certifiés. Devis gratuit, 0 supplément déplacement. ☎ Appelez maintenant.",
    customH1: "Plombier à Goussainville (95190) — Urgence Fuite, Débouchage & Chauffage 24h/24",
    customTwitterTitle: "Plombier Goussainville 95190 — Urgence 24h/24, Fuite & Débouchage | Plombier 95 Service",
    customTwitterDescription:
      "Plombier à Goussainville (95190) : dépannage urgent, recherche de fuite, débouchage, chauffe-eau. Devis gratuit, intervention rapide.",
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
    customTitle: "Plombier Saint-Gratien 95210 — Urgence 24h/24, Fuite & Débouchage | Plombier 95 Service",
    customDescription:
      "Plombier à Saint-Gratien 95210 — Intervention sous 1h, 24h/24. Fuite, débouchage, chauffe-eau. Artisans RGE certifiés. Devis gratuit, 0 supplément déplacement. ☎ Appelez maintenant.",
    customH1: "Plombier à Saint-Gratien (95210) — Urgence Fuite, Débouchage & Chauffage 24h/24",
    customTwitterTitle: "Plombier Saint-Gratien 95210 — Urgence 24h/24, Fuite & Débouchage | Plombier 95 Service",
    customTwitterDescription:
      "Plombier à Saint-Gratien (95210) : dépannage urgent, recherche de fuite, débouchage, chauffe-eau. Devis gratuit, intervention rapide.",
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
    customTitle: "Plombier Ermont 95120 — Urgence 24h/24, Fuite & Débouchage | Plombier 95 Service",
    customDescription:
      "Plombier à Ermont 95120 — Intervention sous 1h, 24h/24. Fuite, débouchage, chauffe-eau, chaudière. Artisans RGE certifiés. Devis gratuit, 0 supplément déplacement. ☎ Appelez maintenant.",
    customH1: "Plombier à Ermont (95120) — Urgence Fuite, Débouchage & Chauffage 24h/24",
    customTwitterTitle: "Plombier Ermont 95120 — Urgence 24h/24, Fuite & Débouchage | Plombier 95 Service",
    customTwitterDescription:
      "Plombier à Ermont (95120) : dépannage urgent, fuite, débouchage, chauffe-eau. Artisan certifié RGE. Devis gratuit, intervention rapide.",
  },
  {
    slug: "Plombier-Montmagny",
    name: "Montmagny",
    cp: "95360",
    dept: "Val-d'Oise",
    mainKeyword: "plombier montmagny",
    volume: 210,
    secondaryKeywords: [
      "chauffagiste montmagny",
      "plombier chauffagiste montmagny",
      "dépannage plomberie montmagny",
      "urgence plombier montmagny 95",
      "débouchage montmagny",
    ],
    neighborhoods: [
      "Montmagny centre", "Le Clos Montmagny", "Les Marronniers", "La Plaine",
      "Quartier de la Gare", "Les Hauts de Montmagny", "Rue de Paris",
    ],
    nearby: ["Sarcelles", "Enghien-les-Bains", "Deuil-la-Barre", "Groslay", "Saint-Brice-sous-Forêt"],
    customTitle: "Plombier Montmagny 95360 — Urgence 24h/24, Fuite & Débouchage | Plombier 95 Service",
    customDescription:
      "Plombier à Montmagny 95360 — Intervention sous 1h, 24h/24. Fuite, débouchage, chauffe-eau. Artisans RGE certifiés. Devis gratuit, 0 supplément déplacement. ☎ Appelez maintenant.",
    customH1: "Plombier à Montmagny (95360) — Urgence Fuite, Débouchage & Chauffage 24h/24",
    customTwitterTitle: "Plombier Montmagny 95360 — Urgence 24h/24, Fuite & Débouchage | Plombier 95 Service",
    customTwitterDescription:
      "Plombier à Montmagny (95360) : dépannage urgent, fuite, débouchage, chauffe-eau. Artisan certifié RGE. Devis gratuit, intervention rapide.",
  },
  {
    slug: "Plombier-Montmorency",
    name: "Montmorency",
    cp: "95160",
    dept: "Val-d'Oise",
    mainKeyword: "plombier montmorency",
    volume: 390,
    secondaryKeywords: [
      "chauffagiste montmorency",
      "plombier chauffagiste montmorency",
      "dépannage plomberie montmorency",
      "urgence plombier montmorency 95",
      "débouchage montmorency",
    ],
    neighborhoods: [
      "Montmorency centre", "Le Château", "La Forêt de Montmorency", "Les Côteaux",
      "Quartier Jean-Jacques Rousseau", "Les Grandes Terres", "La Croix de la Mission",
    ],
    nearby: ["Enghien-les-Bains", "Saint-Gratien", "Soisy-sous-Montmorency", "Deuil-la-Barre", "Andilly"],
    customTitle: "Plombier Montmorency 95160 — Urgence 24h/24, Fuite & Débouchage | Plombier 95 Service",
    customDescription:
      "Plombier à Montmorency 95160 — Intervention sous 1h, 24h/24. Fuite, débouchage, chauffe-eau, chaudière. Artisans RGE certifiés. Devis gratuit, 0 supplément déplacement. ☎ Appelez maintenant.",
    customH1: "Plombier à Montmorency (95160) — Urgence Fuite, Débouchage & Chauffage 24h/24",
    customTwitterTitle: "Plombier Montmorency 95160 — Urgence 24h/24, Fuite & Débouchage | Plombier 95 Service",
    customTwitterDescription:
      "Plombier à Montmorency (95160) : dépannage urgent, fuite, débouchage, chauffe-eau, chaudière. Artisan certifié RGE. Devis gratuit, intervention rapide.",
  },
  {
    slug: "Plombier-Argenteuil-95100",
    name: "Argenteuil",
    cp: "95100",
    dept: "Val-d'Oise",
    mainKeyword: "plombier argenteuil",
    volume: 2900,
    secondaryKeywords: [
      "entreprise plomberie argenteuil",
      "plombier chauffagiste argenteuil",
      "dépannage plomberie argenteuil",
      "urgence plombier argenteuil 95",
      "débouchage argenteuil",
    ],
    neighborhoods: [
      "Argenteuil centre", "Val d'Argent Nord", "Val d'Argent Sud", "Les Coteaux",
      "Joliot-Curie", "Orgemont", "Le Marcellin", "Bords de Seine", "La Colonie",
    ],
    nearby: ["Bezons", "Sartrouville", "Herblay", "Colombes", "Sannois"],
    customTitle: "Plombier Argenteuil 95100 - Dépannage 24/7 | Plombier 95 Service",
    customDescription: "Plombier à Argenteuil (95100) : dépannage urgent, recherche de fuite, chauffe-eau, débouchage. Artisan local, devis gratuit.",
    customH1: "Plombier à Argenteuil (95100) - Artisan Plomberie",
  },
  {
    slug: "Depannage-plomberie-Soisy-sous-Montmorency",
    name: "Soisy-sous-Montmorency",
    cp: "95230",
    dept: "Val-d'Oise",
    mainKeyword: "plombier soisy sous montmorency",
    volume: 260,
    secondaryKeywords: [
      "chauffagiste soisy sous montmorency",
      "plombier chauffagiste soisy sous montmorency",
      "dépannage plomberie soisy sous montmorency",
      "urgence plombier soisy 95230",
      "débouchage soisy sous montmorency",
    ],
    neighborhoods: [
      "Soisy centre", "La Patte d'Oie", "Les Closeaux", "Le Bois de Montmorency",
      "Quartier des Écoles", "Les Hauts de Soisy", "Chemin de la Montagne",
    ],
    nearby: ["Montmorency", "Saint-Gratien", "Enghien-les-Bains", "Deuil-la-Barre", "Margency"],
    customTitle: "Plombier Soisy-sous-Montmorency 95230 - Dépannage | Plombier 95",
    customDescription: "Plombier à Soisy-sous-Montmorency (95230) : dépannage fuite, chauffage, sanitaire. Intervention rapide, devis gratuit, 7j/7.",
    customH1: "Dépannage Plomberie à Soisy-sous-Montmorency (95230) - 7j/7",
  },
  {
    slug: "Plombier-dans-Jouy-le-Moutier",
    name: "Jouy-le-Moutier",
    cp: "95280",
    dept: "Val-d'Oise",
    mainKeyword: "plombier jouy le moutier",
    volume: 260,
    secondaryKeywords: [
      "chauffagiste jouy le moutier",
      "plombier chauffagiste jouy le moutier",
      "dépannage plomberie jouy le moutier",
      "urgence plombier jouy le moutier 95",
      "débouchage jouy le moutier",
    ],
    neighborhoods: [
      "Jouy-le-Moutier centre", "Les Linandes", "Les Hauts de Cergy", "Le Buchelay",
      "Quartier des Entrées", "La Croix des Rameaux", "Les Acacias",
    ],
    nearby: ["Cergy", "Pontoise", "Vauréal", "Osny", "Saint-Ouen-l'Aumône"],
    customTitle: "Plombier Jouy-le-Moutier 95280 - Dépannage Plomberie | Plombier 95",
    customDescription: "Plombier à Jouy-le-Moutier (95280) : urgence fuite, chaudière, débouchage. Artisan local, intervention rapide, devis transparent.",
    customH1: "Plombier à Jouy-le-Moutier (95280) - Dépannage Rapide",
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
