'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { Search, Share2, BarChart3, FileText, Mail, Palette, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Search,
    title: 'SEO',
    desc: 'Improve search rankings and organic visibility through technical audits, on-page optimization, link building, and content strategy tailored to your industry.',
    color: '#34A853',
    stat: '3x',
    statLabel: 'Organic traffic growth',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    desc: 'Build engagement and brand awareness across platforms with creative content calendars, community management, influencer collaborations, and paid amplification.',
    color: '#1877F2',
    stat: '10M+',
    statLabel: 'Impressions delivered',
  },
  {
    icon: BarChart3,
    title: 'Performance Marketing',
    desc: 'Generate leads through paid campaigns on Google, Meta, LinkedIn, and beyond. Smart bidding, audience segmentation, and relentless A/B testing for maximum ROAS.',
    color: '#FBBC04',
    stat: '4.5x',
    statLabel: 'Avg. ROAS achieved',
  },
  {
    icon: FileText,
    title: 'Content Marketing',
    desc: 'Create valuable content that drives conversions — blog posts, case studies, video scripts, infographics, and lead magnets optimized for every funnel stage.',
    color: '#FF6B6B',
    stat: '200+',
    statLabel: 'Content pieces created',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    desc: 'Nurture leads and improve retention with automated drip campaigns, personalized newsletters, abandoned cart flows, and segmentation strategies that convert.',
    color: '#8B5CF6',
    stat: '25%',
    statLabel: 'Avg. conversion rate',
  },
  {
    icon: Palette,
    title: 'Brand Development',
    desc: 'Strengthen brand identity and digital presence with cohesive visual systems, messaging architecture, tone of voice guidelines, and omnichannel brand experiences.',
    color: '#EC4899',
    stat: '50+',
    statLabel: 'Brands transformed',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

export default function SolutionsGrid() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_100%,rgba(99,102,241,0.04),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_25%_at_20%_50%,rgba(99,102,241,0.02),transparent)] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          label="Solutions"
          title="Digital Marketing Solutions"
          description="Comprehensive marketing services engineered to deliver measurable business outcomes across every channel."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {solutions.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group relative rounded-3xl border overflow-hidden transition-all duration-700 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.025), rgba(255,255,255,0.008))',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
                  style={{
                    background: `radial-gradient(ellipse at 80% 20%, ${item.color}12, transparent 60%)`,
                  }}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-[10%] right-[10%] h-[1px] opacity-0 group-hover:opacity-100 transition-all duration-700"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.color}50, transparent)`,
                  }}
                />

                <div className="relative p-8 sm:p-9">
                  {/* Icon + Stat row */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105"
                      style={{
                        backgroundColor: `${item.color}15`,
                        boxShadow: `0 0 0 0 ${item.color}08`,
                      }}
                    >
                      <Icon size={24} style={{ color: item.color }} />
                    </div>
                    <div className="text-right">
                      <div
                        className="text-2xl sm:text-3xl font-bold tracking-tight"
                        style={{ color: `${item.color}` }}
                      >
                        {item.stat}
                      </div>
                      <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-white/30 mt-0.5">
                        {item.statLabel}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>

                  <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                    <span
                      className="text-xs font-medium transition-colors duration-300"
                      style={{ color: `${item.color}80` }}
                    >
                      Learn more
                    </span>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-400 group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}12` }}
                    >
                      <ArrowRight size={14} style={{ color: item.color }} />
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-[10%] right-[10%] h-[1px] opacity-0 group-hover:opacity-100 transition-all duration-700"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.color}40, transparent)`,
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button href="/#contact" size="lg">
            Start Your Growth Journey
            <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
