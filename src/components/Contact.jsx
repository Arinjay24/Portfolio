import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')

  const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill all fields before sending.')
      return
    }
    setStatus('sending')

    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message })
        })
        if (res.ok) {
          setStatus('success')
          setName('')
          setEmail('')
          setMessage('')
        } else {
          const data = await res.json().catch(() => null)
          setError(data && data.error ? data.error : 'Submission failed. Please try again later.')
          setStatus('error')
        }
      } catch (err) {
        setError('Network error. Please try again later.')
        setStatus('error')
      }
    } else {
      // fallback to mailto
      const subject = encodeURIComponent('Portfolio contact from ' + name)
      const body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')')
      window.location.href = `mailto:shuklaarinjay24@gmail.com?subject=${subject}&body=${body}`
      setStatus('success')
    }
  }

  return (
    <section id="contact" className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <form className="card" onSubmit={handleSubmit}>
          <div className="grid gap-3">
            <label className="sr-only" htmlFor="name">Your name</label>
            <input id="name" value={name} onChange={(e) => setName(e.target.value)} className="px-4 py-3 border rounded-lg" placeholder="Your name" />
            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="px-4 py-3 border rounded-lg" placeholder="Email" />
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="px-4 py-3 border rounded-lg" rows="5" placeholder="Message"></textarea>

            <div className="flex items-center gap-4">
              <button type="submit" disabled={status === 'sending'} className="btn-primary w-max">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <div className="text-sm text-green-600">Message sent — thanks!</div>}
              {status === 'error' && <div className="text-sm text-red-600">{error || 'Something went wrong.'}</div>}
            </div>
            {error && <div className="text-sm text-red-600 mt-2" role="alert">{error}</div>}
            <div className="text-xs text-slate-400 mt-2">No spam — your message goes directly to my inbox.</div>
          </div>
        </form>

        <div className="card flex flex-col gap-4 justify-center">
          <div className="space-y-4">
            <h4 className="font-semibold">Reach out</h4>
            <p className="text-sm text-slate-600 mt-0">Let's create something amazing together — I typically respond within 24 hours.</p>
            <div className="flex items-center gap-4">
              <a href="mailto:shuklaarinjay24@gmail.com" className="inline-flex items-center gap-2 btn-primary px-4 py-2 rounded-xl shadow" aria-label="Email Arinjay">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M3 8.5L12 13L21 8.5V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V8.5Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 6H3C1.89543 6 1 6.89543 1 8V8.5L12 13L23 8.5V8C23 6.89543 22.1046 6 21 6Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white">Email</span>
              </a>

              <div className="flex items-center gap-2">
                <a href="https://github.com/Arinjay24" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:scale-105 transition" aria-label="Arinjay on GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.55-3.88-1.55-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.98.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.24 2.73.12 3.02.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.41-5.27 5.69.42.36.79 1.07.79 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                </a>

                <a href="https://www.linkedin.com/in/arinjay-shukla-5845641a5" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:scale-105 transition" aria-label="Arinjay on LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8.5 8.98h4.78v2.06h.07c.67-1.27 2.31-2.6 4.76-2.6 5.09 0 6.03 3.35 6.03 7.71V24h-5v-7.6c0-1.81-.03-4.15-2.53-4.15-2.53 0-2.92 1.98-2.92 4.02V24h-5V8.98z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
