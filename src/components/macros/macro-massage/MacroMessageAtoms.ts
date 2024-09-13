import { atom } from 'jotai'

export const messageBorderRadius = atom<number>(99)
export const messagePrimaryColor = atom<string>('#E5E5EA')
export const messageFontStyle = atom<'normal' | 'italic'>('normal')
export const messageFontWeight = atom<'normal' | 'bold'>('normal')
export const messageColor = atom<string>('#333333')

export const messageLabel = atom<string>('메시지 핸드아웃 예시')
