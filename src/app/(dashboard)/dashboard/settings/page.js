'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import {
  BiCard,
  BiChip,
  BiDotsHorizontal,
  BiEnvelope,
  BiLogoMastercard,
  BiPhone,
  BiSmile,
  BiUserCheck,
} from 'react-icons/bi'
import { useDropzone } from 'react-dropzone'
import { MdPassword, MdSecurity } from 'react-icons/md'
import { Form, Formik } from 'formik'
import { TbCircleKeyFilled } from 'react-icons/tb'
import { AiOutlineCloudUpload } from 'react-icons/ai'

import FormikField from '@/components/FormikField'
import ToggleButton from '@/components/ToggleButton'

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
  const [creationDate, setCreationDate] = useState(null)
  const [files1, setFiles1] = useState([])
  const [files2, setFiles2] = useState([])
  const [files3, setFiles3] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [cardDetails, setCardDetails] = useState(null)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }))
  }

  const handleFormSubmit = (values) => {
    setCardDetails(values)
    closeModal()
  }

  /**
   * The function `onDrop` takes in an array of accepted files and a function `setFiles`, and if there
   * is only one file in the array, it sets the files with a preview URL.
   * @param acceptedFiles - The acceptedFiles parameter is an array of files that have been dropped or
   * selected by the user for upload.
   * @param setFiles - The `setFiles` parameter is a function that is used to update the state of the
   * files. It is typically a state setter function provided by a state management library like React's
   * `useState` hook.
   */
  const onDrop = (acceptedFiles, setFiles) => {
    if (acceptedFiles.length > 1) {
      // Show an error message
      console.error('You can only upload one file')
    } else {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    }
  }

  const {
    getRootProps: getRootProps1,
    getInputProps: getInputProps1,
    isDragActive: isDragActive1,
  } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => onDrop(acceptedFiles, setFiles1),
  })

  const {
    getRootProps: getRootProps2,
    getInputProps: getInputProps2,
    isDragActive: isDragActive2,
  } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => onDrop(acceptedFiles, setFiles2),
  })

  const {
    getRootProps: getRootProps3,
    getInputProps: getInputProps3,
    isDragActive: isDragActive3,
  } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => onDrop(acceptedFiles, setFiles3),
  })

  const images1 = files1.map((file) => (
    <div key={file.name}>
      <Image
        src={file.preview}
        alt='preview'
        width={400}
        height={400}
        className='object-cover w-full h-full'
      />
    </div>
  ))

  const images2 = files2.map((file) => (
    <div key={file.name}>
      <Image
        src={file.preview}
        alt='preview'
        width={400}
        height={400}
        className='object-cover w-full h-full'
      />
    </div>
  ))

  const images3 = files3.map((file) => (
    <div key={file.name}>
      <Image
        src={file.preview}
        alt='preview'
        width={400}
        height={400}
        className='object-cover w-full h-full'
      />
    </div>
  ))

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
    <main
      className='flex flex-col justify-start items-start gap-10 w-full laptop:px-10  tablet:px-10 tablet:pb-[8rem] tablet:justify-start tablet:items-start 
      tablet:gap-5 mobile:flex-col mobile:justify-start mobile:items-start mobile:gap-5 mobile:px-5 mobile:pb-[8rem]'
    >
      <aside className='h-auto flex flex-row laptop:justify-start laptop:gap-10 tablet:justify-start tablet:gap-5 mobile:gap-2 mobile:justify-between items-center flex-wrap w-full '>
        {settingsTabs.map((tabs) => {
          return (
            <button
              type='button'
              key={tabs.id}
              onClick={() => setActiveTab(tabs.title)}
              className={`${
                activeTab === tabs.title
                  ? 'bg-primary text-black '
                  : 'text-white bg-themeColor dark:bg-[#00000063]'
              } flex rounded-2xl h-[4rem] px-5 laptop:flex-row laptop:justify-center laptop:items-center laptop:gap-3 tablet:justify-center tablet:items-center tablet:flex-row 
              tablet:gap-2 tablet:px-3
              mobile:flex-col mobile:gap-2 mobile:justify-center mobile:items-center mobile:px-3 
              `}
            >
              <span className='mobile:p-2 tablet:p-0 laptop:p-0 rounded-md text-3xl'>
                {tabs.icon}
              </span>

              <div className='laptop:flex laptop:flex-col laptop:justify-start laptop:items-start laptop:gap-1 tablet:flex mobile:hidden '>
                <h1>{tabs.title}</h1>
                {/* <p className='text-sm text-secondary '>{tabs.content}</p> */}
              </div>
            </button>
          )
        })}
      </aside>

      {activeTab === 'Personal Information' && (
        <section className='flex flex-col justify-start items-start gap-5 w-full laptop:px-0 laptop:py-10 tablet:px-5 tablet:py-5 mobile:py-5 mobile:px-3 '>
          <h1 className='laptop:text-base tablet:text-xl mobile:text-base font-medium'>
            My Profile
          </h1>

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
                <FormikField
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                />
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
                <FormikField
                  type='text'
                  name='currency'
                  placeholder='Currency'
                />
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
                  <p className='laptop:text-sm tablet:text-lg mobile:text-base text-secondary'>
                    {creationDate}{' '}
                  </p>
                </div>
                <button
                  type='submit'
                  className='capitalize bg-primary h-[4rem] px-5 rounded-2xl text-black laptop:text-base laptop:w-auto tablet:w-full tablet:text-xl mobile:w-full mobile:text-base '
                >
                  save changes
                </button>
              </div>
            </Form>
          </Formik>
        </section>
      )}

      {activeTab === 'Security' && (
        <section className='flex flex-col justify-start items-start gap-5 w-full laptop:px-0 laptop:py-10 tablet:px-5 tablet:py-5 mobile:py-5 mobile:px-3'>
          <h1 className='laptop:text-base tablet:text-xl mobile:text-base font-medium'>
            Security
          </h1>

          <div className='flex flex-col justify-start items-start gap-10 w-full py-10 '>
            <div className='flex w-full laptop:justify-between laptop:items-center laptop:flex-row tablet:flex-col tablet:gap-5 mobile:flex-col mobile:gap-5'>
              <div className='flex justify-start items-start gap-2'>
                <TbCircleKeyFilled className='text-2xl' />
                <div className='flex flex-col justify-start items-start gap-1'>
                  <h1 className='laptop:text-base tablet:text-xl mobile:text-base'>
                    Login 2-Step Verification
                  </h1>
                  <p className='laptop:text-sm tablet:text-lg mobile:text-base text-secondary'>
                    The Login 2step Verification adds an extra layer of security
                    to your account.
                  </p>
                </div>
              </div>
              <ToggleButton initialState={true} onToggle={handleToggle1} />
            </div>

            <div className='flex w-full laptop:justify-between laptop:items-center laptop:flex-row tablet:flex-col tablet:gap-5 mobile:flex-col mobile:gap-5'>
              <div className='flex justify-start items-start gap-2'>
                <BiEnvelope className='text-2xl' />
                <div className='flex flex-col justify-start items-start gap-1'>
                  <h1 className='laptop:text-base tablet:text-xl mobile:text-base'>
                    Email Setup
                  </h1>
                  <p className='laptop:text-sm tablet:text-lg mobile:text-base text-secondary'>
                    Please enter your email correctly
                  </p>
                </div>
              </div>
              <ToggleButton initialState={true} onToggle={handleToggle2} />
            </div>

            <div className='flex w-full laptop:justify-between laptop:items-center laptop:flex-row tablet:flex-col tablet:gap-5 mobile:flex-col mobile:gap-5'>
              <div className='flex justify-start items-start gap-2'>
                <BiPhone className='text-2xl' />
                <div className='flex flex-col justify-start items-start gap-1'>
                  <h1 className='laptop:text-base tablet:text-xl mobile:text-base'>
                    SMS Setup
                  </h1>
                  <p className='laptop:text-sm tablet:text-lg mobile:text-base text-secondary'>
                    Please enter your phone number correctly
                  </p>
                </div>
              </div>
              <ToggleButton initialState={false} onToggle={handleToggle3} />
            </div>

            <div className='flex w-full laptop:justify-between laptop:items-center laptop:flex-row tablet:flex-col tablet:gap-5 mobile:flex-col mobile:gap-5'>
              <div className='flex justify-start items-start gap-2'>
                <MdPassword className='text-2xl' />
                <div className='flex flex-col justify-start items-start gap-1'>
                  <h1 className='laptop:text-base tablet:text-xl mobile:text-base'>
                    Password
                  </h1>
                  <p className='laptop:text-sm tablet:text-lg mobile:text-base text-secondary'>
                    When resetting your password, you will be logged out
                    automatically
                  </p>
                </div>
              </div>
              <ToggleButton initialState={false} onToggle={handleToggle4} />
            </div>
          </div>
        </section>
      )}

      {activeTab === 'KYC' && (
        <section className='flex flex-col justify-start items-start gap-5 w-full laptop:px-0 laptop:py-10 tablet:px-5 tablet:py-5 mobile:py-5 mobile:px-3'>
          <Formik
            initialValues={{
              IdNumber: '',
              fullName: '',
              username: '',
              displayName: '',
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
                  type='number'
                  name='IdNumber'
                  placeholder='ID Number'
                />
                <FormikField
                  type='text'
                  name='fullName'
                  placeholder='Full name on card'
                />
              </div>

              <div
                className='flex w-full laptop:flex-row laptop:justify-center laptop:items-center laptop:gap-5 tablet:flex-col tablet:justify-center tablet:items-center tablet:gap-5
              mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-5 '
              >
                <FormikField
                  type='text'
                  name='username'
                  placeholder='User Name'
                />
                <FormikField
                  type='text'
                  name='displayName'
                  placeholder='Display Name'
                />
              </div>

              <div className='flex flex-col justify-start items-start gap-5 w-full '>
                <h1 className=''>Upload ID Card</h1>
                <div
                  className='grid w-full laptop:grid-cols-3 laptop:content-between laptop:place-items-center laptop:gap-5 tablet:grid-cols-1 tablet:content-center
                tablet:place-items-center tablet:gap-5 mobile:grid-cols-1 mobile:content-center mobile:place-items-center mobile:gap-5 '
                >
                  <div
                    {...getRootProps1()}
                    className='bg-white dark:bg-lightgrey shadow-lg rounded-lg cursor-pointer dark:hover:bg-white dark:hover:text-black dark:text-white hover:bg-lightgrey laptop:py-10 laptop:px-10'
                  >
                    <input {...getInputProps1()} />
                    {isDragActive1 ? (
                      <p>Drop the files here ...</p>
                    ) : files1.length > 0 ? (
                      images1
                    ) : (
                      <div className='flex flex-col justify-center items-center gap-3 text-center p-5'>
                        <AiOutlineCloudUpload className='text-3xl' />

                        <h1 className='font-medium'>
                          Drag &apos;n&apos; drop some files here, or click to
                          select files
                        </h1>
                        <p className='text-secondary'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, ID Card front side
                        </p>
                      </div>
                    )}
                  </div>

                  <div
                    {...getRootProps2()}
                    className='bg-white dark:bg-lightgrey shadow-lg rounded-lg cursor-pointer dark:hover:bg-white dark:hover:text-black dark:text-white hover:bg-lightgrey laptop:py-10 laptop:px-10'
                  >
                    <input {...getInputProps2()} />
                    {isDragActive2 ? (
                      <p>Drop the files here ...</p>
                    ) : files2.length > 0 ? (
                      images2
                    ) : (
                      <div className='flex flex-col justify-center items-center gap-3 text-center p-5'>
                        <AiOutlineCloudUpload className='text-3xl' />

                        <h1 className='font-medium'>
                          Drag &apos;n&apos; drop some files here, or click to
                          select files
                        </h1>
                        <p className='text-secondary'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, ID Card back side
                        </p>
                      </div>
                    )}
                  </div>

                  <div
                    {...getRootProps3()}
                    className='bg-white dark:bg-lightgrey shadow-lg rounded-lg cursor-pointer dark:hover:bg-white dark:hover:text-black dark:text-white hover:bg-lightgrey laptop:py-10 laptop:px-10'
                  >
                    <input {...getInputProps3()} />
                    {isDragActive3 ? (
                      <p>Drop the files here ...</p>
                    ) : files3.length > 0 ? (
                      images3
                    ) : (
                      <div className='flex flex-col justify-center items-center gap-3 text-center p-5'>
                        <AiOutlineCloudUpload className='text-3xl' />

                        <h1 className='font-medium'>
                          Drag &apos;n&apos; drop some files here, or click to
                          select files
                        </h1>
                        <p className='text-secondary'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, selfie with ID Card
                        </p>
                      </div>
                    )}
                  </div>
                </div>
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
                  <p className='laptop:text-sm tablet:text-lg mobile:text-base text-secondary'>
                    {creationDate}{' '}
                  </p>
                </div>
                <button
                  type='submit'
                  className='capitalize bg-primary h-[4rem] px-5 rounded-2xl text-black laptop:text-base laptop:w-auto tablet:w-full tablet:text-xl mobile:w-full mobile:text-base '
                >
                  save changes
                </button>
              </div>
            </Form>
          </Formik>
        </section>
      )}

      {activeTab === 'Payment Option' && (
        <section className='flex flex-col justify-start items-start gap-5 w-full laptop:px-0 laptop:py-10 tablet:px-5 tablet:py-5 mobile:py-5 mobile:px-3 '>
          <div className='flex justify-between items-center w-full'>
            <h1 className='laptop:text-base tablet:text-xl mobile:text-base font-medium'>
              Payment Option
            </h1>

            <button
              type='button'
              className='bg-[#00000075]  text-white p-4 rounded-md capitalize '
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
              className='bg-primary py-3 px-5 text-black rounded-md'
            >
              Add bank
            </button>
          </div>

          {isModalOpen && (
            <div
              className='laptop:fixed laptop:inset-0 tablet:fixed tablet:inset-0 mobile:absolute mobile:top-0 mobile:left-0 flex items-center justify-center 
              bg-[#000000b8] z-10 '
            >
              <div
                className='bg-[#fff] p-5 rounded-2xl z-20 flex flex-col justify-start items-start gap-5 laptop:w-[50%] laptop:py-10 tablet:w-[80%] 
              tablet:py-10 mobile:w-full mobile:py-10 '
              >
                <div className='flex flex-col justify-start items-start gap-3 laptop:w-full tablet:w-full mobile:w-full '>
                  <h2 className='text-lg font-semibold text-black '>
                    Add Card Details:
                  </h2>
                  <p className='text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Vitae sapien pellentesque habitant morbi tristique
                    senectus et.
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
                        className='bg-primary text-black px-5 py-3 rounded-xl'
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
      )}
    </main>
  )
}
