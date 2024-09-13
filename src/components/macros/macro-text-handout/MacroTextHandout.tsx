import { useAtomValue } from 'jotai'
import { motion } from 'framer-motion'
import {
  thoBorderColor,
  thoBorderRadius,
  thoBorderStyle,
  thoBorderWidth,
  thoBoxShadowColor,
  thoColor,
  thoContent,
  thoHead,
  thoPrimaryColor,
  thoSecondaryColor,
  thoTitle,
} from './MacroTextHandoutAtoms'

const MacroTextHandout = () => {
  const head = useAtomValue(thoHead)
  const title = useAtomValue(thoTitle)
  const content = useAtomValue(thoContent)

  const borderWidth = useAtomValue(thoBorderWidth)
  const borderStyle = useAtomValue(thoBorderStyle)
  const borderColor = useAtomValue(thoBorderColor)
  const borderRadius = useAtomValue(thoBorderRadius)
  const boxShadowColor = useAtomValue(thoBoxShadowColor)
  const primaryColor = useAtomValue(thoPrimaryColor)
  const secondaryColor = useAtomValue(thoSecondaryColor)
  const color = useAtomValue(thoColor)

  const contentParts = content.split('\n').map((part) => {
    return `${part !== '' ? part : ' '}`
  })

  return (
    <div className="flex flex-col h-fit">
      <motion.div
        animate={{
          borderWidth,
          borderStyle,
          borderColor,
          borderBottom: 'none',
          borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
          boxShadow: `4px 4px 0 0 ${boxShadowColor}`,
          backgroundColor: secondaryColor,
        }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width: 250px;
          height: 10px;
          margin: auto;
          padding: 0 20px;
          `,
        ]}
      />
      <motion.div
        animate={{
          borderWidth,
          borderStyle,
          borderColor,
          borderTop: 'none',
          borderBottom: 'none',
          boxShadow: `4px 4px 0 0 ${boxShadowColor}`,
          backgroundColor: secondaryColor,
          color: primaryColor,
        }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width: 250px;
          margin: auto;
          padding: 0 20px;
          font-style: italic;
          font-weight: normal;
          font-size: 25px;
          line-height: 150%;
          font-family: fantasy;
          `,
        ]}
      >
        {head}
      </motion.div>
      <motion.div
        animate={{
          borderWidth,
          borderStyle,
          borderColor,
          borderTop: 'none',
          borderBottom: 'none',
          boxShadow: `4px 4px 0 0 ${boxShadowColor}`,
          backgroundColor: secondaryColor,
          color,
        }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width: 250px;
          margin: auto;
          padding: 0 20px;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          lien-height: 150%;
          font-family: verdana, sans-serif;
          letter-spacing: -1px;
          `,
        ]}
      >
        ――――――――――――――
      </motion.div>
      <motion.div
        animate={{
          borderWidth,
          borderStyle,
          borderColor,
          borderTop: 'none',
          borderBottom: 'none',
          boxShadow: `4px 4px 0 0 ${boxShadowColor}`,
          backgroundColor: secondaryColor,
        }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width: 250px;
          height: 5px;
          margin: auto;
          padding: 0 20px;
          `,
        ]}
      />
      <motion.div
        animate={{
          borderWidth,
          borderStyle,
          borderColor,
          borderTop: 'none',
          borderBottom: 'none',
          boxShadow: `4px 4px 0 0 ${boxShadowColor}`,
          backgroundColor: secondaryColor,
          color,
        }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width: 250px;
          margin: auto;
          padding: 0 20px;
          font-style: italic;
          font-weight: bold;
          font-size: 15px;
          line-height: 150%;
          font-family: verdana, sans-serif;
          letter-spacing: -1px;
          `,
        ]}
      >
        {title}
      </motion.div>
      <motion.div
        animate={{
          borderWidth,
          borderStyle,
          borderColor,
          borderTop: 'none',
          borderBottom: 'none',
          boxShadow: `4px 4px 0 0 ${boxShadowColor}`,
          backgroundColor: secondaryColor,
        }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width: 250px;
          height: 5px;
          margin: auto;
          padding: 0 20px;
          `,
        ]}
      />
      {contentParts.map((part) => (
        <motion.div
          key="contents"
          animate={{
            borderWidth,
            borderStyle,
            borderColor,
            borderTop: 'none',
            borderBottom: 'none',
            boxShadow: `4px 4px 0 0 ${boxShadowColor}`,
            backgroundColor: secondaryColor,
            color,
          }}
          transition={{ duration: 0.5 }}
          css={[
            `
            display: block;
            width: 250px;
            margin: auto;
            padding: 0 20px;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 150%;
            font-family: verdana, sans-serif;
            text-align: left;
            text-indent: 5px;
            letter-spacing: -1px;
            white-space: pre-wrap;
            `,
          ]}
        >
          {part}
        </motion.div>
      ))}

      <motion.div
        animate={{
          borderWidth,
          borderStyle,
          borderColor,
          borderTop: 'none',
          borderRadius: `0 0 ${borderRadius}px ${borderRadius}px`,
          backgroundColor: secondaryColor,
          boxShadow: `4px 4px 0 0 ${boxShadowColor}`,
        }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width: 250px;
          height: 10px;
          margin: auto;
          padding: 0 20px;
          `,
        ]}
      />
    </div>
  )
}

export default MacroTextHandout
