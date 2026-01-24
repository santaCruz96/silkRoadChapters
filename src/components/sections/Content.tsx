"use client";

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import DeatailsCard from "../common/DetailsCard";
import ContentCards from "../common/ContentCards";
import ContentVideo from '../modules/ContentVideo';
import { useResponsiveStore } from "@/store/useResponsiveStore";
import useActiveLectureStore from '@/store/useActiveLectureStore';

import { usePaidLectures } from '@/data/paidLectures.data';

export default function Content() {
    const isTablet = useResponsiveStore((state) => state.isTablet);
    const pathname = usePathname();

    const { currentLecture } = useActiveLectureStore();
    const lectures = usePaidLectures();

    const activeLectureData = useMemo(() => {
        if (!currentLecture) return null;
        return lectures.find(
            (lecture) => lecture.id === currentLecture.id && lecture.type === currentLecture.type
            ) || null;
    }, [currentLecture, lectures]);

    const isPaid = pathname.includes('/paid')
    const isBlog = pathname.includes('/blog')

    return (
        <section className="flex flex-col gap-16 w-full">
            <h1 className="font-bold text-[40px] leading-12 sm:text-[64px] sm:leading-[77px] tracking-[-0.01em] text-center text-dark">
                {activeLectureData?.title}
            </h1>
            {!isBlog && 
                <ContentVideo image={activeLectureData?.images[0]}/>
            }
            <div className="flex gap-4 w-full">
                <div className="flex flex-col gap-12 sm:gap-16 flex-1">
                    {isTablet && !isBlog && <DeatailsCard isPaid={isPaid} details={activeLectureData?.details}/>}
                    {!isBlog && 
                        <div className="flex gap-4">
                            <p className="w-full font-medium text-[16px] leading-[160%] text-grey">
                                {activeLectureData?.texts[0]}
                            </p>
                            <p className="w-full font-medium text-[16px] leading-[160%] text-grey">
                                {activeLectureData?.texts[0]}
                            </p>
                        </div>
                    }
                    <ContentCards numberOfCards={1} images={activeLectureData?.images}/>
                    {isTablet && isBlog && <DeatailsCard isPaid={isPaid}/>}
                    <p className="font-medium text-[24px] leading-[160%] text-grey">
                        {activeLectureData?.texts[0]}
                    </p>
                    <ContentCards numberOfCards={2} images={activeLectureData?.images}/>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <p className="w-full font-medium text-[16px] leading-[160%] text-grey">
                            {activeLectureData?.texts[0]}
                        </p>
                        <p className="w-full font-medium text-[16px] leading-[160%] text-grey">
                            {activeLectureData?.texts[0]}
                        </p>
                    </div>
                </div>
                {!isTablet && <DeatailsCard isPaid={isPaid} details={activeLectureData?.details}/>}
            </div>
        </section>
    )
}