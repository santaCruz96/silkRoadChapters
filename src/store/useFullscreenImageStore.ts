import { create } from 'zustand';

interface IFullscreenImage {
    image: string | null,
    isOpen: boolean,
    open: (image: string) => void,
    close: () => void
};

export const useFullscreenImage = create<IFullscreenImage>((set) => ({
    image: null,
    isOpen: false,

    open: (image) => set({ isOpen: true, image: image }),

    close: () => set({ isOpen: false }),
}))