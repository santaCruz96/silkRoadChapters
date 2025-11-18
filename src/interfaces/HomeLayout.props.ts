import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface HomeLayoutProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        children: ReactNode
}