'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const projects = [
  {
    title: 'Alteza Moda Íntima',
    category: { pt: 'E-COMMERCE', es: 'E-COMMERCE' },
    url: 'https://altezamodaintima.com',
    year: '2025',
    description: {
      pt: 'E-commerce completo com catálogo dinâmico, PIX e cartão via Mercado Pago, frete por CEP, cupons de desconto, notificações via WhatsApp, painel administrativo e certificado SSL.',
      es: 'E-commerce completo con catálogo dinámico, PIX y tarjeta vía Mercado Pago, envío por código postal, cupones de descuento, notificaciones vía WhatsApp, panel administrativo y certificado SSL.',
    },
    features: {
      pt: [
        'Catálogo dinâmico',
        'PIX e cartão (Mercado Pago)',
        'Frete por CEP',
        'Cupons de desconto',
        'Notificações via WhatsApp',
        'Painel administrativo',
        'Certificado SSL',
      ],
      es: [
        'Catálogo dinámico',
        'PIX y tarjeta (Mercado Pago)',
        'Envío por código postal',
        'Cupones de descuento',
        'Notificaciones vía WhatsApp',
        'Panel administrativo',
        'Certificado SSL',
      ],
    },
    tags: ['Next.js', 'Mercado Pago', 'WhatsApp API'],
    visual: { label: 'alteza', domain: 'altezamodaintima.com' },
  },
  {
    title: 'Sanchez Joias',
    category: { pt: 'LANDING PAGE', es: 'LANDING PAGE' },
    url: 'https://sanchezjoias.vercel.app',
    year: '2025',
    description: {
      pt: 'Landing page elegante para joalheria com design sofisticado, vitrine de produtos e formulário de contato.',
      es: 'Landing page elegante para joyería con diseño sofisticado, vitrina de productos y formulario de contacto.',
    },
    features: { pt: [] as string[], es: [] as string[] },
    tags: ['Next.js', 'Design', 'Landing Page'],
    visual: { label: 'sanchez', domain: 'sanchezjoias.vercel.app' },
  },
]

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)
  const { lang } = useLanguage()

  const t = lang === 'pt'
    ? {
        sectionLabel: 'Portfólio',
        h2a: 'Projetos em',
        h2b: 'destaque.',
        subtitle: 'Trabalho real, resultado real — construído do zero para funcionar e vender.',
        viewProject: 'Ver projeto',
        cta: 'Tem um projeto em mente? Vamos conversar.',
      }
    : {
        sectionLabel: 'Portafolio',
        h2a: 'Proyectos',
        h2b: 'destacados.',
        subtitle: 'Trabajo real, resultado real — construido desde cero para funcionar y vender.',
        viewProject: 'Ver proyecto',
        cta: '¿Tienes un proyecto en mente? Hablemos.',
      }

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const cards = section.querySelectorAll<HTMLElement>('.portfolio-card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.style.opacity = '1'
              card.style.transform = 'translateY(0) scale(1)'
            }, i * 150)
          })
          observer.disconnect()
        })
      },
      { threshold: 0.08 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="relative bg-forge-black py-28 lg:py-36 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-rose-gold" />
              <span className="font-inter text-xs tracking-[0.35em] text-white uppercase font-semibold">
                {t.sectionLabel}
              </span>
            </div>
            <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-white leading-tight">
              {t.h2a}<br />
              <span className="text-white italic">{t.h2b}</span>
            </h2>
          </div>
          <p className="font-inter text-sm text-white/40 max-w-xs leading-relaxed md:text-right">
            {t.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="portfolio-card group rounded-2xl overflow-hidden border border-white/5 hover:border-rose-gold/25 transition-all duration-500"
              style={{
                opacity: 0,
                transform: 'translateY(28px) scale(0.98)',
                transition: 'opacity 0.8s ease, transform 0.8s ease, border-color 0.4s ease',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">

                {/* Left — content */}
                <div className="relative flex flex-col justify-between p-10 lg:p-14 bg-forge-card/80">
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-10">
                    <span className="font-inter text-xs tracking-[0.3em] uppercase text-white/60 font-medium">
                      {project.category[lang]}
                    </span>
                    <span className="font-inter text-xs text-white/25 font-medium">{project.year}</span>
                  </div>

                  {/* Title + description */}
                  <div className="flex-1">
                    <h3 className="font-playfair font-bold text-3xl lg:text-4xl text-white leading-tight mb-5 group-hover:text-rose-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-inter text-sm text-white/50 leading-relaxed mb-8 max-w-sm">
                      {project.description[lang]}
                    </p>

                    {/* Features grid */}
                    {project.features[lang].length > 0 && (
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                        {project.features[lang].map((f) => (
                          <div key={f} className="flex items-center gap-2">
                            <span className="w-1 h-1 shrink-0 rounded-full bg-rose-gold" />
                            <span className="font-inter text-xs text-white/40">{f}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom row — tags + link */}
                  <div className="flex items-center justify-between gap-4 mt-10 pt-8 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-inter text-[10px] tracking-wide font-medium text-white/40 border border-white/10 rounded-full px-3 py-1 group-hover:border-rose-gold/30 group-hover:text-rose-gold/70 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-2 font-inter text-sm font-semibold bg-rose-gold hover:bg-rose-gold-light text-forge-black px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-rose-gold/25 hover:-translate-y-0.5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {t.viewProject}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right — visual */}
                <div className="relative min-h-[280px] lg:min-h-0 overflow-hidden">
                  {/* Gradient */}
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(201,168,76,0.30) 0%, rgba(160,130,30,0.12) 40%, rgba(10,10,10,1) 80%)',
                    }}
                  />
                  <div className="absolute inset-0 bg-forge-card/40" />

                  {/* Grid pattern */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-40" />

                  {/* Decorative rings */}
                  <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none">
                    <svg viewBox="0 0 320 320" fill="none" className="w-full h-full">
                      <circle cx="160" cy="160" r="159" stroke="#C9A84C" strokeOpacity="0.12" strokeWidth="1" />
                      <circle cx="160" cy="160" r="110" stroke="#C9A84C" strokeOpacity="0.07" strokeWidth="1" />
                      <circle cx="160" cy="160" r="65" stroke="#C9A84C" strokeOpacity="0.04" strokeWidth="1" />
                    </svg>
                  </div>

                  {/* Domain name as visual element */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-10">
                    <span className="font-playfair font-black text-5xl lg:text-6xl text-white/[0.07] text-center leading-tight select-none">
                      {project.visual.label}
                    </span>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-rose-gold/20 bg-rose-gold/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-gold animate-pulse" />
                      <span className="font-inter text-xs text-rose-gold/80 tracking-wide">
                        {project.visual.domain}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="#contato"
            className="group inline-flex items-center gap-3 font-inter text-sm font-medium text-white/50 hover:text-rose-gold transition-colors duration-300"
          >
            {t.cta}
            <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-14" />
          </a>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent" />
    </section>
  )
}
