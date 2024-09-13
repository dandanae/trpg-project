import { motion } from 'framer-motion'
import tw from 'twin.macro'
import { spring50030, toLiftItem } from '../../variants/Variants'

interface NpcProps {
  label: string
}

const Npc = ({ label }: NpcProps) => {
  return (
    <motion.div variants={toLiftItem} className="w-full">
      <motion.button
        type="button"
        initial="initial"
        animate="initial"
        whileHover="hover"
        whileTap="tap"
        className="flex items-center justify-start w-full p-2 overflow-clip"
      >
        <motion.span
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.1 },
            tap: { scale: 0.9 },
          }}
          transition={spring50030}
          className="text-sm text-left origin-left"
        >
          <div className="relative flex p-2.5 max-w-72 rounded-[20px] bg-[#007AFF] text-white">
            <span
              css={[
                tw`absolute bottom-0 w-5 h-5 border-r-8 border-[#007AFF] -left-3`,
                `border-bottom-right-radius: 16px 8px;`,
              ]}
            />
            {label}
          </div>
        </motion.span>
      </motion.button>
    </motion.div>
  )
}

export default Npc
