import { motion } from 'framer-motion'

export default function Commissioner() {
  return (
    <section className="section relative overflow-hidden" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Full-width hero background */}
      <div className="absolute inset-0">
        <img
          src="/ricardinho-commissioner.jpg"
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] via-[rgba(10,10,15,0.5)] to-[rgba(10,10,15,0.3)]" />
      </div>

      <div className="section-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p className="section-eyebrow">The Commissioner</p>
          <h2
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="gradient-text">RICARDINHO</span>
          </h2>
        </motion.div>

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
