import './globals.css'
import type { Metadata } from 'next'
import { Gulzar } from 'next/font/google'
import QueryProvider from './components/QueryProvider'
import NextAuthProvider from './components/NextAuthProvider'

const Reem = Gulzar({weight:"400",subsets:["arabic"]})

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
      <NextAuthProvider>
      <body className={Reem.className}>{children}</body>
      </NextAuthProvider>
      </QueryProvider>
    </html>
  )
}
