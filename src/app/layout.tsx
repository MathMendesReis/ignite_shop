import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const roboto = Roboto({
weight:['300'],
subsets:['latin'],
variable: '--font-roboto',

 })

export const metadata: Metadata = {
  title: 'Ignite shop',
  description: 'Loja de t-shirts do Ignit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans`}>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
