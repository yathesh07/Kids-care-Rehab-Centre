/**
 * Global site facts.
 * Sources: TRUST DETAILS WORD.docx, ABOUT US.docx, and kidscarerehabcenter.in (Nov 2026).
 * Values marked NEEDS-CONFIRMATION are inconsistent across sources — see README.
 */

export const site = {
  name: 'Kids Care Rehab Centre',
  shortName: 'KCRC',
  tagline: 'Building abilities. Changing lives.',
  parentTrust: 'Kids Rehab Charitable Trust',
  url: 'https://www.kidscarerehabcenter.in',
  description:
    'Kids Care Rehab Centre provides speech, occupational, behaviour and physiotherapy, special education and early intervention for children with autism, ADHD, developmental delay and learning difficulties in Chennai. Adult physiotherapy also available.',

  foundedYear: 2009,
  foundedText: 'March 2009',

  email: 'kidscarerehabcenter@gmail.com',
  emailAlt: 'brain2act@gmail.com',
  phoneDisplay: '044 2835 3136',
  phoneHref: 'tel:+914428353136',
  mobileDisplay: '+91 87785 67900',
  mobileHref: 'tel:+918778567900',
  whatsapp: '918778567900',
  whatsappMessage:
    "Hello, I'd like to know more about therapy services at Kids Care Rehab Centre for my child.",

  hours: 'Monday – Saturday, 10:00 am – 8:00 pm',

  social: {
    instagram: 'https://www.instagram.com/kidscare_rehab',
    podcast: 'https://anchor.fm/autismottchannel',
  },

  /** Only figures verifiable from client documents or the live site. */
  stats: [
    { value: '16+', label: 'Years of service', detail: 'Since March 2009' },
    { value: '20+', label: "Director's years of experience", detail: 'Dr. Radha Balachandar' },
    { value: '7', label: 'Therapy disciplines', detail: 'Under one roof' },
    { value: '2', label: 'Chennai locations', detail: 'Royapettah & Madipakkam' },
  ],

  /** Statutory registrations — from TRUST DETAILS WORD.docx */
  registrations: [
    {
      label: 'CSR Registration',
      number: 'CSR00087130',
      issuer: 'Ministry of Corporate Affairs',
      date: '23 February 2025',
    },
    {
      label: 'Section 12A Registration',
      number: 'AABTK7404KE20241',
      issuer: 'Income Tax Department (provisional)',
      date: '26 December 2024',
    },
    {
      label: 'Section 80G Approval',
      number: 'AABTK7404KF20241',
      issuer: 'Income Tax Department (provisional)',
      date: '26 December 2024',
    },
  ],
  registrationValidity: 'AY 2025-26 to AY 2027-28',
  pan: 'AABTK7404K',
} as const

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`
