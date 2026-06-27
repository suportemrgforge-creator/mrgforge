'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'E-mail',
    value: 'suportemrgforge@gmail.com',
    href: 'mailto:suportemrgforge@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+595 992 959 869',
    href: 'https://wa.me/595992959869',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Localização',
    value: 'Ciudad del Este, Paraguay',
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Horário',
    value: 'Segunda a Sexta, 08h às 16h',
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    label: 'Fundadora',
    value: 'Raquel Sampaio',
    href: null,
  },
]

type FormState = {
  nome: string
  email: string
  empresa: string
  projeto: string
  mensagem: string
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [form, setForm] = useState<FormState>({
    nome: '',
    email: '',
    empresa: '',
    projeto: '',
    mensagem: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          section.querySelectorAll<HTMLElement>('.contact-reveal').forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }, i * 100)
          })
          observer.disconnect()
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1400))
    setStatus('sent')
  }

  const inputClass =
    'w-full bg-transparent border-b border-white/10 focus:border-rose-gold pb-3 pt-1 font-inter text-sm text-white placeholder:text-white/25 outline-none transition-colors duration-300 caret-rose-gold'

  return (
    <section id="contato" ref={sectionRef} className="relative bg-forge-dark py-28 lg:py-36 overflow-hidden">
      {/* Decorative glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] translate-x-1/3 -translate-y-1/3 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.09) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — info */}
          <div>
            <div
              className="contact-reveal"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-rose-gold" />
                <span className="font-inter text-xs tracking-[0.35em] text-white uppercase font-semibold">
                  Contato
                </span>
              </div>
              <h2 className="font-playfair font-bold text-4xl lg:text-[3.2rem] text-white leading-tight mb-6">
                Vamos construir<br />
                algo{' '}
                <span className="text-white italic">extraordinário</span>
                <br />
                juntos.
              </h2>
              <p className="font-inter text-white/50 text-base leading-relaxed mb-12 max-w-sm">
                Compartilhe sua ideia conosco. Analisamos cada projeto com atenção e
                respondemos em até 24 horas úteis.
              </p>
            </div>

            {/* Contact info items */}
            <div className="flex flex-col gap-7">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="contact-reveal flex items-start gap-4"
                  style={{
                    opacity: 0,
                    transform: 'translateY(20px)',
                    transition: `opacity 0.7s ease ${(i + 1) * 100}ms, transform 0.7s ease ${(i + 1) * 100}ms`,
                  }}
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-rose-gold/10 text-rose-gold flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-inter text-xs text-white/30 uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-inter text-sm text-white/70 hover:text-rose-gold transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-inter text-sm text-white/70">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            className="contact-reveal"
            style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s' }}
          >
            {status === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 border border-rose-gold/20 rounded-2xl bg-rose-gold/5">
                <div className="w-14 h-14 rounded-full bg-rose-gold/15 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-rose-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-playfair font-bold text-2xl text-white mb-3">Mensagem enviada!</h3>
                <p className="font-inter text-sm text-white/50 max-w-xs">
                  Recebemos seu contato e responderemos em breve. Obrigado pelo interesse!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-inter text-[10px] tracking-[0.3em] uppercase text-white/30 font-medium">
                      Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome completo"
                      className={inputClass}
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-inter text-[10px] tracking-[0.3em] uppercase text-white/30 font-medium">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className={inputClass}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-inter text-[10px] tracking-[0.3em] uppercase text-white/30 font-medium">
                      Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="Nome da empresa"
                      className={inputClass}
                      value={form.empresa}
                      onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-inter text-[10px] tracking-[0.3em] uppercase text-white/30 font-medium">
                      Tipo de projeto
                    </label>
                    <select
                      className={`${inputClass} bg-forge-dark appearance-none cursor-pointer`}
                      value={form.projeto}
                      onChange={(e) => setForm({ ...form, projeto: e.target.value })}
                    >
                      <option value="" disabled style={{ background: '#f9fafb', color: '#111827' }}>Selecione...</option>
                      <option value="pessoafisica" style={{ background: '#f9fafb', color: '#111827' }}>Pessoa Física</option>
                      <option value="web" style={{ background: '#f9fafb', color: '#111827' }}>Site / Landing Page</option>
                      <option value="ecommerce" style={{ background: '#f9fafb', color: '#111827' }}>E-commerce</option>
                      <option value="app" style={{ background: '#f9fafb', color: '#111827' }}>Aplicativo Mobile</option>
                      <option value="design" style={{ background: '#f9fafb', color: '#111827' }}>UI/UX Design</option>
                      <option value="seo" style={{ background: '#f9fafb', color: '#111827' }}>SEO & Performance</option>
                      <option value="outro" style={{ background: '#f9fafb', color: '#111827' }}>Outro</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-[10px] tracking-[0.3em] uppercase text-white/30 font-medium">
                    Mensagem *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Conte um pouco sobre seu projeto, objetivos e prazo estimado..."
                    className={`${inputClass} resize-none`}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group self-start inline-flex items-center gap-3 font-inter text-sm font-semibold bg-rose-gold hover:bg-rose-gold-light disabled:opacity-60 disabled:cursor-not-allowed text-forge-black px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-rose-gold/30 hover:-translate-y-0.5"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensagem
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
