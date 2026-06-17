'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
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

      <Container className="relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-white/60 border border-white/10 bg-white/[0.02]">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
              Premium Digital Agency
            </span>
          </motion.div>

          <motion.h1
            className="text-[clamp(2.5rem,8vw,6rem)] font-bold tracking-tight leading-[0.92] text-white"
            variants={fadeUp}
          >
            Building Digital
            <br />
            <span className="gradient-text">Experiences</span>
            <br />
            That Drive Growth
          </motion.h1>

          <motion.p
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
            variants={fadeUp}
          >
            We craft world-class web experiences for ambitious brands.
            Strategy, design, and engineering &mdash; delivered with precision.
          </motion.p>

          <motion.div
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeUp}
          >
            <Button href="#contact" size="lg">
              Start a Project
              <ArrowRight size={18} />
            </Button>
            <Button href="#work" variant="secondary" size="lg">
              <Play size={18} />
              View Our Work
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 sm:mt-20 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
            variants={fadeUp}
          >
            {[
              { value: '150+', label: 'Projects' },
              { value: '98%', label: 'Satisfaction' },
              { value: '8+', label: 'Years' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-white/30 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
