import { useState, useMemo, useCallback, useEffect } from 'react'
import SelectorBase from '../selector-base/RadioBase'

interface FontWeightSelectorProps {
  setFontWeight: (fontWeight: 'normal' | 'bold') => void
}

const FontWeightSelector = ({ setFontWeight }: FontWeightSelectorProps) => {
  const [fontWeightIndex, setFontWeightIndex] = useState<number>(0)

  const fontWeightValues = useMemo(() => ['normal', 'bold'] as const, [])

  const updateFontWeight = useCallback(() => {
    setFontWeight(fontWeightValues[fontWeightIndex])
  }, [setFontWeight, fontWeightValues, fontWeightIndex])

  useEffect(updateFontWeight, [updateFontWeight])

  return (
    <SelectorBase
      id="font-style"
      label="글씨 두께"
      buttons={['보통', '두껍게']}
      index={fontWeightIndex}
      setIndex={setFontWeightIndex}
    />
  )
}

export default FontWeightSelector
