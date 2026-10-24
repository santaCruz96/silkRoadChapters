'use client';

import { useEffect, useState } from "react";
import Icon from "@/icons/Icon";
import Image from 'next/image';
// import { useRouter } from "next/navigation";
import Link from "next/link";
import { PaidLectureCardProps } from "@/types/props/PaidLectureCard.props";
import Button from "./Button";
import Countdown from "./Countdown";
import {useLocale, useTranslations} from 'next-intl';
import useAnnouncement from "@/hooks/useAnnouncement";
import { useNotifyModal } from "@/store/useNotifyModalStore";
import { getTashkentDateParts } from "@/utils/date";

export default function PaidLectureCard({
    lecture: initialLecture,
    isActive, 
    isCarousel, 
    isBought, 
    onClick,
    ...props
}: PaidLectureCardProps ) {
    // const router = useRouter();
    const { lecture, timeLeft, isAnnounced, updateLecture } = useAnnouncement(initialLecture);
    const openNotifyModal = useNotifyModal(state => state.open);
    const locale = useLocale();
    const title = locale === 'ru' ? lecture.titleRu : lecture.titleEn;
    const description = locale === 'ru' ? lecture.shortDescriptionRu : lecture.shortDescriptionEn;

    const t = useTranslations('PaidLectureCard');

    const availableAt = isAnnounced && lecture.availableAt
        ? getTashkentDateParts(lecture.availableAt, locale)
        : null;

    const [isNew, setIsNew] = useState(false);

    useEffect(() => {
        if (!lecture.createdAt) return;

        const createdAt = new Date(lecture.createdAt).getTime();
        const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
        const expiresAt = createdAt + sevenDaysInMs;

        const checkIsNew = () => {
            setIsNew(Date.now() < expiresAt);
        };

        checkIsNew();

        const timeLeft = expiresAt - Date.now();

        if (timeLeft <= 0) return;

        const timeout = setTimeout(() => {
            setIsNew(false);
        }, timeLeft);

        return () => clearTimeout(timeout);
    }, [lecture.createdAt]);

    // const toPayment = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.stopPropagation(); 
    //     e.preventDefault();   
    //     router.push(`/payment/${lecture.id}`); 
    // }

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        onClick?.(e);

        if (!isAnnounced) return;

        e.preventDefault();

        if (isActive) openNotifyModal(lecture.id, updateLecture);
    };

    return (
        <Link
            href={isActive && !isAnnounced ? `/paid/${lecture.id}` : ``}
            className={`${isCarousel ? 'flex-[0_0_auto]' : 'grid-cols-1'}`} 
            onClick={handleClick}
            {...props}
        >
            <div className={`card__selector flex flex-col rounded-[20px] p-4 bg-light 
                shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)] cursor-pointer 
                transition duration-180 ease-out-[0.2,0.8,0.2,1] ${isCarousel ? 'mr-4 w-72 lg:w-148' : 'w-full'}
                hover:bg-[#F7F7F7] hover:shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]`}
            >
                <div 
                    className={`relative mb-4 rounded-xl w-full h-64 ${isCarousel && 'lg:w-140'} 
                        lg:h-78.75 overflow-hidden`}
                >
                    {lecture.coverImageUrl && (
                        <Image src={lecture.coverImageUrl} alt="" fill priority className="object-cover" />
                    )}
                    {isAnnounced ? (
                        <div className="absolute inset-0 bg-black/80">
                            <span
                                className="absolute left-3 top-3 rounded-xl px-3 py-1 
                                bg-light font-medium text-[12px] text-dark"
                            >
                                {t('coming_soon_badge')}
                            </span>
                            {timeLeft > 0 && (
                                <Countdown 
                                    timeLeft={timeLeft} 
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                />
                            )}
                            {availableAt && (
                                <p className="absolute left-3 bottom-3 max-w-48 font-medium text-[12px] leading-[125%] text-light">
                                    {t('available_from', availableAt)}
                                </p>
                            )}
                        </div>
                    ) : isNew && (
                        <span
                            className="absolute left-3 top-3 rounded-xl px-3 py-1 
                            bg-light font-medium text-[12px] text-dark"
                        >
                            New
                        </span>
                    )}
                </div>
                <div className={`flex flex-col gap-3 mb-8 ${isActive ? 'min-h-24.75' : 'min-h-19.75'}`}>
                    <p className="font-semibold text-[18px] text-dark leading-5.5">
                        {title}
                    </p>
                    <p className="font-normal text-[14px] leading-[160%] text-grey line-clamp-2">
                        {description?.replace(/<[^>]*>?/gm, ' ')}
                    </p>
                </div>
                <div className={`flex w-full justify-between items-center
                    transition-all duration-300 ease-in-out
                    ${isActive ? 'h-14 opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}
                >   
                    {isAnnounced ?
                        <Button 
                            color="background" 
                            size="xl"
                            form="round"
                            icon="lock"
                            type="button"
                            tabIndex={-1}
                            aria-disabled
                        >
                            {t('coming_soon_button')}
                        </Button>
                    : isBought ? 
                        <Button 
                            color="stroke" 
                            size="xl"
                            form="round"
                            icon='verifiedCheck'
                        >
                            {t('purchased_button')}
                        </Button>
                    :
                        <Button 
                            color="dark" 
                            size="xl"
                            form="round"
                            icon='cart'
                            hover="primary"
                            // onClick={toPayment}
                        >
                            {t('buy_button')}
                        </Button>
                    }
                    
                    <div className="hidden lg:flex gap-2">
                        <Icon className="fill-dark" name="eye"/>
                        <p className="font-normal text-[16px] uppercase text-dark">
                            {lecture.popularityCount}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}