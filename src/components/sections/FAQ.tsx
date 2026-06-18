'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const testimonials = [
  {
    quote:
      'DreamDigital Deal transformed our digital presence completely. The new platform increased our conversion rate by 45% within the first month. Their strategic UX approach was a game-changer for our business.',
    author: 'Ananya Sharma',
    role: 'CEO',
    company: 'Stellar Technologies',
    initials: 'AS',
    gradient: 'from-purple-500/10 to-blue-500/5',
  },
  {
    quote:
      'Working with DreamDigital Deal felt like an extension of our own team. They understood our vision from day one and delivered beyond expectations. The analytics dashboard handles 50K+ users flawlessly.',
    author: 'Arjun Patel',
    role: 'CTO',
    company: 'Flow Productivity',
    initials: 'AP',
    gradient: 'from-blue-500/10 to-cyan-500/5',
  },
  {
    quote:
      'The e-commerce experience DreamDigital Deal built is absolutely stunning. Our revenue grew 150% year-over-year, and our customers consistently compliment the smooth shopping experience.',
    author: 'Priya Singh',
    role: 'VP of Product',
    company: 'Luxe Retail Group',
    initials: 'PS',
    gradient: 'from-indigo-500/10 to-purple-500/5',
  },
  {
    quote:
      'Their expertise in modern web architecture saved us months of development time. The platform is not only beautiful but incredibly performant — 99.9% uptime since launch.',
    author: 'Rahul Verma',
    role: 'Engineering Director',
    company: 'Meridian Bank',
    initials: 'RV',
    gradient: 'from-cyan-500/10 to-blue-500/5',
  },
  {
    quote:
      'DreamDigital Deal doesn\'t just build websites — they build growth engines. Our user engagement metrics improved by 3x after the redesign. Their data-driven approach is unparalleled.',
    author: 'Neha Gupta',
    role: 'Head of Growth',
    company: 'Pulse Fitness',
    initials: 'NG',
    gradient: 'from-purple-500/10 to-pink-500/5',
  },
  {
    quote:
      'From strategy to execution, DreamDigital Deal delivered excellence at every step. The brand identity they created is timeless, and the web experience perfectly captures our premium positioning.',
    author: 'Vikram Joshi',
    role: 'Founder & Creative Director',
    company: 'Aether Space',
    initials: 'VJ',
    gradient: 'from-blue-500/10 to-indigo-500/5',
  },
]

const rows = [
  testimonials.slice(0, 3),
  testimonials.slice(3, 6),
]

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.015),transparent)] pointer-events-none" />
      <Container>
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Real feedback from real partnerships — here is what our clients have to say about working with us."
        />
      </Container>

      <div ref={ref} className="relative space-y-5">
        {rows.map((row, rowIdx) => (
          <motion.div
            key={rowIdx}
            className="flex gap-5 w-max"
            initial={{ x: rowIdx === 0 ? '0%' : '-33%' }}
            animate={
              isInView
                ? {
                    x: rowIdx === 0 ? '-33%' : '0%',
                    transition: {
                      duration: 40,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }
                : { x: rowIdx === 0 ? '0%' : '-33%' }
            }
            whileHover={{ transition: { duration: 80 } }}
          >
            {[...row, ...row, ...row].map((t, i) => (
              <div
                key={`${t.author}-${i}`}
                className="group relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-white/[0.01] bg-white/[0.02] p-7 sm:p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.1] w-[340px] sm:w-[380px] flex-shrink-0"
              >
                <Quote size={18} className="text-white/10 absolute top-6 right-6" />

                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={12} className="fill-indigo-400/40 text-indigo-400/40" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-6 line-clamp-4">
                  {t.quote}
                </p>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.1] transition-colors duration-300">
                    <span className="text-xs font-semibold text-white/50">
                      {t.initials}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-white/80 truncate">
                      {t.author}
                    </div>
                    <div className="text-xs text-white/40 truncate">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
