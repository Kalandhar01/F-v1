'use client'

import { motion } from 'framer-motion'
import { navLinks, siteConfig } from '@/constants'

interface MobileMenuProps {
  onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="flex flex-col items-center gap-8">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-2xl font-medium text-white/70 hover:text-white transition-colors"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.07,
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1] as const,
            }}
          >
            {link.label}
          </motion.a>
        ))}
      </nav>

      <motion.p
        className="absolute bottom-12 text-sm text-white/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {siteConfig.name} &mdash; {siteConfig.tagline}
      </motion.p>
    </motion.div>
  )
}
