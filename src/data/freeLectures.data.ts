import { IFreeLecture } from "@/types/interfaces/FreeLecture.interface"
import { useTranslations } from 'next-intl';

export const useFreeLectures = (): IFreeLecture[] => {
    const t = useTranslations('FreeLectures');

    return [
        {
            id: 1,
            title: t('elechek.title'),
            images: [
                '/images/free-lectures/elechek/elechek-1.webp'
            ],
            text: [
                t('elechek.text')
            ]
        },
        {
            id: 2,
            title: t('kurutob.title'),
            images: [
                '/images/free-lectures/kurutob/kurutob-1.webp'
            ],
            text: [
                t('kurutob.text')
            ]
        },
        {
            id: 3,
            title: t('chor_minor.title'),
            images: [
                '/images/free-lectures/chor-minor/chor-minor-1.webp'
            ],
            text: [
                t('chor_minor.text')
            ]
        },
        {
            id: 4,
            title: t('khiva.title'),
            images: [
                '/images/free-lectures/khiva/khiva-1.webp'
            ],
            text: [
                t('khiva.text')
            ]
        },
        {
            id: 5,
            title: t('laukh.title'),
            images: [
                '/images/free-lectures/laukh/laukh-1.webp'
            ],
            text: [
                t('laukh.text')
            ]
        },
        {
            id: 6,
            title: t('bread_of_samarkand.title'),
            images: [
                '/images/free-lectures/bread-of-samarkand/bread-of-samarkand-1.webp'
            ],
            text: [
                t('bread_of_samarkand.text')
            ]
        },
        {
            id: 7,
            title: t('huge_buddha.title'),
            images: [
                '/images/free-lectures/huge-buddha/huge-buddha-1.webp'
            ],
            text: [
                t('huge_buddha.text')
            ]
        }
    ]
}