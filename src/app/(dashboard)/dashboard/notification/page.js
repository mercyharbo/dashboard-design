import React from 'react'
import { BiBell } from 'react-icons/bi'

export default function Notification() {
  return (
    <main
      className=' flex flex-col justify-start items-start gap-10 w-full laptop:px-10 laptop:py-10 tablet:px-10 tablet:pb-[10rem] mobile:px-5 mobile:pt-10 
    mobile:pb-[10rem]'
    >
      <div className='flex flex-col justify-start items-start gap-8 desktop:w-[70%] laptop:w-[85%] tablet:w-full mobile:w-full '>
        <div className='flex justify-between items-start gap-10 w-full'>
          <div className='flex justify-start items-start gap-3'>
            <BiBell className='mt-1 text-xl' />
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
            <BiBell className='mt-1 text-xl' />
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
            <BiBell className='mt-1 text-xl' />
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
            <BiBell className='mt-1 text-xl' />
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
    </main>
  )
}
