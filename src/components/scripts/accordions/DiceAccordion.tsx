import { useSetAtom } from 'jotai'
import { diceLabel } from '@/components/macros'
import { scriptMacroIndex } from '../ScriptAtoms'
import AccordionBase from './AccordionBase'

interface DiceAccordionProps {
  label: string
  children: React.ReactNode
}

const DiceAccordion = ({ label, children }: DiceAccordionProps) => {
  const setMacroIndex = useSetAtom(scriptMacroIndex)
  const setDiceLabel = useSetAtom(diceLabel)

  return (
    <AccordionBase
      type="dice"
      label={`🎲 ${label} 판정`}
      onClick={() => {
        setMacroIndex(3)
        setDiceLabel(`🎲 ${label} 판정`)
      }}
    >
      {children}
    </AccordionBase>
  )
}
export default DiceAccordion
