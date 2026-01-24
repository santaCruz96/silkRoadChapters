import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface ActiveLecture {
    id: number,
    type: string
}

interface LectureStore {
    currentLecture: ActiveLecture | null,
    setCurrentLecture: (id: number, type: string) => void
}

const useActiveLectureStore = create<LectureStore>()(
    persist(
        (set) => ({
            currentLecture: null,
            setCurrentLecture: (id, type) => set({ currentLecture: { id, type } }),
        }),
        {
            name: 'active-lecture-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useActiveLectureStore;