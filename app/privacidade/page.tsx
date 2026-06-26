import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Privacidade & Termos de Uso — MRG Forge',
  description:
    'Política de Privacidade e Termos de Uso da MRG Forge. Saiba como tratamos seus dados em conformidade com a LGPD.',
}

function Hl({ children }: { children: ReactNode }) {
  return <span className="text-white/85 font-medium">{children}</span>
}

function GoldLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="text-rose-gold hover:underline underline-offset-2 transition-colors duration-200">
      {children}
    </a>
  )
}

function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div id={id} className="scroll-mt-28 flex items-center gap-4 mb-12">
      <span className="shrink-0 w-8 h-px bg-rose-gold" />
      <h2 className="font-playfair font-bold text-2xl lg:text-3xl text-white">{children}</h2>
    </div>
  )
}

function Article({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-10 last:mb-0 pl-12">
      <h3 className="font-inter text-[10px] tracking-[0.35em] uppercase font-semibold text-rose-gold mb-4">
        {title}
      </h3>
      <div className="font-inter text-sm text-white/55 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  )
}

function Ul({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 mt-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="mt-[5px] w-1 h-1 shrink-0 rounded-full bg-rose-gold/60" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PrivacidadePage() {
  return (
    <>
      <Navbar />
      <main className="bg-forge-black min-h-screen">

        {/* Hero */}
        <div className="pt-32 pb-14 border-b border-white/5">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <a
              href="/"
              className="inline-flex items-center gap-2 font-inter text-xs text-white/30 hover:text-rose-gold transition-colors duration-200 mb-10 group"
            >
              <svg
                className="w-3.5 h-3.5 rotate-180 group-hover:-translate-x-0.5 transition-transform duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Voltar ao site
            </a>

            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-rose-gold" />
              <span className="font-inter text-xs tracking-[0.35em] text-white/35 uppercase font-semibold">
                Legal
              </span>
            </div>
            <h1 className="font-playfair font-bold text-4xl lg:text-[3rem] text-white leading-tight mb-5">
              Política de Privacidade<br />
              <span className="text-white italic">& Termos de Uso</span>
            </h1>
            <p className="font-inter text-sm text-white/35 leading-relaxed">
              Última atualização:{' '}
              <span className="text-white/55">Junho de 2026</span>
              {' · '}
              MRG Forge — Desenvolvimento Digital
              {' · '}
              Ciudad del Este, Paraguay
            </p>
          </div>
        </div>

        {/* Table of contents */}
        <div className="border-b border-white/5">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 py-8">
            <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-white/25 font-semibold mb-4">
              Nesta página
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { label: 'Política de Privacidade', href: '#privacidade' },
                { label: 'Termos de Uso', href: '#termos' },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-inter text-xs text-white/40 hover:text-rose-gold border border-white/8 hover:border-rose-gold/30 rounded-full px-4 py-1.5 transition-all duration-200"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 space-y-20">

          {/* ── POLÍTICA DE PRIVACIDADE ── */}
          <section>
            <SectionHeading id="privacidade">Política de Privacidade</SectionHeading>

            <Article title="1. Quem somos">
              <p>
                A <Hl>MRG Forge</Hl> é uma desenvolvedora autônoma de soluções digitais operada por{' '}
                <Hl>Raquel Sampaio</Hl>, com sede em <Hl>Ciudad del Este, Paraguay</Hl>. Prestamos
                serviços de desenvolvimento web, e-commerce e design digital para pessoas físicas e jurídicas.
              </p>
              <p>
                Contato:{' '}
                <GoldLink href="mailto:suporte@mrgforge.com">suporte@mrgforge.com</GoldLink>
                {' · '}
                <GoldLink href="https://wa.me/595992959869">+595 992 959 869</GoldLink>
              </p>
            </Article>

            <Article title="2. Dados que coletamos">
              <p>
                Coletamos apenas os dados que você nos fornece voluntariamente através do{' '}
                <Hl>formulário de contato</Hl> disponível neste site:
              </p>
              <Ul
                items={[
                  'Nome completo',
                  'Endereço de e-mail',
                  'Nome da empresa (opcional)',
                  'Tipo de projeto selecionado',
                  'Mensagem descrevendo seu projeto ou dúvida',
                ]}
              />
              <p>
                Não coletamos dados automaticamente além dos necessários para o funcionamento
                técnico do site (como logs de acesso padrão do servidor de hospedagem).
              </p>
            </Article>

            <Article title="3. Como utilizamos seus dados">
              <p>
                Os dados informados são utilizados <Hl>exclusivamente</Hl> para:
              </p>
              <Ul
                items={[
                  'Responder à sua solicitação de orçamento ou contato;',
                  'Comunicar informações sobre o andamento de um projeto contratado;',
                  'Esclarecer dúvidas técnicas ou comerciais relacionadas ao seu pedido.',
                ]}
              />
              <p>
                Seus dados <Hl>não são utilizados</Hl> para envio de e-mails de marketing,
                comunicações não solicitadas ou qualquer finalidade diferente das acima descritas.
              </p>
            </Article>

            <Article title="4. Compartilhamento de dados">
              <p>
                A MRG Forge <Hl>não vende, aluga, cede ou compartilha</Hl> suas informações pessoais
                com terceiros para fins comerciais, publicitários ou quaisquer outros fins.
              </p>
              <p>
                Seus dados poderão ser acessados por terceiros somente nas seguintes situações excepcionais:
              </p>
              <Ul
                items={[
                  'Por determinação legal, regulatória ou ordem judicial;',
                  'Para proteção dos direitos e segurança da MRG Forge ou de terceiros.',
                ]}
              />
            </Article>

            <Article title="5. Base legal e conformidade com a LGPD">
              <p>
                O tratamento dos seus dados pessoais é realizado em conformidade com a{' '}
                <Hl>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD)</Hl>, com base
                no <Hl>consentimento</Hl> (Art. 7º, I) e na <Hl>execução de contrato</Hl> ou
                procedimentos preliminares (Art. 7º, V), quando aplicável.
              </p>
              <p>
                Como titular dos dados, você possui os seguintes direitos:
              </p>
              <Ul
                items={[
                  'Confirmação da existência de tratamento;',
                  'Acesso aos dados tratados;',
                  'Correção de dados incompletos, inexatos ou desatualizados;',
                  'Eliminação dos dados quando o tratamento não for mais necessário;',
                  'Portabilidade dos dados a outro fornecedor de serviço;',
                  'Revogação do consentimento a qualquer momento.',
                ]}
              />
              <p>
                Para exercer qualquer um desses direitos, entre em contato pelo e-mail{' '}
                <GoldLink href="mailto:suporte@mrgforge.com">suporte@mrgforge.com</GoldLink>.
                Responderemos em até 5 dias úteis.
              </p>
            </Article>

            <Article title="6. Armazenamento e segurança">
              <p>
                Os dados coletados são armazenados com medidas técnicas e organizacionais
                adequadas para protegê-los contra acesso não autorizado, alteração, divulgação
                ou destruição indevida.
              </p>
              <p>
                As informações são retidas pelo tempo necessário para atender à finalidade de
                coleta ou conforme exigido por obrigações legais. Após esse período, são
                excluídas de forma segura.
              </p>
            </Article>

            <Article title="7. Cookies">
              <p>
                Este site pode utilizar <Hl>cookies técnicos essenciais</Hl> para seu funcionamento
                básico (como preferências de sessão). Não utilizamos cookies de rastreamento,
                publicidade ou plataformas de analytics de terceiros.
              </p>
            </Article>
          </section>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent" />

          {/* ── TERMOS DE USO ── */}
          <section>
            <SectionHeading id="termos">Termos de Uso</SectionHeading>

            <Article title="1. Aceitação dos termos">
              <p>
                Ao acessar e utilizar o site <Hl>mrgforge.com</Hl>, você declara ter lido,
                compreendido e concordado com os presentes Termos de Uso. Caso não concorde
                com qualquer disposição, recomendamos que não utilize o site.
              </p>
            </Article>

            <Article title="2. Uso do site">
              <p>
                O conteúdo deste site é disponibilizado exclusivamente para fins informativos
                e de contato comercial. É expressamente vedado:
              </p>
              <Ul
                items={[
                  'Reproduzir, copiar ou redistribuir qualquer conteúdo sem autorização prévia e por escrito;',
                  'Utilizar o site para fins ilícitos ou que violem direitos de terceiros;',
                  'Tentar comprometer a segurança, integridade ou disponibilidade do site;',
                  'Enviar informações falsas ou enganosas através do formulário de contato.',
                ]}
              />
            </Article>

            <Article title="3. Propriedade intelectual">
              <p>
                Todo o conteúdo presente neste site — incluindo textos, design, código-fonte,
                logotipo, imagens e demais elementos visuais — é de propriedade exclusiva da{' '}
                <Hl>MRG Forge / Raquel Sampaio</Hl> ou de seus respectivos titulares, protegido
                pelas leis de propriedade intelectual e direitos autorais aplicáveis.
              </p>
            </Article>

            <Article title="4. Limitação de responsabilidade">
              <p>
                A MRG Forge não se responsabiliza por danos diretos, indiretos ou consequentes
                decorrentes do uso ou da impossibilidade de uso deste site, incluindo falhas
                técnicas temporárias, indisponibilidade do serviço ou erros de conteúdo.
              </p>
              <p>
                As informações apresentadas neste site têm caráter meramente ilustrativo e não
                constituem proposta comercial vinculante sem formalização por escrito.
              </p>
            </Article>

            <Article title="5. Links externos">
              <p>
                Este site pode conter links para sites de terceiros fornecidos apenas para
                conveniência. A MRG Forge não tem controle sobre o conteúdo, políticas de
                privacidade ou práticas desses sites e não se responsabiliza por eles.
              </p>
            </Article>

            <Article title="6. Alterações">
              <p>
                Reservamo-nos o direito de atualizar esta Política de Privacidade e estes
                Termos de Uso a qualquer momento, sem aviso prévio. A data de última
                atualização sempre será indicada no topo desta página. O uso continuado
                do site após qualquer alteração implica a aceitação das novas condições.
              </p>
            </Article>

            <Article title="7. Contato">
              <p>Dúvidas sobre esta Política ou os Termos de Uso podem ser enviadas para:</p>
              <div className="mt-3 p-5 rounded-xl border border-white/8 bg-white/[0.02] space-y-1.5">
                <p><Hl>MRG Forge — Raquel Sampaio</Hl></p>
                <p>Ciudad del Este, Paraguay</p>
                <p>
                  E-mail:{' '}
                  <GoldLink href="mailto:suporte@mrgforge.com">suporte@mrgforge.com</GoldLink>
                </p>
                <p>
                  WhatsApp:{' '}
                  <GoldLink href="https://wa.me/595992959869">+595 992 959 869</GoldLink>
                </p>
              </div>
            </Article>
          </section>

        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
