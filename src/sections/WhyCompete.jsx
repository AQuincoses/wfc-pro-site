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
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] font-semibold text-[var(--accent-hot)] mb-4">
            The Opportunity
          </p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            WHY <span className="gradient-text">COMPETE</span>
          </h2>
        </motion.div>

        {/* Reasons list */}
        <div className="space-y-12">
          {reasons.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 sm:gap-10 group"
            >
              <span
                className="text-5xl sm:text-6xl font-bold text-[var(--border)] group-hover:text-[var(--accent)] transition-colors duration-500 shrink-0"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {item.number}
              </span>
              <div className="border-l border-[var(--border)] group-hover:border-[var(--accent)] transition-colors duration-500 pl-6 sm:pl-10">
                <h3
                  className="text-2xl sm:text-3xl font-bold mb-2 text-[var(--text-primary)]"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
                >
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
