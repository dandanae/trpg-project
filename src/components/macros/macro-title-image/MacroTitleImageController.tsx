import { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import {
  ContentSection,
  SampleSection,
  AccordionContainer,
  InputText,
  InputTextSize,
  BackgroundSelector,
} from '@/components/common'
import {
  tiPrimaryColor,
  tiSecondaryColor,
  tiColor,
  tiComment,
  tiDividedHeight,
  tiDividedImageUrl,
  tiDividedWidth,
  tiFooterHeight,
  tiFooterImageUrl,
  tiFooterWidth,
  tiHeaderHeight,
  tiHeaderImageUrl,
  tiHeaderWidth,
  tiKpcName,
  tiPcName,
  tiTitle,
  tiWriter,
} from './MacroTitleImageAtoms'
import MacroTitleImage from './MacroTitleImage'

const MacroImageHandoutController = () => {
  const [title, setTitle] = useAtom(tiTitle)
  const [writer, setWriter] = useAtom(tiWriter)
  const [kpcName, setKpcName] = useAtom(tiKpcName)
  const [pcName, setPcName] = useAtom(tiPcName)
  const [comment, setComment] = useAtom(tiComment)
  const [headerImageUrl, setHeaderImageUrl] = useAtom(tiHeaderImageUrl)
  const [headerWidth, setHeaderWidth] = useAtom(tiHeaderWidth)
  const [headerHeight, setHeaderHeight] = useAtom(tiHeaderHeight)
  const [divideImageUrl, setDivideImageUrl] = useAtom(tiDividedImageUrl)
  const [divideWidth, setDivideWidth] = useAtom(tiDividedWidth)
  const [divideHeight, setDivideHeight] = useAtom(tiDividedHeight)
  const [footerImageUrl, setFooterImageUrl] = useAtom(tiFooterImageUrl)
  const [footerWidth, setFooterWidth] = useAtom(tiFooterWidth)
  const [footerHeight, setFooterHeight] = useAtom(tiFooterHeight)

  const [primaryColor, setPrimaryColor] = useAtom(tiPrimaryColor)
  const [secondaryColor, setSecondaryColor] = useAtom(tiSecondaryColor)
  const [color, setColor] = useAtom(tiColor)

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

  const copyString = `/desc [ ](#" style="display: block; width: 250px; height: ${
    250 / headerRatio
  }px; margin: auto; background-color: ${rgbaBackgroundColor}; background-position: center; background-size: cover; background-repeat : no-repeat; cursor: default; background-image: url('${headerImageUrl}'&#41;;)[${title}](#" style-" display: block; width: 210px; margin: auto; padding: 0 20px; background-color: ${rgbaBackgroundColor}; font-size: 15px; line-height: 150%; font-style: italic; font-weight: bold; font-family: verdana, sans-serif; letter-spacing: -1px; word-break: keep-all; text-decoration: none; color: ${secondaryColor}; cursor: default;)[${writer}](#" style="display: block; width: 210px; margin: auto; padding: 0 20px; background-color: ${rgbaBackgroundColor}; font-size: 11px; line-height: 150%; font-style: normal; font-weight: normal; font-family: verdana, sans-serif; letter-spacing: -1px; text-decoration: none; color: ${color}; cursor: default;)[ ](#" style="display: block; width:  250px; height: ${
    ((250 / headerWidth) * divideWidth) / divideRatio
  }px; margin: auto; padding: 15px 0; background-color: ${rgbaBackgroundColor}; background-position: center; background-size: ${
    (250 / headerWidth) * divideWidth
  }px; background-repeat: no-repeat; background-image: url('${divideImageUrl}'&#41;;)[KPC](#" style="display: block; width: 210px; margin: auto; padding: 0 20px; background-color: ${rgbaBackgroundColor}; font-size: 13px; line-height: 150%; font-style: normal; font-weight: bold; font-family: verdana, sans-serif; letter-spacing: -1px; text-decoration: none; color: ${secondaryColor}; cursor: default;)[${kpcName}](#" style="display: block; width: 210px; margin: auto; padding: 0 20px; background-color: ${rgbaBackgroundColor}; font-size: 13px; line-height: 150%; font-style: normal; font-weight: normal; font-family: verdana, sans-serif; letter-spacing: -1px; text-decoration: none; color: ${color}; cursor: default;)[PC](#" style="display: block; width: 210px; margin: auto; padding: 0 20px; background-color: ${rgbaBackgroundColor}; font-size: 13px; line-height: 150%; font-style: normal; font-weight: bold; font-family: verdana, sans-serif; letter-spacing: -1px; text-decoration: none; color: ${secondaryColor}; cursor: default;)[${pcName}](#" style="display: block; width: 210px; margin: auto; padding: 0 20px; background-color: ${rgbaBackgroundColor}; font-size: 13px; line-height: 150%; font-style: normal; font-weight: normal; font-family: verdana, sans-serif; letter-spacing: -1px; text-decoration: none; color: ${color}; cursor: default;)[ ](#" style="display: block; width: 250px; height: 20px; margin: auto; background-color: ${rgbaBackgroundColor}; cursor: default;)[${comment}](#" style="display: block; width: 210px; margin: auto; padding: 0 20px; font-size: 11px; line-height: 150%; font-style: normal; font-weight: normal; font-family: verdana, sans-serif; letter-spacing: -1px; text-decoration: none; color: ${color}; cursor: default;)[ ](#" style="display: block; width: 250px; height: ${
    250 / footerRatio
  }px; margin: auto; background-position: center; background-size: cover; background-repeat : no-repeat; cursor: default; background-image: url('${footerImageUrl}'&#41;;)`

  return (
    <ContentSection>
      <SampleSection copyString={copyString}>
        <MacroTitleImage />
      </SampleSection>
      <section className="flex flex-col w-full h-full gap-5 p-1 overflow-y-auto">
        <AccordionContainer icon="text_fields" label="텍스트 설정">
          <InputText id="title" label="제목" value={title} setValue={setTitle} />
          <InputText id="writer" label="저자" value={writer} setValue={setWriter} />
          <InputText id="kpc-name" label="KPC 이름" value={kpcName} setValue={setKpcName} />
          <InputText id="pc-name" label="PC 이름" value={pcName} setValue={setPcName} />
          <InputText id="comment" label="시나리오 한 줄" value={comment} setValue={setComment} />
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
