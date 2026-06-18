'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    name: 'Advertising',
    color: '#4285F4',
    techs: ['Google Ads', 'Meta Ads'],
  },
  {
    name: 'SEO',
    color: '#FF642D',
    techs: ['Ahrefs', 'SEMrush', 'Search Console'],
  },
  {
    name: 'Analytics',
    color: '#E37400',
    techs: ['Analytics', 'Hotjar'],
  },
  {
    name: 'Automation',
    color: '#FF7A59',
    techs: ['HubSpot', 'Mailchimp'],
  },
]

function ToolIcon({ name, className }: { name: string; className: string }) {
  const props = { className, fill: 'currentColor' }
  const svgProps = { className, fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }
  switch (name) {
    case 'Google Ads':
      return <svg viewBox="0 0 24 24" {...svgProps}><circle cx="12" cy="12" r="9" /><path d="M7 12h10M12 7v10" /></svg>
    case 'Meta Ads':
      return <svg viewBox="0 0 24 24" {...props}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
    case 'Ahrefs':
      return <svg viewBox="0 0 24 24" {...props}><path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 3.36l7 3.5v7.28l-7 3.5-7-3.5V8.86l7-3.5z" /><path d="M12 8l4 2v4l-4 2-4-2v-4l4-2z" /></svg>
    case 'SEMrush':
      return <svg viewBox="0 0 24 24" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-11l7 5.5-7 5.5z" /></svg>
    case 'Search Console':
      return <svg viewBox="0 0 24 24" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
    case 'Analytics':
      return <svg viewBox="0 0 24 24" {...svgProps}><path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-6" /></svg>
    case 'Hotjar':
      return <svg viewBox="0 0 24 24" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
    case 'HubSpot':
      return <svg viewBox="0 0 24 24" {...props}><path d="M18.4 16.2c-.7 0-1.3.3-1.8.7L12 13.3c.2-.4.3-.9.3-1.3 0-.5-.1-.9-.3-1.3l4.5-3.6c.5.4 1.1.7 1.8.7 1.5 0 2.7-1.2 2.7-2.7S19.5 3 18 3s-2.7 1.2-2.7 2.7c0 .3 0 .5.1.8l-4.7 3.7c-.5-.3-1.1-.5-1.7-.5-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7c.6 0 1.2-.2 1.7-.5l4.7 3.7c0 .3-.1.5-.1.8 0 1.5 1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7-1.2-2.7-2.7-2.7z" /></svg>
    case 'Mailchimp':
      return <svg viewBox="0 0 24 24" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.5h-3v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9c-.55 0-1 .45-1 1s.45 1 1 1h3c0 .55.45 1 1 1s1-.45 1-1h3c.55 0 1-.45 1-1s-.45-1-1-1z" /></svg>
    default:
      return null
  }
}

const toolColors: Record<string, string> = {
  'Google Ads': '#4285F4', 'Meta Ads': '#1877F2',
  Ahrefs: '#2C6BED', SEMrush: '#FF642D', 'Search Console': '#34A853',
  Analytics: '#E37400', Hotjar: '#FD3A5C',
  HubSpot: '#FF7A59', Mailchimp: '#FFE01B',
}

export default function MarketingTools() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_100%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-16 relative z-[100]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white">Marketing Tools Stack</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: ci * 0.12 }}
            >
              <div
                className="relative rounded-2xl p-6 border h-full"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
              >
                <div className="flex items-center gap-3 mb-6 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: cat.color }}>{cat.name}</span>
                </div>
                <div className="space-y-3">
                  {cat.techs.map((tech) => (
                    <div
                      key={tech}
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl cursor-default"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                      }}
                    >
                      <span className="w-5 h-5 flex-shrink-0" style={{ color: toolColors[tech] || '#ffffff' }}>
                        <ToolIcon name={tech} className="h-full w-full" />
                      </span>
                      <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
