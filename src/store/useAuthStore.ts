import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IAuthState {
    isAuthenticated: boolean;
    setAuthenticated: (value: boolean) => void;
    reset: () => void;
}

export const useAuthStore = create<IAuthState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            setAuthenticated: (value) => set({ isAuthenticated: value }),
            reset: () => set({ isAuthenticated: false }),
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({ isAuthenticated: state.isAuthenticated }),
        }
    )
);