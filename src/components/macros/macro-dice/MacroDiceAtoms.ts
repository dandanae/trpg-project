import { atom } from 'jotai'

export const diceBorderWidth = atom<number>(0)
export const diceBorderStyle = atom<'solid' | 'dashed' | 'dotted'>('solid')
export const diceBorderColor = atom<string>('#fcbfd4')
export const diceBorderRadius = atom<number>(99)
export const diceBoxShadowColor = atom<string>('#fcbfd400')
export const dicePrimaryColor = atom<string>('#fcbfd4')
export const diceSecondaryColor = atom<string>('#dbdaec')
export const diceFontStyle = atom<'normal' | 'italic'>('normal')
export const diceFontWeight = atom<'normal' | 'bold'>('normal')
export const diceFontSize = atom<number>(13)
export const diceColor = atom<string>('#333333')

export const diceLabel = atom<string>('🎲 관찰력 판정')
