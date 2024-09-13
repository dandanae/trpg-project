import { motion } from 'framer-motion'
import { useSetAtom } from 'jotai'
import { dialogContent } from '@/components/macros'
import { toLiftItem, scriptItem } from '@/components/variants/Variants'
import { scriptMacroIndex } from '../ScriptAtoms'

interface DialogProps {
  label: string
}

const Dialog = ({ label }: DialogProps) => {
  const setMacroIndex = useSetAtom(scriptMacroIndex)
  const setDialogContent = useSetAtom(dialogContent)

  return (
    <motion.div variants={toLiftItem} className="w-full">
      <motion.button
        type="button"
        whileHover="hover"
        whileTap="tap"
        onClick={() => {
          setMacroIndex(4)
          setDialogContent(label)
        }}
        className="flex items-center justify-start w-full p-2 text-sm overflow-clip"
      >
        <motion.span
          variants={scriptItem}
          className="flex items-center justify-start px-3 py-2 font-extrabold text-left origin-left border rounded-t-full rounded-r-full text-zinc-600 border-zinc-600 bg-zinc-50"
        >
          {label}
        </motion.span>
      </motion.button>
    </motion.div>
  )
}

export default Dialog
