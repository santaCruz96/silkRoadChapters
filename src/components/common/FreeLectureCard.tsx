import { JSX } from "react";
import Icon from "@/icons/Icon";
import { FreeLectureCardProps } from "@/interfaces/FreeLectureCard.props";

export default function FreeLectureCard({size}: FreeLectureCardProps ): JSX.Element {
    
    const cardSize: Record<string, string> = {
        small: 'w-72 mr-4 last:mr-0',
        big: 'w-148 mr-4'
    }

    const imageSize: Record<string, string> = {
        small: 'w-64',
        big: 'w-140'
    }

    return (
        <div className={`card__selector flex flex-col rounded-[20px] p-4 bg-light ${cardSize[size]}
            shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)] cursor-pointer
            transition duration-180 ease-out-[0.2,0.8,0.2,1]
            hover:bg-[#F7F7F7] hover:shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]`}
        >
            <div className={`relative mb-4 rounded-xl ${imageSize[size]} h-64 bg-image`}>
                <span className="absolute left-3 top-3 rounded-xl px-3 py-1 
                    bg-light font-medium text-[12px] text-dark"
                >
                    New
                </span>
            </div>
            <div className="flex flex-col gap-3 mb-8">
                <p className="font-semibold text-[18px] text-dark leading-[22px]">
                    Card_Title_Small
                </p>
                <p className="h-[65px] font-normal text-[14px] leading-[160%] text-grey">
                    Card_Body
                </p>
            </div>
            <div className="flex w-full justify-end items-center">
                <div className="flex gap-2">
                    <Icon className="fill-dark" name="eye"/>
                    <p className="font-normal text-[16px] uppercase text-dark">
                        454
                    </p>
                </div>
            </div> 
        </div>
    )
}