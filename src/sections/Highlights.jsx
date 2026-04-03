import { motion } from 'framer-motion'

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-40 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] font-semibold text-[var(--accent-hot)] mb-4">
            Where It All Began
          </p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            13 YEARS OF <span className="gradient-text">FUTSAL</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            It all started with World Futsal Championships I in 2014. Now, the 13th edition brings with it the largest cash prize in futsal tournament history.
          </p>
        </motion.div>

        {/* Video embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="aspect-video w-full rounded-lg overflow-hidden glow-border"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <iframe
            src="https://player.vimeo.com/video/103761792?badge=0&autopause=0&player_id=0&app_id=58479"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="World Futsal Championships I — 2014"
          />
        </motion.div>
      </div>
    </section>
  )
}
