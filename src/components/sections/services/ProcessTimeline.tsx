'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { Search, Palette, Code, FlaskConical, Rocket, LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Search, Palette, Code, FlaskConical, Rocket,
}

interface ProcessTimelineProps {
  label?: string
  title?: string
  description?: string
  steps: { title: string; description?: string; icon?: string }[]
}

export default function ProcessTimeline({ label, title = 'Development Process', description, steps }: ProcessTimelineProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_50%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      <div className="absolute top-1/4 left-[5%] w-64 h-64 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-72 h-72 rounded-full bg-purple-500/4 blur-[120px] pointer-events-none" />

      <Container>
        <SectionHeading
          label={label ?? ''}
          title={title}
          description={description ?? ''}
        />
        <div ref={ref} className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-[18px] sm:left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-indigo-500/15 to-transparent" />
            <div className="absolute left-[18px] sm:left-[22px] top-0 w-1 h-0 bg-gradient-to-b from-indigo-400/30 to-transparent rounded-full"
              style={{ height: isInView ? '100%' : '0%', transition: 'height 1.5s ease-out' }}
            />

            <div className="space-y-8 sm:space-y-10">
              {steps.map((step, i) => {
                const Icon = step.icon ? iconMap[step.icon] : null
                return (
                  <motion.div
                    key={step.title}
                    className="relative flex items-start gap-4 sm:gap-6 group/step"
                    initial={{ opacity: 0, x: -15 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 flex flex-col items-center flex-shrink-0 pt-0.5">
                      <div className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-full border-2 border-indigo-400/50 bg-indigo-500/25 group-hover/step:border-indigo-400/80 group-hover/step:bg-indigo-500/45 transition-all duration-300" />
                      <div className="absolute inset-0 rounded-full bg-indigo-400/15 blur-md opacity-0 group-hover/step:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="group relative rounded-xl sm:rounded-2xl border border-white/[0.06] p-4 sm:p-5 transition-all duration-500 hover:border-indigo-500/20 active:scale-[0.98]"
                        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))' }}
                      >
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br" />
                        <div className="relative flex items-start gap-3">
                          {Icon && (
                            <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center bg-indigo-500/10 border border-indigo-400/15 group-hover:bg-indigo-500/20 group-hover:border-indigo-400/25 transition-all duration-500">
                              <Icon size={15} className="text-indigo-400" />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-indigo-400/40">
                              Step {String(i + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-indigo-200 transition-colors duration-300 mt-0.5">{step.title}</h3>
                            {step.description && (
                              <p className="text-xs sm:text-sm text-white/50 mt-1 leading-relaxed">{step.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
