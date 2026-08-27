/**
 * Gallery photographs.
 * Client confirmed 2026-08-27 that parental consent is on file for the event
 * these were taken at, clearing them for publication under the DPDP Act 2023.
 * Source: GALLERY.docx / Gallery folder. Selected for image quality and to
 * cover a spread of facility life — therapy sessions, outreach, and events —
 * rather than repeating near-identical shots of the same backdrop.
 * Files live in public/gallery-photos/, resized to max 1400px wide and stripped of
 * EXIF metadata (including GPS) before publishing.
 */
export const galleryImages: {
  src: string
  alt: string
  category: 'facility' | 'therapy' | 'events' | 'outreach'
}[] = [
  {
    src: '/gallery-photos/therapy-physio-session.jpg',
    alt: 'A physiotherapist guides a child through a leg-stretch exercise on a therapy mat',
    category: 'therapy',
  },
  {
    src: '/gallery-photos/therapy-fine-motor-sorting.jpg',
    alt: 'A therapist works with a child on a colour-sorting fine motor activity',
    category: 'therapy',
  },
  {
    src: '/gallery-photos/outreach-school-awareness-talk.jpg',
    alt: 'Kids Care Rehab Centre team leading a developmental awareness talk at a school',
    category: 'outreach',
  },
  {
    src: '/gallery-photos/event-annual-day-stage.jpg',
    alt: 'Children on stage with therapists and family members at a centre event',
    category: 'events',
  },
  {
    src: '/gallery-photos/event-child-speaking.jpg',
    alt: 'A child speaking on stage alongside a staff member at a centre programme',
    category: 'events',
  },
  {
    src: '/gallery-photos/event-certificate-presentation.jpg',
    alt: 'A certificate of appreciation being presented to a child and family',
    category: 'events',
  },
  {
    src: '/gallery-photos/event-director-guest.jpg',
    alt: 'Dr. Radha Balachandar, Director, speaking alongside a guest at a centre event',
    category: 'events',
  },
  {
    src: '/gallery-photos/event-banner-group.jpg',
    alt: 'Families and staff gathered in front of the centre banner during an event',
    category: 'events',
  },
  {
    src: '/gallery-photos/event-audience-families.jpg',
    alt: 'Families and children seated together at a centre event',
    category: 'events',
  },
]
