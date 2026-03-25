"use client"

import { useState, useCallback, useEffect } from "react";
import PaidLectureCard from "../common/PaidLectureCard";
import useEmblaCarousel from "embla-carousel-react";
import { useResponsiveStore } from "@/store/useResponsiveStore";
import { PaidLecturesSliderProps } from "@/types/props/PaidLecturesSlider.props";

export default function PaidLecturesSlider({lectures, page, purchasesLectures}: PaidLecturesSliderProps) {
    const isTablet = useResponsiveStore(state => state.isTablet);

    const shouldLoop = page === 'home' && lectures.length > 4;

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: isTablet ? 'start' : 'center',
        loop: shouldLoop,
        dragFree: isTablet,
        containScroll: false, 
    })

    const [activeCardIndex, setActiveCardIndex] = useState(0);
    
    const onSelect = useCallback(() => {
        if (emblaApi) {
            const activeIndex = emblaApi.selectedScrollSnap();
            setActiveCardIndex(activeIndex);
        }
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);

    const scrollToSlide = useCallback((index: number) => {
        if (emblaApi && !isTablet) {
            emblaApi.scrollTo(index);
        }
    }, [emblaApi, isTablet]);

    const isActive = (index: number) => {
        if (isTablet) return true;
        return activeCardIndex === index;
    }

    return (
        <div className="relative w-full lg:overflow-hidden lg:h-143.75 lg:w-480">
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
                    {lectures.map((lecture, index) => (
                        <PaidLectureCard 
                            key={lecture.id} 
                            lecture={lecture}
                            isActive={isActive(index)}
                            onClick={() => scrollToSlide(index)}
                            isCarousel
                            isBought={purchasesLectures?.some(ul => ul.lectureId === lecture.id) || page === 'account'}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}