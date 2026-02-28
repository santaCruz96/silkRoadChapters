import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DetailsCardProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        entityType: number;
        isAuthenticated: boolean;
}