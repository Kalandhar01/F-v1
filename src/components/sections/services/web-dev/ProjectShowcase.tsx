'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'SaaS Analytics Dashboard',
    category: 'SaaS Platform',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    metrics: ['99.9% Uptime', '<100ms Response', '500K+ Users'],
    color: '#818cf8',
    gradient: 'from-indigo-500/20 via-indigo-500/5 to-transparent',
  },
  {
    title: 'Global E-Commerce Platform',
    category: 'E-Commerce',
    tags: ['React', 'Node.js', 'MongoDB', 'Docker'],
    metrics: ['$10M+ Revenue', '1M+ Products', '50K+ Orders/Month'],
    color: '#c084fc',
    gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
  },
  {
    title: 'Enterprise CMS Solution',
    category: 'Enterprise',
    tags: ['Next.js', 'TypeScript', 'AWS', 'PostgreSQL'],
    metrics: ['10K+ Pages', '2K+ Editors', '99.99% Uptime'],
    color: '#38bdf8',
    gradient: 'from-sky-500/20 via-sky-500/5 to-transparent',
  },
]

export default function ProjectShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_100%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionHeading
            label="Portfolio"
            title="Project Showcase"
            description="Real projects. Real results. See what we've built for our clients."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <div
                className="relative rounded-2xl overflow-hidden border transition-all duration-500 h-full"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
              >
                {/* Preview area */}
                <div className={`relative min-h-[120px] sm:h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-50" style={{
                    backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.03) 0%, transparent 50%)',
                  }} />
                  <div className="relative flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}>
                      <svg className="w-7 h-7" style={{ color: project.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-white/40">{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-indigo-200 transition-colors duration-300">{project.title}</h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs sm:text-[10px] font-medium px-2.5 py-1 rounded-full text-white/40 border border-white/[0.06] bg-white/[0.02]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="space-y-1.5 mb-5">
                    {project.metrics.map(metric => (
                      <div key={metric} className="flex items-center gap-2 text-xs text-white/40">
                        <span className="w-1 h-1 rounded-full" style={{ background: project.color }} />
                        {metric}
                      </div>
                    ))}
                  </div>

                  <Button href="/#contact" variant="ghost" size="md" className="group/btn">
                    View Case Study
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
