// Drop into src/components/sections/ (or a page). Photos go in public/gallery-photos/.
import { Section, SectionHead } from '@/components/ui'
import { RevealGroup, RevealItem } from '@/components/motion/Reveal'

const photos = [
  { src: '/gallery-photos/minister-visit-04.jpg', alt: 'Welcome screen for the Hon’ble Minister for Finance, Planning and Development, Government of Tamil Nadu, at KCR Special School', pos: 'object-[center_25%]' },
  { src: '/gallery-photos/minister-visit-01.jpg', alt: 'Staff, students and children with the visiting Minister at Kids Care Rehab Centre', pos: 'object-center' },
  { src: '/gallery-photos/minister-visit-03.jpg', alt: 'Minister going through the centre’s programme details with Dr. R. Radha Balachandar', pos: 'object-center' },
  { src: '/gallery-photos/minister-visit-05.jpg', alt: 'Minister reviewing centre materials during the visit', pos: 'object-center' },
  { src: '/gallery-photos/minister-visit-06.jpg', alt: 'Minister observing a child’s activity during the visit', pos: 'object-[center_25%]' },
  { src: '/gallery-photos/minister-visit-02.jpg', alt: 'Group photo during the Minister’s visit to Kids Care Rehab Centre', pos: 'object-center' },
]

export function MinisterVisit() {
  return (
    <Section tone="white">
      <SectionHead
        eyebrow="Recognition"
        title="Honoured by the visit of the Hon’ble Minister for Finance, Planning and Development"
        intro="Government of Tamil Nadu — visit to Kids Care Rehab Centre & KCR Special School."
      />
      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {photos.map((p) => (
          <RevealItem key={p.src} className="aspect-4/3 overflow-hidden rounded-card border border-ink-200 shadow-soft">
            <img src={p.src} alt={p.alt} loading="lazy" className={`h-full w-full object-cover ${p.pos}`} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
// Use on Home (below the hero/StatStrip) and on /kcr-special-school:  <MinisterVisit />
