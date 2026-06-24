'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const logos = [
  { name: 'RACTYSH', src: '/Ractysh-logo.png' },
]

export default function LogoCloud() {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % logos.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [isInView])

  const prev = (current - 1 + logos.length) % logos.length
  const next = (current + 1) % logos.length

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.01),transparent)] pointer-events-none" />

      <Container>
        <SectionHeading
          label="Trusted By"
          title="Used by industry leaders"
          description="From startups to enterprises — the best teams trust us to deliver."
        />
      </Container>

      <div className="relative max-w-md mx-auto">
        <div className="flex items-center justify-center gap-5 sm:gap-10">
          <motion.div
            key={`prev-${prev}`}
            className="flex-shrink-0 opacity-30 scale-75"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 0.3, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={logos[prev].src}
              alt={logos[prev].name}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain grayscale brightness-[3] mx-auto"
              loading="lazy"
            />
            <p className="text-xs text-white/20 text-center mt-1">{logos[prev].name}</p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`current-${current}`}
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="h-16 sm:h-20 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-3 px-6 sm:px-8 shadow-lg shadow-indigo-500/5">
                <img
                  src={logos[current].src}
                  alt={logos[current].name}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  loading="lazy"
                />
                <span className="text-base sm:text-lg font-semibold text-white whitespace-nowrap">
                  {logos[current].name}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            key={`next-${next}`}
            className="flex-shrink-0 opacity-30 scale-75"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 0.3, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={logos[next].src}
              alt={logos[next].name}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain grayscale brightness-[3] mx-auto"
              loading="lazy"
            />
            <p className="text-xs text-white/20 text-center mt-1">{logos[next].name}</p>
          </motion.div>
        </div>

        <div className="flex justify-center gap-1.5 mt-8">
          {logos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-indigo-400/60' : 'w-1.5 bg-white/10 hover:bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
