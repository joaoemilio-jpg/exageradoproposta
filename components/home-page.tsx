"use client"

import { useState } from "react"
import { ModuleCard, type ModuleData } from "./module-card"

const JOAO_IMG = "https://raw.githubusercontent.com/joaoemilio-jpg/exageradoproposta/refs/heads/main/public/images/joao.jpg"
const YAN_IMG = "/images/yan.jpg"
const LOGO_EXAGERADO = "/images/exagerado-logo.svg"

const CLIENT_LOGOS = [
  {
    name: "Wizard by Pearson",
    url: "/images/wizard.png",
    keepOriginal: true,
  },
  {
    name: "Toyota",
    url: "/images/toyota.svg",
    keepOriginal: false,
  },
  {
    name: "BYD",
    url: "/images/byd.png",
    keepOriginal: false,
  },
  {
    name: "Águia Branca",
    url: "/images/aguiabranca.png",
    keepOriginal: false,
  },
  {
    name: "Live!",
    url: "/images/live.png",
    keepOriginal: false,
  },
  {
    name: "Splash Piscinas",
    url: "/images/splash.png",
    keepOriginal: true,
  },
  {
    name: "Marchiori",
    url: "/images/marchiori.png",
    keepOriginal: true,
  },
  {
    name: "Lexus",
    url: "/images/lexus.svg",
    keepOriginal: false,
  },
]

const ALL_MODULES: ModuleData[] = [
  {
    num: "01",
    title: "Estrutura de CRM (Base)",
    tool: "Pipedrive",
    items: [
      "Criação de negócio automático via importação, formulário ou API WhatsApp",
      "Atribuição de proprietário por regras (rodízio, evento)",
      "Tarefas iniciais e cadência geradas para vendedor",
      "Movimentação de etapa dispara ações (e-mail, atualização)",
      "Funis por evento (ES, SP, RJ) + Comercial, Produção, Pós-venda",
      "Dashboards de indicadores, origem de faturamento, desempenho",
    ],
  },
  {
    num: "02",
    title: "Prospecção & Nutrição Outbound",
    tool: "WhatsApp + Pipedrive",
    items: [
      "Início de cadência WhatsApp ao entrar na etapa de prospecção",
      "Follow-up automatizado em intervalos predefinidos",
      "Pausar cadência automaticamente ao lead responder",
      "Reativação de leads frios com campanhas de reengajamento",
      "Importação e organização da base própria de contatos",
      "Direcionamento para assistente humano quando solicitado",
    ],
  },
  {
    num: "03",
    title: "Agendamento Automático de Reuniões",
    tool: "IA + Outlook/Teams",
    items: [
      "Envio de link de agendamento ou assistente de IA para melhor horário",
      "Sincronização com agenda do vendedor (Outlook/Microsoft Teams)",
      "Lembretes via WhatsApp: 24h, 3h e 15min antes da reunião",
      "Fluxo de não comparecimento (no-show) com reagendamento",
      "Follow-up pós-reunião com agradecimento e próximos passos",
    ],
  },
  {
    num: "04",
    title: "Pós-Reunião & Nutrição",
    tool: "WhatsApp + CRM",
    items: [
      "Nutrição pós-negativa para leads que recusaram proposta",
      "Reengajamento para futuras edições do evento",
      "Segmentação por motivo de recusa (não respondeu, não fechou, negativa)",
      "Campanhas específicas para reengajar para próximas edições",
    ],
  },
  {
    num: "05",
    title: "Contratos Automatizados",
    tool: "Autentique + IA",
    items: [
      "Coleta de dados via WhatsApp (IA) ou link de formulário",
      "Geração automática de contrato com campos variáveis preenchidos",
      "Notificação para equipe interna revisar antes do envio",
      "Assinatura digital via Autentique com status monitorado no CRM",
      "Gatilho para pagamento após assinatura confirmada",
    ],
  },
  {
    num: "06",
    title: "Pagamentos & Financeiro",
    tool: "CPAG/Cielo",
    items: [
      "Link de pagamento CPAG/Cielo enviado após assinatura do contrato",
      "Opções: Pix, Cartão Crédito (parcelado), Sinal de 10%",
      "Cadência automática de lembretes para pagamentos pendentes",
      "Confirmação de pagamento + atualização de status no CRM",
      "Protocolo para conciliação de pagamentos (ponto de atenção)",
    ],
  },
  {
    num: "07",
    title: "Onboarding Pós-Fechamento",
    tool: "WhatsApp + Portal",
    items: [
      "Mensagem de boas-vindas automática após confirmação de pagamento",
      "Criação automática de grupo WhatsApp com cliente e equipe",
      "Classificação 'target' ou 'não target' no CRM",
      "Tarefa de onboarding gerada para equipe de produção",
      "Login e senha gerados para acesso ao Portal do Expositor",
    ],
  },
  {
    num: "08",
    title: "Gestão Operacional do Evento",
    tool: "CRM + Portal",
    items: [
      "Checklist operacional gerada automaticamente por cliente",
      "Itens: Montador, Extintores, Energia (KVA), Equipe, Taxas, Documentações",
      "Informativos automáticos conforme andamento das etapas",
      "Lembretes de pendências para equipe e/ou cliente",
    ],
  },
  {
    num: "09",
    title: "Portal do Expositor (Sistema Web)",
    tool: "Sistema Web Próprio",
    items: [
      "500 acessos simultâneos com servidor próprio escalável",
      "Acessos distintos: Expositor, Montador, Fornecedores, Produção/Admin",
      "Upload de documentos (ART, RRT, etc.) com fluxo de revisão",
      "Cálculo automático de taxas por metragem do estande",
      "Regras variáveis por evento (SP vs RJ)",
      "Geração de cobrança de taxas via CPAG/Cielo",
      "Limite de credenciais por expositor com cobrança extra",
    ],
  },
  {
    num: "10",
    title: "Etiquetas, Crachás & QR Code",
    tool: "Portal + CRM",
    items: [
      "Geração automática de credenciais com Nome, Função e QR Code",
      "QR Code integrado com status de pagamento e documentação",
      "Cobrança automática se exceder limite de credenciais",
    ],
  },
  {
    num: "11",
    title: "Automações Durante o Evento",
    tool: "WhatsApp + CRM",
    items: [
      "Mensagens diárias programadas antes da abertura e durante o evento",
      "Checklist de funcionamento do estande do expositor",
      "Alertas de não conformidade para equipe de produção",
    ],
  },
  {
    num: "12",
    title: "Pós-Evento & Feedback",
    tool: "WhatsApp + CRM",
    items: [
      "Pesquisa NPS automática para medir satisfação geral",
      "Pesquisa CSAT para processos específicos (ex: montadora)",
      "Respostas registradas diretamente no card do cliente no CRM",
    ],
  },
]

export function HomePage() {
  const [openModules, setOpenModules] = useState<Set<string>>(new Set())
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleModule = (num: string) => {
    setOpenModules((prev) => {
      const next = new Set(prev)
      if (next.has(num)) next.delete(num)
      else next.add(num)
      return next
    })
  }

  const expandAll = () => {
    setOpenModules(new Set(ALL_MODULES.map((m) => m.num)))
  }

  const collapseAll = () => {
    setOpenModules(new Set())
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="border-b-4 border-foreground sticky top-0 bg-background z-50">
        <div className="container py-3 md:py-4 flex justify-between items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_EXAGERADO || "/placeholder.svg"}
            alt="Exagerado"
            className="h-6 md:h-8 object-contain"
          />
          {/* Desktop nav */}
          <div className="hidden md:flex gap-6">
            {[
              { href: "#modulos", label: "Módulos" },
              { href: "#equipe", label: "Equipe" },
              { href: "#cronograma", label: "Cronograma" },
              { href: "#clientes", label: "Clientes" },
              { href: "#investimento", label: "Investimento" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu de navegação"
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
        {/* Mobile nav menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-2 border-foreground bg-background">
            {[
              { href: "#modulos", label: "Módulos" },
              { href: "#equipe", label: "Equipe" },
              { href: "#cronograma", label: "Cronograma" },
              { href: "#clientes", label: "Clientes" },
              { href: "#investimento", label: "Investimento" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block font-mono text-sm uppercase tracking-wider py-4 px-6 border-b border-foreground/10 hover:bg-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="border-b-4 border-foreground">
        <div className="container py-12 md:py-20">
          <div className="max-w-5xl">
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent mb-3 md:mb-4">
              Proposta Técnica — Exagerado
            </p>
            <h1 className="font-sans font-black text-[40px] md:text-[80px] lg:text-[110px] leading-[0.9] tracking-tight mb-6 md:mb-8">
              SISTEMA DE
              <br />
              AUTOMAÇÃO
              <br />
              E CRM PARA
              <br />
              EVENTOS
            </h1>
            <div className="flex items-center gap-4 md:gap-8 mt-8 md:mt-12">
              <div className="h-2 w-16 md:w-32 bg-accent flex-shrink-0" />
              <p className="font-mono text-sm md:text-lg text-muted-foreground">
                Documento Detalhado de Entrega — 12 Módulos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="border-b-4 border-foreground">
        <div className="container py-10 md:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6">
            {[
              { value: "70", suffix: "%", label: "Redução de Tarefas Manuais" },
              { value: "500", suffix: "", label: "Acessos Simultâneos no Portal" },
              { value: "100", suffix: "%", label: "Digitalização de Contratos" },
              { value: "40", suffix: "+", label: "Automações Implementadas" },
            ].map((m, i) => (
              <div
                key={i}
                className={`${i < 3 ? "lg:border-r-4 border-foreground" : ""} px-3 md:px-8 py-4 md:py-6`}
              >
                <div className="font-sans font-black text-4xl md:text-[72px] leading-none">
                  {m.value}
                  {m.suffix && <span className="text-accent">{m.suffix}</span>}
                </div>
                <p className="font-mono text-[10px] md:text-xs mt-3 md:mt-4 uppercase tracking-wide text-muted-foreground">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="border-b-4 border-foreground">
        <div className="container py-12 md:py-20">
          <h2 className="font-sans font-black text-3xl md:text-[56px] lg:text-[72px] leading-tight mb-8 md:mb-12">
            TRANSFORMAÇÃO
            <br />
            DIGITAL COMPLETA
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <div className="border-l-4 border-foreground pl-4 md:pl-6 mb-6 md:mb-8">
                <h3 className="font-sans font-bold text-xl md:text-2xl mb-2 md:mb-3">
                  INTEGRAÇÃO TOTAL
                </h3>
                <p className="font-mono text-sm md:text-base leading-relaxed text-muted-foreground">
                  O sistema integra Pipedrive como base de CRM com funis
                  personalizados por evento (ES, SP, RJ) e automações acionadas
                  por gatilhos específicos.
                </p>
              </div>
              <div className="border-l-4 border-foreground pl-4 md:pl-6 mb-6 md:mb-8">
                <h3 className="font-sans font-bold text-xl md:text-2xl mb-2 md:mb-3">
                  OPERAÇÃO CENTRALIZADA
                </h3>
                <p className="font-mono text-sm md:text-base leading-relaxed text-muted-foreground">
                  Pipelines dedicadas para Comercial, Produção e Pós-venda
                  garantem fluxo segmentado. O Portal do Expositor centraliza
                  toda documentação.
                </p>
              </div>
            </div>
            <div>
              <div className="border-l-4 border-foreground pl-4 md:pl-6 mb-6 md:mb-8">
                <h3 className="font-sans font-bold text-xl md:text-2xl mb-2 md:mb-3">
                  ECOSSISTEMA FINANCEIRO
                </h3>
                <p className="font-mono text-sm md:text-base leading-relaxed text-muted-foreground">
                  Integração nativa com CPAG/Cielo e Autentique elimina
                  processos manuais de contrato e cobrança. Pix, cartão e sinal
                  de 10%.
                </p>
              </div>
              <div className="bg-foreground text-background p-6 md:p-8">
                <p className="font-mono text-xs md:text-sm uppercase tracking-wide mb-2">
                  Dashboards Integrados
                </p>
                <p className="font-sans font-bold text-2xl md:text-3xl">
                  Visibilidade Total do Funil
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All 12 Modules Section */}
      <section id="modulos" className="border-b-4 border-foreground scroll-mt-16">
        <div className="container py-12 md:py-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6 mb-8 md:mb-12">
            <h2 className="font-sans font-black text-3xl md:text-[56px] lg:text-[72px] leading-tight">
              12 MÓDULOS
              <br />
              DETALHADOS
            </h2>
            <div className="flex gap-3 md:gap-4">
              <button
                onClick={expandAll}
                className="font-mono text-[10px] md:text-xs uppercase tracking-wider border-2 border-foreground px-3 md:px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
              >
                Expandir Todos
              </button>
              <button
                onClick={collapseAll}
                className="font-mono text-[10px] md:text-xs uppercase tracking-wider border-2 border-foreground px-3 md:px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
              >
                Recolher Todos
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {ALL_MODULES.map((mod) => (
              <ModuleCard
                key={mod.num}
                mod={mod}
                isOpen={openModules.has(mod.num)}
                onToggle={() => toggleModule(mod.num)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="border-b-4 border-foreground scroll-mt-16">
        <div className="container py-12 md:py-20">
          <h2 className="font-sans font-black text-3xl md:text-[56px] lg:text-[72px] leading-tight mb-8 md:mb-12">
            EQUIPE DE
            <br />
            DESENVOLVIMENTO
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:border-r-4 border-foreground pr-0 lg:pr-12 pb-8 lg:pb-0">
              <div className="flex items-start gap-4 md:gap-6 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={JOAO_IMG || "/placeholder.svg"}
                  alt="João Emílio"
                  className="w-20 h-20 md:w-24 md:h-24 object-cover border-4 border-foreground"
                />
                <div>
                  <h3 className="font-sans font-black text-2xl md:text-4xl mb-1">
                    João Emílio
                  </h3>
                  <p className="font-mono text-xs md:text-sm uppercase tracking-wide text-accent">
                    Estratégia Comercial & CRM
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "6 anos na intersecção entre marketing, vendas e tecnologia",
                  "Parceiro oficial GoHighLevel e KommoCRM. Domínio avançado em Pipedrive",
                  "Expertise em funis end-to-end: CPL, CAC, ROAS e LTV",
                  "Especialista em integrações via n8n, APIs e IA para qualificação",
                  "Treinou Wizard by Pearson, Splash Piscinas, Alfa Piscinas",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="border-l-2 border-foreground pl-3 md:pl-4 font-mono text-xs md:text-sm leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 bg-foreground text-background font-mono text-[10px] md:text-xs px-3 py-2 inline-block">
                Pipedrive - n8n - GoHighLevel - Meta/Google Ads - GA4
              </div>
            </div>
            <div className="pl-0 lg:pl-12 pt-8 lg:pt-0 border-t-4 lg:border-t-0 border-foreground">
              <div className="flex items-start gap-4 md:gap-6 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={YAN_IMG || "/placeholder.svg"}
                  alt="Yan Cancella"
                  className="w-20 h-20 md:w-24 md:h-24 object-cover border-4 border-foreground"
                />
                <div>
                  <h3 className="font-sans font-black text-2xl md:text-4xl mb-1">
                    Yan Cancella
                  </h3>
                  <p className="font-mono text-xs md:text-sm uppercase tracking-wide text-accent">
                    Liderança Técnica Full Stack
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "4+ anos em projetos de alto impacto e escalabilidade",
                  "Redução de 35% no tempo de carregamento (Toyota ES/BH/BSB)",
                  "+25% conversão de leads via APIs seguras e Followize",
                  "CMS personalizado adotado por 8 marcas do Grupo Águia Branca",
                  "Coordenação de repositórios e padrões CI/CD",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="border-l-2 border-foreground pl-3 md:pl-4 font-mono text-xs md:text-sm leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 bg-foreground text-background font-mono text-[10px] md:text-xs px-3 py-2 inline-block">
                TypeScript - Next.js - React - Node.js - AWS - Azure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="cronograma" className="border-b-4 border-foreground scroll-mt-16">
        <div className="container py-12 md:py-20">
          <h2 className="font-sans font-black text-3xl md:text-[56px] lg:text-[72px] leading-tight mb-8 md:mb-12">
            CRONOGRAMA
            <br />
            DE ENTREGAS
          </h2>
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-start gap-4 md:gap-8">
              <div className="font-sans font-black text-4xl md:text-[64px] leading-none w-12 md:w-32 flex-shrink-0">
                01
              </div>
              <div className="flex-1 border-l-4 border-foreground pl-4 md:pl-8 pt-2 md:pt-4">
                <h3 className="font-sans font-bold text-xl md:text-3xl mb-2 md:mb-3">
                  FASE 1: CRM & COMERCIAL
                </h3>
                <p className="font-mono text-sm md:text-base text-muted-foreground mb-2">
                  Fevereiro — Abril
                </p>
                <p className="font-mono text-sm md:text-base leading-relaxed text-muted-foreground">
                  Módulos 1 a 6: Base do CRM, Prospecção, Agendamento,
                  Pós-Reunião, Contratos e Pagamentos
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 md:gap-8">
              <div className="font-sans font-black text-4xl md:text-[64px] leading-none w-12 md:w-32 flex-shrink-0">
                02
              </div>
              <div className="flex-1 border-l-4 border-foreground pl-4 md:pl-8 pt-2 md:pt-4">
                <h3 className="font-sans font-bold text-xl md:text-3xl mb-2 md:mb-3">
                  FASE 2: PORTAL & OPERACIONAL
                </h3>
                <p className="font-mono text-sm md:text-base text-muted-foreground mb-2">
                  Março — Abril
                </p>
                <p className="font-mono text-sm md:text-base leading-relaxed text-muted-foreground">
                  Módulos 7 a 12: Onboarding, Gestão Operacional, Portal do
                  Expositor, Credenciais, Evento e Pós-Evento
                </p>
              </div>
            </div>
            <div className="bg-accent text-accent-foreground p-6 md:p-8 mt-8 md:mt-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
                <div>
                  <p className="font-mono text-xs md:text-sm uppercase tracking-wide mb-2">
                    Portal + Estrutura Prontos
                  </p>
                  <p className="font-sans font-black text-4xl md:text-6xl">
                    06/ABRIL
                  </p>
                </div>
                <div className="md:text-right">
                  <p className="font-mono text-xs md:text-sm uppercase tracking-wide mb-2">
                    Início Montagem Evento
                  </p>
                  <p className="font-sans font-black text-4xl md:text-6xl">
                    29/ABRIL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clientes" className="border-b-4 border-foreground bg-foreground text-background scroll-mt-16">
        <div className="container py-12 md:py-20">
          <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent mb-3 md:mb-4">
            Portfólio
          </p>
          <h2 className="font-sans font-black text-3xl md:text-[56px] lg:text-[72px] leading-tight mb-8 md:mb-12">
            EMPRESAS QUE
            <br />
            CONFIAM NO
            <br />
            NOSSO TRABALHO
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {CLIENT_LOGOS.map((client, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-6 md:py-10 px-4 md:px-6 border border-background/15"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.url || "/placeholder.svg"}
                  alt={client.name}
                  className="w-24 md:w-36 h-12 md:h-16 object-contain"
                  style={client.keepOriginal ? undefined : { filter: "brightness(0) invert(1)" }}
                />
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider mt-3 md:mt-4 text-background/50">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="border-b-4 border-foreground">
        <div className="container py-12 md:py-20">
          <h2 className="font-sans font-black text-3xl md:text-[56px] lg:text-[72px] leading-tight mb-8 md:mb-12">
            SUPORTE
            <br />
            ESTENDIDO
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <div className="border-l-4 border-foreground pl-4 md:pl-6 mb-6 md:mb-8">
                <h3 className="font-sans font-bold text-xl md:text-2xl mb-2 md:mb-3">
                  TREINAMENTO COMPLETO
                </h3>
                <p className="font-mono text-sm md:text-base leading-relaxed text-muted-foreground">
                  Treinamento comercial completo sobre Pipedrive e otimização de
                  funil ministrado por João Emílio. Treinamento técnico do
                  Portal do Expositor.
                </p>
              </div>
              <div className="border-l-4 border-foreground pl-4 md:pl-6">
                <h3 className="font-sans font-bold text-xl md:text-2xl mb-2 md:mb-3">
                  ATENDIMENTO PRIORITÁRIO
                </h3>
                <p className="font-mono text-sm md:text-base leading-relaxed text-muted-foreground">
                  Canal direto via WhatsApp para resolução ágil de dúvidas e
                  incidentes. Suporte durante todo o período do evento.
                </p>
              </div>
            </div>
            <div className="bg-foreground text-background p-8 md:p-12 flex flex-col justify-center">
              <p className="font-mono text-xs md:text-sm uppercase tracking-wide mb-4">
                Garantia de Acompanhamento
              </p>
              <p className="font-sans font-black text-5xl md:text-[80px] leading-none">
                ATÉ
                <br />
                JULHO/26
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-b-4 border-foreground">
        <div className="container py-12 md:py-20">
          <h2 className="font-sans font-black text-3xl md:text-[56px] lg:text-[72px] leading-tight mb-8 md:mb-12">
            BENEFÍCIOS
            <br />
            ESTRATÉGICOS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Eficiência Operacional",
                desc: "Eliminação de retrabalho e padronização de processos em todas as áreas.",
              },
              {
                title: "Conversão Acelerada",
                desc: "Aumento de vendas via follow-ups automáticos e redução de no-show em 60%.",
              },
              {
                title: "Visibilidade Total",
                desc: "Dashboards integrados oferecem controle completo do funil comercial.",
              },
              {
                title: "Diferencial Único",
                desc: "Ecossistema integrado: CRM + Portal + QR Code + Pagamentos + IA.",
              },
            ].map((benefit, i) => (
              <div key={i} className="border-l-4 border-foreground pl-4 md:pl-6">
                <h3 className="font-sans font-bold text-xl md:text-2xl mb-2 md:mb-3 uppercase">
                  {benefit.title}
                </h3>
                <p className="font-mono text-sm md:text-base leading-relaxed text-muted-foreground">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="container py-12 md:py-20">
          <div className="bg-foreground text-background p-6 md:p-12 lg:p-16">
            <h2 className="font-sans font-black text-3xl md:text-[56px] lg:text-[72px] leading-tight mb-6 md:mb-8">
              PRÓXIMOS
              <br />
              PASSOS
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
              {[
                "Kickoff & Alinhamento",
                "Sprints Semanais",
                "Portal Pronto: 06/04",
                "Go-Live: 29/04",
              ].map((step, i) => (
                <div key={i} className="border-l-2 border-background pl-3 md:pl-4">
                  <div className="font-sans font-black text-3xl md:text-4xl mb-1 md:mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="font-mono text-xs md:text-sm">{step}</p>
                </div>
              ))}
            </div>
            <div className="h-2 w-full bg-accent" />
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="investimento" className="border-b-4 border-foreground scroll-mt-16">
        <div className="container py-12 md:py-20">
          <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent mb-3 md:mb-4">
            Investimento
          </p>
          <h2 className="font-sans font-black text-3xl md:text-[56px] lg:text-[72px] leading-tight mb-10 md:mb-16">
            VALOR DA
            <br />
            PROPOSTA
          </h2>

          {/* Main proposal value */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-6 md:mb-8">
            <div className="bg-foreground text-background p-6 md:p-12">
              <p className="font-mono text-xs md:text-sm uppercase tracking-wide mb-3 md:mb-4">
                Pagamento à vista
              </p>
              <p className="font-sans font-black text-4xl md:text-[72px] leading-none">
                R$ 17.500
              </p>
              <div className="h-1 w-16 md:w-24 bg-accent mt-4 md:mt-6 mb-3 md:mb-4" />
              <p className="font-mono text-xs md:text-sm text-background/70 leading-relaxed">
                Valor integral para desenvolvimento completo dos 12 módulos + Portal do Expositor
              </p>
            </div>
            <div className="border-4 border-foreground p-6 md:p-12">
              <p className="font-mono text-xs md:text-sm uppercase tracking-wide mb-3 md:mb-4 text-muted-foreground">
                Pagamento no cartão
              </p>
              <p className="font-sans font-black text-4xl md:text-[72px] leading-none">
                R$ 17.500
              </p>
              <div className="h-1 w-16 md:w-24 bg-foreground mt-4 md:mt-6 mb-3 md:mb-4" />
              <p className="font-mono text-xs md:text-sm text-muted-foreground leading-relaxed">
                Parcelamento com juros por conta do contratante
              </p>
            </div>
          </div>

          {/* Validity notice */}
          <div className="border-l-4 border-accent bg-accent/5 px-4 md:px-6 py-3 md:py-4 mb-10 md:mb-16">
            <p className="font-mono text-xs md:text-sm">
              <span className="font-bold text-accent uppercase">Importante:</span>{" "}
              Valores válidos para início do projeto até no máximo{" "}
              <span className="font-bold">13/02/2026</span>.
            </p>
          </div>

          {/* Support payment */}
          <div className="border-4 border-accent p-6 md:p-12 mb-10 md:mb-16">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 md:gap-6">
              <div>
                <p className="font-mono text-xs md:text-sm uppercase tracking-wide text-accent mb-2">
                  Pagamento único — Após lançamento do site
                </p>
                <h3 className="font-sans font-black text-2xl md:text-4xl">
                  SUPORTE ESTENDIDO
                </h3>
                <p className="font-mono text-xs md:text-sm text-muted-foreground mt-2 leading-relaxed">
                  Acompanhamento dedicado até o final de Julho/2026
                </p>
              </div>
              <div className="lg:text-right">
                <p className="font-sans font-black text-4xl md:text-[64px] leading-none">
                  R$ 4.500
                </p>
              </div>
            </div>
          </div>

          {/* Monthly costs */}
          <h3 className="font-sans font-black text-2xl md:text-4xl mb-6 md:mb-8 uppercase">
            Custos Mensais de Ferramentas
          </h3>

          {/* Hosting & DB costs */}
          <div className="mb-8 md:mb-12">
            <div className="bg-foreground text-background px-4 md:px-6 py-3 mb-0">
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest">
                Hospedagem & Banco de Dados
              </p>
            </div>
            <div className="border-x-4 border-b-4 border-foreground overflow-x-auto">
              <table className="w-full min-w-[400px]">
                <thead>
                  <tr className="border-b-2 border-foreground">
                    <th className="text-left font-mono text-[10px] md:text-xs uppercase tracking-wider px-3 md:px-6 py-3 md:py-4">
                      Ferramenta
                    </th>
                    <th className="text-left font-mono text-[10px] md:text-xs uppercase tracking-wider px-3 md:px-6 py-3 md:py-4">
                      Plano
                    </th>
                    <th className="text-right font-mono text-[10px] md:text-xs uppercase tracking-wider px-3 md:px-6 py-3 md:py-4 hidden md:table-cell">
                      Valor em Dólar
                    </th>
                    <th className="text-right font-mono text-[10px] md:text-xs uppercase tracking-wider px-3 md:px-6 py-3 md:py-4">
                      Estimado (BRL)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tool: "Supabase", plan: "Pro Tier", usd: "$25.00", brl: "~R$ 140,00" },
                    { tool: "Vercel", plan: "Pro Plan", usd: "$20.00", brl: "~R$ 110,00" },
                    { tool: "E-mails (Resend)", plan: "Free Tier", usd: "$0.00", brl: "R$ 0,00" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-foreground/20">
                      <td className="px-3 md:px-6 py-3 md:py-4 font-sans font-bold text-xs md:text-sm">{row.tool}</td>
                      <td className="px-3 md:px-6 py-3 md:py-4 font-mono text-xs md:text-sm text-muted-foreground">{row.plan}</td>
                      <td className="px-3 md:px-6 py-3 md:py-4 font-mono text-xs md:text-sm text-right text-muted-foreground hidden md:table-cell">{row.usd}</td>
                      <td className="px-3 md:px-6 py-3 md:py-4 font-mono text-xs md:text-sm text-right">{row.brl}</td>
                    </tr>
                  ))}
                  <tr className="bg-foreground/5">
                    <td colSpan={2} className="px-3 md:px-6 py-3 md:py-4 font-sans font-black text-sm md:text-base">
                      Subtotal Mensal
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 font-mono text-xs md:text-sm text-right text-muted-foreground hidden md:table-cell">$45.00</td>
                    <td className="px-3 md:px-6 py-3 md:py-4 font-sans font-black text-sm md:text-base text-right">~R$ 250,00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CRM costs */}
          <div className="mb-8 md:mb-12">
            <div className="bg-foreground text-background px-4 md:px-6 py-3 mb-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-1 md:gap-2">
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest">
                CRM — Licenças Pipedrive
              </p>
              <span className="font-mono text-[10px] md:text-xs text-accent">
                Cobrança inicia após 30 dias
              </span>
            </div>
            <div className="border-x-4 border-b-4 border-foreground">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-foreground">
                    <th className="text-left font-mono text-[10px] md:text-xs uppercase tracking-wider px-3 md:px-6 py-3 md:py-4">
                      Usuário
                    </th>
                    <th className="text-right font-mono text-[10px] md:text-xs uppercase tracking-wider px-3 md:px-6 py-3 md:py-4">
                      Valor Mensal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Vendedor 1",
                    "Vendedor 2",
                    "Vendedor 3",
                    "Pré-venda 1",
                    "Administrativo",
                    "Produção 1",
                    "Financeiro 1",
                  ].map((user, i) => (
                    <tr key={i} className="border-b border-foreground/20">
                      <td className="px-3 md:px-6 py-2.5 md:py-3 font-mono text-xs md:text-sm">{user}</td>
                      <td className="px-3 md:px-6 py-2.5 md:py-3 font-mono text-xs md:text-sm text-right">R$ 182,40</td>
                    </tr>
                  ))}
                  <tr className="bg-foreground/5">
                    <td className="px-3 md:px-6 py-3 md:py-4 font-sans font-black text-sm md:text-base">
                      Total Mensal
                    </td>
                    <td className="px-3 md:px-6 py-3 md:py-4 font-sans font-black text-sm md:text-base text-right">
                      R$ 1.276,80
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-foreground text-background p-6 md:p-12">
            <p className="font-mono text-xs md:text-sm uppercase tracking-wide mb-4 md:mb-6 text-background/50">
              Resumo de Investimento
            </p>
            <div className="space-y-3 md:space-y-4">
              <div className="flex flex-col md:flex-row justify-between md:items-baseline border-b border-background/20 pb-3 md:pb-4 gap-1">
                <span className="font-mono text-xs md:text-sm">Desenvolvimento (12 módulos + Portal)</span>
                <span className="font-sans font-bold text-base md:text-lg">R$ 17.500 <span className="font-mono text-[10px] md:text-xs text-background/50">à vista</span></span>
              </div>
              <div className="flex flex-col md:flex-row justify-between md:items-baseline border-b border-background/20 pb-3 md:pb-4 gap-1">
                <span className="font-mono text-xs md:text-sm">Suporte Estendido até Jul/26 (pagamento único)</span>
                <span className="font-sans font-bold text-base md:text-lg">R$ 4.500</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between md:items-baseline border-b border-background/20 pb-3 md:pb-4 gap-1">
                <span className="font-mono text-xs md:text-sm">Ferramentas mensais (hospedagem + DB)</span>
                <span className="font-sans font-bold text-base md:text-lg">~R$ 250<span className="font-mono text-[10px] md:text-xs text-background/50">/mês</span></span>
              </div>
              <div className="flex flex-col md:flex-row justify-between md:items-baseline gap-1">
                <span className="font-mono text-xs md:text-sm">CRM mensal (inicia após 30d)</span>
                <span className="font-sans font-bold text-base md:text-lg">R$ 1.276,80<span className="font-mono text-[10px] md:text-xs text-background/50">/mês</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-foreground">
        <div className="container py-6 md:py-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_EXAGERADO || "/placeholder.svg"}
            alt="Exagerado"
            className="h-5 md:h-6 object-contain"
          />
          <p className="font-mono text-xs md:text-sm text-muted-foreground text-center">
            Sistema de Automação e CRM para Eventos — Fevereiro 2026
          </p>
        </div>
      </footer>
    </div>
  )
}
