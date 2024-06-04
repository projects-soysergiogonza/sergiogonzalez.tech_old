import { ReactNode } from 'react'
import type { Metadata } from 'next'

import './globals.css'
import { Inter } from '@assets/fonts'
import { Header } from '../stories'

export const metadata: Metadata = {
  title: 'Sergio González Sánchez',
  description: 'Frontend Developer',
  applicationName: 'Sergio González Sánchez',
  icons: {
    icon: '/images/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={Inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
