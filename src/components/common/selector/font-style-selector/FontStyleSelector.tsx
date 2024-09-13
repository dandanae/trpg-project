import { useState, useMemo, useCallback, useEffect } from 'react'
import SelectorBase from '../selector-base/RadioBase'

interface FontStyleSelectorProps {
  setFontStyle: (fontStyle: 'normal' | 'italic') => void
}

const FontStyleSelector = ({ setFontStyle }: FontStyleSelectorProps) => {
  const [fontStyleIndex, setFontStyleIndex] = useState<number>(0)

  const fontStyleValues = useMemo(() => ['normal', 'italic'] as const, [])

  const updateFontStyle = useCallback(() => {
    setFontStyle(fontStyleValues[fontStyleIndex])
  }, [setFontStyle, fontStyleValues, fontStyleIndex])

  useEffect(updateFontStyle, [updateFontStyle])

  return (
    <SelectorBase
      id="font-style"
      label="글씨 스타일"
      buttons={['보통', '기울임']}
      index={fontStyleIndex}
      setIndex={setFontStyleIndex}
    />
  )
}

export default FontStyleSelector
