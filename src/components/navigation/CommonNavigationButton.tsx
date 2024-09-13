import { motion } from 'framer-motion'
import { spring100010, toLiftContainerVatiants } from '../variants/Variants'

interface CommonNavigationButtonProps {
  /** 영어만 가능 */
  label: string
  onClick: () => void
  isPrepared?: boolean
}

const CommonNavigationButton = ({ label, onClick, isPrepared }: CommonNavigationButtonProps) => {
  return (
    <motion.button
      type="button"
      aria-disabled={isPrepared}
      aria-label={isPrepared ? `${label} is comming soon` : label}
      variants={toLiftContainerVatiants}
      onClick={onClick}
      className={`group ${isPrepared ? 'cursor-default' : 'cursor-pointer'}`}
      disabled={isPrepared}
    >
      <motion.div
        initial={!isPrepared ? { rotate: 0 } : undefined}
        whileHover={!isPrepared ? { rotate: '5deg' } : undefined}
        transition={spring100010}
        className={`relative flex items-center justify-center transition-colors duration-300
          ${!isPrepared && 'group-hover:text-primary'}`}
      >
        {label}
        {isPrepared && (
          <div className="absolute px-2 text-base font-black text-white mpy-1 w-80 bg-primary">COMING SOON</div>
        )}
      </motion.div>
    </motion.button>
  )
}

export default CommonNavigationButton
