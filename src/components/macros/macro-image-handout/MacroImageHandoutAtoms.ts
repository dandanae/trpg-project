import { atom } from 'jotai'

export const ihoPrimaryColor = atom<string>('#ffffff00')
export const ihoSecondaryColor = atom<string>('#6e635f')
export const ihoColor = atom<string>('#b3b3b3')

export const ihoTitle = atom<string>('핸드아웃 제목')
export const ihoContent = atom<string>('핸드아웃 내용')
export const ihoHeaderImageUrl = atom<string>('https://i.imgur.com/blFeoNd.png')
export const ihoHeaderWidth = atom<number>(299)
export const ihoHeaderHeight = atom<number>(122)
export const ihoDividedImageUrl = atom<string>('https://i.imgur.com/AiLDJ71.png')
export const ihoDividedWidth = atom<number>(136)
export const ihoDividedHeight = atom<number>(25)
export const ihoFooterImageUrl = atom<string>('https://i.imgur.com/rq4njON.png')
export const ihoFooterWidth = atom<number>(298)
export const ihoFooterHeight = atom<number>(91)
