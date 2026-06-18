'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BarChart3, Target, RefreshCw, Eye, FileBarChart } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const principles = [
  { icon: BarChart3, title: 'Data First', desc: 'Every decision is backed by real data — not gut feelings. We measure everything and optimize continuously.', color: '#818cf8' },
  { icon: Target, title: 'Performance Driven', desc: 'We obsess over metrics that matter: traffic, leads, conversions, revenue, and ROAS.', color: '#34d399' },
  { icon: RefreshCw, title: 'Conversion Focused', desc: 'Every campaign is designed to convert. From landing pages to CTAs, everything is optimized for action.', color: '#f472b6' },
  { icon: Eye, title: 'Continuous Optimization', desc: 'Campaigns are never set-and-forget. We A/B test, iterate, and refine until we hit peak performance.', color: '#60a5fa' },
  { icon: FileBarChart, title: 'Transparent Reporting', desc: 'Real-time dashboards with clear metrics. You see exactly where every dollar goes and what it delivers.', color: '#c084fc' },
]

export default function GrowthPrinciples() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />

      <Container>
        <SectionHeading
          label="Philosophy"
          title="Why Our Marketing Works"
          description="Five principles that separate performance marketing from guesswork."
        />

        <div ref={ref} className="max-w-4xl mx-auto space-y-4">
          {principles.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{
                    background: `linear-gradient(135deg, ${p.color}${'06'}, transparent)`,
                  }}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500"
                    style={{
                      background: `${p.color}15`,
                      border: `1px solid ${p.color}25`,
                    }}
                  >
                    <Icon size={18} style={{ color: p.color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-indigo-400/50">
                        0{i + 1}
                      </span>
                      <span className="w-6 h-px bg-gradient-to-r from-indigo-400/30 to-transparent" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-indigo-200 transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-sm text-white/40 mt-1.5 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
