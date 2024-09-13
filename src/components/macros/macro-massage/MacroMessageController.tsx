import { useAtom } from 'jotai'
import {
  AccordionContainer,
  BorderRadiusSelector,
  ContentSection,
  FontStyleSelector,
  FontWeightSelector,
  InputText,
  SampleSection,
} from '@/components/common'
import {
  messageBorderRadius,
  messageColor,
  messageFontStyle,
  messageFontWeight,
  messageLabel,
  messagePrimaryColor,
} from './MacroMessageAtoms'
import MacroMessage from './MacroMessage'

const MacroMessageController = () => {
  const [label, setLabel] = useAtom(messageLabel)

  const [borderRadius, setBorderRadius] = useAtom(messageBorderRadius)
  const [primaryColor, setPrimaryColor] = useAtom(messagePrimaryColor)
  const [fontStyle, setFontStyle] = useAtom(messageFontStyle)
  const [fontWeight, setFontWeight] = useAtom(messageFontWeight)
  const [color, setColor] = useAtom(messageColor)

  const copyString = `/desc [${label}](#" style="display: table; margin: auto; max-width: 280px; padding: 10px 20px; border-radius: ${borderRadius}px; background-color: ${primaryColor}; font-style: ${fontStyle}; font-weight: ${fontWeight}; font-size: 13px; line-height: 150%; font-family: verdana, sans-serif; word-break: keep-all; letter-spacing: -1px; text-decoration: none; color: ${color}; cursor: default;)[ ](#" style="display: block; width: 8px; height: 8px; margin: auto; border-right: 8px solid ${primaryColor}; border-bottom-right-radius: 16px 8px; cursor: default;)`

  return (
    <ContentSection>
      <SampleSection copyString={copyString}>
        <MacroMessage />
      </SampleSection>
      <section className="flex flex-col w-full h-full gap-5 p-1 overflow-y-auto">
        <AccordionContainer icon="text_fields" label="텍스트 설정">
          <InputText id="label" label="레이블" value={label} setValue={setLabel} />
          <InputText id="color" label="글씨색" value={color} setValue={setColor} hasColorPicker />
          <FontStyleSelector setFontStyle={setFontStyle} />
          <FontWeightSelector setFontWeight={setFontWeight} />
        </AccordionContainer>

        <AccordionContainer icon="palette" label="배경 설정">
          <InputText
            id="background-color"
            label="배경색"
            value={primaryColor}
            setValue={setPrimaryColor}
            hasColorPicker
          />
          <BorderRadiusSelector setBorderRadius={setBorderRadius} />
        </AccordionContainer>
      </section>
    </ContentSection>
  )
}

export default MacroMessageController
