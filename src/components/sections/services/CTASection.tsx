'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  title?: string
  description?: string
  ctaText?: string
  ctaHref?: string
}

export default function CTASection({
  title = 'Ready to Start?',
  description = 'Let\'s discuss your project and create something extraordinary together.',
  ctaText = 'Get in Touch',
  ctaHref = '#contact',
}: CTASectionProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_50%,rgba(99,102,241,0.05),transparent)] pointer-events-none" />
      <div ref={ref} className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight relative z-[100]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white">{title}</span>
        </motion.h2>

        <motion.p
          className="mt-4 text-white/50 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button href={ctaHref} size="lg">
            {ctaText}
            <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
