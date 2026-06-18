export interface NavLink {
  label: string
  href: string
  children?: NavDropdownItem[]
}

export interface NavDropdownItem {
  label: string
  href: string
  description: string
  icon: string
}

export interface Service {
  title: string
  description: string
  icon: string
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
