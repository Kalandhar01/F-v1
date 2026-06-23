import type { Metadata } from 'next'
import { BRAND } from '@/config/brand'
import ServicesPageWrapper from '@/components/ServicesPageWrapper'
import DigitalMarketingHero from '@/components/sections/services/digital-marketing/DigitalMarketingHero'
import WhyChooseUs from '@/components/sections/services/digital-marketing/WhyChooseUs'
import SolutionsGrid from '@/components/sections/services/digital-marketing/SolutionsGrid'
import ProcessTimeline from '@/components/sections/services/digital-marketing/ProcessTimeline'
import IndustriesServed from '@/components/sections/services/digital-marketing/IndustriesServed'
import StatsSection from '@/components/sections/services/digital-marketing/StatsSection'
import FAQ from '@/components/sections/services/digital-marketing/FAQ'
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
      <DigitalMarketingHero />

      <FadeInView><WhyChooseUs /></FadeInView>
      <FadeInView><SolutionsGrid /></FadeInView>
      <FadeInView><ProcessTimeline /></FadeInView>
      <FadeInView><IndustriesServed /></FadeInView>
      <FadeInView><StatsSection /></FadeInView>
      <FadeInView><FAQ /></FadeInView>
      <FadeInView>
        <FinalCTA
          title="Ready to Scale Your Business Online?"
          description="Partner with a team focused on measurable growth, stronger brand visibility, and high-quality lead generation."
          primaryText="Book Consultation"
          secondaryText="Talk To Our Expert"
        />
      </FadeInView>
    </ServicesPageWrapper>
  )
}
