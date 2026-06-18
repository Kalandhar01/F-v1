import type { Metadata } from 'next'
import { BRAND } from '@/config/brand'
import ServicesPageWrapper from '@/components/ServicesPageWrapper'
import ServiceHero from '@/components/sections/services/ServiceHero'
import TechEcosystem from '@/components/sections/services/web-dev/TechEcosystem'
import WhatWeBuild from '@/components/sections/services/web-dev/WhatWeBuild'
import DevProcess from '@/components/sections/services/web-dev/DevProcess'
import Comparison from '@/components/sections/services/web-dev/Comparison'
import ProjectShowcase from '@/components/sections/services/web-dev/ProjectShowcase'
import FinalCTA from '@/components/sections/services/FinalCTA'
import FadeInView from '@/components/ui/FadeInView'

export const metadata: Metadata = {
  title: 'Professional Website Development Services',
  description: BRAND.description,
  openGraph: {
    title: `Website Development Services | ${BRAND.name}`,
    description: BRAND.description,
    images: [{ url: BRAND.assets.socialPreview, width: 1200, height: 630, alt: `${BRAND.name} - ${BRAND.tagline}` }],
  },
}

export default function WebDevelopmentPage() {
  return (
    <ServicesPageWrapper>
      <ServiceHero
        label="Website Development"
        title="Custom Websites That Drive Business Growth"
        description="We build high-performance web applications using cutting-edge technology. From business websites to complex SaaS platforms, every project is crafted for speed, scalability, and exceptional user experiences."
        ctaText="Start Your Project"
        ctaHref="/#contact"
        secondaryCtaText="Book a Call"
        secondaryCtaHref="/#contact"
        techIcons={[
          { name: 'React', color: '#61DAFB' },
          { name: 'Next.js', color: '#ffffff' },
          { name: 'TypeScript', color: '#3178C6' },
          { name: 'Node.js', color: '#339933' },
          { name: 'AWS', color: '#FF9900' },
        ]}
      />

      <FadeInView><TechEcosystem /></FadeInView>
      <FadeInView><WhatWeBuild /></FadeInView>
      <FadeInView><DevProcess /></FadeInView>
      <FadeInView><Comparison /></FadeInView>
      <FadeInView><ProjectShowcase /></FadeInView>
      <FadeInView>
        <FinalCTA
          title="Ready To Build Something Exceptional?"
          description="Let's create fast, scalable, and modern digital experiences that help your business grow."
          primaryText="Start Your Project"
          secondaryText="Schedule A Call"
        />
      </FadeInView>
    </ServicesPageWrapper>
  )
}
