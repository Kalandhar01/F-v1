'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { Search, ClipboardList, PlayCircle, RotateCcw, LineChart } from 'lucide-react'

const steps = [
  { title: 'Business Discovery', desc: 'We audit your current marketing, analyze competitors, identify target audiences, and define clear KPIs aligned with your business goals.', icon: Search, color: '#6366F1', gradient: 'from-indigo-500/10 via-indigo-500/5 to-transparent' },
  { title: 'Strategy Planning', desc: 'We build a custom roadmap combining the right channels, budgets, creatives, and messaging to reach your ideal customers efficiently.', icon: ClipboardList, color: '#14B8A6', gradient: 'from-teal-500/10 via-teal-500/5 to-transparent' },
  { title: 'Campaign Execution', desc: 'We launch and manage campaigns across selected channels — from ad creative production and audience setup to landing page optimization.', icon: PlayCircle, color: '#34A853', gradient: 'from-green-500/10 via-green-500/5 to-transparent' },
  { title: 'Optimization', desc: 'We continuously refine campaigns through A/B testing, audience adjustments, bid optimization, and creative refreshes to improve performance.', icon: RotateCcw, color: '#FBBC04', gradient: 'from-yellow-500/10 via-yellow-500/5 to-transparent' },
  { title: 'Performance Reporting', desc: 'We deliver transparent weekly reports with actionable insights, ROAS analysis, and strategic recommendations for the next growth phase.', icon: LineChart, color: '#4285F4', gradient: 'from-blue-500/10 via-blue-500/5 to-transparent' },
]

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_35%_at_50%_0%,rgba(99,102,241,0.04),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_25%_at_80%_80%,rgba(99,102,241,0.02),transparent)] pointer-events-none" />

      <Container>
        <SectionHeading
          label="Our Process"
          title="How We Deliver Results"
          description="A proven five-step methodology that transforms marketing goals into measurable business growth."
        />

        <div ref={ref} className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-[60px] lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent -translate-x-1/2" />

          <div className="relative space-y-10 lg:space-y-20">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0
              const Icon = step.icon

              return (
                <motion.div
                  key={step.title}
                  className="relative flex flex-col lg:flex-row items-start gap-6 lg:gap-0"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Timeline dot (always visible on mobile, desktop alternates) */}
                  <div
                    className="relative z-10 flex-shrink-0 w-[48px] h-[48px] rounded-2xl flex items-center justify-center transition-all duration-500 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
                    style={{
                      backgroundColor: `${step.color}20`,
                      border: `1px solid ${step.color}40`,
                      boxShadow: `0 0 20px ${step.color}20`,
                    }}
                  >
                    <span
                      className="text-sm font-bold"
                      style={{ color: step.color }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 lg:w-[calc(50%-3rem)] ${isLeft ? 'lg:pr-12 lg:text-right lg:order-1' : 'lg:pl-12 lg:order-3 lg:ml-auto'}`}>
                    <div className={`${!isLeft ? 'lg:text-left' : ''}`}>
                      <div
                        className="group relative rounded-3xl border p-7 sm:p-8 transition-all duration-700 hover:-translate-y-1 overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}08, rgba(255,255,255,0.02))`,
                          borderColor: 'rgba(255,255,255,0.06)',
                        }}
                      >
                        {/* Hover glow */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                          style={{
                            background: `radial-gradient(ellipse at ${isLeft ? '80%' : '20%'} 30%, ${step.color}10, transparent 70%)`,
                          }}
                        />

                        {/* Top accent */}
                        <div
                          className="absolute top-0 left-[15%] right-[15%] h-[1px] opacity-0 group-hover:opacity-100 transition-all duration-700"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${step.color}40, transparent)`,
                          }}
                        />

                        <div className={`relative flex items-start gap-5 ${!isLeft ? 'lg:flex-row-reverse' : ''}`}>
                          <div
                            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-105"
                            style={{
                              backgroundColor: `${step.color}15`,
                              border: `1px solid ${step.color}25`,
                            }}
                          >
                            <Icon size={20} style={{ color: step.color }} />
                          </div>

                          <div className={`min-w-0 flex-1 ${!isLeft ? 'lg:text-right' : ''}`}>
                            <div className={`flex items-center gap-2 mb-2 ${!isLeft ? 'lg:flex-row-reverse' : ''}`}>
                              <span
                                className="text-[10px] font-bold tracking-[0.2em] uppercase"
                                style={{ color: `${step.color}60` }}
                              >
                                Step {String(i + 1).padStart(2, '0')}
                              </span>
                              <span className={`w-6 h-px ${isLeft ? 'bg-gradient-to-r from-white/[0.08] to-transparent' : 'bg-gradient-to-l from-white/[0.08] to-transparent'}`} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-sm text-white/45 leading-relaxed">{step.desc}</p>
                          </div>
                        </div>

                        {/* Bottom accent */}
                        <div
                          className="absolute bottom-0 left-[15%] right-[15%] h-[1px] opacity-0 group-hover:opacity-100 transition-all duration-700"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${step.color}30, transparent)`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-[calc(50%-3rem)] order-2" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
