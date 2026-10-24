const localeMap: Record<string, string> = {
    en: 'en-US',
    ru: 'ru-RU',
};

const TASHKENT_OFFSET_MS = 5 * 60 * 60 * 1000;

export function formatDate(dateString: string, locale: string): string {
    if (!dateString) return '';

    const date = new Date(dateString);

    if (isNaN(date.getTime())) return '';

    const formatted = new Intl.DateTimeFormat(localeMap[locale], {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date);

    return `${formatted}`;
}

export function getTashkentDateParts(dateString: string, locale: string) {
    const date = new Date(new Date(dateString).getTime() + TASHKENT_OFFSET_MS);

    if (isNaN(date.getTime())) return null;

    const parts = new Intl.DateTimeFormat(localeMap[locale], {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
    }).formatToParts(date);

    const getPart = (type: Intl.DateTimeFormatPartTypes) =>
        parts.find((part) => part.type === type)?.value ?? '';

    const hours = date.getUTCHours();
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');

    const time = locale === 'ru'
        ? `${String(hours).padStart(2, '0')}:${minutes}`
        : `${hours % 12 || 12}:${minutes} ${hours < 12 ? 'AM' : 'PM'}`;

    return {
        day: getPart('day'),
        month: getPart('month'),
        year: getPart('year'),
        time,
    };
}

export function splitTimeLeft(ms: number) {
    const totalSeconds = Math.ceil(ms / 1000);

    return {
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
    };
}
