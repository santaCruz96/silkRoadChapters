import { DetailedHTMLProps, HTMLAttributes } from "react";
import { PaidLecture } from "../interfaces/PaidLecture.interface";
import { PurchasesLecture } from "../api/purchasesLecture";

export interface PaidLecturesSliderProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        lectures: PaidLecture[];
        page?: string;
        purchasesLectures: PurchasesLecture[] | null;
}