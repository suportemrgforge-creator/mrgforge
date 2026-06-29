'use client'

import { useLanguage } from '@/context/LanguageContext'

const socials = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/595992959869',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/mrgforge',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/mrgforge',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const { lang } = useLanguage()

  const footerLinks = lang === 'pt'
    ? {
        Empresa: [
          { label: 'Sobre', href: '#sobre' },
          { label: 'Serviços', href: '#servicos' },
          { label: 'Portfólio', href: '#portfolio' },
          { label: 'Contato', href: '#contato' },
        ],
        Serviços: [
          { label: 'Desenvolvimento Web', href: '#servicos' },
          { label: 'Aplicativos Mobile', href: '#servicos' },
          { label: 'UI/UX Design', href: '#servicos' },
          { label: 'E-commerce', href: '#servicos' },
        ],
        Legal: [
          { label: 'Política de Privacidade', href: '/privacidade#privacidade' },
          { label: 'Termos de Uso', href: '/privacidade#termos' },
        ],
      }
    : {
        Empresa: [
          { label: 'Sobre', href: '#sobre' },
          { label: 'Servicios', href: '#servicos' },
          { label: 'Portafolio', href: '#portfolio' },
          { label: 'Contacto', href: '#contato' },
        ],
        Servicios: [
          { label: 'Desarrollo Web', href: '#servicos' },
          { label: 'Aplicaciones Mobile', href: '#servicos' },
          { label: 'UI/UX Design', href: '#servicos' },
          { label: 'E-commerce', href: '#servicos' },
        ],
        Legal: [
          { label: 'Política de Privacidad', href: '/privacidade#privacidade' },
          { label: 'Términos de Uso', href: '/privacidade#termos' },
        ],
      }

  const t = lang === 'pt'
    ? {
        tagline: 'Desenvolvimento digital de alto padrão para marcas que não se contentam com o ordinário.',
        foundedBy: 'Fundada por',
        rights: 'Todos os direitos reservados.',
      }
    : {
        tagline: 'Desarrollo digital de alto nivel para marcas que no se conforman con lo ordinario.',
        foundedBy: 'Fundada por',
        rights: 'Todos los derechos reservados.',
      }

  return (
    <footer id="footer" className="relative bg-forge-deep border-t border-white/5 overflow-hidden">
      {/* Top divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/15 to-transparent" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-end gap-2 group mb-6 block">
              <div className="flex flex-col leading-none">
                <span className="font-playfair font-bold text-[1.8rem] text-white tracking-tight leading-none group-hover:text-rose-gold transition-colors duration-300">
                  MRG
                </span>
                <span className="font-inter text-[9px] tracking-[0.45em] text-white/70 uppercase font-semibold leading-tight mt-0.5">
                  FORGE
                </span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-gold mb-1" />
            </a>

            <div className="inline-flex items-center gap-2.5 border border-rose-gold/25 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1 h-1 rounded-full bg-rose-gold" />
              <span className="font-playfair italic text-white text-xs tracking-wide">Built to Last.</span>
            </div>

            <p className="font-inter text-sm text-white/35 leading-relaxed max-w-xs mb-3">
              {t.tagline}
            </p>
            <p className="font-inter text-xs text-white/30 mb-8">
              {t.foundedBy}{' '}
              <span className="text-white/55 font-medium">Raquel Sampaio</span>
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/8 hover:border-rose-gold/50 text-white/30 hover:text-rose-gold flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="lg:col-span-1">
              <h4 className="font-inter text-[10px] tracking-[0.35em] uppercase text-white/30 font-semibold mb-5">
                {group}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-inter text-sm text-white/45 hover:text-rose-gold transition-colors duration-200"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-white/25">
            © {year} MRG Forge. {t.rights}
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-gold/60" />
            <p className="font-inter text-xs text-white/25">
              Crafted with care in Ciudad del Este, Paraguay.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
