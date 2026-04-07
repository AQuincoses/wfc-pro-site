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
    title: '$50,000 Prize',
    desc: 'The largest prize purse in American futsal. Compete at the highest level for the highest stakes.',
  },
]

export default function WhyCompete() {
  return (
    <section className="section">
      <div className="section-inner flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-eyebrow"
          style={{ marginBottom: '25px' }}
        >
          The Opportunity
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold"
          style={{ fontFamily: 'var(--font-display)', marginBottom: '48px' }}
        >
          WHY <span className="gradient-text">COMPETE</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-3xl w-full">
          {reasons.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group"
              style={{ padding: '0 16px' }}
            >
              <span
                className="block text-5xl font-bold text-[var(--border)] group-hover:text-[var(--accent)] transition-colors duration-500"
                style={{ fontFamily: 'var(--font-display)', marginBottom: '12px' }}
              >
                {item.number}
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em', marginBottom: '12px' }}
              >
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
