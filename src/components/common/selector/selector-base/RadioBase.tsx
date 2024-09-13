import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import tw from 'twin.macro'
import { toLiftItem } from '@/components/variants/Variants'

interface SelectorBaseProps {
  id: string
  label: string
  buttons: string[]
  index: number
  setIndex: (index: number) => void
}

const SelectorBase = ({ id, label, buttons, index, setIndex }: SelectorBaseProps) => {
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 })

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect
      setDimensions({ width, height })
    })

    const buttonElement = document.getElementById(id)?.querySelector('button')
    if (buttonElement) {
      observer.observe(buttonElement)
    }

    return () => observer.disconnect()
  }, [id])

  const left = dimensions.width * index + 4 * (index + 1)

  return (
    <motion.div variants={toLiftItem} className="flex items-center w-full gap-5">
      <span className="text-sm font-bold min-w-24">{label}</span>
      <span className="text-base select-none material-symbols-rounded">chevron_right</span>
      <div
        id={id}
        className="relative flex items-center justify-center w-full h-10 gap-1 p-1 text-sm font-bold duration-500 rounded-lg select-none bg-tertiary/10 text-cblack"
      >
        <motion.div
          initial={{ left: 4 }}
          animate={{ left }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
          css={[
            tw`absolute p-2 rounded-lg bg-tertiary/30 ring-1 ring-tertiary`,
            { width: dimensions.width, height: dimensions.height },
          ]}
        />
        {buttons.map((button, idx) => (
          <button
            key={button}
            type="button"
            onClick={() => {
              setIndex(idx)
            }}
            className={`relative flex items-center justify-center w-full h-full rounded-md ${
              idx === index ? 'font-black text-tertiary' : ''
            }`}
          >
            {button}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

export default SelectorBase
