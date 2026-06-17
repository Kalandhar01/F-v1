export interface NavLink {
  label: string
  href: string
}

export interface Service {
  title: string
  description: string
  icon: string
}

export interface Project {
  title: string
  category: string
  description: string
  results: string[]
  image: string
}

export interface Stat {
  value: string
  label: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FormData {
  name: string
  email: string
  projectType: string
  message: string
}

export interface FormErrors {
  name?: string
  email?: string
  projectType?: string
  message?: string
}
