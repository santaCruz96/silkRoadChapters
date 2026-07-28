import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TabKey = 'articles' | 'playlists';

interface TabsState {
    activeTab: TabKey;
    setActiveTab: (tab: TabKey) => void;
}

export const useTabsStore = create<TabsState>()(
    persist(
        (set) => ({
            activeTab: 'articles',
            setActiveTab: (tab) => set({ activeTab: tab }),
        }),
        { name: 'tabs-storage' }
    )
);