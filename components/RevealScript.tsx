'use client'

import { useEffect } from 'react'

export function RevealScript() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    )

    // Observe all current .reveal elements
    function observeAll() {
      document.querySelectorAll<HTMLElement>('.reveal:not(.in)').forEach((el) => io.observe(el))
    }
    observeAll()

    // Watch for new .reveal elements added to the DOM (e.g. after navigation)
    const mo = new MutationObserver(() => observeAll())
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
  return null
}
