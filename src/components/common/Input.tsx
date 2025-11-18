import { JSX } from "react";
import { InputProps } from "@/interfaces/Input.props";

export default function Input({
    className, 
    placeholder, 
    name, 
    type, 
    ...props
}:InputProps): JSX.Element {
    return (
        <input 
            className={className} 
            name={name}
            type={type} 
            placeholder={placeholder}
            {...props} 
        />
    )
}