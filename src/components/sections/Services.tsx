'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code2,
  Palette,
  Cloud,
  ShoppingCart,
  Sparkles,
  Lightbulb,
  ArrowRight,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { services } from '@/constants'

export default function Services() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.015),transparent)] pointer-events-none" />
      <Container>
        <SectionHeading
          label="Our Services"
          title="What We Do Best"
          description="From concept to launch, we provide end-to-end digital services that transform ideas into impactful products."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => {
            const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
              Code2, Palette, Cloud, ShoppingCart, Sparkles, Lightbulb,
            }
            const Icon = icons[service.icon]

            return (
              <motion.div
                key={service.title}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-0.5 cursor-default"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.25, 0.1, 0.25, 1] as const,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
                  {Icon && <Icon size={22} className="text-white/70" />}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-white/30 group-hover:text-white/60 transition-colors duration-300">
                  Learn more
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
