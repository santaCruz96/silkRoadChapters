import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { PaidLecture } from "../interfaces/PaidLecture.interface";

export interface PaidLectureCardProps 
    extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
        lecture: PaidLecture,
        isActive: boolean,
        isCarousel?: boolean,
        isBought?: boolean
}