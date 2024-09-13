import React, { Fragment } from 'react'
import { useAtomValue } from 'jotai'
import { motion } from 'framer-motion'
import {
  tcBorderColor,
  tcBorderRadius,
  tcBorderStyle,
  tcBorderWidth,
  tcColor,
  tcComment,
  tcImageUrl,
  tcKpcName,
  tcPcName,
  tcPrimaryColor,
  tcSecondaryColor,
  tcTitle,
  tcWriter,
} from './MacroTitleCardAtoms'

const MacroTitleCard = () => {
  const title = useAtomValue(tcTitle)
  const writer = useAtomValue(tcWriter)
  const kpcName = useAtomValue(tcKpcName)
  const pcName = useAtomValue(tcPcName)
  const comment = useAtomValue(tcComment)
  const imageUrl = useAtomValue(tcImageUrl)

  const borderWidth = useAtomValue(tcBorderWidth)
  const borderStyle = useAtomValue(tcBorderStyle)
  const borderColor = useAtomValue(tcBorderColor)
  const borderRadius = useAtomValue(tcBorderRadius)
  const primaryColor = useAtomValue(tcPrimaryColor)
  const secondaryColor = useAtomValue(tcSecondaryColor)
  const color = useAtomValue(tcColor)

  const convertToRgba = (hex: string): string => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    return `rgba(${r}, ${g}, ${b},  0.5)`
  }

  return (
    <div className="flex flex-col text-center mg" role="region" aria-labelledby="macro-tc-card">
      <h1 id="macro-tc-card" className="sr-only">
        매크로 타이틀 카드
      </h1>
      {/* --- 타이틀 메인 --- */}
      <motion.div
        role="heading"
        aria-level={1}
        animate={{
          borderWidth,
          borderStyle,
          borderColor,
          borderBottom: 'none',
          borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
          backgroundColor: primaryColor,
          backgroundImage: `url('${imageUrl}')`,
          letterSpacing: '-1px',
        }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width: 200px;
          margin: auto;
          padding-top: 80px;
          padding-right: 10px;
          background-position: center;
          background-size: cover;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 150%;
          font-family: verdana, sans-serif;
          text-align: left;
          color: white;
          `,
        ]}
      >
        {title}
      </motion.div>
      {/* --- 여백 --- */}
      <motion.div
        aria-hidden="true"
        animate={{
          borderWidth,
          borderStyle,
          borderColor,
          borderTop: 'none',
          borderBottom: 'none',
          backgroundColor: secondaryColor,
        }}
        transition={{ duration: 0.5 }}
        css={[`display: block; width: 200px; height: 20px; margin: auto;`]}
      />
      {/* --- 타이틀 서브 --- */}
      <motion.div
        animate={{
          borderWidth,
          borderStyle,
          borderColor,
          borderTop: 'none',
          borderBottom: 'none',
          backgroundColor: secondaryColor,
          letterSpacing: '-1px',
          color,
        }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width: 200px;
          margin: auto;
          padding: 0 20px;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 150%;
          font-family: verdana, sans-serif;
          text-align: left;
          `,
        ]}
      >
        {title}
      </motion.div>
      {/* --- 시나리오 작가 --- */}
      <motion.div
        animate={{
          borderWidth,
          borderStyle,
          borderColor,
          borderTop: 'none',
          borderBottom: 'none',
          backgroundColor: secondaryColor,
          letterSpacing: '-1px',
          color: primaryColor,
        }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width: 200px;
          margin: auto;
          padding: 0 20px;
          font-style: normal;
          font-weight: bold;
          font-size: 13px;
          line-height: 150%;
          font-family: verdana, sans-serif;
          text-align: left;
          `,
        ]}
      >
        {writer}
      </motion.div>
      {['KPC', 'PC'].map((role) => (
        <Fragment key={role}>
          {/* --- 여백 --- */}
          <motion.div
            aria-hidden="true"
            animate={{
              borderWidth,
              borderStyle,
              borderColor,
              borderTop: 'none',
              borderBottom: 'none',
              backgroundColor: secondaryColor,
            }}
            transition={{ duration: 0.5 }}
            css={[`display: block; width: 200px; height: 20px; margin: auto;`]}
          />
          {/* --- 역할 --- */}
          <motion.div
            animate={{
              borderWidth,
              borderStyle,
              borderColor,
              borderTop: 'none',
              borderBottom: 'none',
              backgroundColor: secondaryColor,
              letterSpacing: '-1px',
              color: primaryColor,
            }}
            transition={{ duration: 0.5 }}
            css={[
              `
              display: block;
              width: 200px;
              padding: 0 20px;
              margin: auto;
              font-style: normal;
              font-weight: bold;
              font-size: 15px;
              line-height: 150%;
              font-family: verdana, sans-serif;
              text-align: left;
              `,
            ]}
          >
            {role}
          </motion.div>
          {/* --- 역할 담당자 이름 ---  */}
          <motion.div
            animate={{
              borderWidth,
              borderStyle,
              borderColor,
              borderTop: 'none',
              borderBottom: 'none',
              backgroundColor: secondaryColor,
              letterSpacing: '-1px',
              color,
            }}
            transition={{ duration: 0.5 }}
            css={[
              `
              display: block;
              width: 200px;
              margin: auto;
              padding: 0 20px;
              font-style: normal;
              font-weight: nomral;
              font-size: 13px;
              line-height: 150%;
              font-family: verdana, sans-serif;
              text-align: left;
              `,
            ]}
          >
            {role === 'KPC' ? kpcName : pcName}
          </motion.div>
        </Fragment>
      ))}
      {/* --- 여백 --- */}
      <motion.div
        aria-hidden="true"
        animate={{
          borderWidth,
          borderStyle,
          borderColor,
          borderTop: 'none',
          borderBottom: 'none',
          backgroundColor: secondaryColor,
        }}
        transition={{ duration: 0.5 }}
        css={[`display: block; width: 200px; height: 20px; margin: auto;`]}
      />
      {/* --- 코멘트 --- */}
      <motion.div
        animate={{
          borderWidth,
          borderStyle,
          borderColor,
          borderTop: 'none',
          borderBottom: 'none',
          backgroundColor: secondaryColor,
          letterSpacing: '-1px',
          color: convertToRgba(color),
        }}
        transition={{ duration: 0.5 }}
        css={[
          `
          display: block;
          width: 200px;
          padding: 0 20px;
          font-style: normal;
          font-weight: nomral;
          font-size: 11px;
          line-height: 150%;
          font-family: verdana, sans-serif;
          text-align: left;
          `,
        ]}
      >
        {comment}
      </motion.div>
      {/* --- 하단 --- */}
      <motion.div
        aria-hidden="true"
        animate={{
          borderWidth,
          borderStyle,
          borderColor,
          borderTop: 'none',
          borderRadius: `0 0 ${borderRadius}px ${borderRadius}px`,
          backgroundColor: secondaryColor,
        }}
        transition={{ duration: 0.5 }}
        css={[`display: block; width: 200px; height: 20px; margin: auto;`]}
      />
    </div>
  )
}

export default MacroTitleCard
