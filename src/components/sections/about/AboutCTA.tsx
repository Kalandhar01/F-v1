'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function AboutCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            className="text-xs font-medium tracking-[0.25em] uppercase text-indigo-300/70"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            LET&apos;S WORK TOGETHER
          </motion.span>

          <motion.h2
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready To Build Something<br />Exceptional?
          </motion.h2>

          <motion.p
            className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let&apos;s create digital experiences that stand out and drive measurable growth.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button href="/#contact" size="lg">
              Start Project
            </Button>
            <Button href="#consultation" variant="secondary" size="lg">
              Book Consultation
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
