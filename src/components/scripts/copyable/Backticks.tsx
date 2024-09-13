import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { toLiftItem, scriptItem } from '@/components/variants/Variants'
import { scriptColor, scriptIsDark, scriptPrimaryColor, scriptSecondaryColor } from '../ScriptAtoms'

interface BackticksProps {
  label: string
}

const Backticks = ({ label }: BackticksProps) => {
  const isDark = useAtomValue(scriptIsDark)

  const primaryColor = useAtomValue(scriptPrimaryColor)
  const secondaryColor = useAtomValue(scriptSecondaryColor)
  const color = useAtomValue(scriptColor)

  const extractWords = (): string => {
    const regex = /``([^`]+)``/g
    const trimmedLabel = label.trim()

    const splits = trimmedLabel.split(regex).filter(Boolean)
    const matches = trimmedLabel.match(regex) || []

    if (splits.length === 0 && matches.length === 0) return ''

    return splits
      .map((split) => {
        const isMatch = matches.some((match) => match.replace(/`/g, '') === split)
        const suffix = isMatch
          ? `(#" style="display: inline-block; padding: 5px 10px; border-radius: 99px; background-color: ${primaryColor}; font-style: normal; font-weight: bold; font-family: verdana, sans-serif; letter-spacing: -1px; text-decoration: none; color: ${secondaryColor}; cursor: default;)`
          : `(#" style="font-family: verdana, sans-serif; font-style: normal; letter-spacing: -1px; text-decoration: none; color: ${
              isDark ? '#b3b3b3' : '#333333'
            }; cursor: default;)`

        return `[${split}]${suffix}`
      })
      .join('')
  }

  return (
    <motion.div variants={toLiftItem} className="w-full">
      <motion.button
        type="button"
        whileHover="hover"
        whileTap="tap"
        onClick={() => navigator.clipboard.writeText(`/desc ${extractWords()}`)}
        className="flex items-center justify-start w-full p-1.5 text-sm overflow-clip"
      >
        <motion.span
          variants={scriptItem}
          className="flex items-center justify-start text-left origin-left border-b border-dashed border-cblack/30"
        >
          {label}
        </motion.span>
      </motion.button>
    </motion.div>
  )
}

export default Backticks
