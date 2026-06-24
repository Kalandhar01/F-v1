'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { navLinks, socialLinks, siteConfig } from '@/constants'
import StaggeredMenu, { type StaggeredMenuItem } from '@/components/StaggeredMenu'
import { ChevronDown, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [servicesOpen, setServicesOpen] = useState(false)
  const lastScrollY = useRef(0)
  const servicesRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      const isScrolled = currentScrollY > 120
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
    if (pathname !== '/') return
    const ids = navLinks.map((l) => l.href.replace('/#', ''))
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
  }, [pathname])

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150)
  }, [])

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [])

  const isHomePage = pathname === '/'

  const mobileItems: StaggeredMenuItem[] = navLinks.flatMap((link) => {
    if (link.children) {
      return [
        { label: 'Services', ariaLabel: 'Services menu', link: '#', isGroupHeader: true },
        ...link.children.map((child) => ({
          label: child.label,
          ariaLabel: child.label,
          link: child.href,
          isSubItem: true,
        })),
      ]
    }
    return { label: link.label, ariaLabel: `Go to ${link.label} section`, link: link.href }
  })

  return (
    <>
      <div className="md:hidden">
        <StaggeredMenu
          position="right"
          items={mobileItems}
          socialItems={socialLinks.map(s => ({ label: s.label, link: s.href }))}
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
          scrolled
            ? 'bg-[rgba(5,5,10,0.75)] backdrop-blur-2xl'
            : 'bg-transparent',
        )}
        initial={false}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a
              href={isHomePage ? '#hero' : '/'}
              className="group flex shrink-0 items-center gap-3 pr-5 transition-all duration-300 hover:scale-[1.03] hover:drop-shadow-[0_0_22px_rgba(99,102,241,0.55)]"
            >
              <Image
                src={siteConfig.assets.logoDesktop}
                alt={siteConfig.name}
                width={240}
                height={160}
                className="h-16 sm:h-20 w-auto object-contain transition-all duration-300"
                priority
              />
              <span className="whitespace-nowrap text-base sm:text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-indigo-100">
                {siteConfig.name}
              </span>
            </a>

            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                if (link.children) {
                  const isActive = pathname.startsWith('/services')
                  return (
                    <div
                      key={link.label}
                      ref={servicesRef}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        className={cn(
                          'relative flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300',
                          isActive
                            ? 'text-white'
                            : 'text-white/50 hover:text-white hover:bg-white/[0.04]',
                        )}
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={cn(
                            'transition-transform duration-200',
                            servicesOpen && 'rotate-180',
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px]"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            <div
                              className="rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/6 border border-white/[0.06]"
                              style={{
                                background: 'rgba(10,10,15,0.92)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                              }}
                            >
                              <div className="p-5">
                                <div className="flex gap-10">
                                  <div className="flex-1 min-w-0">
                                    <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-4">
                                      Development
                                    </h3>
                                    <div className="space-y-0.5">
                                      <a
                                        href="/services/web-development"
                                        className="group flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-300 hover:bg-indigo-500/10"
                                      >
                                        <span className="text-sm font-medium text-white/80 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5">
                                          Website Development
                                        </span>
                                        <ArrowRight size={12} className="text-indigo-400 opacity-0 -ml-2 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" />
                                      </a>
                                      <a
                                        href="/services/app-development"
                                        className="group flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-300 hover:bg-indigo-500/10"
                                      >
                                        <span className="text-sm font-medium text-white/80 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5">
                                          App Development
                                        </span>
                                        <ArrowRight size={12} className="text-indigo-400 opacity-0 -ml-2 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" />
                                      </a>
                                    </div>
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-4">
                                      Marketing &amp; Growth
                                    </h3>
                                    <div className="space-y-0.5">
                                      <a
                                        href="/services/digital-marketing"
                                        className="group flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-300 hover:bg-indigo-500/10"
                                      >
                                        <span className="text-sm font-medium text-white/80 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5">
                                          Digital Marketing
                                        </span>
                                        <ArrowRight size={12} className="text-indigo-400 opacity-0 -ml-2 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" />
                                      </a>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                const isActive = isHomePage && activeSection === link.href.replace('/#', '')
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
