import { useState } from 'react'
import { motion } from 'framer-motion'

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxrF1O0gzJ4vAsC4N_6Qmmhv1NgHPF8CiuuNBncYciIITbCIu9bwHAc3MGNZaFnDs6BMw/exec'

const fields = [
  { name: 'teamName', label: 'Team Name', type: 'text', required: true },
  { name: 'contactName', label: 'Contact Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true },
  { name: 'location', label: 'Team Location (City / Country)', type: 'text', required: false },
  { name: 'affiliation', label: 'League or Federation Affiliation', type: 'text', required: false },
  { name: 'history', label: 'Competitive History', type: 'textarea', required: false, placeholder: 'Notable results, leagues competed in, etc.' },
  { name: 'roster', label: 'Roster', type: 'textarea', required: false, placeholder: 'Player names and positions' },
  { name: 'highlightReel', label: 'Highlight Reel Link', type: 'url', required: false, placeholder: 'https://' },
  { name: 'references', label: 'Reference Contacts', type: 'textarea', required: false, placeholder: 'Name, role, email or phone' },
  { name: 'sponsorship', label: 'Sponsorship Info (Optional)', type: 'textarea', required: false, placeholder: 'Current sponsors, partnership opportunities, etc.' },
]

export default function Apply() {
  const [form, setForm] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      if (GOOGLE_SHEETS_URL) {
        await fetch(GOOGLE_SHEETS_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
        })
      }
      setStatus('sent')
      setForm({})
    } catch {
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full bg-[var(--bg-dark)] border border-[var(--border)] rounded-md text-[var(--text-primary)] text-base focus:outline-none focus:border-[var(--accent)] focus:shadow-[0_0_10px_var(--accent-glow)] transition-all placeholder:text-[var(--text-muted)]'

  if (status === 'sent') {
    return (
      <section id="apply" className="section">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="section-narrow"
        >
          <div className="text-6xl mb-6">✓</div>
          <h2
            className="text-5xl sm:text-6xl font-bold mb-4 gradient-text"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            APPLICATION RECEIVED
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            We'll review your application and be in touch soon. Get ready for Orlando.
          </p>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="apply" className="section">
      <div className="flex flex-col items-center text-center" style={{ maxWidth: '44rem', margin: '0 auto' }}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-eyebrow"
          style={{ marginBottom: '25px' }}
        >
          Enter the Arena
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold"
          style={{ fontFamily: 'var(--font-display)', marginBottom: '25px' }}
        >
          APPLY TO <span className="gradient-text">COMPETE</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-[var(--text-secondary)] max-w-xl"
          style={{ marginBottom: '48px' }}
        >
          Think your team has what it takes? Submit your application for the World Futsal Championships Pro Tournament.
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-lg space-y-10"
          style={{ padding: '48px 44px' }}
        >
          {/* Two-column for name fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {fields.slice(0, 2).map((field) => (
              <div key={field.name}>
                <label className="block text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4 font-semibold text-left">
                  {field.label} {field.required && <span className="text-[var(--accent-hot)]">*</span>}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  value={form[field.name] || ''}
                  onChange={handleChange}
                  className={inputClasses}
                  style={{ padding: '14px 18px' }}
                />
              </div>
            ))}
          </div>

          {/* Two-column for email/phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {fields.slice(2, 4).map((field) => (
              <div key={field.name}>
                <label className="block text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4 font-semibold text-left">
                  {field.label} {field.required && <span className="text-[var(--accent-hot)]">*</span>}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  value={form[field.name] || ''}
                  onChange={handleChange}
                  className={inputClasses}
                  style={{ padding: '14px 18px' }}
                />
              </div>
            ))}
          </div>

          {/* Remaining fields */}
          {fields.slice(4).map((field) => (
            <div key={field.name}>
              <label className="block text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4 font-semibold text-left">
                {field.label} {field.required && <span className="text-[var(--accent-hot)]">*</span>}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={form[field.name] || ''}
                  onChange={handleChange}
                  rows={4}
                  className={inputClasses + ' resize-y'}
                  style={{ padding: '14px 18px' }}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={form[field.name] || ''}
                  onChange={handleChange}
                  className={inputClasses}
                  style={{ padding: '14px 18px' }}
                />
              )}
            </div>
          ))}

          {/* Submit */}
          <div style={{ paddingTop: '12px' }}>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full text-xl font-bold uppercase rounded-md cursor-pointer border-none text-white hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em', background: 'linear-gradient(90deg, #dc3175 0%, #714bb8 100%)', padding: '20px 48px' }}
            >
              {status === 'sending' ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>

          {status === 'error' && (
            <p className="text-[var(--accent-hot)] text-sm text-center">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
