'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import SplitText from '@/components/SplitText'
import CountUp from '@/components/ui/CountUp'

const subtitle = 'From strategy and design to development and growth, we help businesses launch faster, scale smarter, and stand out online.'

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

export default function AboutContent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Blue spotlight from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(99,102,241,0.08),transparent)] pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/30 to-[#0a0a0f] pointer-events-none" />

      {/* Floating background particles */}
      {mounted && Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full bg-indigo-400/20 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -(20 + Math.random() * 40), 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 py-24 sm:py-32 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center"
        >
          {/* Headline */}
          <div className="text-[clamp(2.5rem,5vw,4.5rem)] font-black tracking-tight leading-[1.1] flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="text-white">We Don&apos;t Just Build Products.</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-1 sm:mt-2"
            >
              <span className="gradient-text-premium pb-2">We Craft Experiences.</span>
            </motion.div>
          </div>

          {/* Subheadline */}
          <motion.p
            className="mt-6 text-base sm:text-lg text-white/40 max-w-xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Button
              href="/#contact"
              variant="primary"
              size="lg"
              className="w-full sm:min-w-[180px] sm:w-auto"
            >
              Start A Project
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 sm:mt-20"
            variants={itemVariants}
          >
            <div className="inline-flex items-center divide-x divide-white/[0.06] rounded-2xl border border-white/[0.04] bg-white/[0.02] backdrop-blur-sm px-4 sm:px-10 py-3 sm:py-5">
              {[
                { value: '10+', label: 'Projects Delivered' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '3+', label: 'Years Building' },
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
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-[0.55rem] font-medium tracking-[0.2em] uppercase text-white/20">
          Explore Our Journey
        </span>
        <div className="relative">
          <div className="absolute -inset-3 rounded-full bg-indigo-500/10 blur-md animate-pulse pointer-events-none" />
          <motion.div
            className="relative w-5 h-8 rounded-full border border-white/15 flex items-start justify-center p-[3px] backdrop-blur-sm bg-white/[0.02]"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-indigo-400/80"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
