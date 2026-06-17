import type { NavLink, Service } from '@/types'

export const siteConfig = {
  name: 'NEXUS',
  tagline: 'Digital Agency',
  description:
    'Premium digital agency crafting world-class web experiences that drive business growth.',
  email: 'hello@nexus.agency',
  phone: '+1 (234) 567-890',
  location: 'Coimbatore, Tamilnadu',
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Team', href: '#team' },
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

export const socialLinks = [
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Dribbble', href: '#' },
  { label: 'GitHub', href: '#' },
]
