import { useAtom } from 'jotai'
import { motion } from 'framer-motion'
import { spring50030, toLiftItem } from '@/components/variants/Variants'
import { scripthonorifics } from '../ScriptAtoms'
import AccordionBase from './AccordionBase'

interface RpAccordionProps {
  id?: string
  name: string
  children: React.ReactNode
}

const RpAccordion = ({ id, name, children }: RpAccordionProps) => {
  const [honorifics, setHonorifics] = useAtom(scripthonorifics)
  return (
    <AccordionBase id={id} type="rp" label={`💬 ${name}`}>
      <div className="relative flex flex-col items-center justify-center w-full p-2 bg-white border border-dashed rounded-lg border-slate-600">
        <div className="absolute top-2 right-2">
          <div className="flex items-center justify-center gap-1.5">
            {/* <span className="text-sm font-bold text-white mix-blend-difference">KPC 존댓말</span> */}
            <button
              type="button"
              className={`w-12 flex items-center rounded-full cursor-pointer transition-all duration-500 outline-none
          ${honorifics ? 'justify-end bg-secondary' : 'bg-cblack/10'}`}
              onClick={() => setHonorifics((pv) => !pv)}
            >
              <motion.div layout transition={spring50030} className="w-5 h-5 m-1 bg-white rounded-full" />
            </button>
          </div>
        </div>
        <motion.span variants={toLiftItem} className="flex items-center justify-start mb-1 font-black text-slate-600">
          💬 {name}
        </motion.span>
        {children}
      </div>
    </AccordionBase>
  )
}
export default RpAccordion
