'use client'

import { useEffect, useSyncExternalStore } from 'react'
import { motion, useAnimation } from 'framer-motion'

function useReducedMotion(): boolean {
  const subscribe = (cb: () => void) => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    mql.addEventListener('change', cb)
    return () => mql.removeEventListener('change', cb)
  }

  const getSnapshot = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const getServerSnapshot = () => false

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

function Particles({ reduced }: { reduced: boolean }) {
  const controls = useAnimation()

  useEffect(() => {
    if (reduced) return
    controls.start((i) => ({
      x: [0, Math.sin(i * 1.5) * 40, Math.cos(i * 2) * 30, 0],
      y: [0, Math.cos(i * 1.8) * 50, Math.sin(i * 1.3) * 35, 0],
      opacity: [0, 0.5, 0.3, 0],
      transition: {
        duration: 12 + i * 3,
        repeat: Infinity,
        ease: 'linear',
        delay: i * 2,
      },
    }))
  }, [reduced, controls])

  if (reduced) return null

  return (
    <>
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full bg-white/30"
          style={{
            left: `${20 + i * 22}%`,
            top: `${15 + i * 18}%`,
            willChange: 'transform, opacity',
          }}
          custom={i}
          animate={controls}
        />
      ))}
    </>
  )
}

export default function BackgroundEffects() {
  const reduced = useReducedMotion()

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Ambient glows */}
      <div
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.025) 0%, transparent 70%)',
          willChange: 'opacity',
        }}
      />
      <div
        className="absolute top-[45%] -right-[10%] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.015) 0%, transparent 70%)',
          willChange: 'opacity',
        }}
      />
      <div
        className="absolute bottom-[15%] -left-[5%] w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.01) 0%, transparent 70%)',
          willChange: 'opacity',
        }}
      />
      <div
        className="absolute top-[70%] left-1/3 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.015) 0%, transparent 70%)',
          willChange: 'opacity',
        }}
      />

      {/* Section separation glows */}
      <div
        className="absolute top-[30%] left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)',
        }}
      />
      <div
        className="absolute top-[55%] left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 50%, transparent 100%)',
        }}
      />
      <div
        className="absolute top-[80%] left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)',
        }}
      />

      {/* Diagonal moving light beam */}
      {!reduced && (
        <div
          className="absolute top-0 left-0 w-[200%] h-[300px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 70%, transparent 100%)',
            transform: 'rotate(-25deg)',
            willChange: 'transform',
            animation: 'lightBeam 20s ease-in-out infinite',
          }}
        />
      )}

      {/* Floating particles */}
      <Particles reduced={reduced} />

      <style jsx>{`
        @keyframes lightBeam {
          0%, 100% {
            transform: rotate(-25deg) translate(-30%, -50%);
          }
          25% {
            transform: rotate(-25deg) translate(0%, -40%);
          }
          50% {
            transform: rotate(-25deg) translate(30%, -30%);
          }
          75% {
            transform: rotate(-25deg) translate(0%, -20%);
          }
        }
      `}</style>
    </div>
  )
}
