import { useAtom } from 'jotai'
import {
  AccordionContainer,
  BorderWidthSelector,
  ContentSection,
  FontStyleSelector,
  FontWeightSelector,
  InputText,
  InputTextarea,
  SampleSection,
} from '@/components/common'
import {
  dialogBorderWidth,
  dialogFontStyle,
  dialogFontWeight,
  dialogBorderColor,
  dialogColor,
  dialogContent,
} from './MacroDialogAtoms'
import MacroDialog from './MacroDialog'

const MacroDialogController = () => {
  const [content, setContent] = useAtom(dialogContent)

  const [borderWidth, setBorderWidth] = useAtom(dialogBorderWidth)
  const [fontStyle, setFontStyle] = useAtom(dialogFontStyle)
  const [fontWeight, setFontWeight] = useAtom(dialogFontWeight)
  const [borderColor, setBorderColor] = useAtom(dialogBorderColor)
  const [color, setColor] = useAtom(dialogColor)

  const contentParts = content.split('\n')
  const contents = contentParts
    .map((part) => {
      return `[${
        part !== '' ? part : ' '
      }](#" style="display: block; width: 210px; margin: auto; padding: 0 20px; font-style: ${fontStyle}; font-weight: ${fontWeight}; font-size: 13px; line-height: 150%; font-family: verdana, sans-serif; word-break; keep-all; white-space: pre-wrap; letter-spacing: -1px; text-decoration: none; color: ${color}; cursor: default;)`
    })
    .join('')

  const copyString = `/desc [ ](#" style="display: inline-block; width: 10px; height: 10px; margin: auto; border-top: ${borderWidth}px solid ${borderColor}; border-left: ${borderWidth}px solid ${borderColor}; cursor: default;)[ ](#" style="display: inline-block; width: 240px; height: 10px; margin: auto; cursor: default;)${contents}[ ](#" style="display: inline-block; width: 240px; height: 10px; margin: auto; cursor: default;)[ ](#" style="display: inline-block; width: 10px; height: 10px; margin: auto; border-right: ${borderWidth}px solid ${borderColor}; border-bottom: ${borderWidth}px solid ${borderColor}; cursor: default;)`

  return (
    <ContentSection>
      <SampleSection copyString={copyString}>
        <MacroDialog />
      </SampleSection>
      <section className="flex flex-col w-full h-full gap-5 p-1 overflow-y-auto">
        <AccordionContainer icon="text_fields" label="텍스트 설정">
          <InputTextarea id="content" label="내용" value={content} setValue={setContent} />
          <InputText id="color" label="글씨색" value={color} setValue={setColor} hasColorPicker />
          <FontStyleSelector setFontStyle={setFontStyle} />
          <FontWeightSelector setFontWeight={setFontWeight} />
        </AccordionContainer>
        <AccordionContainer icon="border_style" label="테두리 설정">
          <BorderWidthSelector setBorderWidth={setBorderWidth} />
          <InputText id="border-color" label="테두리 색" value={borderColor} setValue={setBorderColor} hasColorPicker />
        </AccordionContainer>
      </section>
    </ContentSection>
  )
}

export default MacroDialogController
