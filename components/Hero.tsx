'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { lang } = useLanguage()

  const t = lang === 'pt'
    ? {
        badge: 'Desenvolvimento Digital',
        h1a: 'Construído',
        h1b: 'para durar.',
        subtitle: 'Criamos experiências digitais que combinam design de alto padrão com engenharia de excelência — porque marcas que importam merecem mais do que o suficiente.',
        ctaPrimary: 'Ver Portfólio',
        ctaSecondary: 'Iniciar Projeto',
        scroll: 'Scroll',
      }
    : {
        badge: 'Desarrollo Digital',
        h1a: 'Construido',
        h1b: 'para durar.',
        subtitle: 'Creamos experiencias digitales que combinan diseño de alto nivel con ingeniería de excelencia — porque las marcas que importan merecen más que lo suficiente.',
        ctaPrimary: 'Ver Portafolio',
        ctaSecondary: 'Iniciar Proyecto',
        scroll: 'Scroll',
      }

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    el.querySelectorAll<HTMLElement>('.animate-on-load').forEach((node, i) => {
      node.style.opacity = '0'
      node.style.transform = 'translateY(28px)'
      setTimeout(() => {
        node.style.transition = 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)'
        node.style.opacity = '1'
        node.style.transform = 'translateY(0)'
      }, 150 + i * 120)
    })
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-forge-black overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern" />

      {/* Rose gold radial glow — top left */}
      <div
        className="absolute top-0 left-0 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 65%)',
        }}
      />

      {/* Decorative ring — top right */}
      <div className="absolute top-0 right-0 w-[560px] h-[560px] translate-x-1/3 -translate-y-1/3 pointer-events-none select-none">
        <svg viewBox="0 0 560 560" fill="none" className="w-full h-full">
          <circle cx="280" cy="280" r="279" stroke="#C9A84C" strokeOpacity="0.12" strokeWidth="1" />
          <circle cx="280" cy="280" r="200" stroke="#C9A84C" strokeOpacity="0.07" strokeWidth="1" />
          <circle cx="280" cy="280" r="130" stroke="#C9A84C" strokeOpacity="0.04" strokeWidth="1" />
        </svg>
      </div>

      {/* Decorative geometric shape — bottom right */}
      <div className="absolute bottom-0 right-0 w-[380px] h-[380px] translate-x-1/4 translate-y-1/4 pointer-events-none select-none animate-float">
        <svg viewBox="0 0 380 380" fill="none" className="w-full h-full">
          <rect
            x="2"
            y="2"
            width="376"
            height="376"
            rx="8"
            stroke="#C9A84C"
            strokeOpacity="0.08"
            strokeWidth="1"
            transform="rotate(15 190 190)"
          />
          <rect
            x="30"
            y="30"
            width="320"
            height="320"
            rx="8"
            stroke="#C9A84C"
            strokeOpacity="0.05"
            strokeWidth="1"
            transform="rotate(30 190 190)"
          />
        </svg>
      </div>

      {/* Vertical accent line */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-rose-gold/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-24 w-full">
        <div className="max-w-4xl">

          {/* Badge */}
          <div className="animate-on-load flex items-center gap-3 mb-10">
            <span className="w-10 h-px bg-rose-gold" />
            <span className="font-inter text-xs tracking-[0.35em] text-white uppercase font-semibold">
              {t.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-on-load font-playfair font-black leading-[1.02] tracking-tight mb-6">
            <span className="block text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] text-white">
              {t.h1a}
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] text-white italic">
              {t.h1b}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-on-load font-inter text-lg lg:text-xl text-white/55 max-w-xl leading-relaxed mb-8">
            {t.subtitle}
          </p>

          {/* Slogan pill */}
          <div className="animate-on-load inline-flex items-center gap-2.5 border border-rose-gold/30 hover:border-rose-gold/60 rounded-full px-5 py-2 mb-12 transition-colors duration-300 cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-gold animate-pulse" />
            <span className="font-playfair italic text-white text-sm tracking-wide">
              Built to Last.
            </span>
          </div>

          {/* CTAs */}
          <div className="animate-on-load flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 font-inter text-sm font-semibold bg-rose-gold hover:bg-rose-gold-light text-forge-black px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-rose-gold/30 hover:-translate-y-0.5"
            >
              {t.ctaPrimary}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 font-inter text-sm font-semibold border border-white/15 hover:border-rose-gold/50 text-white/80 hover:text-white px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-300">
        <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-white">
          {t.scroll}
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  )
}
