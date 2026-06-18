'use client'

import { motion } from 'framer-motion'

const mobileLogos = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'Node.js', color: '#339933' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Google Ads', color: '#4285F4' },
  { name: 'Analytics', color: '#E37400' },
  { name: 'LinkedIn', color: '#0A66C2' },
  { name: 'YouTube', color: '#FF0000' },
  { name: 'GitHub', color: '#ffffff' },
  { name: 'Vercel', color: '#ffffff' },
]

export function MobileTechMarquee() {
  return (
    <div className="mt-8 lg:hidden">
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {[...mobileLogos, ...mobileLogos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 backdrop-blur-sm"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: logo.color }}
              />
              <span className="whitespace-nowrap text-[0.65rem] font-medium text-white/40">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent" />
      </div>
    </div>
  )
}
