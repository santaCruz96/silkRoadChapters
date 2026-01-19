import { IReview } from "@/types/interfaces/Review.interface"
import {useTranslations} from 'next-intl';

export const useReviewsData = (): IReview[][] => {
    const t = useTranslations('Reviews');

    return [
        [
            {
                id: 1,
                name: t('cheryl.name'),
                text:t('cheryl.text'),
                avatar: '/images/reviews/cheryl.webp'
            },
            {
                id: 2,
                name: t('david.name'),
                text:t('david.text'),
                avatar: '/images/reviews/david.webp'
            },
            {
                id: 3,
                name: t('mimi_howard.name'),
                text:t('mimi_howard.text'),
                avatar: '/images/reviews/mimi-howard.webp'
            },
            {
                id: 4,
                name: t('roger_annie.name'),
                text:t('roger_annie.text'),
                avatar: '/images/reviews/roger-annie.webp'
            },
            {
                id: 5,
                name: t('edward.name'),
                text:t('edward.text'),
                avatar: '/images/reviews/edward.webp'
            },
            {
                id: 6,
                name: t('kathryn.name'),
                text:t('kathryn.text'),
                avatar: '/images/reviews/kathryn.webp'
            },
            {
                id: 7,
                name: t('margaret.name'),
                text:t('margaret.text'),
                avatar: '/images/reviews/margaret.webp'
            }
        ],
        [
            {
                id: 8,
                name: t('susan.name'),
                text: t('susan.text'),
                avatar: '/images/reviews/susan.webp'
            },
            {
                id: 9,
                name: t('anjali.name'),
                text:t('anjali.text'),
                avatar: '/images/reviews/anjali.webp'
            },
            {
                id: 10,
                name: t('bill.name'),
                text:t('bill.text'),
                avatar: '/images/reviews/bill.webp'
            },
            {
                id: 11,
                name: t('guiseppe.name'),
                text:t('guiseppe.text'),
                avatar: '/images/reviews/guiseppe.webp'
            },
            {
                id: 12,
                name: t('mehrdad.name'),
                text:t('mehrdad.text'),
                avatar: '/images/reviews/mehrdad.webp'
            },
            {
                id: 13,
                name: t('karin.name'),
                text:t('karin.text'),
                avatar: '/images/reviews/karin.webp'
            },
            {
                id: 14,
                name: t('heather.name'),
                text:t('heather.text'),
                avatar: '/images/reviews/heather.webp'
            }
        ]
    ]
}