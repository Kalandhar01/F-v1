'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'

interface MetricCardProps {
  label: string
  value: string
  suffix: string
  icon: React.ReactNode
  color: string
  isInView: boolean
  delay: number
}

function AnimatedMetric({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return
    const duration = 1500
    const start = performance.now()
    function frame(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * value)
      setDisplay(current + suffix)
      if (progress < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [isInView, value, suffix])

  return <span className="tabular-nums">{display}</span>
}

function MetricCard({ label, value, suffix, icon, color, isInView, delay }: MetricCardProps) {
  const parsedValue = parseInt(value)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div
        className="relative rounded-2xl p-6 border transition-all duration-300 h-full group"
        style={{
          background: 'rgba(255,255,255,0.02)',
          borderColor: 'rgba(255,255,255,0.06)',
        }}
      >
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse at 50% 50%, ${color}08, transparent)` }}
        />
        <div className="relative space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl" style={{ color }}>{icon}</span>
            <span className="text-sm font-medium text-white/50">{label}</span>
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            <AnimatedMetric value={parsedValue} suffix={suffix} isInView={isInView} />
          </div>
          <div className="h-1 rounded-full bg-white/[0.04] overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              initial={{ width: '0%' }}
              animate={isInView ? { width: '100%' } : { width: '0%' }}
              transition={{ duration: 1.5, delay: delay + 0.3, ease: 'easeOut' }}
              style={{ background: `linear-gradient(to right, ${color}30, ${color})` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const metrics = [
  { label: 'Lighthouse Score', value: '95', suffix: '+', icon: <LightningIcon />, color: '#818cf8' },
  { label: 'Load Time', value: '2', suffix: 's', icon: <RocketIcon />, color: '#c084fc' },
  { label: 'Enterprise Security', value: '100', suffix: '%', icon: <ShieldIcon />, color: '#34d399' },
  { label: 'SEO Optimized', value: '100', suffix: '%', icon: <SearchIcon />, color: '#60a5fa' },
  { label: 'Responsive Design', value: '100', suffix: '%', icon: <DeviceIcon />, color: '#f472b6' },
  { label: 'Accessibility Focused', value: '98', suffix: 'A', icon: <AccessIcon />, color: '#fbbf24' },
]

function LightningIcon() {
  return <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
}

function RocketIcon() {
  return <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
}

function ShieldIcon() {
  return <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
}

function SearchIcon() {
  return <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
}

function DeviceIcon() {
  return <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
}

function AccessIcon() {
  return <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
}

export default function DevMetrics() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">Development Metrics</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} {...m} isInView={isInView} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
