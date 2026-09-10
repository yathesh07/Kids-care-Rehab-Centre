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
    'Kids Care Rehab Centre in Chennai offers child and adult physiotherapy, speech and language therapy, sensory integration, special education, assessments, vocational training and technology-supported rehabilitation. Wheelchair-assisted lift access is available.',

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

  /** CDEC Vocational Training Centre — separate enquiry line, per client-supplied content. */
  cdecPhoneDisplay: '+91 6369 604 008',
  cdecPhoneHref: 'tel:+916369604008',
  cdecEmail: 'cdecvtc@gmail.com',
  cdecNcvrtRegistration: 'NCVRT/TN/2492/VTC',

  wheelchairAccess:
    'Wheelchair-assisted lift access is available to help wheelchair users, persons with mobility limitations and senior citizens enter and move within the centre more safely. Please inform the team while booking so appropriate assistance can be arranged for your visit.',

  social: {
    instagram: 'https://www.instagram.com/kidscare_rehab',
    podcast: 'https://anchor.fm/autismottchannel',
  },

  /** Only figures verifiable from client documents or the live site. */
  stats: [
    { value: '16+', label: 'Years of service', detail: 'Since March 2009', highlight: false },
    { value: '20+', label: "Director's years of experience", detail: 'Dr. Radha Balachandar', highlight: false },
    { value: '5000+', label: 'Children impacted', detail: 'Across all programs', highlight: true },
    { value: '2', label: 'Chennai locations', detail: 'Royapettah & Madipakkam', highlight: false },
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

  /** School registration — client-supplied 2026-09-10. */
  specialSchoolRegistrationBody: 'Commissionerate for the Welfare of Differently Abled, Government of Tamil Nadu',
  specialSchoolRegistrationName: 'Kids Care Rehab - Special School',
  specialSchoolRegistrationNumber: '954/2026',
  specialSchoolRegistrationDate: '05.08.2026',

  /** Google Business Profile review link — client-supplied 2026-09-10. */
  googleReviewUrl: 'https://g.page/r/CWtXZXWsxUL0EBM/review',

  /** Latest public milestone, from KCRC_Website_Content_Edited_Final.docx. */
  latestMilestone: {
    date: '17 August 2026',
    title: 'MoU with LICET',
    body: 'Kids Care Rehab Centre and Loyola-ICAM College of Engineering and Technology (LICET) signed an MoU at the Royapettah centre, accompanied by the inauguration of rehabilitation equipment. The occasion was graced by Dr. V. Irai Anbu, IAS (Retd.), and Rev. Dr. Justine Yasappan, SJ, Director of LICET. The partnership opens new possibilities in technology, clinical systems, student engagement, research and inclusive innovation.',
  },
} as const

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`
