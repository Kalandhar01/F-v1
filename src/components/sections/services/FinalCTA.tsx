'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

interface FinalCTAProps {
  label?: string
  title: string
  description: string
  primaryText: string
  primaryHref?: string
  secondaryText?: string
  secondaryHref?: string
}

export default function FinalCTA({
  label = "Let's Build Together",
  title,
  description,
  primaryText,
  primaryHref = '/#contact',
  secondaryText,
  secondaryHref = '/#contact',
}: FinalCTAProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(99,102,241,0.06),transparent)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          className="relative rounded-3xl p-8 sm:p-12 lg:p-16 border overflow-hidden group"
          style={{
            background: 'rgba(255,255,255,0.02)',
            borderColor: 'rgba(255,255,255,0.06)',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(99,102,241,0.06),transparent)] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent group-hover:via-indigo-400/40 transition-all duration-700" />

          <div
            className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.08), transparent 40%, rgba(129,140,248,0.05) 70%, transparent)',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor',
              padding: '1px',
            }}
          />

          <div className="relative">
            <motion.p
              className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-300/60 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
            >
              {label}
            </motion.p>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight relative z-[100]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-white">{title}</span>
            </motion.h2>

            <motion.p
              className="mt-5 text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button href={primaryHref} size="lg">
                {primaryText}
                <ArrowRight size={16} />
              </Button>
              {secondaryText && (
                <Button href={secondaryHref} variant="secondary" size="lg">
                  {secondaryText}
                  <ArrowRight size={16} />
                </Button>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
