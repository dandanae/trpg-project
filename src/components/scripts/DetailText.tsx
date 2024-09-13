import { motion } from 'framer-motion'
import { toLiftItem } from '../variants/Variants'

interface DetailTextProps {
  label: string
  isLarge?: boolean
  isBold?: boolean
  isColor?: boolean
}

const DetailText = ({ label, isLarge, isBold, isColor }: DetailTextProps) => {
  return (
    <motion.span
      variants={toLiftItem}
      className={`${isLarge && 'text-xl'} ${isBold && 'font-extrabold'} ${isColor && 'text-primary'}`}
    >
      {label}
    </motion.span>
  )
}

export default DetailText
