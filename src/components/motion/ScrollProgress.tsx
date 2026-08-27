import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Slim progress bar pinned under the header, filling left-to-right with
 * page scroll. Purely decorative — aria-hidden, no layout impact.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 40,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 right-0 left-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand-500 via-accent-400 to-brand-500"
    />
  )
}
