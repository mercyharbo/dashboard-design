'use client'

import React from 'react'
import { Nova_Square } from 'next/font/google'
import { Form, Formik } from 'formik'

import FormikField from '@/components/FormikField'
import Link from 'next/link'

const nova = Nova_Square({ subsets: ['latin'], weight: '400' })

export default function Register() {
  return (
    <main className='flex flex-col justify-center items-start h-screen w-full mobile:px-5 tablet:px-10 laptop:px-0'>
      <section className=' flex flex-col justify-center items-center gap-8 m-auto text-center w-full laptop:w-[40%] '>
        {' '}
        <Link href='#home' className={`text-3xl capitalize ${nova.className}`}>
          Logo here
        </Link>
        <div className='flex flex-col justify-start items-start gap-3 w-full'>
          <h1
            className={`${nova.className} laptop:text-3xl tablet:text-6xl mobile:text-4xl font-semibold `}
          >
            Create an account
          </h1>
          <p className='laptop:text-base tablet:text-xl mobile:text-base'>
            Setting up an account takes less than 1 minute.
          </p>
        </div>
        <Formik
          initialValues={{
            email: '',
            password: '',
            fullName: '',
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Form className='flex flex-col justify-start items-start gap-5 w-full'>
            <FormikField
              type='text'
              name='fullName'
              placeholder='Your fullname'
            />
            <FormikField
              type='email'
              name='email'
              placeholder='Email Address'
            />
            <FormikField
              type='password'
              name='password'
              placeholder='Password'
            />

            <button
              type='submit'
              className='h-14 w-full rounded-full text-white bg-primary '
            >
              Login
            </button>
          </Form>
        </Formik>
        <div className='flex flex-col justify-center items-center gap-3 w-full'>
          <p className=''>
            Have an account?{' '}
            <Link href='/login' className='text-primary text-base '>
              Login
            </Link>{' '}
          </p>
        </div>
      </section>
    </main>
  )
}
