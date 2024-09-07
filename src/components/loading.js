// LoadingSpinner.js
import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='flex items-center justify-center fixed w-full top-0 left-0 h-screen'>
      <div className='animate-spin rounded-full border-t-4 border-primary border-solid h-20 w-20'></div>
    </div>
  )
}

export default LoadingSpinner
