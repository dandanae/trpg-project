import { motion } from 'framer-motion'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { spring100010, toLiftItem } from '../../variants/Variants'

interface CopyableImageProps {
  alt: '세션카드' | '이미지'
  width: number
  height: number
  imageUrl: string
}

const CopyableImage = ({ alt, width, height, imageUrl }: CopyableImageProps) => {
  return (
    <motion.div
      role="button"
      tabIndex={0}
      variants={toLiftItem}
      whileTap={{ scale: 0.9 }}
      transition={spring100010}
      onClick={() => {
        navigator.clipboard.writeText(`/desc [이미지](${imageUrl})`)
        toast(`🎉 ${alt}가 복사되었어요.`)
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          navigator.clipboard.writeText(`/desc [이미지](${imageUrl})`)
          toast(`🎉 ${alt}가 복사되었어요.`)
        }
      }}
      className="relative mx-auto border cursor-pointer select-none w-fit h-fit group"
    >
      <Image
        alt={alt}
        width={width}
        height={height}
        src={imageUrl}
        className="w-full transition-all duration-500 border-none rounded-lg group-hover:blur-sm"
      />
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full opacity-0 group-hover:opacity-100">
        <div className="flex items-center justify-center px-4 py-2 text-xs font-black text-white transition-all duration-500 scale-0 rounded-full shadow-lg bg-primary group-hover:scale-100">
          클릭하면 {alt} 주소를 복사할 수 있어요. 😊
        </div>
      </div>
    </motion.div>
  )
}

export default CopyableImage
