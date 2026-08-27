import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { Button, Card, cn, Section, SectionHead } from '@/components/ui'
import { IconArrow, IconCheck, IconPhone, ServiceIcon } from '@/components/ui/Icons'
import { services } from '@/content/services'
import { conditions } from '@/content/conditions'
import { site, whatsappUrl } from '@/content/site'

/* ------------------------------------------------------ ScrollToTop */
export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

/* ------------------------------------------------------ Breadcrumbs */
export function Breadcrumbs({ trail }: { trail: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-500">
        <li>
          <Link to="/" className="transition-colors hover:text-brand-600">
            Home
          </Link>
        </li>
        {trail.map((t) => (
          <li key={t.label} className="flex items-center gap-1.5">
            <span aria-hidden="true" className="text-ink-300">
              /
            </span>
            {t.to ? (
              <Link to={t.to} className="transition-colors hover:text-brand-600">
                {t.label}
              </Link>
            ) : (
              <span className="text-ink-700">{t.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/* --------------------------------------------------------- PageHero */
export function PageHero({
  eyebrow,
  title,
  intro,
  trail,
  children,
}: {
  eyebrow?: string
  title: string
  intro?: string | string[]
  trail?: { label: string; to?: string }[]
  children?: ReactNode
}) {
  const paras = Array.isArray(intro) ? intro : intro ? [intro] : []
  return (
    <div className="border-b border-ink-200/70 bg-linear-to-b from-brand-50 to-paper">
      <div className="container-page py-10 sm:py-14">
        {trail && <Breadcrumbs trail={trail} />}
        {eyebrow && (
          <span className="font-display text-xs font-semibold tracking-[0.14em] text-brand-500 uppercase">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-2 max-w-[20ch] text-3xl sm:text-4xl lg:text-[2.75rem]">{title}</h1>
        {paras.length > 0 && (
          <div className="mt-4 flex flex-col gap-3">
            {paras.map((p) => (
              <p key={p.slice(0, 30)} className="max-w-[68ch] text-lg text-ink-600">
                {p}
              </p>
            ))}
          </div>
        )}
        {children}
      </div>
    </div>
  )
}

/* -------------------------------------------------------- StatStrip */
export function StatStrip() {
  return (
    <div className="container-page -mt-8 sm:-mt-10">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-ink-200 bg-ink-200 shadow-lift lg:grid-cols-4">
        {site.stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-0.5 bg-white p-5 sm:p-6">
            {/* value renders first visually; dt stays first in the DOM for semantics */}
            <dt className="order-2 font-display text-sm font-semibold text-ink-800">
              {s.label}
            </dt>
            <dd className="order-1 font-display text-3xl font-bold text-brand-600 sm:text-4xl">
              {s.value}
            </dd>
            <dd className="order-3 text-xs text-ink-500">{s.detail}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

/* ------------------------------------------------------ ServiceGrid */
export function ServiceGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s) => (
        <Card key={s.slug} to={`/services/${s.slug}`}>
          <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-100">
            <ServiceIcon name={s.icon} className="h-6 w-6" />
          </span>
          <h3 className="mb-2 text-lg group-hover:text-brand-700">{s.name}</h3>
          <p className="mb-4 flex-1 text-[0.95rem] text-ink-600">{s.short}</p>
          <span className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-600">
            Learn more
            <IconArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </Card>
      ))}
    </div>
  )
}

/* ---------------------------------------------------- ConditionGrid */
export function ConditionGrid({ limit }: { limit?: number }) {
  const list = limit ? conditions.slice(0, limit) : conditions
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((c) => (
        <Card key={c.slug} to={`/conditions/${c.slug}`} className="border-teal-200/60 p-5">
          <h3 className="mb-1.5 text-base group-hover:text-teal-700">
            {c.name}
            {c.abbr && <span className="ml-1.5 text-ink-400">({c.abbr})</span>}
          </h3>
          <p className="mb-3 flex-1 text-sm text-ink-600">{c.short}</p>
          <span className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-teal-600">
            How we help
            <IconArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </Card>
      ))}
    </div>
  )
}

/* ----------------------------------------------------------- CTABand */
export function CTABand({
  title = 'Concerned about your child’s development?',
  body = 'You do not need a diagnosis or a referral to talk to us. Book an assessment and our team will help you understand your child’s needs and the support available.',
}: {
  title?: string
  body?: string
}) {
  return (
    <Section tone="brandDark">
      <div className="flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[52ch]">
          <h2 className="text-2xl text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 text-brand-100">{body}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Button to="/contact" variant="accent">
            Book an appointment
          </Button>
          <Button
            href={whatsappUrl}
            variant="secondary"
            className="border-brand-500 bg-transparent text-white hover:border-accent-400 hover:bg-brand-600 hover:text-white"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </Section>
  )
}

/* ------------------------------------------------------- CheckList */
export function CheckList({ items, tone = 'brand' }: { items: string[]; tone?: 'brand' | 'teal' }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span
            className={cn(
              'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
              tone === 'brand' ? 'bg-brand-100 text-brand-600' : 'bg-teal-100 text-teal-600',
            )}
          >
            <IconCheck className="h-3.5 w-3.5" />
          </span>
          <span className="text-[0.95rem] text-ink-600">{item}</span>
        </li>
      ))}
    </ul>
  )
}

/* --------------------------------------------------------- CallCard */
export function CallCard() {
  return (
    <div className="rounded-card border border-brand-200 bg-brand-50 p-6">
      <h3 className="mb-2 text-lg">Speak to our team</h3>
      <p className="mb-4 text-[0.95rem] text-ink-600">
        No referral needed. We’ll help you understand the next step.
      </p>
      <div className="flex flex-col gap-2.5">
        <Button href={site.phoneHref} size="sm">
          <IconPhone className="h-4 w-4" />
          {site.phoneDisplay}
        </Button>
        <Button href={whatsappUrl} variant="secondary" size="sm">
          WhatsApp us
        </Button>
      </div>
      <p className="mt-4 text-xs text-ink-500">{site.hours}</p>
    </div>
  )
}

export { Section, SectionHead }
