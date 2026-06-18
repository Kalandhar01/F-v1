'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  { title: 'Discover', desc: 'Deep market research, competitor analysis, and audience insights to inform our strategy.', icon: '🔍' },
  { title: 'Research', desc: 'Data-driven analysis of keywords, channels, and customer behavior to find opportunities.', icon: '📚' },
  { title: 'Strategy', desc: 'Comprehensive marketing plan with clear KPIs, target metrics, and channel selection.', icon: '📋' },
  { title: 'Campaign Setup', desc: 'Flawless execution across chosen channels with precise targeting and creative assets.', icon: '⚙️' },
  { title: 'Optimization', desc: 'A/B testing, performance analysis, and iterative improvements to maximize results.', icon: '📈' },
  { title: 'Scale', desc: 'Scale winning campaigns and strategies to reach new audiences and markets.', icon: '🚀' },
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

export default function GrowthProcess() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Center spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_50%_at_50%_50%,rgba(99,102,241,0.06),transparent)] pointer-events-none" />
      <Particles />

      <div ref={ref} className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-4 relative z-[100]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white">Growth Process</span>
        </motion.h2>
        <motion.p
          className="text-white/50 text-base text-center max-w-xl mx-auto mb-20 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A proven growth funnel that delivers measurable results from discovery to scale.
        </motion.p>

        <div className="relative">
          {/* Central spine + SVG line */}
          <div className="absolute left-1/2 top-6 bottom-6 w-px -translate-x-1/2 pointer-events-none" style={{ background: 'rgba(99,102,241,0.08)' }} />
          <svg className="absolute left-1/2 top-6 bottom-6 w-6 -translate-x-1/2 pointer-events-none overflow-visible" preserveAspectRatio="none">
            <defs>
              <filter id="pulseGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Traveling light beam */}
            <motion.line
              x1="50%" y1="0"
              x2="50%" y2="100%"
              stroke="#a78bfa"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#pulseGlow)"
              strokeDasharray="8 400"
              animate={isInView ? { strokeDashoffset: [-408, 0] } : { strokeDashoffset: 0 }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
            />
          </svg>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative flex justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Node dot */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <motion.div
                    className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                    style={{
                      background: 'rgba(10,10,20,0.9)',
                      borderColor: 'rgba(129,140,248,0.4)',
                    }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  </motion.div>
                </div>

                {/* Card */}
                <div
                  className="relative group w-full max-w-2xl rounded-2xl p-6 border transition-all duration-500"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    borderColor: 'rgba(255,255,255,0.06)',
                  }}
                >
                  {/* Hover glow overlay */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.06), transparent)' }}
                  />
                  {/* Gradient border on hover */}
                  <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(129,140,248,0.2), transparent, rgba(99,102,241,0.1))',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      WebkitMaskComposite: 'xor',
                      padding: '1px',
                    }}
                  />

                  <div className="relative flex items-start gap-5">
                    {/* Icon */}
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                      style={{
                        background: 'rgba(99,102,241,0.1)',
                        border: '1px solid rgba(99,102,241,0.2)',
                      }}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.icon}
                    </motion.div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-400/50">
                          Step {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(99,102,241,0.15), transparent)' }} />
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-indigo-200 transition-colors duration-300">{step.title}</h3>
                      <p className="text-sm text-white/40 mt-1.5 leading-relaxed">{step.desc}</p>
                    </div>

                    {/* Arrow connector */}
                    {i < steps.length - 1 && (
                      <div className="hidden sm:flex flex-shrink-0 items-center pt-1">
                        <svg className="w-5 h-5 text-indigo-400/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
