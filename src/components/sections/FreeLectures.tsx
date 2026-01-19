"use client";

import Button from "../common/Button";
import Icon from "@/icons/Icon";
import FreeLectureSlider from "../modules/FreeLecturesSlider";
import { usePrevNextButtons } from "@/hooks/usePrevNextButtons";
import useEmblaCarousel from 'embla-carousel-react';
import { usePathname } from 'next/navigation';
import {useTranslations} from 'next-intl';

export default function FreeLectures() {
    const t = useTranslations('FreeLectures');

    const pathname = usePathname();

    const isContentPage = pathname.includes('/free');

    const [emblaRef, emblaApi] = useEmblaCarousel({align: 'start', dragFree: true })

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="flex flex-col gap-12 sm:gap-16 w-full" id="free-lectures">
            <div className="flex justify-center lg:justify-between">
                <div className="flex flex-col gap-4 w-148">
                    <h3 className="font-bold text-center leading-11 lg:text-start text-[36px] text-dark">
                        {isContentPage ? 
                            t('contentPage_title')
                        : 
                            t('homePage_title')
                        }
                    </h3>
                    <p className="font-medium text-center lg:text-start text-[16px] leading-[160%] text-grey">
                        {isContentPage ? 
                            t('contentPage_text')
                        : 
                            t('homePage_text')
                        }
                    </p>
                </div>
                <div className="hidden lg:flex gap-4">
                    <Button 
                        color="light" 
                        size="sm" 
                        form="square" 
                        onClick={onPrevButtonClick} 
                        shadow={prevBtnDisabled ? false : true}
                        disabled={prevBtnDisabled}
                        isDisabled={prevBtnDisabled}
                        hover={!prevBtnDisabled ? "smallSquare" : ""}
                    >
                        <Icon name="arrowLeft" className="stroke-dark fill-transparent w-8 h-8"/>
                    </Button>
                    <Button 
                        color="light" 
                        size="sm" 
                        form="square" 
                        onClick={onNextButtonClick} 
                        shadow={nextBtnDisabled ? false : true}
                        disabled={nextBtnDisabled}
                        isDisabled={nextBtnDisabled}
                        hover={!nextBtnDisabled ? "smallSquare" : ""}
                    >
                        <Icon name="arrowRight" className="stroke-dark fill-transparent w-8 h-8"/>
                    </Button>
                </div>
            </div>
            <FreeLectureSlider ref={emblaRef}/>
        </section>
    )
}