import { useAtomValue } from 'jotai'
import { motion } from 'framer-motion'
import {
  dialogBorderColor,
  dialogBorderWidth,
  dialogColor,
  dialogContent,
  dialogFontStyle,
  dialogFontWeight,
} from './MacroDialogAtoms'

const MacroDialog = () => {
  const content = useAtomValue(dialogContent)

  const borderWidth = useAtomValue(dialogBorderWidth)
  const borderColor = useAtomValue(dialogBorderColor)
  const fontStyle = useAtomValue(dialogFontStyle)
  const fontWeight = useAtomValue(dialogFontWeight)
  const color = useAtomValue(dialogColor)

  const contentParts = content.split('\n').map((part) => {
    return `${part !== '' ? part : ' '}`
  })

  return (
    <div className="flex flex-col text-center w-fit h-fit">
      <div className="flex">
        <motion.div
          animate={{
            borderTop: `${borderWidth}px solid ${borderColor}`,
            borderLeft: `${borderWidth}px solid ${borderColor}`,
          }}
          css={[`display: inline-block; width: 10px; height: 10px; margin: auto;`]}
        />
        <div css={[`display: inline-block; width: 240px; height: 10px; margin: auto;`]} />
      </div>

      {contentParts.map((part) => (
        <motion.div
          key="content"
          animate={{ fontStyle, fontWeight, color }}
          transition={{ duration: 0.5 }}
          css={[
            `
            display: block; width: 210px; margin: auto; padding: 0 20px; font-size: 13px; line-height: 150%; font-family: verdana, sans-serif; word-break: keep-all; white-space: pre-wrap; letter-spacing: -1px;
            `,
          ]}
        >
          {part}
        </motion.div>
      ))}
      <div className="flex">
        <div css={[`display: inline-block; width: 240px; height: 10px; margin: auto;)`]} />
        <motion.div
          animate={{
            borderRight: `${borderWidth}px solid ${borderColor}`,
            borderBottom: `${borderWidth}px solid ${borderColor}`,
          }}
          css={[`display: inline-block; width: 10px; height: 10px; margin: auto;)`]}
        />
      </div>
    </div>
  )
}

export default MacroDialog
