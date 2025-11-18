import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BlogCardProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        isActive: boolean,
        
}