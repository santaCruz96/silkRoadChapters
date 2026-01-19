import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import { IPaidLecture } from "../interfaces/PaidLecture.interface";

export interface PaidLectureCardProps 
    extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
        lecture: IPaidLecture,
        isActive: boolean,
        isCarousel?: boolean
        isBought?: boolean
}