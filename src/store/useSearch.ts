import { create } from 'zustand'

type UseSearch = {
  search: string
  setSearch: (v:string) => void
}

export const useSearch = create<UseSearch>((set) => ({
  search: "",
  setSearch: (v) => set(() => ({ search:v })),
}))