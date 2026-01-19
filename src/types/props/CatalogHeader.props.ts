import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CatalogHeaderProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        page: string,
}