import { useSetAtom } from 'jotai'
import { diceLabel } from '@/components/macros'
import { scriptMacroIndex } from '../ScriptAtoms'
import AccordionBase from './AccordionBase'

interface LocationAccordionProps {
  id?: string
  label: string
  children: React.ReactNode
}

const LocationAccordion = ({ id, label, children }: LocationAccordionProps) => {
  const setMacroIndex = useSetAtom(scriptMacroIndex)
  const setDiceLabel = useSetAtom(diceLabel)

  return (
    <AccordionBase
      id={id}
      type="location"
      label={`📌 ${label}`}
      onClick={() => {
        setMacroIndex(3)
        setDiceLabel(`📌 ${label}`)
      }}
    >
      {children}
    </AccordionBase>
  )
}
export default LocationAccordion
