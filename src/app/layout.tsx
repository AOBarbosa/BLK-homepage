import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'BLK',
  description:
    'A BLK é a escolha certa para quem procura serviços de fabricação de alta qualidade.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lato.variable} bg-gray-100 font-sans text-gray-950`}>
        {children}
      </body>
    </html>
  )
}
