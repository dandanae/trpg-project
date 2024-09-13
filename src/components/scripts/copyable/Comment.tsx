import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { toLiftItem, scriptItem } from '@/components/variants/Variants'
import { scriptIsDark } from '../ScriptAtoms'

interface CommentProps {
  label: string
}

const Comment = ({ label }: CommentProps) => {
  const isDark = useAtomValue(scriptIsDark)

  return (
    <motion.div variants={toLiftItem} className="w-full">
      <motion.button
        type="button"
        whileHover="hover"
        whileTap="tap"
        onClick={() =>
          navigator.clipboard.writeText(
            `/desc [${label}](#" style="opacity: 0.5; font-style: normal; font-weight: normal; font-size: 12px; line-height: 150%; font-family: verdana, sans-serif; letter-spacing: -1px; text-decoration: none; color: ${
              isDark ? '#b3b3b3' : '#333333'
            }; cursor: default;)`,
          )
        }
        className="flex items-center justify-start w-full p-1.5 text-sm overflow-clip"
      >
        <motion.span
          variants={scriptItem}
          className="flex items-center justify-start text-left origin-left border-b border-dashed border-cblack/30 text-cblack/50"
        >
          {label}
        </motion.span>
      </motion.button>
    </motion.div>
  )
}

export default Comment
