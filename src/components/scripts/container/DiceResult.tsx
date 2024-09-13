import { toLiftItem } from '@/components/variants/Variants'
import { motion } from 'framer-motion'

interface DiceResultProps {
  result: '성공' | '실패'
  children: React.ReactNode
}

const DiceResult = ({ result, children }: DiceResultProps) => {
  const borderColor = result === '성공' ? 'border-lime-500' : 'border-rose-500'
  const bgColor = result === '성공' ? 'bg-lime-50' : 'bg-rose-50'
  const textColor = result === '성공' ? 'text-lime-500' : 'text-rose-500'

  return (
    <div
      className={`flex flex-col items-center justify-center w-full p-2 border border-dashed rounded-lg ${borderColor} ${bgColor}`}
    >
      <motion.span variants={toLiftItem} className={`flex items-center justify-start ${textColor} font-black`}>
        {result === '성공' ? (
          <span className="select-none material-symbols-rounded">check_circle</span>
        ) : (
          <span className="select-none material-symbols-rounded">cancel</span>
        )}
      </motion.span>
      {children}
    </div>
  )
}

export default DiceResult
