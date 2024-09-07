import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'

import { AiOutlineCloudUpload } from 'react-icons/ai'

import FormikField from './FormikField'

export default function KycComp() {
  const [creationDate, setCreationDate] = useState(null)
  const [files1, setFiles1] = useState([])
  const [files2, setFiles2] = useState([])
  const [files3, setFiles3] = useState([])

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

  return (
    <section className='flex flex-col justify-start items-start gap-5 w-full py-10 '>
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
            <FormikField type='text' name='username' placeholder='User Name' />
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      ID Card front side
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      ID Card back side
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      selfie with ID Card
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
