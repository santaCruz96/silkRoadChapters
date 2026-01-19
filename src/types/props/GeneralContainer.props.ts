import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface GeneralContainerProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        indentTop?: string,
        children: ReactNode
}