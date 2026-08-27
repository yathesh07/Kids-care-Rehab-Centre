import type { IconName } from '@/content/services'

type Props = { className?: string }

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/** Service icons — line style, single colour, inherit currentColor. */
export const ServiceIcon = ({ name, className }: { name: IconName; className?: string }) => {
  const paths: Record<IconName, React.ReactNode> = {
    speech: (
      <>
        <path {...stroke} d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4 4v-4H6.5A2.5 2.5 0 0 1 4 13.5Z" />
        <path {...stroke} d="M9 8.5h6M9 11.5h4" />
      </>
    ),
    hand: (
      <>
        <path {...stroke} d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11m0 0V4.5a1.5 1.5 0 0 1 3 0V11m0 0V6.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6v-2.5a1.5 1.5 0 0 1 3 0V13" />
      </>
    ),
    movement: (
      <>
        <circle {...stroke} cx="12.5" cy="4.8" r="1.8" />
        <path {...stroke} d="m8 20 2.6-5.2L9 12l.8-3.4L13 7.6l2 2.2 2.8.9" />
        <path {...stroke} d="m10.6 14.8 3.4 1.2 1.4 4" />
        <path {...stroke} d="M9.8 8.6 6.4 10" />
      </>
    ),
    behaviour: (
      <>
        <path {...stroke} d="M12 20s-6.5-4-6.5-9A3.5 3.5 0 0 1 12 8.6a3.5 3.5 0 0 1 6.5 2.4c0 5-6.5 9-6.5 9Z" />
        <path {...stroke} d="M9.5 11.5h1.2l.8-1.6.9 3 .8-1.4h1.4" />
      </>
    ),
    education: (
      <>
        <path {...stroke} d="m12 4 9 4.5-9 4.5-9-4.5Z" />
        <path {...stroke} d="M7 10.8V15c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6v-4.2" />
        <path {...stroke} d="M21 8.5V14" />
      </>
    ),
    early: (
      <>
        <circle {...stroke} cx="12" cy="12" r="8" />
        <path {...stroke} d="M12 7.5V12l3 1.8" />
        <path {...stroke} d="M9.6 9.8h.01M14.4 9.8h.01" />
      </>
    ),
    family: (
      <>
        <circle {...stroke} cx="8.2" cy="7.6" r="2.4" />
        <circle {...stroke} cx="16.4" cy="8.6" r="2" />
        <path {...stroke} d="M4 19v-1.6a4.2 4.2 0 0 1 8.4 0V19" />
        <path {...stroke} d="M14 19v-1.2a3.6 3.6 0 0 1 6-2.7" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {paths[name]}
    </svg>
  )
}

export const IconWhatsApp = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22.5l5.83-1.52a9.83 9.83 0 0 0 4.2.95h.01c5.43 0 9.85-4.42 9.85-9.86 0-2.63-1.03-5.11-2.89-6.97A9.79 9.79 0 0 0 12.04 2Zm0 17.99h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.16 8.16 0 0 1-1.25-4.35c0-4.52 3.68-8.2 8.2-8.2a8.14 8.14 0 0 1 5.79 2.4 8.13 8.13 0 0 1 2.4 5.8c0 4.52-3.68 8.19-8.19 8.19Z" />
  </svg>
)

export const IconPhone = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path
      {...stroke}
      d="M5 4h3l1.6 4-2 1.4a12 12 0 0 0 5.9 5.9l1.4-2 4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 6.2 2 2 0 0 1 5 4Z"
    />
  </svg>
)

export const IconPin = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path {...stroke} d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle {...stroke} cx="12" cy="10" r="2.6" />
  </svg>
)

export const IconMail = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <rect {...stroke} x="3" y="5" width="18" height="14" rx="2.5" />
    <path {...stroke} d="m4 7 8 6 8-6" />
  </svg>
)

export const IconClock = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <circle {...stroke} cx="12" cy="12" r="8.5" />
    <path {...stroke} d="M12 7v5.2l3.2 2" />
  </svg>
)

export const IconArrow = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path {...stroke} d="M5 12h14m-5.5-5.5L19 12l-5.5 5.5" />
  </svg>
)

export const IconCheck = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path {...stroke} d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
)

export const IconMenu = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path {...stroke} d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const IconClose = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path {...stroke} d="m6 6 12 12M18 6 6 18" />
  </svg>
)

export const IconChevron = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path {...stroke} d="m7 10 5 5 5-5" />
  </svg>
)

export const IconInstagram = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <rect {...stroke} x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle {...stroke} cx="12" cy="12" r="3.8" />
    <circle cx="16.9" cy="7.1" r="1.1" fill="currentColor" />
  </svg>
)
