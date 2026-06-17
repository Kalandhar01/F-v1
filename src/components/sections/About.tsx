'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Target, Shield, ArrowUpRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import CardSwap, { Card } from '@/components/CardSwap'
import CountUp from '@/components/ui/CountUp'

const values = [
  {
    icon: Sparkles,
    title: 'Our Vision',
    description:
      'To be the leading force in digital innovation, setting new standards for what web experiences can achieve.',
    gradient: 'from-purple-500/20 to-blue-500/5',
    borderGlow: 'group-hover:border-purple-500/30',
    accent: 'text-purple-300/70',
  },
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'Empower businesses with transformative digital solutions that drive measurable growth and exceptional user experiences.',
    gradient: 'from-blue-500/20 to-cyan-500/5',
    borderGlow: 'group-hover:border-blue-500/30',
    accent: 'text-blue-300/70',
  },
  {
    icon: Shield,
    title: 'Why Clients Choose Us',
    description:
      'We combine strategic thinking with technical excellence. Every project is backed by data-driven decisions and a commitment to quality.',
    gradient: 'from-indigo-500/20 to-purple-500/5',
    borderGlow: 'group-hover:border-indigo-500/30',
    accent: 'text-indigo-300/70',
  },
]

const stats = [
  { value: '10+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '2+', label: 'Years Experience' },
  { value: '2', label: 'Team Members' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="relative py-24 sm:py-32 min-h-screen overflow-hidden">
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="space-y-8 sm:space-y-10">
              <SectionHeading
                label="Who We Are"
                title="Crafting Digital Excellence"
                description="We are a team of strategists, designers, and engineers passionate about building products that make a difference."
                align="left"
              />

              <div className="grid grid-cols-2 gap-5 sm:gap-6">
                {stats.map((s, i) => (
                  <div key={s.label} className="group">
                    <div className="text-3xl sm:text-4xl font-bold text-white/90 tracking-tight">
                      <CountUp value={s.value} duration={2.5} delay={i * 200} />
                    </div>
                    <div className="mt-1.5 text-sm text-white/40 group-hover:text-white/60 transition-colors duration-300">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 text-sm font-medium text-white/50 hover:text-white transition-colors duration-300 group mt-4"
              >
                <span className="w-8 h-px bg-white/20 group-hover:bg-white/60 transition-colors duration-300" />
                <span>Start a project</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative h-[400px] sm:h-[600px] w-full mt-8 sm:mt-0 lg:-mt-12 lg:-ml-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <CardSwap
              width={520}
              height={560}
              cardDistance={55}
              verticalDistance={65}
              delay={4500}
              pauseOnHover
              skewAmount={4}
              easing="elastic"
            >
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <Card
                    key={v.title}
                    customClass={`bg-gradient-to-b ${v.gradient} bg-white/[0.03] p-10 sm:p-12 backdrop-blur-sm`}
                  >
                    <div className="flex flex-col h-full">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-white/[0.06] flex items-center justify-center mb-8 transition-all duration-500`}
                      >
                        <Icon size={24} className={`${v.accent}`} />
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                        {v.title}
                      </h3>

                      <p className="text-base sm:text-lg text-white/50 leading-relaxed flex-1">
                        {v.description}
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-sm text-white/30">
                        <span className="w-8 h-px bg-white/20" />
                        <span>Discover more</span>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </CardSwap>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
