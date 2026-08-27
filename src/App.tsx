import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileActionBar, WhatsAppFab } from '@/components/layout/MobileActionBar'
import { ScrollToTop } from '@/components/sections'
import { ScrollProgress } from '@/components/motion/ScrollProgress'
import Home from '@/pages/Home'

/* Home ships in the main bundle; every other route is code-split. */
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))

const named = <M, K extends keyof M>(loader: () => Promise<M>, key: K) =>
  lazy(() => loader().then((m) => ({ default: m[key] as React.ComponentType })))

const ServicesPage = named(() => import('@/pages/Services'), 'ServicesPage')
const ServiceDetailPage = named(() => import('@/pages/Services'), 'ServiceDetailPage')
const ConditionsPage = named(() => import('@/pages/Conditions'), 'ConditionsPage')
const ConditionDetailPage = named(() => import('@/pages/Conditions'), 'ConditionDetailPage')
const ProgramsPage = named(() => import('@/pages/Programs'), 'ProgramsPage')
const ProgramDetailPage = named(() => import('@/pages/Programs'), 'ProgramDetailPage')
const LocationsPage = named(() => import('@/pages/Locations'), 'LocationsPage')
const BranchDetailPage = named(() => import('@/pages/Locations'), 'BranchDetailPage')
const AdultPhysioPage = named(() => import('@/pages/Misc'), 'AdultPhysioPage')
const BooksPage = named(() => import('@/pages/Misc'), 'BooksPage')
const GalleryPage = named(() => import('@/pages/Misc'), 'GalleryPage')
const TestimonialsPage = named(() => import('@/pages/Misc'), 'TestimonialsPage')
const TrustPage = named(() => import('@/pages/Misc'), 'TrustPage')
const FaqPage = named(() => import('@/pages/Misc'), 'FaqPage')
const PrivacyPage = named(() => import('@/pages/Misc'), 'PrivacyPage')
const NotFoundPage = named(() => import('@/pages/Misc'), 'NotFoundPage')

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
      <span className="sr-only">Loading</span>
      <span
        aria-hidden="true"
        className="h-8 w-8 animate-spin rounded-full border-2 border-brand-200 border-t-brand-500"
      />
    </div>
  )
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <ScrollToTop />
      <Header />

      {/* pb-16 keeps content clear of the fixed mobile action bar */}
      <main id="main" className="flex-1 pb-16 md:pb-0">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />

            <Route path="/conditions" element={<ConditionsPage />} />
            <Route path="/conditions/:slug" element={<ConditionDetailPage />} />

            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/:slug" element={<ProgramDetailPage />} />

            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/locations/:slug" element={<BranchDetailPage />} />

            <Route path="/adult-physio-care" element={<AdultPhysioPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/trust" element={<TrustPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <MobileActionBar />
      <WhatsAppFab />
    </div>
  )
}
