'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Zap, Shield, Target, HeadphonesIcon, Lightbulb, Rocket, BarChart3, Users,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-us" className="relative py-12 sm:py-16 min-h-[900px] sm:min-h-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,255,255,0.01),transparent)] pointer-events-none" />

      <div className="hidden sm:block absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <Container>
        <SectionHeading
          label="Why Choose Us"
          title="Built for Impact"
          description="We combine creative excellence with technical rigor to deliver results that matter."
          className="mb-6 sm:mb-10"
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-xs text-white/40 mb-4">
              <Lightbulb size={12} className="text-indigo-400" />
              Our Philosophy
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              We treat your
              <span className="block bg-gradient-to-r from-indigo-300 via-white to-white/60 bg-clip-text text-transparent">
                business like our own.
              </span>
            </h3>
            <p className="text-base text-white/50 leading-relaxed mb-4">
              Every decision we make is measured by one metric — does it move the needle for you? From product strategy to pixel-perfect execution, we bring the same ownership and urgency we&apos;d expect for ourselves.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Rocket, label: 'Strategy First' },
                { icon: BarChart3, label: 'Data Informed' },
                { icon: Users, label: 'Partnership Mindset' },
              ].map((t) => {
                const Icon = t.icon
                return (
                  <span
                    key={t.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-white/40"
                  >
                    <Icon size={12} className="text-white/30" />
                    {t.label}
                  </span>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {[
              { icon: Zap, title: 'Speed to Market', desc: 'MVP in weeks, not months. Iterate fast, learn faster.' },
              { icon: Shield, title: 'Enterprise Grade', desc: 'Secure, scalable architecture that grows with you.' },
              { icon: Target, title: 'Precision Execution', desc: 'Every feature validated against real user data.' },
              { icon: HeadphonesIcon, title: '24/7 Support', desc: 'Dedicated PM and round-the-clock response.' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex gap-3 p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 ring-1 ring-white/5">
                    <Icon size={16} className="text-white/40" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-0.5">{item.title}</h4>
                    <p className="text-xs text-white/40">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
