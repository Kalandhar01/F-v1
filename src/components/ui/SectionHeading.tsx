'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  label,
  title,
  description,
  className,
  align = 'center',
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div
      ref={ref}
      className={cn(
        'max-w-2xl mb-16 sm:mb-20',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {label && (
        <motion.div
          className="flex items-center justify-center gap-3 mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <span className="w-8 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-indigo-300/70">
            {label}
          </span>
          <span className="w-8 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
        </motion.div>
      )}
      <motion.h2
        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.25, 0.1, 0.25, 1] as const,
        }}
      >
        <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>
      {description && (
        <motion.p
          className="mt-5 text-base sm:text-lg text-white/50 leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1] as const,
          }}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
