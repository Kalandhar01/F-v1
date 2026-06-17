'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Target, Shield } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const values = [
  {
    icon: Sparkles,
    title: 'Our Vision',
    description:
      'To be the leading force in digital innovation, setting new standards for what web experiences can achieve.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'Empower businesses with transformative digital solutions that drive measurable growth and exceptional user experiences.',
  },
  {
    icon: Shield,
    title: 'Why Clients Choose Us',
    description:
      'We combine strategic thinking with technical excellence. Every project is backed by data-driven decisions and a commitment to quality.',
  },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="Who We Are"
          title="Crafting Digital Excellence"
          description="We are a team of strategists, designers, and engineers passionate about building products that make a difference."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.title}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.25, 0.1, 0.25, 1] as const,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-300">
                  <Icon size={22} className="text-white/70" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{v.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{v.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
