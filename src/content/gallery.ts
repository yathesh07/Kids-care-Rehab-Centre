/**
 * Gallery photographs.
 * Client confirmed 2026-08-27 that parental consent is on file for the events
 * these were taken at, clearing them for publication under the DPDP Act 2023.
 * Source: GALLERY.docx / Gallery folder (103 photos, all published 2026-08-30).
 * The first nine entries are hand-picked and captioned for variety on the
 * homepage preview strip; the remaining moment-* entries are the full event
 * set with a generic caption (individual shots were not captioned one by one).
 * Files live in public/gallery-photos/, resized to max 1400px wide and stripped of
 * EXIF metadata (including GPS) before publishing.
 */
export type GalleryCategory =
  | 'therapy-sessions'
  | 'latest-equipment'
  | 'physiotherapy'
  | 'occupational-sensory'
  | 'behaviour-therapy'
  | 'social-skills'
  | 'brain-gym-brain2act'
  | 'reflex-integration'
  | 'special-school'
  | 'classroom-learning'
  | 'parent-training'
  | 'trust-activities'
  | 'community-outreach'
  | 'csr-projects'
  | 'cdec-graduation'
  | 'cdec-training'
  | 'awards-recognition'
  | 'media'
  | 'events-celebrations'

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  'therapy-sessions': 'Therapy Sessions',
  'latest-equipment': 'Latest Equipment',
  physiotherapy: 'Physiotherapy',
  'occupational-sensory': 'Occupational Therapy / Sensory Integration',
  'behaviour-therapy': 'Behaviour Therapy',
  'social-skills': 'Social Skills Training',
  'brain-gym-brain2act': 'Brain Gym / Brain2Act',
  'reflex-integration': 'Reflex Integration / Movement Activities',
  'special-school': 'Special School',
  'classroom-learning': 'Classroom & Learning',
  'parent-training': 'Parent Training',
  'trust-activities': 'Trust Activities',
  'community-outreach': 'Community Outreach',
  'csr-projects': 'CSR Projects',
  'cdec-graduation': 'CDEC VTC Graduation',
  'cdec-training': 'CDEC VTC Training',
  'awards-recognition': 'Awards & Recognition',
  media: 'Media',
  'events-celebrations': 'Events & Celebrations',
}

export const galleryImages: {
  src: string
  alt: string
  category: GalleryCategory
}[] = [
  {
    src: '/gallery-photos/therapy-physio-session.jpg',
    alt: 'A physiotherapist guides a child through a leg-stretch exercise on a therapy mat',
    category: 'therapy-sessions',
  },
  {
    src: '/gallery-photos/therapy-fine-motor-sorting.jpg',
    alt: 'A therapist works with a child on a colour-sorting fine motor activity',
    category: 'therapy-sessions',
  },
  {
    src: '/gallery-photos/outreach-school-awareness-talk.jpg',
    alt: 'Kids Care Rehab Centre team leading a developmental awareness talk at a school',
    category: 'community-outreach',
  },
  {
    src: '/gallery-photos/event-annual-day-stage.jpg',
    alt: 'Children on stage with therapists and family members at a centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/event-child-speaking.jpg',
    alt: 'A child speaking on stage alongside a staff member at a centre programme',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/event-certificate-presentation.jpg',
    alt: 'A certificate of appreciation being presented to a child and family',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/event-director-guest.jpg',
    alt: 'Dr. Radha Balachandar, Director, speaking alongside a guest at a centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/event-banner-group.jpg',
    alt: 'Families and staff gathered in front of the centre banner during an event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/event-audience-families.jpg',
    alt: 'Families and children seated together at a centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-004.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-005.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-006.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-007.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-008.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-009.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-010.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-011.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-012.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-013.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-014.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-015.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-016.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-017.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-018.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-019.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-020.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-021.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-022.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-023.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-024.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-025.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-026.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-027.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-028.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-029.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-030.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-031.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-032.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-033.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-034.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-035.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-036.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-037.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-038.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-039.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-040.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-041.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-042.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-043.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-044.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-045.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-046.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-047.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-048.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-049.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-050.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-051.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-052.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-053.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-054.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-055.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-056.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-057.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-058.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-059.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-060.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-061.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-062.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-063.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-064.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-065.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-066.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-067.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-068.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-069.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-070.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-071.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-072.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-073.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-074.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-075.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-076.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-077.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-078.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-079.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-080.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-081.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-082.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-083.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-084.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-085.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-086.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-087.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-088.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-089.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-090.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-091.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-092.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-093.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-094.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-095.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-096.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-097.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-098.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-099.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-100.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-101.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-102.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },
  {
    src: '/gallery-photos/moment-103.jpg',
    alt: 'Photo from a Kids Care Rehab Centre programme, outreach visit, or centre event',
    category: 'events-celebrations',
  },

  {
    src: '/gallery-photos/home-highlight-01.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-02.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-03.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-04.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-05.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-06.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-07.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-08.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-09.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-10.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-11.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-12.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-13.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-14.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-15.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-16.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-17.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-18.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-19.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-20.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-21.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-22.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-23.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-24.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-25.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-26.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-27.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-28.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-29.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-30.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-31.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-32.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-33.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-34.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-35.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-36.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-37.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-38.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-39.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-40.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },
  {
    src: '/gallery-photos/home-highlight-41.jpg',
    alt: 'Kids Care Rehab Centre facility, therapy equipment, and centre moments',
    category: 'latest-equipment',
  },

]
