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
      className={`capitalize ${isEnabled ? 'text-danger' : 'text-primary'}`}
      onClick={handleClick}
    >
      {!isEnabled ? 'enable' : 'disable'}
    </button>
  )
}
