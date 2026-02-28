import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { FreeLecture } from '@/types/interfaces/FreeLecture.interface';
import { Blog } from '@/types/interfaces/Blog.interface';
import { PaidLecture } from '@/types/interfaces/PaidLecture.interface';

interface LectureStore {
    currentLecture: FreeLecture | PaidLecture | Blog, 
    setCurrentLecture: (lecture: FreeLecture | PaidLecture | Blog) => void
}

const useActiveLectureStore = create<LectureStore>()(
    persist(
        (set) => ({
            currentLecture: {} as FreeLecture | PaidLecture | Blog,
            setCurrentLecture: (lecture) => set({ currentLecture: lecture }),
        }),
        {
            name: 'active-lecture-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useActiveLectureStore;