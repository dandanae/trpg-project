export const spring100010 = (
  when: 'afterChildren' | 'beforeChildren' | undefined,
  staggerChildren: number | undefined,
) => {
  return {
    type: 'spring',
    stiffness: 1000,
    damping: 10,
    when,
    staggerChildren,
  } as const
}

export const spring70020 = (
  when: 'afterChildren' | 'beforeChildren' | undefined,
  staggerChildren: number | undefined,
) => {
  return {
    type: 'spring',
    stiffness: 700,
    damping: 20,
    when,
    staggerChildren,
  } as const
}

export const spring50030 = (
  when: 'afterChildren' | 'beforeChildren' | undefined,
  staggerChildren: number | undefined,
) => {
  return {
    type: 'spring',
    stiffness: 500,
    damping: 30,
    when,
    staggerChildren,
  } as const
}

export const toLiftContainer = {
  open: { y: 0, opacity: 1, transition: spring100010 },
  closed: { y: 45, opacity: 0, transition: spring50030 },
} as const

export const toLiftItem = {
  open: { y: 0, opacity: 1, filter: 'blur(0px)', transition: spring50030 },
  closed: { y: 15, opacity: 0, filter: 'blur(5px)', transition: spring50030 },
} as const

export const reverse = {
  open: { rotate: -180, transition: spring100010 },
  closed: { rotate: 0, transition: spring100010 },
} as const

export const accordionContainer = {
  open: {
    scale: 1,
    opacity: 1,
    height: 'auto',
    filter: 'blur(0px)',
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
  closed: {
    scale: 0.8,
    opacity: 0,
    height: 0,
    filter: 'blur(15px)',
    transition: spring50030,
  },
}

export const scriptItem = {
  hover: { scale: 1.1, transition: spring50030 },
  tap: { scale: 0.9, transition: spring50030 },
} as const
