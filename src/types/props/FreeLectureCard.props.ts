import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import { FreeLecture } from "../interfaces/FreeLecture.interface";

export interface FreeLectureCardProps 
    extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
        lecture: FreeLecture,
        isCarousel?: boolean,
        grid?: string
}