import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AboutAuthorCardProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        image: string
}