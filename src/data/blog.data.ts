import { IBlog } from "@/types/interfaces/Blog.interface"
import {useTranslations} from 'next-intl';

export const useBlogData = (): IBlog[] => {
    const t = useTranslations('Blog');

    return [
        {
            id: 1,
            title: t('ten_things.title'),
            location: t('ten_things.location'),
            images: [
                '/images/blog/ten-things/ten-things-1.webp'
            ]
        },
        {
            id: 2,
            title: t('yurt_tells.title'),
            location: t('yurt_tells.location'),
            images: [
                '/images/blog/yurt-tells/yurt-tells-1.webp'
            ]
        },
        {
            id: 3,
            title: t('kokpar.title'),
            location: t('kokpar.location'),
            images: [
                '/images/blog/kokpar/kokpar-1.webp'
            ]
        },
        {
            id: 4,
            title: t('packing_guide.title'),
            location: t('packing_guide.location'),
            images: [
                '/images/blog/packing-guide/packing-guide-1.webp'
            ]
        },
        {
            id: 5,
            title: t('the_rhytons_of_nisa.title'),
            location: t('the_rhytons_of_nisa.location'),
            images: [
                '/images/blog/the-rhytons-of-nisa/the-rhytons-of-nisa-1.webp'
            ]
        },
        {
            id: 6,
            title: t('top_dishes.title'),
            location: t('top_dishes.location'),
            images: [
                '/images/blog/top-dishes/top-dishes-1.webp'
            ]
        },
        {
            id: 7,
            title: t('domes_are_blue.title'),
            location: t('domes_are_blue.location'),
            images: [
                '/images/blog/domes-are-blue/domes-are-blue-1.webp'
            ]
        }
    ]
}
