import { create } from 'zustand'
type Store = {
    index: number,
    changeIndex: (newIndex: number) => void,
    add: () => void,
    substract: () => void,
}
export const useStore = create<Store>((set) => (
   {
    index: 0,
    changeIndex: (newIndex: number) => set({ index: newIndex}),
    add: () => set((state) => ({ index: state.index + 1})),
    substract: () => set((state) => ({ index: state.index - 1})),
   }
))