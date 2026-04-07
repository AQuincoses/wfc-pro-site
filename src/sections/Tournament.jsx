import { motion } from 'framer-motion'

const details = [
  {
    icon: '/calendar1.png',
    title: 'July 17-19, 2026',
    desc: 'Three days of elite professional futsal',
  },
  {
    icon: '/position1.png',
    title: 'Orange County Convention Center',
    desc: 'Orlando, Florida — World-class venue',
  },
  {
    icon: '/ball1.png',
    title: '12-16 Elite Teams',
    desc: 'Top clubs from around the world',
  },
  {
    icon: '/trophy1.png',
    title: '3 Matches Guaranteed',
    desc: 'Group stage, semifinals, and finals',
  },
]

export default function Tournament() {
  return (
    <section id="tournament" className="section">
      <div className="section-inner flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-eyebrow"
          style={{ marginBottom: '25px' }}
        >
          The Tournament
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold"
          style={{ fontFamily: 'var(--font-display)', marginBottom: '48px' }}
        >
          THREE DAYS.{' '}
          <span className="gradient-text">ONE CHAMPION.</span>
        </motion.h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl w-full"
          style={{ marginBottom: '48px' }}
        >
          {details.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg text-center hover:border-[var(--border-accent)] hover:bg-[var(--bg-card-hover)] transition-all duration-300 group"
              style={{ padding: '40px 32px' }}
            >
              <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <img src={item.icon} alt="" style={{ width: '3.75rem', height: '3.75rem', objectFit: 'contain' }} />
              </div>
              <h3
                className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em', marginBottom: '12px' }}
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
