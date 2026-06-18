'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const platforms = [
  { name: 'Google Ads', slug: 'googleads', color: '#4285F4' },
  { name: 'Meta Ads', slug: 'meta', color: '#1877F2' },
  { name: 'Analytics', slug: 'googleanalytics', color: '#E37400' },
  { name: 'Search Console', slug: 'googlesearchconsole', color: '#34A853' },
  { name: 'SEMrush', slug: 'semrush', color: '#FF642D' },
  { name: 'Ahrefs', slug: 'ahrefs', color: '#2C6BED' },
  { name: 'LinkedIn', slug: 'linkedin', color: '#0A66C2' },
  { name: 'YouTube', slug: 'youtube', color: '#FF0000' },
  { name: 'Mailchimp', slug: 'mailchimp', color: '#FFE01B' },
  { name: 'HubSpot', slug: 'hubspot', color: '#FF7A59' },
]

export default function PlatformWall() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_50%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />

      <Container>
        <SectionHeading
          label="Platforms"
          title="Platform Expertise"
          description="Certified mastery across the industry's most powerful marketing platforms."
        />

        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <motion.div
                  className="relative rounded-2xl border bg-white/[0.02] p-5 flex flex-col items-center text-center gap-3 cursor-default"
                  style={{ borderColor: `${p.color}25` }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl bg-black/40 border flex items-center justify-center p-2.5 transition-all duration-300"
                    style={{ borderColor: `${p.color}25` }}
                  >
                    <img
                      src={`/icons/${p.slug}.svg`}
                      alt={p.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
                    {p.name}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
