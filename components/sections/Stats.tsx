'use client'

import { useEffect, useState, useRef } from 'react'

const STATS = [
  { label: 'Platforms Deployed', value: 6, suffix: '', key: 'platforms' },
  { label: 'Industries Served', value: 15, suffix: '+', key: 'industries' },
  { label: 'Active Enterprise Clients', value: 500, suffix: '+', key: 'clients' },
  { label: 'Assets & Transactions Managed', value: 100, suffix: 'M+', key: 'assets' }
] as const

export default function Stats() {
  const [inView, setInView] = useState(false)
  const [counts, setCounts] = useState({
    platforms: 0,
    industries: 0,
    clients: 0,
    assets: 0
  })
  
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [inView])

  useEffect(() => {
    if (!inView) return

    const animateCounters = () => {
      STATS.forEach((stat) => {
        let current = 0
        const increment = Math.max(1, stat.value / 100)
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            current = stat.value
            clearInterval(timer)
          }
          setCounts((prev: typeof counts) => ({
            ...prev,
            [stat.key]: Math.floor(current)
          }))
        }, 20)
      })
    }

    animateCounters()
  }, [inView])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Product Engineering & Systems Integration
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We are a multi-platform SaaS operator and AI-driven industry transformation partner.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {counts[stat.key as keyof typeof counts]}{stat.suffix}
              </div>
              <div className="text-lg font-semibold text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}