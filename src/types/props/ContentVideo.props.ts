import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ContentVideoProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        image?: string,
}