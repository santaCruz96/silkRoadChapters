import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { IconName } from "@/icons/iconMap";

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full'

export interface ButtonProps 
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
        color: 'dark' | 'stroke' | 'light',
        size: ButtonSize,
        form: 'square' | 'round',
        icon?: IconName,
        shadow?: boolean,
        isDisabled?: boolean, 
        hover?: string,
        children: ReactNode
}