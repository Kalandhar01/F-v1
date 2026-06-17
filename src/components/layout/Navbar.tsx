'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { navLinks, socialLinks, siteConfig } from '@/constants'
import StaggeredMenu from '@/components/StaggeredMenu'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      const isScrolled = currentScrollY > 20
      setScrolled(isScrolled)
      if (isScrolled) {
        setHidden(currentScrollY > lastScrollY.current)
      } else {
        setHidden(false)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { rootMargin: '-40% 0px -55% 0px' },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const menuItems = navLinks.map((l) => ({
    label: l.label,
    ariaLabel: `Go to ${l.label} section`,
    link: l.href,
  }))

  const socialItems = socialLinks.map((s) => ({
    label: s.label,
    link: s.href,
  }))

  return (
    <>
      <div className="md:hidden">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering
          colors={['#0f0f14', '#1a1a24']}
          accentColor="#818cf8"
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          closeOnClickAway
        />
      </div>

      <motion.header
        className={cn(
          'hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'bg-black/80 backdrop-blur-2xl' : '',
        )}
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a
              href="#hero"
              className="text-xl font-bold tracking-tight text-white hover:text-white/80 transition-colors duration-300"
            >
              {siteConfig.name}
              <span className="text-indigo-400 font-light">.</span>
            </a>

            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300',
                      isActive
                        ? 'text-white'
                        : 'text-white/50 hover:text-white hover:bg-white/[0.04]',
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navActive"
                        className="absolute inset-0 rounded-xl bg-white/[0.04]"
                        transition={{ type: 'spring', stiffness: 380, damping: 25 }}
                      />
                    )}
                  </a>
                )
              })}
            </div>
          </div>
        </nav>
      </motion.header>
    </>
  )
}
