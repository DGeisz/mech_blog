import { useState, useEffect } from 'react'

type ScreenSizeBasic = {
  width: number
  height: number
}

export type ScreenSize = {
  width: number
  height: number
  small: boolean
  medium: boolean
  large: boolean
}

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSizeBasic>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const small = screenSize.width > 640
  const medium = screenSize.width > 768
  const large = screenSize.width >= 1024

  return {
    ...screenSize,
    small,
    medium,
    large,
  }
}
