'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const items = [
  { label: 'Strategy', color: '#6366f1' },
  { label: 'Design', color: '#a78bfa' },
  { label: 'Development', color: '#818cf8' },
  { label: 'Marketing', color: '#c084fc' },
  { label: 'Growth', color: '#e879f9' },
]

export default function HowWeThink() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            className="text-xs font-medium tracking-[0.25em] uppercase text-indigo-300/70"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            HOW WE THINK
          </motion.span>
          <motion.h2
            className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We don&apos;t sell websites.<br />
            <span className="text-indigo-300">We build digital systems that generate growth.</span>
          </motion.h2>
        </div>

        <div className="relative mt-20 max-w-5xl mx-auto">
          <div className="hidden lg:flex items-center justify-center gap-0">
            {items.map((item, i) => (
              <div key={item.label} className="flex items-center">
                <motion.div
                  className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -2, borderColor: 'rgba(129,140,248,0.2)' }}
                >
                  <motion.span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                    animate={{ boxShadow: [`0 0 4px ${item.color}40`, `0 0 10px ${item.color}80`, `0 0 4px ${item.color}40`] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  />
                  <span className="text-sm font-medium text-white/80 whitespace-nowrap">{item.label}</span>
                </motion.div>

                {i < items.length - 1 && (
                  <div className="relative w-16 h-px mx-1">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 1" preserveAspectRatio="none">
                      <motion.line
                        x1="0" y1="0.5"
                        x2="64" y2="0.5"
                        stroke="rgba(99,102,241,0.15)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        initial={{ strokeDashoffset: 0 }}
                        whileInView={{ strokeDashoffset: -40 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      <motion.line
                        x1="0" y1="0.5"
                        x2="64" y2="0.5"
                        stroke="rgba(167,139,250,0.5)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray="6 58"
                        initial={{ strokeDashoffset: 0 }}
                        whileInView={{ strokeDashoffset: -64 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: i * 0.2 }}
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex lg:hidden flex-col items-center gap-4">
            {items.map((item, i) => (
              <div key={item.label} className="flex flex-col items-center">
                <motion.div
                  className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 3, borderColor: 'rgba(129,140,248,0.2)' }}
                >
                  <motion.span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                    animate={{ boxShadow: [`0 0 4px ${item.color}40`, `0 0 10px ${item.color}80`, `0 0 4px ${item.color}40`] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  />
                  <span className="text-sm font-medium text-white/80 whitespace-nowrap">{item.label}</span>
                </motion.div>
                {i < items.length - 1 && (
                  <div className="w-px h-6 my-1">
                    <svg className="w-full h-full" viewBox="0 0 1 24" preserveAspectRatio="none">
                      <motion.line
                        x1="0.5" y1="0"
                        x2="0.5" y2="24"
                        stroke="rgba(99,102,241,0.15)"
                        strokeWidth="1"
                        strokeDasharray="3 3"
                        initial={{ strokeDashoffset: 0 }}
                        whileInView={{ strokeDashoffset: -24 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      <motion.line
                        x1="0.5" y1="0"
                        x2="0.5" y2="24"
                        stroke="rgba(167,139,250,0.5)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray="4 20"
                        initial={{ strokeDashoffset: 0 }}
                        whileInView={{ strokeDashoffset: -24 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: i * 0.2 }}
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
