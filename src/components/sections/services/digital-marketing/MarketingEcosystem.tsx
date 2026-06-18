'use client'

import { useRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'

const platforms = [
  { name: 'Google Ads', color: '#4285F4' },
  { name: 'Meta Ads', color: '#1877F2' },
  { name: 'Analytics', color: '#E37400' },
  { name: 'Search Console', color: '#34A853' },
  { name: 'LinkedIn', color: '#0A66C2' },
  { name: 'Instagram', color: '#E4405F' },
  { name: 'Facebook', color: '#1877F2' },
  { name: 'YouTube', color: '#FF0000' },
  { name: 'Ahrefs', color: '#2C6BED' },
  { name: 'SEMrush', color: '#FF642D' },
  { name: 'HubSpot', color: '#FF7A59' },
  { name: 'Mailchimp', color: '#FFE01B' },
]

function PlatformIcon({ name, className }: { name: string; className: string }) {
  const props = { className, fill: 'currentColor' }
  const svgProps = { className, fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }
  switch (name) {
    case 'Google Ads':
      return <svg viewBox="0 0 24 24" {...svgProps}><circle cx="12" cy="12" r="9" /><path d="M7 12h10M12 7v10" /></svg>
    case 'Meta Ads':
      return <svg viewBox="0 0 24 24" {...props}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
    case 'Analytics':
      return <svg viewBox="0 0 24 24" {...svgProps}><path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-6" /></svg>
    case 'Search Console':
      return <svg viewBox="0 0 24 24" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
    case 'LinkedIn':
      return <svg viewBox="0 0 24 24" {...props}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
    case 'Instagram':
      return <svg viewBox="0 0 24 24" {...props}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
    case 'Facebook':
      return <svg viewBox="0 0 24 24" {...props}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
    case 'YouTube':
      return <svg viewBox="0 0 24 24" {...props}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
    case 'Ahrefs':
      return <svg viewBox="0 0 24 24" {...props}><path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 3.36l7 3.5v7.28l-7 3.5-7-3.5V8.86l7-3.5z" /><path d="M12 8l4 2v4l-4 2-4-2v-4l4-2z" /></svg>
    case 'SEMrush':
      return <svg viewBox="0 0 24 24" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-11l7 5.5-7 5.5z" /></svg>
    case 'HubSpot':
      return <svg viewBox="0 0 24 24" {...props}><path d="M18.4 16.2c-.7 0-1.3.3-1.8.7L12 13.3c.2-.4.3-.9.3-1.3 0-.5-.1-.9-.3-1.3l4.5-3.6c.5.4 1.1.7 1.8.7 1.5 0 2.7-1.2 2.7-2.7S19.5 3 18 3s-2.7 1.2-2.7 2.7c0 .3 0 .5.1.8l-4.7 3.7c-.5-.3-1.1-.5-1.7-.5-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7c.6 0 1.2-.2 1.7-.5l4.7 3.7c0 .3-.1.5-.1.8 0 1.5 1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7-1.2-2.7-2.7-2.7z" /></svg>
    case 'Mailchimp':
      return <svg viewBox="0 0 24 24" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.5h-3v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9c-.55 0-1 .45-1 1s.45 1 1 1h3c0 .55.45 1 1 1s1-.45 1-1h3c.55 0 1-.45 1-1s-.45-1-1-1z" /></svg>
    default:
      return null
  }
}

const sizes = ['h-8 w-8', 'h-10 w-10', 'h-9 w-9', 'h-11 w-11', 'h-8 w-8', 'h-10 w-10', 'h-9 w-9', 'h-11 w-11', 'h-8 w-8', 'h-10 w-10', 'h-9 w-9', 'h-8 w-8']

export default function MarketingEcosystem() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const chips = useMemo(() => platforms.map((p, i) => ({
    ...p,
    size: sizes[i],
    floatY: 2 + Math.random() * 4,
    floatDuration: 3 + Math.random() * 2,
    delay: Math.random() * 2,
  })), [])

  return (
    <section className="relative pt-48 pb-24 sm:pt-56 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_25%_at_50%_50%,rgba(99,102,241,0.04),transparent)] pointer-events-none" />
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight relative z-[100]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white">Marketing Platforms We Master</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-white/50 text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Leveraging industry-leading platforms to maximize visibility, engagement, and conversions.
          </motion.p>
        </div>

        <div className="relative flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6 max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(99,102,241,0.06),transparent_70%)] pointer-events-none" />
          {chips.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? {
                opacity: 1, scale: 1, y: 0,
                transition: { duration: 0.5, delay: i * 0.06 },
              } : { opacity: 0, scale: 0.8, y: 20 }}
            >
              <motion.div
                className="group cursor-default"
                animate={isInView ? {
                  y: [0, -p.floatY, 0],
                  transition: {
                    duration: p.floatDuration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: p.delay,
                  },
                } : {}}
                whileHover={{ scale: 1.12, transition: { duration: 0.2 } }}
              >
                <div
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.06)',
                  }}
                >
                  <span className={p.size} style={{ color: p.color }}>
                    <PlatformIcon name={p.name} className="h-full w-full" />
                  </span>
                  <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
                    {p.name}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
