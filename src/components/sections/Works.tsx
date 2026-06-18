'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Masonry from '@/components/Masonry'

const masonryItems = [
  {
    id: '1',
    img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=900&fit=crop',
    url: '#',
    height: 420,
    title: 'Stellar Dashboard',
    category: 'SaaS Platform',
  },
  {
    id: '2',
    img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=750&fit=crop',
    url: '#',
    height: 280,
    title: 'Luxe Retail',
    category: 'E-Commerce',
  },
  {
    id: '3',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=800&fit=crop',
    url: '#',
    height: 520,
    title: 'Flow Productivity',
    category: 'Web App',
  },
  {
    id: '4',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=700&fit=crop',
    url: '#',
    height: 320,
    title: 'Nova Analytics',
    category: 'Data Platform',
  },
  {
    id: '5',
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=850&fit=crop',
    url: '#',
    height: 460,
    title: 'Vertex Studio',
    category: 'Creative Tool',
  },
  {
    id: '6',
    img: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=600&h=650&fit=crop',
    url: '#',
    height: 300,
    title: 'Pulse Fitness',
    category: 'Mobile App',
  },
  {
    id: '7',
    img: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?w=600&h=950&fit=crop',
    url: '#',
    height: 550,
    title: 'Meridian Bank',
    category: 'Fintech',
  },
  {
    id: '8',
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=720&fit=crop',
    url: '#',
    height: 340,
    title: 'Aether Space',
    category: 'Brand Identity',
  },
  {
    id: '9',
    img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=800&fit=crop',
    url: '#',
    height: 480,
    title: 'Quantum Labs',
    category: 'R&D Platform',
  },
  {
    id: '10',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=680&fit=crop',
    url: '#',
    height: 310,
    title: 'Ember Studio',
    category: 'Design Tool',
  },
  {
    id: '11',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=900&fit=crop',
    url: '#',
    height: 560,
    title: 'Voyager Travel',
    category: 'Travel Tech',
  },
  {
    id: '12',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=740&fit=crop',
    url: '#',
    height: 360,
    title: 'Cypher Security',
    category: 'Cybersecurity',
  },
  {
    id: '13',
    img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&h=820&fit=crop',
    url: '#',
    height: 440,
    title: 'Bloom Market',
    category: 'Marketplace',
  },
  {
    id: '14',
    img: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=700&fit=crop',
    url: '#',
    height: 290,
    title: 'Terra Map',
    category: 'GIS Platform',
  },
  {
    id: '15',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=880&fit=crop',
    url: '#',
    height: 510,
    title: 'Nebula CMS',
    category: 'Content Platform',
  },
  {
    id: '16',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=760&fit=crop',
    url: '#',
    height: 370,
    title: 'Solara Energy',
    category: 'Clean Tech',
  },
  {
    id: '17',
    img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=840&fit=crop',
    url: '#',
    height: 490,
    title: 'Pixl Games',
    category: 'Gaming',
  },
  {
    id: '18',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=720&fit=crop',
    url: '#',
    height: 330,
    title: 'Orbit Finance',
    category: 'Fintech',
  },
  {
    id: '19',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=860&fit=crop',
    url: '#',
    height: 470,
    title: 'Cascade HR',
    category: 'HR Tech',
  },
  {
    id: '20',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=690&fit=crop',
    url: '#',
    height: 300,
    title: 'Drift Social',
    category: 'Social Media',
  },
]

export default function Works() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [showGrid, setShowGrid] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const displayedItems = isMobile ? masonryItems.slice(0, 12) : masonryItems

  useEffect(() => {
    if (isInView) {
      setShowGrid(true)
    }
  }, [isInView])

  useEffect(() => {
    masonryItems.forEach((item) => {
      const img = new Image()
      img.src = item.img
    })
  }, [])

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(255,255,255,0.015),transparent)] pointer-events-none" />
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <SectionHeading
            label="Our Work"
            title="Selected Projects"
            description="Each project represents a partnership built on trust, creativity, and measurable results."
          />
        </motion.div>
        {showGrid && (
          <motion.div
            className="w-full sm:min-h-[900px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {isMobile ? (
              <motion.div
                className="space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {displayedItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
                    }}
                    className="relative rounded-[10px] overflow-hidden group"
                    style={{ aspectRatio: '4/3' }}
                  >
                    <img
                      src={item.img}
                      alt={item.title || 'Project image'}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        {item.category && (
                          <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/50">
                            {item.category}
                          </span>
                        )}
                        {item.title && (
                          <h3 className="text-base font-semibold text-white mt-1">
                            {item.title}
                          </h3>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <Masonry
                items={displayedItems}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={0.95}
                blurToFocus={true}
                colorShiftOnHover={true}
              />
            )}
          </motion.div>
        )}
      </Container>
    </section>
  )
}
