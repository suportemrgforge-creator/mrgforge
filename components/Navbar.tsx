'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-forge-black/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-end gap-2 group" aria-label="MRG Forge home">
          <div className="flex flex-col leading-none">
            <span className="font-playfair font-bold text-[1.6rem] text-white tracking-tight leading-none group-hover:text-rose-gold transition-colors duration-300">
              MRG
            </span>
            <span className="font-inter text-[9px] tracking-[0.45em] text-white/70 uppercase font-semibold leading-tight mt-0.5">
              FORGE
            </span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-gold mb-1 opacity-80" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-inter text-sm text-white/60 hover:text-white transition-colors duration-200 tracking-wide relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-rose-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 font-inter text-sm font-semibold bg-rose-gold hover:bg-rose-gold-light text-forge-black px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-rose-gold/25 hover:-translate-y-0.5"
        >
          Iniciar Projeto
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-8 h-6 flex flex-col justify-between group"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <span
            className={`block h-px bg-white origin-center transition-all duration-300 ${
              open ? 'rotate-45 translate-y-[11px]' : ''
            }`}
          />
          <span
            className={`block h-px bg-white transition-all duration-300 ${
              open ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block h-px bg-white origin-center transition-all duration-300 ${
              open ? '-rotate-45 -translate-y-[11px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-forge-black/98 backdrop-blur-md border-t border-white/5`}
      >
        <div className="px-6 pt-4 pb-8 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-inter text-base text-white/70 hover:text-white transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="inline-flex justify-center items-center font-inter text-sm font-semibold bg-rose-gold text-forge-black px-6 py-3 rounded-full mt-2"
            onClick={() => setOpen(false)}
          >
            Iniciar Projeto
          </a>
        </div>
      </div>
    </header>
  )
}
