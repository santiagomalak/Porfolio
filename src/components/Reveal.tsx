'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

// Lightweight fade-up-on-scroll, replacing per-page Framer Motion boilerplate
// on purely static pages. One shared IntersectionObserver-driven CSS transition
// instead of shipping/hydrating the Framer Motion runtime for a one-time animation.
export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let done = false

    const reveal = () => {
      if (done) return
      done = true
      setVisible(true)
      observer.disconnect()
      window.removeEventListener('scroll', checkScroll)
    }

    // Primary path: cheap, no listeners needed for the common case.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal()
      },
      { threshold: 0, rootMargin: '200px 0px -40px 0px' }
    )
    observer.observe(el)

    // Fallback: a very fast/instant scroll (fling, or a programmatic jump) can move
    // an element from "below the viewport" to "above it" between two rendering
    // frames without IntersectionObserver ever sampling it as intersecting, which
    // would leave it permanently at opacity:0. A throttled scroll check guarantees
    // it still gets revealed once it's been passed, on top of the observer above.
    let ticking = false
    function checkScroll() {
      if (ticking || done) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        const node = ref.current
        if (!node) return
        const rect = node.getBoundingClientRect()
        if (rect.top < window.innerHeight) reveal()
      })
    }
    window.addEventListener('scroll', checkScroll, { passive: true })
    checkScroll() // also covers content already in view on mount

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', checkScroll)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
