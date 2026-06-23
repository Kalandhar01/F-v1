'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How long does SEO take?',
    a: 'SEO is a long-term strategy. Initial improvements in rankings can be seen within 3-6 months, while significant organic growth typically takes 6-12 months depending on competition, website authority, and the quality of your content strategy.',
  },
  {
    q: 'How much do digital marketing services cost?',
    a: 'Our pricing varies based on scope, channels, and campaign complexity. We offer customized packages starting from retainer-based engagements to performance-based models. A typical monthly retainer ranges from ₹50,000 to ₹5,00,000+ depending on your requirements.',
  },
  {
    q: 'Do you manage social media?',
    a: 'Yes, we offer full social media management across Instagram, LinkedIn, Facebook, and Twitter. This includes content creation, community management, paid advertising, influencer partnerships, and monthly performance reporting.',
  },
  {
    q: 'Can you generate leads?',
    a: 'Absolutely. Lead generation is one of our core strengths. We use a combination of paid advertising, SEO, content marketing, email nurturing, and landing page optimization to attract and convert high-quality leads for your business.',
  },
  {
    q: 'Do you provide reports?',
    a: 'Yes, we provide weekly and monthly performance reports with detailed analytics on key metrics — impressions, clicks, conversions, cost per lead, ROAS, and more. Our reports include actionable insights and recommendations for continuous improvement.',
  },
]

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_30%_at_50%_100%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_25%_at_20%_20%,rgba(99,102,241,0.02),transparent)] pointer-events-none" />

      <div ref={ref} className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          description="Common questions about our digital marketing services and how we deliver results."
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                className="group rounded-2xl border overflow-hidden transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.005))',
                  borderColor: isOpen ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.06)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 sm:p-7 text-left cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                    {faq.q}
                  </span>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500"
                    style={{
                      backgroundColor: isOpen ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.04)',
                    }}
                  >
                    <ChevronDown
                      size={16}
                      className="text-white/40 transition-transform duration-500"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-400/15 to-transparent mb-5" />
                        <p className="text-sm sm:text-base text-white/50 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
