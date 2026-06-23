'use client'

import { useEffect, useState } from 'react'
import LightRays from '@/components/LightRays'

export default function PageLighting() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-[60] pointer-events-none mix-blend-screen">
      <LightRays
        raysOrigin="top-center"
        raysColor="#6366f1"
        raysSpeed={0.3}
        lightSpread={1.5}
        rayLength={2}
        saturation={0.3}
        fadeDistance={0.8}
        followMouse={false}
        noiseAmount={0.08}
        pulsating
      />
    </div>
  )
}
