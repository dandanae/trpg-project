import { motion } from 'framer-motion'
import { toLiftItem } from '@/components/variants/Variants'

interface InfoProps {
  label: string
  children?: React.ReactNode
}

const Info = ({ label, children }: InfoProps) => {
  return (
    <motion.div
      variants={toLiftItem}
      className="flex flex-col items-center justify-center w-full p-2 border border-dashed rounded-lg border-primary bg-vPrimary-50"
    >
      <motion.span variants={toLiftItem} className="flex items-center justify-start gap-1 font-black">
        <span className="select-none material-symbols-rounded text-primary">brightness_alert</span>
        {label}
      </motion.span>
      {children}
    </motion.div>
  )
}

export default Info
