'use client'

import { useRef, useState, type CSSProperties } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { ShoppingBag, MessageSquare, Heart, Truck, GraduationCap, Rocket } from 'lucide-react'

const items = [
  { icon: ShoppingBag, title: 'E-Commerce Apps', desc: 'Native shopping experiences with smooth checkout, real-time inventory, and in-app payments.', color: '#818cf8' },
  { icon: MessageSquare, title: 'Social Platforms', desc: 'Engaging social networking apps with real-time messaging, feeds, and rich media sharing.', color: '#c084fc' },
  { icon: Heart, title: 'Health & Fitness', desc: 'Connected health apps with activity tracking, goal setting, and wearable device integration.', color: '#38bdf8' },
  { icon: Truck, title: 'On-Demand Services', desc: 'Real-time service platforms with live tracking, instant booking, and automated dispatch systems.', color: '#34d399' },
  { icon: GraduationCap, title: 'EdTech Solutions', desc: 'Interactive learning platforms with video lessons, gamification, progress tracking, and assessments.', color: '#f472b6' },
  { icon: Rocket, title: 'Startup MVPs', desc: 'Rapidly launch minimum viable products with lean development methodologies and modern tech stacks.', color: '#fbbf24' },
]

function Card({ item, index, isInView }: { item: typeof items[0]; index: number; isInView: boolean }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon = item.icon

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
          borderColor: isHovered ? `${item.color}25` : 'rgba(255,255,255,0.06)',
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${item.color}10, transparent 70%)` }}
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.06), transparent 70%)` }}
        />
        <div className="relative p-6 sm:p-7 flex flex-col h-full">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border transition-all duration-300"
            style={{
              background: isHovered ? `${item.color}20` : 'rgba(99,102,241,0.1)',
              borderColor: isHovered ? `${item.color}40` : 'rgba(99,102,241,0.15)',
            }}
          >
            <motion.div
              animate={isHovered ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <Icon size={18} style={{ color: isHovered ? item.color : undefined }} className="text-indigo-400 transition-colors duration-300" />
            </motion.div>
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-300">{item.title}</h3>
          <p className="text-sm text-white/50 leading-relaxed flex-1">{item.desc}</p>
          <motion.div
            className="mt-4 flex items-center gap-1.5 text-xs font-medium text-indigo-400/60"
            animate={isHovered ? { x: 3, color: 'rgba(129,140,248,0.9)' } : { x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span>Learn more</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </motion.div>
  )
}

export default function WhatWeBuild() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionHeading
            label="Apps"
            title="What We Build"
            description="From MVPs to enterprise apps — every project crafted for speed, scale, and impact."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <Card key={item.title} item={item} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
