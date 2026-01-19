import { create } from 'zustand';

interface IResponsiveState {
    isMobile: boolean,
    isTablet: boolean,
    isMiniDesktop: boolean,
    isDesktop: boolean
}

let initialized = false;

export const useResponsiveStore = create<IResponsiveState>((set) => {
    if (!initialized && typeof window !== 'undefined') {
        initialized = true;

        const queries = {
            mobile: window.matchMedia('(max-width: 639px)'),
            tablet: window.matchMedia('(max-width: 1023px)'),
            miniDesktop: window.matchMedia('(max-width: 1279px)'),
            desktop: window.matchMedia('(min-width: 1280px)')
        };

        const update = () => {
            set({
                isMobile: queries.mobile.matches,
                isTablet: queries.tablet.matches,
                isMiniDesktop: queries.miniDesktop.matches,
                isDesktop: queries.miniDesktop.matches
            });
        };

        setTimeout(update, 0);

        queries.mobile.addEventListener('change', update);
        queries.tablet.addEventListener('change', update);
        queries.miniDesktop.addEventListener('change', update);
        queries.desktop.addEventListener('change', update);
    }

    return {
        isMobile: false,
        isTablet: false,
        isMiniDesktop: false,
        isDesktop: false
    };
});