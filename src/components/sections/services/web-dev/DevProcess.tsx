'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  { title: 'Discover', desc: 'We analyze your business goals, target audience, and technical requirements.', icon: '🔍' },
  { title: 'Research', desc: 'We research competitors, market trends, and technology options to find the best approach.', icon: '📚' },
  { title: 'UI/UX Design', desc: 'We craft intuitive interfaces with modern design principles and seamless interactions.', icon: '🎨' },
  { title: 'Development', desc: 'We build your product using cutting-edge technology with clean, maintainable code.', icon: '⚡' },
  { title: 'Testing', desc: 'We rigorously test for performance, security, accessibility, and compatibility.', icon: '🧪' },
  { title: 'Deployment', desc: 'We deploy with CI/CD pipelines, monitoring, and ongoing optimization.', icon: '🚀' },
]

export default function DevProcess() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <Container>
        <SectionHeading
          label="Our Process"
          title="Development Process"
          description="A proven methodology that delivers exceptional results, from concept to launch."
        />

        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/30 via-indigo-500/10 to-transparent -translate-x-1/2" />

          <div className="relative space-y-8 lg:space-y-16">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={step.title}
                  className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-0"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Content card */}
                  <div className={`w-full lg:w-[calc(50%-2rem)] ${isLeft ? 'lg:pr-0 lg:text-right' : 'lg:pl-0 lg:order-3'}`}>
                    <div className={`inline-block w-full max-w-lg ${!isLeft && 'lg:text-left'}`}>
                      <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Big number on the left for odd steps, right for even */}
                        <div className={`absolute top-0 -translate-y-1/2 hidden lg:block ${isLeft ? '-left-6' : '-right-6'}`}>
                          <span className="text-[4rem] font-bold leading-none text-indigo-500/10 select-none">
                            {i + 1}
                          </span>
                        </div>

                        <div className={`relative flex items-start gap-4 ${!isLeft && 'lg:flex-row-reverse'}`}>
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-indigo-500/10 border border-indigo-400/20 group-hover:bg-indigo-500/20 group-hover:border-indigo-400/30 transition-all duration-500">
                            {step.icon}
                          </div>

                          <div className={`min-w-0 flex-1 ${!isLeft && 'lg:text-right'}`}>
                            <div className={`flex items-center gap-2 mb-1.5 ${!isLeft ? 'lg:flex-row-reverse' : ''}`}>
                              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-400/50">
                                Step {String(i + 1).padStart(2, '0')}
                              </span>
                              <span className="w-6 h-px bg-gradient-to-r from-indigo-400/30 to-transparent" />
                            </div>
                            <h3 className="text-lg font-semibold text-white group-hover:text-indigo-200 transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-sm text-white/40 mt-1.5 leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden lg:block w-[calc(50%-2rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
