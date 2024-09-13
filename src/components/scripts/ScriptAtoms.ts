import { atom } from 'jotai'

export const scriptIsDark = atom<boolean>(true)
export const scriptPrimaryColor = atom<string>('#9fa2f6')
export const scriptSecondaryColor = atom<string>('#ffffff')
export const scriptColor = atom<string>('#b3b3b3')
export const scripthonorifics = atom<boolean>(false)

export const scriptMacroIndex = atom<number | undefined>(undefined)
