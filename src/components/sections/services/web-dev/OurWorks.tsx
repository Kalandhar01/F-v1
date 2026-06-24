'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { ArrowRight, ExternalLink } from 'lucide-react'

const categories = [
  'All',
  'Web Dev',
  'App Dev',
  'Digital Marketing',
] as const

type Category = (typeof categories)[number]

interface Project {
  title: string
  category: Category
  description: string
  image: string
  tags: string[]
  projectUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    title: 'Ractysh Group',
    category: 'Web Dev',
    description: 'Enterprise multi-business ecosystem featuring architecture, construction, real estate, OTC and global trade platforms.',
    image: '/Our-Works/Web-Development/Ractysh-Group/hero.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    projectUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Ractysh Infra',
    category: 'Web Dev',
    description: 'Infrastructure company portal showcasing completed projects, service catalog, and client inquiry management.',
    image: '/Our-Works/Web-Development/Ractysh-Infra/hero.png',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    projectUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Ractysh Associates',
    category: 'Web Dev',
    description: 'Professional services website with detailed service pages, client testimonials, and consultation booking.',
    image: '/Our-Works/Web-Development/Ractysh-Associates/hero.png',
    tags: ['React', 'Firebase', 'Tailwind', 'Vercel'],
    projectUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Ractysh Design',
    category: 'Web Dev',
    description: 'Creative portfolio showcasing design work, client projects, and creative process with immersive visuals.',
    image: '/Our-Works/Web-Development/Ractysh-Design/hero.png',
    tags: ['Next.js', 'Framer Motion', 'GSAP', 'Sanity CMS'],
    projectUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Ractysh Exim',
    category: 'Web Dev',
    description: 'Export-import business website with product catalogs, trade inquiry system, and multi-language support.',
    image: '/Our-Works/Web-Development/Ractysh-Exim/hero.png',
    tags: ['Next.js', 'Stripe', 'Redis', 'Docker'],
    projectUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Ractys Real Estate',
    category: 'Web Dev',
    description: 'High-impact real estate landing page with property listings, virtual tours, and lead capture.',
    image: '/Our-Works/Web-Development/Ractys-Real-Estate/hero.png',
    tags: ['React', 'Mapbox', 'Tailwind', 'HubSpot'],
    projectUrl: '#',
    liveUrl: '#',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

function TagChip({ label, accent }: { label: string; accent?: string }) {
  return (
    <span
      className="text-[11px] font-medium px-2.5 py-1 rounded-md border whitespace-nowrap"
      style={{
        background: accent ? `${accent}08` : 'rgba(255,255,255,0.03)',
        color: accent ? accent : 'rgba(255,255,255,0.45)',
        borderColor: accent ? `${accent}15` : 'rgba(255,255,255,0.06)',
      }}
    >
      {label}
    </span>
  )
}

const categoryColors: Record<string, string> = {
  'Web Dev': '#a78bfa',
  'App Dev': '#60a5fa',
  'Digital Marketing': '#34d399',
}

function ProjectCard({ project }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const accent = categoryColors[project.category] || '#a78bfa'

  return (
    <motion.div
      variants={cardVariants}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative rounded-[20px] overflow-hidden border h-full flex flex-col transition-all duration-500"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
          borderColor: isHovered ? 'rgba(167,139,250,0.2)' : 'rgba(255,255,255,0.06)',
          boxShadow: isHovered ? '0 0 40px rgba(167,139,250,0.06)' : 'none',
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(500px circle at 50% 0%, ${accent}10, transparent 70%)`,
          }}
        />

        <div className="relative h-44 sm:h-56 overflow-hidden shrink-0 bg-[#0a0a0f]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent" />

          <div className="absolute top-3 left-3 z-10">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase backdrop-blur-xl border"
              style={{
                background: 'rgba(10,10,15,0.6)',
                color: accent,
                borderColor: `${accent}20`,
              }}
            >
              {project.category}
            </span>
          </div>
        </div>

        <div className="relative flex flex-col gap-3 p-5 sm:p-6 flex-1">
          <h3
            className="text-lg sm:text-xl font-bold text-white leading-tight transition-colors duration-300"
            style={{ color: isHovered ? '#e0e7ff' : '#ffffff' }}
          >
            {project.title}
          </h3>

          <p className="text-sm text-white/40 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <TagChip key={tag} label={tag} accent={isHovered ? accent : undefined} />
            ))}
          </div>

          <div className="flex items-center gap-4 pt-2 mt-auto">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-300 group/link"
                style={{ color: isHovered ? accent : 'rgba(255,255,255,0.35)' }}
              >
                View Project
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-300 group/link"
                style={{ color: isHovered ? accent : 'rgba(255,255,255,0.35)' }}
              >
                Live Demo
                <ExternalLink
                  size={12}
                  className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function OurWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_100%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <SectionHeading
            label="OUR PORTFOLIO"
            title="Recent Web Development Projects"
            description="A showcase of websites, web applications, business platforms, and digital experiences crafted for modern businesses."
          />
        </div>

        <motion.div
          className="flex overflow-x-auto scrollbar-none gap-2 mb-12 sm:mb-16 justify-start sm:justify-center px-1 -mx-5 sm:mx-0 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative shrink-0 px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background:
                  activeCategory === cat
                    ? 'linear-gradient(135deg, rgba(167,139,250,0.2), rgba(139,92,246,0.1))'
                    : 'rgba(255,255,255,0.03)',
                color: activeCategory === cat ? '#c4b5fd' : 'rgba(255,255,255,0.5)',
                border:
                  activeCategory === cat
                    ? '1px solid rgba(167,139,250,0.25)'
                    : '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(167,139,250,0.2), rgba(139,92,246,0.1))',
                    border: '1px solid rgba(167,139,250,0.25)',
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.length > 0 ? (
              filtered.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))
            ) : (
              <motion.div
                variants={cardVariants}
                className="col-span-full text-center py-20"
              >
                <p className="text-white/30 text-lg">No projects found in this category yet.</p>
                <p className="text-white/20 text-sm mt-2">
                  We&apos;re constantly adding new work. Check back soon!
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="max-w-xl mx-auto p-8 sm:p-10 rounded-2xl border border-white/[0.06] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent pointer-events-none" />
            <h3 className="relative text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to Build Your Next Project?
            </h3>
            <p className="relative text-white/40 text-sm sm:text-base mb-6 max-w-md mx-auto">
              Create high-performance websites and web applications designed for growth.
            </p>
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                href="/#contact"
                variant="primary"
                size="lg"
              >
                Start Your Project
                <ArrowRight size={16} />
              </Button>
              <Button
                href="/#contact"
                variant="secondary"
                size="lg"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
