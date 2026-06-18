'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-32 sm:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_50%,rgba(99,102,241,0.15),rgba(99,102,241,0.03) 60%,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_60%,rgba(168,85,247,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-indigo-500/10 via-indigo-500/03 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-indigo-500/10 via-indigo-500/03 to-transparent pointer-events-none" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-xs text-indigo-300/70 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Ready to scale?
          </div>
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Ready To Scale Beyond Your Competition?
          </span>
        </motion.h2>

        <motion.p
          className="mt-6 text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Build predictable growth systems powered by data, creativity, and performance marketing.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Button href="/#contact" size="lg" className="w-full sm:w-auto">
            Start Growth Strategy
            <ArrowRight size={16} />
          </Button>
          <Button href="/#contact" variant="secondary" size="lg" className="w-full sm:w-auto">
            Book Discovery Call
            <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
