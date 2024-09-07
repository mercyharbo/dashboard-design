import { useCallback } from 'react'

function useRandomToken(length = 50) {
  const generateToken = useCallback(() => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }, [length])

  return generateToken
}

export default useRandomToken
