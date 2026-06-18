'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(99,102,241,0.06),transparent)] pointer-events-none" />
      <div ref={ref} className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          className="relative rounded-3xl p-8 sm:p-12 lg:p-16 border overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.02)',
            borderColor: 'rgba(255,255,255,0.06)',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(99,102,241,0.06),transparent)] pointer-events-none" />
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent" />

          <div className="relative">
            <motion.p
              className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-300/60 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
            >
              Let&apos;s Build Together
            </motion.p>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight relative z-[100]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-white">
                Ready To Build Something Exceptional?
              </span>
            </motion.h2>

            <motion.p
              className="mt-5 text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let&apos;s create fast, scalable, and modern digital experiences that help your business grow.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button href="/#contact" size="lg">
                Start Your Project
                <ArrowRight size={16} />
              </Button>
              <Button href="/#contact" variant="secondary" size="lg">
                Schedule A Call
                <ArrowRight size={16} />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
