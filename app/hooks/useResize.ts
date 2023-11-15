import { useState, useEffect } from 'react'

export const useResize = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth)
    }
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    width,
  }
}
