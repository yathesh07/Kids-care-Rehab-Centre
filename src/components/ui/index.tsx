import { Link } from 'react-router-dom'
import type { ReactNode, ComponentPropsWithoutRef } from 'react'

/* ---------------------------------------------------------------- cn */
export const cn = (...parts: (string | false | null | undefined)[]) =>
  parts.filter(Boolean).join(' ')

/* ------------------------------------------------------------ Button */
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent'

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60'

const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'bg-brand-500 text-white hover:bg-brand-600 focus-visible:outline-brand-700',
  secondary:
    'border border-brand-200 bg-white text-brand-700 hover:border-brand-300 hover:bg-brand-50 focus-visible:outline-brand-500',
  accent: 'bg-accent-500 text-ink-900 hover:bg-accent-600 focus-visible:outline-accent-700',
  ghost: 'text-brand-600 hover:bg-brand-50 focus-visible:outline-brand-500',
}

const buttonSizes = {
  sm: 'px-4 py-2 text-sm min-h-[40px]',
  md: 'px-6 py-3 text-[0.95rem] min-h-[48px]',
}

type ButtonProps = {
  variant?: ButtonVariant
  size?: keyof typeof buttonSizes
  to?: string
  href?: string
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'>

export function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  children,
  className,
  ...rest
}: ButtonProps) {
  const classes = cn(buttonBase, buttonVariants[variant], buttonSizes[size], className)

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }
  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}

/* ----------------------------------------------------------- Section */
export function Section({
  children,
  className,
  tone = 'paper',
  id,
}: {
  children: ReactNode
  className?: string
  tone?: 'paper' | 'white' | 'brand' | 'brandDark'
  id?: string
}) {
  const tones = {
    paper: 'bg-paper',
    white: 'bg-white',
    brand: 'bg-brand-50',
    brandDark: 'bg-brand-700 text-brand-50',
  }
  return (
    <section id={id} className={cn('py-14 sm:py-20', tones[tone], className)}>
      <div className="container-page">{children}</div>
    </section>
  )
}

/* ------------------------------------------------------- SectionHead */
export function SectionHead({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'light',
}: {
  eyebrow?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}) {
  return (
    <div
      className={cn(
        'mb-10 flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'font-display text-xs font-semibold tracking-[0.14em] uppercase',
            tone === 'dark' ? 'text-accent-300' : 'text-brand-500',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl',
          tone === 'dark' && 'text-white',
          align === 'center' && 'max-w-2xl',
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            'max-w-[62ch] text-lg',
            tone === 'dark' ? 'text-brand-100' : 'text-ink-600',
          )}
        >
          {intro}
        </p>
      )}
    </div>
  )
}

/* -------------------------------------------------------------- Card */
export function Card({
  to,
  children,
  className,
  interactive = true,
}: {
  to?: string
  children: ReactNode
  className?: string
  interactive?: boolean
}) {
  const classes = cn(
    'group flex flex-col rounded-card border border-ink-200/70 bg-white p-6 shadow-soft',
    interactive && 'transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift',
    className,
  )
  if (to) {
    return (
      <Link to={to} className={cn(classes, 'focus-visible:outline-2 focus-visible:outline-brand-500')}>
        {children}
      </Link>
    )
  }
  return <div className={classes}>{children}</div>
}

/* -------------------------------------------------------------- Chip */
export function Chip({
  children,
  tone = 'brand',
}: {
  children: ReactNode
  tone?: 'brand' | 'accent' | 'teal' | 'warn'
}) {
  const tones = {
    brand: 'bg-brand-100 text-brand-700',
    accent: 'bg-accent-100 text-accent-700',
    teal: 'bg-teal-100 text-teal-700',
    warn: 'bg-accent-100 text-accent-700 border border-accent-300',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 font-display text-xs font-semibold',
        tones[tone],
      )}
    >
      {children}
    </span>
  )
}

/* ---------------------------------------------------------- DraftNote */
/** Visible marker so placeholder content can never ship unnoticed. */
export function DraftNote({ children }: { children: ReactNode }) {
  return (
    <div
      role="note"
      className="mb-8 flex gap-3 rounded-card border border-dashed border-accent-400 bg-accent-50 p-4 text-sm text-accent-700"
    >
      <span aria-hidden="true" className="text-base leading-none">
        ⚠
      </span>
      <p className="m-0">{children}</p>
    </div>
  )
}

/* ------------------------------------------------------------ Prose */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('prose-page', className)}>{children}</div>
}
