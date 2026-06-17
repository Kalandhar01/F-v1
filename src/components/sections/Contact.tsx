'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  Check,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Code2,
  Palette,
  Cloud,
  ShoppingCart,
  Sparkles,
  Lightbulb,
  HelpCircle,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import TargetCursor from '@/components/TargetCursor'
import AutoTarget from '@/components/AutoTarget'
import { validateEmail } from '@/lib/utils'
import { siteConfig, socialLinks } from '@/constants'
import type { FormData, FormErrors } from '@/types'

const projectTypes = [
  { value: 'Web Development', icon: Code2 },
  { value: 'UI/UX Design', icon: Palette },
  { value: 'SaaS Development', icon: Cloud },
  { value: 'E-Commerce', icon: ShoppingCart },
  { value: 'Branding', icon: Sparkles },
  { value: 'Consulting', icon: Lightbulb },
  { value: 'Other', icon: HelpCircle },
]

const contactInfo = [
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: MapPin, label: 'Location', value: siteConfig.location },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export default function Contact() {
  const [data, setData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validate = (): boolean => {
    const e: FormErrors = {}
    if (!data.name.trim()) e.name = 'Name is required'
    if (!data.email.trim()) e.email = 'Email is required'
    else if (!validateEmail(data.email)) e.email = 'Please enter a valid email'
    if (!data.projectType) e.projectType = 'Please select a project type'
    if (!data.message.trim()) e.message = 'Message is required'
    else if (data.message.trim().length < 10)
      e.message = 'Message must be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSending(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Failed to send')
      }
      setSubmitted(true)
      setData({ name: '', email: '', projectType: '', message: '' })
    } catch (err: any) {
      setSubmitError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 bg-white/[0.03] border ${
      errors[field] ? 'border-red-500/40' : 'border-white/10'
    } rounded-xl text-white text-sm placeholder:text-white/20 focus:border-white/20 focus:ring-1 focus:ring-white/10 outline-none transition-all duration-300`

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={3}
        hideDefaultCursor={false}
        hoverDuration={0.25}
        parallaxOn={true}
      />
      <AutoTarget
        targetSelector=".cursor-target"
        holdDuration={5}
        sectionId="contact"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.015),transparent)] pointer-events-none" />
      <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/3 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionHeading
            label="Contact"
            title="Let's Work Together"
            description="Ready to start your next project? We'd love to hear from you."
          />

          {submitted ? (
            <motion.div
              className="max-w-lg mx-auto rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/20 to-white/5 flex items-center justify-center mx-auto mb-6"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
              >
                <Check size={28} className="text-indigo-300" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-3">Message Sent!</h3>
              <p className="text-white/50 leading-relaxed">
                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
              <Button variant="ghost" size="sm" className="mt-6" onClick={() => setSubmitted(false)}>
                Send another message
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
              <motion.div
                variants={itemVariants}
                className="lg:col-span-2 space-y-8"
              >
                <div className="space-y-6">
                  {contactInfo.map((item) => {
                    const Icon = item.icon
                    const content = (
                      <div className="group flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/10 group-hover:scale-110 transition-all duration-300">
                          <Icon size={18} className="text-white/50 group-hover:text-indigo-300 transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-white/30 uppercase tracking-wider mb-0.5">{item.label}</p>
                          <p className="text-sm text-white/80">{item.value}</p>
                        </div>
                      </div>
                    )
                    return item.href ? (
                      <a key={item.label} href={item.href}>
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    )
                  })}
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <p className="text-xs font-medium text-white/30 uppercase tracking-wider mb-4">Follow Us</p>
                  <div className="flex flex-wrap gap-2">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-white/40 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] rounded-lg transition-all duration-300"
                      >
                        {s.label}
                        <ArrowUpRight size={10} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="lg:col-span-3"
              >
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">
                        Name <span className="text-red-400/60">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        className={`cursor-target ${inputClass('name')}`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1.5 text-xs text-red-400/80">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
                        Email <span className="text-red-400/60">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        className={`cursor-target ${inputClass('email')}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-red-400/80">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-3">
                      Project Type <span className="text-red-400/60">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {projectTypes.map(({ value, icon: Icon }) => {
                        const isSelected = data.projectType === value
                        return (
                          <button
                            key={value}
                            type="button"
                            onClick={() => setData({ ...data, projectType: value })}
                            className={`relative flex items-center gap-2 px-3.5 py-3 rounded-xl text-xs font-medium transition-all duration-300 border ${
                              isSelected
                                ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-200'
                                : 'bg-white/[0.02] border-white/10 text-white/50 hover:bg-white/[0.04] hover:border-white/20 hover:text-white/80'
                            } ${errors.projectType && !data.projectType ? 'border-red-500/40' : ''}`}
                          >
                            <Icon size={14} className={isSelected ? 'text-indigo-300' : 'text-white/30'} />
                            <span>{value}</span>
                            {isSelected && (
                              <motion.span
                                layoutId="projectTypeCheck"
                                className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 flex items-center justify-center"
                                initial={false}
                                transition={{ type: 'spring', stiffness: 380, damping: 25 }}
                              >
                                <Check size={8} className="text-white" />
                              </motion.span>
                            )}
                          </button>
                        )
                      })}
                    </div>
                    {errors.projectType && !data.projectType && (
                      <p className="mt-1.5 text-xs text-red-400/80">{errors.projectType}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">
                      Message <span className="text-red-400/60">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={data.message}
                      onChange={(e) => setData({ ...data, message: e.target.value })}
                      className={`cursor-target ${inputClass('message')} resize-none`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-400/80">{errors.message}</p>}
                  </div>

                  {submitError && (
                    <p className="text-xs text-red-400/80 text-center">{submitError}</p>
                  )}

                  <Button type="submit" size="lg" className="cursor-target w-full" disabled={sending}>
                    {sending ? 'Sending...' : 'Send Message'}
                    <Send size={16} className={sending ? 'animate-pulse' : ''} />
                  </Button>
                </form>
              </motion.div>
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
