import { Button, Card, cn, DraftNote, Section, SectionHead } from '@/components/ui'
import { CTABand, CallCard, CheckList, PageHero, PhotoStrip, SidePhoto } from '@/components/sections'
import { Seo } from '@/components/layout/Seo'
import { RevealGroup, RevealItem } from '@/components/motion/Reveal'
import { IconArrow } from '@/components/ui/Icons'
import { adultPhysio, books } from '@/content/about'
import { IconCheck } from '@/components/ui/Icons'
import { faqs, testimonials } from '@/content/placeholders'
import { galleryCategoryLabels, galleryImages, pagePhotos, type GalleryCategory } from '@/content/gallery'
import { useMemo, useState } from 'react'
import { site } from '@/content/site'

/* ------------------------------------------------ Adult Physio Care */
export function AdultPhysioPage() {
  const adultPhysioPhoto = pagePhotos(80, 1)[0]
  return (
    <>
      <Seo
        title="Adult Physiotherapy in Royapettah, Chennai | KCRC"
        description="Assessment-led adult and senior-citizen physiotherapy in Royapettah, Chennai — pain rehabilitation, mobility, balance and wheelchair-accessible care."
        path="/adult-physio-care"
      />
      <PageHero
        eyebrow="Move better. Feel stronger. Live more comfortably."
        title="Adult Physio Care"
        intro={adultPhysio.intro}
        trail={[{ label: 'Adult Physio Care' }]}
      />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_0.9fr] lg:gap-14">
          <div>
            <div className="mb-8 flex gap-3 rounded-card border border-teal-200 bg-teal-50 p-5">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white">
                <IconCheck className="h-4 w-4" />
              </span>
              <p className="text-[0.95rem] text-teal-800">{site.wheelchairAccess}</p>
            </div>

            <h2 className="mb-5 text-2xl">Conditions we treat</h2>
            <CheckList items={adultPhysio.treats} tone="teal" />

            <h2 className="mt-10 mb-5 text-2xl">Modern techniques &amp; rehabilitation equipment</h2>
            <p className="mb-5 max-w-[68ch] text-ink-600">
              Based on clinical assessment, care may include therapeutic exercise, stretching and
              strengthening, posture correction, ergonomic guidance, balance and gait training,
              movement retraining, appropriate hands-on techniques and home-exercise planning.
              Available rehabilitation equipment and modalities may include IFT, traction, FES,
              PEMF and other physiotherapy devices, selected according to the person's condition,
              contraindications and treatment goals.
            </p>
            <CheckList items={adultPhysio.equipment} tone="teal" />

            <h2 className="mt-10 mb-3 text-2xl">{adultPhysio.prenatal.title}</h2>
            <p className="mb-5 max-w-[68ch] text-ink-600">{adultPhysio.prenatal.intro}</p>
            <ol className="flex flex-col gap-3">
              {adultPhysio.prenatal.sessions.map((s, i) => (
                <li
                  key={s.slice(0, 20)}
                  className="flex gap-4 rounded-card border border-ink-200 bg-white p-5"
                >
                  <span className="font-display text-sm font-bold text-teal-500">
                    Session {i + 1}
                  </span>
                  <span className="text-[0.95rem] text-ink-600">{s}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 max-w-[68ch] text-ink-600">{adultPhysio.prenatal.postnatal}</p>
          </div>

          <aside className="flex flex-col gap-6">
            <SidePhoto {...adultPhysioPhoto} />
            <CallCard />
          </aside>
        </div>
      </Section>

      <CTABand
        title="Book an adult physiotherapy assessment"
        body="Our Royapettah centre offers assessment and treatment six days a week. Call or WhatsApp to arrange a time — senior-citizen and wheelchair-accessible physiotherapy available."
      />
    </>
  )
}

/* -------------------------------------------------------- Books */
export function BooksPage() {
  return (
    <>
      <Seo
        title="Books & Resources"
        description="Books on autism, ADHD and learning disability written by Dr. Radha Balachandar, in English and Tamil, plus the Autism OTT podcast."
        path="/books"
      />
      <PageHero
        eyebrow="Books & resources"
        title="Written for parents, in your language"
        intro="Our Director has written three books for parents and educators — one in English and two in Tamil — alongside a podcast covering autism, ADHD and developmental disorders."
        trail={[{ label: 'Books & Resources' }]}
      />

      <Section tone="paper">
        <div className="grid gap-6 lg:grid-cols-3">
          {books.map((b) => (
            <Card key={b.title} interactive={false} className="gap-3">
              <span className="w-fit rounded-full bg-accent-100 px-3 py-1 font-display text-xs font-semibold text-accent-700">
                {b.language}
              </span>
              <h2 className="text-xl">{b.title}</h2>
              <p className="text-sm text-ink-500">{b.subtitle}</p>
              <p className="flex-1 text-[0.95rem] text-ink-600">{b.description}</p>
              {b.links.length > 0 ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {b.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-ink-200 px-3 py-1.5 text-xs font-medium text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-xs text-ink-400">
                  Purchase links to be added — contact us for availability.
                </p>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="rounded-card border border-teal-200 bg-teal-50 p-8">
          <h2 className="text-2xl">Autism OTT Podcast</h2>
          <p className="mt-3 max-w-[62ch] text-ink-600">
            Resources, parenting tips and research on autism, ADHD, learning disabilities and
            developmental disorders — in Tamil and English, with interviews featuring autistic
            individuals and their families.
          </p>
          <Button href={site.social.podcast} variant="secondary" className="mt-5">
            Listen to the podcast
            <IconArrow className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      <CTABand />
    </>
  )
}

/* --------------------------------------------------------- FAQ */
export function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <Seo
        title="Frequently Asked Questions"
        description="Common questions about assessments, referrals, therapy, parent involvement, online sessions and adult services at Kids Care Rehab Centre."
        path="/faq"
        jsonLd={faqSchema}
      />
      <PageHero
        eyebrow="FAQ"
        title="Questions parents ask us"
        intro="If your question isn’t answered here, call or WhatsApp us — we’re glad to talk it through."
        trail={[{ label: 'FAQ' }]}
      />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_0.9fr] lg:gap-14">
          <div>
            <DraftNote>
              These answers are drafted from approved service copy and are awaiting client review.
              Two answers still need information from the centre (languages, fees).
            </DraftNote>

            <div className="flex flex-col gap-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-card border border-ink-200 bg-white p-5 open:border-brand-200"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display font-semibold text-ink-800 marker:hidden">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-brand-400 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[68ch] text-[0.95rem] text-ink-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
          <aside>
            <CallCard />
          </aside>
        </div>
      </Section>

      <CTABand />
    </>
  )
}

/* ------------------------------------------------- Testimonials */
export function TestimonialsPage() {
  return (
    <>
      <Seo
        title="Testimonials"
        description="What families say about therapy at Kids Care Rehab Centre, Chennai."
        path="/testimonials"
        noindex
      />
      <PageHero
        eyebrow="Testimonials"
        title="What families tell us"
        trail={[{ label: 'Testimonials' }]}
      />
      <Section tone="paper">
        <DraftNote>
          <strong>This page is not ready to publish.</strong> The cards below are dummy
          placeholders. Real testimonials are needed from the client, each with written
          permission from the family. The page is set to <code>noindex</code> until then.
        </DraftNote>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} interactive={false} className="border-dashed">
              <p className="flex-1 text-[0.95rem] text-ink-500 italic">“{t.quote}”</p>
              <div className="mt-4 border-t border-ink-200 pt-4">
                <p className="font-display font-semibold text-ink-700">{t.author}</p>
                <p className="text-sm text-ink-500">{t.detail}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  )
}

/* ----------------------------------------------------- Gallery */
export function GalleryPage() {
  const [active, setActive] = useState<GalleryCategory | 'all'>('all')
  const usedCategories = useMemo(
    () => Array.from(new Set(galleryImages.map((i) => i.category))) as GalleryCategory[],
    [],
  )
  const shown = active === 'all' ? galleryImages : galleryImages.filter((i) => i.category === active)

  return (
    <>
      <Seo
        title="Gallery"
        description="Photographs from Kids Care Rehab Centre, Chennai — therapy sessions, outreach visits, Special School, CDEC training and centre events."
        path="/gallery"
      />
      <PageHero
        eyebrow="Gallery"
        title="Inside our centres"
        intro="A look at therapy sessions, outreach visits and centre events — real moments from Kids Care Rehab Centre, shared with families' consent."
        trail={[{ label: 'Gallery' }]}
      />

      <Section tone="white">
        <SectionHead eyebrow="Watch" title="Our story, in under 3 minutes" />
        <div className="mx-auto max-w-3xl overflow-hidden rounded-card border border-brand-200/70 shadow-lift">
          <video
            controls
            preload="none"
            poster="/video/kcrc-intro-poster.jpg"
            className="aspect-video w-full bg-ink-900"
          >
            <source src="/video/kcrc-intro.mp4" type="video/mp4" />
            Your browser does not support embedded video. You can{' '}
            <a href="/video/kcrc-intro.mp4">download the video</a> instead.
          </video>
        </div>
      </Section>

      <Section tone="paper">
        <DraftNote>
          Photos are currently grouped under the categories they were tagged with at upload.
          Re-sorting the full set into every category listed (Latest Equipment, Special School,
          CDEC Graduation, Awards &amp; Recognition, etc.) needs the client's approved Instagram
          archive (instagram.com/kidscare_rehab) so each photo is placed correctly — see{' '}
          <a href="https://www.instagram.com/kidscare_rehab/" target="_blank" rel="noopener noreferrer" className="underline">
            @kidscare_rehab
          </a>
          .
        </DraftNote>

        {galleryImages.length === 0 ? (
          <div className="mx-auto max-w-2xl rounded-card border border-dashed border-accent-400 bg-accent-50 p-8 text-center">
            <h2 className="text-xl text-accent-700">Gallery pending consent clearance</h2>
            <p className="mt-3 text-[0.95rem] text-ink-600">
              No images will be added here until the client confirms written consent per
              photograph, or approves a facility-and-events-only selection.
            </p>
            <Button to="/contact" variant="secondary" className="mt-6">
              Contact us
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-8 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActive('all')}
                className={cn(
                  'rounded-full px-3.5 py-1.5 font-display text-xs font-semibold transition-colors',
                  active === 'all' ? 'bg-brand-500 text-white' : 'bg-white text-ink-600 border border-ink-200 hover:border-brand-300',
                )}
              >
                All ({galleryImages.length})
              </button>
              {usedCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={cn(
                    'rounded-full px-3.5 py-1.5 font-display text-xs font-semibold transition-colors',
                    active === c ? 'bg-brand-500 text-white' : 'bg-white text-ink-600 border border-ink-200 hover:border-brand-300',
                  )}
                >
                  {galleryCategoryLabels[c]} ({galleryImages.filter((i) => i.category === c).length})
                </button>
              ))}
            </div>

            <RevealGroup className="columns-2 gap-4 lg:columns-3 [&>*]:mb-4" stagger={0.06}>
              {shown.map((img) => (
                <RevealItem key={img.src} className="overflow-hidden rounded-card border border-ink-200">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full transition-transform duration-500 hover:scale-105"
                  />
                </RevealItem>
              ))}
            </RevealGroup>
          </>
        )}
      </Section>
      <CTABand />
    </>
  )
}

/* ------------------------------------------------------- Trust */
export function TrustPage() {
  return (
    <>
      <Seo
        title="Kids Rehab Charitable Trust"
        description="Kids Care Rehab Centre is a unit of Kids Rehab Charitable Trust, registered for CSR activities and holding 12A and 80G registration."
        path="/trust"
      />
      <PageHero
        eyebrow="Our trust"
        title={site.parentTrust}
        intro="Kids Care Rehab Centre operates as a unit of Kids Rehab Charitable Trust, a registered charitable trust based in Chennai."
        trail={[{ label: 'Charitable Trust' }]}
      />

      <Section tone="paper">
        <SectionHead
          eyebrow="Statutory registrations"
          title="Registered and accountable"
          intro="The Trust holds the following registrations. Registration details are published so that families, referrers and CSR partners can verify our standing."
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {site.registrations.map((r) => (
            <Card key={r.number} interactive={false} className="gap-2">
              <h3 className="text-base">{r.label}</h3>
              <p className="font-display text-lg font-bold text-brand-600 break-all">
                {r.number}
              </p>
              <p className="text-sm text-ink-500">{r.issuer}</p>
              <p className="text-xs text-ink-400">Granted {r.date}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-card border border-ink-200 bg-white p-6">
          <dl className="grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-xs tracking-wide text-ink-500 uppercase">PAN</dt>
              <dd className="font-display font-semibold text-ink-800">{site.pan}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-ink-500 uppercase">
                12A / 80G validity
              </dt>
              <dd className="font-display font-semibold text-ink-800">
                {site.registrationValidity}
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-ink-500 uppercase">Registered office</dt>
              <dd className="text-[0.95rem] text-ink-700">
                New No. 52/2 (Old No. 97), Gowdia Mutt Road, Royapettah, Chennai 600014
              </dd>
            </div>
          </dl>
        </div>

        <p className="mt-6 max-w-[68ch] text-sm text-ink-500">
          Note: 12A registration and 80G approval are currently provisional, valid for{' '}
          {site.registrationValidity}.
        </p>
      </Section>

      <Section tone="white">
        <div className="rounded-card border border-brand-200 bg-brand-50 p-8">
          <h2 className="text-2xl">CSR partnerships</h2>
          <p className="mt-3 max-w-[62ch] text-ink-600">
            The Trust is registered with the Ministry of Corporate Affairs for undertaking CSR
            activities (Registration {site.registrations[0].number}). Organisations interested in
            supporting therapy access for children from low-income families are welcome to get in
            touch.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button to="/csr">CSR Partnerships</Button>
            <Button to="/donate" variant="secondary">Donate</Button>
            <Button to="/compliance" variant="secondary">Compliance &amp; Reports</Button>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <PhotoStrip photos={pagePhotos(90, 3)} />
      </Section>

      <CTABand />
    </>
  )
}

/* ----------------------------------------------------- Privacy */
export function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How Kids Care Rehab Centre handles personal information submitted through this website."
        path="/privacy"
      />
      <PageHero eyebrow="Legal" title="Privacy Policy" trail={[{ label: 'Privacy' }]} />
      <Section tone="paper">
        <DraftNote>
          Draft policy. This must be reviewed by the client — and ideally by a legal adviser —
          before launch, particularly the sections on children’s data and photograph consent.
        </DraftNote>

        <div className="prose-page max-w-[68ch]">
          <h2>What we collect</h2>
          <p>
            When you submit an enquiry through this website we collect the name, contact details
            and any information about your child that you choose to share with us. We use this
            only to respond to your enquiry and to arrange an appointment.
          </p>

          <h2>Children’s information</h2>
          <p>
            Information about a child is provided by a parent or guardian. We treat it as
            confidential health information, share it only with the clinical team involved in
            that child’s care, and do not publish it.
          </p>

          <h2>Photographs</h2>
          <p>
            We do not publish photographs of children on this website without written consent from
            a parent or guardian. Consent can be withdrawn at any time by contacting us, and we
            will remove the photograph.
          </p>

          <h2>How we store information</h2>
          <p>
            Enquiry submissions are delivered to our centre by email and retained only as long as
            needed to respond and provide care. We do not sell or share your information with
            third parties for marketing.
          </p>

          <h2>Contact</h2>
          <p>
            For any question about your information, or to request its removal, email{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a> or call {site.phoneDisplay}.
          </p>
        </div>
      </Section>
    </>
  )
}

/* --------------------------------------------------------- 404 */
export function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" description="This page could not be found." noindex />
      <Section tone="paper" className="py-24">
        <div className="mx-auto max-w-lg text-center">
          <p className="font-display text-6xl font-bold text-brand-200">404</p>
          <h1 className="mt-4 text-3xl">We couldn’t find that page</h1>
          <p className="mt-3 text-ink-600">
            The page may have moved. Try our services, or get in touch and we’ll point you the
            right way.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button to="/">Back to home</Button>
            <Button to="/services" variant="secondary">
              Our services
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
