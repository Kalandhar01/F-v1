'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const items = [
  { icon: '📈', title: 'SEO Optimization', desc: 'Boost rankings with technical SEO, on-page optimization, and quality content strategies.', cols: 'md:col-span-1 md:row-span-1', gradient: 'from-indigo-500/10 via-transparent to-transparent' },
  { icon: '🎯', title: 'Google Ads', desc: 'High-ROI PPC campaigns targeting the right keywords, audiences, and demographics.', cols: 'md:col-span-2 md:row-span-1', gradient: 'from-indigo-500/10 via-transparent to-transparent' },
  { icon: '📱', title: 'Social Media Marketing', desc: 'Build brand presence across LinkedIn, Instagram, Facebook, and YouTube.', cols: 'md:col-span-1 md:row-span-2', gradient: 'from-indigo-500/10 via-purple-500/5 to-transparent' },
  { icon: '🚀', title: 'Lead Generation', desc: 'Qualified leads through targeted campaigns, optimized funnels, and strategic content.', cols: 'md:col-span-1 md:row-span-1', gradient: 'from-indigo-500/10 via-transparent to-transparent' },
  { icon: '📊', title: 'Analytics & Reporting', desc: 'Data-driven insights with detailed reporting on campaign performance and ROI.', cols: 'md:col-span-1 md:row-span-1', gradient: 'from-indigo-500/10 via-transparent to-transparent' },
  { icon: '✍️', title: 'Content Marketing', desc: 'Strategic content that educates, engages, and converts your target audience.', cols: 'md:col-span-1 md:row-span-1', gradient: 'from-indigo-500/10 via-transparent to-transparent' },
  { icon: '📧', title: 'Email Marketing', desc: 'Automated email campaigns with segmentation, personalization, and performance tracking.', cols: 'md:col-span-1 md:row-span-1', gradient: 'from-purple-500/10 via-transparent to-transparent' },
]

export default function GrowthServices() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight relative z-[100]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white">Digital Growth Services</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-white/50 text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Full-service marketing designed to drive traffic, generate leads, and maximize revenue.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[200px]">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] ${item.cols}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
              style={{
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.06), transparent 70%)' }}
              />
              <div className="relative p-6 sm:p-8 flex flex-col h-full">
                <span className="text-2xl sm:text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed flex-1">{item.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
