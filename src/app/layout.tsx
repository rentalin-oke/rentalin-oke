import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './navbar'
import ClientProvider from './Client'
import { AuthProvider } from './api/auth/Context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rentalin',
  description: 'Solution for Rent a Bike',
  icons: {
    icon: '/images/rentalin_logo_baru.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar></Navbar>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
