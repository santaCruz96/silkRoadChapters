"use client"

import { useState, useCallback } from "react";
import PaidLectureCard from "../common/PaidLectureCard";
import useEmblaCarousel from "embla-carousel-react";

export default function PaidLecturesSlider() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'center',
        loop: true,
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
        if (emblaApi) {
            emblaApi.scrollTo(index);
        }
    }, [emblaApi]);

    const isActive = (index: number) => {
        return activeCardIndex === index
    }

    return (
        <div className="relative overflow-hidden h-[575px] w-480">
            <div ref={emblaRef}> 
                <div className="flex items-center select-none touch-pan-y touch-pinch-zoom">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <PaidLectureCard 
                            key={index} 
                            cardId={index}
                            isActive={isActive(index)}
                            onClick={() => scrollToSlide(index)}
                            isCarousel
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}