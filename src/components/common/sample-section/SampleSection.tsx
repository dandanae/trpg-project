import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import { toast } from 'react-toastify'
import { scriptIsDark } from '@/components/scripts/ScriptAtoms'
import { spring50030 } from '@/components/variants/Variants'

interface SampleSectionProps {
  copyString: string
  children: React.ReactNode
}

const SampleSection = ({ copyString, children }: SampleSectionProps) => {
  const [isDark, setIsDark] = useAtom(scriptIsDark)

  const copy = () => {
    navigator.clipboard
      .writeText(copyString)
      .then(() => {
        toast('매크로 복사에 성공했어요')
      })
      .catch(() => {
        toast('매크로 복사에 실패했어요. 다시 시도해 주세요.')
      })
  }

  return (
    <section
      className={`relative flex items-center justify-center w-full rounded-lg py-3
    ${isDark ? 'bg-[#1f1f1f]' : 'bg-[#f1f1f1]'}`}
    >
      <div className="absolute top-5 right-5">
        <div className="flex items-center justify-center gap-1.5">
          <span className="text-sm font-bold text-white mix-blend-difference">다크모드</span>
          <button
            type="button"
            className={`w-12 flex items-center rounded-full cursor-pointer transition-all duration-500 outline-none
          ${isDark ? 'justify-end bg-secondary' : 'bg-cblack/10'}`}
            onClick={() => setIsDark((pv) => !pv)}
          >
            <motion.div layout transition={spring50030} className="w-5 h-5 m-1 bg-white rounded-full" />
          </button>
        </div>
      </div>
      <button type="button" onClick={copy} className="p-5">
        {children}
      </button>
    </section>
  )
}

export default SampleSection
