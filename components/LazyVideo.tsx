'use client'

import { useEffect, useRef } from 'react'

export function LazyVideo({
  src,
  className,
}: {
  src: string
  className?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.src = src
          video.load()
          io.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    io.observe(video)
    return () => io.disconnect()
  }, [src])

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    />
  )
}
