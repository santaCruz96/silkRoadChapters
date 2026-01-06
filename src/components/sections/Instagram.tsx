"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { useResponsiveStore } from "@/store/useResponsiveStore";

export default function Instagram() {
    const isTablet = useResponsiveStore(state => state.isTablet);

    const [emblaRef] = useEmblaCarousel({align: 'start', dragFree: true })

    return (
        <section className="flex flex-col gap-16 items-center w-full">
            <div className="flex flex-col sm:w-148 items-center">
                <h3 className="font-bold text-[36px] text-center text-dark mb-4">
                    Follow Us Along the Silk Road
                </h3>
                <p className="font-medium text-[16px] leading-[160%] text-center text-grey">
                    Discover how the Silk Road looks through the lenses of our community — follow us on Instagram 
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
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div 
                                    key={index} 
                                    className="min-w-72 h-72 rounded-[20px] bg-image"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex gap-4 w-full">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="w-full h-110 rounded-[20px] bg-image"></div>
                        <div className="w-full h-72 rounded-[20px] bg-image"></div>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="w-full h-72 rounded-[20px] bg-image"></div>
                        <div className="w-full h-[439px] rounded-[20px] bg-image"></div>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="w-full h-110 rounded-[20px] bg-image"></div>
                        <div className="w-full h-72 rounded-[20px] bg-image"></div>
                    </div>
                </div>
            )}
        </section>
    )
}