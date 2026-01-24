"use client";

import { useState } from 'react';
import Button from "@/components/common/Button";
import GeneralContainer from "@/layouts/GeneralContainer";
import Lottie from 'react-lottie-player';
import animationData from '@/animation/silk_road_chapters.json';
import Link from "next/link";
import { useResponsiveStore } from "@/store/useResponsiveStore";
import {useTranslations} from 'next-intl';

export default function SuccessfulPayment() {
    const t = useTranslations('SuccessfulPayment');
    const isMobile = useResponsiveStore(state => state.isMobile);
    const [direction, setDirection] = useState<1 | -1>(1);

    const handleComplete = () => {
        setDirection(prev => prev === 1 ? -1 : 1);
    };

    return (
        <div className="flex justify-center bg-background">
            <GeneralContainer>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="mb-4 font-bold text-[40px] sm:text-[64px] leading-12 
                            sm:leading-19 tracking-[-0.01em] text-center text-dark"
                    >
                        {t('title')}
                    </h1>
                    <Lottie
                        animationData={animationData}
                        loop={false}
                        play
                        direction={direction}
                        onComplete={handleComplete}
                        className="w-56.75 md:w-72.75"
                    />
                    <Link
                        href={'/account'}
                        className="w-full sm:w-auto"
                    >
                        <Button
                            color="dark"
                            size={isMobile ? "full" : "xl"}
                            form="round"
                            icon="user"
                            hover="primary"
                        >
                            {t('accountButton')}
                        </Button>
                    </Link>
                </div>
            </GeneralContainer>
        </div>
    )
}