import { useState } from 'react'
import { motion } from 'framer-motion'

const GOOGLE_SHEETS_URL = '' // Will be set when Apps Script webhook is created

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
    'w-full bg-[var(--bg-card)] border border-[var(--border)] rounded px-4 py-3 text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] focus:shadow-[0_0_10px_var(--accent-glow)] transition-all placeholder:text-[var(--text-muted)]'

  if (status === 'sent') {
    return (
      <section id="apply" className="relative py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
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
    <section id="apply" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] font-semibold text-[var(--accent-hot)] mb-4">
            Enter the Arena
          </p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            APPLY TO <span className="gradient-text">COMPETE</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            Think your team has what it takes? Submit your application for the World Futsal Championships Pro Tournament.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-8 sm:p-10 space-y-6"
        >
          {/* Two-column for name fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {fields.slice(0, 2).map((field) => (
              <div key={field.name}>
                <label className="block text-xs uppercase tracking-widest text-[var(--text-muted)] mb-2 font-semibold">
                  {field.label} {field.required && <span className="text-[var(--accent-hot)]">*</span>}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  value={form[field.name] || ''}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            ))}
          </div>

          {/* Two-column for email/phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {fields.slice(2, 4).map((field) => (
              <div key={field.name}>
                <label className="block text-xs uppercase tracking-widest text-[var(--text-muted)] mb-2 font-semibold">
                  {field.label} {field.required && <span className="text-[var(--accent-hot)]">*</span>}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  value={form[field.name] || ''}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            ))}
          </div>

          {/* Remaining fields */}
          {fields.slice(4).map((field) => (
            <div key={field.name}>
              <label className="block text-xs uppercase tracking-widest text-[var(--text-muted)] mb-2 font-semibold">
                {field.label} {field.required && <span className="text-[var(--accent-hot)]">*</span>}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={form[field.name] || ''}
                  onChange={handleChange}
                  rows={3}
                  className={inputClasses + ' resize-y'}
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
                />
              )}
            </div>
          ))}

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 text-lg font-bold uppercase tracking-wider bg-[var(--accent)] text-[var(--bg-dark)] rounded cursor-pointer border-none hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
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
