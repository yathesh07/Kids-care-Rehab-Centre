import { Link } from 'react-router-dom'
import { site } from '@/content/site'

/**
 * INTERIM LOGO — typographic lockup with a simple mark.
 * The client has not yet supplied the original logo file (requested as SVG).
 * Replace this component's <svg> with the real artwork when it arrives; the
 * surrounding layout will not need to change.
 */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500"
      aria-label={`${site.name} — home`}
    >
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
        role="img"
        aria-hidden="true"
      >
        {/* Three figures — the multidisciplinary team around a child */}
        <circle cx="20" cy="20" r="19" className="fill-brand-500" />
        <circle cx="20" cy="14.4" r="3.5" className="fill-accent-400" />
        <path
          d="M12.5 29.5c0-4.1 3.4-7.4 7.5-7.4s7.5 3.3 7.5 7.4Z"
          className="fill-accent-400"
        />
        <circle cx="10.6" cy="18.4" r="2.5" className="fill-white/85" />
        <path d="M5.9 27.4c0-2.6 2.1-4.7 4.7-4.7 .7 0 1.3.1 1.9.4a9.7 9.7 0 0 0-2.6 4.3Z" className="fill-white/85" />
        <circle cx="29.4" cy="18.4" r="2.5" className="fill-white/85" />
        <path d="M34.1 27.4c0-2.6-2.1-4.7-4.7-4.7-.7 0-1.3.1-1.9.4a9.7 9.7 0 0 1 2.6 4.3Z" className="fill-white/85" />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-bold tracking-tight text-brand-700 sm:text-base">
          KIDS CARE
        </span>
        <span className="font-display text-[0.95rem] font-bold tracking-tight text-brand-700 sm:text-base">
          REHAB CENTRE
        </span>
        {!compact && (
          <span className="mt-0.5 font-sans text-[0.62rem] font-medium tracking-wide text-accent-600">
            {site.tagline}
          </span>
        )}
      </span>
    </Link>
  )
}
