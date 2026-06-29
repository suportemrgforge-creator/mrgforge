'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage, Lang } from '@/context/LanguageContext'

const serviceIcons = [
  <svg key="web" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>,
  <svg key="lp" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  <svg key="ecom" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>,
  <svg key="app" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3" />
  </svg>,
  <svg key="sys" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
  </svg>,
  <svg key="api" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V7.5a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 7.5V18A2.25 2.25 0 006 20.25z" />
  </svg>,
]

function getServices(lang: Lang) {
  const data = lang === 'pt'
    ? [
        {
          title: 'Site Institucional',
          description: 'Presença digital profissional com até 5 páginas, design exclusivo e tudo que sua empresa precisa para se destacar online.',
          details: [
            'Até 5 páginas (Home, Sobre, Serviços, Blog e Contato)',
            'Design personalizado e 100% responsivo para todos os dispositivos',
            'Formulário de contato com notificação por e-mail',
            'SEO básico: meta tags, sitemap e integração com Google Search Console',
            '1 ano de hospedagem grátis incluso',
          ],
        },
        {
          title: 'Landing Page',
          description: 'Página única de alta conversão — do primeiro scroll ao clique no botão, cada elemento foi pensado para gerar leads e vendas.',
          details: [
            'Página única com estrutura focada em conversão',
            'Botão de WhatsApp flutuante com mensagem pré-configurada',
            'Formulário de captura de leads integrado com CRM ou planilha',
            'Design orientado à conversão: headlines, provas sociais e CTAs estratégicos',
            '1 ano de hospedagem grátis incluso',
          ],
        },
        {
          title: 'E-commerce',
          description: 'Loja virtual completa, do catálogo ao checkout — com pagamentos integrados, controle de frete e painel de gestão próprio.',
          details: [
            'Catálogo de produtos com categorias, filtros e busca inteligente',
            'Carrinho de compras com checkout otimizado para reduzir abandono',
            'Pagamentos via PIX e cartão de crédito/débito',
            'Cálculo de frete integrado com Correios e transportadoras',
            'Painel admin, cupons de desconto e notificações via WhatsApp',
            '1 ano de hospedagem grátis incluso',
          ],
        },
        {
          title: 'App Mobile',
          description: 'Aplicativo nativo para iOS e Android com design fluído, login seguro e notificações push para manter seus usuários engajados.',
          details: [
            'Aplicativo publicado na App Store (iOS) e Google Play (Android)',
            'Design nativo seguindo as diretrizes de cada plataforma',
            'Login social (Google, Apple) e autenticação segura',
            'Notificações push personalizadas e segmentadas por perfil',
            '1 ano de hospedagem de backend grátis incluso',
          ],
        },
        {
          title: 'Sistema Web',
          description: 'Plataforma web sob medida com dashboard, relatórios e controle de usuários — integrada ao WhatsApp para automações em tempo real.',
          details: [
            'Dashboard com indicadores e KPIs em tempo real',
            'Relatórios exportáveis em PDF e Excel',
            'Controle de usuários com permissões e acessos por perfil',
            'Integração com WhatsApp para notificações e automações',
            '1 ano de hospedagem grátis incluso',
          ],
        },
        {
          title: 'API & Integrações',
          description: 'Conectamos seus sistemas, automatizamos processos e integramos ERPs, CRMs e plataformas de pagamento em um ecossistema unificado.',
          details: [
            'Conexão entre sistemas, plataformas e ferramentas externas',
            'Integração com gateways de pagamento (PIX, Stripe, Mercado Pago)',
            'Sincronização com ERPs e CRMs (SAP, HubSpot, Pipedrive)',
            'Automações de processos via webhooks e eventos em tempo real',
            'Documentação técnica completa entregue junto ao projeto',
          ],
        },
      ]
    : [
        {
          title: 'Sitio Institucional',
          description: 'Presencia digital profesional con hasta 5 páginas, diseño exclusivo y todo lo que su empresa necesita para destacarse en línea.',
          details: [
            'Hasta 5 páginas (Inicio, Sobre, Servicios, Blog y Contacto)',
            'Diseño personalizado y 100% responsivo para todos los dispositivos',
            'Formulario de contacto con notificación por e-mail',
            'SEO básico: meta tags, sitemap e integración con Google Search Console',
            '1 año de alojamiento gratis incluido',
          ],
        },
        {
          title: 'Landing Page',
          description: 'Página única de alta conversión — desde el primer scroll hasta el clic en el botón, cada elemento fue diseñado para generar leads y ventas.',
          details: [
            'Página única con estructura enfocada en conversión',
            'Botón de WhatsApp flotante con mensaje preconfigurado',
            'Formulario de captura de leads integrado con CRM o planilla',
            'Diseño orientado a la conversión: headlines, pruebas sociales y CTAs estratégicos',
            '1 año de alojamiento gratis incluido',
          ],
        },
        {
          title: 'E-commerce',
          description: 'Tienda virtual completa, del catálogo al checkout — con pagos integrados, control de envío y panel de gestión propio.',
          details: [
            'Catálogo de productos con categorías, filtros y búsqueda inteligente',
            'Carrito de compras con checkout optimizado para reducir el abandono',
            'Pagos vía PIX y tarjeta de crédito/débito',
            'Cálculo de envío integrado con Correos y transportistas',
            'Panel admin, cupones de descuento y notificaciones vía WhatsApp',
            '1 año de alojamiento gratis incluido',
          ],
        },
        {
          title: 'App Mobile',
          description: 'Aplicación nativa para iOS y Android con diseño fluido, inicio de sesión seguro y notificaciones push para mantener a sus usuarios comprometidos.',
          details: [
            'Aplicación publicada en App Store (iOS) y Google Play (Android)',
            'Diseño nativo siguiendo las directrices de cada plataforma',
            'Inicio de sesión social (Google, Apple) y autenticación segura',
            'Notificaciones push personalizadas y segmentadas por perfil',
            '1 año de alojamiento de backend gratis incluido',
          ],
        },
        {
          title: 'Sistema Web',
          description: 'Plataforma web a medida con dashboard, informes y control de usuarios — integrada con WhatsApp para automatizaciones en tiempo real.',
          details: [
            'Dashboard con indicadores y KPIs en tiempo real',
            'Informes exportables en PDF y Excel',
            'Control de usuarios con permisos y accesos por perfil',
            'Integración con WhatsApp para notificaciones y automatizaciones',
            '1 año de alojamiento gratis incluido',
          ],
        },
        {
          title: 'API e Integraciones',
          description: 'Conectamos sus sistemas, automatizamos procesos e integramos ERPs, CRMs y plataformas de pago en un ecosistema unificado.',
          details: [
            'Conexión entre sistemas, plataformas y herramientas externas',
            'Integración con gateways de pago (PIX, Stripe, Mercado Pago)',
            'Sincronización con ERPs y CRMs (SAP, HubSpot, Pipedrive)',
            'Automatizaciones de procesos vía webhooks y eventos en tiempo real',
            'Documentación técnica completa entregada junto al proyecto',
          ],
        },
      ]

  return data.map((item, i) => ({ icon: serviceIcons[i], ...item }))
}

type Service = ReturnType<typeof getServices>[number]

function ServiceModal({ service, index, onClose }: { service: Service; index: number; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const { lang } = useLanguage()

  const t = lang === 'pt'
    ? { cta: 'Solicitar Orçamento', close: 'Fechar' }
    : { cta: 'Solicitar Presupuesto', close: 'Cerrar' }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(5,5,5,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-white/8 overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #141414 0%, #0f0f0f 100%)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.08)',
          animation: 'modalIn 0.28s cubic-bezier(0.16,1,0.3,1) forwards',
        }}
      >
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent opacity-60" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors duration-200"
          aria-label={t.close}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-rose-gold/10 flex items-center justify-center text-rose-gold shrink-0">
              {service.icon}
            </div>
            <div>
              <span className="font-inter text-xs tracking-[0.3em] text-rose-gold uppercase font-semibold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-playfair font-bold text-2xl text-white leading-tight mt-0.5">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="font-inter text-sm text-white/55 leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Details list */}
          <ul className="space-y-3 mb-8">
            {service.details.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-gold shrink-0" />
                <span className="font-inter text-sm text-white/70 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contato"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-inter font-semibold text-sm text-forge-dark transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #D4B86A 100%)' }}
          >
            {t.cta}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const { lang } = useLanguage()

  const services = getServices(lang)

  const t = lang === 'pt'
    ? {
        sectionLabel: 'O que fazemos',
        h2a: 'Soluções digitais',
        h2b: 'de ponta a ponta.',
        subtitle: 'Cada projeto começa com uma pergunta simples: o que tornaria isso extraordinário? A resposta guia cada decisão de design e engenharia.',
        details: 'Detalhes',
      }
    : {
        sectionLabel: 'Lo que hacemos',
        h2a: 'Soluciones digitales',
        h2b: 'de principio a fin.',
        subtitle: 'Cada proyecto comienza con una pregunta simple: ¿qué lo haría extraordinario? La respuesta guía cada decisión de diseño e ingeniería.',
        details: 'Detalles',
      }

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
    <>
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
                {t.sectionLabel}
              </span>
            </div>
            <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-white leading-tight mb-5">
              {t.h2a}<br />
              <span className="text-white italic">{t.h2b}</span>
            </h2>
            <p className="font-inter text-white/50 text-base lg:text-lg leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className="service-card group relative border border-white/5 hover:border-rose-gold/25 rounded-2xl p-8 bg-white/[0.02] hover:bg-rose-gold/[0.04] card-hover cursor-default flex flex-col"
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
                <p className="font-inter text-sm text-white/45 leading-relaxed group-hover:text-white/60 transition-colors duration-300 flex-1">
                  {s.description}
                </p>

                {/* Details button */}
                <div className="mt-6 pt-5 border-t border-white/5">
                  <button
                    onClick={() => setActiveIndex(i)}
                    className="inline-flex items-center gap-1.5 font-inter text-xs font-semibold tracking-wide text-white/40 hover:text-rose-gold transition-colors duration-200 group/btn"
                  >
                    <span>{t.details}</span>
                    <svg className="w-3 h-3 translate-x-0 group-hover/btn:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <ServiceModal
          service={services[activeIndex]}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  )
}
