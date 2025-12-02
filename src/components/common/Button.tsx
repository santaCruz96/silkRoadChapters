"use client";

import { useState } from "react"
import { ButtonProps } from "../../interfaces/Button.props";
import Icon from "@/icons/Icon";

export default function Button({
    color = 'dark', 
    size = 'sm', 
    form,
    icon,
    iconSize = 'small',
    shadow,
    isDisabled,
    hover,
    children, 
    ...props
}: ButtonProps) {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const buttonColor: Record<string, string> = {
        dark: 'bg-dark text-light',
        stroke: 'bg-stroke text-dark',
        light: 'bg-light text-dark',
        red: 'bg-light text-accent-alert',
        empty: 'bg-transparent text-dark',
        lightGrey: 'bg-background text-dark border border-stroke'
    }

    const buttonSize: Record<string, string> = {
        xs: 'w-[60px] h-[60px] text-[18px]',
        sm: 'w-31 py-3 text-[12px]',
        md: 'w-31 py-3 text-[12px]',
        lg: 'w-34 py-3 text-[12px]',
        xl: 'w-68 py-4 text-[16px]',
        xxl: 'w-72 py-4 text-[16px]',
        full: 'w-full py-4 text-[16px]'
    }

    const buttonForm: Record<string, string> = {
        square: 'rounded-xl',
        round: 'rounded-[100px]'
    }

    const hoverOptions: Record<string, string> = {
        primary: 'transition duration-180 ease-out-[0.2,0.8,0.2,1] hover:bg-black hover:scale-102 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.25)]',
        secondary: 'transition duration-180 ease-out-[0.2,0.8,0.2,1] hover:bg-[#F7F7F7] hover:text-black hover:scale-102 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_10px_rgba(0,0,0,0.04)]',
        headerPrimary: 'transition duration-180 ease-out-[0.2,0.8,0.2,1] hover:bg-[#393939]',
        headerSecondary: 'transition duration-180 ease-out-[0.2,0.8,0.2,1] hover:bg-[#CFCFCF]',
        smallSquare: 'transition duration-180 ease-out-[0.2,0.8,0.2,1] hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_10px_rgba(0,0,0,0.12)]',
        delete: 'transition duration-180 ease-out-[0.2,0.8,0.2,1] hover:bg-[#F28B82] hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_10px_rgba(0,0,0,0.12)]',
        contentButton: 'transition duration-180 ease-out-[0.2,0.8,0.2,1] hover:bg-[#E6E6E6]'
    }

    const iconColor: Record<string, string> = {
        dark: 'fill-light',
        light: `transition ${isHovered ? 'fill-black' : 'fill-dark'}`,
        red: `transition ${isHovered ? 'fill-light' : 'fill-accent-alert'}`
    }

    const sizeIcon: Record<string, string> = {
        small: 'w-6 h-6',
        big: 'w-8 h-8'
    }

    return (
        <button 
            className={`cursor-pointer ${buttonForm[form]} ${buttonSize[size]} ${buttonColor[color]} font-bold flex items-center justify-center 
                ${isDisabled && 'opacity-30'} ${shadow && 'shadow-[0_4px_10px_0_rgba(0,0,0,0.04),0_1px_2px_0_rgba(0,0,0,0.06)]'}
                ${hover ? hoverOptions[hover] : ''}`} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {icon ? 
                <div className="flex items-center justify-center gap-2">
                    <Icon name={icon} className={`${iconColor[color]} ${sizeIcon[iconSize]}`}/>
                    {children}
                </div>
            :
                children
            }
            
        </button>
    )
}