'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

export default function OurStory() {
  return (
    <section className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="absolute inset-0 bg-black z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(99,102,241,0.03),transparent)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none z-0" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <motion.span
              className="text-xs font-medium tracking-[0.25em] uppercase text-indigo-300/70"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              OUR STORY
            </motion.span>
            <motion.h2
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We Started With<br />One Goal.
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-white/60 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              To build digital experiences that businesses are proud to own.
            </motion.p>

            <div className="mt-12 space-y-8">
              {[
                { year: '2023', event: 'Started', desc: 'Founded with a vision to redefine digital craftsmanship.' },
                { year: '2024', event: '10+ Projects', desc: 'Delivered impactful solutions for startups and enterprises.' },
                { year: '2025', event: 'Multi-Service Agency', desc: 'Expanded into marketing, strategy, and full-stack development.' },
              ].map((item, i) => (
                <motion.div
                  key={item.year}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-indigo-400 ring-2 ring-indigo-400/30" />
                    {i < 2 && <div className="w-px flex-1 bg-gradient-to-b from-indigo-400/30 to-transparent" />}
                  </div>
                  <div className="pb-8">
                    <span className="text-xs font-semibold tracking-wider text-indigo-300/70">{item.year}</span>
                    <h3 className="text-lg font-semibold text-white mt-0.5">{item.event}</h3>
                    <p className="text-sm text-white/40 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] hidden lg:block">
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400/40 via-indigo-400/20 to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ originY: 0 }}
            />

            {[
              { label: 'Founded', year: '2023', top: '10%' },
              { label: 'Growth', year: '2024', top: '40%' },
              { label: 'Scale', year: '2025', top: '70%' },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: m.top }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.3 }}
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-2 border-indigo-400/30 bg-black/60 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-3 h-3 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/50" />
                  </div>
                  <div className="absolute -right-24 top-1/2 -translate-y-1/2 text-right">
                    <span className="text-xs font-semibold text-indigo-300/60">{m.year}</span>
                    <p className="text-sm font-medium text-white/80">{m.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-indigo-400/20"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
