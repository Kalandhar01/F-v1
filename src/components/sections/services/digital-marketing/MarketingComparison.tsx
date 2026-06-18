'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const comparisons = [
  { metric: 'Data Tracking', traditional: 'Vanity metrics, basic analytics', ours: 'Deep funnel tracking with multi-touch attribution' },
  { metric: 'Conversion Focus', traditional: 'Traffic-first, no optimization', ours: 'Conversion rate optimization at every touchpoint' },
  { metric: 'ROI Measurement', traditional: 'No clear ROI tracking', ours: 'Full-funnel ROI with CAC, LTV, and ROAS reporting' },
  { metric: 'Automation', traditional: 'Manual processes, slow execution', ours: 'Automated workflows, smart rules, and AI optimization' },
  { metric: 'Optimization', traditional: 'Set-and-forget campaigns', ours: 'Continuous A/B testing and data-driven iteration' },
  { metric: 'Scalability', traditional: 'Fixed budgets, limited growth', ours: 'Scalable systems with dynamic budget allocation' },
]

export default function MarketingComparison() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeRow, setActiveRow] = useState<number | null>(null)

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div ref={ref} className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-4 relative z-[100]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white">Why Choose Our Marketing</span>
        </motion.h2>
        <motion.p
          className="text-white/50 text-base text-center max-w-xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We don&apos;t just run campaigns — we build data-driven growth systems.
        </motion.p>

        <div className="hidden md:grid grid-cols-3 gap-5 mb-4 px-4">
          <div />
          <div className="rounded-xl px-5 py-3 text-center" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.1)' }}>
            <span className="text-sm font-semibold text-red-400/60">Traditional Marketing</span>
          </div>
          <div className="rounded-xl px-5 py-3 text-center" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)' }}>
            <span className="text-sm font-semibold text-indigo-400">Our Growth System</span>
          </div>
        </div>

        <div className="space-y-3">
          {comparisons.map((item, i) => (
            <motion.div
              key={item.metric}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              onMouseEnter={() => setActiveRow(i)}
              onMouseLeave={() => setActiveRow(null)}
            >
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 rounded-2xl p-4 md:p-5 border transition-all duration-300"
                style={{
                  background: activeRow === i ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.01)',
                  borderColor: activeRow === i ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.04)',
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-white/80">{item.metric}</span>
                </div>

                <div className="flex items-start gap-2 rounded-xl px-4 py-3" style={{ background: 'rgba(239,68,68,0.03)' }}>
                  <svg className="w-3.5 h-3.5 text-red-400/60 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
                  <span className="text-xs text-white/40 leading-relaxed">{item.traditional}</span>
                </div>

                <div className="flex items-start gap-2 rounded-xl px-4 py-3" style={{ background: 'rgba(99,102,241,0.06)' }}>
                  <svg className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                  <span className="text-xs text-white/80 leading-relaxed font-medium">{item.ours}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
