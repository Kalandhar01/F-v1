'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'

const techItems = [
  { name: 'React', slug: 'react', color: '#61DAFB' },
  { name: 'Next.js', slug: 'nextdotjs', color: '#ffffff' },
  { name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
  { name: 'Node.js', slug: 'nodedotjs', color: '#339933' },
  { name: 'MongoDB', slug: 'mongodb', color: '#47A248' },
  { name: 'AWS', slug: 'amazonwebservices', color: '#FF9900' },
  { name: 'Tailwind', slug: 'tailwindcss', color: '#06B6D4' },
  { name: 'Framer', slug: 'framer', color: '#0055FF' },
  { name: 'Google Ads', slug: 'googleads', color: '#4285F4' },
  { name: 'Meta Ads', slug: 'meta', color: '#1877F2' },
  { name: 'SEMrush', slug: 'semrush', color: '#FF642D' },
  { name: 'Ahrefs', slug: 'ahrefs', color: '#2C6BED' },
]

function MagneticCard({ name, slug, color, index }: { name: string; slug: string; color: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePos({ x: x * 12, y: y * 12 })
  }

  function handleMouseLeave() {
    setMousePos({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const floatY = [0, -(4 + (index % 3) * 2), 0, (2 + (index % 2) * 2), 0]
  const duration = 3.5 + (index % 3) * 1

  return (
    <motion.div
      ref={cardRef}
      className="relative flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl border border-white/[0.06] flex items-center justify-center cursor-pointer overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.02)' }}
        animate={{
          y: floatY,
          x: isHovered ? mousePos.x : 0,
        }}
        transition={{
          y: { duration, repeat: Infinity, ease: 'easeInOut' },
          x: { type: 'spring', stiffness: 150, damping: 15 },
        }}
        whileHover={{ borderColor: `${color}40` }}
      >
        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{ background: `radial-gradient(ellipse at 50% 50%, ${color}15, transparent)` }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
        <motion.div
          className="relative w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
          style={{ color }}
          animate={{ scale: isHovered ? 1.15 : 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
        >
          <img src={`/icons/${slug}.svg`} alt={name} className="h-full w-full object-contain" />
        </motion.div>
      </motion.div>
      <span className="text-[0.65rem] sm:text-xs font-medium text-white/50 text-center">{name}</span>
    </motion.div>
  )
}

export default function TechStack() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_100%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <Container>
        <div className="mb-16 text-center">
          <motion.span
            className="text-xs font-medium tracking-[0.25em] uppercase text-indigo-300/70"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            OUR TECH STACK
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-indigo-300">Built With Modern Tools</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-white/60 text-base max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cutting-edge technology stack powering every project we deliver.
          </motion.p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-6 gap-y-8 sm:gap-x-8 md:gap-x-12 max-w-3xl mx-auto place-items-center">
          {techItems.map((item, i) => (
            <MagneticCard key={item.name} name={item.name} slug={item.slug} color={item.color} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
