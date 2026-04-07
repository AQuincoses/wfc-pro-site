import { motion } from 'framer-motion'

export default function Commissioner() {
  return (
    <section className="relative overflow-hidden w-full" style={{ padding: 0 }}>
      {/* Mobile: stacked layout — text on top, image below */}
      {/* Desktop: side-by-side with background image */}

      {/* Desktop background image */}
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          backgroundImage: "url('/ricardinho-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: '35% center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="flex flex-col lg:flex-row w-full lg:min-h-screen">
        {/* Mobile: text first */}
        <div
          className="relative w-full lg:order-2 lg:w-[45%] flex flex-col justify-center bg-[var(--bg-dark)] lg:bg-transparent px-10 pt-20 pb-10 sm:px-12 lg:px-10 lg:pt-0 lg:pb-0 lg:py-16 xl:px-12 xl:py-16"
        >
          <div className="relative z-10 lg:pr-12">
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

        {/* Desktop: image spacer (left side) */}
        <div className="hidden lg:block lg:order-1 lg:w-[55%] flex-shrink-0" />

        {/* Mobile: Ricardinho image below text */}
        <div className="relative w-full lg:hidden" style={{ height: '55vh' }}>
          <img
            src="/ricardinho-hero.jpg"
            alt="Ricardinho"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: '35% 20%' }}
          />
          {/* Top fade into dark bg */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--bg-dark)] to-transparent" />
        </div>
      </div>
    </section>
  )
}
