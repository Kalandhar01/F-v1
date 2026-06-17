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
        <motion.span
          className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.25, 0.1, 0.25, 1] as const,
        }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed"
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
