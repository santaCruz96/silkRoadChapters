import { create } from 'zustand';

interface ISearchState {
    isActive: boolean,
    open: () => void,
    close: () => void
};

export const useSearch = create<ISearchState>((set) => ({
    isActive: false,

    open: () => set({ isActive: true }),

    close: () => set({ isActive: false })
}));