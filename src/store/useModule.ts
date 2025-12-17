import { create } from 'zustand'

type UseModule = {
  isOpen: boolean,
  setIsOpen: (v:boolean) => void
}

export const useModule = create<UseModule>((set) => ({
  isOpen: false,
  setIsOpen: (v) => set(() => ({ isOpen:v })),
}))