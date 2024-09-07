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
        className={`placeholder:text-lightgrey placeholder:text-sm bg-[#FBF5F3] text-black w-full rounded-md outline-none h-14 border border-black indent-4 
       ${inputStyle}`}
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
