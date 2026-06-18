'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

const cases = [
  {
    title: 'B2B SaaS Growth Campaign',
    category: 'SEO + Google Ads',
    platforms: ['Google Ads', 'Analytics', 'LinkedIn'],
    metrics: ['+240% Organic Traffic', '+180% Lead Generation', '4.5x ROAS'],
    color: '#818cf8',
    gradient: 'from-indigo-500/20 via-indigo-500/5 to-transparent',
  },
  {
    title: 'E-Commerce Brand Launch',
    category: 'Meta Ads + Email',
    platforms: ['Meta Ads', 'Instagram', 'Mailchimp'],
    metrics: ['+310% Engagement Rate', '+150% Conversion Rate', '6.2x ROAS'],
    color: '#c084fc',
    gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
  },
  {
    title: 'Enterprise Content Strategy',
    category: 'Content + SEO',
    platforms: ['Ahrefs', 'Search Console', 'HubSpot'],
    metrics: ['+190% Blog Traffic', '+120% Demo Requests', '3.8x Pipeline Growth'],
    color: '#34d399',
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
  },
]

export default function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_100%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight relative z-[100]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white">Case Studies</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-white/50 text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Real campaigns. Real results. See how we drive measurable growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <div
                className="relative rounded-2xl overflow-hidden border transition-all duration-500 h-full"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
              >
                <div className={`relative h-48 bg-gradient-to-br ${c.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-50" style={{
                    backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.03) 0%, transparent 50%)',
                  }} />
                  <div className="relative flex flex-col items-center gap-2">
                    <svg className="w-8 h-8" style={{ color: c.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                    <span className="text-xs font-medium text-white/40">{c.category}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-indigo-200 transition-colors duration-300">{c.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {c.platforms.map(p => (
                      <span key={p} className="text-[10px] font-medium px-2.5 py-1 rounded-full text-white/40 border border-white/[0.06] bg-white/[0.02]">
                        {p}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-1.5 mb-5">
                    {c.metrics.map(m => (
                      <div key={m} className="flex items-center gap-2 text-xs text-white/80 font-medium">
                        <span className="w-1 h-1 rounded-full" style={{ background: c.color }} />
                        {m}
                      </div>
                    ))}
                  </div>

                  <Button href="/#contact" variant="ghost" size="sm" className="group/btn">
                    View Full Case Study
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
