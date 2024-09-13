import { useState, useCallback, useEffect } from 'react'
import SelectorBase from '../selector-base/RadioBase'

interface BoxShadowSelectorProps {
  boxShadowColor: string
  setBoxShadowColor: (boxShadowColor: string) => void
}

const BoxShadowSelector = ({ boxShadowColor, setBoxShadowColor }: BoxShadowSelectorProps) => {
  const [boxShadowIndex, setBoxShadowIndex] = useState<number>(0)

  const updateBoxShadowColor = useCallback(() => {
    if (boxShadowIndex === 0 && boxShadowColor.length === 7) {
      setBoxShadowColor(`${boxShadowColor}00`)
    } else if (boxShadowIndex === 1 && boxShadowColor.length === 9) {
      setBoxShadowColor(boxShadowColor.substring(0, 7))
    }
  }, [setBoxShadowColor, boxShadowIndex, boxShadowColor])

  useEffect(updateBoxShadowColor, [updateBoxShadowColor])

  return (
    <SelectorBase
      id="box-shadow-visible"
      label="그림자 설정"
      buttons={['없음', '있음']}
      index={boxShadowIndex}
      setIndex={setBoxShadowIndex}
    />
  )
}

export default BoxShadowSelector
