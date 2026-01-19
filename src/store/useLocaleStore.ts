import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import Cookies from 'js-cookie';
import type { Locale } from '@/i18n/request';

interface LanguageStore {
    locale: Locale,
    setLocale: (locale: Locale) => void
}

export const useLocaleStore = create<LanguageStore>()(
    persist(
        (set) => ({
            locale: 'en',
            setLocale: (locale) => {
                Cookies.set('NEXT_LOCALE', locale, { 
                    expires: 365,
                    path: '/',
                    sameSite: 'lax'
                });
                
                set({ locale });
                
                window.location.reload();
            },
        }),
        {
            name: 'language-storage', 
        }
    )
);