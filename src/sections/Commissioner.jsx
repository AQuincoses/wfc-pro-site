import { motion } from 'framer-motion'

export default function Commissioner() {
  return (
    <section
      className="relative overflow-hidden w-full"
      style={{
        padding: 0,
        minHeight: '100vh',
        backgroundImage: "url('/ricardinho-hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col lg:flex-row w-full" style={{ minHeight: '100vh' }}>
        {/* Image space — left side */}
        <div className="w-full lg:w-[55%] flex-shrink-0" style={{ minHeight: '50vh' }} />

        {/* Text — right side */}
        <div
          className="relative w-full lg:w-[45%] flex flex-col justify-center"
          style={{ padding: '64px 48px 64px 40px' }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-eyebrow"
            style={{ marginBottom: '25px', textAlign: 'left' }}
          >
            The Commissioner
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold"
            style={{ fontFamily: 'var(--font-display)', marginBottom: '12px', textAlign: 'left' }}
          >
            <span className="gradient-text">RICARDINHO</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: 'left' }}
          >
            <p
              className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[var(--text-primary)]"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.1em', marginBottom: '25px' }}
            >
              Commissioner, World Futsal Championships
            </p>
            <div style={{ maxWidth: '500px' }}>
              <p className="text-lg sm:text-xl leading-relaxed text-[var(--text-secondary)]" style={{ marginBottom: '20px' }}>
                Widely regarded as the greatest futsal player of all time. Six-time Best Player in the World. The face of professional futsal globally.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-[var(--text-secondary)]">
                Now leading the World Futsal Championships into its professional era — bringing the highest level of competition to Orlando.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
