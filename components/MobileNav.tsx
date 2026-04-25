'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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
              <li><Link href="/metodologia" onClick={() => setOpen(false)}>Metodología</Link></li>
              <li><Link href="/manifiesto" onClick={() => setOpen(false)}>Manifiesto</Link></li>
              <li><Link href="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
              <li><Link href="/caso" onClick={() => setOpen(false)}>Ejemplo</Link></li>
              <li><Link href="/diagnostico" onClick={() => setOpen(false)}>Diagnóstico</Link></li>
              <li><Link href="/contacto" className="mz-accent" onClick={() => setOpen(false)}>Contacto</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
