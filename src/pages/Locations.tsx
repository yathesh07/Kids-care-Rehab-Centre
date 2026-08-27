import { Navigate, useParams } from 'react-router-dom'
import { Button, Card, Section } from '@/components/ui'
import { CTABand, PageHero } from '@/components/sections'
import { Seo } from '@/components/layout/Seo'
import { IconClock, IconMail, IconPhone, IconPin } from '@/components/ui/Icons'
import { branches, getBranch } from '@/content/branches'
import { site, whatsappUrl } from '@/content/site'

export function LocationsPage() {
  return (
    <>
      <Seo
        title="Our Locations"
        description="Kids Care Rehab Centre has two centres in Chennai — Royapettah (main) and Madipakkam. Addresses, opening hours, phone numbers and directions."
        path="/locations"
      />
      <PageHero
        eyebrow="Visit us"
        title="Two centres in Chennai"
        intro="Kids Care Rehab Centre has served Royapettah for over sixteen years, and now also has a branch in Madipakkam. Both centres offer our full range of children’s therapy services."
        trail={[{ label: 'Locations' }]}
      />

      <Section tone="paper">
        <div className="grid gap-6 lg:grid-cols-2">
          {branches.map((b) => (
            <Card key={b.slug} interactive={false} className="gap-0 overflow-hidden p-0">
              <iframe
                src={b.mapsEmbed}
                title={`Map of our ${b.name} centre`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full border-0"
              />
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl">{b.name}</h2>
                  {b.isMain && (
                    <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                      Main centre
                    </span>
                  )}
                </div>

                <address className="flex gap-2.5 not-italic text-[0.95rem] text-ink-600">
                  <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  <span>
                    {b.addressLines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                    <span className="block">
                      {b.city} {b.pincode}
                    </span>
                  </span>
                </address>

                <div className="flex flex-col gap-2 text-[0.95rem] text-ink-600">
                  <a href={b.phoneHref} className="inline-flex items-center gap-2.5 hover:text-brand-600">
                    <IconPhone className="h-4 w-4 shrink-0 text-brand-500" />
                    {b.phoneDisplay}
                  </a>
                  <a href={b.mobileHref} className="inline-flex items-center gap-2.5 hover:text-brand-600">
                    <IconPhone className="h-4 w-4 shrink-0 text-brand-500" />
                    {b.mobileDisplay}
                  </a>
                  <span className="inline-flex items-center gap-2.5">
                    <IconClock className="h-4 w-4 shrink-0 text-brand-500" />
                    {b.hours}
                  </span>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  <Button href={b.mapsUrl} size="sm">
                    Get directions
                  </Button>
                  <Button to={`/locations/${b.slug}`} size="sm" variant="secondary">
                    More details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  )
}

export function BranchDetailPage() {
  const { slug } = useParams()
  const branch = slug ? getBranch(slug) : undefined
  if (!branch) return <Navigate to="/locations" replace />

  return (
    <>
      <Seo
        title={`${branch.name} Centre`}
        description={`Kids Care Rehab Centre ${branch.name}, Chennai — address, opening hours, phone number and directions.`}
        path={`/locations/${branch.slug}`}
      />
      <PageHero
        eyebrow={branch.isMain ? 'Main centre' : 'Branch'}
        title={`${branch.name} Centre`}
        trail={[{ label: 'Locations', to: '/locations' }, { label: branch.name }]}
      />

      <Section tone="paper">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <iframe
            src={branch.mapsEmbed}
            title={`Map of our ${branch.name} centre`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full rounded-card border border-ink-200 lg:h-full"
          />

          <div className="flex flex-col gap-6">
            <div className="rounded-card border border-ink-200 bg-white p-6">
              <h2 className="mb-4 text-xl">Visit us</h2>
              <address className="flex gap-2.5 not-italic text-ink-600">
                <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                <span>
                  {branch.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                  <span className="block">
                    {branch.city} {branch.pincode}
                  </span>
                </span>
              </address>
              <Button href={branch.mapsUrl} className="mt-5 w-full">
                Get directions
              </Button>
            </div>

            <div className="rounded-card border border-ink-200 bg-white p-6">
              <h2 className="mb-4 text-xl">Contact this centre</h2>
              <ul className="flex flex-col gap-3 text-ink-600">
                <li>
                  <a href={branch.phoneHref} className="inline-flex items-center gap-2.5 hover:text-brand-600">
                    <IconPhone className="h-4 w-4 text-brand-500" />
                    {branch.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 hover:text-brand-600">
                    <IconPhone className="h-4 w-4 text-brand-500" />
                    {branch.mobileDisplay} (WhatsApp)
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 break-all hover:text-brand-600">
                    <IconMail className="h-4 w-4 shrink-0 text-brand-500" />
                    {site.email}
                  </a>
                </li>
                <li className="inline-flex items-center gap-2.5">
                  <IconClock className="h-4 w-4 text-brand-500" />
                  {branch.hours}
                </li>
              </ul>
            </div>

            {branch.isMain && (
              <div className="rounded-card border border-teal-200 bg-teal-50 p-6">
                <h2 className="text-lg">Also at this centre</h2>
                <p className="mt-2 text-[0.95rem] text-ink-600">
                  Adult Physio Care — physiotherapy assessment and treatment for adults, plus
                  prenatal and postnatal exercise programs.
                </p>
                <Button to="/adult-physio-care" variant="secondary" size="sm" className="mt-4">
                  Learn more
                </Button>
              </div>
            )}
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  )
}
