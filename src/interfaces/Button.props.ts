import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { IconName } from "@/icons/iconMap";

type ButtonColor = 'dark' | 'stroke' | 'light' | 'red'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full'

export interface ButtonProps 
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
        color: ButtonColor,
        size: ButtonSize,
        form: 'square' | 'round',
        icon?: IconName,
        shadow?: boolean,
        isDisabled?: boolean, 
        hover?: string,
        children?: ReactNode
}