'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BsMoon, BsSun } from 'react-icons/bs'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className={``}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <p className='flex justify-center items-center gap-2 capitalize'>
          <BsMoon /> Dark
        </p>
      ) : (
        <p className='flex justify-center items-center gap-2 capitalize'>
          <BsSun /> light
        </p>
      )}
    </button>
  )
}
