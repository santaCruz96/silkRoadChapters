import { create } from 'zustand';
import { PaidLecture } from '@/types/interfaces/PaidLecture.interface';

type AvailableHandler = (lecture: PaidLecture) => void;

interface INotifyModal {
    isOpen: boolean,
    lectureId: string | null,
    onAvailable: AvailableHandler | null,
    open: (lectureId: string, onAvailable?: AvailableHandler) => void,
    close: () => void
};

export const useNotifyModal = create<INotifyModal>((set) => ({
    isOpen: false,
    lectureId: null,
    onAvailable: null,

    open: (lectureId, onAvailable) => set({ isOpen: true, lectureId, onAvailable: onAvailable ?? null }),

    close: () => set({ isOpen: false, lectureId: null, onAvailable: null }),
}));
