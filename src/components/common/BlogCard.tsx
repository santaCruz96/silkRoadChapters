import { JSX } from "react";
import { BlogCardProps } from "@/interfaces/BlogCard.props";
import Icon from "@/icons/Icon";

export default function BlogCard({isActive, ...props}: BlogCardProps):JSX.Element {

    return (
        <div 
            className="flex-[0_0_auto]" 
            {...props}
        >
            <div 
                className="relative card__selector bg-image rounded-[30px] h-[505px] w-4xl
                    flex flex-col select-none -mx-7 p-8 cursor-pointer overflow-hidden" 
            >   
                
                <div className="absolute top-0 left-0 w-full h-full transition 
                    duration-180 ease-out-[0.2,0.8,0.2,1] hover:bg-[rgba(0,0,0,0.1)]"
                ></div>
                {isActive && 
                    <div className="flex flex-col justify-between h-full">
                        <p className="font-semibold text-[32px] text-light">Card_Title_Big</p>
                        <div className="flex justify-between">
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
        </div>
    )
}