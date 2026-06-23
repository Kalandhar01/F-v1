'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { Building2, Construction, Heart, GraduationCap, ShoppingBag, Factory, Rocket, Briefcase } from 'lucide-react'

const industries = [
  { icon: Building2, name: 'Real Estate', desc: 'Localized SEO and targeted campaigns.', color: '#F59E0B' },
  { icon: Construction, name: 'Construction', desc: 'B2B strategies for developers.', color: '#FB923C' },
  { icon: Heart, name: 'Healthcare', desc: 'Compliant patient acquisition.', color: '#EF4444' },
  { icon: GraduationCap, name: 'Education', desc: 'Multi-channel enrollment growth.', color: '#3B82F6' },
  { icon: ShoppingBag, name: 'Retail', desc: 'CRO and dynamic ad optimization.', color: '#EC4899' },
  { icon: Factory, name: 'Manufacturing', desc: 'ABM and industry content.', color: '#94A3B8' },
  { icon: Rocket, name: 'Startups', desc: 'Growth-driven user acquisition.', color: '#8B5CF6' },
  { icon: Briefcase, name: 'Professional Services', desc: 'Authority positioning and lead gen.', color: '#14B8A6' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const easeOutCubic: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const itemVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: easeOutCubic },
  },
}

export default function IndustriesServed() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_30%_at_50%_50%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_20%_at_20%_80%,rgba(99,102,241,0.02),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          label="Industries"
          title="Industries We Serve"
          description="Deep industry expertise across sectors. We understand your market, your customers, and what it takes to win."
        />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {industries.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="group relative rounded-2xl border overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.025), rgba(255,255,255,0.008))',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
              >
                {/* Left color bar */}
                <div
                  className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r-full transition-all duration-500 group-hover:top-1 group-hover:bottom-1"
                  style={{ backgroundColor: item.color }}
                />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${item.color}10, transparent 70%)`,
                  }}
                />

                <div className="relative p-5 sm:p-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-105"
                    style={{
                      backgroundColor: `${item.color}15`,
                      border: `1px solid ${item.color}25`,
                    }}
                  >
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white/90 group-hover:text-white transition-colors duration-300">{item.name}</h3>
                  <p className="text-xs text-white/40 mt-1.5 leading-relaxed group-hover:text-white/50 transition-colors duration-300">{item.desc}</p>
                </div>

                {/* Bottom color line */}
                <div
                  className="absolute bottom-0 left-[20%] right-[20%] h-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.color}40, transparent)`,
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
