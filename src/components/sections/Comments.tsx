"use client";

import TextArea from "../common/TextArea"
import Button from "../common/Button"
import ContentReview from "../common/ContentReview"
import { useResponsiveStore } from "@/store/useResponsiveStore";
import useEmblaCarousel from "embla-carousel-react";
import {useTranslations} from 'next-intl';

export default function Comments() {
    const t = useTranslations('Comments');
    const isMobile = useResponsiveStore((state) => state.isMobile);
    const isTablet = useResponsiveStore((state) => state.isTablet);
    const [emblaRef] = useEmblaCarousel({ align: "start", dragFree: true });

    return (
        <section className="flex flex-col gap-12 sm:gap-16 items-center w-full">
            <div className="flex flex-col gap-8 items-center">
                <div className="flex flex-col gap-4 w-full lg:max-w-148">
                    <h3 className="font-bold text-[36px] leading-11 text-center text-dark">
                        {t('title')}
                    </h3>
                    <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                        {t('text')}
                    </p>
                </div>
                <TextArea/>
                <Button
                    color="dark"
                    size={isMobile ? 'full' : 'xxl'}
                    form="round"
                    icon="multipleForward"
                    hover="primary"
                >
                    Post
                </Button>
            </div>
            {isTablet ? 
                <div className="w-full">
                    <div ref={emblaRef}>
                        <div className="flex gap-4">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <ContentReview key={index}/>
                            ))}
                        </div>
                    </div>
                </div>
            :
                <div className="flex flex-wrap gap-y-8 gap-x-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <ContentReview key={index}/>
                    ))}
                </div>
            }
            
        </section>
    )
}