import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps 
    extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
        className: string,
        placeholder?: string,
        name: string,
        type: string
    }