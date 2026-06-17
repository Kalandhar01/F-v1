'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, siteConfig } from '@/constants'
import { useScrollspy } from '@/hooks/useScrollspy'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollspy(
    navLinks.map((l) => l.href.replace('#', '')),
    120,
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.04]'
            : 'bg-transparent',
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a
              href="#hero"
              className="text-xl font-bold tracking-tight text-white"
            >
              {siteConfig.name}
              <span className="text-white/30 font-light">.</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeId === link.href.replace('#', '')
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300',
                      isActive
                        ? 'text-white'
                        : 'text-white/50 hover:text-white hover:bg-white/5',
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 bg-white/5 rounded-lg"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                )
              })}
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative z-50 p-2 text-white/60 hover:text-white transition-colors"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>{open && <MobileMenu onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  )
}
