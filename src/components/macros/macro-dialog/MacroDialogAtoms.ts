import { atom } from 'jotai'

export const dialogBorderWidth = atom<number>(2)
export const dialogBorderColor = atom<string>('#fcbfd4')
export const dialogFontStyle = atom<'normal' | 'italic'>('normal')
export const dialogFontWeight = atom<'normal' | 'bold'>('normal')
export const dialogColor = atom<string>('#b3b3b3')

export const dialogContent = atom<string>('핸드아웃 내용')
