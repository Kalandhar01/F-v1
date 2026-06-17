'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { stats } from '@/constants'

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="why-us" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,255,255,0.01),transparent)] pointer-events-none" />
      <Container>
        <SectionHeading
          label="Why Choose Us"
          title="Built for Impact"
          description="We combine creative excellence with technical rigor to deliver results that matter."
        />

        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 text-center group hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1] as const,
              }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/40">{stat.label}</div>
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
