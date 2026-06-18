'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

function getIcon(title: string) {
  switch (title) {
    case 'SEO Optimization':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
      )
    case 'Google Ads':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v7" /><circle cx="14.5" cy="14.5" r="2.5" />
        </svg>
      )
    case 'Meta Advertising':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 8h-4v8" /><path d="M10 12h6" />
        </svg>
      )
    case 'Content Marketing':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /><path d="M8 13h2" /><path d="M8 17h2" /><path d="M12 13h4" /><path d="M12 17h4" />
        </svg>
      )
    case 'Lead Generation':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case 'Email Marketing':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    case 'Analytics & Reporting':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
        </svg>
      )
    case 'Conversion Optimization':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /><path d="m15 5 3 3" />
        </svg>
      )
    default:
      return null
  }
}

const items = [
  { title: 'SEO Optimization', desc: 'Dominate search rankings with technical SEO, content strategy, and authority building.', color: '#34A853', span: 'lg:col-span-1 lg:row-span-1' },
  { title: 'Google Ads', desc: 'High-ROI PPC campaigns with precise targeting, smart bidding, and continuous optimization.', color: '#4285F4', span: 'lg:col-span-2 lg:row-span-1' },
  { title: 'Meta Advertising', desc: 'Scalable social campaigns across Facebook, Instagram, and Messenger.', color: '#1877F2', span: 'lg:col-span-1 lg:row-span-2' },
  { title: 'Content Marketing', desc: 'Strategic content that educates, engages, and converts your audience.', color: '#c084fc', span: 'lg:col-span-1 lg:row-span-1' },
  { title: 'Lead Generation', desc: 'Multi-channel lead capture with automated nurturing and qualification.', color: '#f472b6', span: 'lg:col-span-1 lg:row-span-1' },
  { title: 'Email Marketing', desc: 'Personalized campaigns with segmentation, automation, and performance tracking.', color: '#FF7A59', span: 'lg:col-span-1 lg:row-span-1' },
  { title: 'Analytics & Reporting', desc: 'Real-time dashboards with actionable insights and full-funnel attribution.', color: '#E37400', span: 'lg:col-span-1 lg:row-span-1' },
  { title: 'Conversion Optimization', desc: 'Data-driven CRO to maximize every visitor and reduce friction.', color: '#818cf8', span: 'lg:col-span-2 lg:row-span-1' },
]

export default function BentoGrid() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />

      <Container>
        <SectionHeading
          label="Services"
          title="Full-Scale Marketing Engine"
          description="Every channel, every tactic, every metric — orchestrated for maximum impact."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min lg:auto-rows-[200px]">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] ${item.span}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${item.color}08, transparent 70%)` }}
              />
              <div className="relative p-5 sm:p-6 flex flex-col h-full">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${item.color}15`,
                    color: item.color,
                    border: `1px solid ${item.color}20`,
                  }}
                >
                  {getIcon(item.title)}
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-indigo-200 transition-colors duration-300 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed flex-1">{item.desc}</p>
                <div className="mt-3 h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: `linear-gradient(to right, ${item.color}40, transparent)` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
