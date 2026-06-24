import type { Metadata } from 'next'
import { BRAND } from '@/config/brand'
import AboutContent from '@/components/sections/AboutContent'
import ElevateXDifference from '@/components/sections/about/ElevateXDifference'
import HowWeThink from '@/components/sections/about/HowWeThink'
import NumbersThatMatter from '@/components/sections/about/NumbersThatMatter'
import TechStack from '@/components/sections/about/TechStack'
import TrustCards from '@/components/sections/about/TrustCards'
import FinalCTA from '@/components/sections/services/FinalCTA'

export const metadata: Metadata = {
  title: 'About Us',
  description: BRAND.description,
  openGraph: {
    title: `About Us | ${BRAND.name}`,
    description: BRAND.description,
    images: [{ url: BRAND.assets.socialPreview, width: 1200, height: 630, alt: `${BRAND.name} - ${BRAND.tagline}` }],
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <ElevateXDifference />
      <HowWeThink />
      <NumbersThatMatter />
      <TechStack />
      <TrustCards />
      <FinalCTA
        title="Ready To Build Something Exceptional?"
        description="Let's create digital experiences that stand out and drive measurable growth."
        primaryText="Start Project"
        secondaryText="Book Consultation"
      />
    </>
  )
}
