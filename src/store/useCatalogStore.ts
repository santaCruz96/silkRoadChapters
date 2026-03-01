import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FreeLecture } from '@/types/interfaces/FreeLecture.interface';
import { PaidLecture } from '@/types/interfaces/PaidLecture.interface';
import { Blog } from '@/types/interfaces/Blog.interface';

type AllTypes = FreeLecture | PaidLecture | Blog

export type CatalogFilter = 'none' | 'new' | 'popular';

interface CatalogStore {
    filter: CatalogFilter;
    setFilter: (filter: CatalogFilter) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    allLectures: AllTypes[];
    setAllLectures: (lectures: AllTypes[]) => void;
}

export const useCatalogStore = create<CatalogStore>()(
    persist(
        (set) => ({
            filter: 'none',
            setFilter: (filter) => set({ filter }),
            searchQuery: '',
            setSearchQuery: (searchQuery) => set({ searchQuery }),
            allLectures: [],
            setAllLectures: (allLectures) => set({ allLectures }),
        }),
        {
            name: 'catalog-storage',
            partialize: (state) => ({ filter: state.filter }), 
        }
    )
);