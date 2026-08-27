import { site } from '@/content/site'

/**
 * React 19 hoists <title>, <meta> and <link> rendered anywhere in the tree
 * into <head>, so no helmet library is needed.
 */
export function Seo({
  title,
  description,
  path = '',
  noindex = false,
  jsonLd,
}: {
  title: string
  description: string
  path?: string
  noindex?: boolean
  jsonLd?: object
}) {
  const fullTitle = title === site.name ? `${site.name} | ${site.tagline}` : `${title} | ${site.name}`
  const url = `${site.url}${path}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </>
  )
}

/** Organisation schema — rendered once, on the homepage. */
export const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: '+91-44-2835-3136',
  email: site.email,
  foundingDate: '2009-03',
  parentOrganization: { '@type': 'NGO', name: site.parentTrust },
  medicalSpecialty: ['Physiotherapy', 'SpeechPathology', 'OccupationalTherapy', 'Pediatric'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 52/3, Gowdiamutt Road, Ganapathy Colony, Royapettah',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600014',
    addressCountry: 'IN',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '20:00',
  },
}
