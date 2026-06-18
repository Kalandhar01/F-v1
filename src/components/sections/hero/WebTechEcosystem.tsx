'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { TechLogoCard } from './TechLogoCard'

const technologies = [
  { name: 'React', slug: 'react', color: '#61DAFB', position: { x: -9.5, y: -6 } },
  { name: 'Next.js', slug: 'nextdotjs', color: '#ffffff', position: { x: -2.5, y: -5.5 } },
  { name: 'TypeScript', slug: 'typescript', color: '#3178C6', position: { x: -6.5, y: -2.5 } },
  { name: 'Tailwind', slug: 'tailwindcss', color: '#06B6D4', position: { x: -1.5, y: -0.5 } },
  { name: 'Node.js', slug: 'nodedotjs', color: '#339933', position: { x: -8, y: 0.5 } },
  { name: 'MongoDB', slug: 'mongodb', color: '#47A248', position: { x: -3.5, y: 2.5 } },
  { name: 'AWS', slug: 'amazonwebservices', color: '#FF9900', position: { x: -9, y: 4 } },
  { name: 'GitHub', slug: 'github', color: '#ffffff', position: { x: -5, y: 5.5 } },
  { name: 'Vercel', slug: 'vercel', color: '#ffffff', position: { x: -1.5, y: 6.5 } },
]

export function WebDevEcosystem() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-[20rem] lg:flex xl:w-[26rem]"
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="relative mr-4 h-[38rem] w-full xl:mr-6">
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
