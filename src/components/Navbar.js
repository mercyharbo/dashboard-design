'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { BsFillGridFill } from 'react-icons/bs'
import { BiBell, BiChevronDown, BiMoney } from 'react-icons/bi'
import { MdClose, MdSettings } from 'react-icons/md'
import { FaBars, FaExchangeAlt } from 'react-icons/fa'

import { ThemeSwitcher } from '@/app/theme-switcher'
import avatar from '@/assets/avatar.png'
import { HiWallet } from 'react-icons/hi2'
import { usePathname } from 'next/navigation'

// const data = [
//   {
//     id: 1,
//     title: 'Wallet',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
//     icon: <BiWalletAlt />,
//     href: '/wallet',
//   },
//   {
//     id: 2,
//     title: 'Mobile App',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
//     icon: <BiPhone />,
//     href: '#',
//   },
//   {
//     id: 3,
//     title: 'Trading API',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
//     icon: <BiChip />,
//     href: '#',
//   },
//   {
//     id: 4,
//     title: 'News',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
//     icon: <BsNewspaper />,
//     href: '#',
//   },
// ]

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

export default function Navbar() {
  const pathname = usePathname()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [settingModal, setSettingModal] = useState(false)
  const [notificationModal, setNotificationModal] = useState(false)
  const [openNavMenu, setOpenNavMenu] = useState(false)

  return (
    <nav className='flex justify-between items-center w-full h-[4rem] px-5 shadow-sm bg-white dark:bg-themeColor laptop:px-10  '>
      <button
        type='button'
        onClick={() => setOpenNavMenu(true)}
        className='flex laptop:hidden'
      >
        <FaBars />
      </button>

      {/* {isModalOpen && (
        <>
          <div
            onClick={() => setIsModalOpen(false)}
            className='fixed top-0 left-0 h-screen w-full bg-[#000000af] '
          ></div>
          <article
            className='absolute rounded-xl z-10 laptop:top-[4rem] laptop:left-2 laptop:w-[70%] laptop:p-10 tablet:w-[95%] tablet:top-3 tablet:left-4 tablet:p-10 
          mobile:p-5 mobile:w-[95%] mobile:left-3 mobile:top-2 bg-[#fff] dark:bg-themeColor text-black dark:text-white flex flex-col justify-start items-start gap-5 '
          >
            <div className='grid laptop:grid-cols-2 laptop:gap-10 tablet:grid-cols-2 tablet:gap-10 mobile:grid-cols-1 mobile:gap-10 content-center place-items-start'>
              {data.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className='flex justify-start items-start gap-3 w-full'
                  >
                    <span className='bg-primary p-4 rounded-md dark:text-black '>
                      {item.icon}
                    </span>
                    <div className='flex flex-col justify-start items-start gap-1 w-full'>
                      <h1 className='font-medium laptop:text-xl tablet:text-xl mobile:text-base'>
                        {item.title}
                      </h1>
                      <p className='text-secondary text-sm '>{item.content}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </article>
        </>
      )} */}

      {settingModal && (
        <>
          <div
            onClick={() => setSettingModal(false)}
            className='fixed top-0 left-0 h-screen w-full bg-[#000000af] dark:bg-[#ffffff76] '
          ></div>
          <article
            className='p-5 rounded-xl absolute flex flex-col justify-start items-center gap-5 z-10 shadow-2xl bg-white dark:bg-themeColor laptop:top-[5rem] 
          laptop:right-2 laptop:w-[20%] tablet:right-4 tablet:top-2 tablet:w-[95%] mobile:top-2 mobile:right-3 mobile:w-[95%] '
          >
            <div className='flex justify-between items-center w-full'>
              <p className=''>Settings</p>
              <button
                type='button'
                onClick={() => setSettingModal(false)}
                className='text-2xl '
              >
                <MdClose />
              </button>
            </div>

            <hr className='w-full border-b border-[#a9a7a770]' />

            <div className='flex flex-col justify-start items-start gap-5 w-full'>
              <div className='flex justify-between items-center w-full'>
                <p className=''>Theme</p>
                <ThemeSwitcher />
              </div>

              <Link
                href='/settings'
                className='flex justify-start items-start w-full'
              >
                Settings
              </Link>

              <button
                type='button'
                className='flex justify-start items-start w-full'
              >
                Logout
              </button>
            </div>
          </article>
        </>
      )}

      {notificationModal && (
        <>
          <div
            onClick={() => setNotificationModal(false)}
            className='fixed top-0 left-0 h-screen w-full bg-[#000000af] '
          ></div>
          <div className='flex flex-col justify-start items-start gap-3 p-5 rounded-2xl shadow-md absolute laptop:top-[4rem] tablet:top-3 mobile:top-3 right-5 bg-white dark:bg-themeColor laptop:w-[30rem] tablet:w-[50%] mobile:w-[90%] mobile:mx-auto  '>
            <div className='flex justify-between item-center w-full'>
              <h3 className='text-underline font-semibold '>Notifications</h3>
              <button
                type='button'
                onClick={() => setNotificationModal(false)}
                className='text-2xl'
              >
                <MdClose />
              </button>
            </div>

            <div className='flex flex-col justify-start items-start gap-8 w-full py-10'>
              <div className='flex justify-between items-start gap-10 w-full'>
                <div className='flex justify-start items-start gap-3'>
                  <BiBell className='mt-1' />
                  <div className='grid grid-cols-1 gap-1 break-words  '>
                    <h3 className=' text-sm font-semibold'>
                      New device has been authorized
                    </h3>
                    <p className=' text-sm opacity-50 '>
                      You have successfully authorized a new device
                    </p>
                  </div>
                </div>

                <span className='opacity-50 text-sm ml-auto'>12/12/2023</span>
              </div>

              <div className='flex justify-between items-start gap-10 w-full'>
                <div className='flex justify-start items-start gap-3'>
                  <BiBell className='mt-1' />
                  <div className='grid grid-cols-1 gap-1 break-words  '>
                    <h3 className=' text-sm font-semibold'>
                      New device has been authorized
                    </h3>
                    <p className=' text-sm opacity-50 '>
                      You have successfully authorized a new device
                    </p>
                  </div>
                </div>

                <span className='opacity-50 text-sm ml-auto'>12/12/2023</span>
              </div>
            </div>

            <Link
              href='/dashboard/notification'
              className='underline flex justify-end items-end w-full '
            >
              View all
            </Link>
          </div>
        </>
      )}

      <div className='flex justify-end items-center gap-5 ml-auto'>
        <button
          type='button'
          onClick={() => setNotificationModal(true)}
          className='laptop:text-3xl tablet:text-2xl mobile:text-2xl'
        >
          <BiBell />
        </button>
        <button
          type='button'
          onClick={() => setSettingModal(true)}
          className='flex justify-center items-center gap-2 text-3xl'
        >
          <Image
            src={avatar}
            alt='image'
            width={500}
            height={500}
            className='object-cover object-top rounded-full h-[40px] w-[40px] text-sm '
          />
          <BiChevronDown />
        </button>
      </div>

      {openNavMenu && (
        <div className='fixed top-0 left-0 bg-[#00000076] w-full h-screen flex flex-col'>
          <nav className='flex flex-col justify-start items-start gap-5 bg-white dark:bg-themeColor mobile:w-[80%] tablet:w-[50%] h-screen p-5'>
            <div className='flex justify-between items-center w-full'>
              <Link href='/' className='text-2xl font-semibold '>
                Logo
              </Link>

              <button
                type='button'
                onClick={() => setOpenNavMenu(false)}
                className='text-2xl'
              >
                <MdClose />
              </button>
            </div>

            <div className='flex flex-col justify-start items-start gap-3 w-full pt-[2rem]'>
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
          </nav>
        </div>
      )}
    </nav>
  )
}
