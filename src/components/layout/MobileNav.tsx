'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { navLinks, socialLinks, siteConfig } from '@/constants'
import { ChevronDown, X } from 'lucide-react'

const socialIcons: Record<string, React.ReactNode> = {
  Twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Dribbble: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.29zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
}

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const [servicesExpanded, setServicesExpanded] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const close = useCallback(() => {
    setOpen(false)
    setServicesExpanded(false)
  }, [])

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="relative z-50 flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.04] bg-white/[0.02] text-white"
        aria-label="Open menu"
      >
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M1 1h14M1 7h14M1 13h14" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={close}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l border-white/[0.04] bg-black"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between px-5 pt-4 pb-2">
                  <a
                    href={isHomePage ? '#hero' : '/'}
                    className="group flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.03] hover:drop-shadow-[0_0_18px_rgba(99,102,241,0.5)]"
                    onClick={close}
                  >
                    <Image
                      src={siteConfig.assets.logoMobile}
                      alt={siteConfig.name}
                      width={120}
                      height={80}
                      className="h-7 w-auto object-contain transition-all duration-300"
                      priority
                    />
                    <span className="text-sm font-semibold tracking-tight text-white">
                      {siteConfig.name}
                    </span>
                  </a>
                  <button
                    onClick={close}
                    className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.04] bg-white/[0.02] text-white/60 hover:text-white transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <X size={12} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-5 py-1">
                  <nav>
                    <ul className="space-y-6">
                      {navLinks.map((link) => {
                        const isActive = isHomePage && (link.href.startsWith('#') || link.href.startsWith('/#'))
                          ? false
                          : pathname === link.href
                        const hasChildren = !!(link.children && link.children.length > 0)
                        const isServices = link.label === 'Services'

                        if (hasChildren && isServices) {
                          return (
                            <li key={link.label}>
                              <button
                                onClick={() => setServicesExpanded(!servicesExpanded)}
                                className="flex w-full items-center justify-between py-3 text-left"
                              >
                                <span className="text-sm font-semibold tracking-tight text-white">
                                  {link.label}
                                </span>
                                <motion.span
                                  animate={{ rotate: servicesExpanded ? 180 : 0 }}
                                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                                  className="text-white/30"
                                >
                                  <ChevronDown size={12} />
                                </motion.span>
                              </button>

                              <AnimatePresence>
                                {servicesExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                    className="overflow-hidden"
                                  >
                                    <ul className="pb-1 pl-3 border-l border-white/[0.04] ml-1">
                                      {link.children?.map((child) => (
                                        <li key={child.label}>
                                          <a
                                            href={child.href}
                                            onClick={close}
                                            className={cn(
                                              'flex items-center gap-2 py-2.5 text-sm transition-colors duration-200',
                                              pathname === child.href
                                                ? 'text-indigo-300'
                                                : 'text-white/40 hover:text-white/70',
                                            )}
                                          >
                                            {child.label}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </li>
                          )
                        }

                        return (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              onClick={close}
                              className={cn(
                                'flex items-center justify-between py-3 text-sm font-semibold tracking-tight transition-colors duration-200',
                                isActive ? 'text-indigo-300' : 'text-white hover:text-white/70',
                              )}
                            >
                              <span>{link.label}</span>
                              <span className="text-white/20 transition-colors duration-200">→</span>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </nav>
                </div>

                <div className="border-t border-white/[0.04] px-5 py-6 pb-32">
                  <span className="text-[0.5rem] font-semibold tracking-[0.2em] uppercase text-white/20">
                    Social
                  </span>
                  <div className="mt-2 flex items-center gap-4">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-white/30 hover:text-indigo-300/70 transition-colors duration-200"
                      >
                        {socialIcons[s.label]}
                        <span className="text-[0.6rem] font-medium">{s.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
