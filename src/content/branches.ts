/**
 * Branch details.
 * Royapettah address confirmed by client 2026-08-27: use the old-site address
 * (No. 52/3, Gowdiamutt Road, Ganapathy Colony) rather than the Form 10AC trust-paper
 * address (52/2, Old No. 97) — chosen even though the client's current event banner
 * prints the 52/2 version. Landline and mobile numbers confirmed at the same time.
 */

export type Branch = {
  slug: string
  name: string
  isMain: boolean
  addressLines: string[]
  city: string
  pincode?: string
  phoneDisplay: string
  phoneHref: string
  mobileDisplay: string
  mobileHref: string
  hours: string
  mapsUrl: string
  mapsEmbed: string
}

export const branches: Branch[] = [
  {
    slug: 'royapettah',
    name: 'Royapettah',
    isMain: true,
    addressLines: ['No. 52/3, Gowdiamutt Road', 'Ganapathy Colony', 'Royapettah'],
    city: 'Chennai, Tamil Nadu',
    pincode: '600014',
    phoneDisplay: '044 2835 3136',
    phoneHref: 'tel:+914428353136',
    mobileDisplay: '+91 87785 67900',
    mobileHref: 'tel:+918778567900',
    hours: 'Monday – Saturday, 10:00 am – 8:00 pm',
    mapsUrl: 'https://maps.google.com/?cid=17600847638211942251',
    mapsEmbed:
      'https://www.google.com/maps?q=Kids+Care+Rehab+Center,+Gowdia+Mutt+Road,+Royapettah,+Chennai+600014&output=embed',
  },
  {
    slug: 'madipakkam',
    name: 'Madipakkam',
    isMain: false,
    addressLines: ['Plot No. 32, 10th Street', 'Periyar Nagar', 'Madipakkam'],
    city: 'Chennai, Tamil Nadu',
    phoneDisplay: '044 2835 3136',
    phoneHref: 'tel:+914428353136',
    mobileDisplay: '+91 87785 67900',
    mobileHref: 'tel:+918778567900',
    hours: 'Monday – Saturday, 10:00 am – 8:00 pm',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Periyar+Nagar+Madipakkam+Chennai',
    mapsEmbed:
      'https://www.google.com/maps?q=10th+Street,+Periyar+Nagar,+Madipakkam,+Chennai&output=embed',
  },
]

export const getBranch = (slug: string) => branches.find((b) => b.slug === slug)
