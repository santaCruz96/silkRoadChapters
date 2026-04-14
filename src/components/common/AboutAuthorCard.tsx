import Image from "next/image"
import { AboutAuthorCardProps } from "@/types/props/AboutAuthorCard.props"

export default function AboutAuthorCard({
    image,
    ...props
}: AboutAuthorCardProps) {
    
    return (
        <div 
            className="flex-[0_0_auto]"
            {...props}
        >
            <div 
                className="relative card__selector bg-cover bg-center bg-no-repeat min-h-[333px] ${size()}
                    w-72 h-[459px] mx-2 rounded-[20px] lg:h-[505px] lg:w-4xl lg:rounded-[30px] lg:-mx-7
                    flex flex-col select-none py-8 px-4 lg:p-8 cursor-pointer overflow-hidden"
            >
                <Image src={image} alt="" fill priority className="object-cover" />
                {/* <div className="absolute top-0 left-0 w-full h-full transition 
                    duration-180 ease-out-[0.2,0.8,0.2,1] hover:bg-[rgba(0,0,0,0.1)]"
                /> */}
            </div>
        </div>
    )
}