import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function AnimatedNumber({ target, duration = 2000 }) {
  const [value, setValue] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const start = performance.now()
    function tick(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return (
    <span ref={ref} className="tabular-nums">
      ${value.toLocaleString()}
    </span>
  )
}

export default function Prize() {
  return (
    <section id="prize" className="relative py-40 px-6 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,212,255,0.1)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] font-semibold text-[var(--accent-hot)] mb-8"
        >
          The Prize
        </motion.p>

        {/* Big number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold glow-text leading-none"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
          >
            <AnimatedNumber target={30000} />
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[var(--text-primary)] mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Winner Takes All
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-[var(--text-secondary)] max-w-lg mx-auto"
        >
          Three days. One champion. The biggest prize in American futsal history.
        </motion.p>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent max-w-md mx-auto"
        />
      </div>
    </section>
  )
}
