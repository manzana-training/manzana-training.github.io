'use client'

import { useState, useEffect } from 'react'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <button
        className="mobile-nav-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
      >
        <span className={`burger ${open ? 'is-open' : ''}`} />
      </button>
      {open && (
        <div className="mobile-nav-overlay" onClick={() => setOpen(false)}>
          <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            <ul>
              <li><a href="/metodologia" onClick={() => setOpen(false)}>Metodología</a></li>
              <li><a href="/blog" onClick={() => setOpen(false)}>Blog</a></li>
              <li><a href="/caso" onClick={() => setOpen(false)}>Caso</a></li>
              <li><a href="/diagnostico" onClick={() => setOpen(false)}>Diagnóstico</a></li>
              <li><a href="/contacto" className="mz-accent" onClick={() => setOpen(false)}>Contacto</a></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
