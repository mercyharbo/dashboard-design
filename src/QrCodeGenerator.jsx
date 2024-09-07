import React, { useEffect, useRef } from 'react'
import QRCode from 'qrcode'

function QrCodeGenerator({ value, size = 200 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, value, { width: size, height: size })
    }
  }, [value, size])

  return (
    <div className='mx-auto'>
      <canvas ref={canvasRef} className='w-full' />
    </div>
  )
}

export default QrCodeGenerator
