import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChromePicker } from 'react-color'
import tw from 'twin.macro'
import { toLiftItemVatiants } from '@/components/variants/Variants'

interface InputTextSizeProps {
  id: string
  label: string
  width: number
  setWidth: (width: number) => void
  height: number
  setheight: (height: number) => void
}

const InputTextSize = ({ id, label, width, setWidth, height, setheight }: InputTextSizeProps) => {
  const [isColorPickerOpen, setIsColorPickerOpen] = useState<boolean>(false)

  return (
    <motion.label htmlFor={id} variants={toLiftItemVatiants} className="relative z-20 flex items-center gap-5">
      <span className="text-sm font-bold min-w-24">{label}</span>
      <span className="material-symbols-rounded select-none">chevron_right</span>
      <input
        id={`${id}-width`}
        aria-label="width"
        aria-labelledby={`${id}-width`}
        type="number"
        inputMode="numeric"
        pattern="[0-9]*"
        value={width}
        onChange={(e) => setWidth(Number(e.target.value))}
        onWheel={(e) => (e.target as HTMLElement).blur()}
        className="relative z-10 flex items-center w-full h-10 px-3 text-sm transition-all duration-500 bg-transparent border-b border-dashed outline-none border-cblack hover:border-secondary focus:border-solid focus:border-secondary focus:bg-secondary/10"
      />
      X
      <input
        id={`${id}-height`}
        aria-label="height"
        aria-labelledby={`${id}-height`}
        type="number"
        inputMode="numeric"
        pattern="[0-9]*"
        value={height}
        onChange={(e) => setheight(Number(e.target.value))}
        onWheel={(e) => (e.target as HTMLElement).blur()}
        className="relative z-10 flex items-center w-full h-10 px-3 text-sm transition-all duration-500 bg-transparent border-b border-dashed outline-none border-cblack hover:border-secondary focus:border-solid focus:border-secondary focus:bg-secondary/10"
      />
    </motion.label>
  )
}

export default InputTextSize
