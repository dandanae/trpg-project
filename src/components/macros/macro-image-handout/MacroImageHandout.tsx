import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'
import {
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
  ihoPrimaryColor,
  ihoSecondaryColor,
  ihoTitle,
} from './MacroImageHandoutAtoms'

const MacroImageHandout = () => {
  const title = useAtomValue(ihoTitle)
  const content = useAtomValue(ihoContent)
  const headerImageUrl = useAtomValue(ihoHeaderImageUrl)
  const headerWidth = useAtomValue(ihoHeaderWidth)
  const headerHeight = useAtomValue(ihoHeaderHeight)
  const divideImageUrl = useAtomValue(ihoDividedImageUrl)
  const divideWidth = useAtomValue(ihoDividedWidth)
  const divideHeight = useAtomValue(ihoDividedHeight)
  const footerImageUrl = useAtomValue(ihoFooterImageUrl)
  const footerWidth = useAtomValue(ihoFooterWidth)
  const footerHeight = useAtomValue(ihoFooterHeight)

  const primaryColor = useAtomValue(ihoPrimaryColor)
  const secondaryColor = useAtomValue(ihoSecondaryColor)
  const color = useAtomValue(ihoColor)

  const contentParts = content.split('\n').map((part) => {
    return `${part !== '' ? part : ' '}`
  })

  const headerRatio = headerWidth / headerHeight
  const divideRatio = divideWidth / divideHeight
  const footerRatio = footerWidth / footerHeight

  return (
    <div className="flex flex-col h-fit">
      <motion.div
        animate={{ backgroundColor: primaryColor }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width: 250px;
          height: ${250 / headerRatio}px;
          margin: auto;
          background-image: url('${headerImageUrl}');
          background-position: center;
          background-size: cover;
          background-repeat : no-repeat;
        `,
        ]}
      />
      <motion.div
        animate={{ backgroundColor: primaryColor, color: secondaryColor }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width: 250px;
          margin: auto;
          padding: 0 20px;
          font-size: 15px;
          line-height: 150%;
          font-style: italic;
          font-weight: bold;
          font-family: verdana, sans-serif;
          letter-spacing: -1px;
          word-break: keep-all;
          `,
        ]}
      >
        {title}
      </motion.div>
      <motion.div
        animate={{ backgroundColor: primaryColor }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width:  250px;
          height: ${((250 / headerWidth) * divideWidth) / divideRatio}px;
          margin: auto;
          padding: 20px;
          background-image: url('${divideImageUrl}');
          background-position: center;
          background-size: ${(250 / headerWidth) * divideWidth}px;
          background-repeat: no-repeat;
        `,
        ]}
      />
      {contentParts.map((part) => (
        <motion.div
          key="content"
          animate={{ backgroundColor: primaryColor, color }}
          transition={{ duration: 0.5 }}
          css={[
            `
            display: block;
            width: 250px;
            margin: auto;
            padding: 0 20px;
            font-size: 13px;
            line-height: 150%;
            font-style: normal;
            font-weight: normal;
            font-family: verdana, sans-serif;
            text-align: left;
            letter-spacing: -1px;
            text-indent: 5px;
            word-break: keep-all;
            white-space: pre-wrap;
            `,
          ]}
        >
          {part}
        </motion.div>
      ))}

      <motion.div
        animate={{ backgroundColor: primaryColor }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width: 250px;
          height: ${250 / footerRatio}px;
          margin: auto;
          background-image: url('${footerImageUrl}');
          background-position: center;
          background-size: cover;
          background-repeat : no-repeat;
        `,
        ]}
      />
    </div>
  )
}

export default MacroImageHandout
