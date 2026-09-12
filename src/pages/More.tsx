/**
 * New pages added per KCRC_Website_Content_Edited_Final.docx (client-approved, 2026-08-31):
 * KCR Special School, CDEC Vocational Training Centre, Assessment, Success Stories,
 * Impact & Reviews, Donate, CSR, Compliance, Media, and the Founder profile.
 * Grouped in one file to keep the new-route surface easy to review together.
 */
import { Button, Card, DraftNote, Section, SectionHead } from '@/components/ui'
import { CTABand, CallCard, CheckList, PageHero } from '@/components/sections'
import { Seo } from '@/components/layout/Seo'
import { RevealGroup, RevealItem } from '@/components/motion/Reveal'
import { IconCheck } from '@/components/ui/Icons'
import { site, whatsappUrl } from '@/content/site'
import { about } from '@/content/about'

/* ============================================================ Founder */
export function FounderPage() {
  const d = about.director
  return (
    <>
      <Seo
        title="Dr. R. Radha Balachandar — Founder"
        description="Dr. R. Radha Balachandar, PhD — Founder and Director of Kids Care Rehab Centre, Director of KCR Special School, and Founder of BRAIN2ACT. Over 20 years of clinical, research and training experience."
        path="/about/founder"
      />
      <PageHero
        eyebrow="Founder. Clinician. Researcher. Author. Trainer. Social Impact Leader."
        title={d.name}
        intro={d.credentials}
        trail={[{ label: 'About', to: '/about' }, { label: 'Dr. R. Radha Balachandar' }]}
      />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_0.9fr] lg:gap-14">
          <div>
            <p className="mb-6 font-display text-sm font-semibold text-brand-600">{d.role}</p>
            <div className="flex flex-col gap-4">
              {d.body.map((p) => (
                <p key={p.slice(0, 24)} className="text-ink-600">{p}</p>
              ))}
            </div>

            <h2 className="mt-10 mb-4 text-2xl">Awards &amp; Recognition</h2>
            <CheckList items={d.honours} tone="brand" />

            <h2 className="mt-10 mb-4 text-2xl">International &amp; Professional Training</h2>
            <CheckList items={d.training} tone="teal" />

            <h2 className="mt-10 mb-4 text-2xl">Books &amp; Publications</h2>
            <p className="mb-4 text-ink-600">
              Eleven titles across English and Tamil — see the full list with purchase links on
              the <a href="/books" className="text-brand-600 underline">Books &amp; Resources</a> page.
            </p>
          </div>
          <aside>
            <CallCard />
          </aside>
        </div>
      </Section>

      <CTABand
        title="Book a child assessment with our team"
        body="Dr. Radha Balachandar and our multidisciplinary team assess every child individually before recommending a therapy plan."
      />
    </>
  )
}

/* ================================================= KCR Special School */
export function KcrSpecialSchoolPage() {
  const points = [
    'Detailed educational and developmental assessment',
    'Individualized Education Programme (IEP) with measurable goals',
    'Pre-primary and primary learning pathways',
    'Functional academics, school readiness and classroom participation',
    'Communication, social skills and behaviour support',
    'Activities of daily living and adaptive skills',
    'Cognitive, motor and learning-readiness development',
    'Regular parent meetings, home strategies and progress reviews',
    'Transition planning for greater independence and inclusion',
  ]
  return (
    <>
      <Seo
        title="Special School in Chennai | KCR Special School Admissions"
        description="KCR Special School provides individualized special education for pre-primary and primary learners, registered with the Commissionerate for the Welfare of Differently Abled, Government of Tamil Nadu."
        path="/kcr-special-school"
      />
      <PageHero
        eyebrow="Admissions open 2026–27 · Pre-primary & Primary"
        title="KCR Special School — Learning With Dignity and Purpose"
        intro="A safe, structured and encouraging learning environment for children who need individualized educational and developmental support."
        trail={[{ label: 'KCR Special School' }]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <Button to="/contact">Enquire about admission</Button>
          <Button href={whatsappUrl} variant="secondary">WhatsApp us</Button>
        </div>
      </PageHero>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_0.9fr] lg:gap-14">
          <div>
            <p className="mb-6 max-w-[68ch] text-ink-600">
              Experienced special educators work with therapists and families to understand each
              learner, prepare an Individualized Education Programme (IEP), set measurable goals
              and review progress. The school is registered with the Commissionerate for the
              Welfare of Differently Abled, Government of Tamil Nadu.
            </p>
            <CheckList items={points} tone="brand" />

            <p className="text-sm text-ink-500">
              Registered as {site.specialSchoolRegistrationName} — Registration No.{' '}
              {site.specialSchoolRegistrationNumber}, dated {site.specialSchoolRegistrationDate},
              with the {site.specialSchoolRegistrationBody}.
            </p>
          </div>
          <aside>
            <CallCard />
          </aside>
        </div>
      </Section>

      <CTABand title="Enquire about KCR Special School admission" body="Pre-primary and primary seats for 2026–27 are open. Call or WhatsApp to arrange a visit and assessment." />
    </>
  )
}

/* ==================================== CDEC Vocational Training Centre */
export function CdecPage() {
  const courses = [
    'Certificate Course in Autism Spectrum Disorder — 6 months, centre-based',
    'Certificate / training programmes in Learning Disabilities & ADHD',
    'Certificate / training programmes in Child Psychology',
    'Certificate / training programmes in Developmental Therapies',
    'Certificate / training programmes in ECCE (Early Childhood Care & Education)',
    '2-year Diploma in Film, Television & Digital Video Production — current 2026 offering',
  ]
  return (
    <>
      <Seo
        title="CDEC Vocational Training Centre Chennai | Certificate & Diploma Courses"
        description="CDEC Vocational Training Centre offers NCVRT-approved certificate and diploma courses in Chennai, with practical centre-based training, case-based teaching and mentoring."
        path="/cdec"
      />
      <PageHero
        eyebrow="Training professionals. Strengthening the sector."
        title="CDEC Vocational Training Centre"
        intro="A training initiative connected with Kids Care Rehab Centre, offering NCVRT-approved certificate and diploma courses, practical centre-based training, case-based teaching, observation, mentoring and professional guidance."
        trail={[{ label: 'CDEC Vocational Training Centre' }]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <Button to="/contact">Course enquiry</Button>
          <Button href={`tel:${site.cdecPhoneHref.replace('tel:', '')}`} variant="secondary">
            Call {site.cdecPhoneDisplay}
          </Button>
        </div>
      </PageHero>

      <Section tone="paper">
        <SectionHead
          eyebrow="Current public programme information"
          title="Courses"
          intro={`NCVRT Registration: ${site.cdecNcvrtRegistration} · 7 NCVRT-approved courses are listed publicly · 500+ trained professionals are stated on the current CDEC VTC website.`}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {courses.map((c) => (
            <Card key={c.slice(0, 24)} interactive={false}>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <span className="text-[0.95rem] text-ink-600">{c}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHead
          eyebrow="Graduation & current students"
          title="Building capable professionals"
          intro="Convocation photographs, certificates, student achievements and current batch photographs will be added here once supplied — including the exact course name and academic year for the present cohort."
        />
        <DraftNote>
          Course approvals, awarding-body details, eligibility and schedules should be published
          only after documentary verification, per the client's own note.
        </DraftNote>
      </Section>

      <Section tone="paper">
        <div className="rounded-card border border-ink-200 bg-white p-8">
          <h2 className="text-2xl">CDEC contact</h2>
          <p className="mt-3 text-ink-600">52/3 Gowdiamutt Road, Royapettah, Chennai 600014</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a href={site.cdecPhoneHref} className="text-brand-600 hover:underline">{site.cdecPhoneDisplay}</a>
            <a href={`mailto:${site.cdecEmail}`} className="text-brand-600 hover:underline">{site.cdecEmail}</a>
          </div>
        </div>
      </Section>

      <CTABand title="Ask about CDEC courses" body="Certificate and diploma courses run on a rolling intake. Call, WhatsApp or write in for the current schedule." />
    </>
  )
}

/* ===================================================== Assessment */
export function AssessmentPage() {
  const steps = [
    "Book an appointment and share the child's concerns, history and priorities",
    'Complete detailed developmental, motor, sensory, communication, behavioural, learning and functional assessment as appropriate',
    "Understand the child's strengths, participation barriers and family priorities",
    'Set practical, measurable therapy and education goals',
    'Prepare an individualized therapy plan, IEP or coordinated multidisciplinary programme',
    'Document sessions, guide parents, monitor progress and review goals regularly',
  ]
  const kids360 = [
    'Online or assisted appointment scheduling and enquiry follow-up',
    'Secure child profile, consent and developmental history',
    'Detailed discipline-wise assessment records',
    'Individualized therapy goals, therapy plans and IEP documentation',
    'Session notes, attendance, progress tracking and scheduled reviews',
    'Clearer coordination between therapists, special educators and families',
  ]
  return (
    <>
      <Seo
        title="Child Development Assessment in Chennai — KCRC"
        description="From first concern to a clear, individualised plan: how assessment works at Kids Care Rehab Centre, Chennai."
        path="/assessment"
      />
      <PageHero
        eyebrow="Assessment"
        title="From First Concern to a Clear, Individualised Plan"
        trail={[{ label: 'Assessment' }]}
      />

      <Section tone="paper">
        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {steps.map((s, i) => (
            <RevealItem key={s.slice(0, 20)}>
              <Card interactive={false} className="h-full gap-2">
                <span className="font-display text-2xl font-bold text-brand-300">{i + 1}</span>
                <p className="text-[0.95rem] text-ink-600">{s}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="white">
        <div className="rounded-card border border-dashed border-accent-400 bg-accent-50 p-8">
          <span className="font-display text-xs font-semibold tracking-[0.14em] text-accent-700 uppercase">
            Coming soon
          </span>
          <h2 className="mt-2 text-2xl">Kids Care 360 — Clinical Management</h2>
          <p className="mt-3 max-w-[68ch] text-ink-600">
            A clinical-management system to make the child's care journey more organized,
            transparent and connected — from the first appointment through assessment, therapy
            planning and progress review.
          </p>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {kids360.map((k) => (
              <li key={k.slice(0, 20)} className="flex items-start gap-2.5 text-[0.95rem] text-ink-600">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-200 text-accent-800">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                {k}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-ink-500">
            This will be published as "Coming Soon" until testing, consent controls, staff
            training, access permissions and data-protection procedures are complete.
          </p>
        </div>
      </Section>

      <CTABand title="Book a child assessment" body="No referral is needed. Call or WhatsApp us to arrange an assessment for your child." />
    </>
  )
}

/* ================================================= Success Stories */
export function SuccessStoriesPage() {
  const stories = [
    {
      title: 'Movement & Mobility',
      body: 'A child with complex motor challenges improved sitting tolerance, posture, balance and muscle control and progressed towards independent walking after sustained multidisciplinary intervention.',
    },
    {
      title: 'Development, Attention & Communication',
      body: 'A learner with developmental delay showed gains in supported walking, stability, attention, listening, social engagement and emerging speech.',
    },
    {
      title: 'School Inclusion & Daily Living',
      body: 'A child with hyperactivity and speech delay improved regulation, concentration, social interaction and verbal communication, became more independent in dressing, brushing and eating, and transitioned successfully into school.',
    },
    {
      title: 'Behaviour, Participation & First Words',
      body: 'A child with significant hyperactivity and challenging behaviour developed calmer participation, better sitting tolerance, attention and listening, emerging words and greater independence in daily activities.',
    },
  ]
  return (
    <>
      <Seo
        title="Success Stories — Progress With Privacy"
        description="Anonymized snapshots of the functional progress children have achieved through regular, individualized multidisciplinary support at Kids Care Rehab Centre."
        path="/success-stories"
      />
      <PageHero
        eyebrow="Real journeys. Meaningful change. Complete confidentiality."
        title="Success Stories — Progress With Privacy"
        intro="Every child's journey is different. These anonymized snapshots are drawn from documented centre records and show the kinds of functional progress children have achieved through regular, individualized multidisciplinary support."
        trail={[{ label: 'Success Stories' }]}
      />

      <Section tone="paper">
        <DraftNote>
          No child's name, school, location, photograph or identifying clinical history is
          published here without specific written parental consent. Individual outcomes vary
          according to each child's needs, attendance, family participation and programme.
        </DraftNote>

        <RevealGroup className="grid gap-5 sm:grid-cols-2" stagger={0.08}>
          {stories.map((s) => (
            <RevealItem key={s.title}>
              <Card interactive={false} className="h-full gap-3">
                <h3 className="text-lg text-brand-700">{s.title}</h3>
                <p className="text-[0.95rem] text-ink-600">{s.body}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTABand />
    </>
  )
}

/* ================================================ Impact & Reviews */
export function ImpactReviewsPage() {
  return (
    <>
      <Seo
        title="Impact & Reviews — KCRC Chennai"
        description="20 years of professional leadership, 5,000+ children and families supported, and real experiences from families at Kids Care Rehab Centre."
        path="/impact-reviews"
      />
      <PageHero
        eyebrow="Impact & Reviews"
        title="Real experiences from families"
        trail={[{ label: 'Impact & Reviews' }]}
      />

      <Section tone="paper">
        <RevealGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4" stagger={0.06}>
          {site.stats.map((s) => (
            <RevealItem key={s.label}>
              <Card interactive={false} className="h-full gap-1">
                <p className="font-display text-3xl leading-tight font-bold text-brand-600">{s.value}</p>
                <p className="font-display text-sm font-semibold text-ink-800">{s.label}</p>
                <p className="text-xs text-ink-500">{s.detail}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="white">
        <SectionHead eyebrow="Google Reviews" title="What families tell Google" />
        <DraftNote>
          The client's fuller requirement is a live-updating widget showing the current star
          rating, total review count and 3–6 recent verified excerpts pulled automatically from
          Google — that needs a Google Places/Reviews API integration, which is a separate
          backend piece not yet built. The links below go straight to the centre's real Google
          Business Profile in the meantime.
        </DraftNote>
        <div className="flex flex-col items-center gap-4 rounded-card border border-ink-200 bg-paper p-10 text-center">
          <p className="font-display text-4xl font-bold text-accent-500">★★★★★</p>
          <p className="text-ink-500">See what families are saying on our Google Business Profile.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={site.googleReviewUrl} variant="secondary">Read all Google reviews</Button>
            <Button href={site.googleReviewUrl} variant="ghost">Write a Google review</Button>
          </div>
          <p className="max-w-[52ch] text-xs text-ink-400">
            Individual progress varies according to each child's needs, attendance and programme.
          </p>
        </div>
      </Section>

      <CTABand title="See our full impact" body="Explore success stories, our journey and our latest milestones." />
    </>
  )
}

/* ============================================================ Donate */
export function DonatePage() {
  const items = [
    'Support therapy for an underprivileged child',
    "Support a child's special-school education",
    'Fund therapy materials and learning resources',
    'Support assistive and therapeutic equipment',
    'Support assessment and early-intervention programmes',
    'Support community awareness and outreach camps',
  ]
  return (
    <>
      <Seo
        title="Support Child Therapy & Special Education — KCRC 80G"
        description="Help a child access therapy and special education. Eligible donations to Kids Rehab Charitable Trust may qualify for 80G tax benefits."
        path="/donate"
      />
      <PageHero
        eyebrow="Support Us"
        title="Help a child access therapy and education"
        intro="Many children who need therapy and special education come from families with limited financial resources. Donations to Kids Rehab Charitable Trust can help bridge the gap between a child's needs and a family's ability to pay."
        trail={[{ label: 'Support Us' }, { label: 'Donate' }]}
      />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div>
            <CheckList items={items} tone="brand" />
            <p className="mt-6 max-w-[64ch] text-sm text-ink-500">
              Eligible donors may claim 80G benefits subject to applicable tax rules and valid
              Trust documentation (80G approval — {site.registrations[2].number}).
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/contact">Sponsor a child</Button>
              <Button to="/contact" variant="secondary">Support therapy</Button>
              <Button to="/contact" variant="secondary">Donate equipment</Button>
            </div>
          </div>
          <aside>
            <DraftNote>
              Bank / payment details for donations were not supplied in the source content and
              must be added — and verified — by the client before this page can accept direct
              donations. Contact the centre directly in the meantime.
            </DraftNote>
            <CallCard />
          </aside>
        </div>
      </Section>

      <CTABand />
    </>
  )
}

/* =============================================================== CSR */
export function CsrPage() {
  const items = [
    'Purchase of therapy and rehabilitation equipment',
    'Assistive learning resources',
    'Special-school classroom resources',
    'Community outreach and developmental screening camps',
    'Autism / developmental-disability awareness programmes',
    'Parent training and community education',
    'Capacity-building and professional training',
    'Technology and infrastructure for therapy and education',
  ]
  const partners = [
    'GO4GURU', 'TVS', 'Toyota Tamil Sangam, Japan (Mr. Hari)', 'Individual donor from the USA (Mr. Kannan)',
  ]
  return (
    <>
      <Seo
        title="CSR Projects Disability Chennai — Partner With KCRC"
        description="Partner with Kids Rehab Charitable Trust (CSR-1 registered) to create inclusive futures — rehabilitation equipment, special education, community outreach and vocational skills."
        path="/csr"
      />
      <PageHero
        eyebrow="Support Us"
        title="Partner with us to create inclusive futures"
        intro="CSR partnerships can strengthen rehabilitation, special education, digital systems, accessible infrastructure, vocational skills and community-based outreach programmes."
        trail={[{ label: 'Support Us' }, { label: 'CSR' }]}
      />

      <Section tone="paper">
        <SectionHead eyebrow="Companies can support" title="Where CSR funding goes" />
        <RevealGroup className="grid gap-4 sm:grid-cols-2" stagger={0.06}>
          {items.map((i) => (
            <RevealItem key={i}>
              <Card interactive={false}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[0.95rem] text-ink-600">{i}</span>
                </div>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
        <p className="mt-6 text-sm text-ink-500">CSR-1 Registration: {site.registrations[0].number}</p>
      </Section>

      <Section tone="white">
        <SectionHead
          eyebrow="Partners who turned support into action"
          title="Thank you to our supporters"
          intro="These partners and individual donors have supported rehabilitation equipment, therapy fees, auto fares and transportation costs for children in need. Acknowledged with permission."
        />
        <div className="flex flex-wrap gap-3">
          {partners.map((p) => (
            <span key={p} className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm text-ink-700">{p}</span>
          ))}
        </div>
      </Section>

      <CTABand title="Discuss a CSR project" body="Project proposals can include clear budgets, milestones, utilisation reporting and impact updates." />
    </>
  )
}

/* ======================================================= Compliance */
export function CompliancePage() {
  return (
    <>
      <Seo
        title="Compliance & Reports — Kids Rehab Charitable Trust"
        description="Registration and compliance details for Kids Rehab Charitable Trust — 12A, 80G, CSR-1 and Trust registration."
        path="/compliance"
      />
      <PageHero
        eyebrow="Support Us"
        title="Compliance & Reports"
        intro="Registration details for Kids Rehab Charitable Trust, published so families, referrers and CSR partners can verify our standing."
        trail={[{ label: 'Support Us' }, { label: 'Compliance & Reports' }]}
      />

      <Section tone="paper">
        <div className="grid gap-5 sm:grid-cols-2">
          {site.registrations.map((r) => (
            <Card key={r.number} interactive={false} className="gap-2">
              <h3 className="text-base">{r.label}</h3>
              <p className="font-display text-lg font-bold text-brand-600 break-all">{r.number}</p>
              <p className="text-sm text-ink-500">{r.issuer}</p>
              <p className="text-xs text-ink-400">Granted {r.date}</p>
            </Card>
          ))}
          <Card interactive={false} className="gap-2">
            <h3 className="text-base">Trust Registration</h3>
            <p className="font-display text-lg font-bold text-brand-600">No. 424/2010</p>
            <p className="text-sm text-ink-500">Kids Rehab Charitable Trust</p>
          </Card>
        </div>
        <DraftNote>
          Per the client's own source document: 12A and 80G are provisional and must be
          re-verified for current validity before publication, and the Trust registration number
          must be checked against the Trust deed. Downloadable approval certificates should be
          added here once supplied.
        </DraftNote>
      </Section>

      <CTABand title="Questions about our registration?" body="Contact us directly and we'll share verified documentation." />
    </>
  )
}

/* =============================================================== Media */
export function MediaPage() {
  const categories = [
    'Television interviews / awareness programmes',
    'Newspaper features',
    'Autism Awareness Day coverage',
    'Medical / developmental screening camp coverage',
    'Community outreach coverage',
    'Professional training / workshop coverage',
    'Digital and social-media features',
  ]
  return (
    <>
      <Seo
        title="Media — Kids Care Rehab Centre in the News"
        description="Kids Care Rehab Centre and Dr. Radha Balachandar have been featured through public-awareness and health programmes on television and in newspapers."
        path="/media"
      />
      <PageHero
        eyebrow="Featured on television, newspapers and digital media"
        title="Media"
        intro="The centre and Dr. Radha Balachandar have been featured through public-awareness and health programmes, including appearances on Sun TV, Jaya TV, Makkal TV, WIN TV and Peppers TV. A 2024 Times of India report covered the free medical screening camp, and a 2026 LinkedIn update notes the World Autism Awareness Day 2026 programme was featured in The Hindu."
        trail={[{ label: 'Media' }]}
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
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm text-ink-700">{c}</span>
          ))}
        </div>
        <DraftNote>
          Actual TV screenshots, newspaper clippings and interview photographs — with
          publication/channel name, date and headline for each — should be added once supplied by
          the client.
        </DraftNote>
      </Section>

      <CTABand />
    </>
  )
}
