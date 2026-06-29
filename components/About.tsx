'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { lang } = useLanguage()

  const t = lang === 'pt'
    ? {
        sectionLabel: 'Sobre',
        role: 'Fundadora & Desenvolvedora Full Stack',
        bio: 'Desenvolvedora autônoma especializada em transformar ideias em produtos digitais que funcionam e vendem. Cada projeto entregue é construído para durar.',
        stats: [
          { value: '100%', label: 'Satisfação dos clientes' },
          { value: '100%', label: 'Projetos concluídos' },
        ],
        location: 'Ciudad del Este,',
        locationHighlight: 'Paraguay',
        photoAlt: 'Raquel Sampaio — Fundadora MRG Forge',
      }
    : {
        sectionLabel: 'Sobre',
        role: 'Fundadora & Desarrolladora Full Stack',
        bio: 'Desarrolladora autónoma especializada en transformar ideas en productos digitales que funcionan y venden. Cada proyecto entregado está construido para durar.',
        stats: [
          { value: '100%', label: 'Satisfacción de clientes' },
          { value: '100%', label: 'Proyectos completados' },
        ],
        location: 'Ciudad del Este,',
        locationHighlight: 'Paraguay',
        photoAlt: 'Raquel Sampaio — Fundadora MRG Forge',
      }

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          section.querySelectorAll<HTMLElement>('.about-reveal').forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }, i * 130)
          })
          observer.disconnect()
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" ref={sectionRef} className="relative bg-forge-black py-28 lg:py-36 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent" />

      {/* Radial glow — centered */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Photo ── */}
          <div
            className="about-reveal flex justify-center"
            style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.9s ease, transform 0.9s ease' }}
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-5 rounded-full border border-rose-gold/12 pointer-events-none" />
              <div className="absolute -inset-10 rounded-full border border-rose-gold/6 pointer-events-none" />

              {/* Corner gold accent */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-rose-gold border-[3px] border-forge-black z-10" />
              <div className="absolute -top-3 -left-3 w-3 h-3 rounded-full bg-rose-gold/40 border border-rose-gold/20" />

              {/* Photo */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-rose-gold/30 shadow-2xl shadow-black/50">
                <Image
                  src="/foto.jpg"
                  alt={t.photoAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ── Content ── */}
          <div className="flex flex-col">

            {/* Label */}
            <div
              className="about-reveal flex items-center gap-3 mb-7"
              style={{ opacity: 0, transform: 'translateY(22px)', transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s' }}
            >
              <span className="w-8 h-px bg-rose-gold" />
              <span className="font-inter text-xs tracking-[0.35em] text-white uppercase font-semibold">
                {t.sectionLabel}
              </span>
            </div>

            {/* Name */}
            <div
              className="about-reveal"
              style={{ opacity: 0, transform: 'translateY(22px)', transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s' }}
            >
              <h2 className="font-playfair font-bold text-4xl lg:text-[3rem] text-white leading-tight mb-2">
                Raquel Sampaio
              </h2>
              <p className="font-inter text-rose-gold text-sm font-medium tracking-wide mb-8">
                {t.role}
              </p>
            </div>

            {/* Bio */}
            <div
              className="about-reveal"
              style={{ opacity: 0, transform: 'translateY(22px)', transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s' }}
            >
              <p className="font-inter text-white/60 text-base lg:text-lg leading-relaxed mb-10">
                {t.bio}
              </p>
            </div>

            {/* Stats */}
            <div
              className="about-reveal grid grid-cols-2 gap-6 mb-10 border-t border-b border-white/5 py-8"
              style={{ opacity: 0, transform: 'translateY(22px)', transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s' }}
            >
              {t.stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-playfair font-bold text-2xl text-white">{s.value}</span>
                  <span className="font-inter text-xs text-white/35 leading-tight">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Location */}
            <div
              className="about-reveal flex items-center gap-2"
              style={{ opacity: 0, transform: 'translateY(22px)', transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s' }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/[0.02]">
                <svg
                  className="w-4 h-4 text-rose-gold shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="font-inter text-sm text-white/50">
                  {t.location}{' '}
                  <span className="text-white/70 font-medium">{t.locationHighlight}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent" />
    </section>
  )
}
