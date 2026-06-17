'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none'

    const variants = {
      primary: 'bg-white text-black hover:bg-white/90 active:scale-[0.97]',
      secondary:
        'glass hover:bg-white/[0.06] hover:border-white/10 text-white',
      ghost: 'text-white/60 hover:text-white hover:bg-white/5',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-2',
      md: 'px-5 py-2.5 text-base gap-2.5',
      lg: 'px-8 py-3.5 text-lg gap-3',
    }

    const classes = cn(base, variants[variant], sizes[size], className)

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
