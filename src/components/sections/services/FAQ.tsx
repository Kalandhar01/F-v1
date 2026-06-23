'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

interface FAQProps {
  label?: string
  title?: string
  description?: string
  items: { question: string; answer: string }[]
}

export default function FAQ({ label, title = 'Frequently Asked Questions', description, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_50%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <Container>
        <SectionHeading
          label={label ?? ''}
          title={title}
          description={description ?? ''}
        />
        <div ref={ref} className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border overflow-hidden transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.005))',
                  borderColor: openIndex === i ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.06)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-5 py-4 sm:py-5 text-left transition-colors duration-200"
                  style={{ background: openIndex === i ? 'rgba(99,102,241,0.04)' : 'transparent' }}
                  aria-expanded={openIndex === i}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <HelpCircle size={14} className="text-indigo-400/50 mt-0.5 flex-shrink-0 hidden sm:block" />
                    <span className="text-sm sm:text-base font-medium text-white/80">{item.question}</span>
                  </div>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{
                      background: openIndex === i ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.03)',
                    }}
                  >
                    <ChevronDown size={14} className="text-white/40" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 border-t border-white/[0.04] mt-0">
                        <p className="text-xs sm:text-sm text-white/50 leading-relaxed pt-3">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
