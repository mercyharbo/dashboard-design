'use client'

import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'

import FormikField from './FormikField'

export default function AccountComp() {
  const [creationDate, setCreationDate] = useState(null)

  useEffect(() => {
    // Function to get and format the current date
    const getCurrentDate = () => {
      const currentDate = new Date()
      const formattedDate = currentDate.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      setCreationDate(formattedDate)
    }

    getCurrentDate() // Call the function when the component mounts
  }, [])

  return (
    <section className='flex flex-col justify-start items-start gap-5 w-full py-10  '>
      <div className='flex flex-col gap-1'>
        <h1 className='text-base'>Account update:</h1>
        <p className='text-[grey] text-sm'>
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
        </p>
      </div>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phoneNumber: '',
          address: '',
          currency: '',
          email: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        <Form className='w-full flex flex-col justify-start items-start gap-10'>
          <div
            className='flex w-full laptop:flex-row laptop:justify-center laptop:items-center laptop:gap-5 tablet:flex-col tablet:justify-center tablet:items-center tablet:gap-5
              mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-5 '
          >
            <FormikField
              type='text'
              name='firstName'
              placeholder='First Name'
            />
            <FormikField type='text' name='lastName' placeholder='Last Name' />
          </div>
          <div
            className='flex w-full laptop:flex-row laptop:justify-center laptop:items-center laptop:gap-5 tablet:flex-col tablet:justify-center tablet:items-center tablet:gap-5
              mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-5 '
          >
            <FormikField type='text' name='email' placeholder='email' />
            <FormikField
              type='number'
              name='phoneNumber'
              placeholder='Phone Number'
            />
          </div>
          <div
            className='flex w-full laptop:flex-row laptop:justify-center laptop:items-center laptop:gap-5 tablet:flex-col tablet:justify-center tablet:items-center tablet:gap-5
              mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-5 '
          >
            <FormikField type='text' name='address' placeholder='Address' />
            <FormikField type='text' name='currency' placeholder='Currency' />
          </div>
          <hr className='w-full opacity-10' />
          <div
            className='flex w-full laptop:flex-row laptop:justify-between laptop:items-center tablet:flex-col tablet:justify-start tablet:items-start tablet:gap-5 
              mobile:flex-col mobile:justify-start mobile:items-start mobile:gap-5 '
          >
            <div className='flex flex-col justify-start items-start gap-2'>
              <h1 className='laptop:text-base tablet:text-xl mobile:text-base'>
                Account created at:
              </h1>
              <p className='text-sm text-secondary'>{creationDate} </p>
            </div>
            <button
              type='submit'
              className='capitalize bg-primary h-[4rem] px-5 rounded-2xl text-white w-full flex justify-center items-center ml-auto laptop:w-auto  '
            >
              save changes
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  )
}
