"use client"

import { useState, useCallback } from "react";
import PaidLectureCard from "../common/PaidLectureCard";
import useEmblaCarousel from "embla-carousel-react";
import { useResponsiveStore } from "@/store/useResponsiveStore";
import { PaidLecturesSliderProps } from "@/interfaces/PaidLecturesSlider.props";

export default function PaidLecturesSlider({page}: PaidLecturesSliderProps) {
    const isTablet = useResponsiveStore(state => state.isTablet);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: isTablet ? 'start' : 'center',
        loop: page === 'home' && true,
        dragFree: isTablet ? true : false
    })

    const [activeCardIndex, setActiveCardIndex] = useState(0);
    
    const onSelect = useCallback(() => {
        if (emblaApi) {
            const activeIndex = emblaApi.selectedScrollSnap();
            setActiveCardIndex(activeIndex);
        }
    }, [emblaApi]);

    if (emblaApi) {
        emblaApi.on('select', onSelect);
    }

    const scrollToSlide = useCallback((index: number) => {
        if (emblaApi && !isTablet) {
            emblaApi.scrollTo(index);
        }
    }, [emblaApi, isTablet]);

    const isActive = (index: number) => {
        if (isTablet) return true
        return activeCardIndex === index
    }

    return (
        <div className="relative w-full lg:overflow-hidden lg:h-[575px] lg:w-480">
            {!isTablet &&
                <div className="absolute inset-y-0 left-0 w-30 bg-linear-to-r 
                    from-[#f2f2f2] to-transparent z-10 pointer-events-none"
                />
            }
            {!isTablet &&
                <div className="absolute inset-y-0 right-0 w-30 bg-linear-to-l 
                    from-[#f2f2f2] to-transparent z-10 pointer-events-none"
                />
            }
            <div ref={emblaRef}> 
                <div className="flex sm:items-center select-none touch-pan-y touch-pinch-zoom">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <PaidLectureCard 
                            key={index} 
                            cardId={index}
                            isActive={isActive(index)}
                            onClick={() => scrollToSlide(index)}
                            isCarousel
                            isBought={page === 'account'}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}