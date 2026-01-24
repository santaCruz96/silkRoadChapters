import { IPaidLecture } from "@/types/interfaces/PaidLecture.interface"
import { useTranslations } from 'next-intl';

export const usePaidLectures = (): IPaidLecture[] => {
    const t = useTranslations('PaidLectures');

    return [
        {
            id: 1,
            type: 'paid',
            title: t('pakhlavan.title'),
            details: {
                price: '9.99',
                location: t('pakhlavan.details.location'),
                travelPoint: t('pakhlavan.details.travelPoint'),
                year: '2025'
            },
            images: [
                '/images/paid-lectures/pakhlavan-makhmud/pakhlavan-makhmud-1.webp',
                '/images/paid-lectures/pakhlavan-makhmud/pakhlavan-makhmud-1.webp',
                [
                    '/images/paid-lectures/pakhlavan-makhmud/pakhlavan-makhmud-1.webp',
                    '/images/paid-lectures/pakhlavan-makhmud/pakhlavan-makhmud-1.webp'
                ]
            ],
            texts: [
                t('pakhlavan.texts.text1'),
                t('pakhlavan.texts.text2'),
                t('pakhlavan.texts.text3'),
                t('pakhlavan.texts.text4'),
                t('pakhlavan.texts.text5')
            ]
        },
        {
            id: 2,
            type: 'paid',
            title: t('plov.title'),
            details: {
                price: '9.99',
                location: t('plov.details.location'),
                travelPoint: t('plov.details.travelPoint'),
                year: '2025'
            },
            images: [
                '/images/paid-lectures/plov/plov-1.webp',
                '/images/paid-lectures/plov/plov-1.webp',
                [
                    '/images/paid-lectures/plov/plov-1.webp',
                    '/images/paid-lectures/plov/plov-1.webp'
                ]
            ],
            texts: [
                t('plov.texts.text1'),
                t('plov.texts.text2'),
                t('plov.texts.text3'),
                t('plov.texts.text4'),
                t('plov.texts.text5')
            ]
        },
        {
            id: 3,
            type: 'paid',
            title: t('chugurma.title'),
            details: {
                price: '9.99',
                location: t('chugurma.details.location'),
                travelPoint: t('chugurma.details.travelPoint'),
                year: '2025'
            },
            images: [
                '/images/paid-lectures/chugurma/chugurma-1.webp',
                '/images/paid-lectures/chugurma/chugurma-1.webp',
                [
                    '/images/paid-lectures/chugurma/chugurma-1.webp',
                    '/images/paid-lectures/chugurma/chugurma-1.webp'
                ]
            ],
            texts: [
                t('chugurma.texts.text1'),
                t('chugurma.texts.text2'),
                t('chugurma.texts.text3'),
                t('chugurma.texts.text4'),
                t('chugurma.texts.text5')
            ]
        },
        {
            id: 4,
            type: 'paid',
            title: t('nonpar.title'),
            details: {
                price: '9.99',
                location: t('nonpar.details.location'),
                travelPoint: t('nonpar.details.travelPoint'),
                year: '2025'
            },
            images: [
                '/images/paid-lectures/nonpar/nonpar-1.webp',
                '/images/paid-lectures/nonpar/nonpar-1.webp',
                [
                    '/images/paid-lectures/nonpar/nonpar-1.webp',
                    '/images/paid-lectures/nonpar/nonpar-1.webp'
                ]
            ],
            texts: [
                t('nonpar.texts.text1'),
                t('nonpar.texts.text2'),
                t('nonpar.texts.text3'),
                t('nonpar.texts.text4'),
                t('nonpar.texts.text5')
            ]
        },
        {
            id: 5,
            type: 'paid',
            title: t('khovuz.title'),
            details: {
                price: '9.99',
                location: t('khovuz.details.location'),
                travelPoint: t('khovuz.details.travelPoint'),
                year: '2025'
            },
            images: [
                '/images/paid-lectures/khovuz/khovuz-1.webp',
                '/images/paid-lectures/khovuz/khovuz-1.webp',
                [
                    '/images/paid-lectures/khovuz/khovuz-1.webp',
                    '/images/paid-lectures/khovuz/khovuz-1.webp'
                ]
            ],
            texts: [
                t('khovuz.texts.text1'),
                t('khovuz.texts.text2'),
                t('khovuz.texts.text3'),
                t('khovuz.texts.text4'),
                t('khovuz.texts.text5')
            ]
        },
        {
            id: 6,
            type: 'paid',
            title: t('manti_dumplimgs.title'),
            details: {
                price: '9.99',
                location: t('manti_dumplimgs.details.location'),
                travelPoint: t('manti_dumplimgs.details.travelPoint'),
                year: '2025'
            },
            images: [
                '/images/paid-lectures/manti-dumplimgs/manti-dumplimgs-1.webp',
                '/images/paid-lectures/manti-dumplimgs/manti-dumplimgs-1.webp',
                [
                    '/images/paid-lectures/manti-dumplimgs/manti-dumplimgs-1.webp',
                    '/images/paid-lectures/manti-dumplimgs/manti-dumplimgs-1.webp'
                ]
            ],
            texts: [
                t('manti_dumplimgs.texts.text1'),
                t('manti_dumplimgs.texts.text2'),
                t('manti_dumplimgs.texts.text3'),
                t('manti_dumplimgs.texts.text4'),
                t('manti_dumplimgs.texts.text5')
            ]
        },
        {
            id: 7,
            type: 'paid',
            title: t('arba.title'),
            details: {
                price: '9.99',
                location: t('arba.details.location'),
                travelPoint: t('arba.details.travelPoint'),
                year: '2025'
            },
            images: [
                '/images/paid-lectures/arba/arba-1.webp',
                '/images/paid-lectures/arba/arba-1.webp',
                [
                    '/images/paid-lectures/arba/arba-1.webp',
                    '/images/paid-lectures/arba/arba-1.webp'
                ]
            ],
            texts: [
                t('arba.texts.text1'),
                t('arba.texts.text2'),
                t('arba.texts.text3'),
                t('arba.texts.text4'),
                t('arba.texts.text5')
            ]
        },
        {
            id: 8,
            type: 'paid',
            title: t('tea_of_bukhara.title'),
            details: {
                price: '9.99',
                location: t('tea_of_bukhara.details.location'),
                travelPoint: t('tea_of_bukhara.details.travelPoint'),
                year: '2025'
            },
            images: [
                '/images/paid-lectures/tea-of-bukhara/tea-of-bukhara-1.webp',
                '/images/paid-lectures/tea-of-bukhara/tea-of-bukhara-1.webp',
                [
                    '/images/paid-lectures/tea-of-bukhara/tea-of-bukhara-1.webp',
                    '/images/paid-lectures/tea-of-bukhara/tea-of-bukhara-1.webp'
                ]
            ],
            texts: [
                t('tea_of_bukhara.texts.text1'),
                t('tea_of_bukhara.texts.text2'),
                t('tea_of_bukhara.texts.text3'),
                t('tea_of_bukhara.texts.text4'),
                t('tea_of_bukhara.texts.text5')
            ]
        }
    ]
}