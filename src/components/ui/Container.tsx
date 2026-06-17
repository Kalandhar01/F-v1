import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'article'
  id?: string
}

export default function Container({
  children,
  className,
  as: Tag = 'section',
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
