import { Poppins } from 'next/font/google'

import './style.css'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export default function Layout({ children }) {
  return (
    <main
      className={`h-screen w-full flex justify-start items-start laptop:flex-row ${poppins.className} `}
    >
      <Sidebar />
      <section className='flex flex-col justify-start items-start gap-5 ml-auto min-h-full w-full bg-[#d8dada22] dark:bg-themeColor laptop:w-[85%]  '>
        <Navbar />
        {children}
      </section>
    </main>
  )
}
