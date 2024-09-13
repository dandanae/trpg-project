import { useAtom } from 'jotai'
import {
  ContentSection,
  SampleSection,
  AccordionContainer,
  InputText,
  InputTextarea,
  InputTextSize,
  BackgroundSelector,
} from '@/components/common'
import {
  ihoPrimaryColor,
  ihoSecondaryColor,
  ihoColor,
  ihoContent,
  ihoDividedHeight,
  ihoDividedImageUrl,
  ihoDividedWidth,
  ihoFooterHeight,
  ihoFooterImageUrl,
  ihoFooterWidth,
  ihoHeaderHeight,
  ihoHeaderImageUrl,
  ihoHeaderWidth,
  ihoTitle,
} from './MacroImageHandoutAtoms'
import MacroImageHandout from './MacroImageHandout'

const MacroImageHandoutController = () => {
  const [title, setTitle] = useAtom(ihoTitle)
  const [content, setContent] = useAtom(ihoContent)
  const [headerImageUrl, setHeaderImageUrl] = useAtom(ihoHeaderImageUrl)
  const [headerWidth, setHeaderWidth] = useAtom(ihoHeaderWidth)
  const [headerHeight, setHeaderHeight] = useAtom(ihoHeaderHeight)
  const [divideImageUrl, setDivideImageUrl] = useAtom(ihoDividedImageUrl)
  const [divideWidth, setDivideWidth] = useAtom(ihoDividedWidth)
  const [divideHeight, setDivideHeight] = useAtom(ihoDividedHeight)
  const [footerImageUrl, setFooterImageUrl] = useAtom(ihoFooterImageUrl)
  const [footerWidth, setFooterWidth] = useAtom(ihoFooterWidth)
  const [footerHeight, setFooterHeight] = useAtom(ihoFooterHeight)

  const [primaryColor, setPrimaryColor] = useAtom(ihoPrimaryColor)
  const [secondaryColor, setSecondaryColor] = useAtom(ihoSecondaryColor)
  const [color, setColor] = useAtom(ihoColor)

  const hexToRgba = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    const a = hex.length === 9 ? parseInt(hex.slice(7, 9), 16) / 255 : 1

    return `rgba(${r}, ${g}, ${b}, ${a}&#41;`
  }

  const rgbaBackgroundColor = hexToRgba(primaryColor)
  const headerRatio = headerWidth / headerHeight
  const divideRatio = divideWidth / divideHeight
  const footerRatio = footerWidth / footerHeight

  const contentParts = content.split('\n')
  const contents = contentParts
    .map((part) => {
      return `[${
        part !== '' ? part : ' '
      }](#" style="display: block; width: 210px; margin: auto; padding: 0 20px; background-color: ${primaryColor}; font-size: 13px; line-height: 150%; font-style: normal; font-weight: normal; font-family: verdana, sans-serif; text-align: left; letter-spacing: -1px; text-indent: 5px; word-break: keep-all; white-space: pre-wrap; text-decoration: none; color: ${color}; cursor: default;)`
    })
    .join('')

  const copyString = `/desc [ ](#" style="display: block; width: 210px; height: ${
    250 / headerRatio
  }px; margin: auto; padding: 0 20px; background-color: ${rgbaBackgroundColor}; background-position: center; background-size: cover; background-repeat: no-repeat; cursor: default; background-image: url('${headerImageUrl}'&#41;;)[${title}](#" style="display: block; width: 210px; margin: auto; padding: 0 20px; background-color: ${rgbaBackgroundColor}; font-size: 15px; line-height: 150%; font-style: italic; font-weight: bold; font-family; verdana, sans-serif;  letter-spacing: -1px; word-break: keep-all; text-decoration: none; color: ${secondaryColor}; cursor: default;)[ ](#" style="display: block; width: 210px; height: ${
    ((250 / headerWidth) * divideWidth) / divideRatio
  }px; margin: auto; padding: 10px 20px; background-color: ${rgbaBackgroundColor}; background-position: center; background-size: ${
    (250 / headerWidth) * divideWidth
  }px; background-repeat: no-repeat; cursor: default; background-image: url('${divideImageUrl}'&#41;;)${contents}[ ](#" style="display: block; width: 210px; height: ${
    250 / footerRatio
  }px; margin: auto; padding: 0 20px; background-color: ${rgbaBackgroundColor}; background-position: center; background-size: cover; background-repeat: no-repeat; cursor: default; background-image: url('${footerImageUrl}'&#41;;)`

  return (
    <ContentSection>
      <SampleSection copyString={copyString}>
        <MacroImageHandout />
      </SampleSection>
      <section className="flex flex-col w-full h-full gap-5 p-1 overflow-y-auto">
        <AccordionContainer icon="text_fields" label="텍스트 설정">
          <InputText id="handout-title" label="제목" value={title} setValue={setTitle} />
          <InputTextarea id="handout-content" label="내용" value={content} setValue={setContent} />
          <InputText
            id="title-color"
            label="제목 글씨색"
            value={secondaryColor}
            setValue={setSecondaryColor}
            hasColorPicker
          />
          <InputText id="content-color" label="글씨색" value={color} setValue={setColor} hasColorPicker />
        </AccordionContainer>
        <AccordionContainer icon="palette" label="배경 설정">
          <BackgroundSelector backgroundColor={primaryColor} setBackgroundColor={setPrimaryColor} />
          <InputText id="title-color" label="배경색" value={primaryColor} setValue={setPrimaryColor} hasColorPicker />
        </AccordionContainer>
        <AccordionContainer icon="vertical_align_top" label="상단 이미지 설정">
          <InputText
            id="header-image-url"
            label="상단 이미지 주소"
            value={headerImageUrl}
            setValue={setHeaderImageUrl}
          />
          <InputTextSize
            id="header-image-url"
            label="상단 이미지 크기"
            width={headerWidth}
            setWidth={setHeaderWidth}
            height={headerHeight}
            setheight={setHeaderHeight}
          />
        </AccordionContainer>
        <AccordionContainer icon="vertical_align_center" label="중간 이미지 설정">
          <InputText
            id="header-image-url"
            label="중간 이미지 주소"
            value={divideImageUrl}
            setValue={setDivideImageUrl}
          />
          <InputTextSize
            id="header-image-url"
            label="중간 이미지 크기"
            width={divideWidth}
            setWidth={setDivideWidth}
            height={divideHeight}
            setheight={setDivideHeight}
          />
        </AccordionContainer>
        <AccordionContainer icon="vertical_align_bottom" label="하단 이미지 설정">
          <InputText
            id="divide-image-url"
            label="하단 이미지 주소"
            value={footerImageUrl}
            setValue={setFooterImageUrl}
          />
          <InputTextSize
            id="footer-image-url"
            label="하단 이미지 크기"
            width={footerWidth}
            setWidth={setFooterWidth}
            height={footerHeight}
            setheight={setFooterHeight}
          />
        </AccordionContainer>
      </section>
    </ContentSection>
  )
}

export default MacroImageHandoutController
