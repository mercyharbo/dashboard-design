import React from 'react'

import { TbCircleKeyFilled } from 'react-icons/tb'
import { BiEnvelope, BiPhone } from 'react-icons/bi'
import { MdPassword } from 'react-icons/md'

import ToggleButton from './ToggleButton'

export default function SecurityComp() {
  const handleToggle1 = (isEnabled) => {
    console.log(`Button 1 is now ${isEnabled ? 'enabled' : 'disabled'}`)
  }

  const handleToggle2 = (isEnabled) => {
    console.log(`Button 2 is now ${isEnabled ? 'enabled' : 'disabled'}`)
  }

  const handleToggle3 = (isEnabled) => {
    console.log(`Button 3 is now ${isEnabled ? 'enabled' : 'disabled'}`)
  }

  const handleToggle4 = (isEnabled) => {
    console.log(`Button 3 is now ${isEnabled ? 'enabled' : 'disabled'}`)
  }

  return (
    <section className='flex flex-col justify-start items-start gap-10 w-full '>
      <div className='flex flex-col justify-start items-start gap-2 w-full py-3 border-b border-lightgrey'>
        <div className='flex justify-between items-center w-full'>
          <div className='flex gap-2'>
            <TbCircleKeyFilled className='text-2xl' />
            <h1 className='laptop:text-base tablet:text-xl mobile:text-base'>
              Login 2-Step Verification
            </h1>
          </div>

          <ToggleButton initialState={true} onToggle={handleToggle1} />
        </div>

        <p className='text-sm laptop:text-base text-secondary'>
          The Login 2step Verification adds an extra layer of security to your
          account.
        </p>
      </div>

      <div className='flex flex-col justify-start items-start gap-2 w-full py-3 border-b border-lightgrey'>
        <div className='flex justify-between items-center w-full'>
          <div className='flex gap-2'>
            <BiEnvelope className='text-2xl' />
            <h1 className='laptop:text-base tablet:text-xl mobile:text-base'>
              Email Setup
            </h1>
          </div>

          <ToggleButton initialState={true} onToggle={handleToggle2} />
        </div>

        <p className='text-sm laptop:text-base text-secondary'>
          Please enter your email correctly
        </p>
      </div>

      <div className='flex flex-col justify-start items-start gap-2 w-full py-3 border-b border-lightgrey'>
        <div className='flex justify-between items-center w-full'>
          <div className='flex gap-2'>
            <BiPhone className='text-2xl' />
            <h1 className='laptop:text-base tablet:text-xl mobile:text-base'>
              SMS Setup
            </h1>
          </div>

          <ToggleButton initialState={true} onToggle={handleToggle3} />
        </div>

        <p className='text-sm laptop:text-base text-secondary'>
          Please enter your phone number correctly
        </p>
      </div>

      <div className='flex flex-col justify-start items-start gap-2 w-full'>
        <div className='flex justify-between items-center w-full'>
          <div className='flex gap-2'>
            <MdPassword className='text-2xl' />
            <h1 className='laptop:text-base tablet:text-xl mobile:text-base'>
              Password
            </h1>
          </div>

          <ToggleButton initialState={true} onToggle={handleToggle4} />
        </div>

        <p className='text-sm laptop:text-base text-secondary'>
          When resetting your password, you will be logged out automatically
        </p>
      </div>
    </section>
  )
}
