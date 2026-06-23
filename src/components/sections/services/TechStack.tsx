'use client'

import { useRef, useState, type CSSProperties } from 'react'
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

function TechChip({ item, index, isInView }: { item: string; index: number; isInView: boolean }) {
  const color = techColors[item] || '#6366f1'
  const slug = techSlugs[item]
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

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
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 15 }}
      transition={{ duration: 0.4, delay: index * 0.05, type: 'spring', stiffness: 200, damping: 22 }}
      style={{ perspective: '800px' } as CSSProperties}
    >
      <motion.div
        ref={cardRef}
        style={{ perspective: '800px' } as CSSProperties}
        animate={isInView ? {
          y: [0, -3 - (index % 3), 0],
        } : {}}
        transition={{
          duration: 3 + (index % 3) * 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.15,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="relative rounded-2xl border p-4 sm:p-5 transition-all duration-300"
          animate={isHovered ? { rotateX: tilt.rotateX, rotateY: tilt.rotateY } : { rotateX: 0, rotateY: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{
            background: isHovered
              ? `linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))`
              : 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
            borderColor: isHovered ? `${color}40` : `${color}20`,
          }}
        >
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 0%, ${color}12, transparent 70%)` }}
          />
          <div className="relative flex flex-col items-center text-center gap-3">
            <motion.div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center p-3 transition-all duration-300"
              style={{
                background: isHovered ? `${color}15` : 'rgba(0,0,0,0.3)',
                border: `1px solid ${isHovered ? `${color}35` : `${color}25`}`,
              }}
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              {slug ? (
                <img src={`/icons/${slug}.svg`} alt={item} className="w-full h-full object-contain" />
              ) : (
                <span className="text-sm font-bold text-white">{item.slice(0, 2)}</span>
              )}
            </motion.div>
            <span className="text-xs sm:text-sm font-medium text-white/70 transition-colors duration-300"
              style={{ color: isHovered ? color : undefined }}
            >
              {item}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
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

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <TechChip key={item} item={item} index={i} isInView={isInView} />
          ))}
        </div>
      </Container>
    </section>
  )
}
