import { useState, useMemo, useCallback, useEffect } from 'react'
import SelectorBase from '../selector-base/RadioBase'

interface BorderWidthSelectorProps {
  setBorderWidth: (borderWidth: number) => void
}

const BorderWidthSelector = ({ setBorderWidth }: BorderWidthSelectorProps) => {
  const [borderWidthIndex, setBorderWidthIndex] = useState<number>(2)

  const borderWidthValues = useMemo(() => [0, 1, 2, 3] as const, [])

  const updateBorderWidth = useCallback(() => {
    setBorderWidth(borderWidthValues[borderWidthIndex])
  }, [setBorderWidth, borderWidthValues, borderWidthIndex])

  useEffect(updateBorderWidth, [updateBorderWidth])

  return (
    <SelectorBase
      id="border-width"
      label="테두리 두께"
      buttons={['0', '1', '2', '3']}
      index={borderWidthIndex}
      setIndex={setBorderWidthIndex}
    />
  )
}

export default BorderWidthSelector
