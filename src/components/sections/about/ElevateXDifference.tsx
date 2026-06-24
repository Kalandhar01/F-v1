'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Monitor, Zap, Clock, MessageCircle, HeartHandshake } from 'lucide-react'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'
import { BRAND } from '@/config/brand'

const cardColors = [
  { iconBg: 'from-blue-500/20 to-blue-500/5', iconColor: '#60a5fa', border: 'border-blue-500/20', glow: 'rgba(96,165,250,0.15)' },
  { iconBg: 'from-purple-500/20 to-purple-500/5', iconColor: '#a78bfa', border: 'border-purple-500/20', glow: 'rgba(167,139,250,0.15)' },
  { iconBg: 'from-emerald-500/20 to-emerald-500/5', iconColor: '#34d399', border: 'border-emerald-500/20', glow: 'rgba(52,211,153,0.15)' },
  { iconBg: 'from-amber-500/20 to-amber-500/5', iconColor: '#f59e0b', border: 'border-amber-500/20', glow: 'rgba(245,158,11,0.15)' },
  { iconBg: 'from-rose-500/20 to-rose-500/5', iconColor: '#f43f5e', border: 'border-rose-500/20', glow: 'rgba(244,63,94,0.15)' },
  { iconBg: 'from-indigo-500/20 to-indigo-500/5', iconColor: '#818cf8', border: 'border-indigo-500/20', glow: 'rgba(129,140,248,0.15)' },
]

const cards = [
  { title: 'Strategy First', desc: 'Every project begins with deep research and strategic planning to ensure every decision drives real business value.', size: 'md:col-span-1 md:row-span-1', gradient: 'from-blue-500/10 via-transparent to-transparent', icon: Lightbulb, colorIdx: 0 },
  { title: 'Pixel Perfect Execution', desc: 'Design precision down to the last pixel. Every interaction, animation, and transition is meticulously crafted.', size: 'md:col-span-2 md:row-span-1', gradient: 'from-purple-500/10 via-transparent to-transparent', icon: Monitor, colorIdx: 1 },
  { title: 'Performance Focused', desc: 'Sub-second load times, optimized Core Web Vitals, and Lighthouse scores that exceed industry benchmarks.', size: 'md:col-span-1 md:row-span-2', gradient: 'from-emerald-500/10 via-transparent to-transparent', icon: Zap, colorIdx: 2 },
  { title: 'Fast Delivery', desc: 'Agile workflows and efficient processes that deliver production-ready results in weeks, not months.', size: 'md:col-span-1 md:row-span-1', gradient: 'from-amber-500/10 via-transparent to-transparent', icon: Clock, colorIdx: 3 },
  { title: 'Transparent Communication', desc: 'Weekly updates, real-time dashboards, and direct access to your project team. No black box.', size: 'md:col-span-1 md:row-span-1', gradient: 'from-rose-500/10 via-transparent to-transparent', icon: MessageCircle, colorIdx: 4 },
  { title: 'Long-Term Partnership', desc: 'We build relationships, not just websites. Ongoing support, optimization, and growth partnership.', size: 'md:col-span-1 md:row-span-1', gradient: 'from-indigo-500/10 via-transparent to-transparent', icon: HeartHandshake, colorIdx: 5 },
]

export default function ElevateXDifference() {
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
            WHY {BRAND.name}
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The {BRAND.name} Difference
          </motion.h2>
          <motion.p
            className="mt-4 text-white/60 text-base max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What sets us apart — a commitment to quality, transparency, and results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[200px]">
          {cards.map((card, i) => {
            const Icon = card.icon
            const cc = cardColors[card.colorIdx]
            return (
              <motion.div
                key={card.title}
                className={cn(
                  'group relative overflow-hidden rounded-2xl border border-white/[0.06]',
                  card.size,
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div className={cn(
                  'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                  card.gradient,
                )} />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${cc.glow}, transparent 70%)` }}
                />
                <div className="relative p-6 sm:p-8 flex flex-col h-full">
                  <div className={cn(
                    'w-10 h-10 rounded-xl border flex items-center justify-center mb-3 transition-all duration-300 bg-gradient-to-br',
                    cc.iconBg,
                    cc.border,
                  )}>
                    <Icon size={18} style={{ color: cc.iconColor }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed flex-1">{card.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
