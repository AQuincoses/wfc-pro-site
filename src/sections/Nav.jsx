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
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(10,10,15,0.95)] backdrop-blur-md border-b border-[var(--border)]'
            : 'bg-transparent'
        }`}
      >
        <a href="#" className="flex items-center gap-2">
          <span
            className="text-xl font-bold tracking-[0.15em] uppercase"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
          >
            WFC
          </span>
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] hidden sm:block">
            Orlando 2026
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-semibold uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors cursor-pointer bg-transparent border-none"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('#apply')}
            className="px-5 py-2 text-sm font-bold uppercase tracking-wider bg-[var(--accent)] text-[var(--bg-dark)] rounded cursor-pointer border-none hover:shadow-[0_0_20px_var(--accent-glow)] transition-all"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
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
