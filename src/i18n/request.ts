import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';

export const locales = ['en', 'ru'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({requestLocale}) => {
    let locale = await requestLocale;
    
    if (!locale) {
        const cookieStore = await cookies();
        locale = cookieStore.get('NEXT_LOCALE')?.value || 'en';
    }
    
    if (!locales.includes(locale as Locale)) {
        locale = 'en';
    }

    return {
        locale,
        messages: (await import(`../../public/locales/${locale}.json`)).default
    };
});