import { motion } from 'framer-motion'

const reasons = [
  {
    number: '01',
    title: 'Make History',
    desc: 'Compete in the first-ever professional futsal prize tournament in U.S. history. Your team writes the first chapter.',
  },
  {
    number: '02',
    title: 'Global Stage',
    desc: 'Media coverage, live broadcast, and a global audience. Put your club in front of the futsal world.',
  },
  {
    number: '03',
    title: 'World-Class Venue',
    desc: 'The Orange County Convention Center — Orlando\'s premier event facility. Purpose-built courts, professional atmosphere.',
  },
  {
    number: '04',
    title: '$30,000 Prize',
    desc: 'The largest prize purse in American futsal. Compete at the highest level for the highest stakes.',
  },
]

export default function WhyCompete() {
  return (
    <section className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="section-eyebrow">The Opportunity</p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            WHY <span className="gradient-text">COMPETE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {reasons.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <span
                className="block text-5xl font-bold text-[var(--border)] group-hover:text-[var(--accent)] transition-colors duration-500 mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {item.number}
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold mb-3 text-[var(--text-primary)]"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
              >
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed max-w-xs mx-auto">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
