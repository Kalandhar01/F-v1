'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Button from '@/components/ui/Button'
import { ArrowRight, ChevronDown, TrendingUp, Target, BarChart3, Users } from 'lucide-react'

const floatingMetrics = [
  { icon: TrendingUp, value: '52%', label: 'Avg. ROI Increase', color: '#34A853', x: '5%', y: '20%' },
  { icon: Target, value: '3x', label: 'Lead Generation', color: '#4285F4', x: '85%', y: '15%' },
  { icon: BarChart3, value: '200+', label: 'Campaigns Run', color: '#FBBC04', x: '90%', y: '60%' },
  { icon: Users, value: '50+', label: 'Clients Served', color: '#833AB4', x: '3%', y: '65%' },
]

const trustBadges = ['Google Ads Partner', 'Meta Business Partner', 'SEMrush Certified']

const easeOut = [0.25, 0.1, 0.25, 1] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
}

export default function DigitalMarketingHero() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
      <div className="flex-1 flex items-center justify-center pt-28 pb-16 md:py-0">
        {/* Background layers */}
        <div className="absolute inset-0 bg-black" />

        {/* Gradient mesh */}
        <div className="absolute top-1/4 left-[5%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] rounded-full bg-purple-500/8 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_50%,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

        {/* Floating metric badges */}
        {floatingMetrics.map((metric, i) => {
          const Icon = metric.icon
          return (
            <motion.div
              key={metric.label}
              className="hidden lg:flex absolute items-center gap-3 rounded-2xl border px-4 py-3 backdrop-blur-xl pointer-events-none"
              style={{
                left: metric.x,
                top: metric.y,
                backgroundColor: `${metric.color}10`,
                borderColor: `${metric.color}20`,
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 + i * 0.25, ease: easeOut }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${metric.color}18` }}
              >
                <Icon size={16} style={{ color: metric.color }} />
              </div>
              <div>
                <div className="text-lg font-bold text-white leading-none">{metric.value}</div>
                <div className="text-[9px] font-medium tracking-[0.1em] uppercase text-white/40 mt-0.5">{metric.label}</div>
              </div>
            </motion.div>
          )
        })}

        {/* Status badge top right */}
        <motion.div
          className="hidden lg:flex absolute top-8 right-8 items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 backdrop-blur-xl pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))' }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium text-white/60">Available for new projects</span>
        </motion.div>

        {/* Main content */}
        <motion.div
          ref={ref}
          className="relative z-10 w-full md:max-w-5xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12 text-center flex flex-col items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Label */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-8">
            <span className="w-10 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/8 px-4 py-1.5 text-xs font-medium tracking-[0.15em] uppercase text-indigo-300/80">
              Digital Marketing Agency
            </span>
            <span className="w-10 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
          </motion.div>

          {/* Main headline */}
          <motion.h1 variants={itemVariants} className="relative z-[100] w-full">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.92] md:leading-[0.95]">
              <span className="text-white">Data-Driven </span>
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Growth
              </span>
              <br />
              <span className="text-white">That Scales Your Business</span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="mt-6 w-full max-w-2xl mx-auto text-center text-base sm:text-lg text-white/50 leading-relaxed">
            From SEO and paid ads to social media and content marketing — we build 
            <span className="text-white/70"> measurable growth systems</span> that attract, convert, and retain your ideal customers.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Button href="/#contact" size="lg" className="w-full sm:w-auto h-14 text-base">
              Grow Your Business
              <ArrowRight size={16} />
            </Button>
            <Button href="/#contact" size="lg" variant="secondary" className="w-full sm:w-auto h-14 text-base">
              Book Consultation
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] px-3.5 py-1.5 text-[11px] font-medium text-white/40 tracking-wide"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50" />
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div variants={itemVariants} className="mt-12 w-full max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { value: '100+', label: 'Campaigns' },
                { value: '50+', label: 'Clients' },
                { value: '500K+', label: 'Reach' },
                { value: '95%', label: 'Satisfaction' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1 + i * 0.1, ease: easeOut }}
                  className="rounded-xl border border-white/[0.06] py-3 px-2 text-center backdrop-blur-sm"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.005))' }}
                >
                  <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] font-medium tracking-[0.1em] text-white/30 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.7, ease: easeOut }}
      >
        <span className="text-[0.55rem] font-medium tracking-[0.2em] uppercase text-white/20">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={14} className="text-white/20" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
    </section>
  )
}
