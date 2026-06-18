'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const campaigns = [
  { name: 'SaaS Growth Campaign', status: 'Active', spend: '$12,450', impressions: '245K', clicks: '8.2K', ctr: '3.35%', conv: '342', roas: '4.8x', color: '#818cf8' },
  { name: 'E-Commerce Q3 Launch', status: 'Active', spend: '$8,920', impressions: '189K', clicks: '6.1K', ctr: '3.23%', conv: '215', roas: '6.2x', color: '#34d399' },
  { name: 'Enterprise Brand Awareness', status: 'Active', spend: '$15,300', impressions: '420K', clicks: '11.3K', ctr: '2.69%', conv: '178', roas: '3.7x', color: '#60a5fa' },
]

const sources = [
  { name: 'Google Ads', percentage: 42, color: '#4285F4' },
  { name: 'Meta Ads', percentage: 28, color: '#1877F2' },
  { name: 'LinkedIn', percentage: 15, color: '#0A66C2' },
  { name: 'Organic', percentage: 10, color: '#34A853' },
  { name: 'Email', percentage: 5, color: '#FF7A59' },
]

export default function CampaignDashboard() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_100%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />

      <Container>
        <SectionHeading
          label="Analytics"
          title="Live Campaign Dashboard"
          description="Real-time performance data from active campaigns across all channels."
        />

        <div ref={ref} className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] overflow-hidden backdrop-blur-sm">
            <div className="p-4 sm:p-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-white/40">Live — 3 Active Campaigns</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.04]">
                    {['Campaign', 'Spend', 'Impressions', 'Clicks', 'CTR', 'Conversions', 'ROAS'].map((h, i) => (
                      <th key={h} className={`text-left px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-[10px] font-semibold tracking-[0.15em] uppercase text-white/30 ${i === 6 ? 'hidden sm:table-cell' : ''}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((c, i) => (
                    <motion.tr
                      key={c.name}
                      className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors duration-200"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <td className="px-2 sm:px-3 py-1.5 sm:py-2">
                        <div className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.color }} />
                          <span className="text-sm font-medium text-white/80">{c.name}</span>
                        </div>
                      </td>
                      <td className="px-2 sm:px-3 py-1.5 sm:py-2 text-white/60 font-mono text-xs">{c.spend}</td>
                      <td className="px-2 sm:px-3 py-1.5 sm:py-2 text-white/60 font-mono text-xs">{c.impressions}</td>
                      <td className="px-2 sm:px-3 py-1.5 sm:py-2 text-white/60 font-mono text-xs">{c.clicks}</td>
                      <td className="px-2 sm:px-3 py-1.5 sm:py-2 text-white/60 font-mono text-xs">{c.ctr}</td>
                      <td className="px-2 sm:px-3 py-1.5 sm:py-2 text-white/80 font-medium font-mono text-xs">{c.conv}</td>
                      <td className="px-2 sm:px-3 py-1.5 sm:py-2 hidden sm:table-cell">
                        <span className="text-xs font-semibold font-mono" style={{ color: c.color }}>{c.roas}</span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 sm:p-6 border-t border-white/[0.06]">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                <div className="flex-1">
                  <h4 className="text-xs sm:text-[10px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-3">Traffic Sources</h4>
                  <div className="space-y-2">
                    {sources.map(s => (
                      <motion.div
                        key={s.name}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, delay: 0.3 + sources.indexOf(s) * 0.05 }}
                      >
                        <span className="text-xs text-white/50 w-20 shrink-0">{s.name}</span>
                        <div className="flex-1 h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            initial={{ width: '0%' }}
                            animate={isInView ? { width: `${s.percentage}%` } : { width: '0%' }}
                            transition={{ duration: 1, delay: 0.5 + sources.indexOf(s) * 0.08, ease: 'easeOut' }}
                            style={{ background: s.color }}
                          />
                        </div>
                        <span className="text-xs font-mono text-white/40 w-8 text-right">{s.percentage}%</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="text-xs sm:text-[10px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-3">Audience Insights</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Avg. Session', value: '4m 32s' },
                      { label: 'Pages/Session', value: '3.8' },
                      { label: 'Bounce Rate', value: '32.1%' },
                      { label: 'New Users', value: '68.4%' },
                    ].map(insight => (
                      <div key={insight.label} className="rounded-xl border border-white/[0.04] bg-white/[0.01] px-3 py-2.5">
                        <div className="text-xs sm:text-[10px] text-white/30">{insight.label}</div>
                        <div className="text-sm font-semibold text-white/80 mt-0.5">{insight.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
