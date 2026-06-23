'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { Zap, Smartphone, Wifi, Shield, Palette, RefreshCw } from 'lucide-react'

const comparisons = [
  { metric: 'Performance', icon: Zap, traditional: 'Slow startup, janky animations, memory leaks', ours: 'Optimized 60fps with native threading and lazy loading' },
  { metric: 'UX & Navigation', icon: Smartphone, traditional: 'Clunky navigation, non-native gestures', ours: 'Native gestures, smooth transitions, platform-standard patterns' },
  { metric: 'Offline Support', icon: Wifi, traditional: 'No offline mode, entirely dependent on internet', ours: 'Offline-first with local caching and background sync' },
  { metric: 'Security', icon: Shield, traditional: 'Basic encryption, no secure storage', ours: 'AES-256 encryption, biometric auth, secure enclave storage' },
  { metric: 'Design System', icon: Palette, traditional: 'Inconsistent UI, no design tokens', ours: 'Platform-specific design (Material Design / HIG), consistent components' },
  { metric: 'Maintainability', icon: RefreshCw, traditional: 'Tightly coupled code, hard to update', ours: 'Clean architecture with MVVM, typed code, comprehensive docs' },
]

const scores: Record<string, { old: number; new: number }> = {
  'Performance': { old: 25, new: 95 },
  'UX & Navigation': { old: 20, new: 95 },
  'Offline Support': { old: 10, new: 90 },
  'Security': { old: 20, new: 95 },
  'Design System': { old: 15, new: 92 },
  'Maintainability': { old: 20, new: 90 },
}

export default function Comparison() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div ref={ref} className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          label="Our Standard"
          title="Why Choose Our App Development"
          description="We don't just build apps — we engineer high-performance mobile experiences."
        />

        <div className="space-y-3 sm:space-y-4">
          {comparisons.map((item, i) => {
            const Icon = item.icon
            const isHovered = hoveredIndex === i
            const score = scores[item.metric]

            return (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="rounded-2xl border p-4 sm:p-5 transition-all duration-300"
                  style={{
                    background: isHovered
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))'
                      : 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                    borderColor: isHovered ? 'rgba(99,102,241,0.25)' : 'rgba(255,255,255,0.04)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center border transition-all duration-300"
                      style={{
                        background: isHovered ? 'rgba(99,102,241,0.2)' : 'rgba(99,102,241,0.1)',
                        borderColor: isHovered ? 'rgba(99,102,241,0.3)' : 'rgba(99,102,241,0.15)',
                      }}
                    >
                      <Icon size={15} className="text-indigo-400" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-white/80">{item.metric}</span>
                    <div className="flex-1" />
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-red-500/10 text-red-400/50">Old</span>
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400/60">New</span>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 mb-3">
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(239,68,68,0.08)' }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, rgba(239,68,68,0.4), rgba(239,68,68,0.2))' }}
                        initial={{ width: '0%' }}
                        animate={isInView ? { width: `${score.old}%` } : { width: '0%' }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
                      />
                    </div>
                    <span className="text-xs font-mono text-red-400/40 w-8 text-right">{score.old}%</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 mb-3">
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(99,102,241,0.08)' }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.7), rgba(129,140,248,0.4))' }}
                        initial={{ width: '0%' }}
                        animate={isInView ? { width: `${score.new}%` } : { width: '0%' }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.08, ease: 'easeOut' }}
                      />
                    </div>
                    <span className="text-xs font-mono text-indigo-400/60 w-8 text-right">{score.new}%</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div className="relative rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 overflow-hidden" style={{ background: 'rgba(239,68,68,0.03)', border: '1px solid rgba(239,68,68,0.08)' }}>
                      <div
                        className="absolute inset-0 transition-opacity duration-500"
                        style={{
                          background: 'linear-gradient(90deg, rgba(239,68,68,0.06), transparent)',
                          opacity: isHovered ? 1 : 0,
                        }}
                      />
                      <div className="relative flex items-start gap-2.5">
                        <svg className="w-3.5 h-3.5 text-red-400/50 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
                        <span className="text-xs text-white/40 leading-relaxed">{item.traditional}</span>
                      </div>
                    </div>

                    <div className="relative rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 overflow-hidden" style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.12)' }}>
                      <div
                        className="absolute inset-0 transition-opacity duration-500"
                        style={{
                          background: 'linear-gradient(90deg, rgba(99,102,241,0.08), transparent)',
                          opacity: isHovered ? 1 : 0,
                        }}
                      />
                      <div className="relative flex items-start gap-2.5">
                        <svg className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                        <span className="text-xs text-white/80 leading-relaxed font-medium">{item.ours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
