import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import CommonNavigationButton from './CommonNavigationButton'

const CommonNavigation = () => {
  const router = useRouter()
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  // ESC 누르면 nav 닫음
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsNavOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <motion.button
        type="button"
        aria-expanded={isNavOpen}
        aria-label={isNavOpen ? 'close navigation' : 'open navigation'}
        animate={isNavOpen ? { rotateY: 180 } : { rotate: 0 }}
        transition={{ duration: 0.4 }}
        onClick={() => setIsNavOpen((pv) => !pv)}
        className="fixed z-50 outline-none top-5 left-5 group"
      >
        <div
          className={`flex items-center justify-center w-12 h-12 transition-all duration-500 rounded-full text-cwhite
            ${!isNavOpen ? 'bg-primary group-hover:bg-secondary' : 'bg-secondary group-hover:bg-tertiary'}`}
        >
          <span className="text-base select-none material-symbols-rounded select-none">
            {isNavOpen ? 'close' : 'menu'}
          </span>
        </div>
      </motion.button>

      <motion.div
        role="navigation"
        aria-hidden={!isNavOpen}
        initial="closed"
        animate={isNavOpen ? 'open' : 'closed'}
        variants={{
          open: { translateX: '0%', transition: { when: 'beforeChildren', staggerChildren: 0.2 } },
          closed: { translateX: '-100%', transition: { when: 'afterChildren', staggerChildren: 0.2 } },
        }}
        className="fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-screen h-screen gap-5 p-24 text-6xl font-black bg-cwhite/50 backdrop-blur-xl bubble"
      >
        <CommonNavigationButton label="MACROS" onClick={() => router.push('/macros').then(() => setIsNavOpen(false))} />
        <CommonNavigationButton
          label="SCRIPTS"
          onClick={() => router.push('/scripts').then(() => setIsNavOpen(false))}
        />
        <CommonNavigationButton label="CONTACT" onClick={() => undefined} isPrepared />
        <CommonNavigationButton label="USERCSS" onClick={() => undefined} isPrepared />
      </motion.div>
    </>
  )
}

export default CommonNavigation
