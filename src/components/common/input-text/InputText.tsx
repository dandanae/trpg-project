import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChromePicker } from 'react-color'
import tw from 'twin.macro'
import { toLiftItem } from '@/components/variants/Variants'
import ReactModal from 'react-modal'

interface InputTextProps {
  id: string
  label: string
  value: string
  setValue: (label: string) => void
  disable?: boolean
  hasColorPicker?: boolean
}

const InputText = ({ id, label, value, setValue, disable, hasColorPicker }: InputTextProps) => {
  const [isColorPickerOpen, setIsColorPickerOpen] = useState<boolean>(false)
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const x = e.clientX
    const y = e.clientY
    setClickPosition({ x, y })
    setIsColorPickerOpen((pv) => !pv)
  }

  return (
    <motion.label htmlFor={id} variants={toLiftItem} className="relative z-20 flex items-center w-full gap-5">
      <span className="text-sm font-bold min-w-24">{label}</span>
      <span className="select-none material-symbols-rounded">chevron_right</span>
      <input
        id={id}
        aria-label={label}
        aria-labelledby={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="relative z-10 flex items-center w-full h-10 px-3 text-sm transition-all duration-500 bg-transparent border-b border-dashed outline-none border-cblack hover:border-secondary focus:border-solid focus:border-secondary focus:bg-secondary/10 disabled:bg-stone-100"
        disabled={disable}
      />
      {hasColorPicker && (
        <button
          type="button"
          aria-label="open color picker"
          onClick={handleClick}
          className="flex items-center justify-center rounded-lg min-w-8 min-h-8 ring-1 ring-cblack/30"
        >
          <div css={[tw`rounded-full min-h-6 min-w-6 ring-1 ring-gray-300`, `background-color: ${value}`]} />
        </button>
      )}
      <ReactModal
        isOpen={isColorPickerOpen}
        onRequestClose={() => setIsColorPickerOpen(false)}
        ariaHideApp={false}
        shouldCloseOnOverlayClick
        closeTimeoutMS={500}
        overlayClassName="fixed inset-0 w-full h-full"
        className="modal-content-wrapdevper"
      >
        <div
          data-testid="color-picker"
          aria-label="color picker"
          style={{ position: 'absolute', top: clickPosition.y - 200, left: clickPosition.x - 250 }}
        >
          <ChromePicker
            color={value}
            onChangeComplete={(color) => {
              if (setValue) setValue(color.hex)
            }}
            className="relative z-20"
          />
        </div>
      </ReactModal>
    </motion.label>
  )
}

export default InputText
