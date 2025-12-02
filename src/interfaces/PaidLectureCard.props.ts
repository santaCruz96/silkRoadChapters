import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export interface PaidLectureCardProps 
    extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
        cardId: number,
        isActive: boolean,
        isCarousel?: boolean
        isBought?: boolean
}