import { atom } from 'jotai'

export const tcBorderWidth = atom<number>(0)
export const tcBorderStyle = atom<'solid' | 'dashed' | 'dotted'>('solid')
export const tcBorderColor = atom<string>('#ffffff')
export const tcBorderRadius = atom<number>(0)
export const tcPrimaryColor = atom<string>('#fcbfd4')
export const tcSecondaryColor = atom<string>('#ffffff')
export const tcLetterSpacing = atom<number>(-2)
export const tcColor = atom<string>('#333333')

export const tcTitle = atom<string>('시나리오 제목')
export const tcWriter = atom<string>('w.시나리오 저자')
export const tcKpcName = atom<string>('KPC 이름')
export const tcPcName = atom<string>('PC 이름')
export const tcComment = atom<string>('시나리오를 대표하는 한 줄')
export const tcImageUrl = atom<string>('https://blog.kakaocdn.net/dn/skyUj/btsJekVZwhi/GUTcb0NqZURyxA8Xq3U3b0/img.gif')
