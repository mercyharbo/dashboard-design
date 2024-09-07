import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: '400' })

export default function Layout({ children }) {
  return (
    <main className={`h-screen overflow-hidden ${inter.className} `}>
      {children}
    </main>
  )
}
