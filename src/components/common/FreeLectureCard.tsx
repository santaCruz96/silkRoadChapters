import Icon from "@/icons/Icon";
import { FreeLectureCardProps } from "@/types/props/FreeLectureCard.props";
import Link from "next/link";

export default function FreeLectureCard({lecture, isCarousel, grid}: FreeLectureCardProps ) {

    const margin = () => {
        if (isCarousel) {
            return 'mr-4 last:mr-0'
        }
    }

    return (
        <Link 
            href={`/free/${lecture.id}`}
            className={`card__selector flex flex-col rounded-[20px] p-4 bg-light min-w-72 ${margin()}
                shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)] cursor-pointer
                transition duration-180 ease-out-[0.2,0.8,0.2,1] ${grid}
                hover:bg-[#F7F7F7] hover:shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]`}
        >
            <div 
                className="relative mb-4 rounded-xl w-full h-64 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${lecture.images[0]})`}}
            >
                <span className="absolute left-3 top-3 rounded-xl px-3 py-1 
                    bg-light font-medium text-[12px] text-dark"
                >
                    New
                </span>
            </div>
            <div className="flex flex-col max-h-[99px] gap-3 mb-8">
                <p className="font-semibold text-[18px] text-dark leading-[22px]">
                    {lecture.title}
                </p>
                <p className="font-normal text-[14px] leading-[160%] text-grey line-clamp-2">
                    {lecture.text[0]}
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
        </Link>
    )
}