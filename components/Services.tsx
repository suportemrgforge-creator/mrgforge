'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Desenvolvimento Web',
    description:
      'Sites institucionais, landing pages e sistemas web de alta performance — construídos com as melhores tecnologias do mercado.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3" />
      </svg>
    ),
    title: 'Aplicativos Mobile',
    description:
      'Apps iOS e Android com React Native: experiências nativas fluídas que encantam usuários e fortalecem marcas.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'UI/UX Design',
    description:
      'Interfaces que equilibram beleza e funcionalidade. Design de produtos digitais centrado no usuário, do wireframe ao pixel final.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: 'E-commerce',
    description:
      'Lojas virtuais robustas, escaláveis e otimizadas para conversão. Do catálogo ao checkout: cada detalhe pensado para vender mais.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'SEO & Performance',
    description:
      'Otimização para buscadores e Core Web Vitals. Mais visibilidade, mais velocidade, mais resultados — de forma mensurável.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Consultoria Digital',
    description:
      'Estratégia, planejamento e diagnóstico digital. Ajudamos marcas a entenderem onde estão e a traçar o caminho para onde querem chegar.',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const cards = section.querySelectorAll<HTMLElement>('.service-card')
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.style.opacity = '1'
              card.style.transform = 'translateY(0)'
            }, i * 80)
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
    <section id="servicos" ref={sectionRef} className="relative bg-forge-dark py-28 lg:py-36 overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-rose-gold" />
            <span className="font-inter text-xs tracking-[0.35em] text-white uppercase font-semibold">
              O que fazemos
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-white leading-tight mb-5">
            Soluções digitais<br />
            <span className="text-white italic">de ponta a ponta.</span>
          </h2>
          <p className="font-inter text-white/50 text-base lg:text-lg leading-relaxed">
            Cada projeto começa com uma pergunta simples: o que tornaria isso extraordinário?
            A resposta guia cada decisão de design e engenharia.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card group relative border border-white/5 hover:border-rose-gold/25 rounded-2xl p-8 bg-white/[0.02] hover:bg-rose-gold/[0.04] card-hover cursor-default"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease, border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease' }}
            >
              {/* Large background number */}
              <span className="absolute top-5 right-7 font-playfair font-black text-7xl text-white/[0.04] select-none leading-none group-hover:text-rose-gold/10 transition-colors duration-300">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="relative w-12 h-12 rounded-xl bg-rose-gold/10 flex items-center justify-center mb-7 text-rose-gold group-hover:bg-rose-gold/20 transition-colors duration-300">
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="font-playfair font-bold text-xl text-white mb-3 group-hover:text-rose-gold transition-colors duration-300 leading-snug">
                {s.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-sm text-white/45 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
