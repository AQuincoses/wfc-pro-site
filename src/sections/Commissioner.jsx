import { motion } from 'framer-motion'

export default function Commissioner() {
  return (
    <section className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-eyebrow">The Commissioner</p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="gradient-text">RICARDINHO</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <img
              src="/ricardinho-commissioner.jpg"
              alt="Ricardinho — Commissioner, World Futsal Championships"
              className="w-64 sm:w-72 md:w-80 rounded-lg glow-border"
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p
              className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[var(--text-primary)] mb-4"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}
            >
              Commissioner, World Futsal Championships
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Widely regarded as the greatest futsal player of all time. Six-time Best Player in the World. The face of professional futsal globally.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Now leading the World Futsal Championships into its professional era — bringing the highest level of competition to Orlando.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
