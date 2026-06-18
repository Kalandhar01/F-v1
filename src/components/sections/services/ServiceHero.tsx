'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Button from '@/components/ui/Button'
import { ArrowRight, ChevronDown } from 'lucide-react'
import LightRays from '@/components/LightRays'

interface TechItem {
  name: string
  color: string
}

const techSlugMap: Record<string, string> = {
  'React': 'react',
  'React Native': 'react',
  'Next.js': 'nextdotjs',
  'TypeScript': 'typescript',
  'Node.js': 'nodedotjs',
  'AWS': 'amazonwebservices',
  'Google Ads': 'googleads',
  'Meta Ads': 'meta',
  'SEO': '',
  'Analytics': 'googleanalytics',
  'LinkedIn': 'linkedin',
  'iOS': 'apple',
  'Android': 'android',
  'Expo': 'expo',
  'Firebase': 'firebase',
}

interface ServiceHeroProps {
  label: string
  title: string
  description: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  techIcons?: TechItem[]
}

function renderTechSvg(name: string, className: string) {
  const slug = techSlugMap[name]
  if (!slug) return null
  return <img src={`/icons/${slug}.svg`} alt={name} className={`${className} object-contain`} />
}

function TechIcon({ name, color, index }: TechItem & { index: number }) {
  // Use index-based pseudo-random values to avoid React purity warnings
  const pseudoRandom1 = (index * 13 % 10) / 10
  const pseudoRandom2 = (index * 17 % 10) / 10
  const pseudoRandom3 = (index * 19 % 10) / 10

  const floatDistance = 6 + pseudoRandom1 * 4
  const duration = 4 + pseudoRandom2 * 3
  const isLeft = index % 2 === 0
  const left = isLeft ? `${2 + (index * 3) % 8}%` : `${85 + (index * 2) % 10}%`
  const top = `${12 + (index * 14) % 70}%`

  return (
    <motion.div
      className="absolute"
      style={{ left, top }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 + pseudoRandom1 * 0.5 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-white/[0.04] bg-white/[0.015] backdrop-blur-sm"
        style={{ color, width: 40, height: 40 }}
        animate={{
          y: [0, -floatDistance, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: pseudoRandom3 * 2,
        }}
        whileHover={{ scale: 1.15, opacity: 1 }}
      >
        <span className="w-5 h-5 flex items-center justify-center">
          {renderTechSvg(name, 'w-full h-full')}
        </span>
      </motion.div>
    </motion.div>
  )
}

function ScrollIndicator() {
  return (
    <motion.div
      className="mt-12 mb-4 md:mt-0 md:mb-0 md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <span className="text-[0.55rem] font-medium tracking-[0.2em] uppercase text-white/20">
        Scroll to Explore
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={14} className="text-white/20" />
      </motion.div>
    </motion.div>
  )
}

export default function ServiceHero({
  label,
  title,
  description,
  ctaText = 'Start Your Project',
  ctaHref = '#contact',
  secondaryCtaText,
  secondaryCtaHref,
  techIcons,
}: ServiceHeroProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
      <div className="flex-1 flex items-center justify-center pt-24 pb-12 md:py-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(99,102,241,0.08),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_60%,rgba(129,140,248,0.04),transparent)] pointer-events-none" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        <div className="absolute inset-0 pointer-events-none">
          <LightRays
            raysOrigin="top-center"
            raysColor="#6366f1"
            raysSpeed={0.5}
            lightSpread={1.2}
            rayLength={1.5}
            saturation={0.6}
            fadeDistance={1.5}
            followMouse={false}
            noiseAmount={0.05}
          />
        </div>

        {techIcons?.map((tech, i) => (
          <TechIcon key={tech.name} name={tech.name} color={tech.color} index={i} />
        ))}

        <div ref={ref} className="relative z-10 w-full md:max-w-5xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12 text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6 w-full"
          >
            <span className="w-8 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent hidden sm:block" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-indigo-300/70">{label}</span>
            <span className="w-8 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent hidden sm:block" />
          </motion.div>

          <motion.h1
            className="relative z-[100] w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] md:leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-white">{title}</span>
          </motion.h1>

          <motion.p
            className="mt-6 w-full max-w-none md:max-w-2xl mx-auto text-center text-base sm:text-lg text-white/50 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button href={ctaHref} size="lg" className="w-full sm:w-auto h-14">
              {ctaText}
              <ArrowRight size={16} />
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button href={secondaryCtaHref} size="lg" variant="secondary" className="w-full sm:w-auto h-14">
                {secondaryCtaText}
              </Button>
            )}
          </motion.div>
          
          <ScrollIndicator />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20" />
    </section>
  )
}
