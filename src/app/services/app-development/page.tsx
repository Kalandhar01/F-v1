import type { Metadata } from 'next'
import { BRAND } from '@/config/brand'
import ServicesPageWrapper from '@/components/ServicesPageWrapper'
import ServiceHero from '@/components/sections/services/ServiceHero'
import ServiceGrid from '@/components/sections/services/ServiceGrid'
import TechStack from '@/components/sections/services/TechStack'
import ProcessTimeline from '@/components/sections/services/ProcessTimeline'
import Benefits from '@/components/sections/services/Benefits'
import FAQ from '@/components/sections/services/FAQ'
import FinalCTA from '@/components/sections/services/FinalCTA'
import FadeInView from '@/components/ui/FadeInView'

export const metadata: Metadata = {
  title: 'Mobile App Development Services',
  description: BRAND.description,
  openGraph: {
    title: `App Development Services | ${BRAND.name}`,
    description: BRAND.description,
    images: [{ url: BRAND.assets.socialPreview, width: 1200, height: 630, alt: `${BRAND.name} - ${BRAND.tagline}` }],
  },
}

const services = [
  { icon: '🤖', title: 'Android Development', description: 'Native Android applications built with Kotlin and Jetpack Compose for optimal performance.' },
  { icon: '🍎', title: 'iOS Development', description: 'Native iOS applications built with Swift and SwiftUI for the Apple ecosystem.' },
  { icon: '📱', title: 'Cross Platform Apps', description: 'Cross-platform applications using React Native that work seamlessly on both iOS and Android.' },
  { icon: '🏢', title: 'Business Applications', description: 'Custom business apps that streamline operations, improve productivity, and drive growth.' },
  { icon: '☁️', title: 'SaaS Applications', description: 'Mobile-first SaaS platforms with real-time data, push notifications, and cloud integration.' },
]

const techStack = [
  'React Native', 'Expo', 'TypeScript', 'Node.js', 'MongoDB', 'Appwrite',
  'Firebase', 'PostgreSQL', 'GraphQL', 'Stripe', 'Docker', 'AWS',
]

const process = [
  { title: 'Discovery', description: 'We define your app goals, target users, technical requirements, and market positioning.' },
  { title: 'UI/UX Design', description: 'We design intuitive mobile interfaces with native design patterns and exceptional user experiences.' },
  { title: 'Development', description: 'We build your app with clean architecture, reusable components, and best coding practices.' },
  { title: 'Testing', description: 'Comprehensive testing across devices, operating systems, and network conditions for a flawless experience.' },
  { title: 'Deployment', description: 'We handle App Store and Play Store submission, CI/CD setup, and production monitoring.' },
]

const features = [
  { icon: 'Lock', title: 'Secure Authentication', description: 'Multi-factor authentication, biometric login, OAuth integration, and encrypted data storage.' },
  { icon: 'Zap', title: 'Real-Time Data', description: 'Live updates, real-time sync, and instant notifications powered by WebSocket and push services.' },
  { icon: 'Bell', title: 'Push Notifications', description: 'Targeted push notifications with segmentation, personalization, and engagement analytics.' },
  { icon: 'BarChart3', title: 'Performance Optimization', description: 'Optimized app performance with lazy loading, caching, and native module integration.' },
]

const faqItems = [
  { question: 'How long does it take to develop an app?', answer: 'A standard mobile app takes 3-6 months. Complex apps with advanced features may take 6-12 months. We provide detailed timelines during the discovery phase.' },
  { question: 'Do you build for both iOS and Android?', answer: 'Yes, we build for both platforms. We use React Native for cross-platform apps and native technologies for platform-specific requirements.' },
  { question: 'What is your development process?', answer: 'Our process includes discovery, UI/UX design, development, testing, and deployment. We follow agile methodology with regular updates and milestones.' },
  { question: 'Do you provide post-launch support?', answer: 'Yes, we offer ongoing maintenance, updates, performance monitoring, and feature enhancements after launch.' },
  { question: 'Can you integrate third-party services?', answer: 'Yes, we integrate with various third-party services including payment gateways, analytics, CRM systems, and social media platforms.' },
]

export default function AppDevelopmentPage() {
  return (
    <ServicesPageWrapper>
      <ServiceHero
        label="App Development"
        title="Modern Mobile Apps That Drive Engagement"
        description="We build high-performance mobile applications for iOS, Android, and cross-platform. From business apps to SaaS platforms, every app is crafted for exceptional user experiences and long-term success."
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
      />

      <div className="pt-48 sm:pt-56">
        <FadeInView>
          <ServiceGrid
            label="Services"
            title="Mobile App Services"
            description="End-to-end mobile application development covering Android, iOS, and cross-platform solutions."
            items={services}
          />
        </FadeInView>
      </div>

      <FadeInView><TechStack items={techStack} /></FadeInView>

      <FadeInView>
        <ProcessTimeline
          label="Process"
          title="Development Process"
          description="A structured approach to building high-quality mobile applications."
          steps={process}
        />
      </FadeInView>

      <FadeInView>
        <Benefits
          label="Features"
          title="App Features"
          description="Powerful features built into every mobile application we deliver."
          items={features}
        />
      </FadeInView>

      <FadeInView>
        <FAQ
          label="FAQ"
          title="Frequently Asked Questions"
          description="Common questions about our mobile app development services."
          items={faqItems}
        />
      </FadeInView>

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
