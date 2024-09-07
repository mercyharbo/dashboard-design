'use client'

import React from 'react'
import { Nova_Square } from 'next/font/google'
import { Field, Form, Formik } from 'formik'
import Link from 'next/link'

import FormikField from '@/components/FormikField'

const nova = Nova_Square({ subsets: ['latin'], weight: '400' })

export default function Login() {
  return (
    <main className='flex flex-col justify-center items-start h-screen w-full mobile:px-5 tablet:px-10 laptop:px-0'>
      <section className='flex flex-col justify-center items-center gap-8 m-auto text-center w-full laptop:w-[40%] '>
        {' '}
        <Link href='#home' className={`text-3xl capitalize ${nova.className}`}>
          Logo here
        </Link>
        <div className='flex flex-col justify-start items-start gap-3 w-full'>
          <h1
            className={`${nova.className} laptop:text-3xl tablet:text-6xl mobile:text-4xl font-semibold `}
          >
            Welcome back
          </h1>
          <p className='laptop:text-base tablet:text-xl mobile:text-base'>
            Please enter your email and password
          </p>
        </div>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Form className='flex flex-col justify-start items-start gap-5 w-full'>
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

            <div className='flex justify-between items-center w-full'>
              <div className='flex gap-2'>
                <Field type='checkbox' name='rememberMe' id='rememberMe' />
                <span className='text-sm '>Remember me</span>
              </div>

              <Link href='#' className='text-base capitalize text-primary'>
                forget password
              </Link>
            </div>
            <button
              type='submit'
              className='h-14 w-full rounded-full text-white bg-primary '
            >
              Login
            </button>
          </Form>
        </Formik>
        <div className='flex flex-col justify-center items-center gap-3 w-full'>
          <span className=''>
            Don&lsquo;t have an account?{' '}
            <Link href='/register' className='text-primary text-base '>
              Get Started!
            </Link>{' '}
          </span>
        </div>
      </section>
    </main>
  )
}
