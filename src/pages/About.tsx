import { Section, SectionHead } from '@/components/ui'
import { CTABand, CheckList, PageHero } from '@/components/sections'
import { Seo } from '@/components/layout/Seo'
import { about } from '@/content/about'
import { site } from '@/content/site'

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Kids Care Rehab Centre is a multidisciplinary paediatric therapy centre in Chennai, a unit of Kids Rehab Charitable Trust, serving families since March 2009."
        path="/about"
      />

      <PageHero
        eyebrow="About us"
        title={about.heroTitle}
        intro={about.intro}
        trail={[{ label: 'About' }]}
      />

      {/* -------------------------------------------------- approach */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <h2 className="text-3xl">{about.approach.title}</h2>
          </div>
          <div className="flex flex-col gap-5">
            {about.approach.body.map((p) => (
              <p key={p.slice(0, 24)} className="text-lg text-ink-600">
                {p}
              </p>
            ))}
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {about.approach.team.map((t) => (
                <li
                  key={t}
                  className="rounded-card border border-ink-200 bg-white px-4 py-3 font-display text-[0.95rem] font-medium text-ink-800"
                >
                  {t}
                </li>
              ))}
            </ul>
            {about.approach.after.map((p) => (
              <p key={p.slice(0, 24)} className="text-ink-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* ------------------------------------------- vision & mission */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="mb-5 text-3xl">{about.vision.title}</h2>
            <div className="flex flex-col gap-4">
              {about.vision.body.map((p) => (
                <p key={p.slice(0, 24)} className="text-ink-600">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-5 text-3xl">{about.mission.title}</h2>
            <div className="flex flex-col gap-4">
              {about.mission.body.map((p) => (
                <p key={p.slice(0, 24)} className="text-ink-600">
                  {p}
                </p>
              ))}
            </div>
            <ul className="mt-5 flex flex-col gap-2.5">
              {about.mission.commitments.map((c) => (
                <li key={c} className="flex gap-2.5 text-[0.95rem] text-ink-600">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------ objectives */}
      <Section tone="paper">
        <SectionHead
          eyebrow="What we work towards"
          title={about.objectives.title}
          intro={about.objectives.intro}
        />
        <ol className="grid gap-4 sm:grid-cols-2">
          {about.objectives.items.map((item, i) => (
            <li
              key={item.slice(0, 24)}
              className="flex gap-4 rounded-card border border-ink-200 bg-white p-5"
            >
              <span className="font-display text-lg font-bold text-brand-300 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[0.95rem] text-ink-600">{item}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* -------------------------------------------------- director */}
      <Section tone="white">
        <SectionHead eyebrow="Leadership" title="Meet our Director" />
        <div className="grid gap-8 rounded-[1.5rem] border border-ink-200 bg-paper p-8 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <h3 className="text-2xl">{about.director.name}</h3>
            <p className="mt-2 text-sm text-ink-500">{about.director.credentials}</p>
            <p className="mt-3 font-display font-semibold text-brand-600">
              {about.director.role}
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              {about.director.body.map((p) => (
                <p key={p.slice(0, 24)} className="text-ink-600">
                  {p}
                </p>
              ))}
            </div>
            <h4 className="mt-7 mb-4 font-display text-sm font-semibold tracking-[0.12em] text-ink-800 uppercase">
              Recognition
            </h4>
            <CheckList items={about.director.honours} />
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------ commitment */}
      <Section tone="paper">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl">{about.commitment.title}</h2>
          <div className="mt-5 flex flex-col gap-4">
            {about.commitment.body.map((p) => (
              <p key={p.slice(0, 24)} className="text-lg text-ink-600">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-8 font-display text-2xl font-semibold text-brand-600">
            {about.commitment.closing}
          </p>
          <p className="mt-6 text-sm text-ink-500">
            A unit of {site.parentTrust} · Serving Chennai since {site.foundedText}
          </p>
        </div>
      </Section>

      <CTABand />
    </>
  )
}
