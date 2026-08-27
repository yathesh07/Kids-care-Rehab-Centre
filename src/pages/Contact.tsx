import { useState } from 'react'
import { Button, Section, cn } from '@/components/ui'
import { PageHero } from '@/components/sections'
import { Seo } from '@/components/layout/Seo'
import { IconCheck, IconClock, IconMail, IconPhone, IconPin, IconWhatsApp } from '@/components/ui/Icons'
import { site, whatsappUrl } from '@/content/site'
import { branches } from '@/content/branches'
import { services } from '@/content/services'

const field =
  'w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-[0.95rem] text-ink-800 transition-colors placeholder:text-ink-400 focus:border-brand-400 focus:outline-2 focus:outline-offset-0 focus:outline-brand-200'
const label = 'mb-1.5 block font-display text-sm font-semibold text-ink-800'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <Seo
        title="Contact & Appointments"
        description="Book an assessment at Kids Care Rehab Centre, Chennai. No referral needed. Call 044 2835 3136, WhatsApp, or send an enquiry."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact us"
        title="Book an appointment"
        intro="You do not need a diagnosis or a doctor’s referral. Tell us a little about your child and we’ll get back to you to arrange an assessment."
        trail={[{ label: 'Contact' }]}
      />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* ------------------------------------------------ form */}
          <div>
            {sent ? (
              <div
                role="status"
                className="rounded-card border border-brand-200 bg-brand-50 p-8 text-center"
              >
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white">
                  <IconCheck className="h-6 w-6" />
                </span>
                <h2 className="text-2xl">Thank you — we’ve got your enquiry</h2>
                <p className="mx-auto mt-3 max-w-[46ch] text-ink-600">
                  Our team will contact you within one working day. If it’s urgent, please call us
                  on {site.phoneDisplay}.
                </p>
                <Button
                  onClick={() => setSent(false)}
                  variant="secondary"
                  className="mt-6"
                >
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form
                name="enquiry"
                method="POST"
                data-netlify="true"
                netlify-honeypot="company"
                onSubmit={(e) => {
                  // Netlify handles the POST in production. Locally, show the success state.
                  if (import.meta.env.DEV) {
                    e.preventDefault()
                    setSent(true)
                  }
                }}
                className="rounded-card border border-ink-200 bg-white p-6 sm:p-8"
              >
                <input type="hidden" name="form-name" value="enquiry" />
                {/* honeypot — hidden from people, tempting to bots */}
                <p className="hidden">
                  <label>
                    Do not fill this in: <input name="company" />
                  </label>
                </p>

                <div className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={label} htmlFor="parentName">
                        Your name <span className="text-accent-600">*</span>
                      </label>
                      <input
                        id="parentName"
                        name="parentName"
                        required
                        autoComplete="name"
                        className={field}
                        placeholder="Parent or guardian name"
                      />
                    </div>
                    <div>
                      <label className={label} htmlFor="phone">
                        Phone number <span className="text-accent-600">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        className={field}
                        placeholder="10-digit mobile number"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={label} htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className={field}
                        placeholder="Optional"
                      />
                    </div>
                    <div>
                      <label className={label} htmlFor="childAge">
                        Child’s age
                      </label>
                      <input
                        id="childAge"
                        name="childAge"
                        className={field}
                        placeholder="e.g. 4 years"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={label} htmlFor="concern">
                        What would you like help with?
                      </label>
                      <select id="concern" name="concern" className={cn(field, 'cursor-pointer')} defaultValue="">
                        <option value="" disabled>
                          Select an area
                        </option>
                        <option value="not-sure">I’m not sure yet</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                        <option value="Adult Physio Care">Adult Physio Care</option>
                      </select>
                    </div>
                    <div>
                      <label className={label} htmlFor="branch">
                        Preferred centre
                      </label>
                      <select id="branch" name="branch" className={cn(field, 'cursor-pointer')} defaultValue="">
                        <option value="" disabled>
                          Select a centre
                        </option>
                        {branches.map((b) => (
                          <option key={b.slug} value={b.name}>
                            {b.name}
                            {b.isMain ? ' (main centre)' : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={label} htmlFor="message">
                      Tell us a little more
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className={cn(field, 'resize-y')}
                      placeholder="What have you noticed about your child’s development? Any diagnosis or previous therapy?"
                    />
                    <p className="mt-2 text-xs text-ink-500">
                      Anything you share is treated as confidential and used only to arrange your
                      child’s care. See our{' '}
                      <a href="/privacy" className="text-brand-600 underline underline-offset-2">
                        privacy policy
                      </a>
                      .
                    </p>
                  </div>

                  <Button type="submit" className="w-full sm:w-fit">
                    Send enquiry
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* --------------------------------------------- contact rail */}
          <aside className="flex flex-col gap-5">
            <div className="rounded-card border border-brand-200 bg-brand-50 p-6">
              <h2 className="mb-1 text-lg">Prefer to talk?</h2>
              <p className="mb-4 text-[0.95rem] text-ink-600">
                We’re happy to answer questions before you book.
              </p>
              <div className="flex flex-col gap-2.5">
                <Button href={site.phoneHref} size="sm">
                  <IconPhone className="h-4 w-4" />
                  {site.phoneDisplay}
                </Button>
                <Button href={whatsappUrl} variant="secondary" size="sm">
                  <IconWhatsApp className="h-4 w-4 text-[#25D366]" />
                  WhatsApp {site.mobileDisplay}
                </Button>
              </div>
            </div>

            <div className="rounded-card border border-ink-200 bg-white p-6">
              <h2 className="mb-4 text-lg">Centre details</h2>
              <ul className="flex flex-col gap-3 text-[0.95rem] text-ink-600">
                <li className="flex items-start gap-2.5">
                  <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  {site.hours}
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-start gap-2.5 break-all hover:text-brand-600"
                  >
                    <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    {site.email}
                  </a>
                </li>
              </ul>

              <h3 className="mt-6 mb-3 font-display text-sm font-semibold tracking-[0.1em] text-ink-800 uppercase">
                Our centres
              </h3>
              <ul className="flex flex-col gap-4">
                {branches.map((b) => (
                  <li key={b.slug} className="flex items-start gap-2.5 text-sm text-ink-600">
                    <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                    <span>
                      <span className="block font-display font-semibold text-ink-800">
                        {b.name}
                        {b.isMain && <span className="text-accent-600"> · Main</span>}
                      </span>
                      {b.addressLines.join(', ')}, {b.city} {b.pincode}
                      <a
                        href={b.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block font-medium text-brand-600 hover:underline"
                      >
                        Get directions
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}
