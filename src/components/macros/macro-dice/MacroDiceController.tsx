import { useEffect, useMemo, useState, useCallback } from 'react'
import { useAtom } from 'jotai'
import {
  AccordionContainer,
  BorderRadiusSelector,
  BorderStyleSelector,
  BorderWidthSelector,
  BoxShadowSelector,
  ContentSection,
  FontStyleSelector,
  FontWeightSelector,
  InputText,
  SampleSection,
} from '@/components/common'
import {
  diceBorderWidth,
  diceBorderStyle,
  diceBorderColor,
  diceBorderRadius,
  diceBoxShadowColor,
  dicePrimaryColor,
  diceSecondaryColor,
  diceFontStyle,
  diceFontWeight,
  diceColor,
  diceLabel,
} from './MacroDiceAtoms'
import MacroDice from './MacroDice'

const MacroDiceController = () => {
  const [label, setLabel] = useAtom(diceLabel)

  const [borderWidth, setBorderWidth] = useAtom(diceBorderWidth)
  const [borderStyle, setBorderStyle] = useAtom(diceBorderStyle)
  const [borderColor, setBorderColor] = useAtom(diceBorderColor)
  const [borderRadius, setBorderRadius] = useAtom(diceBorderRadius)
  const [boxShadowColor, setBoxShadowColor] = useAtom(diceBoxShadowColor)
  const [primaryColor, setPrimaryColor] = useAtom(dicePrimaryColor)
  const [secondaryColor, setSecondaryColor] = useAtom(diceSecondaryColor)
  const [fontStyle, setFontStyle] = useAtom(diceFontStyle)
  const [fontWeight, setFontWeight] = useAtom(diceFontWeight)
  const [color, setColor] = useAtom(diceColor)

  // radio index

  const hexToRgba = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    const a = hex.length === 9 ? parseInt(hex.slice(7, 9), 16) / 255 : 1

    return `rgba(${r}, ${g}, ${b}, ${a}&#41;`
  }

  const rgbaBoxShadowColor = hexToRgba(boxShadowColor)
  const copyString = `/desc [${label}](#" style="display: inline-block; padding: 10px 15px; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-radius: ${borderRadius}px; box-shadow: 0 4px 0 0 ${rgbaBoxShadowColor}; font-style: ${fontStyle}; font-weight: ${fontWeight}; font-size: 13px; line-height: 150%; font-family: verdana, sans-serif; color: ${color}; text-decoration: none; cursor: default; background-image: linear-gradient(to right, ${primaryColor}, ${secondaryColor}&#41;)`

  return (
    <ContentSection>
      <SampleSection copyString={copyString}>
        <MacroDice />
      </SampleSection>
      <section className="flex flex-col w-full h-full gap-5 p-1 overflow-y-auto">
        <AccordionContainer icon="text_fields" label="텍스트 설정">
          <InputText id="label" label="레이블" value={label} setValue={setLabel} />
          <InputText id="color" label="글씨색" value={color} setValue={setColor} hasColorPicker />
          <FontStyleSelector setFontStyle={setFontStyle} />
          <FontWeightSelector setFontWeight={setFontWeight} />
        </AccordionContainer>
        <AccordionContainer icon="border_style" label="테두리 설정">
          <BorderWidthSelector setBorderWidth={setBorderWidth} />
          <BorderStyleSelector setBorderStyle={setBorderStyle} />
          <InputText id="border-color" label="테두리 색" value={borderColor} setValue={setBorderColor} hasColorPicker />
          <BorderRadiusSelector setBorderRadius={setBorderRadius} />
        </AccordionContainer>
        <AccordionContainer icon="shadow" label="그림자 설정">
          <BoxShadowSelector boxShadowColor={boxShadowColor} setBoxShadowColor={setBoxShadowColor} />
          <InputText
            id="shadow-color"
            label="그림자 색"
            value={boxShadowColor}
            setValue={setBoxShadowColor}
            disable={boxShadowColor.length === 9}
            hasColorPicker
          />
        </AccordionContainer>
        <AccordionContainer icon="palette" label="배경색 설정">
          <span className="text-sm">단색으로 하고 싶으면 두 색을 동일하게 하면 돼요.</span>
          <InputText
            id="background-color-1"
            label="배경색 1"
            value={primaryColor}
            setValue={setPrimaryColor}
            hasColorPicker
          />
          <InputText
            id="background-color-2"
            label="배경색 2"
            value={secondaryColor}
            setValue={setSecondaryColor}
            hasColorPicker
          />
        </AccordionContainer>
      </section>
    </ContentSection>
  )
}

export default MacroDiceController
