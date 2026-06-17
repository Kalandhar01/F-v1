'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowUpRight,
  MessageCircle,
  Briefcase,
  Palette,
  Code2,
  Mail,
  ArrowRight,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import { siteConfig, navLinks, footerServiceLinks, socialLinks } from '@/constants'

const socialIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Twitter: MessageCircle,
  LinkedIn: Briefcase,
  Dribbble: Palette,
  GitHub: Code2,
}

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  })

  return (
    <footer ref={ref} className="relative bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10 pt-20 sm:pt-28 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <motion.div className="lg:col-span-4" {...fadeUp(0)}>
            <a
              href="#hero"
              className="inline-flex items-center gap-1 text-2xl font-bold tracking-tight text-white"
            >
              {siteConfig.name}
              <span className="text-white/20 font-light">.</span>
            </a>
            <p className="mt-4 text-sm text-white/40 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>

            <div className="mt-8">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-3">
                Stay in the loop
              </p>
              <div className="flex items-center gap-2 max-w-xs">
                <div className="relative flex-1">
                  <Mail
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-white/[0.03] border border-white/10 rounded-lg text-white placeholder:text-white/20 focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all duration-300"
                  />
                </div>
                <button
                  className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/10 hover:bg-white/15 flex items-center justify-center transition-all duration-300"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={14} className="text-white/50" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-8">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {Icon && (
                      <Icon
                        size={14}
                        className="text-white/40 hover:text-white/70 transition-colors"
                      />
                    )}
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div className="lg:col-span-2" {...fadeUp(0.1)}>
            <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-all duration-300 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={10}
                      className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className="lg:col-span-2" {...fadeUp(0.2)}>
            <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Services
            </h3>
            <ul className="space-y-3.5">
              {footerServiceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-all duration-300 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={10}
                      className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div className="lg:col-span-2" {...fadeUp(0.3)}>
            <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Contact
            </h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-sm text-white/30">{siteConfig.location}</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="mt-16 sm:mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/25 hover:text-white/50 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}
