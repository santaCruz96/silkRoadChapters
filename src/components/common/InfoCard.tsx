import { InfoCardProps } from "@/interfaces/InfoCard.props";
import Square from "./Square";
import Icon from "@/icons/Icon";

export default function InfoCard({
    size, 
    icon, 
    title, 
    text,
    ...props
}: InfoCardProps) {

    return (
        <div 
            className={`${size} rounded-[30px] py-8 px-4 pt-4 bg-light
                shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]`}
            {...props}
        >
            <Square>
                <Icon className="fill-dark w-8 h-8" name={icon}/>
            </Square>
            <div className="flex flex-col gap-[7px] mt-16">
                <h3 className="font-semibold text-[18px] leading-[21px] text-dark">{title}</h3>
                <p className="font-normal text-[14px] leading-[160%] text-grey">{text}</p>
            </div>
        </div> 
    )
}