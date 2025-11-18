import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface SquareProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        children?: ReactNode
}