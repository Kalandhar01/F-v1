import type { NavLink, Service, Project, Stat, FAQItem } from '@/types'

export const siteConfig = {
  name: 'NEXUS',
  tagline: 'Digital Agency',
  description:
    'Premium digital agency crafting world-class web experiences that drive business growth.',
  email: 'hello@nexus.agency',
  phone: '+1 (234) 567-890',
  location: 'San Francisco, CA',
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'High-performance web applications built with cutting-edge technology. Fast, scalable, and designed for the modern web.',
    icon: 'Code2',
  },
  {
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive interfaces that delight users. Data-driven design decisions backed by research and testing.',
    icon: 'Palette',
  },
  {
    title: 'SaaS Development',
    description:
      'End-to-end SaaS platform development. From MVP to enterprise-grade solutions with robust architecture.',
    icon: 'Cloud',
  },
  {
    title: 'E-Commerce Solutions',
    description:
      'Revenue-driving e-commerce experiences. Optimized conversion funnels with seamless checkout flows.',
    icon: 'ShoppingCart',
  },
  {
    title: 'Branding',
    description:
      'Strategic brand identities that resonate. Comprehensive branding from visual identity to brand guidelines.',
    icon: 'Sparkles',
  },
  {
    title: 'Digital Consulting',
    description:
      'Expert guidance on technology strategy, architecture decisions, and digital transformation initiatives.',
    icon: 'Lightbulb',
  },
]

export const projects: Project[] = [
  {
    title: 'Stellar Dashboard',
    category: 'SaaS Platform',
    description:
      'A real-time analytics dashboard serving 50K+ users with sub-second query responses.',
    results: ['60% faster load times', '40% increase in user retention', '3x data processing speed'],
    image: '/project-1.jpg',
  },
  {
    title: 'Luxe Retail',
    category: 'E-Commerce',
    description:
      'Premium e-commerce experience for a luxury fashion brand with global presence.',
    results: ['150% revenue increase', '45% conversion rate improvement', '2M+ monthly visitors'],
    image: '/project-2.jpg',
  },
  {
    title: 'Flow Productivity',
    category: 'Web App',
    description:
      'Collaborative productivity suite connecting remote teams across 30 countries.',
    results: ['10K+ active teams', '4.9 star rating', '99.9% uptime SLA'],
    image: '/project-3.jpg',
  },
]

export const stats: Stat[] = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '8+', label: 'Years Experience' },
  { value: '50+', label: 'Team Members' },
]

export const faqs: FAQItem[] = [
  {
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines vary based on scope and complexity. A typical web development project takes 8-12 weeks, while larger SaaS platforms may take 4-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'How do you handle project communication?',
    answer:
      'We believe in transparent, consistent communication. You\'ll have a dedicated project manager, weekly status updates, access to our project management tools, and a shared Slack channel for real-time collaboration.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and cloud platforms like AWS and Vercel. We choose the best tech stack for each project\'s specific needs.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer:
      'Yes, we offer comprehensive post-launch support and maintenance packages. This includes performance monitoring, security updates, bug fixes, and feature enhancements to keep your product running smoothly.',
  },
  {
    question: 'How do you price your services?',
    answer:
      'We offer both fixed-price and time-based pricing models depending on project requirements. Every project begins with a thorough discovery phase to provide accurate, transparent pricing with no hidden costs.',
  },
  {
    question: 'What is your design process?',
    answer:
      'Our design process follows a proven methodology: Research & Discovery, Information Architecture, Wireframing, Visual Design, Prototyping, and User Testing. We iterate based on feedback every step of the way.',
  },
]

export const socialLinks = [
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Dribbble', href: '#' },
  { label: 'GitHub', href: '#' },
]

export const footerServiceLinks = [
  { label: 'Web Development', href: '#services' },
  { label: 'UI/UX Design', href: '#services' },
  { label: 'SaaS Development', href: '#services' },
  { label: 'E-Commerce', href: '#services' },
  { label: 'Branding', href: '#services' },
]
