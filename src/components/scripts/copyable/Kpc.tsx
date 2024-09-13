import { motion } from 'framer-motion'
import tw from 'twin.macro'
import { useAtomValue } from 'jotai'
import { spring50030, toLiftItem } from '../../variants/Variants'
import { scripthonorifics } from '../ScriptAtoms'

interface RpProps {
  label: string
  honorificsLabel: string
}

const Kpc = ({ label, honorificsLabel }: RpProps) => {
  const honorifics = useAtomValue(scripthonorifics)

  return (
    <motion.div variants={toLiftItem} className="w-full">
      <motion.button
        type="button"
        initial="initial"
        animate="initial"
        whileHover="hover"
        whileTap="tap"
        className="flex items-center justify-end w-full p-2 overflow-clip"
      >
        <motion.span
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.1 },
            tap: { scale: 0.9 },
          }}
          transition={spring50030}
          className="text-sm text-left origin-right"
        >
          <div className="relative flex p-2.5 max-w-72 rounded-[20px] bg-[#E5E5EA]">
            <span
              css={[
                tw`absolute bottom-0 w-5 h-5 border-l-8 border-[#E5E5EA] -right-3`,
                `border-bottom-left-radius: 16px 8px;`,
              ]}
            />
            {honorifics ? honorificsLabel : label}
          </div>
        </motion.span>
      </motion.button>
    </motion.div>
  )
}

export default Kpc
