// import Icon from "@/icons/Icon";
import { PaidLecture } from "@/types/interfaces/PaidLecture.interface";
import { getLocale } from "next-intl/server";

export interface PaymentLectureCardProps {
    specificLecture: PaidLecture
}

export default async function PaymentLectureCard({specificLecture}: PaymentLectureCardProps) {
    const locale = await getLocale();
    const title = locale === 'ru' ? specificLecture.titleRu : specificLecture.titleEn;
    const description = locale === 'ru' ? specificLecture.shortDescriptionRu : specificLecture.shortDescriptionEn;
    
    return (
        <div className="col-span-1 sm:col-span-4 lg:col-span-5 rounded-[20px] sm:rounded-[30px] p-4 pt-4 bg-light flex flex-col lg:flex-row gap-4
            shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]"
        >
            <div 
                className={`rounded-[20px] w-full h-74 lg:w-106 lg:h-59.75 bg-cover bg-center bg-no-repeat`}
                style={'coverImageUrl' in specificLecture ? 
                    { backgroundImage: `url(${specificLecture.coverImageUrl})`}
                    :
                    { background: '#b3b3b3' }
                }
            />
            <div className="flex flex-col gap-8 lg:gap-0 sm:justify-between lg:max-w-68">
                <div className="flex flex-col gap-1.75 h-22.5">
                    <h3 className="font-semibold text-[18px] leading-5.25 text-dark">
                        {title}
                    </h3>
                    <p className="font-normal text-[14px] leading-[160%] text-grey h-auto line-clamp-2">
                        {description?.replace(/<[^>]*>?/gm, ' ')}                 
                    </p>
                </div>
                {/* <div className="flex gap-22.25">
                    <div className="flex items-center gap-2">
                        <Icon className="fill-dark" name="eye"/>
                        <p className="font-normal text-[16px] uppercase text-dark">
                            {specificLecture.popularityCount}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon className="fill-dark" name="like"/>
                        <p className="font-normal text-[16px] uppercase text-dark">
                            {specificLecture.likesCount}
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}