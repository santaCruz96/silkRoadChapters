import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IReview } from "../interfaces/Review.interface";

export interface ReviewProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        review: IReview
}