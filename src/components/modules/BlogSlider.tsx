"use client"

import { JSX, useCallback, useEffect, useRef, useState } from "react";
import BlogCard from "../common/BlogCard";
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

const TWEEN_FACTOR_BASE = 0.17

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max)

export default function BlogSlider(): JSX.Element {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
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

    const onSelect = useCallback(() => {
        if (emblaApi) {
            const activeIndex = emblaApi.selectedScrollSnap();
            setActiveCardIndex(activeIndex);
        }
    }, [emblaApi]);

    const scrollToSlide = useCallback((index: number) => {
        if (emblaApi) {
            emblaApi.scrollTo(index);
        }
    }, [emblaApi]);

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
        if (!emblaApi) return

        setTweenNodes(emblaApi)
        setTweenFactor(emblaApi)
        tweenScale(emblaApi)

        emblaApi
        .on('reInit', setTweenNodes)
        .on('reInit', setTweenFactor)
        .on('reInit', tweenScale)
        .on('scroll', tweenScale)
        .on('slideFocus', tweenScale)
        .on('select', onSelect);
    }, [emblaApi, tweenScale, setTweenNodes, setTweenFactor, onSelect])

    const isActive = (index: number) => {
        return activeCardIndex === index
    }

    return (
        <div className="relative overflow-hidden h-[530px] w-480">
            <div ref={emblaRef}>
                <div  className="flex touch-pan-y touch-pinch-zoom">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <BlogCard 
                            key={index} 
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