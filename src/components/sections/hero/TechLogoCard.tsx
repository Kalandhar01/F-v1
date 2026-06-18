'use client'

import { motion } from 'framer-motion'

interface TechLogoCardProps {
  name: string
  color: string
  icon: React.ReactNode
  position: { x: number; y: number }
  index: number
  isInView: boolean
}

export function TechLogoCard({ name, color, icon, position, index, isInView }: TechLogoCardProps) {
  const floatDuration = 3.8 + (index % 5) * 0.9
  const floatDelay = (index % 7) * 0.35
  const floatY = 5 + (index % 4) * 2.5
  const floatX = 2 + (index % 3) * 1.5
  const rotateAmplitude = index % 2 === 0 ? 2.5 : -2

  return (
    <motion.div
      className="pointer-events-none absolute flex items-center justify-center"
      style={{
        left: `${position.x * 12 + 150}px`,
        top: `${position.y * 12 + 260}px`,
        width: '32px',
        height: '32px',
        willChange: 'transform',
      }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={
        isInView
          ? {
              opacity: 0.45,
              scale: 1,
              y: [0, -floatY, 0, floatY * 0.4, 0],
              x: [0, floatX * 0.3, -floatX * 0.2, floatX * 0.5, 0],
              rotate: [0, rotateAmplitude * 0.5, -rotateAmplitude * 0.3, rotateAmplitude * 0.4, 0],
              transition: {
                opacity: { duration: 0.6, delay: index * 0.08 },
                scale: { duration: 0.6, delay: index * 0.08 },
                y: {
                  duration: floatDuration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: floatDelay,
                },
                x: {
                  duration: floatDuration * 1.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: floatDelay + 0.4,
                },
                rotate: {
                  duration: floatDuration * 1.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: floatDelay + 0.2,
                },
              },
            }
          : { opacity: 0, scale: 0.6 }
      }
      whileHover={{
        scale: 1.2,
        boxShadow: `0 0 20px ${color}22, 0 0 40px ${color}11`,
      }}
    >
      <div
        className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.04] bg-white/[0.015] backdrop-blur-sm"
        style={{ color, willChange: 'transform' }}
      >
        {icon}
      </div>
    </motion.div>
  )
}
