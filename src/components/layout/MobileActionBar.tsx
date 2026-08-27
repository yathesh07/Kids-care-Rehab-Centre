import { site, whatsappUrl } from '@/content/site'
import { branches } from '@/content/branches'
import { IconPhone, IconPin, IconWhatsApp } from '@/components/ui/Icons'

/**
 * Fixed bottom bar on small screens — Call, WhatsApp, Directions.
 * For a clinic this is the single highest-impact conversion element on mobile.
 */
export function MobileActionBar() {
  const main = branches.find((b) => b.isMain) ?? branches[0]

  const item =
    'flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[0.68rem] font-medium transition-colors'

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white/98 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md">
        <a href={site.phoneHref} className={`${item} text-ink-700 active:bg-brand-50`}>
          <IconPhone className="h-5 w-5 text-brand-500" />
          Call
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${item} border-x border-ink-200 text-ink-700 active:bg-brand-50`}
        >
          <IconWhatsApp className="h-5 w-5 text-[#25D366]" />
          WhatsApp
        </a>
        <a
          href={main.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${item} text-ink-700 active:bg-brand-50`}
        >
          <IconPin className="h-5 w-5 text-accent-500" />
          Directions
        </a>
      </div>
      {/* keeps the bar clear of the iOS home indicator */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </div>
  )
}

/** Desktop-only floating WhatsApp button. */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 md:flex"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  )
}
