import { motion } from 'framer-motion'

const details = [
  {
    icon: '📅',
    title: 'July 17-19, 2026',
    desc: 'Three days of elite professional futsal',
  },
  {
    icon: '📍',
    title: 'Orange County Convention Center',
    desc: 'Orlando, Florida — World-class venue',
  },
  {
    icon: '⚽',
    title: '12-16 Elite Teams',
    desc: 'Top clubs from around the world',
  },
  {
    icon: '🏆',
    title: '3 Matches Guaranteed',
    desc: 'Group stage, semifinals, and finals',
  },
]

export default function Tournament() {
  return (
    <section id="tournament" className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-eyebrow">The Tournament</p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            THREE DAYS.{' '}
            <span className="gradient-text">ONE CHAMPION.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {details.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-8 text-center hover:border-[var(--border-accent)] hover:bg-[var(--bg-card-hover)] transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3
                className="text-lg font-bold mb-2 text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="inline-flex items-center gap-4 sm:gap-6 text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            <span className="text-[var(--text-primary)]">Group Stage</span>
            <span className="text-[var(--accent)]">→</span>
            <span className="text-[var(--text-primary)]">Semifinals</span>
            <span className="text-[var(--accent)]">→</span>
            <span className="text-[var(--accent)]">Finals</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
