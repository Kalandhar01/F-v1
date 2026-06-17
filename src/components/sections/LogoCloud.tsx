'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

const logos = [
  { name: 'Raycast', src: 'https://assets.aceternity.com/logos/raycast.webp' },
  { name: 'Twitch', src: 'https://assets.aceternity.com/logos/twitch.webp' },
  { name: 'Spotify', src: 'https://assets.aceternity.com/logos/spotify.webp' },
  { name: 'Hulu', src: 'https://assets.aceternity.com/logos/hulu.webp' },
  { name: 'YouTube', src: 'https://assets.aceternity.com/logos/youtube.webp' },
  { name: 'Character AI', src: 'https://assets.aceternity.com/logos/characterai.png' },
  { name: 'OpenAI', src: 'https://assets.aceternity.com/logos/openai.png' },
  { name: 'Oracle', src: 'https://assets.aceternity.com/logos/oracle.png' },
  { name: 'Portola', src: 'https://assets.aceternity.com/logos/portola.png' },
  { name: 'Granola', src: 'https://assets.aceternity.com/logos/granola.png' },
  { name: 'Vercel', src: 'https://assets.aceternity.com/logos/vercel.png' },
  { name: 'Netflix', src: 'https://assets.aceternity.com/logos/netflix.png' },
  { name: 'Figma', src: 'https://assets.aceternity.com/logos/figma.png' },
  { name: 'Notion', src: 'https://assets.aceternity.com/logos/notion.png' },
  { name: 'Linear', src: 'https://assets.aceternity.com/logos/linear.png' },
  { name: 'Stripe', src: 'https://assets.aceternity.com/logos/stripe.png' },
  { name: 'Discord', src: 'https://assets.aceternity.com/logos/discord.png' },
  { name: 'Slack', src: 'https://assets.aceternity.com/logos/slack.png' },
  { name: 'Framer', src: 'https://assets.aceternity.com/logos/framer.png' },
  { name: 'Sentry', src: 'https://assets.aceternity.com/logos/sentry.png' },
]

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function LogoCloud() {
  const [visible, setVisible] = useState(() => logos.slice(0, 10))
  const poolRef = useRef(shuffleArray(logos.slice(10)))

  useEffect(() => {
    const interval = setInterval(() => {
      const prev = poolRef.current
      const available = prev.length >= 10 ? prev : shuffleArray(logos)
      const next = available.slice(0, 10)
      setVisible(next)
      poolRef.current = shuffleArray(available.slice(10).concat(prev.slice(0, 10)))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="Trusted By"
          title="Used by industry leaders"
          description="From startups to enterprises — the best teams trust us to deliver."
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {visible.map((logo) => (
                <motion.div
                  key={logo.name}
                  layout
                  initial={{ opacity: 0, x: 40, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -40, filter: 'blur(4px)' }}
                  transition={{
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="h-12 sm:h-14 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center px-4 sm:px-6 overflow-hidden"
                >
                  <span className="text-xs sm:text-sm font-medium text-white/40 truncate">
                    {logo.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black" />
        </div>
      </Container>
    </section>
  )
}
