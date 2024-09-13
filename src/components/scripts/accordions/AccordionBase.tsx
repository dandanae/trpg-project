import { motion } from 'framer-motion'
import { useState } from 'react'
import { accordionContainer, reverse, toLiftItem } from '@/components/variants/Variants'

interface AccordionBaseProps {
  id?: string
  type: 'chapter' | 'dice' | 'object' | 'location' | 'section' | 'rp'
  label: string
  onClick?: () => void
  children: React.ReactNode
}

const colors = {
  chapter: {
    border: 'border-vSecondary-600',
    bg: 'bg-vSecondary-600',
    bgDark: 'bg-vSecondary-600',
    text: 'text-white',
  },
  dice: { border: 'border-cyan-600', bg: 'bg-cyan-50', bgDark: 'bg-cyan-600', text: 'text-cyan-600' },
  object: { border: 'border-sky-600', bg: 'bg-sky-50', bgDark: 'bg-sky-600', text: 'text-sky-600' },
  location: { border: 'border-blue-600', bg: 'bg-blue-50', bgDark: 'bg-blue-600', text: 'text-blue-600' },
  section: { border: 'border-indigo-600', bg: 'bg-indigo-50', bgDark: 'bg-indigo-600', text: 'text-indigo-600' },
  rp: { border: 'border-violet-600', bg: 'bg-violet-50', bgDark: 'bg-violet-600', text: 'text-violet-600' },
} as const

const AccordionBase = ({ id, type, label, onClick, children }: AccordionBaseProps) => {
  const [isAccrodianOpen, setIsAccordionOpen] = useState<boolean>(false)

  return (
    <motion.div id={id} variants={toLiftItem} className="flex flex-col items-center justify-center w-full">
      <motion.div
        initial="closed"
        animate={isAccrodianOpen ? 'open' : 'closed'}
        className="relative flex flex-col items-center justify-center w-full"
      >
        <div
          className={`relative flex items-center justify-center w-full my-5 border-t border-dashed ${colors[type].border}`}
        >
          <button
            type="button"
            onClick={() => {
              setIsAccordionOpen((pv) => !pv)
              if (onClick) onClick()
            }}
            className={`absolute flex items-center justify-center gap-1 px-3 py-1 font-black rounded-full border ${colors[type].border} ${colors[type].bg} ${colors[type].text}`}
          >
            {label}
            <motion.span variants={reverse} className="select-none">
              ▼
            </motion.span>
          </button>
        </div>
        <motion.div
          variants={accordionContainer}
          className="flex flex-col items-center justify-start w-full gap-2 p-2 overflow-hidden origin-top"
        >
          {children}
          <div
            className={`relative flex items-center justify-center w-full my-5 border-t border-dashed ${colors[type].border}`}
          >
            <button
              type="button"
              onClick={() => setIsAccordionOpen(false)}
              className={`absolute flex items-center justify-center gap-1 px-3 py-1 font-black rounded-full border text-white ${colors[type].border} ${colors[type].bgDark}`}
            >
              × {label} ×
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
export default AccordionBase
