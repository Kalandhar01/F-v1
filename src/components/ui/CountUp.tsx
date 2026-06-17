'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: string
  duration?: number
  delay?: number
}

export default function CountUp({ value, duration = 2, delay = 0 }: CountUpProps) {
  const [display, setDisplay] = useState('0')
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  const match = value.match(/^([\d.]+)(.*)$/)
  const target = match ? parseFloat(match[1]) : 0
  const suffix = match ? match[2] : ''
  const isDecimal = match ? match[1].includes('.') : false

  useEffect(() => {
    const el = ref.current
    if (!el || started.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          observer.disconnect()

          setTimeout(() => {
            const startTime = performance.now()

            const animate = (now: number) => {
              const elapsed = (now - startTime) / 1000
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              const current = eased * target

              if (isDecimal) {
                setDisplay(current.toFixed(1))
              } else {
                setDisplay(Math.floor(current).toString())
              }

              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setDisplay(match ? match[1] : value)
              }
            }

            requestAnimationFrame(animate)
          }, delay)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, delay, isDecimal, value, match])

  return (
    <div ref={ref}>
      {display}{suffix}
    </div>
  )
}
