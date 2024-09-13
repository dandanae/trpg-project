import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { toLiftItem, scriptItem } from '@/components/variants/Variants'
import { scriptIsDark } from '../ScriptAtoms'

interface DescProps {
  label: string
}

const Desc = ({ label }: DescProps) => {
  const isDark = useAtomValue(scriptIsDark)

  return (
    <motion.div variants={toLiftItem} className="w-full">
      <motion.button
        type="button"
        whileHover="hover"
        whileTap="tap"
        onClick={() =>
          navigator.clipboard.writeText(
            `/desc [${label}](#" style="font-family: verdana, sans-serif; font-style: normal; letter-spacing: -1px; text-decoration: none; color: ${
              isDark ? '#b3b3b3' : '#333333'
            }; cursor: default;)`,
          )
        }
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

export default Desc
