import { create } from 'zustand';

type PushType = 'info' | 'success' | 'error' | 'cookie';

interface IPush {
    id: string,
    type: PushType,
    message: string
}

interface IPushStore {
    pushes: IPush[],
    addPush: (type: PushType, message: string) => void,
    removePush: (id: string) => void
}

export const usePush = create<IPushStore>((set) => ({
    pushes: [],
    
    addPush: (type, message) => {
        const id = Math.random().toString(36).substring(2, 9);
        
        set((state) => ({
            pushes: [...state.pushes, { id, type, message }],
        }));
        
        setTimeout(() => {
            set((state) => ({
                pushes: state.pushes.filter((push) => push.id !== id),
            }));
        }, 5000);
    },
    
    removePush: (id) =>
        set((state) => ({
        pushes: state.pushes.filter((push) => push.id !== id),
        })),
}));