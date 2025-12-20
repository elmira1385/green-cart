import { create } from 'zustand'

type UseIsLogin = {
  IsLogin: boolean,
  setIsLogin: (v:boolean) => void
}

export const useIsLogin = create<UseIsLogin>((set) => ({
  IsLogin: false,
  setIsLogin: (v) => set(() => ({ IsLogin:v })),
}))