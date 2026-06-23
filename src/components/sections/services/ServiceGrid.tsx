'use client'

import { useRef, useState, type CSSProperties } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { Smartphone, Globe, Monitor, Zap, Building2, Cloud, Bot, Palette, Code, Shield } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Smartphone, Globe, Monitor, Zap, Building2, Cloud, Bot, Palette, Code, Shield,
}

interface ServiceGridProps {
  label?: string
  title: string
  description?: string
  items: { icon: string; title: string; description?: string }[]
}

function ServiceCard({ item, index, isInView }: { item: ServiceGridProps['items'][0]; index: number; isInView: boolean }) {
  const Icon = iconMap[item.icon]
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ rotateX: -y * 8, rotateY: x * 8 })
  }

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.08, type: 'spring', stiffness: 200, damping: 22 }}
      style={{ perspective: '1000px' } as CSSProperties}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        className="group relative overflow-hidden rounded-2xl border transition-all duration-500 h-full cursor-default"
        animate={isHovered ? { rotateX: tilt.rotateX, rotateY: tilt.rotateY } : { rotateX: 0, rotateY: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          background: isHovered
            ? 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))'
            : 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
          borderColor: isHovered ? 'rgba(99,102,241,0.25)' : 'rgba(255,255,255,0.06)',
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.08), transparent 70%)' }}
        />
        <div className="relative p-5 sm:p-6 flex flex-col h-full">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border transition-all duration-300"
            style={{
              background: isHovered ? 'rgba(99,102,241,0.2)' : 'rgba(99,102,241,0.1)',
              borderColor: isHovered ? 'rgba(99,102,241,0.35)' : 'rgba(99,102,241,0.15)',
            }}
          >
            {Icon ? (
              <motion.div
                animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <Icon size={18} className="text-indigo-400" />
              </motion.div>
            ) : (
              <span className="text-lg">{item.icon}</span>
            )}
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-300">{item.title}</h3>
          {item.description && (
            <p className="text-sm text-white/50 leading-relaxed flex-1">{item.description}</p>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </motion.div>
  )
}

export default function ServiceGrid({ label, title, description, items }: ServiceGridProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      <Container>
        <SectionHeading
          label={label ?? ''}
          title={title}
          description={description ?? ''}
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map((item, i) => (
            <ServiceCard key={item.title} item={item} index={i} isInView={isInView} />
          ))}
        </div>
      </Container>
    </section>
  )
}
