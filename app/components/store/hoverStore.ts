import { create } from 'zustand'

type Store = {
    index: number | string,
    changeIndex: (newIndex: number | string) => void,
    
}
export const hoverStore = create<Store>((set) => (
   {
    index: '',
    changeIndex: (newIndex: number | string) => set({ index: newIndex}),
    
   }
))