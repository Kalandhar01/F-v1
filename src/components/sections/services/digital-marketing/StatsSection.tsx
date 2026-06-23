'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '100+', label: 'Campaigns Managed', desc: 'Successful marketing campaigns delivered across industries.', color: '#6366F1' },
  { value: '50+', label: 'Business Clients', desc: 'Trusted by businesses from startups to enterprises.', color: '#14B8A6' },
  { value: '500K+', label: 'Audience Reach', desc: 'Combined audience impressions generated for our clients.', color: '#FBBC04' },
  { value: '95%', label: 'Client Satisfaction', desc: 'Of our clients would recommend our services to others.', color: '#34A853' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const easeOutCubic: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const statVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutCubic },
  },
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(99,102,241,0.05),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_80%_80%,rgba(99,102,241,0.02),transparent)] pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-indigo-300/70">
              Trusted Partner
            </span>
            <span className="w-8 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Why Businesses Partner With Us
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/50 max-w-xl mx-auto">
            Our track record speaks through the results we deliver for our clients every day.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              className="group relative rounded-3xl border p-8 sm:p-10 text-center overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.025), rgba(255,255,255,0.008))',
                borderColor: 'rgba(255,255,255,0.06)',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${stat.color}12, transparent 70%)`,
                }}
              />
              <div
                className="absolute top-0 left-[20%] right-[20%] h-[1px] opacity-0 group-hover:opacity-100 transition-all duration-700"
                style={{
                  background: `linear-gradient(90deg, transparent, ${stat.color}40, transparent)`,
                }}
              />

              <div className="relative">
                <motion.span
                  className="block text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </motion.span>
                <p className="mt-4 text-sm sm:text-base font-semibold text-white/80">{stat.label}</p>
                <p className="mt-2 text-xs text-white/40 leading-relaxed max-w-[200px] mx-auto">{stat.desc}</p>
              </div>

              {/* Decorative corner */}
              <div
                className="absolute top-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ color: `${stat.color}40` }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20 4L4 20M20 4H8M20 4V16" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
