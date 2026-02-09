import React from "react"
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700', '900'],
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Exagerado - Sistema de Automacao e CRM para Eventos',
  description: 'Proposta tecnica de sistema de automacao e CRM para gestao completa de eventos com 12 modulos integrados.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
