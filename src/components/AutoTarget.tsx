'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface AutoTargetProps {
  targetSelector?: string
  holdDuration?: number
  sectionId?: string
  maxTargets?: number
}

export default function AutoTarget({
  targetSelector = '.cursor-target',
  holdDuration = 5,
  sectionId = 'contact',
  maxTargets = 3,
}: AutoTargetProps) {
  const [active, setActive] = useState(false)
  const currentIndexRef = useRef(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const targetsRef = useRef<Element[]>([])

  const stopTour = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setActive(false)
    currentIndexRef.current = 0
    targetsRef.current = []
  }, [])

  const moveToNext = useCallback(() => {
    const targets = targetsRef.current
    if (targets.length === 0) {
      stopTour()
      return
    }

    const next = currentIndexRef.current
    if (next >= maxTargets || next >= targets.length) {
      stopTour()
      return
    }

    const target = targets[next]
    currentIndexRef.current = next + 1

    targets.forEach((el, i) => {
      if (i === next) return
      el.classList.remove('ring-2', 'ring-indigo-400', 'ring-offset-2', 'ring-offset-black', 'rounded-xl', 'transition-all', 'duration-500')
    })

    target.classList.add('ring-2', 'ring-indigo-400', 'ring-offset-2', 'ring-offset-black', 'rounded-xl', 'transition-all', 'duration-500')

    target.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [maxTargets, stopTour])

  const startTour = useCallback(() => {
    const section = document.getElementById(sectionId)
    if (!section) return

    const targets = Array.from(section.querySelectorAll(targetSelector))
    if (targets.length === 0) return

    targetsRef.current = targets
    currentIndexRef.current = 0
    setActive(true)

    setTimeout(() => moveToNext(), 300)

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      if (rect.top > window.innerHeight || rect.bottom < 0) return
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      moveToNext()
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [targetSelector, sectionId, moveToNext])

  useEffect(() => {
    const section = document.getElementById(sectionId)
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTour()
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [sectionId, startTour])

  useEffect(() => {
    if (!active) return

    intervalRef.current = setInterval(() => {
      moveToNext()
    }, holdDuration * 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [active, holdDuration, moveToNext])

  useEffect(() => {
    return () => {
      targetsRef.current.forEach((el) => {
        el.classList.remove('ring-2', 'ring-indigo-400', 'ring-offset-2', 'ring-offset-black', 'rounded-xl', 'transition-all', 'duration-500')
      })
    }
  }, [])

  return null
}
