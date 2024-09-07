'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiWallet } from 'react-icons/hi2'
import { MdSettings } from 'react-icons/md'
import { BsFillGridFill } from 'react-icons/bs'
import { BiMoney } from 'react-icons/bi'
import { FaExchangeAlt } from 'react-icons/fa'

const NavItems = [
  {
    id: 1,
    title: 'Dashboard',
    href: '/dashboard',
    icon: <BsFillGridFill size={20} />,
  },
  { id: 2, title: 'fund', href: '/fund', icon: <BiMoney size={20} /> },
  {
    id: 3,
    title: 'withdraw',
    href: '/withdraw',
    icon: <FaExchangeAlt size={20} />,
  },
  { id: 4, title: 'wallet', href: '/wallet', icon: <HiWallet size={20} /> },
  {
    id: 5,
    title: 'settings',
    href: '/settings',
    icon: <MdSettings size={20} />,
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className='laptop:w-[15%] h-screen laptop:flex flex-col justify-around items-start p-5 dark:shadow-sm dark:shadow-white rounded-r-3xl dark:bg-themeColor hidden fixed left-0 top-0  '>
      <Link
        href='/'
        className='laptop:flex laptop:text-4xl font-semibold tablet:hidden mobile:hidden '
      >
        Logo
      </Link>

      <div className='flex flex-col justify-start items-start gap-3 w-full'>
        {NavItems.map((link) => {
          return (
            <Link key={link.id} href={link.href} className='w-full'>
              <div
                className={`flex justify-start items-center gap-3 dark:text-white h-14 rounded-md px-5 hover:bg-primary hover:text-white capitalize desktop:text-base laptop:text-sm  ${
                  pathname === link.href ? 'bg-primary text-white' : ''
                }`}
              >
                {link.icon}
                <span className=''> {link.title}</span>
              </div>
            </Link>
          )
        })}
      </div>

      <div className=''></div>
    </nav>
  )
}
