import { Link } from 'react-router-dom'
import { site } from '@/content/site'
import logoMark from '@/assets/logo-mark.png'

/**
 * Logo mark — cropped and enhanced from the client's printed event banner
 * (src/assets/logo-mark-enhanced.png is the intermediate, unmasked version).
 * It's a real photograph, not vector artwork, so there's a visible ceiling on
 * sharpness at any size. Replace with the original design file (ask whoever
 * printed the banner — they'll have the source PDF/AI/CDR) when it arrives;
 * this component's layout won't need to change.
 */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500"
      aria-label={`${site.name} — home`}
    >
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className="h-9 w-9 shrink-0 rounded-full object-cover shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10"
        width={40}
        height={40}
      />

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
