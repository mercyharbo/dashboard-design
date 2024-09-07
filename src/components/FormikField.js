import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { HiEyeSlash } from 'react-icons/hi2'

export default function FormikField({
  name,
  placeholder,
  label,
  type,
  isPassword,
  inputStyle,
  max,
}) {
  return (
    <div
      className={`flex flex-col justify-start items-start gap-3 w-full ${
        isPassword ? 'relative' : ''
      } `}
    >
      {label && (
        <label htmlFor='email' className='font-medium capitalize text-xl'>
          {label}
        </label>
      )}
      <Field
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`dark:bg-[#161D26] dark:placeholder:text-secondary bg-lightgrey placeholder:text-black px-4 w-full rounded-3xl outline-none laptop:placeholder:text-sm laptop:h-[60px] tablet:h-[80px] 
         tablet:placeholder:text-lg mobile:placeholder:text-base mobile:h-[70px] ${inputStyle}`}
      />
      {isPassword && (
        <button type='button' className='absolute top-3 right-3 text-xl'>
          <HiEyeSlash />
        </button>
      )}
      <ErrorMessage
        component='span'
        name={name}
        className='text-[red] text-sm '
      />
    </div>
  )
}
