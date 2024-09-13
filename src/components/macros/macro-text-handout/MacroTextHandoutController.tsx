import { useAtom } from 'jotai'
import {
  ContentSection,
  SampleSection,
  AccordionContainer,
  InputText,
  InputTextarea,
  BorderWidthSelector,
  BorderStyleSelector,
  BorderRadiusSelector,
  BackgroundSelector,
  BoxShadowSelector,
} from '@/components/common'
import {
  thoBorderWidth,
  thoBorderStyle,
  thoBorderColor,
  thoBorderRadius,
  thoBoxShadowColor,
  thoPrimaryColor,
  thoSecondaryColor,
  thoColor,
  thoContent,
  thoHead,
  thoTitle,
} from './MacroTextHandoutAtoms'
import MacroTextHandout from './MacroTextHandout'

const MacroTextHandoutController = () => {
  const [head, setHead] = useAtom(thoHead)
  const [title, setTitle] = useAtom(thoTitle)
  const [content, setContent] = useAtom(thoContent)

  const [borderWidth, setBorderWidth] = useAtom(thoBorderWidth)
  const [borderStyle, setBorderStyle] = useAtom(thoBorderStyle)
  const [borderColor, setBorderColor] = useAtom(thoBorderColor)
  const [borderRadius, setBorderRadius] = useAtom(thoBorderRadius)
  const [boxShadowColor, setBoxShadowColor] = useAtom(thoBoxShadowColor)
  const [primaryColor, setPrimaryColor] = useAtom(thoPrimaryColor)
  const [secondaryColor, setSecondaryColor] = useAtom(thoSecondaryColor)
  const [color, setColor] = useAtom(thoColor)

  const hexToRgba = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    const a = hex.length === 9 ? parseInt(hex.slice(7, 9), 16) / 255 : 1

    return `rgba(${r}, ${g}, ${b}, ${a}&#41;`
  }
  const rgbaBoxShadowColor = hexToRgba(boxShadowColor)
  const contentParts = content.split('\n')
  const contents = contentParts
    .map((part) => {
      return `[${
        part !== '' ? part : ' '
      }](#" style="display: block; width: 210px; margin: auto; padding: 0 20px; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-bottom: none; box-shadow: 4px 4px 0 0 ${rgbaBoxShadowColor}; background-color: ${secondaryColor};  font-style: normal; font-weight: normal; font-size: 13px; line-height: 150%; font-family: verdana, sans-serif; text-align: left; letter-spacing: -1px; white-space: pre-wrap; text-indent: 5px; text-decorate: none;  color: ${color}; cursor: default;)`
    })
    .join('')

  const copyString = `/desc [ ](#" style="display: block; width: 210px; height: 10px; margin: auto; padding: 0 20px; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-bottom: none; border-radius: ${borderRadius}px ${borderRadius}px 0 0; box-shadow: 4px 4px 0 0 ${rgbaBoxShadowColor}; background-color: ${secondaryColor}; cursor: default;)[${head}](#" style="display: block; width: 210px; margin: auto; padding: 0 20px; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-bottom: none; box-shadow: 4px 4px 0 0 ${rgbaBoxShadowColor}; background-color: ${secondaryColor}; font-style: italic; font-weight: normal; font-size: 25px; line-height: 100%; font-family: fantasy; letter-spacing: -1px; color: ${primaryColor}; cursor: default;)[――――――――――――――](#" style="display: block; width: 210px; margin: auto; padding: 0 20px; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-bottom: none; box-shadow: 4px 4px 0 0 ${rgbaBoxShadowColor}; background-color: ${secondaryColor}; font-style: normal; font-weight: normal; font-size: 15px; line-height: 150%; font-family: verdana, sans-serif; letter-spacing: -1px; text-decorate: none; color: ${color}; cursor: default;)[ ](#" style="display: block; width: 210px; height: 5px; margin: auto; padding: 0 20px; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-bottom: none; box-shadow: 4px 4px 0 0 ${rgbaBoxShadowColor}; background-color: ${secondaryColor}; cursor: default;)[${title}](#" style="display: block; width: 210px; margin: auto; padding: 0 20px; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-bottom: none; box-shadow: 4px 4px 0 0 ${rgbaBoxShadowColor}; background-color: ${secondaryColor}; font-style: italic; font-weight: bold; font-size: 15px; line-height: 150%; font-family: verdana, sans-serif; letter-spacing: -1px; text-decorate: none; color: ${color}; cursor: default;)[ ](#" style="display: block; width: 210px; height: 5px; margin: auto; padding: 0 20px; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-bottom: none; box-shadow: 4px 4px 0 0 ${rgbaBoxShadowColor}; background-color: ${secondaryColor}; cursor: default;)${contents}[ ](#" style="display: block; width: 210px; height: 10px; margin: auto; padding: 0 20px; border: ${borderWidth}px ${borderStyle} ${borderColor}; border-top: none; border-radius: 0 0 ${borderRadius}px ${borderRadius}px; box-shadow: 4px 4px 0 0 ${rgbaBoxShadowColor}; background-color: ${secondaryColor}; cursor: default;)`

  return (
    <ContentSection>
      <SampleSection copyString={copyString}>
        <MacroTextHandout />
      </SampleSection>
      <section className="flex flex-col w-full h-full gap-5 p-1 overflow-y-auto">
        <AccordionContainer icon="text_fields" label="텍스트 설정">
          <InputText id="handout-head" label="상단 (영어만)" value={head} setValue={setHead} />
          <InputText id="handout-title" label="제목" value={title} setValue={setTitle} />
          <InputTextarea id="handout-content" label="내용" value={content} setValue={setContent} />
          <InputText
            id="header-color"
            label="상단 글씨색"
            value={primaryColor}
            setValue={setPrimaryColor}
            hasColorPicker
          />
          <InputText id="content-color" label="글씨색" value={color} setValue={setColor} hasColorPicker />
        </AccordionContainer>
        <AccordionContainer icon="border_style" label="테두리 설정">
          <BorderWidthSelector setBorderWidth={setBorderWidth} />
          <BorderStyleSelector setBorderStyle={setBorderStyle} />
          <InputText id="border-color" label="테두리 색" value={borderColor} setValue={setBorderColor} hasColorPicker />
          <BorderRadiusSelector setBorderRadius={setBorderRadius} />
        </AccordionContainer>
        <AccordionContainer icon="shadow" label="배경/그림자 설정">
          <BackgroundSelector backgroundColor={secondaryColor} setBackgroundColor={setSecondaryColor} />
          <InputText
            id="background-color"
            label="배경 색"
            value={secondaryColor}
            setValue={setSecondaryColor}
            disable={secondaryColor.length === 9}
            hasColorPicker
          />
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
      </section>
    </ContentSection>
  )
}

export default MacroTextHandoutController
