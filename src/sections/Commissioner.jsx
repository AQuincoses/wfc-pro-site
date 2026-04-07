import { motion } from 'framer-motion'

function CommissionerText({ className = '' }) {
  return (
    <div className={className}>
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
        <div className="max-w-[300px] sm:max-w-[380px] lg:max-w-[500px]">
          <p className="text-sm sm:text-base lg:text-xl leading-relaxed text-[var(--text-secondary)]" style={{ marginBottom: '16px' }}>
            Widely regarded as the greatest futsal player of all time. Six-time Best Player in the World. The face of professional futsal globally.
          </p>
          <p className="text-sm sm:text-base lg:text-xl leading-relaxed text-[var(--text-secondary)]">
            Now leading the World Futsal Championships into its professional era — bringing the highest level of competition to Orlando.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default function Commissioner() {
  return (
    <section className="relative overflow-hidden w-full" style={{ padding: 0 }}>

      {/* ─── MOBILE LAYOUT ─── */}
      <div className="lg:hidden">
        {/* Image */}
        <div className="relative w-full" style={{ height: '50vh' }}>
          <img
            src="/ricardinho-hero.jpg"
            alt="Ricardinho"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: '45% center' }}
          />
          {/* Bottom fade into dark */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--bg-dark)] to-transparent" />
        </div>

        {/* Text */}
        <div className="bg-[var(--bg-dark)]" style={{ padding: '40px 28px 56px' }}>
          <CommissionerText />
        </div>
      </div>

      {/* ─── DESKTOP LAYOUT ─── */}
      <div
        className="hidden lg:flex lg:flex-row w-full"
        style={{
          minHeight: '100vh',
          backgroundImage: "url('/ricardinho-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: '35% center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Image spacer — left side */}
        <div className="lg:w-[55%] flex-shrink-0" />

        {/* Text — right side */}
        <div className="lg:w-[45%] flex flex-col justify-center px-10 py-16 xl:px-12 xl:py-16">
          <CommissionerText className="pr-12" />
        </div>
      </div>

    </section>
  )
}
