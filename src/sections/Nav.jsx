import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'The Prize', href: '#prize' },
    { label: 'Tournament', href: '#tournament' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Apply', href: '#apply' },
  ]

  const handleClick = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(10,10,15,0.95)] backdrop-blur-md'
            : 'bg-transparent'
        }`}
        style={{ paddingTop: '28px', paddingBottom: '0' }}
      >
        {/* Desktop links */}
        <div className="hidden md:flex items-center justify-center" style={{ gap: '40px', paddingBottom: '20px' }}>
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-base font-semibold uppercase text-[var(--text-secondary)] hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('#apply')}
            className="text-base font-bold uppercase text-white cursor-pointer border-none rounded-md hover:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-200"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.15em', background: 'linear-gradient(90deg, #dc3175 0%, #714bb8 100%)', padding: '10px 28px' }}
          >
            Apply Now
          </button>
        </div>

        {/* Subtle divider */}
        <div className="hidden md:block w-full" style={{ maxWidth: '600px', height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)' }} />

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ marginBottom: '12px' }}
        >
          <span className={`w-6 h-0.5 bg-[var(--accent)] transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-[var(--accent)] transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-[var(--accent)] transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[rgba(10,10,15,0.98)] backdrop-blur-md flex flex-col items-center justify-center gap-8"
          >
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-2xl font-bold uppercase tracking-widest text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors cursor-pointer bg-transparent border-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick('#apply')}
              className="mt-4 px-8 py-3 text-lg font-bold uppercase tracking-wider bg-[var(--accent)] text-[var(--bg-dark)] rounded cursor-pointer border-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Apply Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
