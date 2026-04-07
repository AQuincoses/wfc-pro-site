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
        backgroundPosition: '35% top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col lg:flex-row w-full" style={{ minHeight: '100vh' }}>
        {/* Image space — left side (taller on mobile to show more of the photo) */}
        <div className="w-full lg:w-[55%] flex-shrink-0 min-h-[60vh] lg:min-h-0" />

        {/* Text — right side */}
        <div
          className="relative w-full lg:w-[45%] flex flex-col justify-center px-8 py-10 sm:px-10 lg:px-10 lg:py-16 xl:px-12 xl:py-16"
        >
          {/* Mobile dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,15,0.95)] via-[rgba(10,10,15,0.85)] to-[rgba(10,10,15,0.6)] lg:hidden" />
          <div className="absolute inset-0 bg-[var(--bg-dark)] hidden lg:block" style={{ opacity: 0 }} />

          <div className="relative z-10 lg:pr-12" style={{ padding: '0' }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-eyebrow"
              style={{ marginBottom: '20px', textAlign: 'left' }}
            >
              The Commissioner
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold"
              style={{ fontFamily: 'var(--font-display)', marginBottom: '10px', textAlign: 'left' }}
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
                className="text-base sm:text-xl lg:text-2xl font-bold uppercase tracking-wider text-[var(--text-primary)]"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.1em', marginBottom: '20px' }}
              >
                Commissioner, World Futsal Championships
              </p>
              <div className="max-w-[250px] sm:max-w-[340px] lg:max-w-[500px]">
                <p className="text-sm sm:text-base lg:text-xl leading-relaxed text-[var(--text-secondary)]" style={{ marginBottom: '16px' }}>
                  Widely regarded as the greatest futsal player of all time. Six-time Best Player in the World. The face of professional futsal globally.
                </p>
                <p className="text-sm sm:text-base lg:text-xl leading-relaxed text-[var(--text-secondary)]">
                  Now leading the World Futsal Championships into its professional era — bringing the highest level of competition to Orlando.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
