import { useCallback, useEffect, useMemo, useState } from 'react'
import { useAtom } from 'jotai'
import {
  ContentSection,
  SampleSection,
  AccordionContainer,
  InputText,
  BorderRadiusSelector,
  BorderStyleSelector,
  BorderWidthSelector,
} from '@/components/common'
import {
  tcBorderWidth,
  tcBorderStyle,
  tcBorderColor,
  tcBorderRadius,
  tcPrimaryColor,
  tcSecondaryColor,
  tcColor,
  tcComment,
  tcImageUrl,
  tcKpcName,
  tcPcName,
  tcTitle,
  tcWriter,
} from './MacroTitleCardAtoms'
import MacroTitleCard from './MacroTitleCard'

const MacroTextHandoutController = () => {
  const [title, setTitle] = useAtom(tcTitle)
  const [writer, setWriter] = useAtom(tcWriter)
  const [kpcName, setKpcName] = useAtom(tcKpcName)
  const [pcName, setPcName] = useAtom(tcPcName)
  const [comment, setComment] = useAtom(tcComment)
  const [imageUrl, setImageUrl] = useAtom(tcImageUrl)

  const [borderWidth, setBorderWidth] = useAtom(tcBorderWidth)
  const [borderStyle, setBorderStyle] = useAtom(tcBorderStyle)
  const [borderColor, setBorderColor] = useAtom(tcBorderColor)
  const [borderRadius, setBorderRadius] = useAtom(tcBorderRadius)
  const [primaryColor, setPrimaryColor] = useAtom(tcPrimaryColor)
  const [secondaryColor, setSecondaryColor] = useAtom(tcSecondaryColor)
  const [color, setColor] = useAtom(tcColor)

  const [borderStyleIndex, setBorderStyleIndex] = useState<number>(0)
  const [borderRadiusIndex, setBorderRadiusIndex] = useState<number>(0)

  const borderStyleValues = useMemo(() => ['solid', 'dashed', 'dotted'] as const, [])
  const borderRadiusValues = useMemo(() => [0, 5, 10, 15, 20], [])

  const updateBorderStyle = useCallback(() => {
    setBorderStyle(borderStyleValues[borderStyleIndex])
  }, [setBorderStyle, borderStyleValues, borderStyleIndex])

  const updateBorderRadius = useCallback(() => {
    setBorderRadius(borderRadiusValues[borderRadiusIndex])
  }, [setBorderRadius, borderRadiusValues, borderRadiusIndex])

  useEffect(updateBorderStyle, [updateBorderStyle])
  useEffect(updateBorderRadius, [updateBorderRadius])

  const hexToRgba = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    return `rgba(${r}, ${g}, ${b}, 32&#41;`
  }
  const rgbaColor = hexToRgba(color)

  const copyString = `/desc [${title}](#" style="display: block; width: 180px; margin: auto; padding: 80px 20px 0 0; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-bottom: none; border-radius: ${borderRadius}px ${borderRadius}px 0 0; background-color: ${primaryColor}; background-positioN; center; background-size: cover; font-style: normal; font-weight: bold; font-size: 24px; line-height: 150%; font-family: verdana, sans-serif; text-align: left; letter-spacing: -1px; text-decoration: none; color: #ffffff; cursor: default; background-image: url('${imageUrl}'&#41;;)[ ](#" style="display: block; width: 200px; height: 20px; margin: auto; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-bottom: none; background-color: ${secondaryColor}; cursor: default;)[${title}](#" style="display: block; width: 160px; margin: auto; padding: 0 20px; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-bottom: none; background-color: ${secondaryColor}; font-style: normal; font-weight: bold; font-size: 20px; line-height: 150%; font-family: verdana, sans-serif; text-align: left; letter-spacing: -1px; text-decoration: none; color: ${color}; cursor: default;)[${writer}](#" style="display: block; width: 160px; margin: auto; padding: 0 20px; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-bottom: none; background-color: ${secondaryColor}; font-style: normal; font-weight: bold; font-size: 13px; line-height: 150%; font-family: verdana, sans-serif; text-align: left; letter-spacing: -1px; text-decoration: none; color: ${primaryColor}; cursor: default;)[ ](#" style="display: block; width: 200px; height: 20px; margin: auto; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-bottom: none; background-color: ${secondaryColor};)[KPC](#" style="display: block; width: 160px; margin: auto; padding: 0 20px; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-bottom: none; background-color: ${secondaryColor}; font-style: normal; font-weight: bold; font-size: 15px; line-height; 150%: font-family: verdana, sans-serif; text-align: left; letter-spacing: -1px; text-decoration: none; color: ${primaryColor}; cursor: default;)[${kpcName}](#" style="display: block; width: 160px; margin: auto; padding: 0 20px; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-bottom: none; background-color: ${secondaryColor}; font-style: normal; font-weight: normal; font-size: 13px; line-height: 150%: font-family: verdana, sans-serif; text-align: left; letter-spacing: -1px; text-decoration: none; color: ${color}; cursor: default;)[ ](#" style="display: block; width: 200px; height: 20px; margin: auto; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-bottom: none; background-color: ${secondaryColor};)[PC](#" style="display: block; width: 160px; margin: auto; padding: 0 20px; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-bottom: none; background-color: ${secondaryColor}; font-style: normal; font-weight: bold; font-size: 15px; line-height; 150%: font-family: verdana, sans-serif; text-align: left; letter-spacing: -1px; text-decoration: none; color: ${primaryColor}; cursor: default;)[${pcName}](#" style="display: block; width: 160px; margin: auto; padding: 0 20px; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-bottom: none; background-color: ${secondaryColor}; font-style: normal; font-weight: normal; font-size: 13px; line-height: 150%: font-family: verdana, sans-serif; text-align: left; letter-spacing: -1px; text-decoration: none; color: ${color}; cursor: default;)[ ](#" style="display: block; width: 200px; height: 20px; margin: auto; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-bottom: none; background-color: ${secondaryColor};)[${comment}](#" style="display: block; width: 160px; margin: auto; padding: 0 20px; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-bottom: none; background-color: ${secondaryColor}; font-style: normal; font-weight: normal; font-size: 11px; line-height: 150%; font-family: verdana, sans-serif; text-align: left; letter-spacing: -1px; text-decoration: none; color: ${rgbaColor}; cursor: default;)[ ](#" style="display: block; width: 200px; height: 20px; margin: auto; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; background-color: ${secondaryColor};)`

  return (
    <ContentSection>
      <SampleSection copyString={copyString}>
        <MacroTitleCard />
      </SampleSection>
      <section className="flex flex-col w-full h-full gap-5 p-1 overflow-y-auto">
        <AccordionContainer icon="text_fields" label="텍스트 설정">
          <InputText id="tc" label="시나리오 제목" value={title} setValue={setTitle} />
          <InputText id="writer" label="시나리오 저자" value={writer} setValue={setWriter} />
          <InputText id="kpc-name" label="KPC 이름" value={kpcName} setValue={setKpcName} />
          <InputText id="pc-name" label="PC 이름" value={pcName} setValue={setPcName} />
          <InputText id="comment" label="코멘트" value={comment} setValue={setComment} />
          <InputText id="main-color" label="기본 글씨색" value={color} setValue={setColor} hasColorPicker />
          <InputText
            id="main-color"
            label="포인트 글씨색"
            value={primaryColor}
            setValue={setPrimaryColor}
            hasColorPicker
          />
        </AccordionContainer>
        <AccordionContainer icon="border_style" label="테두리 설정">
          <BorderWidthSelector setBorderWidth={setBorderWidth} />
          <BorderStyleSelector setBorderStyle={setBorderStyle} />
          <InputText id="border-color" label="테두리 색" value={borderColor} setValue={setBorderColor} hasColorPicker />
          <BorderRadiusSelector setBorderRadius={setBorderRadius} />
        </AccordionContainer>
        <AccordionContainer icon="image" label="배경색/이미지 설정">
          <span className="text-sm">주소 입력란을 빈칸으로 설정 시 이미지가 사라져요.</span>
          <InputText
            id="background-color"
            label="배경색"
            value={secondaryColor}
            setValue={setSecondaryColor}
            hasColorPicker
          />
          <InputText id="background-image" label="이미지 주소" value={imageUrl} setValue={setImageUrl} />
        </AccordionContainer>
      </section>
    </ContentSection>
  )
}

export default MacroTextHandoutController
