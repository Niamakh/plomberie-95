export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.plombier-95-service.fr"

export const ORGANIZATION_ID = `${BASE_URL}/#organization`

/** Entité Organization réutilisable dans les graphes JSON-LD du site */
export const organizationSchema = {
  "@type": "Organization" as const,
  "@id": ORGANIZATION_ID,
  name: "PlombExpert",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject" as const,
    url: `${BASE_URL}/images/logo-plombexpert.png`,
  },
}
