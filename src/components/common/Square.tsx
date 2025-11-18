import { JSX } from "react";
import { SquareProps } from "@/interfaces/Square.props";

export default function Square({children, ...props}: SquareProps): JSX.Element {
    return (
        <div 
            className="flex items-center justify-center border 
                border-stroke rounded-xl w-[60px] h-[60px] bg-background"
            {...props}
        >
            {children}
        </div>
    )
}