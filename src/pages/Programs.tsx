import { Navigate, useParams } from 'react-router-dom'
import { Button, Card, Section } from '@/components/ui'
import { CTABand, CallCard, CheckList, PageHero } from '@/components/sections'
import { Seo } from '@/components/layout/Seo'
import { IconArrow } from '@/components/ui/Icons'
import { getProgram, programs } from '@/content/programs'

export function ProgramsPage() {
  return (
    <>
      <Seo
        title="Programs & Activities"
        description="BRAIN2ACT, online therapy, attention and concentration classes, growth mindset workshops, the Autism OTT podcast, and community camps and parent workshops."
        path="/programs"
      />
      <PageHero
        eyebrow="Programs & activities"
        title="Beyond the therapy room"
        intro="Alongside individual therapy, we run structured programs, online classes, community camps and free parent workshops — including BRAIN2ACT, our own evidence-based movement program."
        trail={[{ label: 'Programs' }]}
      />
      <Section tone="paper">
        <div className="grid gap-5 sm:grid-cols-2">
          {programs.map((p) => (
            <Card key={p.slug} to={`/programs/${p.slug}`}>
              <h2 className="mb-2 text-xl group-hover:text-brand-700">{p.name}</h2>
              <p className="mb-4 flex-1 text-[0.95rem] text-ink-600">{p.short}</p>
              <span className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-600">
                Learn more
                <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Card>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  )
}

export function ProgramDetailPage() {
  const { slug } = useParams()
  const program = slug ? getProgram(slug) : undefined
  if (!program) return <Navigate to="/programs" replace />

  return (
    <>
      <Seo
        title={program.name}
        description={program.short}
        path={`/programs/${program.slug}`}
      />
      <PageHero
        eyebrow="Program"
        title={program.name}
        trail={[{ label: 'Programs', to: '/programs' }, { label: program.name }]}
      />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_0.9fr] lg:gap-14">
          <div>
            <div className="flex flex-col gap-4">
              {program.body.map((p) => (
                <p key={p.slice(0, 24)} className="max-w-[68ch] text-lg text-ink-600">
                  {p}
                </p>
              ))}
            </div>

            {program.list && (
              <>
                <h2 className="mt-10 mb-5 text-2xl">{program.list.title}</h2>
                <CheckList items={program.list.items} />
              </>
            )}

            {program.link && (
              <Button href={program.link.href} className="mt-8">
                {program.link.label}
                <IconArrow className="h-4 w-4" />
              </Button>
            )}

            {program.note && (
              <p className="mt-8 max-w-[68ch] rounded-card border border-ink-200 bg-white p-5 text-sm text-ink-500">
                {program.note}
              </p>
            )}
          </div>

          <aside className="flex flex-col gap-6">
            <CallCard />
            <div className="rounded-card border border-ink-200 bg-white p-6">
              <h3 className="mb-3 text-base">Other programs</h3>
              <ul className="flex flex-col gap-1">
                {programs
                  .filter((p) => p.slug !== program.slug)
                  .map((p) => (
                    <li key={p.slug}>
                      <a
                        href={`/programs/${p.slug}`}
                        className="block rounded-lg px-2 py-1.5 text-sm text-ink-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
                      >
                        {p.name}
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
