'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Check } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { validateEmail } from '@/lib/utils'
import type { FormData, FormErrors } from '@/types'

const projectTypes = [
  'Web Development',
  'UI/UX Design',
  'SaaS Development',
  'E-Commerce',
  'Branding',
  'Consulting',
  'Other',
]

export default function Contact() {
  const [data, setData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setData({ name: '', email: '', projectType: '', message: '' })
    }
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 bg-white/[0.03] border ${
      errors[field] ? 'border-red-500/40' : 'border-white/10'
    } rounded-xl text-white text-sm placeholder:text-white/20 focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all duration-300`

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.01),transparent)] pointer-events-none" />
      <Container>
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          description="Ready to start your next project? We'd love to hear from you."
        />

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          {submitted ? (
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Check size={28} className="text-white/70" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Message Sent!
              </h3>
              <p className="text-white/50">
                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="mt-6"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/60 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={data.name}
                    onChange={(e) =>
                      setData({ ...data, name: e.target.value })
                    }
                    className={inputClass('name')}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400/80">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/60 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    className={inputClass('email')}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400/80">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-white/60 mb-2"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  value={data.projectType}
                  onChange={(e) =>
                    setData({ ...data, projectType: e.target.value })
                  }
                  className={`${inputClass('projectType')} appearance-none cursor-pointer`}
                >
                  <option value="" disabled className="bg-black">
                    Select a project type
                  </option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-black text-white">
                      {t}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="mt-1.5 text-xs text-red-400/80">
                    {errors.projectType}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/60 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={data.message}
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                  className={`${inputClass('message')} resize-none`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400/80">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
                <Send size={16} />
              </Button>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
