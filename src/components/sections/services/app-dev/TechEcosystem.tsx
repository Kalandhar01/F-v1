'use client'

import { useRef, useMemo, useState, type CSSProperties } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const techs = [
  { name: 'React Native', slug: 'react', color: '#61DAFB' },
  { name: 'Expo', slug: 'expo', color: '#000020' },
  { name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
  { name: 'Node.js', slug: 'nodedotjs', color: '#339933' },
  { name: 'Firebase', slug: 'firebase', color: '#FFCA28' },
  { name: 'Appwrite', slug: 'appwrite', color: '#FD366E' },
  { name: 'MongoDB', slug: 'mongodb', color: '#47A248' },
  { name: 'iOS', slug: 'apple', color: '#ffffff' },
  { name: 'Android', slug: 'android', color: '#34A853' },
  { name: 'Stripe', slug: 'stripe', color: '#8B5CF6' },
  { name: 'Docker', slug: 'docker', color: '#2496ED' },
  { name: 'AWS', slug: 'amazonwebservices', color: '#FF9900' },
]

const orbPositions = [
  { top: '10%', left: '5%', size: 300, color: 'rgba(99,102,241,0.12)' },
  { top: '50%', right: '10%', size: 250, color: 'rgba(129,140,248,0.08)' },
  { bottom: '5%', left: '30%', size: 200, color: 'rgba(99,102,241,0.06)' },
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

const chipSize = 'h-7 w-7 sm:h-8 sm:w-8'

function Chip({ tech, index, isInView }: { tech: typeof techs[0] & { floatY: number; floatDuration: number; delay: number }; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ rotateX: -y * 12, rotateY: x * 12 })
  }

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isInView ? {
        opacity: 1, scale: 1, y: 0,
        transition: { duration: 0.5, delay: index * 0.06, type: 'spring', stiffness: 200, damping: 20 },
      } : { opacity: 0, scale: 0.8, y: 20 }}
    >
      <motion.div
        ref={cardRef}
        className="group cursor-default"
        style={{ perspective: '800px' } as CSSProperties}
        animate={isInView ? {
          y: [0, -tech.floatY, 0],
          transition: {
            duration: tech.floatDuration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: tech.delay,
          },
        } : {}}
      >
        <motion.div
          className="relative"
          animate={isHovered ? { rotateX: tilt.rotateX, rotateY: tilt.rotateY } : { rotateX: 0, rotateY: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
            style={{
              background: isHovered
                ? `linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))`
                : 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
              borderColor: isHovered ? `${tech.color}30` : 'rgba(255,255,255,0.06)',
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 50% 0%, ${tech.color}15, transparent 70%)` }}
            />
            <span className={chipSize}>
              <TechIcon name={tech.name} />
            </span>
            <span className="text-xs sm:text-sm font-medium text-white/60 group-hover:text-white transition-colors duration-300">
              {tech.name}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function TechEcosystem() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const chips = useMemo(() => techs.map((t, i) => {
    const pseudoRandom1 = (i * 13 % 10) / 10
    const pseudoRandom2 = (i * 17 % 10) / 10
    const pseudoRandom3 = (i * 19 % 10) / 10
    return {
      ...t,
      floatY: 2 + pseudoRandom1 * 4,
      floatDuration: 3 + pseudoRandom2 * 2,
      delay: pseudoRandom3 * 2,
    }
  }), [])

  return (
    <section className="relative pt-48 pb-24 sm:pt-56 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_25%_at_50%_50%,rgba(99,102,241,0.04),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {orbPositions.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none rounded-full"
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right as string | undefined,
            bottom: orb.bottom as string | undefined,
            width: orb.size,
            height: orb.size,
            background: orb.color,
            filter: 'blur(80px)',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 + i * 0.3 }}
        />
      ))}

      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          label="Tech Stack"
          title="Mobile App Ecosystem"
          description="Industry-leading frameworks and cloud services for building powerful mobile applications."
        />

        <div className="relative flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5 max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(99,102,241,0.06),transparent_70%)] pointer-events-none" />
          {chips.map((tech, i) => (
            <Chip key={tech.name} tech={tech} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
