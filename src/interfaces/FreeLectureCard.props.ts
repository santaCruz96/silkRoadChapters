import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export interface FreeLectureCardProps 
    extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
        cardId: number,
        isCarousel?: boolean,
        grid?: string
}