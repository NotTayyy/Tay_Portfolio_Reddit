import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reddit Home Page',
  description: 'The Reddit Home Page'
}

export default function RootLayout({
  children,
}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="bg-reddit-Dark text-white">
      <head>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
