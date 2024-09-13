import { useAtom } from 'jotai'
import { AccordionContainer, ContentSection, InputText, SampleSection } from '@/components/common'
import { csChapter, csColor, csPrimaryColor, csSecondaryColor, csTItle } from './MacroChapterSimpleAtoms'
import MacroChapterSimple from './MacroChapterSimple'

const MacroChapterSimpleController = () => {
  const [chapter, setChapter] = useAtom(csChapter)
  const [title, setTitle] = useAtom(csTItle)

  const [primaryColor, setPrimaryColor] = useAtom(csPrimaryColor)
  const [secondaryColor, setSecondaryColor] = useAtom(csSecondaryColor)
  const [color, setColor] = useAtom(csColor)

  const copyString = `/desc [${chapter}](#" style="display: table; max-width: 230px; margin: auto; padding: 5px 10px; border-radius: 99px; background-color: ${primaryColor}; font-style: normal; font-weight: bold; font-size: 11px; line-height: 150%; font-family: verdana, sans-serif; letter-spacing: -1px; text-decoration: none; color: ${secondaryColor}; cursor: default;)[―――](#" style="display: inline-block; margin: auto; padding: 5px 0; font-style: normal; font-weight: bold; font-size: 13px; line-height: 150%; font-family; verdana, sans-serif; letter-spacing: -1px; text-decoration: none; color: ${primaryColor}; cursor: default;)[${title}](#" style="display: inline-block; max-width: 200px; margin: auto; padding: 5px 10px 0 10px; font-style: normal; font-weight: normal; font-size: 13px; line-height: 150%; font-family: verdana, sans-serif; letter-spacing: -1px; text-decoration: none; color: ${color}; cursor: default;)[―――](#" style="display: inline-block; margin: auto; padding: 5px 0; font-style: normal; font-weight: bold; font-size: 13px; line-height: 150%; font-family; verdana, sans-serif; letter-spacing: -1px; text-decoration: none; color: ${primaryColor}; cursor: default;)`

  return (
    <ContentSection>
      <SampleSection copyString={copyString}>
        <MacroChapterSimple />
      </SampleSection>
      <section className="flex flex-col w-full h-full gap-5 p-1 overflow-y-auto">
        <AccordionContainer icon="text_fields" label="텍스트 설정">
          <InputText id="chapter" label="챕터" value={chapter} setValue={setChapter} />
          <InputText id="title" label="제목" value={title} setValue={setTitle} />
          <InputText
            id="chapter"
            label="챕터 글씨색"
            value={secondaryColor}
            setValue={setSecondaryColor}
            hasColorPicker
          />

          <InputText id="title" label="제목 글씨색" value={color} setValue={setColor} hasColorPicker />
        </AccordionContainer>
        <AccordionContainer icon="palette" label="배경색 설정">
          <InputText id="chapter" label="챕터 배경색" value={primaryColor} setValue={setPrimaryColor} />
        </AccordionContainer>
      </section>
    </ContentSection>
  )
}

export default MacroChapterSimpleController
