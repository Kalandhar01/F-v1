'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface PlatformsShowcaseProps {
  title?: string
  items: string[]
}

export default function PlatformsShowcase({ title = 'Platforms We Work With', items }: PlatformsShowcaseProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mb-12 relative z-[100]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white">{title}</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="px-5 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm font-medium text-white/60 hover:text-white/90 hover:border-indigo-400/30 hover:bg-white/[0.06] transition-all duration-300"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
