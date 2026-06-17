'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { projects } from '@/constants'

export default function Works() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(255,255,255,0.015),transparent)] pointer-events-none" />
      <Container>
        <SectionHeading
          label="Our Work"
          title="Selected Projects"
          description="Each project represents a partnership built on trust, creativity, and measurable results."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.1, 0.25, 1] as const,
              }}
            >
              {/* Placeholder image area */}
              <div className="aspect-[16/10] bg-gradient-to-br from-white/[0.04] to-white/[0.01] flex items-center justify-center">
                <span className="text-4xl font-bold text-white/[0.04] select-none">
                  {project.category === 'SaaS Platform'
                    ? 'SD'
                    : project.category === 'E-Commerce'
                      ? 'LR'
                      : 'FP'}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <span className="inline-block text-xs font-medium tracking-wider text-white/30 uppercase mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  {project.results.map((r) => (
                    <div
                      key={r}
                      className="flex items-center gap-2 text-sm text-white/40"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                      {r}
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-white/30 group-hover:text-white/60 transition-colors duration-300">
                  View Case Study
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
