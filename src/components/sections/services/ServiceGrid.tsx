'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import BorderGlow from '@/components/ui/BorderGlow'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

interface ServiceGridProps {
  label?: string
  title: string
  description?: string
  items: { icon: string; title: string; description?: string }[]
}

export default function ServiceGrid({ label, title, description, items }: ServiceGridProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <Container>
        <SectionHeading
          label={label ?? ''}
          title={title}
          description={description ?? ''}
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <BorderGlow
                backgroundColor="#0a0a0f"
                borderRadius={16}
                edgeSensitivity={25}
                glowIntensity={0.5}
                colors={['#818cf8', '#c084fc', '#38bdf8']}
                glowColor="230 70 90"
                className="p-6 sm:p-8 cursor-default h-full"
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                {item.description && (
                  <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                )}
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
