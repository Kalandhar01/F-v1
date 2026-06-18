'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Target, BarChart3, Sparkles, Code2, LineChart, Layout } from 'lucide-react'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const metrics = [
  { value: 128, suffix: '%', label: 'Traffic Growth', icon: TrendingUp, color: '#60a5fa' },
  { value: 89, suffix: '%', label: 'Lead Generation', icon: Target, color: '#a78bfa' },
  { value: 64, suffix: '%', label: 'Conversion Increase', icon: BarChart3, color: '#34d399' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: Sparkles, color: '#fbbf24' },
]

const techStack = [
  { name: 'React', slug: 'react', color: '#61DAFB', x: '12%', y: '14%', delay: 0 },
  { name: 'Next.js', slug: 'nextdotjs', color: '#ffffff', x: '62%', y: '26%', delay: 0.1 },
  { name: 'TypeScript', slug: 'typescript', color: '#3178C6', x: '28%', y: '36%', delay: 0.2 },
  { name: 'Node.js', slug: 'nodedotjs', color: '#339933', x: '65%', y: '46%', delay: 0.3 },
  { name: 'MongoDB', slug: 'mongodb', color: '#47A248', x: '18%', y: '57%', delay: 0.15 },
  { name: 'AWS', slug: 'amazonwebservices', color: '#FF9900', x: '52%', y: '68%', delay: 0.25 },
  { name: 'Docker', slug: 'docker', color: '#2496ED', x: '38%', y: '80%', delay: 0.35 },
]

const marketingStack = [
  { name: 'Google Ads', slug: 'googleads', color: '#4285F4', x: '32%', y: '12%', delay: 0 },
  { name: 'Meta Ads', slug: 'meta', color: '#1877F2', x: '66%', y: '24%', delay: 0.15 },
  { name: 'Analytics', slug: 'googleanalytics', color: '#E37400', x: '22%', y: '34%', delay: 0.1 },
  { name: 'Search Console', slug: 'googlesearchconsole', color: '#34A853', x: '55%', y: '44%', delay: 0.25 },
  { name: 'SEMrush', slug: 'semrush', color: '#FF642D', x: '28%', y: '56%', delay: 0.2 },
  { name: 'LinkedIn', slug: 'linkedin', color: '#0A66C2', x: '52%', y: '67%', delay: 0.3 },
  { name: 'Instagram', slug: 'instagram', color: '#E4405F', x: '22%', y: '79%', delay: 0.35 },
]

const features = [
  {
    icon: BarChart3,
    title: 'Performance Marketing',
    description: 'Data-driven campaigns engineered for maximum ROI across every channel.',
    gradient: 'from-blue-500/20 via-blue-500/5 to-transparent',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Growth',
    description: 'Real-time analytics and AI-powered insights that fuel continuous optimization.',
    gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
  },
  {
    icon: Code2,
    title: 'Modern Development',
    description: 'Cutting-edge web platforms built with Next.js, TypeScript, and cloud-native architecture.',
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
  },
]

function techIcon(name: string) {
  const all = [...techStack, ...marketingStack]
  const t = all.find(t => t.name === name)
  if (!t?.slug) return null
  return (
    <img
      src={`/icons/${t.slug}.svg`}
      alt={name}
      className="w-full h-full object-contain"
    />
  )
}

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  return (
    <span className="tabular-nums">
      {isInView ? <CountingNumber value={value} suffix={suffix} /> : <span>0{suffix}</span>}
    </span>
  )
}

function CountingNumber({ value, suffix }: { value: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return

    const duration = 1500
    const start = performance.now()
    let frameId: number

    function frame(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * value)
      if (node) node.textContent = current + suffix
      if (progress < 1) frameId = requestAnimationFrame(frame)
    }

    frameId = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(frameId)
  }, [value, suffix])

  return <span ref={nodeRef}>0{suffix}</span>
}

function Particles() {
  const [isMobileDevice, setIsMobileDevice] = useState(true)

  useEffect(() => {
    setIsMobileDevice(window.innerWidth < 768)
    const handleResize = () => setIsMobileDevice(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 2,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 3,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/10"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

function FloatingChip({
  name,
  color,
  icon,
  x,
  y,
  delay,
}: {
  name: string
  color: string
  icon: React.ReactNode
  x: string
  y: string
  delay: number
}) {
  const floatDistance = 4 + (delay * 10) % 5
  const rotateAmplitude = (delay * 20) % 3 - 1.5

  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{
        opacity: 0.5,
        scale: 1,
        transition: { duration: 0.5, delay },
      }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex items-center gap-2 rounded-full border border-white/[0.04] bg-white/[0.015] px-3 py-1.5 backdrop-blur-sm"
        style={{ color }}
        animate={{
          y: [0, -floatDistance, 0, floatDistance * 0.3, 0],
          rotate: [0, rotateAmplitude * 0.3, -rotateAmplitude * 0.2, rotateAmplitude * 0.4, 0],
        }}
        transition={{
          duration: 3.5 + (delay * 10) % 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay * 1.5,
        }}
        whileHover={{ scale: 1.1, opacity: 1 }}
      >
        <span className="h-3.5 w-3.5">{icon}</span>
        <span className="text-[0.55rem] font-medium whitespace-nowrap tracking-wide uppercase" style={{ color: `${color}cc` }}>
          {name}
        </span>
      </motion.div>
    </motion.div>
  )
}

export default function DigitalGrowthEcosystem() {
  const dashboardRef = useRef<HTMLDivElement>(null)
  const dashboardInView = useInView(dashboardRef, { once: true, margin: '-40px' })

  return (
    <section id="ecosystem" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black z-0" />

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-purple-500/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] bg-blue-500/6 rounded-full blur-[80px]" />
      </div>

      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,255,255,0.03),transparent)]" />
      </div>

      <div className="relative z-[1]"><Particles /></div>

      <Container>
        <div className="relative z-10 max-w-3xl mx-auto text-center mb-24 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="relative z-20 flex items-center justify-center gap-3 mb-5"
          >
            <span className="w-8 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-indigo-300/70">
              DIGITAL GROWTH ECOSYSTEM
            </span>
            <span className="w-8 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
          </motion.div>

          <motion.h2
            className="relative z-30 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-white">
              Everything Your Brand Needs<br className="hidden sm:block" /> To Grow Online.
            </span>
          </motion.h2>

          <motion.p
            className="relative z-20 mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From visibility and engagement to conversions and growth, we combine strategy, creativity, technology, and data-driven marketing to build powerful digital ecosystems.
          </motion.p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-56">
            <div className="relative w-full h-full">
              <motion.div
                className="absolute left-0 top-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-indigo-300/60">
                  Web Stack
                </span>
              </motion.div>
              {techStack.map((t) => (
                <FloatingChip key={t.name} {...t} icon={techIcon(t.name)} />
              ))}
            </div>
          </div>

          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-56">
            <div className="relative w-full h-full">
              <motion.div
                className="absolute right-0 top-4"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-indigo-300/60">
                  Marketing
                </span>
              </motion.div>
              {marketingStack.map((t) => (
                <FloatingChip key={t.name} {...t} icon={techIcon(t.name)} />
              ))}
            </div>
          </div>

          <div ref={dashboardRef} className="relative max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8"
            >
              <motion.div
                className="absolute -inset-[1px] rounded-2xl opacity-60 pointer-events-none"
                whileInView={{
                  boxShadow: [
                    '0 0 30px rgba(99,102,241,0.06), inset 0 1px 0 rgba(255,255,255,0.04)',
                    '0 0 50px rgba(99,102,241,0.12), inset 0 1px 0 rgba(255,255,255,0.06)',
                    '0 0 30px rgba(99,102,241,0.06), inset 0 1px 0 rgba(255,255,255,0.04)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />

              <div className="relative">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Layout size={14} className="text-indigo-400/60" />
                  <span className="text-[0.6rem] font-semibold tracking-[0.25em] uppercase text-white/30">
                    Digital Growth Engine
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {metrics.map((m, i) => {
                    const Icon = m.icon
                    return (
                      <motion.div
                        key={m.label}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        className="relative rounded-xl border border-white/[0.04] bg-white/[0.015] p-4 sm:p-5"
                      >
                        <motion.div
                          className="absolute -inset-[0.5px] rounded-xl opacity-30 pointer-events-none"
                          whileInView={{
                            boxShadow: [
                              `0 0 15px ${m.color}08, inset 0 0 20px ${m.color}04`,
                              `0 0 25px ${m.color}14, inset 0 0 30px ${m.color}06`,
                              `0 0 15px ${m.color}08, inset 0 0 20px ${m.color}04`,
                            ],
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                        />
                        <div className="relative flex items-start justify-between">
                          <div>
                            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                              +<AnimatedCounter value={m.value} suffix={m.suffix} isInView={dashboardInView} />
                            </div>
                            <div className="text-[0.6rem] sm:text-xs text-white/40 mt-1 font-medium tracking-wide uppercase">
                              {m.label}
                            </div>
                          </div>
                          <Icon size={16} className="text-white/15 mt-1 shrink-0" />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 sm:mt-28">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
              hidden: {},
            }}
          >
            {features.map((f) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="group relative rounded-xl border border-white/[0.05] bg-white/[0.015] p-5 sm:p-6 overflow-hidden"
                  whileHover={{ y: -3, borderColor: 'rgba(129,140,248,0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={cn(
                    'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none',
                    `bg-gradient-to-br ${f.gradient}`,
                  )} />
                  <div className="relative">
                    <div className="w-9 h-9 rounded-lg border border-white/[0.04] bg-white/[0.02] flex items-center justify-center mb-3 group-hover:border-indigo-400/20 transition-colors duration-300">
                      <Icon size={16} className="text-indigo-400/60 group-hover:text-indigo-400/80 transition-colors duration-300" />
                    </div>
                    <h3 className="text-sm font-semibold text-white/90 mb-1.5">{f.title}</h3>
                    <p className="text-xs text-white/40 leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
