import { motion } from 'framer-motion'
import { toLiftItem } from '@/components/variants/Variants'

interface InputTextareaProps {
  id: string
  label: string
  value: string
  setValue: (label: string) => void
}

const InputTextArea = ({ id, label, value, setValue }: InputTextareaProps) => {
  return (
    <motion.label htmlFor={id} variants={toLiftItem} className="relative z-20 flex items-center w-full gap-5">
      <span className="text-sm font-bold min-w-24">{label}</span>
      <span className="select-none material-symbols-rounded">chevron_right</span>
      <textarea
        id={id}
        aria-label={label}
        aria-labelledby={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="relative z-10 flex items-center w-full h-24 p-3 text-sm transition-all duration-500 bg-transparent border border-dashed rounded-lg outline-none resize-none border-cblack hover:border-secondary focus:border-solid focus:border-secondary focus:bg-secondary/10"
      />
    </motion.label>
  )
}

export default InputTextArea
