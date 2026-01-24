import { useCallback } from "react";
import Icon from "@/icons/Icon";
import { PaidLectureCardProps } from "@/types/props/PaidLectureCard.props";
import Button from "./Button";
import {useTranslations} from 'next-intl';
import useActiveLectureStore from '@/store/useActiveLectureStore';
import { useRouter } from 'next/navigation';

import { IPaidLecture } from '@/types/interfaces/PaidLecture.interface';

export default function PaidLectureCard({
    lecture,
    isActive, 
    isCarousel, 
    isBought, 
    onClick
}: PaidLectureCardProps ) {

    const setCurrentLecture = useActiveLectureStore((state) => state.setCurrentLecture);
    const router = useRouter();

    const t = useTranslations('PaidLectureCard');

    const handleLectureClick = useCallback((lecture: IPaidLecture) => {
        if (!isActive) return; 

        setCurrentLecture(lecture.id, lecture.type);
        router.push(`/paid/${lecture.id}`);
    }, [setCurrentLecture, router, isActive]);

    return (
        <div
            className={`${isCarousel ? 'flex-[0_0_auto]' : 'grid-cols-1'}`} 
            onClick={isActive ? () => handleLectureClick(lecture) : onClick}
        >
            <div className={`card__selector flex flex-col rounded-[20px] p-4 bg-light 
                shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)] cursor-pointer 
                transition duration-180 ease-out-[0.2,0.8,0.2,1] ${isCarousel ? 'mr-4 w-72 lg:w-148' : 'w-full'}
                hover:bg-[#F7F7F7] hover:shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]`}
            >
                <div 
                    className={`relative mb-4 rounded-xl w-full h-64 ${isCarousel && 'lg:w-140'} 
                        lg:h-[315px] bg-cover bg-center bg-no-repeat`}
                    style={{ backgroundImage: `url(${lecture.images[0]})`}}
                >
                    <span className="absolute left-3 top-3 rounded-xl px-3 py-1 
                        bg-light font-medium text-[12px] text-dark"
                    >
                        New
                    </span>
                </div>
                <div className={`flex flex-col gap-3 mb-8 ${isActive ? 'min-h-[99px]' : 'min-h-[79px]'}`}>
                    <p className="font-semibold text-[18px] text-dark leading-[22px]">
                        {lecture.title}
                    </p>
                    <p className="font-normal text-[14px] leading-[160%] text-grey line-clamp-2">
                        {lecture.texts[0]}
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
                        >
                            {t('buy_button')}
                        </Button>
                    }
                    
                    <div className="hidden lg:flex gap-2">
                        <Icon className="fill-dark" name="eye"/>
                        <p className="font-normal text-[16px] uppercase text-dark">
                            454
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}