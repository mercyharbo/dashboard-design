import React, { useState } from 'react'
import { Form, Formik } from 'formik'

import { BiChip, BiDotsHorizontal, BiLogoMastercard } from 'react-icons/bi'

import FormikField from '@/components/FormikField'

export default function PaymentComp() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [cardDetails, setCardDetails] = useState(null)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleFormSubmit = (values) => {
    setCardDetails(values)
    closeModal()
  }

  return (
    <section className='flex flex-col justify-start items-start gap-5 w-full py-10 '>
      <div className='flex justify-between items-center w-full'>
        <h1 className='laptop:text-base tablet:text-xl mobile:text-base font-medium'>
          Payment Option
        </h1>

        <button
          type='button'
          className='bg-[#00000075] text-white p-4 rounded-md capitalize '
        >
          <BiDotsHorizontal />
        </button>
      </div>
      <hr className='w-full opacity-10 ' />
      <div className='flex justify-between items-center w-full'>
        <h1 className='laptop:text-base tablet:text-xl mobile:text-base font-medium'>
          Card Details
        </h1>

        <button
          onClick={openModal}
          className='bg-primary py-3 px-5 text-white rounded-md'
        >
          Add bank
        </button>
      </div>

      {isModalOpen && (
        <div className='fixed top-0 left-0 bg-[#0000005d] h-screen w-full flex justify-center items-center '>
          <div className='bg-white dark:bg-[#F0FFF1] p-4 rounded-md w-[90%] mx-auto flex flex-col justify-start items-start gap-5 laptop:w-[40%] '>
            <div className='flex flex-col justify-start items-start gap-3 laptop:w-full tablet:w-full mobile:w-full '>
              <h2 className='text-lg text-black font-semibold '>
                Add Card Details:
              </h2>
              <p className='text-black text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae sapien pellentesque habitant morbi tristique senectus et.
              </p>
            </div>

            <Formik
              initialValues={{
                cardNumber: '',
                cardName: '',
                expMonth: '',
                expYear: '',
                cvv: '',
              }}
              onSubmit={handleFormSubmit}
            >
              <Form className='flex flex-col justify-start items-start gap-5 w-full'>
                <div className='flex justify-center items-center gap-5 w-full laptop:flex-row tablet:flex-col mobile:flex-col '>
                  <FormikField
                    type='number'
                    name='cardNumber'
                    placeholder='Card Number'
                  />
                  <FormikField
                    type='text'
                    name='cardName'
                    placeholder='Card Name'
                  />
                </div>

                <div className='flex justify-center items-center gap-5 w-full laptop:flex-row tablet:flex-col mobile:flex-col '>
                  <FormikField
                    type='number'
                    name='expMonth'
                    placeholder='Expire Month'
                  />
                  <FormikField
                    type='number'
                    name='expYear'
                    placeholder='Expire Year'
                  />
                </div>

                <FormikField type='number' name='cvv' placeholder='CVV' />

                <div className='flex justify-end items-center gap-5 w-full'>
                  <button
                    type='button'
                    onClick={closeModal}
                    className='border border-secondary py-3 px-5 rounded-xl text-black flex justify-center items-center'
                  >
                    Cancel
                  </button>

                  <button
                    type='submit'
                    className='bg-primary text-white px-5 py-3 rounded-xl'
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      )}

      {cardDetails && (
        <div
          className='bg-gradient-to-t from-orange to-primary p-5 rounded-xl shadow-2xl flex flex-col justify-between items-center laptop:w-[30%] laptop:h-[15rem] 
              tablet:w-full tablet:h-[15rem] mobile:h-[13rem] mobile:w-full '
        >
          <div className='flex justify-between items-center w-full'>
            <BiLogoMastercard className='text-3xl' />
            <BiChip className='text-3xl' />
          </div>

          <p className='w-full laptop:text-xl laptop:leading-10 tablet:text-base mobile:text-base'>
            {cardDetails?.cardNumber
              ? String(Number(cardDetails.cardNumber).toFixed(0))
                  .match(/.{1,4}/g)
                  .join(' ')
              : 'Not Filled'}
          </p>

          <div className='flex justify-between items-center w-full'>
            <div className='flex flex-col justify-start items-start gap-1'>
              <h1 className='dark:text-secondary text-[grey] uppercase text-sm '>
                card holder
              </h1>
              <span className='uppercase'>
                {cardDetails.cardName || 'Not Filled'}
              </span>
            </div>
            <div className='flex flex-col justify-start items-start gap-1'>
              <h1 className='dark:text-secondary text-[grey] uppercase text-sm '>
                valid
              </h1>
              <span className='uppercase'>
                {cardDetails.expMonth || 'Not Filled'}/
                {cardDetails.expYear || 'Not Filled'}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
