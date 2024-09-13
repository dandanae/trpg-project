import { useState, useCallback, useEffect } from 'react'
import SelectorBase from '../selector-base/RadioBase'

interface BackgroundSelectorProps {
  backgroundColor: string
  setBackgroundColor: (backgroundColor: string) => void
}

const BackgroundSelector = ({ backgroundColor, setBackgroundColor }: BackgroundSelectorProps) => {
  const [backgroundIndex, setBackgroundIndex] = useState<number>(0)

  const updateBackgroundColor = useCallback(() => {
    if (backgroundIndex === 0 && backgroundColor.length === 7) {
      setBackgroundColor(`${backgroundColor}00`)
    } else if (backgroundIndex === 1 && backgroundColor.length === 9) {
      setBackgroundColor(backgroundColor.substring(0, 7))
    }
  }, [setBackgroundColor, backgroundIndex, backgroundColor])

  useEffect(updateBackgroundColor, [updateBackgroundColor])

  return (
    <SelectorBase
      id="box-shadow-visible"
      label="배경 설정"
      buttons={['없음', '있음']}
      index={backgroundIndex}
      setIndex={setBackgroundIndex}
    />
  )
}

export default BackgroundSelector
