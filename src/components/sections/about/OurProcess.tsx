'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'

const steps = [
  { title: 'Discovery', desc: 'We learn your business, audience, and goals to define the scope and vision.' },
  { title: 'Strategy', desc: 'A comprehensive plan mapping out architecture, timelines, and key milestones.' },
  { title: 'Design', desc: 'Pixel-perfect interfaces crafted with user experience and brand identity at the core.' },
  { title: 'Development', desc: 'Clean, performant code built with modern stacks and best practices.' },
  { title: 'Launch', desc: 'Rigorous QA, deployment automation, and a seamless go-live process.' },
  { title: 'Growth', desc: 'Ongoing optimization, support, and data-driven improvements post-launch.' },
]

function Particles() {
  const [isMobileDevice, setIsMobileDevice] = useState(true)

  useEffect(() => {
    setIsMobileDevice(window.innerWidth < 768)
    const handleResize = () => setIsMobileDevice(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const particles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i, x: Math.random() * 100, y: Math.random() * 100,
      size: 1 + Math.random() * 2, duration: 4 + Math.random() * 4, delay: Math.random() * 3,
    }))
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-indigo-400/30"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -25, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}
    </div>
  )
}

export default function OurProcess() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <Particles />
      <Container>
        <div className="mb-16 text-center">
          <motion.span
            className="text-xs font-medium tracking-[0.25em] uppercase text-indigo-300/70"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            OUR PROCESS
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            How We Bring Ideas to Life
          </motion.h2>
          <motion.p
            className="mt-4 text-white/60 text-base max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A proven 6-step process from discovery to growth.
          </motion.p>
        </div>

        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white/[0.04]" />

          <svg className="hidden lg:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-6 overflow-visible pointer-events-none" preserveAspectRatio="none">
            <defs>
              <filter id="processGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <motion.line
              x1="0" y1="50%"
              x2="100%" y2="50%"
              stroke="#a78bfa"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#processGlow)"
              strokeDasharray="8 400"
              animate={isInView ? { strokeDashoffset: [-408, 0] } : { strokeDashoffset: 0 }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
            />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <motion.div
                  className="relative z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center mb-4"
                  style={{
                    background: 'rgba(10,10,20,0.9)',
                    borderColor: 'rgba(129,140,248,0.4)',
                  }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                >
                  <span className="text-xs font-bold text-indigo-300/80">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </motion.div>

                <motion.div className="relative group w-full rounded-xl border border-white/[0.05] p-4 transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                  whileHover={{ y: -2, borderColor: 'rgba(129,140,248,0.15)' }}
                >
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.06), transparent)' }}
                  />
                  <div className="relative">
                    <h3 className="text-sm font-semibold text-white group-hover:text-indigo-200 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-xs text-white/40 mt-1.5 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
