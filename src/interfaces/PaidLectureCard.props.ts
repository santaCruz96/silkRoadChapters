import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PaidLectureCardProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        isActive: boolean
}