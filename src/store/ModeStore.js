import { create } from "zustand";




export const useMode = create((set) => ({
    mode: false,
    setMode: () => set((state) => ({ mode: !state.mode })),
    
  }))