'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const channels = [
  { name: 'Google Ads', color: '#4285F4', x: 0, y: -40 },
  { name: 'Meta Ads', color: '#1877F2', x: 40, y: -25 },
  { name: 'Instagram', color: '#E4405F', x: 45, y: 5 },
  { name: 'LinkedIn', color: '#0A66C2', x: 30, y: 35 },
  { name: 'YouTube', color: '#FF0000', x: -30, y: 35 },
  { name: 'SEO', color: '#34A853', x: -45, y: 5 },
  { name: 'Analytics', color: '#E37400', x: -40, y: -25 },
  { name: 'Email', color: '#FF7A59', x: -15, y: -45 },
  { name: 'Content', color: '#c084fc', x: 15, y: -45 },
]

export default function ChannelDomination() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_50%_50%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />

      <Container>
        <SectionHeading
          label="Channels"
          title="Digital Growth Engine"
          description="A interconnected ecosystem of platforms working together to drive exponential growth."
        />

        <div ref={ref} className="relative max-w-3xl mx-auto aspect-square">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-32 h-32 rounded-full flex items-center justify-center text-center border"
              style={{
                background: 'rgba(99,102,241,0.06)',
                borderColor: 'rgba(99,102,241,0.15)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-indigo-300/70">Growth</div>
                <div className="text-[10px] text-white/40 mt-0.5">Engine</div>
              </div>
            </motion.div>
          </div>

          {channels.map((ch, i) => {
            const angle = (i / channels.length) * 360
            const rad = (angle * Math.PI) / 180
            const r = 38
            const x = Math.cos(rad) * r
            const y = Math.sin(rad) * r

            return (
              <motion.div
                key={ch.name}
                className="absolute left-1/2 top-1/2"
                style={{ transform: 'translate(-50%, -50%)' }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <motion.div
                  className="absolute"
                  style={{ translateX: `${x}%`, translateY: `${y}%` }}
                  animate={isInView ? {
                    y: [0, -(2 + (i % 3) * 1), 0],
                    x: [0, (i % 2 === 0 ? 1 : -1), 0],
                  } : {}}
                  transition={{
                    duration: 4 + (i % 4) * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.15,
                  }}
                >
                  <div
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-300 hover:scale-105 cursor-default whitespace-nowrap"
                    style={{
                      background: `${ch.color}0a`,
                      borderColor: `${ch.color}20`,
                    }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: ch.color }} />
                    <span className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300">
                      {ch.name}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
