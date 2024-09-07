'use client'

import React, { useLayoutEffect } from 'react'
import { Nova_Square } from 'next/font/google'
import { gsap } from 'gsap'
import { FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'

const nova = Nova_Square({ subsets: ['latin'], weight: '400' })

export default function HeroSection() {
  useLayoutEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      '.heading',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.in',
        x: 0,
      }
    )
    tl.fromTo(
      '.paragraph',
      { opacity: 0, x: -100 },
      { opacity: 1, duration: 0.5, ease: 'power2.in', x: 0, delay: 0.5 }
    )
    tl.fromTo(
      '.button ',
      { opacity: 0, x: -100 },
      { opacity: 1, duration: 0.5, ease: 'power2.in', x: 0, delay: 0.5 }
    )
    tl.fromTo(
      '.heroImage ',
      { opacity: 0, x: 100 },
      { opacity: 1, duration: 0.5, ease: 'power2.in', x: 0, delay: 0.5 }
    )
  }, [])

  return (
    <main
      id='particles-js'
      className='hero-container overflow-x-hidden desktop:px-20 laptop:flex-row laptop:px-20 laptop:py-10 tablet:px-10 tablet:py-16 mobile:px-5 mobile:py-10 mobile:gap-10 mobile:flex-col gap-5 w-full flex justify-center items-center '
    >
      <div className='hero flex flex-col justify-start items-start gap-5 laptop:w-[50%] tablet:w-full tablet:gap-10 mobile:w-full mobile:gap-10'>
        <h1
          className={`heading desktop:text-6xl desktop:w-[80%] laptop:w-[80%] laptop:text-4xl laptop:leading-[4rem] tablet:text-5xl tablet:w-[70%] mobile:w-full 
          mobile:text-4xl font-bold text-textColor ${nova.className}`}
        >
          Bitlocus will accelerate your business
        </h1>
        <p className='paragraph text-secondary desktop:w-[70%] laptop:w-[70%] tablet:w-[70%] mobile:w-full '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique
          senectus et netus et malesuada fames ac.
        </p>

        <div className='flex justify-start items-start gap-5'>
          <button
            type='button'
            className='button text-white rounded-full py-3 px-10 capitalize flex justify-center items-center gap-2 transition-all duration-300 ease-in-out bg-buttonColor hover:text-white'
          >
            buy
          </button>

          <button
            type='button'
            className='button text-white border rounded-full py-3 px-10 capitalize flex justify-center items-center gap-2 transition-all duration-300 ease-in-out hover:border-buttonColor hover:text-buttonColor'
          >
            sell
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className='heroImage laptop:w-[50%] tablet:w-full mobile:w-full '>
        <Image
          src='/coin11.png'
          alt='hero image'
          width={1000}
          height={1000}
          quality={100}
          className='h-full w-full object-cover'
        />
      </div>
    </main>
  )
}
