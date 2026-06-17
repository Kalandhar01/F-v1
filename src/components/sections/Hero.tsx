'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Shield, Zap, Target, HeadphonesIcon } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import SplitText from '@/components/SplitText'
import Silk from '@/components/Silk'

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
      {/* Silk background — reduced intensity */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <Silk speed={3} scale={1.5} color="#4f46e5" noiseIntensity={0.6} rotation={0.3} />
      </div>

      {/* Dark base overlay */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Soft grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse 80% 50% at 50% 40%, black, transparent)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 50% at 50% 40%, black, transparent)',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i * 1.5}s`,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider text-white/50 border border-white/[0.06] bg-white/[0.02] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/60" />
              Premium Digital Agency
            </span>
          </motion.div>

          {/* Headline */}
          <div className="max-w-3xl mx-auto">
            <div className="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tight leading-[1.05]">
              <div className="text-white">
                <SplitText
                  text="Building Digital"
                  tag="span"
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
              <div className="gradient-text-premium">
                <SplitText
                  text="Experiences"
                  tag="span"
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
              <div className="text-white/90">
                <SplitText
                  text="That Drive Growth"
                  tag="span"
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

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Button
              href="#contact"
              size="lg"
              className="min-w-[180px]"
            >
              Start a Project
              <ArrowRight size={16} />
            </Button>
            <Button
              href="#work"
              variant="secondary"
              size="lg"
              className="min-w-[180px]"
            >
              <Play size={16} />
              View Our Work
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 sm:mt-20"
            variants={itemVariants}
          >
            <div className="inline-flex items-center divide-x divide-white/[0.06] rounded-2xl border border-white/[0.04] bg-white/[0.02] backdrop-blur-sm px-6 sm:px-10 py-4 sm:py-5">
              {[
                { value: '150+', label: 'Projects' },
                { value: '98%', label: 'Satisfaction' },
                { value: '8+', label: 'Years' },
              ].map((s, i) => (
                <div key={s.label} className="px-6 sm:px-8 first:pl-0 last:pr-0">
                  <div className="text-lg sm:text-xl font-bold text-white">
                    {s.value}
                  </div>
                  <div className="text-xs text-white/30 mt-0.5 whitespace-nowrap">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
