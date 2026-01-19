"use client"

import { useCallback, useEffect, useRef } from "react";
import AboutAuthorCard from "../common/AboutAuthorCard";
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { useResponsiveStore } from "@/store/useResponsiveStore";

import { aboutImagesData } from "@/data/about.data";

const TWEEN_FACTOR_BASE = 0.17

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max)

export default function AboutAuthorSlider() {
    const isTablet = useResponsiveStore(state => state.isTablet);
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        align: isTablet ? 'start' : 'center',
        loop: true,
        dragFree: isTablet ? true : false, 
    })
    const tweenFactor = useRef(0)
    const tweenNodes = useRef<HTMLElement[]>([])

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode: HTMLElement) => {
            return slideNode.querySelector('.card__selector') as HTMLElement
        })
    }, [])

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const scrollToSlide = useCallback((index: number) => {
        if (emblaApi && !isTablet) {
            emblaApi.scrollTo(index);
        }
    }, [emblaApi, isTablet]);

    const tweenScale = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
            const engine = emblaApi.internalEngine()
            const scrollProgress = emblaApi.scrollProgress()
            const slidesInView = emblaApi.slidesInView()
            const isScrollEvent = eventName === 'scroll'

            emblaApi.scrollSnapList().forEach((scrollSnap: number, snapIndex: number) => {
                let diffToTarget = scrollSnap - scrollProgress
                const slidesInSnap = engine.slideRegistry[snapIndex]

                slidesInSnap.forEach((slideIndex: number) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target()

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target)

                                if (sign === -1) {
                                    diffToTarget = scrollSnap - (1 + scrollProgress)
                                }
                                if (sign === 1) {
                                    diffToTarget = scrollSnap + (1 - scrollProgress)
                                }
                            }
                        })
                    }

                    const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
                    const scale = numberWithinRange(tweenValue, 0, 1).toString()
                    const tweenNode = tweenNodes.current[slideIndex]
                    tweenNode.style.transform = `scale(${scale})`
                })
            })
            },
        []
    )

    useEffect(() => {
        if (!emblaApi || isTablet) return

        setTweenNodes(emblaApi)
        setTweenFactor(emblaApi)
        tweenScale(emblaApi)

        emblaApi
        .on('reInit', setTweenNodes)
        .on('reInit', setTweenFactor)
        .on('reInit', tweenScale)
        .on('scroll', tweenScale)
        .on('slideFocus', tweenScale)
    }, [emblaApi, tweenScale, setTweenNodes, setTweenFactor, isTablet])

    return (
        <div className="relative w-full h-[459px] lg:overflow-hidden lg:h-[530px] lg:w-480">
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
                <div className="flex touch-pan-y touch-pinch-zoom">
                    {aboutImagesData.map((card, index) => (
                        <AboutAuthorCard 
                            key={card.id} 
                            image={card.image}
                            onClick={() => scrollToSlide(index)}
                        />
                    ))}
                </div>
            </div> 
        </div>
    )
}