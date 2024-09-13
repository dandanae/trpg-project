import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'
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

const MacroTitleImage = () => {
  const title = useAtomValue(tiTitle)
  const writer = useAtomValue(tiWriter)
  const kpcName = useAtomValue(tiKpcName)
  const pcName = useAtomValue(tiPcName)
  const comment = useAtomValue(tiComment)
  const headerImageUrl = useAtomValue(tiHeaderImageUrl)
  const headerWidth = useAtomValue(tiHeaderWidth)
  const headerHeight = useAtomValue(tiHeaderHeight)
  const divideImageUrl = useAtomValue(tiDividedImageUrl)
  const divideWidth = useAtomValue(tiDividedWidth)
  const divideHeight = useAtomValue(tiDividedHeight)
  const footerImageUrl = useAtomValue(tiFooterImageUrl)
  const footerWidth = useAtomValue(tiFooterWidth)
  const footerHeight = useAtomValue(tiFooterHeight)

  const primaryColor = useAtomValue(tiPrimaryColor)
  const secondaryColor = useAtomValue(tiSecondaryColor)
  const color = useAtomValue(tiColor)

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
        animate={{ backgroundColor: primaryColor, color }}
        transition={{ duration: 0.5 }}
        css={[
          `
            display: block;
            width: 250px;
            margin: auto;
            padding: 0 20px;
            font-size: 11px;
            line-height: 150%;
            font-style: normal;
            font-weight: normal;
            font-family: verdana, sans-serif;
            letter-spacing: -1px;
            `,
        ]}
      >
        {writer}
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
          padding: 20px 0;
          background-image: url('${divideImageUrl}');
          background-position: center;
          background-size: ${(250 / headerWidth) * divideWidth}px;
          background-repeat: no-repeat;
        `,
        ]}
      />
      {['KPC', 'PC'].map((role) => (
        <>
          <motion.div
            key={role}
            animate={{ backgroundColor: primaryColor, color: secondaryColor }}
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
              font-weight: bold;
              font-family: verdana, sans-serif;
              letter-spacing: -1px;
              `,
            ]}
          >
            {role}
          </motion.div>
          <motion.div
            key={role}
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
              letter-spacing: -1px;
              `,
            ]}
          >
            {role === 'KPC' ? kpcName : pcName}
          </motion.div>
        </>
      ))}
      <motion.div
        animate={{ backgroundColor: primaryColor, color }}
        transition={{ duration: 0.5 }}
        css={[
          `
            display: block;
            width: 250px;
            height: 20px;
            margin: auto;
            `,
        ]}
      />
      <motion.div
        animate={{ backgroundColor: primaryColor, color }}
        transition={{ duration: 0.5 }}
        css={[
          `
            display: block;
            width: 250px;
            margin: auto;
            padding: 0 20px;
            font-size: 11px;
            line-height: 150%;
            font-style: normal;
            font-weight: normal;
            font-family: verdana, sans-serif;
            letter-spacing: -1px;
            `,
        ]}
      >
        {comment}
      </motion.div>
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

export default MacroTitleImage
