import type { Metadata } from 'next'
import { BRAND } from '@/config/brand'
import ServicesPageWrapper from '@/components/ServicesPageWrapper'
import ServiceHero from '@/components/sections/services/ServiceHero'
import TechEcosystem from '@/components/sections/services/app-dev/TechEcosystem'
import WhatWeBuild from '@/components/sections/services/app-dev/WhatWeBuild'
import DevProcess from '@/components/sections/services/app-dev/DevProcess'
import Comparison from '@/components/sections/services/app-dev/Comparison'
import FinalCTA from '@/components/sections/services/FinalCTA'
import FadeInView from '@/components/ui/FadeInView'
import PageLighting from '@/components/PageLighting'

export const metadata: Metadata = {
  title: 'Mobile App Development Services',
  description: BRAND.description,
  openGraph: {
    title: `App Development Services | ${BRAND.name}`,
    description: BRAND.description,
    images: [{ url: BRAND.assets.socialPreview, width: 1200, height: 630, alt: `${BRAND.name} - ${BRAND.tagline}` }],
  },
}

export default function AppDevelopmentPage() {
  return (
    <ServicesPageWrapper>
      <PageLighting />
      <ServiceHero
        label="App Development"
        title="Modern Mobile Apps That Drive Engagement"
        gradientWord="Drive Engagement"
        description="We build high-performance mobile applications for iOS, Android, and cross-platform."
        descriptionHighlight="From business apps to SaaS platforms — every app crafted for exceptional user experiences and long-term success."
        ctaText="Build Your App"
        ctaHref="/#contact"
        secondaryCtaText="Book Consultation"
        secondaryCtaHref="/#contact"
        techIcons={[
          { name: 'React Native', color: '#61DAFB' },
          { name: 'iOS', color: '#ffffff' },
          { name: 'Android', color: '#34A853' },
          { name: 'Expo', color: '#000020' },
          { name: 'Firebase', color: '#FFCA28' },
        ]}
        floatingMetrics={[
          { icon: 'Smartphone', value: '50+', label: 'Apps Delivered', color: '#818cf8', x: '5%', y: '20%' },
          { icon: 'Users', value: '500K+', label: 'Total Downloads', color: '#34A853', x: '85%', y: '15%' },
          { icon: 'Star', value: '4.8', label: 'Avg. Rating', color: '#FBBC04', x: '90%', y: '60%' },
          { icon: 'Rocket', value: '99.9%', label: 'Crash-Free Rate', color: '#f472b6', x: '3%', y: '65%' },
        ]}
        trustBadges={['App Store Featured', 'Play Store Certified', 'React Native Experts']}
        stats={[
          { value: '50+', label: 'Apps Built' },
          { value: '500K+', label: 'Downloads' },
          { value: '4.8', label: 'Rating' },
          { value: '99.9%', label: 'Uptime' },
        ]}
      />

      <FadeInView><TechEcosystem /></FadeInView>
      <FadeInView><WhatWeBuild /></FadeInView>
      <FadeInView><DevProcess /></FadeInView>
      <FadeInView><Comparison /></FadeInView>
      <FadeInView>
        <FinalCTA
          title="Ready to Launch Your App?"
          description="Let's build a high-performance mobile application that engages users and drives growth."
          primaryText="Build Your App"
          secondaryText="Book Consultation"
        />
      </FadeInView>
    </ServicesPageWrapper>
  )
}
