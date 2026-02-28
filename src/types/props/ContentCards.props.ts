import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Image } from "../interfaces/Blog.interface";

export interface ContentCardsProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        numberOfCards: number,
        images?: Image[],
        image?: string
}