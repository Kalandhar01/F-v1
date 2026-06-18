import type { NavLink, Service } from '@/types'
import { BRAND } from '@/config/brand'

export const siteConfig = {
  name: BRAND.name,
  shortName: BRAND.shortName,
  tagline: BRAND.tagline,
  description: BRAND.description,
  email: BRAND.email,
  phone: BRAND.phone,
  location: BRAND.location,
  url: BRAND.url,
  assets: BRAND.assets,
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/', children: undefined },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Website Development', href: '/services/web-development', description: '', icon: 'Code2' },
      { label: 'App Development', href: '/services/app-development', description: '', icon: 'Smartphone' },
      { label: 'Digital Marketing', href: '/services/digital-marketing', description: '', icon: 'TrendingUp' },
    ],
  },
  { label: 'Work', href: '/#work' },
  { label: 'About Us', href: '/about' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Contact', href: '/#contact' },
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

export const serviceRoutes = [
  { label: 'Website Development', href: '/services/web-development' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'App Development', href: '/services/app-development' },
]
