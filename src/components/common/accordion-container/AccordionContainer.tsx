import { useState } from 'react'
import { motion } from 'framer-motion'
import { accordionContainer, reverse } from '../../variants/Variants'

interface AccordionContainerProps {
  icon: string
  label: string
  children: React.ReactNode
}
const AccordionContainer = ({ icon, label, children }: AccordionContainerProps) => {
  const [isAccrodianOpen, setIsAccordionOpen] = useState<boolean>(false)

  return (
    <motion.div
      animate={isAccrodianOpen ? 'open' : 'closed'}
      className="flex flex-col items-center justify-center p-3 border border-dashed rounded-lg border-primary"
    >
      <button
        type="button"
        onClick={() => setIsAccordionOpen((pv) => !pv)}
        className={`flex flex-col items-center justify-center w-full transition-colors duration-500 hover:text-primary
          ${isAccrodianOpen && 'text-primary'}`}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start gap-2">
            <span className="text-lg select-none material-symbols-rounded">{icon}</span>
            <span className="text-lg font-extrabold">{label}</span>
          </div>
          <motion.span variants={reverse} className="select-none material-symbols-rounded">
            expand_more
          </motion.span>
        </div>
      </button>
      <motion.div variants={accordionContainer} className="w-full overflow-hidden origin-top">
        <motion.div className="flex flex-col items-start justify-start w-full gap-2 p-2">{children}</motion.div>
      </motion.div>
    </motion.div>
  )
}

export default AccordionContainer
