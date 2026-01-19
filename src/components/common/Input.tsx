import { InputProps } from "@/types/props/Input.props";

export default function Input({
    className, 
    placeholder, 
    name, 
    type, 
    ...props
}:InputProps) {
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