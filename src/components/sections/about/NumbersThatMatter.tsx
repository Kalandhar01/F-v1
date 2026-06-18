'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Star, Clock, Headphones } from 'lucide-react'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const iconColors = [
  { bg: 'from-blue-500/20 to-blue-500/5', color: '#60a5fa', border: 'border-blue-500/20' },
  { bg: 'from-amber-500/20 to-amber-500/5', color: '#f59e0b', border: 'border-amber-500/20' },
  { bg: 'from-emerald-500/20 to-emerald-500/5', color: '#34d399', border: 'border-emerald-500/20' },
  { bg: 'from-purple-500/20 to-purple-500/5', color: '#a78bfa', border: 'border-purple-500/20' },
]

const metrics = [
  { value: 10, suffix: '+', label: 'Projects Delivered', desc: 'From startups to enterprises', icon: Briefcase, colorIdx: 0 },
  { value: 98, suffix: '%', label: 'Client Satisfaction', desc: 'Across all projects', icon: Star, colorIdx: 1 },
  { value: 3, suffix: '+', label: 'Years Learning & Building', desc: 'Since day one', icon: Clock, colorIdx: 2 },
  { value: 24, suffix: '/7', label: 'Support', desc: 'Always here when you need us', icon: Headphones, colorIdx: 3 },
]

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  return (
    <span className="tabular-nums">
      {isInView ? <CountingNumber value={value} suffix={suffix} /> : <span>0{suffix}</span>}
    </span>
  )
}

function CountingNumber({ value, suffix }: { value: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return

    const duration = 1500
    const start = performance.now()
    let frameId: number

    function frame(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * value)
      if (node) node.textContent = current + suffix
      if (progress < 1) frameId = requestAnimationFrame(frame)
    }

    frameId = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(frameId)
  }, [value, suffix])

  return <span ref={nodeRef}>0{suffix}</span>
}

export default function NumbersThatMatter() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <Container>
        <div className="mb-16 text-center">
          <motion.span
            className="text-xs font-medium tracking-[0.25em] uppercase text-indigo-300/70"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            BY THE NUMBERS
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Numbers That Matter
          </motion.h2>
          <motion.p
            className="mt-4 text-white/60 text-base max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Proven results that speak for themselves.
          </motion.p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {metrics.map((m, i) => {
            const Icon = m.icon
            const ic = iconColors[m.colorIdx]
            return (
              <motion.div
                key={m.label}
                className="group relative rounded-2xl border border-white/[0.06] p-6 sm:p-8 text-center overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <motion.div
                  className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(129,140,248,0.15), transparent, rgba(99,102,241,0.08))',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                    padding: '1px',
                  }}
                />

                <motion.div
                  className="absolute -inset-[0.5px] rounded-2xl opacity-30 pointer-events-none"
                  animate={isInView ? {
                    boxShadow: [
                      '0 0 15px rgba(99,102,241,0.06), inset 0 0 20px rgba(99,102,241,0.03)',
                      '0 0 30px rgba(99,102,241,0.14), inset 0 0 30px rgba(99,102,241,0.06)',
                      '0 0 15px rgba(99,102,241,0.06), inset 0 0 20px rgba(99,102,241,0.03)',
                    ],
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                />

                <div className="relative">
                  <div className={cn(
                    'w-12 h-12 rounded-xl border flex items-center justify-center mx-auto mb-4 bg-gradient-to-br',
                    ic.bg,
                    ic.border,
                  )}>
                    <Icon size={20} style={{ color: ic.color }} />
                  </div>

                  <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                    <AnimatedCounter value={m.value} suffix={m.suffix} isInView={isInView} />
                  </div>

                  <h3 className="text-base font-semibold text-white/90 mb-1">{m.label}</h3>
                  <p className="text-sm text-white/40">{m.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
