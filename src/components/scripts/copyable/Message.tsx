import { motion } from 'framer-motion'
import { useSetAtom } from 'jotai'
import { toLiftItem, scriptItem } from '@/components/variants/Variants'
import { messageLabel } from '@/components/macros'
import { scriptMacroIndex } from '../ScriptAtoms'

interface MessageProps {
  label: string
}

const Message = ({ label }: MessageProps) => {
  const setMacroIndex = useSetAtom(scriptMacroIndex)
  const setMessageContent = useSetAtom(messageLabel)

  return (
    <motion.div variants={toLiftItem} className="w-full">
      <motion.button
        type="button"
        whileHover="hover"
        whileTap="tap"
        onClick={() => {
          setMacroIndex(8)
          setMessageContent(label)
        }}
        className="flex items-center justify-start w-full p-2 text-sm overflow-clip"
      >
        <motion.span
          variants={scriptItem}
          className="flex items-center justify-start px-3 py-2 font-extrabold text-left text-indigo-600 origin-left border border-indigo-600 rounded-t-full rounded-r-full bg-indigo-50"
        >
          {label}
        </motion.span>
      </motion.button>
    </motion.div>
  )
}

export default Message
