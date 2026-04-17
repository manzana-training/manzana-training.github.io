'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function DiagnosticoCompletadoTracker() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'diagnostico_completado', {
        event_label: 'diagnostico-gracias',
      })
    }
  }, [])

  return null
}
