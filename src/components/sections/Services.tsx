'use client'

import { useEffect, useRef, useState } from 'react'
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
import BorderGlow from '@/components/ui/BorderGlow'
import { services } from '@/constants'

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code2, Palette, Cloud, ShoppingCart, Sparkles, Lightbulb,
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640 || matchMedia('(hover: none)').matches)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

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
            const Icon = icons[service.icon]

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.25, 0.1, 0.25, 1] as const,
                }}
              >
                <BorderGlow
                  backgroundColor="#0a0a0f"
                  borderRadius={16}
                  edgeSensitivity={25}
                  glowIntensity={0.6}
                  coneSpread={20}
                  colors={['#818cf8', '#c084fc', '#38bdf8']}
                  glowColor="230 70 90"
                  alwaysGlow={isMobile}
                  className="p-6 sm:p-8 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                    {Icon && <Icon size={22} className="text-white/70" />}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-white/30">
                    Learn more
                    <ArrowRight
                      size={12}
                    />
                  </div>
                </BorderGlow>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
