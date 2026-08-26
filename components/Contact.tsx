'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
          Contact
        </span>
        <h2 className="text-4xl font-bold mt-3 mb-4">Let&apos;s talk</h2>
        <p className="mb-10" style={{ color: 'var(--muted)' }}>
          Have a project in mind, a question about networking, or just want to connect? Drop me a message.
        </p>

        {status === 'sent' ? (
          <div
            className="rounded-xl p-8 text-center"
            style={{ background: 'var(--surface)', border: '1px solid var(--surface-border)' }}
          >
            <div className="text-4xl mb-4">✓</div>
            <h3 className="font-semibold mb-2">Message sent!</h3>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              I&apos;ll get back to you at your email address.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {(['name', 'email'] as const).map(field => (
              <div key={field}>
                <label
                  className="block text-sm font-medium mb-1.5 capitalize"
                  style={{ color: 'var(--foreground)' }}
                >
                  {field}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  required
                  value={form[field]}
                  onChange={e => setForm(prev => ({ ...prev, [field]: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--surface-border)',
                    color: 'var(--foreground)',
                  }}
                  placeholder={field === 'email' ? 'you@example.com' : 'Your name'}
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--foreground)' }}>
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors resize-none"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--surface-border)',
                  color: 'var(--foreground)',
                }}
                placeholder="What's on your mind?"
              />
            </div>
            {status === 'error' && (
              <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-6 py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50"
              style={{ background: 'var(--accent)', color: 'white' }}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
