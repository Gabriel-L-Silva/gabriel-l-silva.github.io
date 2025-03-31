import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gabriel Lucas da Silva - Python Backend Software Engineer',
  description: 'Personal portfolio of Gabriel Lucas da Silva, a Brazilian-based Python Software Engineer with expertise in Computer Vision, Machine Learning, and AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background-dark">
      <body className={`${inter.className} min-h-screen overflow-x-hidden`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 