'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function TrustedBy() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/30">
            Trusted Partner
          </p>
          <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
            <img
              src="/Ractysh-logo.png"
              alt="RACTYSH"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
