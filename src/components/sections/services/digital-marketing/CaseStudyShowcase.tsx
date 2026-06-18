'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import CountUp from '@/components/ui/CountUp'

const studies = [
  {
    title: 'E-Commerce Brand',
    subtitle: 'Full-funnel marketing transformation',
    metrics: [
      { value: '320', suffix: '%', label: 'Traffic Growth' },
      { value: '240', suffix: '%', label: 'Lead Growth' },
      { value: '180', suffix: '%', label: 'Revenue Increase' },
    ],
    color: '#818cf8',
    gradient: 'from-indigo-500/10 via-indigo-500/5 to-transparent',
  },
  {
    title: 'B2B SaaS Platform',
    subtitle: 'Enterprise demand generation',
    metrics: [
      { value: '410', suffix: '%', label: 'Pipeline Growth' },
      { value: '190', suffix: '%', label: 'Demo Requests' },
      { value: '5.2', suffix: 'x', label: 'ROAS' },
    ],
    color: '#34d399',
    gradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
  },
]

export default function CaseStudyShowcase() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_100%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />

      <Container>
        <SectionHeading
          label="Results"
          title="Case Studies"
          description="Real campaigns delivering measurable growth for real businesses."
        />

        <div ref={ref} className="space-y-6 max-w-5xl mx-auto">
          {studies.map((study, i) => (
            <motion.div
              key={study.title}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -2 }}
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
                      <span className="text-xs sm:text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color: study.color }}>Case Study</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-indigo-200 transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-sm text-white/40 mt-1.5">{study.subtitle}</p>
                  </div>

                  <div className="flex gap-6 sm:gap-10 lg:shrink-0">
                    {study.metrics.map((m, mi) => (
                      <div key={m.label} className="text-center min-w-[80px]">
                        <div className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: study.color }}>
                          <CountUp value={`${m.value}${m.suffix}`} duration={2} delay={i * 200 + mi * 100} />
                        </div>
                        <div className="text-xs sm:text-[10px] text-white/40 mt-1 whitespace-nowrap">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
