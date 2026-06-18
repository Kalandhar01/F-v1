'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const stages = [
  { label: 'Traffic', desc: 'Drive qualified visitors through multi-channel acquisition', color: '#818cf8' },
  { label: 'Leads', desc: 'Convert visitors into leads with optimized landing pages', color: '#60a5fa' },
  { label: 'Conversions', desc: 'Nurture leads into paying customers', color: '#34d399' },
  { label: 'Customers', desc: 'Deliver exceptional experiences that drive loyalty', color: '#f472b6' },
  { label: 'Retention', desc: 'Keep customers engaged with ongoing value', color: '#c084fc' },
  { label: 'Scale', desc: 'Expand winning strategies to new markets', color: '#fbbf24' },
]

export default function GrowthFunnel() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_50%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />

      <Container>
        <SectionHeading
          label="Funnel"
          title="Growth Funnel"
          description="Data moving through an optimized pipeline — from first touch to loyal customer."
        />

        <div ref={ref} className="relative max-w-2xl mx-auto">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-indigo-500/20 via-indigo-500/10 to-transparent" />

          <svg className="absolute left-8 top-8 bottom-8 w-px overflow-visible pointer-events-none" preserveAspectRatio="none">
            <motion.line
              x1="0" y1="0"
              x2="0" y2="100%"
              stroke="#818cf8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 200"
              animate={isInView ? { strokeDashoffset: [-204, 0] } : { strokeDashoffset: 0 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: 0.5 }}
            />
          </svg>

          <div className="space-y-6">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.label}
                className="relative flex items-start gap-5 pl-0"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="relative z-10 flex items-center justify-center w-16 h-16 shrink-0">
                  <motion.div
                    className="absolute inset-0 rounded-full border-2"
                    style={{
                      borderColor: `${stage.color}30`,
                      background: `radial-gradient(circle, ${stage.color}12, transparent)`,
                    }}
                    initial={{ scale: 0.8 }}
                    animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full z-10"
                    style={{ background: stage.color }}
                    animate={isInView ? { scale: [1, 1.5, 1] } : {}}
                    transition={{ duration: 2, delay: i * 0.1 + 1, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div className="absolute -left-1 -top-1 text-[9px] font-mono font-bold" style={{ color: `${stage.color}60` }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="flex-1 min-w-0 pt-3">
                  <div
                    className="rounded-xl p-4 sm:p-5 border transition-all duration-300 hover:scale-[1.01]"
                    style={{
                      background: `linear-gradient(135deg, ${stage.color}06, transparent)`,
                      borderColor: `${stage.color}10`,
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-white">{stage.label}</h3>
                        <p className="text-xs sm:text-sm text-white/40 mt-0.5 leading-relaxed">{stage.desc}</p>
                      </div>
                      <div className="shrink-0 flex items-center gap-2">
                        <div className="h-1.5 rounded-full bg-white/[0.04] w-12 sm:w-16 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            initial={{ width: '0%' }}
                            animate={isInView ? { width: '100%' } : { width: '0%' }}
                            transition={{ duration: 1, delay: i * 0.1 + 0.3, ease: 'easeOut' }}
                            style={{ background: `linear-gradient(to right, ${stage.color}40, ${stage.color})` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
