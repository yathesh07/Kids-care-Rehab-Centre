import { Link } from 'react-router-dom'
import { site, whatsappUrl } from '@/content/site'
import { services } from '@/content/services'
import { branches } from '@/content/branches'
import { IconInstagram, IconMail, IconPhone, IconPin, IconClock } from '@/components/ui/Icons'

const quickLinks = [
  { label: 'About us', to: '/about' },
  { label: 'Conditions we support', to: '/conditions' },
  { label: 'Programs & activities', to: '/programs' },
  { label: 'Adult Physio Care', to: '/adult-physio-care' },
  { label: 'Books & resources', to: '/books' },
  { label: 'Charitable Trust', to: '/trust' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-800 text-brand-100">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-display text-lg font-bold text-white">{site.name}</p>
              <p className="text-sm text-accent-300">{site.tagline}</p>
            </div>
            <p className="max-w-[38ch] text-sm text-brand-200">
              A unit of {site.parentTrust}, providing therapy, rehabilitation and special
              education in Chennai since {site.foundedText}.
            </p>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-600 px-3 py-2 text-sm text-brand-100 transition-colors hover:border-accent-400 hover:text-white"
            >
              <IconInstagram className="h-4 w-4" />
              Follow us on Instagram
            </a>
          </div>

          {/* services */}
          <nav aria-label="Services">
            <h2 className="mb-4 font-display text-sm font-semibold tracking-[0.12em] text-white uppercase">
              Our services
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-brand-200 transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* quick links */}
          <nav aria-label="More">
            <h2 className="mb-4 font-display text-sm font-semibold tracking-[0.12em] text-white uppercase">
              Explore
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-brand-200 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div>
            <h2 className="mb-4 font-display text-sm font-semibold tracking-[0.12em] text-white uppercase">
              Get in touch
            </h2>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-2.5 text-brand-200 transition-colors hover:text-white"
                >
                  <IconPhone className="mt-0.5 h-4 w-4 shrink-0" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-brand-200 transition-colors hover:text-white"
                >
                  <IconPhone className="mt-0.5 h-4 w-4 shrink-0" />
                  {site.mobileDisplay} (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-2.5 break-all text-brand-200 transition-colors hover:text-white"
                >
                  <IconMail className="mt-0.5 h-4 w-4 shrink-0" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-brand-200">
                <IconClock className="mt-0.5 h-4 w-4 shrink-0" />
                {site.hours}
              </li>
            </ul>

            <h2 className="mt-6 mb-3 font-display text-sm font-semibold tracking-[0.12em] text-white uppercase">
              Our centres
            </h2>
            <ul className="flex flex-col gap-3 text-sm">
              {branches.map((b) => (
                <li key={b.slug}>
                  <Link
                    to={`/locations/${b.slug}`}
                    className="flex items-start gap-2.5 text-brand-200 transition-colors hover:text-white"
                  >
                    <IconPin className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      {b.name}
                      {b.isMain && <span className="text-accent-300"> · Main centre</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* registrations */}
        <div className="mt-12 border-t border-brand-700 pt-8">
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs text-brand-300">
            {site.registrations.map((r) => (
              <span key={r.number}>
                {r.label}:{' '}
                <span className="font-medium text-brand-100">{r.number}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-brand-700 pt-6 text-xs text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}, a unit of {site.parentTrust}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy policy
            </Link>
            <Link to="/faq" className="transition-colors hover:text-white">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
