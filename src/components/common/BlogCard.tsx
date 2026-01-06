import { BlogCardProps } from "@/interfaces/BlogCard.props";
import Icon from "@/icons/Icon";
import Link from "next/link";

export default function BlogCard({cardId, isActive, isCarousel, grid, ...props}: BlogCardProps) {

    const size = () => {
        if (isCarousel) {
            return 'w-72 h-[459px] mx-2 rounded-[20px] lg:h-[505px] lg:w-4xl lg:rounded-[30px] lg:-mx-7'
        } else {
            return 'w-full h-[523px] lg:h-full rounded-[20px]'
        }
    }

    const fontSize = () => {
        if (isCarousel) {
            return 'text-[32px]'
        } else {
            return 'text-[24px]'
        }
    }

    return (
            <Link 
                href={isActive ? `/blog/${cardId}` : `#`}
                className={`flex-[0_0_auto] ${grid}`} 
                {...props}
            >
                <div 
                    className={`relative card__selector bg-image min-h-[333px] ${size()}
                        flex flex-col select-none py-8 px-4 lg:p-8 cursor-pointer overflow-hidden`}
                >   
                    <div className="absolute top-0 left-0 w-full h-full transition 
                        duration-180 ease-out-[0.2,0.8,0.2,1] hover:bg-[rgba(0,0,0,0.1)]"
                    ></div>
                    {isActive && 
                        <div className="flex flex-col justify-between h-full">
                            <p className={`font-semibold ${fontSize()} text-light`}>Card_Title_Big</p>
                            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                                <div className="flex items-center gap-2">
                                    <Icon name="mapPoint" className="fill-light"/>
                                    <p className="italic font-normal text-[16px] capitalize text-light">Card_Location</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon name="eye" className="fill-light"/>
                                    <p className="font-normal text-[16px] uppercase text-light">454</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </Link>
    )
}