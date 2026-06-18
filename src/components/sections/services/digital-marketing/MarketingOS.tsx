'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, ClipboardPenLine, Settings2, BarChart3, Cog, Expand } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const phases = [
  { icon: Search, label: 'Research', desc: 'Market analysis, audience insights, and competitive intelligence.', color: '#818cf8' },
  { icon: ClipboardPenLine, label: 'Strategy', desc: 'Campaign architecture, channel selection, and budget allocation.', color: '#60a5fa' },
  { icon: Settings2, label: 'Campaign Setup', desc: 'Ad creative, landing pages, targeting, and tracking configuration.', color: '#34d399' },
  { icon: BarChart3, label: 'Optimization', desc: 'A/B testing, bid adjustments, and performance refinement.', color: '#f472b6' },
  { icon: Cog, label: 'Automation', desc: 'Rule-based triggers, smart bidding, and automated workflows.', color: '#c084fc' },
  { icon: Expand, label: 'Scaling', desc: 'Winning strategies amplified across channels and markets.', color: '#fbbf24' },
]

export default function MarketingOS() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(99,102,241,0.04),transparent)] pointer-events-none" />

      <Container>
        <SectionHeading
          label="System"
          title="Digital Marketing Operating System"
          description="An enterprise growth engine where every phase connects and compounds."
        />

        <div ref={ref} className="relative max-w-6xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="w-[600px] h-[600px] rounded-full opacity-[0.03]"
              style={{
                background: 'radial-gradient(circle, rgba(99,102,241,0.3), transparent 70%)',
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.06]">
            {phases.map((phase, i) => {
              const Icon = phase.icon
              return (
                <motion.div
                  key={phase.label}
                  className="relative group bg-[#050508] p-6 sm:p-8 transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${phase.color}08, transparent 70%)`,
                    }}
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${phase.color}, ${phase.color}dd)`,
                          boxShadow: `0 4px 16px ${phase.color}30`,
                        }}
                      >
                        <Icon size={16} className="text-white" />
                      </div>
                      <span
                        className="text-[10px] font-bold tracking-[0.15em] uppercase"
                        style={{ color: `${phase.color}60` }}
                      >
                        Phase {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-indigo-200 transition-colors duration-300 mb-2">
                      {phase.label}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">{phase.desc}</p>

                    <div className="mt-4 h-1 rounded-full bg-white/[0.04] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        initial={{ width: '0%' }}
                        animate={isInView ? { width: '100%' } : { width: '0%' }}
                        transition={{ duration: 1.2, delay: i * 0.08 + 0.3, ease: 'easeOut' }}
                        style={{ background: `linear-gradient(to right, ${phase.color}, ${phase.color}80)` }}
                      />
                    </div>

                    {i < phases.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <motion.div
                          className="w-6 h-6 rounded-full flex items-center justify-center"
                          style={{
                            background: `${phase.color}15`,
                            border: `1px solid ${phase.color}25`,
                          }}
                          animate={{ x: [0, 2, 0] }}
                          transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1 1L5 4L1 7" stroke={phase.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="mt-6 flex justify-center gap-1.5"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {phases.map((phase, i) => (
              <motion.div
                key={phase.label}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{ background: phase.color }}
                initial={{ width: 8 }}
                animate={isInView ? { width: [8, 16, 8] } : { width: 8 }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
