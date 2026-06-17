'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ProfileCard from '@/components/ProfileCard'

const team = [
  {
    name: 'Kalandhar',
    title: 'Lead Developer',
    handle: 'kalandhar',
    status: 'Dev Wizard',
    avatarUrl: '/kalandhar-Image.jpeg',
    miniAvatarUrl: '/kalandhar-Image.jpeg',
    gradient: 'linear-gradient(145deg,#6366f180 0%,#71C4FF44 100%)',
    glowColor: 'rgba(99,102,241,0.67)',
  },
  {
    name: 'Aslam',
    title: 'Digital Marketing Head',
    handle: 'aslam',
    status: 'Growth Driver',
    avatarUrl: '/Aslam.png',
    miniAvatarUrl: '/Aslam.png',
    gradient: 'linear-gradient(145deg,#6366f180 0%,#71C4FF44 100%)',
    glowColor: 'rgba(99,102,241,0.67)',
  },
]

export default function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,255,255,0.01),transparent)] pointer-events-none" />
      <div className="hidden sm:block absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden sm:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-500/3 rounded-full blur-[80px] pointer-events-none" />

      <Container>
        <SectionHeading
          label="Our Team"
          title="Meet the Experts"
          description="The people behind every pixel, every line of code, and every successful launch."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function MemberCard({ member, index }: { member: typeof team[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="flex flex-col items-center">
      <ProfileCard
        name={member.name}
        title={member.title}
        handle={member.handle}
        status={member.status}
        avatarUrl={member.avatarUrl}
        miniAvatarUrl={member.miniAvatarUrl}
        innerGradient={member.gradient}
        behindGlowColor={member.glowColor}
        contactText="View Profile"
        onContactClick={() => {
          const contactSection = document.getElementById('contact')
          contactSection?.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-5 text-center"
      >
        <div className="relative inline-flex flex-col items-center">
          <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-indigo-500/5 via-transparent to-indigo-500/5 blur-xl rounded-full" />
          <h3 className="relative text-xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            {member.name}
          </h3>
          <div className="relative flex items-center gap-2 mt-1">
            <span className="w-6 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-indigo-300/60">
              {member.title}
            </span>
            <span className="w-6 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
