'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { TechLogoCard } from './TechLogoCard'

const technologies = [
  { name: 'Google Ads', slug: 'googleads', color: '#4285F4', position: { x: 9.5, y: -6 } },
  { name: 'Meta Ads', slug: 'meta', color: '#1877F2', position: { x: 2.5, y: -5.5 } },
  { name: 'Analytics', slug: 'googleanalytics', color: '#E37400', position: { x: 6.5, y: -2.5 } },
  { name: 'Search Console', slug: 'googlesearchconsole', color: '#34A853', position: { x: 1.5, y: -0.5 } },
  { name: 'SEMrush', slug: 'semrush', color: '#FF642D', position: { x: 8, y: 0.5 } },
  { name: 'Ahrefs', slug: 'ahrefs', color: '#2C6BED', position: { x: 3.5, y: 2.5 } },
  { name: 'LinkedIn', slug: 'linkedin', color: '#0A66C2', position: { x: 9, y: 4 } },
  { name: 'Instagram', slug: 'instagram', color: '#E4405F', position: { x: 5, y: 5.5 } },
  { name: 'Facebook', slug: 'meta', color: '#1877F2', position: { x: 1.5, y: 6.5 } },
  { name: 'YouTube', slug: 'youtube', color: '#FF0000', position: { x: 7, y: 6.5 } },
]

export function MarketingEcosystem() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-[20rem] lg:flex xl:w-[26rem]"
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="relative ml-4 h-[38rem] w-full xl:ml-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[34rem] w-[16rem] xl:w-[22rem]">
              {technologies.map((tech, index) => (
                <TechLogoCard
                  key={tech.name}
                  name={tech.name}
                  color={tech.color}
                  icon={
                    <img
                      src={`/icons/${tech.slug}.svg`}
                      alt={tech.name}
                      className="h-full w-full object-contain"
                    />
                  }
                  position={tech.position}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
