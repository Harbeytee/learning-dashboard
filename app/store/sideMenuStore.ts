import { create } from 'zustand'

type SideMenu = {
    open: boolean,
    setOpen: () => void
}

export const openMenu = create<SideMenu>((set) => (
    {
     open: false,
     setOpen: () => set((state) => ({open: !state.open})),
 
    }
 ))