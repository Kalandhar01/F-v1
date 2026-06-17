'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { faqs } from '@/constants'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          description="Answers to the most common questions about how we work and what to expect."
        />

        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="group border-b border-white/5 last:border-b-0"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 sm:py-6 text-left transition-colors duration-300 hover:bg-white/[0.01] px-4 -mx-4 rounded-lg"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-white/80 group-hover:text-white transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                    {isOpen ? (
                      <Minus size={14} className="text-white/60" />
                    ) : (
                      <Plus size={14} className="text-white/60" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
                        opacity: { duration: 0.2, delay: 0.1 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 sm:pb-6 px-4">
                        <p className="text-sm text-white/50 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
