import { motion } from 'framer-motion'
import { spring100010, spring50030 } from '../variants/Variants'

interface DetailButtonProps {
  label: string
  url: string
}

const OpenOriginButton = ({ label, url }: DetailButtonProps) => {
  return (
    <div>
      <motion.button
        type="button"
        onClick={() => window.open(url, '_blank')}
        whileHover={{
          scale: 1.1,
          transition: spring100010,
        }}
        whileTap={{
          scale: 0.9,
          transition: spring50030,
        }}
        className="flex items-center justify-center px-5 py-2 text-sm font-bold transition-colors duration-300 bg-white rounded-full text-primary ring-1 ring-primary hover:bg-primary hover:text-white"
      >
        {label}
      </motion.button>
    </div>
  )
}

export default OpenOriginButton
