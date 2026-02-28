import { DetailedHTMLProps, HTMLAttributes } from "react";
import { PaidLecture } from "../interfaces/PaidLecture.interface";

export interface PaidLecturesSliderProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        lectures: PaidLecture[];
        page?: string;
}