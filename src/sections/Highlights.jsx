import { motion } from 'framer-motion'

export default function Highlights() {
  return (
    <section id="highlights" className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-eyebrow">Where It All Began</p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            13 YEARS OF <span className="gradient-text">FUTSAL</span>
          </h2>
          <p className="section-body">
            It all started with World Futsal Championships I in 2014. Now, the 13th edition brings with it the largest cash prize in futsal tournament history.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden glow-border"
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
