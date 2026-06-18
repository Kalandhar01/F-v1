'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { Zap, Layers, Search, Shield, Eye, RefreshCw } from 'lucide-react'

const comparisons = [
  { metric: 'Performance', icon: Zap, traditional: 'Slow load times, bloated code', ours: 'Lighthouse 95+ with optimized Core Web Vitals' },
  { metric: 'Scalability', icon: Layers, traditional: 'Fixed infrastructure, manual scaling', ours: 'Auto-scaling cloud architecture built for growth' },
  { metric: 'SEO', icon: Search, traditional: 'Basic meta tags, no structured data', ours: 'Semantic HTML, JSON-LD, sitemaps, metadata optimization' },
  { metric: 'Security', icon: Shield, traditional: 'Basic HTTPS, no protection layers', ours: 'XSS/CSRF protection, CSP headers, encrypted data' },
  { metric: 'Accessibility', icon: Eye, traditional: 'No WCAG compliance', ours: 'WCAG 2.1 AA compliant with keyboard navigation' },
  { metric: 'Maintainability', icon: RefreshCw, traditional: 'Spaghetti code, no documentation', ours: 'Clean architecture, typed code, comprehensive docs' },
]

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
          title="Why Choose Our Development"
          description="We don't just build websites — we engineer high-performance digital products."
        />

        <div className="space-y-4">
          {comparisons.map((item, i) => {
            const Icon = item.icon
            const isHovered = hoveredIndex === i

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
                    background: isHovered ? 'rgba(255,255,255,0.025)' : 'rgba(255,255,255,0.01)',
                    borderColor: isHovered ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.04)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-indigo-500/10 border border-indigo-400/15">
                      <Icon size={16} className="text-indigo-400" />
                    </div>
                    <span className="text-sm font-semibold text-white/80">{item.metric}</span>
                    <div className="flex-1" />
                    <span className="inline sm:inline text-[10px] font-bold tracking-wider uppercase text-red-400/40">Old</span>
                    <span className="inline sm:inline text-[10px] font-bold tracking-wider uppercase text-indigo-400/60 ml-4">New</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative rounded-xl px-4 py-3 overflow-hidden" style={{ background: 'rgba(239,68,68,0.03)', border: '1px solid rgba(239,68,68,0.08)' }}>
                      <div
                        className="absolute inset-0 transition-opacity duration-500"
                        style={{
                          background: 'linear-gradient(90deg, rgba(239,68,68,0.06), transparent)',
                          opacity: isHovered ? 1 : 0,
                        }}
                      />
                      <div className="relative flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-red-400/50 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
                        <span className="text-xs text-white/40 leading-relaxed">{item.traditional}</span>
                      </div>
                    </div>

                    <div className="relative rounded-xl px-4 py-3 overflow-hidden" style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.12)' }}>
                      <div
                        className="absolute inset-0 transition-opacity duration-500"
                        style={{
                          background: 'linear-gradient(90deg, rgba(99,102,241,0.08), transparent)',
                          opacity: isHovered ? 1 : 0,
                        }}
                      />
                      <div className="relative flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
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
