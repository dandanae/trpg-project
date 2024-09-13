import { useAtom } from 'jotai'
import { AccordionContainer, ContentSection, InputText, SampleSection } from '@/components/common'
import { movieLabel, movieImageUrl } from './MacroMovieAtoms'
import MacroMovie from './MacroMovie'

const MacroMovieController = () => {
  const [label, setLabel] = useAtom(movieLabel)
  const [imageUrl, setImageUrl] = useAtom(movieImageUrl)

  const copyString = `/desc [${label}](#" style="display: block; width: 226px; margin: auto; padding: 120px 12px 12px 12px; background-color: #000000; backgrond-position: center; background-size: cover; font-style: normal; font-weight: bold; font-size: 13px; line-height: 150%; font-family: verdana, sans-serif; text-shadow: -1px 0px #000000, 0px 1px #000000, 1px 0px #000000, 0px -1px #000000; text-decoration: none; color: white; cursor: default; background-image: url('${imageUrl}'&#41;;)`

  return (
    <ContentSection>
      <SampleSection copyString={copyString}>
        <MacroMovie />
      </SampleSection>
      <section className="flex flex-col w-full h-full gap-5 p-1 overflow-y-auto">
        <AccordionContainer icon="text_fields" label="텍스트 설정">
          <InputText id="label" label="자막" value={label} setValue={setLabel} />
        </AccordionContainer>
        <AccordionContainer icon="image" label="배경 이미지 설정">
          <InputText id="background-image" label="배경 이미지" value={imageUrl} setValue={setImageUrl} />
        </AccordionContainer>
      </section>
    </ContentSection>
  )
}

export default MacroMovieController
