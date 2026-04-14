'use client'

import { useState, FormEvent } from 'react'

export function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xlgoaeev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          _subject: 'Nuevo suscriptor blog MANZANA',
          source: typeof window !== 'undefined' ? window.location.pathname : 'blog',
        }),
      })
      if (res.ok) {
        setStatus('sent')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="email-capture">
        <p className="email-capture-done">Listo. Te escribimos solo cuando valga la pena.</p>
      </div>
    )
  }

  return (
    <div className="email-capture reveal">
      <p className="email-capture-text">
        Deja tu email. Sin newsletter. Solo cuando publiquemos algo que valga tu tiempo.
      </p>
      <form onSubmit={handleSubmit} className="email-capture-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@empresa.com"
          required
          className="email-capture-input"
          disabled={status === 'sending'}
        />
        <button type="submit" className="email-capture-btn" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando...' : 'Suscribir →'}
        </button>
      </form>
      {status === 'error' && (
        <p className="email-capture-error">Error al enviar. Intenta de nuevo.</p>
      )}
    </div>
  )
}
