'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

interface ProcessTimelineProps {
  label?: string
  title?: string
  description?: string
  steps: { title: string; description?: string }[]
}

export default function ProcessTimeline({ label, title = 'Development Process', description, steps }: ProcessTimelineProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_50%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <Container>
        <SectionHeading
          label={label ?? ''}
          title={title}
          description={description ?? ''}
        />
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="relative">
          <div className="absolute left-[60px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-indigo-500/20 to-transparent" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative flex items-start gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Big number on the left */}
                <div className="relative z-10 flex flex-col items-center w-12 shrink-0">
                  <span className="text-[2.5rem] font-bold leading-none text-indigo-500/15 select-none">
                    {i + 1}
                  </span>
                  <div className="mt-1 w-[10px] h-[10px] rounded-full bg-indigo-500/30 border-2 border-indigo-400/60" />
                </div>

                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  {step.description && (
                    <p className="text-sm text-white/50 mt-1 leading-relaxed">{step.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </Container>
    </section>
  )
}
