'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Lang = 'pt' | 'es'

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'pt',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt')

  useEffect(() => {
    const stored = localStorage.getItem('mrg-lang') as Lang | null
    if (stored === 'pt' || stored === 'es') setLangState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'es'
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem('mrg-lang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
