'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Zap, Search, Lock, Smartphone, BarChart3 } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shield, Zap, Search, Lock, Smartphone, BarChart3,
}

interface BenefitsProps {
  label?: string
  title?: string
  description?: string
  items: { icon: string; title: string; description: string }[]
}

export default function Benefits({ label, title = 'Why Choose Us', description, items }: BenefitsProps) {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 overflow-hidden">
      <Container>
        <SectionHeading
          label={label ?? ''}
          title={title}
          description={description ?? ''}
        />
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-400/20 transition-all duration-300"
              >
                {Icon && <Icon size={24} className="text-indigo-400/80 mb-4" />}
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
