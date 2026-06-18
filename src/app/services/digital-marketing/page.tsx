import type { Metadata } from 'next'
import { BRAND } from '@/config/brand'
import ServicesPageWrapper from '@/components/ServicesPageWrapper'
import ServiceHero from '@/components/sections/services/ServiceHero'
import MarketingDashboard from '@/components/sections/services/digital-marketing/MarketingDashboard'
import BentoGrid from '@/components/sections/services/digital-marketing/BentoGrid'
import CampaignDashboard from '@/components/sections/services/digital-marketing/CampaignDashboard'
import PlatformWall from '@/components/sections/services/digital-marketing/PlatformWall'
import CaseStudyShowcase from '@/components/sections/services/digital-marketing/CaseStudyShowcase'
import GrowthPrinciples from '@/components/sections/services/digital-marketing/GrowthPrinciples'
import MarketingOS from '@/components/sections/services/digital-marketing/MarketingOS'
import FinalCTA from '@/components/sections/services/FinalCTA'
import FadeInView from '@/components/ui/FadeInView'

export const metadata: Metadata = {
  title: 'Digital Marketing Services',
  description: BRAND.description,
  openGraph: {
    title: `Digital Marketing Services | ${BRAND.name}`,
    description: BRAND.description,
    images: [{ url: BRAND.assets.socialPreview, width: 1200, height: 630, alt: `${BRAND.name} - ${BRAND.tagline}` }],
  },
}

export default function DigitalMarketingPage() {
  return (
    <ServicesPageWrapper>
      <ServiceHero
        label="Digital Marketing"
        title="Data-Driven Strategies That Deliver Growth"
        description="Transform your digital presence with proven marketing strategies. From SEO and paid ads to social media and content marketing, we drive measurable results that grow your business."
        ctaText="Grow Your Business"
        ctaHref="/#contact"
        secondaryCtaText="Book Consultation"
        secondaryCtaHref="/#contact"
        techIcons={[
          { name: 'Google Ads', color: '#4285F4' },
          { name: 'Meta Ads', color: '#1877F2' },
          { name: 'SEO', color: '#34A853' },
          { name: 'Analytics', color: '#E37400' },
          { name: 'LinkedIn', color: '#0A66C2' },
        ]}
      />

      <FadeInView><MarketingDashboard /></FadeInView>
      <FadeInView><BentoGrid /></FadeInView>
      <FadeInView><CampaignDashboard /></FadeInView>
      <FadeInView><PlatformWall /></FadeInView>
      <FadeInView><CaseStudyShowcase /></FadeInView>
      <FadeInView><GrowthPrinciples /></FadeInView>
      <FadeInView><MarketingOS /></FadeInView>
      <FadeInView>
        <FinalCTA
          label="Ready to scale?"
          title="Ready To Scale Beyond Your Competition?"
          description="Build predictable growth systems powered by data, creativity, and performance marketing."
          primaryText="Start Growth Strategy"
          secondaryText="Book Discovery Call"
        />
      </FadeInView>
    </ServicesPageWrapper>
  )
}
