'use client'

import { useRef, useState, type CSSProperties } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { ArrowRight, ShoppingBag, MessageSquare, Heart } from 'lucide-react'

const projects = [
  {
    title: 'Food Delivery App',
    category: 'On-Demand',
    icon: ShoppingBag,
    tags: ['React Native', 'Node.js', 'Firebase', 'Stripe'],
    metrics: ['50K+ Orders/Month', '<30min Avg. Delivery', '4.8★ Rating'],
    color: '#818cf8',
    gradient: 'from-indigo-500/20 via-indigo-500/5 to-transparent',
    glow: 'rgba(129,140,248,0.2)',
  },
  {
    title: 'Social Fitness Platform',
    category: 'Health & Social',
    icon: Heart,
    tags: ['React Native', 'Expo', 'MongoDB', 'AWS'],
    metrics: ['100K+ Active Users', '1M+ Workouts Tracked', '85% Retention'],
    color: '#c084fc',
    gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
    glow: 'rgba(192,132,252,0.2)',
  },
  {
    title: 'Real-Time Chat App',
    category: 'Messaging',
    icon: MessageSquare,
    tags: ['React Native', 'TypeScript', 'Appwrite', 'Docker'],
    metrics: ['500K+ Messages/Day', '<100ms Latency', '99.9% Uptime'],
    color: '#38bdf8',
    gradient: 'from-sky-500/20 via-sky-500/5 to-transparent',
    glow: 'rgba(56,189,248,0.2)',
  },
]

function ProjectCard({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon = project.icon

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ rotateX: -y * 6, rotateY: x * 6 })
  }

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 200, damping: 22 }}
      style={{ perspective: '1000px' } as CSSProperties}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        className="group relative h-full"
        animate={isHovered ? { rotateX: tilt.rotateX, rotateY: tilt.rotateY } : { rotateX: 0, rotateY: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -4 }}
      >
        <div
          className="relative rounded-2xl overflow-hidden border transition-all duration-500 h-full"
          style={{
            background: isHovered
              ? 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))'
              : 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
            borderColor: isHovered ? `${project.color}30` : 'rgba(255,255,255,0.06)',
          }}
        >
          <div
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-3xl pointer-events-none"
            style={{ background: project.glow, transform: isHovered ? 'scale(1.5)' : 'scale(1)' }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700 blur-3xl pointer-events-none"
            style={{ background: project.glow }}
          />

          <div className={`relative min-h-[120px] sm:h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
            <div className="absolute inset-0 opacity-50" style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.03) 0%, transparent 50%)',
            }} />
            <motion.div
              className="relative flex flex-col items-center gap-2"
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                animate={isHovered ? { y: -2 } : { y: 0 }}
                style={{
                  background: isHovered ? `${project.color}20` : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${isHovered ? `${project.color}40` : 'rgba(255,255,255,0.08)'}`,
                }}
              >
                <motion.div
                  animate={isHovered ? { rotate: -5, scale: 1.1 } : { rotate: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <Icon size={24} style={{ color: project.color }} />
                </motion.div>
              </motion.div>
              <span className="text-xs font-medium text-white/50">{project.category}</span>
            </motion.div>
          </div>

          <div className="p-5 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 group-hover:text-indigo-200 transition-colors duration-300">{project.title}</h3>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[10px] font-medium px-2 py-1 rounded-full text-white/40 border transition-colors duration-300"
                  style={{
                    background: isHovered ? `${project.color}10` : 'rgba(255,255,255,0.02)',
                    borderColor: isHovered ? `${project.color}20` : 'rgba(255,255,255,0.06)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-1.5 mb-4">
              {project.metrics.map(metric => (
                <motion.div
                  key={metric}
                  className="flex items-center gap-2 text-xs text-white/40"
                  animate={isHovered ? { x: 2 } : { x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full block"
                    style={{ background: project.color }}
                    animate={isHovered ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                    transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
                  />
                  {metric}
                </motion.div>
              ))}
            </div>

            <Button href="/#contact" variant="ghost" size="md" className="group/btn">
              View Case Study
              <ArrowRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_100%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionHeading
            label="Portfolio"
            title="App Showcase"
            description="Real apps. Real results. See what we've built for our clients."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
