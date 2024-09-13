import { thoTitle, thoContent, ihoTitle, ihoContent } from '@/components/macros'
import { toLiftItem } from '@/components/variants/Variants'
import { motion } from 'framer-motion'
import { useSetAtom } from 'jotai'
import { scriptMacroIndex } from '../ScriptAtoms'

interface HandoutProps {
  title: string
  content: string
}

const Handout = ({ title, content }: HandoutProps) => {
  const setMacroIndex = useSetAtom(scriptMacroIndex)

  // index 5
  const setThoTItle = useSetAtom(thoTitle)
  const setThoContent = useSetAtom(thoContent)
  // index 6
  const setIhoTitle = useSetAtom(ihoTitle)
  const setIhoContent = useSetAtom(ihoContent)

  const handleClick = () => {
    setMacroIndex(5)
    setThoTItle(title)
    setThoContent(content || '')
    setIhoTitle(title)
    setIhoContent(content || '')
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex flex-col items-center justify-center w-full p-2 transition-colors duration-500 border border-orange-600 border-dashed rounded-lg bg-orange-50 hover:border-orange-800 group hover:bg-orange-200"
    >
      <motion.span
        variants={toLiftItem}
        className="flex items-center justify-start font-black text-orange-600 transition-colors duration-500 group-hover:text-orange-800"
      >
        {title}
      </motion.span>
      <motion.div variants={toLiftItem} className="text-sm break-words whitespace-pre-wrap">
        {content}
      </motion.div>
    </button>
  )
}

export default Handout
