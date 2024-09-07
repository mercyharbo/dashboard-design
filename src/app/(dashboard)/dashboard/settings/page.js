'use client'

import React, { useState } from 'react'

import { BiCard, BiSmile, BiUserCheck } from 'react-icons/bi'

import { MdSecurity } from 'react-icons/md'

import SecurityComp from '@/components/SecurityComp'
import AccountComp from '@/components/AccountComp'
import KycComp from '@/components/KycComp'
import PaymentComp from '@/components/PaymentComp'

const settingsTabs = [
  {
    id: 1,
    title: 'Personal Information',
    content: 'Lorem ipsum dolor sit amet ',
    icon: <BiUserCheck />,
  },
  {
    id: 2,
    title: 'Security',
    content: 'Lorem ipsum dolor sit amet ',
    icon: <MdSecurity />,
  },
  {
    id: 3,
    title: 'KYC',
    content: 'Lorem ipsum dolor sit amet ',
    icon: <BiSmile />,
  },
  {
    id: 4,
    title: 'Payment Option',
    content: 'Lorem ipsum dolor sit amet ',
    icon: <BiCard />,
  },
]

export default function Settings() {
  const [activeTab, setActiveTab] = useState('Personal Information')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }))
  }

  return (
    <main className='flex flex-col justify-start items-start gap-5 w-full px-5 h-full laptop:px-10'>
      <aside className='flex gap-5 w-full py-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide '>
        {settingsTabs.map((tabs) => {
          return (
            <button
              type='button'
              key={tabs.id}
              onClick={() => setActiveTab(tabs.title)}
              className={`snap-start px-2 text-left py-2 mobile:text-sm tablet:text-base laptop:text-base ${
                activeTab === tabs.title
                  ? 'border-b-4 border-primary text-primary'
                  : 'hover:border-primary hover:border-b-4 '
              }`}
            >
              {tabs.title}
            </button>
          )
        })}
      </aside>

      {activeTab === 'Personal Information' && <AccountComp />}
      {activeTab === 'Security' && <SecurityComp />}
      {activeTab === 'KYC' && <KycComp />}
      {activeTab === 'Payment Option' && <PaymentComp />}
    </main>
  )
}
