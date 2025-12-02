import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export interface BlogCardProps 
    extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
        cardId: number,
        isActive?: boolean,
        isCarousel?: boolean,
        grid?: string
}