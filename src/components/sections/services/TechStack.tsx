'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

interface TechStackProps {
  title?: string
  items: string[]
}

const techSlugs: Record<string, string> = {
  'React Native': 'react',
  'Expo': 'expo',
  'TypeScript': 'typescript',
  'Node.js': 'nodedotjs',
  'MongoDB': 'mongodb',
  'Appwrite': 'appwrite',
  'Firebase': 'firebase',
  'PostgreSQL': 'postgresql',
  'GraphQL': 'graphql',
  'Stripe': 'stripe',
  'Docker': 'docker',
  'AWS': 'amazonwebservices',
}

const techColors: Record<string, string> = {
  'React Native': '#61DAFB',
  'Expo': '#000020',
  'TypeScript': '#3178C6',
  'Node.js': '#339933',
  'MongoDB': '#47A248',
  'Appwrite': '#FD366E',
  'Firebase': '#FFCA28',
  'PostgreSQL': '#4169E1',
  'GraphQL': '#E10098',
  'Stripe': '#008CDD',
  'Docker': '#2496ED',
  'AWS': '#FF9900',
}

export default function TechStack({ title = 'Technology Stack', items }: TechStackProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_100%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <Container>
        <SectionHeading
          label="Technologies"
          title={title}
          description="Modern tools and frameworks powering our mobile app development."
        />

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {items.map((item, i) => {
            const color = techColors[item] || '#6366f1'
            const slug = techSlugs[item]
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative"
              >
                <motion.div
                  animate={isInView ? {
                    y: [0, -6, 0],
                  } : {}}
                  transition={{
                    duration: 3 + (i % 3) * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.15,
                  }}
                  className="relative rounded-2xl border bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all duration-500"
                  style={{ borderColor: `${color}20` }}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div
                      className="w-14 h-14 rounded-xl bg-black/40 border flex items-center justify-center p-3 transition-all duration-500 group-hover:scale-110"
                      style={{ borderColor: `${color}25` }}
                    >
                      {slug ? (
                        <img
                          src={`/icons/${slug}.svg`}
                          alt={item}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="text-sm font-bold text-white">
                          {item.slice(0, 2)}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
