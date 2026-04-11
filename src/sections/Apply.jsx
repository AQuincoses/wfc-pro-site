import { motion } from 'framer-motion'

const TYPEFORM_URL = 'https://unitedfutsal.typeform.com/to/xAzE6h6f'

export default function Apply() {
  return (
    <section id="apply" className="section">
      <div className="section-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] font-semibold text-[var(--accent-hot)] mb-4">
            Enter the Arena
          </p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            APPLY TO <span className="gradient-text">COMPETE</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-12">
            Think your team has what it takes? Submit your application for the World Futsal Championships Pro Tournament.
          </p>

          <motion.a
            href={TYPEFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block text-xl font-bold uppercase rounded hover:shadow-[0_0_40px_var(--accent-glow)] transition-all duration-300 no-underline text-white"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em', background: 'linear-gradient(90deg, #dc3175 0%, #714bb8 100%)', padding: '20px 56px' }}
          >
            Submit Application
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
