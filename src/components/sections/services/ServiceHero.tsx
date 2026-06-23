'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Button from '@/components/ui/Button'
import CountUp from '@/components/ui/CountUp'
import { ArrowRight, ChevronDown, Code, Smartphone, Globe, Zap, Shield, BarChart3, TrendingUp, Target, Users, Monitor, ShoppingBag, Building2, Rocket, Star } from 'lucide-react'

interface TechItem {
  name: string
  color: string
}

interface FloatingMetric {
  label: string
  value: string
  color: string
  x: string
  y: string
  icon: string
}

interface ServiceHeroProps {
  label: string
  title: string
  gradientWord?: string
  description: string
  descriptionHighlight?: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  techIcons?: TechItem[]
  floatingMetrics?: FloatingMetric[]
  trustBadges?: string[]
  stats?: { value: string; label: string }[]
}

const iconMap: Record<string, typeof Code> = {
  Code, Smartphone, Globe, Zap, Shield, BarChart3, TrendingUp, Target, Users, Monitor, ShoppingBag, Building2, Rocket, Star,
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

function renderTechSvg(name: string, className: string) {
  const slug = techSlugMap[name]
  if (!slug) return null
  return <img src={`/icons/${slug}.svg`} alt={name} className={`${className} object-contain`} />
}

function TechIcon({ name, color, index }: TechItem & { index: number }) {
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
        className="flex items-center justify-center rounded-full backdrop-blur-sm"
        style={{
          color,
          width: 44,
          height: 44,
          border: '1px solid rgba(255,255,255,0.04)',
          background: 'rgba(255,255,255,0.015)',
        }}
        animate={{ y: [0, -floatDistance, 0] }}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay: pseudoRandom3 * 2 }}
        whileHover={{ scale: 1.2, opacity: 1, borderColor: `${color}40` }}
      >
        <span className="w-5 h-5 flex items-center justify-center">
          {renderTechSvg(name, 'w-full h-full')}
        </span>
      </motion.div>
    </motion.div>
  )
}

export default function ServiceHero({
  label,
  title,
  gradientWord,
  description,
  descriptionHighlight,
  ctaText = 'Start Your Project',
  ctaHref = '#contact',
  secondaryCtaText,
  secondaryCtaHref,
  techIcons,
  floatingMetrics,
  trustBadges,
  stats = [],
}: ServiceHeroProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const titleParts = gradientWord ? title.split(gradientWord) : [title]

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
      <div className="flex-1 flex items-center justify-center pt-28 pb-16 md:py-0">
        <div className="absolute inset-0 bg-black" />

        <div className="absolute top-1/4 left-[5%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] rounded-full bg-purple-500/8 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />

        <div className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_50%,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

        {techIcons?.map((tech, i) => (
          <TechIcon key={tech.name} name={tech.name} color={tech.color} index={i} />
        ))}

        {floatingMetrics?.map((metric, i) => {
          const Icon = iconMap[metric.icon]
          if (!Icon) return null
          return (
            <motion.div
              key={metric.label}
              className="hidden lg:flex absolute items-center gap-3 rounded-2xl border px-4 py-3 backdrop-blur-xl pointer-events-none"
              style={{
                left: metric.x,
                top: metric.y,
                backgroundColor: `${metric.color}10`,
                borderColor: `${metric.color}20`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + i * 0.2 }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${metric.color}18` }}>
                <Icon size={16} style={{ color: metric.color }} />
              </div>
              <div>
                <div className="text-lg font-bold text-white leading-none">{metric.value}</div>
                <div className="text-[9px] font-medium tracking-[0.1em] uppercase text-white/40 mt-0.5">{metric.label}</div>
              </div>
            </motion.div>
          )
        })}

        <motion.div
          className="hidden lg:flex absolute top-8 right-8 items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 backdrop-blur-xl pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))' }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium text-white/60">Available for new projects</span>
        </motion.div>

        <div ref={ref} className="relative z-10 w-full md:max-w-5xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12 text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="w-10 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent hidden sm:block" />
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 px-4 py-1.5 text-xs font-medium tracking-[0.15em] uppercase text-indigo-300/80"
              style={{ background: 'rgba(99,102,241,0.08)' }}
            >
              {label}
            </span>
            <span className="w-10 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent hidden sm:block" />
          </motion.div>

          <motion.h1
            className="relative z-[100] w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.92] md:leading-[0.95]">
              {gradientWord && titleParts.length === 2 ? (
                <>
                  <span className="text-white">{titleParts[0]}</span>
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{gradientWord}</span>
                  <br />
                  <span className="text-white">{titleParts[1]}</span>
                </>
              ) : (
                <span className="text-white">{title}</span>
              )}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 w-full max-w-2xl mx-auto text-center text-base sm:text-lg text-white/50 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
            {descriptionHighlight && (
              <> <span className="text-white/70">{descriptionHighlight}</span></>
            )}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button href={ctaHref} size="lg" className="w-full sm:w-auto h-14 text-base">
              {ctaText}
              <ArrowRight size={16} />
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button href={secondaryCtaHref} size="lg" variant="secondary" className="w-full sm:w-auto h-14 text-base">
                {secondaryCtaText}
              </Button>
            )}
          </motion.div>

          {trustBadges && trustBadges.length > 0 && (
            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] px-3.5 py-1.5 text-[11px] font-medium text-white/40 tracking-wide"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50" />
                  {badge}
                </span>
              ))}
            </motion.div>
          )}

          {stats.length > 0 && (
            <motion.div
              className="mt-12 w-full max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
                    className="rounded-xl border border-white/[0.06] py-3 px-2 text-center backdrop-blur-sm"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.005))' }}
                  >
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      <CountUp value={stat.value} duration={2} delay={i * 200} />
                    </div>
                    <div className="text-[10px] font-medium tracking-[0.1em] text-white/30 mt-0.5">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
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

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
    </section>
  )
}
