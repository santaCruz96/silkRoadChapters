import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ContentCardsProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        numberOfCards: number
}