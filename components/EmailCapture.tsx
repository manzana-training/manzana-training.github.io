'use client'

import { useState, FormEvent } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type EmailCaptureProps = {
  text?: string
  label?: string
}

const DEFAULT_TEXT =
  'Un email al mes: una posición real, tres movimientos. Sin humo.'

export function EmailCapture({ text = DEFAULT_TEXT, label }: EmailCaptureProps = {}) {
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
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'email_capturado', {
            event_label:
              label ||
              (typeof window !== 'undefined' ? window.location.pathname : 'blog'),
          })
        }
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
      <p className="email-capture-text">{text}</p>
      <form onSubmit={handleSubmit} className="email-capture-form">
        <label htmlFor="email-capture" className="sr-only">Email</label>
        <input
          id="email-capture"
          type="email"
          autoComplete="email"
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
