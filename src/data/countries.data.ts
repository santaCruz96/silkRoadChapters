import { ICountries } from "@/types/interfaces/Countries.interface";
import {useTranslations} from 'next-intl';

export const useCountriesData = (): ICountries[] => {
    const t = useTranslations('Geography');

    return [
        {
            id: 1,
            country: t('Kazakhstan'),
            images: [
                {
                    coords: 'top-2 left-14',
                    path: '/images/geoagraphy/Kazakhstan/kazakhstan-1.webp'
                },
                {
                    coords: 'top-24 left-50',
                    path: '/images/geoagraphy/Kazakhstan/kazakhstan-2.webp'
                },
                {
                    coords: '-bottom-18 left-30',
                    path: '/images/geoagraphy/Kazakhstan/kazakhstan-3.webp'
                },
                {
                    coords: '-bottom-22 right-60',
                    path: '/images/geoagraphy/Kazakhstan/kazakhstan-4.webp'
                },
                {
                    coords: 'top-10 right-53',
                    path: '/images/geoagraphy/Kazakhstan/kazakhstan-5.webp'
                }
            ]
        },
        {
            id: 2,
            country: t('Tajikistan'),
            images: [
                {
                    coords: 'top-2 left-44',
                    path: '/images/geoagraphy/Tajikistan/tajikistan-1.webp'
                },
                {
                    coords: 'top-24 left-10',
                    path: '/images/geoagraphy/Tajikistan/tajikistan-2.webp'
                },
                {
                    coords: '-bottom-18 left-60',
                    path: '/images/geoagraphy/Tajikistan/tajikistan-3.webp'
                },
                {
                    coords: '-bottom-22 right-70',
                    path: '/images/geoagraphy/Tajikistan/tajikistan-4.webp'
                },
                {
                    coords: 'top-20 right-33',
                    path: '/images/geoagraphy/Tajikistan/tajikistan-5.webp'
                }
            ]
        },
        {
            id: 3,
            country: t('Turkmenistan'),
            images: [
                {
                    coords: 'top-12 left-44',
                    path: '/images/geoagraphy/Turkmenistan/turkmenistan-1.webp'
                },
                {
                    coords: 'top-24 right-60',
                    path: '/images/geoagraphy/Turkmenistan/turkmenistan-2.webp'
                },
                {
                    coords: '-bottom-18 left-90',
                    path: '/images/geoagraphy/Turkmenistan/turkmenistan-3.webp'
                },
                {
                    coords: '-bottom-25 right-90',
                    path: '/images/geoagraphy/Turkmenistan/turkmenistan-4.webp'
                },
                {
                    coords: 'top-10 right-30',
                    path: '/images/geoagraphy/Turkmenistan/turkmenistan-5.webp'
                }
            ]
        },
        {
            id: 4,
            country: t('Uzbekistan'),
            images: [
                {
                    coords: 'top-22 left-49',
                    path: '/images/geoagraphy/Uzbekistan/uzbekistan-1.webp'
                },
                {
                    coords: '-bottom-24 right-150',
                    path: '/images/geoagraphy/Uzbekistan/uzbekistan-2.webp'
                },
                {
                    coords: '-bottom-21 left-80',
                    path: '/images/geoagraphy/Uzbekistan/uzbekistan-3.webp'
                },
                {
                    coords: '-bottom-20 right-70',
                    path: '/images/geoagraphy/Uzbekistan/uzbekistan-4.webp'
                },
                {
                    coords: 'top-10 right-30',
                    path: '/images/geoagraphy/Uzbekistan/uzbekistan-5.webp'
                }
            ]
        },
        {
            id: 5,
            country: t('Kyrgyzstan'),
            images: [
                {
                    coords: 'top-2 left-9',
                    path: '/images/geoagraphy/Kyrgyzstan/kyrgyzstan-1.webp'
                },
                {
                    coords: 'top-20 left-45',
                    path: '/images/geoagraphy/Kyrgyzstan/kyrgyzstan-2.webp'
                },
                {
                    coords: '-bottom-21 right-110 ',
                    path: '/images/geoagraphy/Kyrgyzstan/kyrgyzstan-3.webp'
                },
                {
                    coords: 'top-27 right-10',
                    path: '/images/geoagraphy/Kyrgyzstan/kyrgyzstan-4.webp'
                },
                {
                    coords: '-top-10 right-50',
                    path: '/images/geoagraphy/Kyrgyzstan/kyrgyzstan-5.webp'
                }
            ]
        },
        {
            id: 6,
            country: t('Iran'),
            images: [
                {
                    coords: '-top-12 left-58',
                    path: '/images/geoagraphy/Iran/iran-1.webp'
                },
                {
                    coords: 'top-10 left-0',
                    path: '/images/geoagraphy/Iran/iran-2.webp'
                },
                {
                    coords: '-bottom-18 left-70',
                    path: '/images/geoagraphy/Iran/iran-3.webp'
                },
                {
                    coords: '-bottom-21 right-10',
                    path: '/images/geoagraphy/Iran/iran-4.webp'
                },
                {
                    coords: 'top-10 right-50',
                    path: '/images/geoagraphy/Iran/iran-5.webp'
                }
            ]
        },
        {
            id: 7,
            country: t('Turkey'),
            images: [
                {
                    coords: 'top-0 left-48',
                    path: '/images/geoagraphy/Turkey/turkey-1.webp'
                },
                {
                    coords: 'top-0 right-0',
                    path: '/images/geoagraphy/Turkey/turkey-2.webp'
                },
                {
                    coords: '-bottom-18 left-80',
                    path: '/images/geoagraphy/Turkey/turkey-3.webp'
                },
                {
                    coords: '-bottom-21 right-10',
                    path: '/images/geoagraphy/Turkey/turkey-4.webp'
                },
                {
                    coords: 'top-20 right-55',
                    path: '/images/geoagraphy/Turkey/turkey-5.webp'
                }
            ]
        },
        {
            id: 8,
            country: t('Afghanistan'),
            images: [
                {
                    coords: '-top-10 left-58',
                    path: '/images/geoagraphy/Afghanistan/afghanistan-1.webp'
                },
                {
                    coords: 'top-20 left-36',
                    path: '/images/geoagraphy/Afghanistan/afghanistan-2.webp'
                },
                {
                    coords: '-bottom-22 right-80',
                    path: '/images/geoagraphy/Afghanistan/afghanistan-3.webp'
                },
                {
                    coords: 'top-21 right-10',
                    path: '/images/geoagraphy/Afghanistan/afghanistan-4.webp'
                },
                {
                    coords: 'top-15 right-52',
                    path: '/images/geoagraphy/Afghanistan/afghanistan-5.webp'
                }
            ]
        },
        {
            id: 9,
            country: t('Pakistan'),
            images: [
                {
                    coords: 'top-10 left-28',
                    path: '/images/geoagraphy/Pakistan/pakistan-1.webp'
                },
                {
                    coords: '-bottom-20 left-136',
                    path: '/images/geoagraphy/Pakistan/pakistan-2.webp'
                },
                {
                    coords: '-bottom-22 right-0',
                    path: '/images/geoagraphy/Pakistan/pakistan-3.webp'
                },
                {
                    coords: 'top-0 right-0',
                    path: '/images/geoagraphy/Pakistan/pakistan-4.webp'
                },
                {
                    coords: 'top-25 right-52',
                    path: '/images/geoagraphy/Pakistan/pakistan-5.webp'
                }
            ]
        },
        {
            id: 10,
            country: t('India'),
            images: [
                {
                    coords: 'top-0 left-58',
                    path: '/images/geoagraphy/India/india-1.webp'
                },
                {
                    coords: 'top-20 left-16',
                    path: '/images/geoagraphy/India/india-2.webp'
                },
                {
                    coords: '-bottom-22 left-100',
                    path: '/images/geoagraphy/India/india-3.webp'
                },
                {
                    coords: '-bottom-19 right-70',
                    path: '/images/geoagraphy/India/india-4.webp'
                },
                {
                    coords: 'top-0 right-32',
                    path: '/images/geoagraphy/India/india-5.webp'
                }
            ]
        },
        {
            id: 11,
            country: t('China'),
            images: [
                {
                    coords: '-bottom-18 left-58',
                    path: '/images/geoagraphy/China/china-1.webp'
                },
                {
                    coords: 'top-20 left-26',
                    path: '/images/geoagraphy/China/china-2.webp'
                },
                {
                    coords: '-bottom-24 left-110',
                    path: '/images/geoagraphy/China/china-3.webp'
                },
                {
                    coords: '-bottom-19 right-70',
                    path: '/images/geoagraphy/China/china-4.webp'
                },
                {
                    coords: 'top-10 right-45',
                    path: '/images/geoagraphy/China/china-5.webp'
                }
            ]
        }
    ]
}