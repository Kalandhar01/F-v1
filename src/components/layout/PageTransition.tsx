'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1 })
  }, [controls])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
    >
      {children}
    </motion.div>
  )
}
