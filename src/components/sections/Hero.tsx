'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Shield, Zap, Target, HeadphonesIcon } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import SplitText from '@/components/SplitText'
import Silk from '@/components/Silk'
import CountUp from '@/components/ui/CountUp'
import { MobileTechMarquee } from '@/components/sections/hero/MobileTechMarquee'

const floatingTechIcons = [
  { name: 'Next.js', slug: 'nextdotjs', top: '15%', left: '5%' },
  { name: 'Google Ads', slug: 'googleads', top: '22%', right: '8%' },
  { name: 'TypeScript', slug: 'typescript', bottom: '22%', left: '8%' },
  { name: 'HubSpot', slug: 'hubspot', bottom: '18%', right: '5%' },
  { name: 'React', slug: 'react', top: '45%', left: '2%' },
  { name: 'Meta Ads', slug: 'meta', top: '45%', right: '3%' },
  { name: 'Node.js', slug: 'nodedotjs', bottom: '40%', left: '4%' },
  { name: 'LinkedIn', slug: 'linkedin', bottom: '38%', right: '4%' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

const trustItems = [
  { icon: Shield, label: 'Modern Design' },
  { icon: Zap, label: 'Fast Delivery' },
  { icon: Target, label: 'Performance Focused' },
  { icon: HeadphonesIcon, label: 'Dedicated Support' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Silk background */}
      <div className="absolute inset-0 pointer-events-none">
        <Silk speed={5} scale={1} color="#5a34f2" noiseIntensity={1.5} rotation={0} />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Floating Tech Icons */}
      {floatingTechIcons.map((tech, i) => (
        <motion.div
          key={tech.name}
          className="absolute hidden lg:block pointer-events-none"
          style={{ top: tech.top, left: tech.left, right: tech.right, bottom: tech.bottom } as React.CSSProperties}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
        >
          <motion.div
            className="flex items-center justify-center rounded-full border border-white/[0.04] bg-white/[0.015] backdrop-blur-sm"
            style={{ width: 44, height: 44 }}
            animate={{ y: [0, -8 - (i * 2), 0] }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          >
            <img
              src={`/icons/${tech.slug}.svg`}
              alt={tech.name}
              className="w-5 h-5 opacity-50"
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse 80% 50% at 50% 40%, black, transparent)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 50% at 50% 40%, black, transparent)',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(255,255,255,0.04),transparent)]" />
      </div>

      <Container className="relative z-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >


          {/* Headline */}
          <div className="max-w-3xl mx-auto">
            <div
              className="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tight leading-[0.85] flex flex-col items-center"
            >
              <SplitText
                text="Building Digital"
                className="text-white m-0 leading-none"
                delay={60}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
              />
              <SplitText
                text="Experiences"
                className="gradient-text-premium m-0 leading-none -mt-4 sm:-mt-8"
                delay={60}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
              />
              <SplitText
                text="That Drive Growth"
                className="text-white/90 m-0 leading-none -mt-4 sm:-mt-8"
                delay={60}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
              />
            </div>
          </div>

          {/* Subheadline */}
          <motion.p
            className="mt-6 text-base sm:text-lg text-white/40 max-w-xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We craft world-class web experiences for ambitious brands.
            Strategy, design, and engineering &mdash; delivered with precision.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            variants={itemVariants}
          >
            {trustItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-1.5 text-xs text-white/30"
                >
                  <Icon size={12} className="text-indigo-400/50" />
                  <span>{item.label}</span>
                </div>
              )
            })}
          </motion.div>

          {/* Stats */}
          
          <motion.div
            className="mt-16 sm:mt-20"
            variants={itemVariants}
          >
            <div className="inline-flex items-center divide-x divide-white/[0.06] rounded-2xl border border-white/[0.04] bg-white/[0.02] backdrop-blur-sm px-4 sm:px-10 py-3 sm:py-5">
              {[
                { value: '10+', label: 'Projects' },
                { value: '98%', label: 'Satisfaction' },
                { value: '2+', label: 'Years' },
              ].map((s, i) => (
                <div key={s.label} className="px-3 sm:px-8 first:pl-0 last:pr-0">
                  <div className="text-lg sm:text-xl font-bold text-white">
                    <CountUp value={s.value} duration={2} delay={i * 200} />
                  </div>
                  <div className="text-xs text-white/30 mt-0.5 whitespace-nowrap">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Button
              href="/#contact"
              size="lg"
              className="w-full sm:min-w-[180px] sm:w-auto"
            >
              Start a Project
              <ArrowRight size={16} />
            </Button>
            <Button
              href="/#work"
              variant="secondary"
              size="lg"
              className="w-full sm:min-w-[180px] sm:w-auto"
            >
              <Play size={16} />
              View Our Work
            </Button>
          </motion.div>

          <MobileTechMarquee />
        </motion.div>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
