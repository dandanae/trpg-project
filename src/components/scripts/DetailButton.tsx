import { motion } from 'framer-motion'
import { overlay } from 'overlay-kit'
import ReactModal from 'react-modal'
import { spring100010, spring50030, toLiftItem } from '../variants/Variants'

interface DetailButtonProps {
  label: string
  children: React.ReactNode
}

const DetailButton = ({ label, children }: DetailButtonProps) => {
  const openModal = () => {
    overlay.open(({ isOpen, close, unmount }) => {
      return (
        <ReactModal
          isOpen={isOpen}
          onRequestClose={() => {
            close()
            setTimeout(() => unmount(), 1000)
          }}
          ariaHideApp={false}
          shouldCloseOnOverlayClick
          closeTimeoutMS={500}
          overlayClassName="fixed inset-0 flex justify-center items-center bg-primary/20 backdrop-blur-lg"
          className="modal-content-wrapdevper"
        >
          <motion.div
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={{
              open: { y: 0, transition: spring50030('beforeChildren', 0.1) },
              closed: { y: -200, transition: spring50030('afterChildren', 0.1) },
            }}
            className="relative flex flex-col w-[500px] max-h-[800px] p-5 bg-white rounded-lg shadow-lg overflow-y-auto"
          >
            <motion.span
              initial={{ rotate: 0 }}
              onTap={() => {
                close()
                setTimeout(() => unmount(), 1000)
              }}
              whileHover={{ rotate: 180 }}
              transition={spring100010}
              className="absolute z-10 cursor-pointer select-none top-4 right-4 material-symbols-rounded hover:text-secondary"
            >
              close
            </motion.span>
            <motion.p variants={toLiftItem} className="mb-2 text-xl font-extrabold text-center">
              {label}
            </motion.p>
            <div className="flex flex-col gap-3 py-5 overflow-y-auto text-sm indent-2">{children}</div>
          </motion.div>
        </ReactModal>
      )
    })
  }

  return (
    <div>
      <motion.button
        type="button"
        onClick={openModal}
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

export default DetailButton
