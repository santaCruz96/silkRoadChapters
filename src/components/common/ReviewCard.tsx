import Image from "next/image";
import { ReviewProps } from "@/types/props/Review.props";

export default function ReviewCard({review}: ReviewProps) {
    return (
        <div className="flex flex-col rounded-[20px] p-4 bg-light gap-4 min-w-72 lg:w-110
            shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]"
        >
            <p className="italic font-normal text-[16px] leading-[150%] text-grey h-[412px] lg:h-[252px]">
                {review.text}
            </p>
            <div className="flex justify-between">
                <p className="w-46 font-semibold text-[18px] leading-[150%] text-dark">
                    {review.name}
                </p>
                <div 
                    className="relative flex items-center justify-center rounded-xl 
                        w-15 h-15 overflow-hidden"
                >
                    <Image src={review.avatar} alt="" fill className="object-cover" />
                </div>
            </div>
        </div>
    )
}