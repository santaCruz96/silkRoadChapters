export function formatDate(dateString: string, locale: string): string {
    if (!dateString) return '';

    const date = new Date(dateString);

    if (isNaN(date.getTime())) return '';

    const localeMap: Record<string, string> = {
        en: 'en-US',
        ru: 'ru-RU',
    };

    const formatted = new Intl.DateTimeFormat(localeMap[locale], {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date);

    return `${formatted}`;
}