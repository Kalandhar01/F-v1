'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    name: 'Frontend',
    color: '#61DAFB',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'Backend',
    color: '#339933',
    techs: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'],
  },
  {
    name: 'Cloud',
    color: '#FF9900',
    techs: ['AWS', 'Docker', 'Vercel'],
  },
]

function TechIcon({ name, className }: { name: string; className: string }) {
  const props = { className, fill: 'currentColor' }
  const svgProps = { className, fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }
  switch (name) {
    case 'React':
      return <svg viewBox="0 0 24 24" {...svgProps}><circle cx="12" cy="12" r="2.5"/><path d="M12 2.5c5 0 9.5 2 9.5 4.5 0 1.8-2.8 3.4-7 4.2m-5 0c-4.2-.8-7-2.4-7-4.2 0-2.5 4.5-4.5 9.5-4.5"/><path d="M12 21.5c5 0 9.5-2 9.5-4.5 0-1.8-2.8-3.4-7-4.2m-5 0c-4.2.8-7 2.4-7 4.2C2.5 19.5 7 21.5 12 21.5"/><path d="M7.5 4.5c2.5 4.3 2.5 10.7 0 15m9-15c-2.5 4.3-2.5 10.7 0 15"/></svg>
    case 'Next.js':
      return <svg viewBox="0 0 24 24" {...props}><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.8V9.251l6.734 10.359a12.083 12.083 0 0 1-1.27.525l-3.871-5.975v4.48c.373.151.576.28.576.28v-3.91l2.946 4.54c.526-.205 1.024-.455 1.49-.743l-3.162-4.87v-2.81l6.357 9.795a12.03 12.03 0 0 1-.735.686z"/></svg>
    case 'TypeScript':
      return <svg viewBox="0 0 24 24" {...props}><path d="M3 3h18v18H3V3zm10.75 10.56h-2.58v5.94H9.5v-5.94H6.94v-1.5h6.81v1.5zm.72-1.5h4.07v1.31h-2.66v1.17h2.52v1.2h-2.52v1.64h2.66v1.31H14.47V12.06z"/></svg>
    case 'Node.js':
      return <svg viewBox="0 0 24 24" {...props}><path d="M11.998 24c-.473 0-.947-.122-1.37-.367l-4.316-2.486c-.65-.364-.332-.493-.118-.568.868-.3 1.044-.37 1.97-.898.098-.055.226-.034.327.024l3.315 1.968c.12.07.28.07.39 0l12.92-7.46c.12-.07.19-.19.19-.33V8.13c0-.13-.07-.25-.19-.32l-12.92-7.46c-.12-.07-.27-.07-.39 0l-12.92 7.46c-.12.07-.19.19-.19.32v14.92c0 .13.07.25.19.32l3.54 2.04c1.92.96 3.1-.17 3.1-1.31V9.04c0-.19.15-.33.34-.33h1.63c.19 0 .34.15.34.34v13.98c0 2.56-1.4 4.03-3.83 4.03-.75 0-1.34 0-2.99-.81l-3.41-1.97c-.84-.49-1.36-1.39-1.36-2.38V8.11c0-.99.52-1.89 1.36-2.38l12.92-7.46c.82-.49 1.92-.49 2.74 0l12.92 7.46c.84.49 1.36 1.39 1.36 2.38v14.92c0 .99-.52 1.89-1.36 2.38l-12.92 7.46c-.42.24-.9.37-1.37.37z"/></svg>
    case 'Express.js':
      return <svg viewBox="0 0 24 24" {...props}><path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.2l7.2 3.6-7.2 3.6-7.2-3.6L12 4.2zM4.5 9.9l7 3.5v6.2l-7-3.5V9.9zm15 0v6.2l-7 3.5v-6.2l7-3.5z"/></svg>
    case 'MongoDB':
      return <svg viewBox="0 0 24 24" {...props}><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.816-.636-1.44-.106.624-.356 1.046-.636 1.44-.321.701-3.309 2.535-4.573 8.115-1.014 4.582.627 6.819 1.572 7.626.268.229.582.411.895.559-.111.33-.201.675-.254 1.034-.095.635-.064 1.281.092 1.904.003.014.008.028.014.042.682 1.786 1.687 2.18 1.718 2.196.009.005.019-.001.019.001v.001c-.001 0-.001 0-.001.001l.117.058c.069.032.127.067.183.106.055.037.105.078.149.124.033.035.064.073.089.115.012.02.016.043.023.065.018.057.036.122.053.191.016.068.033.142.05.218.008.036.02.07.028.107-.285-.097-.558-.198-.813-.337-.002.001-.002.001-.002.001h.001c-.001 0-.001 0-.001-.001-1.12-.496-2.035-1.295-2.628-2.343-.599-1.059-.826-2.266-.666-3.47.158-1.188.653-2.226 1.372-3.118.721-.894 1.603-1.564 2.5-2.106.042-.015.084-.031.126-.046.106.015.212.03.318.046.898.543 1.78 1.212 2.501 2.106.72.892 1.214 1.93 1.372 3.118.16 1.204-.067 2.411-.666 3.47-.593 1.048-1.508 1.847-2.628 2.343-.256.14-.529.24-.815.338.008-.037.02-.071.027-.107.017-.076.034-.15.05-.218.017-.069.035-.134.053-.191.007-.022.011-.045.023-.065.025-.042.056-.08.089-.115.044-.046.095-.087.149-.124.056-.039.114-.074.183-.106l.117-.058h.001v-.001h.001c.001 0-.001-.001.001-.001.031-.016 1.036-.41 1.718-2.196.006-.014.011-.028.014-.042.156-.623.187-1.269.092-1.904-.053-.359-.143-.704-.254-1.034.313-.148.627-.33.895-.559.945-.807 2.586-3.044 1.572-7.626z"/></svg>
    case 'PostgreSQL':
      return <svg viewBox="0 0 24 24" {...props}><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm2.9 4.5c.4 0 .8.1 1.2.2 1.5.5 2.5 1.8 2.5 3.4 0 1.2-.5 2.2-1.4 2.9.2.3.3.6.3 1 0 .6-.3 1.1-.8 1.4.6.3 1 .9 1 1.6 0 1.5-1.2 2.7-2.7 2.8-.2 0-.4 0-.5-.1-.3.3-.7.5-1.1.6l.6 2.3-1.3.3-.6-2.2c-.2 0-.5-.1-.7-.1l-.6 2.2-1.3-.3.7-2.6c-.1 0-.2-.1-.3-.1l-2.7-.8.6-1.3 2.2.6c.4.1.8.1 1.2 0l.2-.1c.3-.3.5-.7.5-1.1V9.5c0-.2 0-.5-.1-.7-.1-.5-.4-.9-.8-1.2.5-.6.7-1.3.7-2.1 0-1-.4-1.9-1.2-2.5.4-.1.8-.2 1.3-.2h.5v.1c.2-.1.5-.1.7-.1z"/></svg>
    case 'AWS':
      return <svg viewBox="0 0 24 24" {...props}><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.65 14.08c-.19.25-.53.3-.77.11-1.9-1.49-4.31-2.28-6.78-2.28-1.87 0-3.72.46-5.38 1.37-.24.13-.54.06-.68-.16-.14-.22-.07-.49.15-.64 1.78-1.04 3.8-1.6 5.88-1.6 2.7 0 5.32.87 7.44 2.48.24.19.29.53.14.77v-.05zm1.5-2.99c-.24.32-.64.43-.97.21-2.14-1.59-4.86-2.45-7.73-2.45-2.06 0-4.06.48-5.88 1.42-.25.13-.56.06-.71-.19-.15-.25-.08-.54.15-.7 2.06-1.11 4.33-1.68 6.64-1.68 3.17 0 6.15.98 8.53 2.8.22.17.27.47.1.69-.04-.04-.08-.1-.13-.1z"/></svg>
    case 'Docker':
      return <svg viewBox="0 0 24 24" {...props}><path d="M13.983 11.078h2.119v-1.963h-2.119v1.963zm0-2.66h2.119V6.455h-2.119v1.963zm2.66 2.66h2.119v-1.963h-2.119v1.963zm0-2.66h2.119V6.455h-2.119v1.963zm2.66 2.66h2.119v-1.963h-2.119v1.963zm0-2.66h2.119V6.455h-2.119v1.963zm-7.98 2.66h2.119v-1.963h-2.119v1.963zm0-2.66h2.119V6.455h-2.119v1.963zm-2.66 2.66h2.119v-1.963H8.683v1.963zm0-2.66h2.119V6.455H8.683v1.963zm-2.66 2.66h2.119v-1.963H6.024v1.963zm0-2.66h2.119V6.455H6.024v1.963zM5.338 0C3.343 0 1.62 1.215 1.025 3.118 1.025 3.118 0 5.535 0 9.33c0 1.456.384 2.594 1.015 3.668.67 1.14 1.724 2.048 2.957 2.74 2.105 1.18 4.825 1.628 7.525 1.628 1.924 0 3.823-.177 5.537-.665 1.05-.3 2.017-.728 2.833-1.286.845-.577 1.524-1.31 1.96-2.228.808-1.7.917-3.555.917-5.536v-3.18c0-1.108-.383-1.634-.79-2.034-.293-.287-.854-.85-.854-.85-.453-.387-1.058-.83-2.044-1.192-1.694-.622-3.982-.809-6.02-.809H5.338z"/></svg>
    case 'Vercel':
      return <svg viewBox="0 0 24 24" {...props}><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>
    case 'Tailwind':
      return <svg viewBox="0 0 24 24" {...props}><path d="M12 4C8.8 4 6.6 5.6 5.4 8.8c1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.5 2.6 5.5 2.6 3.2 0 5.4-1.6 6.6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C15.3 5.4 14 4 12 4zM5.4 12C2.2 12 0 13.6-1.2 16.8c1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.5 2.6 5.5 2.6 3.2 0 5.4-1.6 6.6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6-1.2-1.2-2.5-2.6-5.5-2.6z" transform="translate(7.5, 3) scale(0.4)"/></svg>
    default:
      return null
  }
}

const techColors: Record<string, string> = {
  React: '#61DAFB', 'Next.js': '#ffffff', TypeScript: '#3178C6', Tailwind: '#06B6D4',
  'Node.js': '#339933', 'Express.js': '#ffffff', PostgreSQL: '#4169E1', MongoDB: '#47A248',
  AWS: '#FF9900', Docker: '#2496ED', Vercel: '#ffffff',
}

export default function StackShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_100%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">Featured Tech Stack</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: ci * 0.12 }}
            >
              <div
                className="relative rounded-2xl p-6 border h-full"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
              >
                <div className="flex items-center gap-3 mb-6 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: cat.color }}>{cat.name}</span>
                </div>
                <div className="space-y-3">
                  {cat.techs.map((tech, ti) => (
                    <div
                      key={tech}
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-default"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                      }}
                    >
                      <span className="w-5 h-5 flex-shrink-0" style={{ color: techColors[tech] || '#ffffff' }}>
                        <TechIcon name={tech} className="h-full w-full" />
                      </span>
                      <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300 flex-1">{tech}</span>
                      <motion.div
                        className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden flex-1 max-w-[60px]"
                        whileHover={{ scaleX: 1.2, originX: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${60 + Math.random() * 35}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: ci * 0.12 + ti * 0.1, ease: 'easeOut' }}
                          style={{ background: `linear-gradient(to right, ${techColors[tech]}40, ${techColors[tech]})` }}
                        />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
