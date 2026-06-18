'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Timer, Cpu, Briefcase, TrendingUp } from 'lucide-react'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const iconColors = [
  { bg: 'from-sky-500/20 to-sky-500/5', color: '#38bdf8', border: 'border-sky-500/20' },
  { bg: 'from-amber-500/20 to-amber-500/5', color: '#f59e0b', border: 'border-amber-500/20' },
  { bg: 'from-violet-500/20 to-violet-500/5', color: '#8b5cf6', border: 'border-violet-500/20' },
  { bg: 'from-emerald-500/20 to-emerald-500/5', color: '#34d399', border: 'border-emerald-500/20' },
  { bg: 'from-rose-500/20 to-rose-500/5', color: '#f43f5e', border: 'border-rose-500/20' },
]

const cards = [
  { title: 'Clear Communication', desc: 'No jargon, no confusion. We keep you informed at every stage with plain-language updates.', icon: MessageCircle, span: false, colorIdx: 0 },
  { title: 'Fast Turnaround', desc: 'Agile sprints and efficient workflows mean your project launches on time — every time.', icon: Timer, span: false, colorIdx: 1 },
  { title: 'Modern Technology', desc: 'Built with the latest stack: Next.js, TypeScript, and cloud-native architecture for future-proof solutions.', icon: Cpu, span: 'md:col-span-2', colorIdx: 2 },
  { title: 'Business-Oriented', desc: 'Every decision ties back to your business goals. Design and code that drives real ROI.', icon: Briefcase, span: false, colorIdx: 3 },
  { title: 'Results-Driven', desc: 'We measure success by your metrics: traffic, conversions, revenue, and growth.', icon: TrendingUp, span: false, colorIdx: 4 },
]

export default function TrustCards() {
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
            WHY TRUST US
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Built on Trust
          </motion.h2>
          <motion.p
            className="mt-4 text-white/60 text-base max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Five principles that every client can count on.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon
            const cc = iconColors[card.colorIdx]
            return (
              <motion.div
                key={card.title}
                className={cn(
                  'group relative rounded-2xl border border-white/[0.06] p-6 sm:p-8 overflow-hidden',
                  card.span,
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
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

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.06), transparent 70%)' }}
                />

                <div className="relative flex gap-4 sm:gap-5">
                  <div className={cn(
                    'w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 bg-gradient-to-br',
                    cc.bg,
                    cc.border,
                  )}>
                    <Icon size={20} style={{ color: cc.color }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1.5 group-hover:text-indigo-200 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
