import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate))

  function getTimeLeft(target) {
    const diff = new Date(target) - new Date()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return timeLeft
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span
        className="text-4xl sm:text-5xl md:text-6xl font-bold tabular-nums"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
      >
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mt-1">
        {label}
      </span>
    </div>
  )
}

export default function Hero() {
  const countdown = useCountdown('2026-07-17T00:00:00')

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden scanlines"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm sm:text-base uppercase tracking-[0.3em] font-semibold text-[var(--accent-hot)]"
          style={{ marginBottom: '25px' }}
        >
          <span>July 17-19, 2026</span>{' '}<span style={{ color: '#f5c542' }}>&middot;</span>{' '}<span style={{ color: '#714bb8' }}>Orlando, FL</span>
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold leading-[0.85] tracking-tight"
          style={{ fontFamily: 'var(--font-display)', marginBottom: '10px' }}
        >
          <span className="block">WORLD FUTSAL</span>
          <span className="block gradient-text">CHAMPIONSHIPS</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed"
          style={{ marginBottom: '25px' }}
        >
          The first professional futsal prize tournament in U.S. history.
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex items-center justify-center gap-4 sm:gap-6"
          style={{ marginBottom: '25px' }}
        >
          <CountdownUnit value={countdown.days} label="Days" />
          <span className="text-2xl text-[var(--text-muted)] font-light">:</span>
          <CountdownUnit value={countdown.hours} label="Hours" />
          <span className="text-2xl text-[var(--text-muted)] font-light">:</span>
          <CountdownUnit value={countdown.minutes} label="Min" />
          <span className="text-2xl text-[var(--text-muted)] font-light">:</span>
          <CountdownUnit value={countdown.seconds} label="Sec" />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <a
            href="#apply"
            className="inline-block text-xl font-bold uppercase rounded hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-300 no-underline text-white"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em', background: 'linear-gradient(90deg, #dc3175 0%, #714bb8 100%)', padding: '20px 48px' }}
          >
            Apply to Compete
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-[var(--text-muted)] rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 bg-[var(--accent)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
