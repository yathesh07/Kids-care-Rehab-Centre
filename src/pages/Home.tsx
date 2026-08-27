import { Link } from 'react-router-dom'
import { Button, Card, Section, SectionHead } from '@/components/ui'
import { CTABand, ConditionGrid, ServiceGrid, StatStrip } from '@/components/sections'
import { Seo, organisationSchema } from '@/components/layout/Seo'
import { IconArrow, IconClock, IconPhone, IconPin } from '@/components/ui/Icons'
import { site, whatsappUrl } from '@/content/site'
import { branches } from '@/content/branches'
import { about } from '@/content/about'

export default function Home() {
  return (
    <>
      <Seo
        title={site.name}
        description={site.description}
        path="/"
        jsonLd={organisationSchema}
      />

      {/* ---------------------------------------------------------- hero */}
      <div className="relative overflow-hidden border-b border-ink-200/60 bg-linear-to-br from-brand-50 via-paper to-accent-50">
        <div className="container-page relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3.5 py-1.5 font-display text-xs font-semibold text-brand-600">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              Serving Chennai since {site.foundedText}
            </span>

            <h1 className="mt-5 text-4xl leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
              Every child has potential.
              <span className="block text-brand-600">We help them discover it.</span>
            </h1>

            <p className="mt-5 max-w-[54ch] text-lg text-ink-600">
              Speech, occupational, behaviour and physiotherapy, special education and early
              intervention — delivered by one multidisciplinary team, built around your child.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact">Book an appointment</Button>
              <Button to="/services" variant="secondary">
                Explore our services
              </Button>
            </div>

            <p className="mt-5 text-sm text-ink-500">
              No referral needed ·{' '}
              <a href={site.phoneHref} className="font-medium text-brand-600 hover:underline">
                {site.phoneDisplay}
              </a>{' '}
              ·{' '}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-600 hover:underline"
              >
                WhatsApp
              </a>
            </p>
          </div>

          {/* Illustrative panel — replaced with real photography once consent is cleared */}
          <div className="relative">
            <div className="aspect-4/3 overflow-hidden rounded-[1.75rem] border border-brand-200/70 bg-brand-100">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center">
                <svg viewBox="0 0 120 100" className="h-32 w-40" role="img" aria-hidden="true">
                  <circle cx="60" cy="30" r="15" className="fill-accent-400" />
                  <path d="M32 82c0-15.5 12.5-28 28-28s28 12.5 28 28Z" className="fill-brand-400" />
                  <circle cx="24" cy="46" r="9" className="fill-brand-300" />
                  <path d="M6 80c0-10 8-18 18-18 2.6 0 5 .5 7.2 1.5A34 34 0 0 0 24 80Z" className="fill-brand-300" />
                  <circle cx="96" cy="46" r="9" className="fill-teal-300" />
                  <path d="M114 80c0-10-8-18-18-18-2.6 0-5 .5-7.2 1.5A34 34 0 0 1 96 80Z" className="fill-teal-300" />
                </svg>
                <p className="max-w-[26ch] font-display text-sm font-medium text-brand-700">
                  Therapy photography to be added once parental consent is confirmed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StatStrip />

      {/* --------------------------------------------------------- about */}
      <Section tone="paper" className="pt-16 sm:pt-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="font-display text-xs font-semibold tracking-[0.14em] text-brand-500 uppercase">
              About us
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl">
              Where every child gets the right care
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg text-ink-600">{about.intro[0]}</p>
            <p className="text-ink-600">{about.approach.after[1]}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {about.approach.team.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-sm text-ink-700"
                >
                  {t}
                </span>
              ))}
            </div>
            <Button to="/about" variant="ghost" className="mt-3 w-fit px-0 hover:bg-transparent">
              Read more about us
              <IconArrow className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------ services */}
      <Section tone="white">
        <SectionHead
          eyebrow="Our services"
          title="Comprehensive therapy, tailored to your child"
          intro="Seven therapy and education disciplines working together under one roof, with a single individualized plan for each child."
        />
        <ServiceGrid />
        <div className="mt-8">
          <Button to="/adult-physio-care" variant="secondary" size="sm">
            We also offer Adult Physio Care
            <IconArrow className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* ---------------------------------------------------- conditions */}
      <Section tone="paper">
        <SectionHead
          eyebrow="Conditions we support"
          title="Support built around your child’s specific needs"
          intro="A diagnosis tells us about a condition — not about a child’s potential. Find the condition you’re concerned about and see exactly how we can help."
        />
        <ConditionGrid limit={6} />
        <div className="mt-8">
          <Button to="/conditions" variant="secondary">
            View all conditions
            <IconArrow className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* ------------------------------------------------------ BRAIN2ACT */}
      <Section tone="white">
        <div className="grid items-center gap-8 rounded-[1.5rem] border border-accent-200 bg-accent-50 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="font-display text-xs font-semibold tracking-[0.14em] text-accent-700 uppercase">
              Our own program
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl">BRAIN2ACT</h2>
            <p className="mt-3 max-w-[58ch] text-ink-600">
              A movement-based program developed by our Director that synchronises body and mind
              to improve attention, memory, reading, writing and academic performance — backed by
              published research.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button to="/programs/brain2act" variant="accent">
              About BRAIN2ACT
            </Button>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------ branches */}
      <Section tone="paper">
        <SectionHead
          eyebrow="Visit us"
          title="Two centres in Chennai"
          intro="Both centres offer our full range of children’s therapy services."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {branches.map((b) => (
            <Card key={b.slug} interactive={false} className="gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl">{b.name}</h3>
                  {b.isMain && (
                    <span className="mt-1 inline-block rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                      Main centre
                    </span>
                  )}
                </div>
                <IconPin className="h-6 w-6 shrink-0 text-accent-500" />
              </div>

              <address className="not-italic text-[0.95rem] text-ink-600">
                {b.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
                <span className="block">
                  {b.city} {b.pincode}
                </span>
              </address>

              <div className="flex flex-col gap-2 text-sm text-ink-600">
                <a
                  href={b.phoneHref}
                  className="inline-flex items-center gap-2 hover:text-brand-600"
                >
                  <IconPhone className="h-4 w-4 text-brand-500" />
                  {b.phoneDisplay}
                </a>
                <span className="inline-flex items-center gap-2">
                  <IconClock className="h-4 w-4 text-brand-500" />
                  {b.hours}
                </span>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                <Button to={`/locations/${b.slug}`} size="sm" variant="secondary">
                  Branch details
                </Button>
                <Button href={b.mapsUrl} size="sm" variant="ghost">
                  Get directions
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* --------------------------------------------------------- trust */}
      <Section tone="white">
        <div className="rounded-card border border-ink-200 bg-paper p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl">A registered charitable trust</h2>
              <p className="mt-3 max-w-[60ch] text-ink-600">
                Kids Care Rehab Centre is a unit of {site.parentTrust}, registered for CSR
                activities with the Ministry of Corporate Affairs and holding 12A and 80G
                registration with the Income Tax Department.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm">
                {site.registrations.map((r) => (
                  <div key={r.number}>
                    <span className="block text-xs text-ink-500">{r.label}</span>
                    <span className="font-display font-semibold text-ink-800">{r.number}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="/trust"
              className="inline-flex items-center gap-2 font-display font-semibold text-brand-600 hover:text-brand-700"
            >
              About the Trust
              <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  )
}
