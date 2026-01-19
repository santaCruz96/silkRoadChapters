import { useState, useEffect } from 'react';

export const useIsHydrated = () => {
    const [isHydrated, setIsHydrated] = useState(false);

        useEffect(() => {
            setTimeout(() => {
                setIsHydrated(true);
            }, 0);
        }, []);

    return isHydrated;
};