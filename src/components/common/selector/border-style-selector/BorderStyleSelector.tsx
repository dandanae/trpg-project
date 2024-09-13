import { useState, useMemo, useCallback, useEffect } from 'react'
import SelectorBase from '../selector-base/RadioBase'

interface BorderStyleSelectorProps {
  setBorderStyle: (borderStyle: 'solid' | 'dashed' | 'dotted') => void
}

const BorderStyleSelector = ({ setBorderStyle }: BorderStyleSelectorProps) => {
  const [borderStyleIndex, setBorderStyleIndex] = useState<number>(0)

  const borderStyleValues = useMemo(() => ['solid', 'dashed', 'dotted'] as const, [])

  const updateBorderStyle = useCallback(() => {
    setBorderStyle(borderStyleValues[borderStyleIndex])
  }, [setBorderStyle, borderStyleValues, borderStyleIndex])

  useEffect(updateBorderStyle, [updateBorderStyle])

  return (
    <SelectorBase
      id="border-style"
      label="테두리 스타일"
      buttons={['직선', '파선', '점선']}
      index={borderStyleIndex}
      setIndex={setBorderStyleIndex}
    />
  )
}

export default BorderStyleSelector
