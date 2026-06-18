'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import CountUp from '@/components/ui/CountUp'

const metrics = [
  { value: '245', suffix: '%', label: 'Traffic Growth', color: '#818cf8' },
  { value: '180', suffix: '%', label: 'Lead Generation', color: '#34d399' },
  { value: '320', suffix: '%', label: 'Engagement', color: '#60a5fa' },
  { value: '4.8', suffix: 'x', label: 'ROAS', color: '#f472b6' },
  { value: '98', suffix: '%', label: 'Client Satisfaction', color: '#c084fc' },
]

export default function MarketingDashboard() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(99,102,241,0.04),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <Container>
        <SectionHeading
          label="Performance"
          title="Marketing Command Center"
          description="Real-time growth metrics that drive every decision we make."
        />

        <div ref={ref} className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent rounded-3xl blur-3xl pointer-events-none" />

          <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.015] p-8 sm:p-12 backdrop-blur-sm">
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <motion.div
                    className="text-4xl sm:text-5xl font-bold tracking-tight"
                    style={{ color: m.color }}
                    animate={isInView ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 2, delay: i * 0.1 + 0.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <CountUp value={`${m.value}${m.suffix}`} duration={2} delay={i * 200} />
                  </motion.div>
                  <div className="mt-2 text-sm text-white/40 group-hover:text-white/60 transition-colors duration-300">
                    {m.label}
                  </div>
                  <div className="mt-3 h-0.5 rounded-full bg-white/[0.04] overflow-hidden mx-auto max-w-[60%]">
                    <motion.div
                      className="h-full rounded-full"
                      initial={{ width: '0%' }}
                      animate={isInView ? { width: '100%' } : { width: '0%' }}
                      transition={{ duration: 1.5, delay: i * 0.1 + 0.5, ease: 'easeOut' }}
                      style={{ background: `linear-gradient(to right, ${m.color}40, ${m.color})` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
