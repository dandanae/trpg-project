import { atom } from 'jotai'

export const thoBorderWidth = atom<number>(1)
export const thoBorderStyle = atom<'solid' | 'dashed' | 'dotted'>('solid')
export const thoBorderColor = atom<string>('#fcbfd4')
export const thoBorderRadius = atom<number>(10)
export const thoBoxShadowColor = atom<string>('#fcbfd4')
export const thoPrimaryColor = atom<string>('#fcbfd4')
export const thoSecondaryColor = atom<string>('#ffffff')
export const thoColor = atom<string>('#b3b3b3')

export const thoHead = atom<string>('HANDOUT')
export const thoTitle = atom<string>('핸드아웃 제목')
export const thoContent = atom<string>('핸드아웃 내용 핸드아웃 내용\n핸드아웃 내용 핸드아웃 내용 핸드아웃 내용')
