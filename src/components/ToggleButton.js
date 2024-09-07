'use client'

import React, { useState } from 'react'

export default function ToggleButton({ initialState }) {
  const [isEnabled, setIsEnabled] = useState(initialState)

  const handleClick = () => {
    setIsEnabled(!isEnabled)
    // onToggle(!isEnabled)
  }

  return (
    <button
      type='button'
      className={`h-[4rem] px-5 rounded-lg capitalize ${
        isEnabled ? 'bg-primary text-black' : 'bg-orange text-black'
      }`}
      onClick={handleClick}
    >
      {isEnabled ? 'enabled' : 'disabled'}
    </button>
  )
}
