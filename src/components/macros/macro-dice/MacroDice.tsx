import { useAtomValue } from 'jotai'
import { motion } from 'framer-motion'
import {
  diceBorderColor,
  diceBorderRadius,
  diceBorderStyle,
  diceBorderWidth,
  diceBoxShadowColor,
  diceColor,
  diceFontStyle,
  diceFontWeight,
  diceLabel,
  dicePrimaryColor,
  diceSecondaryColor,
} from './MacroDiceAtoms'

const MacroDice = () => {
  const label = useAtomValue(diceLabel)
  const borderWidth = useAtomValue(diceBorderWidth)
  const borderStyle = useAtomValue(diceBorderStyle)
  const borderColor = useAtomValue(diceBorderColor)
  const borderRadius = useAtomValue(diceBorderRadius)
  const boxShadowColor = useAtomValue(diceBoxShadowColor)
  const primaryColor = useAtomValue(dicePrimaryColor)
  const secondaryColor = useAtomValue(diceSecondaryColor)
  const fontStyle = useAtomValue(diceFontStyle)
  const fontWeight = useAtomValue(diceFontWeight)
  const color = useAtomValue(diceColor)

  return (
    <motion.div
      aria-label={label}
      animate={{
        borderWidth,
        borderStyle,
        borderColor,
        borderRadius,
        boxShadow: `0 4px 0 0 ${boxShadowColor}`,
        backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
        fontStyle,
        fontWeight,
        color,
      }}
      css={[
        `
        display: inline-block;
        height: fit-content;
        margin: auto;
        padding: 10px 15px;
        font-size: 13px;
        line-height: 150%;
        font-family: verdana, sans-serif;
        letter-spacing: -1px;
        `,
      ]}
      transition={{ duration: 0.5 }}
    >
      {label}
    </motion.div>
  )
}

export default MacroDice
