import { motion } from 'framer-motion'

export default function Commissioner() {
  return (
    <section className="section relative overflow-hidden">
      {/* Full-width hero image background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/ricardinho-commissioner.jpg"
          alt=""
          className="w-full h-full object-cover object-top opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-section-alt)] via-[rgba(13,13,20,0.7)] to-[var(--bg-section-alt)]" />
      </div>

      <div className="section-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="section-eyebrow">The Commissioner</p>
          <h2
            className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="gradient-text">RICARDINHO</span>
          </h2>
        </motion.div>

        {/* Large centered portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <img
            src="/ricardinho-commissioner.jpg"
            alt="Ricardinho — Commissioner, World Futsal Championships"
            className="w-full max-w-lg mx-auto rounded-lg glow-border"
          />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[var(--text-primary)] mb-6"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}
          >
            Commissioner, World Futsal Championships
          </p>
          <p className="section-body mb-4">
            Widely regarded as the greatest futsal player of all time. Six-time Best Player in the World. The face of professional futsal globally.
          </p>
          <p className="section-body">
            Now leading the World Futsal Championships into its professional era — bringing the highest level of competition to Orlando.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
