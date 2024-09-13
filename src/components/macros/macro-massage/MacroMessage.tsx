import { useAtomValue } from 'jotai'
import { motion } from 'framer-motion'
import {
  messageBorderRadius,
  messageColor,
  messageFontStyle,
  messageFontWeight,
  messageLabel,
  messagePrimaryColor,
} from './MacroMessageAtoms'

const MacroMessage = () => {
  const label = useAtomValue(messageLabel)

  const borderRadius = useAtomValue(messageBorderRadius)
  const primaryColor = useAtomValue(messagePrimaryColor)
  const fontStyle = useAtomValue(messageFontStyle)
  const fontWeight = useAtomValue(messageFontWeight)
  const color = useAtomValue(messageColor)

  return (
    <div className="flex flex-col">
      <motion.div
        animate={{ borderRadius, backgroundColor: primaryColor, fontStyle, fontWeight, color }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width: fit-content;
          max-width: 300px;
          margin: auto;
          padding: 10px 20px;
          font-size: 13px;
          line-height: 150%;
          font-family: verdana, sans-serif;
          letter-spacing: -1px;
          `,
        ]}
      >
        {label}
      </motion.div>
      <motion.div
        animate={{ borderColor: primaryColor }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width: 16px;
          height: 8px;
          margin: auto;
          border-right: 8px solid;
          border-bottom-right-radius: 16px 8px;
          `,
        ]}
      />
    </div>
  )
}

export default MacroMessage
