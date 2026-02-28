import { DetailedHTMLProps, HTMLAttributes } from "react";
import { PaidLecture } from "../interfaces/PaidLecture.interface";

export interface PaidLecturesNetProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        lectures: PaidLecture[],
        page: string,
        cardsPerPage: number
}