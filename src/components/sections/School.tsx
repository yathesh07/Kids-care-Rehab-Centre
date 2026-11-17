/**
 * KCR Special School sections: recognition, admissions, events, about, services, contact.
 * Used on Home and /kcr-special-school.
 */
import { Link } from 'react-router-dom'
import { Button, Card, Section, SectionHead } from '@/components/ui'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal'
import { IconArrow, IconCheck, IconClock, IconMail, IconPhone, IconPin } from '@/components/ui/Icons'
import { site, whatsappUrl } from '@/content/site'
import { branches } from '@/content/branches'
import { about } from '@/content/about'

const admissionUrl = site.admissionFormUrl || '/contact'

/** Apply / WhatsApp / Call — the three admission actions, used everywhere. */
export function AdmissionButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button href={admissionUrl} variant="accent">
        Apply for Admission
        <IconArrow className="h-4 w-4" />
      </Button>
      <Button
        href={whatsappUrl}
        variant="secondary"
        className={dark ? '!border-white/40 !bg-transparent !text-white hover:!bg-white/10' : undefined}
      >
        WhatsApp Enquiry
      </Button>
      <Button
        href={site.phoneHref}
        variant="secondary"
        className={dark ? '!border-white/40 !bg-transparent !text-white hover:!bg-white/10' : undefined}
      >
        <IconPhone className="h-4 w-4" />
        Call Us
      </Button>
    </div>
  )
}

/* ============================================ Step 2: Government recognition */
export function GovRecognition() {
  const items = [
    'Recognised by the Government of Tamil Nadu',
    `Registration No.: ${site.specialSchoolRegistrationNumber} (dated ${site.specialSchoolRegistrationDate})`,
    `Registered with the ${site.specialSchoolRegistrationBody}`,
    'Registered under Section 51(2) of the Rights of Persons with Disabilities Act, 2016',
    'Special School for children with multiple disabilities (ID, ASD, HI, VI) — Pre-Primary and Primary classes',
    `Registration valid until ${site.specialSchoolRegistrationValidTill}`,
    `A unit of ${site.parentTrust}`,
  ]
  return (
    <Section tone="white" id="recognition">
      <Reveal className="grid items-center gap-8 rounded-[1.5rem] border border-teal-200 bg-linear-to-br from-teal-50 to-white p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="font-display text-xs font-semibold tracking-[0.14em] text-teal-700 uppercase">
            Government recognition
          </span>
          <h2 className="mt-2 text-3xl uppercase sm:text-4xl">KCR Special School</h2>
          <ul className="mt-5 grid gap-3">
            {items.map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <span className="text-ink-700">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <a
          href={site.recognitionCertificate}
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto flex w-full max-w-sm flex-col overflow-hidden rounded-card border border-teal-200 bg-white shadow-soft transition-shadow hover:shadow-lift"
        >
          <div className="aspect-3/4 overflow-hidden bg-ink-50">
            <img
              src={site.recognitionCertificateImage}
              alt={`Certificate of Registration, Reg. No. ${site.specialSchoolRegistrationNumber}, issued by the Commissionerate for Welfare of the Differently Abled, Government of Tamil Nadu`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex items-center justify-between gap-3 border-t border-teal-100 px-4 py-3">
            <span className="font-display text-sm font-semibold text-ink-800">
              Certificate of Registration · {site.specialSchoolRegistrationNumber}
            </span>
            <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap font-display text-sm font-semibold text-brand-600">
              View PDF <IconArrow className="h-4 w-4" />
            </span>
          </div>
        </a>
      </Reveal>
    </Section>
  )
}

/* ============================================== Step 3: Admissions 2026–27 */
export function AdmissionsSection() {
  const offers = [
    {
      title: 'Special Education & IEP',
      body: 'Individualised Educational Plans with measurable goals and regular progress reviews.',
    },
    {
      title: 'Early Intervention & Developmental Support',
      body: 'Timely support for communication, motor, cognitive and social development.',
    },
    {
      title: 'School Readiness & Life Skills',
      body: 'Classroom routines, functional academics and daily-living skills for independence.',
    },
    {
      title: 'Free schooling for eligible children with UDID',
      body: 'Available for eligible children holding a UDID card, subject to the school’s admission criteria.',
    },
  ]
  return (
    <Section tone="paper" id="admissions">
      <div className="overflow-hidden rounded-[1.5rem] bg-brand-700 text-white shadow-lift">
        <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-500 px-4 py-1.5 font-display text-sm font-bold tracking-wide uppercase">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              Admissions Open
            </span>
            <h2 className="text-3xl text-white sm:text-4xl">Academic Year 2026–27</h2>
            <p className="text-brand-100">
              Pre-primary and primary seats at KCR Special School, Royapettah. Fill in the online
              form and our team will call you to arrange an assessment and school visit.
            </p>
            <AdmissionButtons dark />
          </div>
          <RevealGroup className="grid gap-4 sm:grid-cols-2" stagger={0.07}>
            {offers.map((o) => (
              <RevealItem key={o.title}>
                <div className="flex h-full flex-col gap-2 rounded-card bg-white/10 p-5 ring-1 ring-white/15">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-500">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <h3 className="text-lg text-white">{o.title}</h3>
                  <p className="text-sm text-brand-100">{o.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  )
}

/* ==================================================== Step 4: Events gallery */
type Photo = { src: string; alt: string; pos?: string }

const ministerPhotos: Photo[] = [
  { src: '/gallery-photos/minister-visit-01.jpg', alt: 'Hon’ble Minister Dr. N. Marie Wilson with staff, therapists and students of KCR Special School' },
  { src: '/gallery-photos/minister-visit-03.jpg', alt: 'The Minister going through the school’s programme details with Dr. R. Radha Balachandar' },
  { src: '/gallery-photos/minister-visit-05.jpg', alt: 'The Minister reviewing learning materials during the visit' },
  { src: '/gallery-photos/minister-visit-04.jpg', alt: 'Welcome screen for the Hon’ble Minister for Finance, Planning and Development at KCR Special School', pos: 'object-[center_25%]' },
]

const diwaliPhotos: Photo[] = [
  { src: '/gallery-photos/diwali-01.jpg', alt: 'Group photograph of families, staff and guests at the Diwali celebration, KCR Special School' },
  { src: '/gallery-photos/diwali-02.jpg', alt: 'Address to families at the Diwali celebration, KCR Special School', pos: 'object-[center_30%]' },
  { src: '/gallery-photos/diwali-03.jpg', alt: 'Diwali gifts presented to families during the celebration' },
  { src: '/gallery-photos/diwali-04.jpg', alt: 'Welcome address at the Diwali celebration, KCR Special School', pos: 'object-[center_35%]' },
  { src: '/gallery-photos/diwali-05.jpg', alt: 'Families and children enjoying the Diwali programme' },
  { src: '/gallery-photos/diwali-06.jpg', alt: 'Diwali activities with children and parents at KCR Special School' },
]

function EventGrid({ photos }: { photos: Photo[] }) {
  return (
    <RevealGroup className={`grid grid-cols-2 gap-3 sm:gap-4 ${photos.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`} stagger={0.06}>
      {photos.map((p) => (
        <RevealItem key={p.src} className="group aspect-4/3 overflow-hidden rounded-card border border-ink-200 shadow-soft">
          <img
            src={p.src}
            alt={p.alt}
            loading="lazy"
            decoding="async"
            className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${p.pos ?? 'object-center'}`}
          />
        </RevealItem>
      ))}
    </RevealGroup>
  )
}

function EventBlock({
  tag,
  title,
  date,
  caption,
  photos,
}: {
  tag: string
  title: string
  date?: string
  caption: string
  photos: Photo[]
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="max-w-[72ch]">
        <span className="font-display text-xs font-semibold tracking-[0.14em] text-accent-600 uppercase">
          {tag}
          {date ? ` · ${date}` : ''}
        </span>
        <h3 className="mt-1.5 text-2xl sm:text-[1.7rem]">{title}</h3>
        <p className="mt-2 text-ink-600">{caption}</p>
      </div>
      <EventGrid photos={photos} />
    </div>
  )
}

export function MinisterVisitEvent() {
  return (
    <EventBlock
      tag="Special visit"
      title="Visit of Hon’ble Dr. N. Marie Wilson, Minister for Finance, Planning and Development, Government of Tamil Nadu"
      caption="KCR Special School and Kids Care Rehab Centre were honoured to welcome the Hon’ble Minister, who interacted with our students, therapists and special educators, and reviewed the school’s individualised education and therapy programmes."
      photos={ministerPhotos}
    />
  )
}

export function DiwaliEvent() {
  return (
    <EventBlock
      tag="Celebration"
      title="Diwali Celebration at KCR Special School – Special Visit by Srinivasan Sir"
      date="Friday, 6 November 2026"
      caption="Children, parents and staff came together to celebrate Diwali — the Festival of Lights — with Srinivasan sir, who joined the celebration, interacted with the children and families, and presented Diwali gifts."
      photos={diwaliPhotos}
    />
  )
}

export function EventsGallery() {
  return (
    <Section tone="white" id="events">
      <SectionHead
        eyebrow="Events & special moments"
        title="Life at KCR Special School"
        intro="Original photographs from recent events at our Royapettah school."
      />
      <div className="flex flex-col gap-14">
        <MinisterVisitEvent />
        <DiwaliEvent />
      </div>
    </Section>
  )
}

/* ========================================== Step 5: About KCR Special School */
export function SchoolAbout() {
  const d = about.director
  const points = [
    'More than 20 years of experience in child development and rehabilitation',
    'Individualised special education and developmental intervention',
    'Parent guidance and family empowerment',
    `KCR Special School is a unit of ${site.parentTrust}`,
  ]
  return (
    <Section tone="paper" id="about-school">
      <Reveal className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="aspect-4/5 overflow-hidden rounded-[1.5rem] border border-brand-200 shadow-lift">
            <img
              src="/founder-radha-balachandar.jpg"
              alt="Dr. R. Radha Balachandar, Founder of KCR Special School and Kids Care Rehab Centre"
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-5 left-4 right-4 rounded-card bg-white p-4 text-center shadow-lift">
            <p className="font-display font-semibold text-ink-900">{d.name}</p>
            <p className="text-xs text-ink-500">Founder · Parenting Coach · Counsellor · Author</p>
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <span className="font-display text-xs font-semibold tracking-[0.14em] text-brand-500 uppercase">
            About KCR Special School
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl">Every child learns — in their own way</h2>
          <p className="mt-4 text-lg text-ink-600">
            Founded by Dr. R. Radha Balachandar — Founder, Parenting Coach, Counsellor and Author —
            KCR Special School brings two decades of child-development expertise into a structured,
            caring classroom.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2.5">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <span className="text-[0.95rem] text-ink-700">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button to="/about/founder" variant="secondary">Meet our Founder</Button>
            <Button to="/kcr-special-school" variant="ghost">
              About the school
              <IconArrow className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

/* =============================== Step 6: Educational & rehabilitation services */
const schoolServices = [
  { title: 'Special Education & IEP', to: '/services/special-education', tone: 'border-brand-200 bg-brand-50' },
  { title: 'Early Intervention', to: '/services/early-intervention', tone: 'border-accent-200 bg-accent-50' },
  { title: 'Physiotherapy', to: '/services/physiotherapy', tone: 'border-teal-200 bg-teal-50' },
  { title: 'Occupational Therapy & Sensory Integration', to: '/services/occupational-therapy', tone: 'border-sky-200 bg-sky-50' },
  { title: 'Speech & Language Therapy', to: '/services/speech-therapy', tone: 'border-coral-200 bg-coral-50' },
  { title: 'Behaviour Therapy', to: '/services/behaviour-therapy', tone: 'border-brand-200 bg-brand-50' },
  { title: 'Social Skills Training', to: '/services/social-skills-therapy', tone: 'border-accent-200 bg-accent-50' },
  { title: 'School Readiness & Life Skills', to: '/kcr-special-school', tone: 'border-teal-200 bg-teal-50' },
]

export function SchoolServices() {
  return (
    <Section tone="white" id="school-services">
      <SectionHead
        eyebrow="Educational & rehabilitation services"
        title="Education and therapy, under one roof"
        intro="Special educators and therapists plan together, so every child’s learning and therapy goals support each other."
      />
      <RevealGroup className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4" stagger={0.05}>
        {schoolServices.map((s) => (
          <RevealItem key={s.title}>
            <Link
              to={s.to}
              className={`group flex h-full min-h-28 flex-col justify-between gap-3 rounded-card border p-4 transition-shadow hover:shadow-lift sm:p-5 ${s.tone}`}
            >
              <h3 className="text-[0.98rem] leading-snug sm:text-lg">{s.title}</h3>
              <IconArrow className="h-4 w-4 text-ink-500 transition-transform group-hover:translate-x-1" />
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}

/* ================================== Step 7: Contact & admission enquiry */
export function SchoolContact() {
  const b = branches.find((x) => x.slug === 'royapettah') ?? branches[0]
  const other = branches.filter((x) => x.slug !== b.slug)
  return (
    <Section tone="paper" id="contact-school">
      <SectionHead
        eyebrow="Contact & admission enquiry"
        title="Visit KCR Special School, Royapettah"
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card interactive={false} className="gap-5">
          <div className="flex items-start gap-3">
            <IconPin className="mt-0.5 h-6 w-6 shrink-0 text-accent-500" />
            <address className="not-italic text-ink-700">
              <span className="block font-display font-semibold text-ink-900">KCR Special School</span>
              {b.addressLines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
              <span className="block">
                {b.city} {b.pincode}
              </span>
            </address>
          </div>
          <div className="flex flex-col gap-2.5 text-[0.95rem]">
            <a href={b.mobileHref} className="inline-flex items-center gap-2.5 font-semibold text-ink-800 hover:text-brand-600">
              <IconPhone className="h-5 w-5 text-brand-500" /> {b.mobileDisplay}
            </a>
            <a href={b.phoneHref} className="inline-flex items-center gap-2.5 text-ink-700 hover:text-brand-600">
              <IconPhone className="h-5 w-5 text-brand-500" /> {b.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 break-all text-ink-700 hover:text-brand-600">
              <IconMail className="h-5 w-5 shrink-0 text-brand-500" /> {site.email}
            </a>
            <span className="inline-flex items-center gap-2.5 text-ink-700">
              <IconClock className="h-5 w-5 text-brand-500" /> {b.hours}
            </span>
          </div>
          <AdmissionButtons />
          <Button href={b.mapsUrl} variant="ghost" size="sm" className="w-fit">
            <IconPin className="h-4 w-4" /> Open in Google Maps
          </Button>
          {other.length > 0 && (
            <p className="text-sm text-ink-500">
              Also at:{' '}
              {other.map((o) => (
                <Link key={o.slug} to={`/locations/${o.slug}`} className="text-brand-600 underline">
                  {o.name} branch
                </Link>
              ))}
            </p>
          )}
        </Card>
        <div className="min-h-80 overflow-hidden rounded-card border border-ink-200 shadow-soft">
          <iframe
            title="KCR Special School, Royapettah — Google Maps"
            src={b.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-80 w-full border-0"
          />
        </div>
      </div>
    </Section>
  )
}
