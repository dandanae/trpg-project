import HeroSection from '@/components/main/hero-section/HeroSection'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

const Home = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4])

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
      return updatedIndexes
    })
  }

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 4) % 5)

      return updatedIndexes
    })
  }

  const positions = ['left2', 'left1', 'center', 'right1', 'right2']
  const imageVariants = {
    left2: { x: '-180%', scale: 0.6, zIndex: 1 },
    left1: { x: '-100%', scale: 0.8, zIndex: 2 },
    center: { x: '0%', scale: 1, zIndex: 3 },
    right1: { x: '100%', scale: 0.8, zIndex: 2 },
    right2: { x: '180%', scale: 0.6, zIndex: 1 },
  }

  const images = [
    'https://blog.kakaocdn.net/dn/IAgtt/btsI4d2ujcb/HkTkKekwtuYLuhWtbkJl4K/img.gif',
    'https://blog.kakaocdn.net/dn/IAgtt/btsI4d2ujcb/HkTkKekwtuYLuhWtbkJl4K/img.gif',
    'https://blog.kakaocdn.net/dn/IAgtt/btsI4d2ujcb/HkTkKekwtuYLuhWtbkJl4K/img.gif',
    'https://blog.kakaocdn.net/dn/IAgtt/btsI4d2ujcb/HkTkKekwtuYLuhWtbkJl4K/img.gif',
    'https://blog.kakaocdn.net/dn/IAgtt/btsI4d2ujcb/HkTkKekwtuYLuhWtbkJl4K/img.gif',
  ]

  return (
    <>
      <HeroSection
        imageUrl="https://blog.kakaocdn.net/dn/IAgtt/btsI4d2ujcb/HkTkKekwtuYLuhWtbkJl4K/img.gif"
        label="HAECHAN"
      />

      {/* <div className="flex flex-col items-center justify-center w-full h-screen overflow-hidden">
        {[1, 2, 3, 4, 5].map((image, index) => (
          <motion.button
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            key={image}
            type="button"
            className="absolute w-[300px] h-[500px] bg-white rounded-lg flex justify-center items-center overflow-hidden group"
          >
            {image}
            <div className="absolute flex items-center justify-center w-full h-full p-5 text-4xl transition-all duration-500 opacity-0 bg-primary bubble text-cwhite group-hover:opacity-75">
              CLICK TO MAKE!
            </div>
          </motion.button>
        ))}
        <div className="flex flex-row gap-3 mt-[800px]">
          <button type="button" className="px-4 py-2 text-white bg-indigo-400 rounded-md" onClick={handleBack}>
            Back
          </button>
          <button type="button" className="px-4 py-2 text-white bg-indigo-400 rounded-md" onClick={handleNext}>
            Next
          </button>
        </div>
      </div> */}

      {/* <section
        ref={ref}
        className="flex items-center justify-center w-full h-screen gap-5 p-24 under-foldable:flex-col under-foldable:overflow-y-auto under-foldable:justify-start"
      >
        <div className="flex w-full h-full min-h-[50dvh] bg-white rounded-lg">사이쥬 </div>
        <div className="flex w-full h-full min-h-[50dvh] bg-white rounded-lg">사이쥬 </div>
        <div className="flex w-full h-full min-h-[50dvh] bg-white rounded-lg">사이쥬 </div>
        <div className="flex w-full h-full min-h-[50dvh] bg-white rounded-lg">사이쥬 </div>
      </section> */}
      {/* <HeroTitleSection title="MACROS">
        <HeroTitleCardButton label="CLICK TO MAKE" onClick={() => router.push('/macro_dice')}>
          <MacroDiceExample />
        </HeroTitleCardButton>
        <HeroTitleCardButton label="CLICK TO MAKE" onClick={() => router.push('/macro_simple')}>
          <MacroSimpleHandoutExample />
        </HeroTitleCardButton>
        <HeroTitleCardButton label="CLICK TO MAKE" onClick={() => router.push('/macro_box')}>
          <MacroBoxHandoutExample />
        </HeroTitleCardButton>
        <HeroTitleCardButton label="CLICK TO MAKE" onClick={() => router.push('/macro_title')}>
          <MacroTitleCardExample />
        </HeroTitleCardButton> */}
      {/* <HeroTitleCardButton label="CLICK TO MAKE" onClick={() => router.push('/macro_title')}>
          <MacroMessage />
        </HeroTitleCardButton> */}
      {/* </HeroTitleSection> */}
    </>
  )
}

export default Home
