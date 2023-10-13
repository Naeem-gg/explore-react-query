import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import QueryProvider from './components/QueryProvider'

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
      <QueryProvider>
      <body className={inter.className}>{children}</body>
      </QueryProvider>
    </html>
  )
}
