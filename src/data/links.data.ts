import { ILinks } from "@/types/interfaces/Links.interface"
import {useTranslations} from 'next-intl';

export const useLinks = (): ILinks[] => {
    const t = useTranslations('Modal.menu');

    return [
        {
            id: 1,
            route: '/about',
            label: t('author'),
        },
        {
            id: 2,
            route: '/catalog/free-lectures',
            label: t('freeLectures'),
        },
        {
            id: 3,
            route: '/catalog/paid-lectures',
            label: t('paidLectures'),
        },
        {
            id: 4,
            route: '/catalog/blog',
            label: t('blog'),
        },
        {
            id: 5,
            route: '/faq',
            label: t('faq'),
        }
    ]
}