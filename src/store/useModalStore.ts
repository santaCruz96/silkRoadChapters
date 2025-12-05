import { create } from 'zustand';

export type ModalMode = 'menu' | 'login' | 'register' | 'reset';

type ModalState = {
    isOpen: boolean;
    mode: ModalMode;
    open: (mode?: ModalMode) => void;
    close: () => void;
    toggle: (mode?: ModalMode) => void;
};

export const useModal = create<ModalState>((set) => ({
    isOpen: false,
    mode: 'menu',

    open: (mode = 'menu') => set({ isOpen: true, mode }),

    close: () => set({ isOpen: false, mode: 'menu' }),

    toggle: (mode) =>
        set((state) => {
        if (mode && state.isOpen && state.mode === mode) {
            return { isOpen: false, mode: 'menu' };
        }

        if (mode) {
            return { isOpen: true, mode };
        }

        return { isOpen: !state.isOpen, mode: state.mode };
        }),
}));