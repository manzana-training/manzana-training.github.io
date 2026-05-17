'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function PagadoTracker() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      const params = new URLSearchParams(window.location.search)
      const sesion = params.get('sesion') || 'drill'
      window.gtag('event', 'pago_completado', {
        event_label: sesion,
      })
    }
  }, [])
  return null
}
