import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IDetails } from "../interfaces/PaidLecture.interface";

export interface DetailsCardProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        isPaid?: boolean,
        details?: IDetails
}