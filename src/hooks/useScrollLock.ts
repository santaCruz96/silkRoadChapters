import { useEffect } from 'react';

export default function useScrollLock (lock: boolean) {
    useEffect(() => {
        if (!lock) return;

        const preventDefault = (e: Event) => e.preventDefault();
        const preventWheel = (e: WheelEvent) => e.preventDefault();
        const preventKey = (e: KeyboardEvent) => {
            if ([32, 37, 38, 39, 40].includes(e.keyCode)) {
                e.preventDefault();
            }
        };

        document.body.addEventListener('wheel', preventWheel, { passive: false });
        document.body.addEventListener('touchmove', preventDefault, { passive: false });
        document.body.addEventListener('keydown', preventKey);

        return () => {
            document.body.removeEventListener('wheel', preventWheel);
            document.body.removeEventListener('touchmove', preventDefault);
            document.body.removeEventListener('keydown', preventKey);
        };
    }, [lock]);
};