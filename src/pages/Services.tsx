import { Navigate, useParams } from 'react-router-dom'
import { Button, Card, Section } from '@/components/ui'
import { CTABand, CheckList, CallCard, PageHero, ServiceGrid } from '@/components/sections'
import { Seo } from '@/components/layout/Seo'
import { IconArrow, ServiceIcon } from '@/components/ui/Icons'
import { getService, services, servicesIntro } from '@/content/services'
import { getCondition } from '@/content/conditions'

/* ------------------------------------------------------- hub page */
export function ServicesPage() {
  return (
    <>
      <Seo
        title="Our Services"
        description="Speech therapy, occupational therapy, physiotherapy, behaviour therapy, special education, early intervention and parent training for children in Chennai."
        path="/services"
      />
      <PageHero
        eyebrow="Our services"
        title="Comprehensive therapy and rehabilitation"
        intro={servicesIntro}
        trail={[{ label: 'Services' }]}
      />
      <Section tone="paper">
        <ServiceGrid />
      </Section>

      <Section tone="white">
        <div className="rounded-card border border-teal-200 bg-teal-50 p-8">
          <h2 className="text-2xl">Adult Physio Care</h2>
          <p className="mt-3 max-w-[62ch] text-ink-600">
            Alongside our children’s services, our Royapettah centre offers specialised
            physiotherapy for adults — including knee and shoulder pain, osteoarthritis, back and
            neck pain, stroke rehabilitation, and prenatal and postnatal exercise programs.
          </p>
          <Button to="/adult-physio-care" variant="secondary" className="mt-5">
            About Adult Physio Care
            <IconArrow className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      <CTABand />
    </>
  )
}

/* ---------------------------------------------------- detail page */
export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = slug ? getService(slug) : undefined

  if (!service) return <Navigate to="/services" replace />

  const related = service.conditions
    .map((c) => getCondition(c))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))

  return (
    <>
      <Seo
        title={service.name}
        description={`${service.short} ${service.name} for children at Kids Care Rehab Centre, Chennai.`}
        path={`/services/${service.slug}`}
      />

      <PageHero
        eyebrow="Service"
        title={service.name}
        trail={[{ label: 'Services', to: '/services' }, { label: service.name }]}
      >
        <span className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-500 shadow-soft">
          <ServiceIcon name={service.icon} className="h-7 w-7" />
        </span>
      </PageHero>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_0.9fr] lg:gap-14">
          <div>
            <div className="flex flex-col gap-4">
              {service.intro.map((p) => (
                <p key={p.slice(0, 24)} className="max-w-[68ch] text-lg text-ink-600">
                  {p}
                </p>
              ))}
            </div>

            <h2 className="mt-10 mb-5 text-2xl">{service.focusTitle}</h2>
            <CheckList items={service.focus} />

            <p className="mt-8 max-w-[68ch] rounded-card border-l-2 border-brand-400 bg-brand-50 p-5 text-ink-700">
              {service.closing}
            </p>
          </div>

          <aside className="flex flex-col gap-6">
            <CallCard />

            <div className="rounded-card border border-ink-200 bg-white p-6">
              <h3 className="mb-3 text-base">Other services</h3>
              <ul className="flex flex-col gap-1">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .map((s) => (
                    <li key={s.slug}>
                      <a
                        href={`/services/${s.slug}`}
                        className="block rounded-lg px-2 py-1.5 text-sm text-ink-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
                      >
                        {s.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="white">
          <h2 className="mb-2 text-2xl">Who this service commonly helps</h2>
          <p className="mb-8 max-w-[62ch] text-ink-600">
            {service.name} is often part of the plan for children with these conditions.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((c) => (
              <Card key={c.slug} to={`/conditions/${c.slug}`} className="border-teal-200/60 p-5">
                <h3 className="mb-1.5 text-base group-hover:text-teal-700">
                  {c.name}
                  {c.abbr && <span className="ml-1.5 text-ink-400">({c.abbr})</span>}
                </h3>
                <p className="flex-1 text-sm text-ink-600">{c.short}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-teal-600">
                  Learn more
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Card>
            ))}
          </div>
        </Section>
      )}

      <CTABand />
    </>
  )
}
