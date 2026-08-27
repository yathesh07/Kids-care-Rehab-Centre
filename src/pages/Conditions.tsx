import { Navigate, useParams } from 'react-router-dom'
import { Card, Section } from '@/components/ui'
import { CTABand, CallCard, ConditionGrid, PageHero } from '@/components/sections'
import { Seo } from '@/components/layout/Seo'
import { IconArrow, ServiceIcon } from '@/components/ui/Icons'
import {
  conditions,
  conditionsClosing,
  conditionsIntro,
  getCondition,
} from '@/content/conditions'
import { getService } from '@/content/services'

/* ------------------------------------------------------- hub page */
export function ConditionsPage() {
  return (
    <>
      <Seo
        title="Conditions We Support"
        description="Assessment and therapy for autism, ADHD, developmental delay, cerebral palsy, Down syndrome, learning disability, SMA, muscular dystrophy and more, in Chennai."
        path="/conditions"
      />
      <PageHero
        eyebrow="Conditions we support"
        title="Support built around your child’s needs"
        intro={conditionsIntro}
        trail={[{ label: 'Conditions' }]}
      />
      <Section tone="paper">
        <ConditionGrid />
      </Section>

      <Section tone="white">
        <div className="max-w-[68ch]">
          <h2 className="text-2xl">{conditionsClosing.title}</h2>
          <div className="mt-4 flex flex-col gap-4">
            {conditionsClosing.body.map((p) => (
              <p key={p.slice(0, 24)} className="text-ink-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  )
}

/* ---------------------------------------------------- detail page */
export function ConditionDetailPage() {
  const { slug } = useParams()
  const condition = slug ? getCondition(slug) : undefined

  if (!condition) return <Navigate to="/conditions" replace />

  const related = condition.services
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  return (
    <>
      <Seo
        title={condition.name}
        description={`${condition.short} Therapy and support for ${condition.name} at Kids Care Rehab Centre, Chennai.`}
        path={`/conditions/${condition.slug}`}
      />

      <PageHero
        eyebrow="Condition"
        title={condition.abbr ? `${condition.name} (${condition.abbr})` : condition.name}
        trail={[{ label: 'Conditions', to: '/conditions' }, { label: condition.abbr ?? condition.name }]}
      />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_0.9fr] lg:gap-14">
          <div>
            <div className="flex flex-col gap-4">
              {condition.body.map((p) => (
                <p key={p.slice(0, 24)} className="max-w-[68ch] text-lg text-ink-600">
                  {p}
                </p>
              ))}
            </div>

            <h2 className="mt-10 mb-2 text-2xl">How we support your child</h2>
            <p className="mb-6 max-w-[62ch] text-ink-600">
              These are the services most often included in a plan for a child with{' '}
              {condition.abbr ?? condition.name}. Your child’s own plan is built after assessment.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((s) => (
                <Card key={s.slug} to={`/services/${s.slug}`} className="p-5">
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                    <ServiceIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mb-1.5 text-base group-hover:text-brand-700">{s.name}</h3>
                  <p className="flex-1 text-sm text-ink-600">{s.short}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-600">
                    Learn more
                    <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              ))}
            </div>

            <p className="mt-8 max-w-[68ch] rounded-card border-l-2 border-teal-400 bg-teal-50 p-5 text-ink-700">
              A diagnosis provides information about a child’s condition, but it does not define
              the child’s potential.
            </p>
          </div>

          <aside className="flex flex-col gap-6">
            <CallCard />

            <div className="rounded-card border border-ink-200 bg-white p-6">
              <h3 className="mb-3 text-base">Other conditions</h3>
              <ul className="flex flex-col gap-1">
                {conditions
                  .filter((c) => c.slug !== condition.slug)
                  .map((c) => (
                    <li key={c.slug}>
                      <a
                        href={`/conditions/${c.slug}`}
                        className="block rounded-lg px-2 py-1.5 text-sm text-ink-600 transition-colors hover:bg-teal-50 hover:text-teal-700"
                      >
                        {c.abbr ?? c.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <CTABand />
    </>
  )
}
