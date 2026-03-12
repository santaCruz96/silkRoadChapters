import { useEffect } from 'react';

export default function useScrollLock(lock: boolean) {
    useEffect(() => {
        if (!lock) return;

        const preventWheel = (e: WheelEvent) => {
            if (e.ctrlKey) return;
            e.preventDefault();
        };

        const preventTouch = (e: TouchEvent) => {
            if (e.touches.length > 1) return;
            e.preventDefault();
        };

        document.body.addEventListener('wheel', preventWheel, { passive: false });
        document.body.addEventListener('touchmove', preventTouch, { passive: false });

        return () => {
            document.body.removeEventListener('wheel', preventWheel);
            document.body.removeEventListener('touchmove', preventTouch);
        };
    }, [lock]);
}