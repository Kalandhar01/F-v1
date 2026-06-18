'use client'

import { useEffect, useState } from 'react'
import ColorBends from '@/components/ColorBends'

export default function AboutBackground({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative">
      {mounted && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 1,
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
        >
          <div style={{ width: '100vw', height: '100vh' }}>
            <ColorBends
              colors={["#818cf8", "#a78bfa", "#2dd4bf"]}
              rotation={90}
              speed={0.3}
              scale={0.4}
              frequency={1}
              warpStrength={0.8}
              mouseInfluence={0.5}
              noise={0.1}
              intensity={2.5}
              bandWidth={4}
              autoRotate={5}
            />
          </div>
        </div>
      )}
      <div style={{ position: 'relative', zIndex: 3 }}>{children}</div>
    </div>
  )
}
