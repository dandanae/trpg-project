import { motion } from 'framer-motion'

import { useSetAtom } from 'jotai'
import { toLiftItem } from '@/components/variants/Variants'
import { diceLabel } from '@/components/macros'
import { scriptMacroIndex } from '../ScriptAtoms'
import AccordionBase from './AccordionBase'

interface ObjectAccordionProps {
  id?: string
  label: string
  children: React.ReactNode
}

const ObjectAccordion = ({ id, label, children }: ObjectAccordionProps) => {
  const setMacroIndex = useSetAtom(scriptMacroIndex)
  const setDiceLabel = useSetAtom(diceLabel)

  return (
    <AccordionBase
      id={id}
      type="object"
      label={`🔎 ${label}`}
      onClick={() => {
        setMacroIndex(3)
        setDiceLabel(`🔎 ${label}`)
      }}
    >
      <div className="flex flex-col items-center justify-center w-full p-2 bg-white border border-dashed rounded-lg border-sky-600">
        <motion.span variants={toLiftItem} className="flex items-center justify-start font-black text-sky-600">
          🔎 {label}
        </motion.span>
        {children}
      </div>
    </AccordionBase>
  )
}
export default ObjectAccordion
