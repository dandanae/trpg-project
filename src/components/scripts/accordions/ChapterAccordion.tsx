import { useSetAtom } from 'jotai'
import { csChapter, csTItle } from '@/components/macros'
import { scriptMacroIndex } from '../ScriptAtoms'
import AccordionBase from './AccordionBase'

interface ChapterAccordionProps {
  id: string
  title: string
  children: React.ReactNode
}

const ChapterAccordion = ({ id, title, children }: ChapterAccordionProps) => {
  const setMacroIndex = useSetAtom(scriptMacroIndex)
  const setChapter = useSetAtom(csChapter)
  const setTItle = useSetAtom(csTItle)

  return (
    <AccordionBase
      id={id}
      type="chapter"
      label={`${id}. ${title}`}
      onClick={() => {
        setMacroIndex(2)
        setChapter(`Chapter ${id.length === 1 ? `0${id}` : id}`)
        setTItle(title)
      }}
    >
      <div className="flex flex-col items-center justify-start w-full p-3 my-2 text-left break-words whitespace-pre-wrap border border-dashed rounded-lg border-vSecondary-600 bg-vSecondary-50">
        {children}
      </div>
    </AccordionBase>
  )
}
export default ChapterAccordion
