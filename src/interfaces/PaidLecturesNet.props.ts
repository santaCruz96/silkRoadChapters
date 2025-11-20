import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PaidLecturesNetProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        page: 'catalog' | 'account'
}