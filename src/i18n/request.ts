import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';

export const locales = ['en', 'ru'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
    const cookieStore = await cookies();
    const locale = (cookieStore.get('NEXT_LOCALE')?.value || 'en') as Locale;

    return {
        locale,
        messages: (await import(`../../public/locales/${locale}.json`)).default
    };
});