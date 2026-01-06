import Icon from "@/icons/Icon";
import { PaidLectureCardProps } from "@/interfaces/PaidLectureCard.props";
import Button from "./Button";
import Link from "next/link";

export default function PaidLectureCard({
    cardId,
    isActive, 
    isCarousel, 
    isBought, 
    ...props
}: PaidLectureCardProps ) {

    return (
        <Link 
            href={isActive ? `/paid/${cardId}` : '#'}
            className={`${isCarousel ? 'flex-[0_0_auto]' : 'grid-cols-1'}`} 
            {...props}
        >
            <div className={`card__selector flex flex-col rounded-[20px] p-4 bg-light 
                shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)] cursor-pointer 
                transition duration-180 ease-out-[0.2,0.8,0.2,1] ${isCarousel ? 'mr-4 w-72 lg:w-148' : 'w-full'}
                hover:bg-[#F7F7F7] hover:shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]`}
            >
                <div className={`relative mb-4 rounded-xl w-full h-64 ${isCarousel && 'lg:w-140'} lg:h-[315px] bg-image`}>
                    <span className="absolute left-3 top-3 rounded-xl px-3 py-1 
                        bg-light font-medium text-[12px] text-dark"
                    >
                        New
                    </span>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-semibold text-[18px] text-dark leading-[22px]">
                        Card_Title_Small
                    </p>
                    <p className="h-[65px] font-normal text-[14px] leading-[160%] text-grey">
                        Card_Body
                    </p>
                </div>
                <div className={`flex w-full justify-between items-center
                    transition-all duration-300 ease-in-out
                    ${isActive ? 'h-14 opacity-100 mt-8' : 'h-0 opacity-0 mt-4 overflow-hidden'}`}
                >   
                    {isBought ? 
                        <Button 
                            color="stroke" 
                            size="xl"
                            form="round"
                            icon='verifiedCheck'
                        >
                            Purchased
                        </Button>
                    :
                        <Button 
                            color="dark" 
                            size="xl"
                            form="round"
                            icon='cart'
                            hover="primary"
                        >
                            Buy
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
        </Link>
    )
}