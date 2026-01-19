"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { useResponsiveStore } from "@/store/useResponsiveStore";
import {useTranslations} from 'next-intl';

import { instagramData } from '@/data/instagram.data';

export default function Instagram() {
    const t = useTranslations('Instagram');

    const isTablet = useResponsiveStore(state => state.isTablet);

    const [emblaRef] = useEmblaCarousel({align: 'start', dragFree: true })

    return (
        <section className="flex flex-col gap-16 items-center w-full">
            <div className="flex flex-col sm:w-148 items-center">
                <h3 className="font-bold text-[36px] text-center text-dark mb-4">
                    {t('title')}
                </h3>
                <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                    {t('text')}
                    <a 
                        href="https://www.instagram.com/silk_road_chapters/"
                        target="_blank"
                        rel="noopener noreferrer"
                    > @silk_road_chapters 
                    </a>             
                </p>
            </div>
            {isTablet ? (
                <div className="w-full">
                    <div ref={emblaRef}>
                        <div className="flex gap-4">
                            {instagramData.map((card) => (
                                <a 
                                    key={card.id}
                                    href={card.link}
                                >
                                    <div 
                                        className="min-w-72 h-72 rounded-[20px] bg-cover bg-center bg-no-repeat"
                                        style={{ backgroundImage: `url(${card.image})`}}
                                    />
                                </a>
                                
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex gap-4 w-full">
                    <div className="flex flex-col gap-4 w-full">
                        <a href={instagramData[0].link}>
                            <div 
                                className="w-full h-110 rounded-[20px] bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${instagramData[0].image})`}}
                            />
                        </a>
                        <a href={instagramData[3].link}>
                            <div 
                                className="w-full h-72 rounded-[20px] bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${instagramData[3].image})`}}
                            />
                        </a>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <a href={instagramData[1].link}>
                            <div
                                className="w-full h-72 rounded-[20px] bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${instagramData[1].image})`}}
                            />
                        </a>
                        <a href={instagramData[4].link}>
                            <div 
                                className="w-full h-[439px] rounded-[20px] bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${instagramData[4].image})`}}
                            />
                        </a>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <a href={instagramData[2].link}>
                            <div 
                                className="w-full h-110 rounded-[20px] bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${instagramData[2].image})`}}
                            />
                        </a>
                        <a href={instagramData[5].link}>
                            <div 
                                className="w-full h-72 rounded-[20px] bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${instagramData[5].image})`}}
                            />
                        </a>
                    </div>
                </div>
            )}
        </section>
    )
}