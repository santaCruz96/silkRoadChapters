import { IBenefits } from "@/types/interfaces/Benefits.interface";
import {useTranslations} from 'next-intl';

export const useBenefitsData = (): IBenefits[] => {
    const t = useTranslations('Benefits');
    
    return [
        {
            id: 1,
            icon: 'light',
            size: 'col-span-1 lg:col-span-2',
            title: t('original.title'),
            text: t('original.text')
        },
        {
            id: 2,
            icon: 'crown',
            size: 'col-span-1 lg:col-span-3',
            title: t('experience.title'),
            text: t('experience.text')
        },
        {
            id: 3,
            icon: 'academicCap',
            size: 'col-span-1 lg:col-span-3',
            title: t('learning.title'),
            text: t('learning.text')
        },
        {
            id: 4,
            icon: 'twoStars',
            size: 'col-span-1 lg:col-span-3',
            title: t('personal.title'),
            text: t('personal.text')
        },
        {
            id: 5,
            icon: 'file',
            size: 'col-span-1 lg:col-span-2',
            title: t('crossCultural.title'),
            text: t('crossCultural.text')
        },
        {
            id: 6,
            icon: 'earth',
            size: 'col-span-1 lg:col-span-3',
            title: t('curiosity.title'),
            text: t('curiosity.text')
        },
    ]
}