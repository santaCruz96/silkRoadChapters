import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FreeLectureCardProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        isCarousel?: boolean,
        grid?: string
}