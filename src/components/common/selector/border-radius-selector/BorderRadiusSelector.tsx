import { useState, useMemo, useCallback, useEffect } from 'react'
import SelectorBase from '../selector-base/RadioBase'

interface BorderRadiusSelectorProps {
  setBorderRadius: (borderRadius: number) => void
}

const BorderRadiusSelector = ({ setBorderRadius }: BorderRadiusSelectorProps) => {
  const [borderRadiusIndex, setBorderRadiusIndex] = useState<number>(4)

  const borderRadiusValues = useMemo(() => [0, 5, 10, 15, 99] as const, [])

  const updateBorderRadius = useCallback(() => {
    setBorderRadius(borderRadiusValues[borderRadiusIndex])
  }, [setBorderRadius, borderRadiusValues, borderRadiusIndex])

  useEffect(updateBorderRadius, [updateBorderRadius])

  return (
    <SelectorBase
      id="border-radius"
      label="테두리 둥글게"
      buttons={['0', '5', '10', '15', '둥글게']}
      index={borderRadiusIndex}
      setIndex={setBorderRadiusIndex}
    />
  )
}

export default BorderRadiusSelector
