import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { Button, cn } from '@/components/ui'
import { IconChevron, IconClose, IconMenu } from '@/components/ui/Icons'
import { services } from '@/content/services'

type NavItem = {
  label: string
  to: string
  children?: { label: string; to: string }[]
}

const nav: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'About us', to: '/about' },
      { label: 'Dr. R. Radha Balachandar', to: '/about/founder' },
      { label: 'Our journey', to: '/about#journey' },
      { label: 'Locations', to: '/locations' },
    ],
  },
  {
    label: 'Child Therapies',
    to: '/services',
    children: [
      { label: 'All therapies', to: '/services' },
      ...services.map((s) => ({ label: s.name, to: `/services/${s.slug}` })),
      { label: 'Conditions we support', to: '/conditions' },
      { label: 'Assessment', to: '/assessment' },
    ],
  },
  { label: 'Adult Physiotherapy', to: '/adult-physio-care' },
  { label: 'KCR Special School', to: '/kcr-special-school' },
  { label: 'CDEC Vocational Training Centre', to: '/cdec' },
  {
    label: 'Programmes',
    to: '/programs',
    children: [
      { label: 'BRAIN2ACT', to: '/programs/brain2act' },
      { label: 'Parent Programmes', to: '/programs' },
      { label: 'Camps & Workshops', to: '/programs/camps-and-workshops' },
      { label: 'CDEC Vocational Training Centre', to: '/cdec' },
      { label: 'All programmes', to: '/programs' },
    ],
  },
  {
    label: 'Impact & Reviews',
    to: '/impact-reviews',
    children: [
      { label: 'Impact & Reviews', to: '/impact-reviews' },
      { label: 'Success Stories', to: '/success-stories' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Media', to: '/media' },
    ],
  },
  {
    label: 'Support Us',
    to: '/donate',
    children: [
      { label: 'Donate', to: '/donate' },
      { label: 'CSR Partnerships', to: '/csr' },
      { label: 'Kids Rehab Charitable Trust', to: '/trust' },
      { label: 'Compliance & Reports', to: '/compliance' },
    ],
  },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const closeTimer = useRef<number | undefined>(undefined)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openWithCancel = (label: string) => {
    window.clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }
  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 140)
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow duration-200',
        scrolled ? 'border-ink-200 shadow-soft' : 'border-transparent',
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <div className="container-page flex items-center justify-between gap-4 py-3">
        <Logo />

        {/* ---------- desktop nav ---------- */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {nav.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && openWithCancel(item.label)}
                onMouseLeave={() => item.children && scheduleClose()}
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={openMenu === item.label}
                      aria-haspopup="true"
                      onClick={() =>
                        setOpenMenu(openMenu === item.label ? null : item.label)
                      }
                      className={cn(
                        'flex items-center gap-1 rounded-full px-3 py-2 font-display text-[0.9rem] font-medium transition-colors',
                        location.pathname.startsWith(item.to) && item.to !== '/'
                          ? 'text-brand-600'
                          : 'text-ink-700 hover:text-brand-600',
                      )}
                    >
                      {item.label}
                      <IconChevron
                        className={cn(
                          'h-4 w-4 transition-transform duration-200',
                          openMenu === item.label && 'rotate-180',
                        )}
                      />
                    </button>
                    {openMenu === item.label && (
                      <div
                        className="absolute left-0 top-full z-50 w-64 pt-2"
                        onMouseEnter={() => openWithCancel(item.label)}
                        onMouseLeave={scheduleClose}
                      >
                        <ul className="overflow-hidden rounded-card border border-ink-200 bg-white py-2 shadow-lift">
                          {item.children.map((child) => (
                            <li key={child.to}>
                              <NavLink
                                to={child.to}
                                end
                                className={({ isActive }) =>
                                  cn(
                                    'block px-4 py-2 text-[0.9rem] transition-colors',
                                    isActive
                                      ? 'bg-brand-50 font-medium text-brand-700'
                                      : 'text-ink-600 hover:bg-brand-50 hover:text-brand-700',
                                  )
                                }
                              >
                                {child.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-full px-3 py-2 font-display text-[0.9rem] font-medium transition-colors',
                        isActive ? 'text-brand-600' : 'text-ink-700 hover:text-brand-600',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button to="/contact" size="sm" className="hidden sm:inline-flex">
            Book an appointment
          </Button>
          <button
            type="button"
            className="rounded-full p-2 text-ink-700 hover:bg-brand-50 lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <IconMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* ---------- mobile drawer ---------- */}
      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-50 flex flex-col bg-white lg:hidden">
          <div className="container-page flex items-center justify-between border-b border-ink-200 py-3">
            <Logo compact />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="rounded-full p-2 text-ink-700 hover:bg-brand-50"
            >
              <IconClose className="h-6 w-6" />
            </button>
          </div>

          <nav aria-label="Mobile" className="container-page flex-1 overflow-y-auto py-4">
            <ul className="flex flex-col gap-1 pb-28">
              {nav.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-3 font-display font-medium text-ink-800 marker:hidden hover:bg-brand-50">
                        {item.label}
                        <IconChevron className="h-5 w-5 transition-transform group-open:rotate-180" />
                      </summary>
                      <ul className="mb-2 ml-3 flex flex-col gap-0.5 border-l border-ink-200 pl-3">
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <Link
                              to={child.to}
                              className="block rounded-lg px-3 py-2.5 text-[0.95rem] text-ink-600 hover:bg-brand-50 hover:text-brand-700"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      to={item.to}
                      className="block rounded-lg px-3 py-3 font-display font-medium text-ink-800 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="mt-3 px-3">
                <Button to="/contact" className="w-full">
                  Book an appointment
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
