import { IPaidLecture } from "@/types/interfaces/PaidLecture.interface"
import { useTranslations } from 'next-intl';

export const usePaidLectures = (): IPaidLecture[] => {
    const t = useTranslations('PaidLectures');

    return [
        {
        id: 1,
        title: t('pakhlavan.title'),
        images: [
            '/images/paid-lectures/pakhlavan-makhmud/pakhlavan-makhmud-1.webp'
        ],
        text: [
            t('pakhlavan.text')
        ]
    },
    {
        id: 2,
        title: t('plov.title'),
        images: [
            '/images/paid-lectures/plov/plov-1.webp'
        ],
        text: [
            t('plov.text')
        ]
    },
    {
        id: 3,
        title: t('chugurma.title'),
        images: [
            '/images/paid-lectures/chugurma/chugurma-1.webp'
        ],
        text: [
            t('chugurma.text')
        ]
    },
    {
        id: 4,
        title: t('nonpar.title'),
        images: [
            '/images/paid-lectures/nonpar/nonpar-1.webp'
        ],
        text: [
            t('nonpar.text')
        ]
    },
    {
        id: 5,
        title: t('khovuz.title'),
        images: [
            '/images/paid-lectures/khovuz/khovuz-1.webp'
        ],
        text: [
            t('khovuz.text')
        ]
    },
    {
        id: 6,
        title: t('manti_dumplimgs.title'),
        images: [
            '/images/paid-lectures/manti-dumplimgs/manti-dumplimgs-1.webp'
        ],
        text: [
            t('manti_dumplimgs.text')
        ]
    },
    {
        id: 7,
        title: t('arba.title'),
        images: [
            '/images/paid-lectures/arba/arba-1.webp'
        ],
        text: [
            t('arba.text')
        ]
    },
    {
        id: 8,
        title: t('tea_of_bukhara.title'),
        images: [
            '/images/paid-lectures/tea-of-bukhara/tea-of-bukhara-1.webp'
        ],
        text: [
            t('tea_of_bukhara.text')
        ]
    }
    ]
}