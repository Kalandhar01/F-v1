'use client'

import { useRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const techs = [
  { name: 'Next.js', slug: 'nextdotjs', color: '#ffffff' },
  { name: 'React', slug: 'react', color: '#61DAFB' },
  { name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
  { name: 'Node.js', slug: 'nodedotjs', color: '#339933' },
  { name: 'Express.js', slug: 'express', color: '#ffffff' },
  { name: 'MongoDB', slug: 'mongodb', color: '#47A248' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '#4169E1' },
  { name: 'AWS', slug: 'amazonwebservices', color: '#FF9900' },
  { name: 'Docker', slug: 'docker', color: '#2496ED' },
  { name: 'GitHub', slug: 'github', color: '#ffffff' },
  { name: 'Vercel', slug: 'vercel', color: '#ffffff' },
  { name: 'Tailwind', slug: 'tailwindcss', color: '#06B6D4' },
]

function TechIcon({ name }: { name: string }) {
  const tech = techs.find(t => t.name === name)
  if (!tech?.slug) return null
  return (
    <img
      src={`/icons/${tech.slug}.svg`}
      alt={name}
      className="w-full h-full object-contain"
    />
  )
}

const sizes = ['h-8 w-8', 'h-10 w-10', 'h-9 w-9', 'h-11 w-11', 'h-8 w-8', 'h-10 w-10', 'h-9 w-9', 'h-11 w-11', 'h-8 w-8', 'h-10 w-10', 'h-9 w-9', 'h-8 w-8']

export default function TechEcosystem() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const chips = useMemo(() => techs.map((t, i) => {
    // Generate pseudo-random values based on index to satisfy React purity rules
    const pseudoRandom1 = (i * 13 % 10) / 10
    const pseudoRandom2 = (i * 17 % 10) / 10
    const pseudoRandom3 = (i * 19 % 10) / 10
    
    return {
      ...t,
      size: sizes[i],
      floatY: 2 + pseudoRandom1 * 4,
      floatDuration: 3 + pseudoRandom2 * 2,
      delay: pseudoRandom3 * 2,
    }
  }), [])

  return (
    <section className="relative pt-48 pb-24 sm:pt-56 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_25%_at_50%_50%,rgba(99,102,241,0.04),transparent)] pointer-events-none" />
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          label="Tech Stack"
          title="Technology Ecosystem"
          description="We build using industry-leading technologies."
        />

        <div className="relative flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6 max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(99,102,241,0.06),transparent_70%)] pointer-events-none" />
          {chips.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? {
                opacity: 1, scale: 1, y: 0,
                transition: { duration: 0.5, delay: i * 0.06 },
              } : { opacity: 0, scale: 0.8, y: 20 }}
            >
              <motion.div
                className="group cursor-default"
                animate={isInView ? {
                  y: [0, -tech.floatY, 0],
                  transition: {
                    duration: tech.floatDuration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: tech.delay,
                  },
                } : {}}
                whileHover={{ scale: 1.12, transition: { duration: 0.2 } }}
              >
                <div
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.06)',
                  }}
                >
                  <span className={tech.size}>
                    <TechIcon name={tech.name} />
                  </span>
                  <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
