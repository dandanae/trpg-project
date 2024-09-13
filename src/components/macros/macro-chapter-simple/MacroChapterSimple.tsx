import { useAtomValue } from 'jotai'
import { motion } from 'framer-motion'
import { csPrimaryColor, csSecondaryColor, csColor, csChapter, csTItle } from './MacroChapterSimpleAtoms'

const MacroChapterSimple = () => {
  const chapter = useAtomValue(csChapter)
  const title = useAtomValue(csTItle)

  const primaryColor = useAtomValue(csPrimaryColor)
  const secondaryColor = useAtomValue(csSecondaryColor)
  const color = useAtomValue(csColor)

  return (
    <div className="flex flex-col w-fit h-fit">
      <motion.div
        animate={{ backgroundColor: primaryColor, color: secondaryColor }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width: fit-content;
          max-width: 250px;
          margin: auto;
          padding: 5px 10px;
          border-radius: 99px;
          font-style: normal;
          font-weight: bold;
          font-size: 11px;
          line-height: 150%;
          font-family: verdana, sans-serif;
          letter-spacing: -1px;
          `,
        ]}
      >
        {chapter}
      </motion.div>
      <div className="flex justify-center">
        <motion.div
          animate={{ color: primaryColor }}
          transition={{ duration: 0.5 }}
          css={[
            `
            display: inline-block;
            width: fit-content;
            margin: auto;
            padding: 5px 0;
            font-style: normal;
            font-weight: bold;
            font-size: 13px;
            line-height: 150%;
            font-family: verdana, sans-serif;
            letter-spacing: -1px;
            `,
          ]}
        >
          ―――
        </motion.div>
        <motion.div
          animate={{ color }}
          transition={{ duration: 0.5 }}
          css={[
            `
            display: inline-block;
            width: fit-content;
            max-width: 200px;
            margin: auto;
            padding: 5px 10px 0 10px;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 150%;
            font-family: verdana, sans-serif;
            letter-spacing: -1px;
            `,
          ]}
        >
          {title}
        </motion.div>
        <motion.div
          animate={{ color: primaryColor }}
          transition={{ duration: 0.5 }}
          css={[
            `
            display: inline-block;
            width: fit-content;
            margin: auto; 
            adding: 5px 0;
            font-style: normal;
            font-weight: bold;
            font-size: 13px;
            line-height: 150%;
            font-family: verdana, sans-serif;
            letter-spacing: -1px;
            `,
          ]}
        >
          ―――
        </motion.div>
      </div>
    </div>
  )
}

export default MacroChapterSimple
