import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import QueryProvider from './components/QueryProvider'
import NextAuthProvider from './components/NextAuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Exploring React Query',
  description: 'Exploring React Query',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
      <QueryProvider>
      <body className={inter.className}>{children}</body>
      </QueryProvider>
      </NextAuthProvider>
    </html>
  )
}
