import { motion } from 'framer-motion'

export default function Highlights() {
  return (
    <section id="highlights" className="section">
      <div className="section-inner flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-eyebrow"
          style={{ marginBottom: '25px' }}
        >
          Where It All Began
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold"
          style={{ fontFamily: 'var(--font-display)', marginBottom: '25px' }}
        >
          13 YEARS OF <span className="gradient-text">FUTSAL</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-[var(--text-secondary)] max-w-2xl"
          style={{ marginBottom: '48px' }}
        >
          It all started with World Futsal Championships I in 2014. Now, the 13th edition brings with it the largest cash prize in futsal tournament history.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="aspect-video w-full max-w-5xl rounded-lg overflow-hidden glow-border"
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
