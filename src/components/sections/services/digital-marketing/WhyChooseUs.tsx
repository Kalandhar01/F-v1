'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { Search, Share2, BarChart3, Target, FileText, Compass } from 'lucide-react'

const features = [
  { icon: Search, title: 'Search Engine Optimization', desc: 'Dominate search rankings with technical SEO, content optimization, and authority-building strategies that drive organic traffic.', color: '#34A853' },
  { icon: Share2, title: 'Social Media Marketing', desc: 'Build engaged communities across Instagram, LinkedIn, Facebook, and Twitter with data-driven content and ad strategies.', color: '#1877F2' },
  { icon: BarChart3, title: 'Google Ads & PPC', desc: 'Maximize ROI with targeted paid campaigns across search, display, and shopping networks, optimized for conversions.', color: '#FBBC04' },
  { icon: Target, title: 'Meta Ads Management', desc: 'Leverage Facebook and Instagram advertising with precise audience targeting, creative testing, and performance scaling.', color: '#833AB4' },
  { icon: FileText, title: 'Content Marketing', desc: 'Create compelling content that attracts, educates, and converts — from blog posts and whitepapers to video scripts.', color: '#FF6B6B' },
  { icon: Compass, title: 'Brand Positioning', desc: 'Differentiate your brand with strategic positioning, messaging frameworks, and visual identity that resonates with your audience.', color: '#14B8A6' },
]

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_-20%,rgba(99,102,241,0.06),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_80%_80%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          label="Why Choose Us"
          title="Grow Your Business Through Strategic Digital Marketing"
          description="We help businesses increase visibility, generate qualified leads, improve conversions, and build long-term digital growth through data-driven marketing strategies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon
            const isLarge = i === 0
            return (
              <motion.div
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border transition-all duration-700 ${isLarge ? 'lg:col-span-2 lg:row-span-1' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.025), rgba(255,255,255,0.008))',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
                  style={{
                    background: `radial-gradient(ellipse at 30% 20%, ${item.color}15, transparent 70%)`,
                  }}
                />
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-all duration-700"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.color}60, transparent)`,
                  }}
                />

                <div className="relative p-7 sm:p-8 lg:p-9 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                      style={{
                        backgroundColor: `${item.color}18`,
                        boxShadow: `0 0 0 0 ${item.color}10`,
                        transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                      }}
                    >
                      <Icon size={20} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-[10px] font-bold tracking-[0.15em] uppercase"
                        style={{ color: `${item.color}70` }}
                      >
                        Service
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-white truncate">{item.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-white/50 leading-relaxed flex-1">{item.desc}</p>

                  <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                    <span
                      className="text-xs font-medium transition-colors duration-300"
                      style={{ color: `${item.color}80` }}
                    >
                      Explore service
                    </span>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-400 group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: item.color }}>
                        <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-all duration-700"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.color}40, transparent)`,
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
