import { DetailedHTMLProps, HTMLAttributes } from "react";
import { PaidLecture } from "../interfaces/PaidLecture.interface";
import { PurchasesLecture } from "../api/purchasesLecture";

export interface PaidLecturesNetProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        lectures: PaidLecture[],
        page: string,
        cardsPerPage: number,
        purchasesLectures: PurchasesLecture[] | null
}