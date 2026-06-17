'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export default function Card({
  children,
  className,
  hover = true,
  delay = 0,
}: CardProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 transition-all duration-500',
        hover && 'hover:bg-white/[0.04] hover:border-white/[0.12] hover:-translate-y-0.5',
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.5,
          delay,
          ease: [0.25, 0.1, 0.25, 1] as const,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
