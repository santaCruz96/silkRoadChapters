import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import { IFreeLecture } from "../interfaces/FreeLecture.interface";

export interface FreeLectureCardProps 
    extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
        lecture: IFreeLecture,
        isCarousel?: boolean,
        grid?: string
}