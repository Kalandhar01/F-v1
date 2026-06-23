'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { Search, PenTool, Palette, Smartphone, BugPlay, Rocket } from 'lucide-react'

const steps = [
  { title: 'Discovery', desc: 'We analyze your business goals, target audience, and technical requirements for the mobile platform.', icon: Search },
  { title: 'UX Strategy', desc: 'We map user journeys, create wireframes, and define the information architecture.', icon: PenTool },
  { title: 'UI Design', desc: 'We craft pixel-perfect interfaces with native design guidelines and seamless interactions.', icon: Palette },
  { title: 'Development', desc: 'We build your app using React Native with clean, maintainable, and type-safe code.', icon: Smartphone },
  { title: 'QA & Testing', desc: 'We rigorously test across devices for performance, crash handling, and compatibility.', icon: BugPlay },
  { title: 'Deployment', desc: 'We deploy to App Store and Google Play with CI/CD pipelines and ongoing monitoring.', icon: Rocket },
]

export default function AppDevProcess() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      <div className="absolute top-1/3 left-[5%] w-64 h-64 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-72 h-72 rounded-full bg-purple-500/4 blur-[120px] pointer-events-none" />

      <Container>
        <SectionHeading
          label="Our Process"
          title="App Development Process"
          description="A proven methodology that delivers exceptional mobile experiences, from concept to launch."
        />

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 sm:left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-indigo-500/15 to-transparent lg:-translate-x-1/2" />
          <div className="absolute left-4 sm:left-6 lg:left-1/2 top-0 w-1 h-0 bg-gradient-to-b from-indigo-400/30 to-transparent rounded-full lg:-translate-x-[2px]"
            style={{ height: isInView ? '100%' : '0%', transition: 'height 1.5s ease-out' }}
          />

          <div className="relative space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0
              const Icon = step.icon

              return (
                <motion.div
                  key={step.title}
                  className="relative flex items-stretch pb-8 sm:pb-10 last:pb-0 group/step"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="relative flex lg:hidden items-start justify-center flex-shrink-0 pt-4 sm:pt-5">
                    <div className="w-3 h-3 rounded-full border-2 border-indigo-400/40 bg-indigo-500/20 flex-shrink-0 z-10 group-hover/step:border-indigo-400/70 group-hover/step:bg-indigo-500/40 transition-all duration-300" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-indigo-400/10 blur-sm opacity-0 group-hover/step:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="ml-3 sm:ml-4 flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-0">
                      <div className={`w-full lg:w-[calc(50%-1.5rem)] ${isLeft ? '' : 'lg:ml-auto lg:order-3'}`}>
                        <div className="group relative rounded-xl sm:rounded-2xl border border-white/[0.06] p-4 sm:p-5 transition-all duration-500 hover:border-indigo-500/20 active:scale-[0.98]"
                          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))' }}
                        >
                          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                          <div className="relative flex items-start gap-3">
                            <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-indigo-500/10 border border-indigo-400/15 group-hover:bg-indigo-500/20 group-hover:border-indigo-400/25 transition-all duration-500">
                              <Icon size={15} className="text-indigo-400 flex-shrink-0" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-indigo-400/40">
                                Step {String(i + 1).padStart(2, '0')}
                              </span>
                              <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-indigo-200 transition-colors duration-300 mt-0.5">
                                {step.title}
                              </h3>
                              <p className="text-xs sm:text-sm text-white/40 mt-1 leading-relaxed">{step.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-8 pt-0">
                        <div className="relative">
                          <div className="w-7 h-7 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center z-10 relative group-hover/step:bg-indigo-500/30 group-hover/step:border-indigo-400/50 transition-all duration-300">
                            <span className="text-[10px] font-bold text-indigo-400">{i + 1}</span>
                          </div>
                          <div className="absolute inset-0 rounded-full bg-indigo-400/20 blur-md opacity-0 group-hover/step:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>

                      <div className="hidden lg:block w-[calc(50%-1.5rem)]" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
