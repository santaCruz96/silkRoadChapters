import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FreeLecture } from "../interfaces/FreeLecture.interface";

export interface FreeLecturesNetProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        lectures: FreeLecture[],
        page: string,
        cardsPerPage: number
}