'use client';

import { useEffect, useState } from "react";
import Icon from "@/icons/Icon";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PaidLectureCardProps } from "@/types/props/PaidLectureCard.props";
import Button from "./Button";
import {useLocale, useTranslations} from 'next-intl';

export default function PaidLectureCard({
    lecture,
    isActive, 
    isCarousel, 
    isBought, 
    ...props
}: PaidLectureCardProps ) {
    const router = useRouter();
    const locale = useLocale();
    const title = locale === 'ru' ? lecture.titleRu : lecture.titleEn;
    const description = locale === 'ru' ? lecture.shortDescriptionRu : lecture.shortDescriptionEn;

    const t = useTranslations('PaidLectureCard');

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

    const toPayment = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); 
        e.preventDefault();   
        router.push(`/payment/${lecture.id}`); 
    }

    return (
        <Link
            href={isActive ? `/paid/${lecture.id}` : ``}
            className={`${isCarousel ? 'flex-[0_0_auto]' : 'grid-cols-1'}`} 
            {...props}
        >
            <div className={`card__selector flex flex-col rounded-[20px] p-4 bg-light 
                shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)] cursor-pointer 
                transition duration-180 ease-out-[0.2,0.8,0.2,1] ${isCarousel ? 'mr-4 w-72 lg:w-148' : 'w-full'}
                hover:bg-[#F7F7F7] hover:shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]`}
            >
                <div 
                    className={`relative mb-4 rounded-xl w-full h-64 ${isCarousel && 'lg:w-140'} 
                        lg:h-78.75 bg-cover bg-center bg-no-repeat`}
                    style={{ backgroundImage: `url(${lecture.coverImageUrl})`}}
                >
                    {isNew && (
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
                    {isBought ? 
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
                            onClick={toPayment}
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