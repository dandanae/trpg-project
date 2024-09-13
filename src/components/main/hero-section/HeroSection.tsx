import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface HeroSectionProps {
  imageUrl: string
  label: string
}

const HeroSection = ({ imageUrl, label }: HeroSectionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0%', '100%'],
  })

  const top = useTransform(scrollYProgress, [0, 1], ['0', '200dvh'])
  const size = useTransform(scrollYProgress, [0, 1], ['50dvh', '500dvh'])

  return (
    <section ref={ref} className="relative w-full h-[200dvh] flex overflow-hidden" aria-label={label}>
      {/* --- 격자무늬 --- */}
      <motion.div
        aria-hidden="true"
        style={{ top }}
        className="absolute inset-0 w-full h-full bg-[url('https://blog.kakaocdn.net/dn/dcjxAs/btsIyCvuuJe/JZPhfWFlclUvZiEARQvV00/img.png')] opacity-5"
      />
      <motion.div style={{ top }} className="absolute h-[100dvh] left-0 flex items-center justify-center w-full">
        <div className="relative flex items-center justify-center w-full h-full">
          {/* --- 이미지 --- */}
          <motion.div
            role="img"
            aria-label={`Hero image of ${label}`}
            style={{ width: size, height: size, backgroundImage: `url('${imageUrl}')` }}
            className="absolute rounded-full overflow-hidden bg-center tablet:bg-[length:2000px] under-tablet:bg-[length:1500px]"
          />
          {/* --- 좌우 글씨 --- */}
          {['left', 'right'].map((side) => (
            <span
              key={side}
              className={`absolute text-6xl text-primary select-none bubble mix-blend-difference transition-all duration-500 under-desktop:text-5xl
                ${
                  side === 'right'
                    ? '-scale-x-[1] desktop:right-40 under-desktop:bottom-20'
                    : 'desktop:left-40 under-desktop:top-20'
                }`}
            >
              {label}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
