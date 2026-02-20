import { useEffect, useState } from "react";

export function useHeaderScroll() {
    const [isExpanded, setIsExpanded] = useState(true);

    const forceExpand = () => setIsExpanded(true);

    useEffect(() => {
        const THRESHOLD = 300;
        let anchorY = window.scrollY;
        let lastY = window.scrollY;
        let currentExpanded = true;

        const handleScroll = (): void => {
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - lastY;
            const totalDelta = currentScrollY - anchorY;

            if ((delta > 0 && totalDelta < 0) || (delta < 0 && totalDelta > 0)) {
                anchorY = lastY;
            }

            lastY = currentScrollY;

            const newTotalDelta = currentScrollY - anchorY;

            if (newTotalDelta > THRESHOLD && currentScrollY > 50 && currentExpanded) {
                currentExpanded = false;
                setIsExpanded(false);
                anchorY = currentScrollY;
            } else if (newTotalDelta < -THRESHOLD && !currentExpanded) {
                currentExpanded = true;
                setIsExpanded(true);
                anchorY = currentScrollY;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { isExpanded, forceExpand };
}