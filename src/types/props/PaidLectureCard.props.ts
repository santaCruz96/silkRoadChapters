import { DetailedHTMLProps, HTMLAttributes, MouseEventHandler } from "react";
import { IPaidLecture } from "../interfaces/PaidLecture.interface";

export interface PaidLectureCardProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        lecture: IPaidLecture,
        isActive: boolean,
        isCarousel?: boolean,
        isBought?: boolean,
        onClick?: MouseEventHandler<HTMLDivElement>
}