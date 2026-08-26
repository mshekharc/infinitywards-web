import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mrigank Shekhar Chaubey — InfinityWards',
  description: 'Network Engineer, builder, and technologist. Exploring SD-WAN, AI agents, and everything in between.',
  metadataBase: new URL('https://infinitywards.com'),
  openGraph: {
    title: 'Mrigank Shekhar Chaubey',
    description: 'Network Engineer & Builder',
    url: 'https://infinitywards.com',
    siteName: 'InfinityWards',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
